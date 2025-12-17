/**
 * Color Palette
 *
 * Base colors extracted from design system
 * Reference: MP072 Color Palette
 */

import type { ColorPalette, SemanticColors, Theme } from './types';

/**
 * Base color palette - raw hex values
 * These should rarely be used directly; prefer semantic tokens
 */
export const colorPalette: ColorPalette = {
  palladian: '#EEE9DF',      // Light warm beige
  oatmeal: '#C9C1B1',        // Medium neutral gray-beige
  blueFantastic: '#2C3B4D',  // Dark blue
  burningFlame: '#FFB162',   // Vibrant orange
  truffleTrouble: '#A35139', // Rust/brown
  abyssalBlue: '#1B2632',    // Very dark blue/navy
};

/**
 * Semantic color tokens
 * Use these throughout the application for consistency
 */
export const semanticColors: SemanticColors = {
  background: {
    primary: colorPalette.palladian,      // Main background
    secondary: colorPalette.oatmeal,      // Secondary sections
    tertiary: colorPalette.blueFantastic, // Dark sections/cards
    dark: colorPalette.abyssalBlue,       // Darkest background
  },

  text: {
    primary: colorPalette.abyssalBlue,    // Main text color
    secondary: colorPalette.blueFantastic, // Secondary text
    onDark: colorPalette.palladian,       // Text on dark backgrounds
    onLight: colorPalette.abyssalBlue,    // Text on light backgrounds
  },

  accent: {
    primary: colorPalette.burningFlame,   // Primary accent (CTA, highlights)
    secondary: colorPalette.truffleTrouble, // Secondary accent
  },

  surface: {
    default: colorPalette.palladian,      // Default surface
    elevated: colorPalette.oatmeal,       // Cards, elevated surfaces
    overlay: colorPalette.blueFantastic,  // Modals, overlays
  },

  interactive: {
    default: colorPalette.burningFlame,   // Default interactive state
    hover: colorPalette.truffleTrouble,   // Hover state
    active: colorPalette.blueFantastic,   // Active/selected state
  },

  border: {
    light: colorPalette.oatmeal,          // Subtle borders
    default: colorPalette.blueFantastic,  // Default borders
    dark: colorPalette.abyssalBlue,       // Prominent borders
  },
};

/**
 * Default theme configuration
 */
export const defaultTheme: Theme = {
  name: 'default',
  colors: colorPalette,
  semantic: semanticColors,
};

/**
 * CSS Custom Property names
 * Map theme tokens to CSS variables
 */
export const cssVariables = {
  // Base colors
  palladian: '--color-palladian',
  oatmeal: '--color-oatmeal',
  blueFantastic: '--color-blue-fantastic',
  burningFlame: '--color-burning-flame',
  truffleTrouble: '--color-truffle-trouble',
  abyssalBlue: '--color-abyssal-blue',

  // Semantic tokens
  bgPrimary: '--color-bg-primary',
  bgSecondary: '--color-bg-secondary',
  bgTertiary: '--color-bg-tertiary',
  bgDark: '--color-bg-dark',

  textPrimary: '--color-text-primary',
  textSecondary: '--color-text-secondary',
  textOnDark: '--color-text-on-dark',
  textOnLight: '--color-text-on-light',

  accentPrimary: '--color-accent-primary',
  accentSecondary: '--color-accent-secondary',

  surfaceDefault: '--color-surface-default',
  surfaceElevated: '--color-surface-elevated',
  surfaceOverlay: '--color-surface-overlay',

  interactiveDefault: '--color-interactive-default',
  interactiveHover: '--color-interactive-hover',
  interactiveActive: '--color-interactive-active',

  borderLight: '--color-border-light',
  borderDefault: '--color-border-default',
  borderDark: '--color-border-dark',
} as const;
