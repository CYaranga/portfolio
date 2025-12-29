import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { routes } from './routes';
import { generateCSSVariables, defaultTheme } from './theme';
import { getStyles } from './styles';

interface Env {}

const { query, dataRoutes } = createStaticHandler(routes);

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		const pathname = url.pathname;

		if (pathname.startsWith('/api/')) {
			return handleApiRequest(pathname);
		}

		if (pathname.startsWith('/assets/') || pathname.endsWith('.js') || pathname.endsWith('.css')) {
			return new Response('Not found', { status: 404 });
		}

		return handleSSR(request);
	},
};

async function handleSSR(request: Request): Promise<Response> {
	try {
		const context = await query(request);
		if (context instanceof Response) return context;

		const router = createStaticRouter(dataRoutes, context);
		const html = renderToString(
			<React.StrictMode>
				<StaticRouterProvider router={router} context={context} />
			</React.StrictMode>
		);

		return new Response(generateHTML(html), {
			headers: { 'Content-Type': 'text/html;charset=UTF-8' },
		});
	} catch (error) {
		console.error('SSR Error:', error);
		return new Response('<html><body><h1>Server Error</h1></body></html>', {
			status: 500,
			headers: { 'Content-Type': 'text/html' },
		});
	}
}

function generateHTML(appHTML: string): string {
	const cssVariables = generateCSSVariables(defaultTheme);
	const styles = getStyles();

	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Chris Yaranga | Full-Stack Developer</title>
	<meta name="description" content="Full-Stack Developer specializing in React, TypeScript, and Cloud Technologies. Building modern web, mobile, and AR experiences." />
	<meta property="og:title" content="Chris Yaranga | Full-Stack Developer" />
	<meta property="og:description" content="Full-Stack Developer specializing in React, TypeScript, and Cloud Technologies." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://chrisyaranga.dev" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
	<style>${cssVariables}</style>
	<style>${styles}</style>
	<script>document.documentElement.classList.add('js');</script>
</head>
<body>
	<div id="root">${appHTML}</div>
	<script type="module" src="/client.js"></script>
</body>
</html>`;
}

function handleApiRequest(pathname: string): Response {
	if (pathname === '/api/message') {
		return new Response('Hello, World!', { headers: { 'Content-Type': 'text/plain' } });
	}
	if (pathname === '/api/random') {
		return new Response(crypto.randomUUID(), { headers: { 'Content-Type': 'text/plain' } });
	}
	return new Response('Not found', { status: 404 });
}
