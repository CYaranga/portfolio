/**
 * CSS Variables Generator
 *
 * Generates CSS custom properties from theme tokens
 */

import type { Theme } from './types';
import { cssVariables } from './colors';

/**
 * Generate CSS custom properties string from theme
 */
export function generateCSSVariables(theme: Theme): string {
  return `
    :root {
      /* Base Color Palette */
      ${cssVariables.palladian}: ${theme.colors.palladian};
      ${cssVariables.oatmeal}: ${theme.colors.oatmeal};
      ${cssVariables.blueFantastic}: ${theme.colors.blueFantastic};
      ${cssVariables.burningFlame}: ${theme.colors.burningFlame};
      ${cssVariables.truffleTrouble}: ${theme.colors.truffleTrouble};
      ${cssVariables.abyssalBlue}: ${theme.colors.abyssalBlue};

      /* Semantic Tokens - Backgrounds */
      ${cssVariables.bgPrimary}: ${theme.semantic.background.primary};
      ${cssVariables.bgSecondary}: ${theme.semantic.background.secondary};
      ${cssVariables.bgTertiary}: ${theme.semantic.background.tertiary};
      ${cssVariables.bgDark}: ${theme.semantic.background.dark};

      /* Semantic Tokens - Text */
      ${cssVariables.textPrimary}: ${theme.semantic.text.primary};
      ${cssVariables.textSecondary}: ${theme.semantic.text.secondary};
      ${cssVariables.textOnDark}: ${theme.semantic.text.onDark};
      ${cssVariables.textOnLight}: ${theme.semantic.text.onLight};

      /* Semantic Tokens - Accents */
      ${cssVariables.accentPrimary}: ${theme.semantic.accent.primary};
      ${cssVariables.accentSecondary}: ${theme.semantic.accent.secondary};

      /* Semantic Tokens - Surfaces */
      ${cssVariables.surfaceDefault}: ${theme.semantic.surface.default};
      ${cssVariables.surfaceElevated}: ${theme.semantic.surface.elevated};
      ${cssVariables.surfaceOverlay}: ${theme.semantic.surface.overlay};

      /* Semantic Tokens - Interactive */
      ${cssVariables.interactiveDefault}: ${theme.semantic.interactive.default};
      ${cssVariables.interactiveHover}: ${theme.semantic.interactive.hover};
      ${cssVariables.interactiveActive}: ${theme.semantic.interactive.active};

      /* Semantic Tokens - Borders */
      ${cssVariables.borderLight}: ${theme.semantic.border.light};
      ${cssVariables.borderDefault}: ${theme.semantic.border.default};
      ${cssVariables.borderDark}: ${theme.semantic.border.dark};
    }
  `.trim();
}

/**
 * Helper to get CSS variable reference
 */
export function cssVar(variable: keyof typeof cssVariables): string {
  return `var(${cssVariables[variable]})`;
}

/**
 * Type-safe CSS variable object for inline styles
 */
export const cssVars = {
  // Base colors
  palladian: cssVar('palladian'),
  oatmeal: cssVar('oatmeal'),
  blueFantastic: cssVar('blueFantastic'),
  burningFlame: cssVar('burningFlame'),
  truffleTrouble: cssVar('truffleTrouble'),
  abyssalBlue: cssVar('abyssalBlue'),

  // Semantic tokens
  bg: {
    primary: cssVar('bgPrimary'),
    secondary: cssVar('bgSecondary'),
    tertiary: cssVar('bgTertiary'),
    dark: cssVar('bgDark'),
  },
  text: {
    primary: cssVar('textPrimary'),
    secondary: cssVar('textSecondary'),
    onDark: cssVar('textOnDark'),
    onLight: cssVar('textOnLight'),
  },
  accent: {
    primary: cssVar('accentPrimary'),
    secondary: cssVar('accentSecondary'),
  },
  surface: {
    default: cssVar('surfaceDefault'),
    elevated: cssVar('surfaceElevated'),
    overlay: cssVar('surfaceOverlay'),
  },
  interactive: {
    default: cssVar('interactiveDefault'),
    hover: cssVar('interactiveHover'),
    active: cssVar('interactiveActive'),
  },
  border: {
    light: cssVar('borderLight'),
    default: cssVar('borderDefault'),
    dark: cssVar('borderDark'),
  },
} as const;
