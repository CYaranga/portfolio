/**
 * Theme System Types
 *
 * Enterprise-level color management with type safety
 */

// Base color palette from design system
export interface ColorPalette {
  palladian: string;
  oatmeal: string;
  blueFantastic: string;
  burningFlame: string;
  truffleTrouble: string;
  abyssalBlue: string;
}

// Semantic color tokens for UI elements
export interface SemanticColors {
  // Backgrounds
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    dark: string;
  };

  // Text colors
  text: {
    primary: string;
    secondary: string;
    onDark: string;
    onLight: string;
  };

  // Accent colors
  accent: {
    primary: string;
    secondary: string;
  };

  // UI elements
  surface: {
    default: string;
    elevated: string;
    overlay: string;
  };

  // Interactive states
  interactive: {
    default: string;
    hover: string;
    active: string;
  };

  // Borders
  border: {
    light: string;
    default: string;
    dark: string;
  };
}

export interface Theme {
  name: string;
  colors: ColorPalette;
  semantic: SemanticColors;
}

export type ThemeMode = 'light' | 'dark';
