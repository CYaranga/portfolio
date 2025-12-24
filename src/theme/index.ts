/**
 * Theme System
 *
 * Enterprise-level color management for portfolio application
 *
 * @example
 * ```tsx
 * import { ThemeProvider, useTheme, cssVars } from '@/theme';
 *
 * // In your root component
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 *
 * // In any component
 * const { theme } = useTheme();
 * const colors = useColors();
 *
 * // In inline styles
 * <div style={{ color: cssVars.text.primary }}>Hello</div>
 *
 * // In CSS
 * .my-element {
 *   color: var(--color-text-primary);
 * }
 * ```
 */

// Core types
export type { ColorPalette, SemanticColors, Theme, ThemeMode } from './types';

// Color definitions
export {
  colorPalette,
  semanticColors,
  defaultTheme,
  cssVariables,
} from './colors';

// CSS Variables
export {
  generateCSSVariables,
  cssVar,
  cssVars,
} from './cssVariables';

// Theme Provider & Hooks
export {
  ThemeProvider,
  useTheme,
  useColors,
  useSemanticColors,
} from './ThemeProvider';

// Utility functions
export {
  hexToRgb,
  hexToRgba,
  withOpacity,
  getContrastRatio,
  meetsAccessibilityStandard,
  isColorPaletteKey,
  createGradient,
  createShadow,
} from './utils';
