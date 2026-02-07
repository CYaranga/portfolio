import React from 'react';
import type { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './features/home/views/Home';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
