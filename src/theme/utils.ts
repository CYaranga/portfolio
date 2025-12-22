/**
 * Theme Utility Functions
 *
 * Helper functions for working with colors and theme
 */

import type { ColorPalette, SemanticColors } from './types';

/**
 * Convert hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert hex color to RGBA string
 */
export function hexToRgba(hex: string, alpha: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

/**
 * Add opacity to a color
 */
export function withOpacity(color: string, opacity: number): string {
  return hexToRgba(color, opacity);
}

/**
 * Get contrast ratio between two colors (for accessibility)
 */
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (hex: string): number => {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;

    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
      const normalized = val / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if a color meets WCAG AA accessibility standards
 */
export function meetsAccessibilityStandard(
  foreground: string,
  background: string,
  isLargeText: boolean = false
): boolean {
  const ratio = getContrastRatio(foreground, background);
  const requiredRatio = isLargeText ? 3 : 4.5;
  return ratio >= requiredRatio;
}

/**
 * Type guard to check if a key is a valid color palette key
 */
export function isColorPaletteKey(key: string): key is keyof ColorPalette {
  return ['palladian', 'oatmeal', 'blueFantastic', 'burningFlame', 'truffleTrouble', 'abyssalBlue'].includes(key);
}

/**
 * Create a color gradient CSS string
 */
export function createGradient(
  color1: string,
  color2: string,
  direction: string = 'to right'
): string {
  return `linear-gradient(${direction}, ${color1}, ${color2})`;
}

/**
 * Create box shadow with theme color
 */
export function createShadow(color: string, blur: number = 10, spread: number = 0): string {
  const shadowColor = hexToRgba(color, 0.2);
  return `0 ${blur / 2}px ${blur}px ${spread}px ${shadowColor}`;
}
