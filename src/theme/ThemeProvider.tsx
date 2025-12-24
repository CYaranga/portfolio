/**
 * Theme Provider
 *
 * Enterprise-level theme management with React Context
 */

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { Theme, ThemeMode } from './types';
import { defaultTheme } from './colors';
import { generateCSSVariables } from './cssVariables';

interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme;
  initialMode?: ThemeMode;
}

/**
 * Theme Provider Component
 *
 * Provides theme context to entire application
 * Manages theme state and CSS variable injection
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = defaultTheme,
  initialMode = 'light',
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      mode,
      setTheme,
      setMode,
      toggleMode,
    }),
    [theme, mode, toggleMode]
  );

  // Generate CSS variables for current theme
  const cssVariables = useMemo(() => generateCSSVariables(theme), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access theme context
 *
 * @throws {Error} If used outside of ThemeProvider
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

/**
 * Hook to access theme colors directly
 */
export function useColors() {
  const { theme } = useTheme();
  return theme.colors;
}

/**
 * Hook to access semantic colors directly
 */
export function useSemanticColors() {
  const { theme } = useTheme();
  return theme.semantic;
}
