# Theme System

Enterprise-level color management system for the portfolio application.

## Overview

This theme system provides:
- **Type-safe color tokens** with full TypeScript support
- **CSS custom properties** for global styling
- **Semantic naming** for maintainable code
- **React Context** for easy theme access
- **Utility functions** for color manipulation

## Color Palette

Based on the MP072 design system:

| Color Name | Hex | Usage |
|------------|-----|-------|
| Palladian | `#EEE9DF` | Light backgrounds, text on dark |
| Oatmeal | `#C9C1B1` | Secondary backgrounds, borders |
| Blue Fantastic | `#2C3B4D` | Dark sections, secondary text |
| Burning Flame | `#FFB162` | Primary accent, CTAs |
| Truffle Trouble | `#A35139` | Secondary accent, hover states |
| Abyssal Blue | `#1B2632` | Darkest backgrounds, primary text |

## Usage

### 1. Setup Theme Provider

Wrap your app with the `ThemeProvider`:

```tsx
import { ThemeProvider } from './theme';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Using Theme in Components

#### With Hooks

```tsx
import { useTheme, useColors, useSemanticColors } from './theme';

function MyComponent() {
  const { theme, mode, toggleMode } = useTheme();
  const colors = useColors();
  const semantic = useSemanticColors();

  return (
    <div style={{ backgroundColor: colors.palladian }}>
      <h1 style={{ color: semantic.text.primary }}>Hello</h1>
    </div>
  );
}
```

#### With CSS Variables

```tsx
import { cssVars } from './theme';

function MyComponent() {
  return (
    <div style={{
      backgroundColor: cssVars.bg.primary,
      color: cssVars.text.primary
    }}>
      Content
    </div>
  );
}
```

#### In CSS/Inline Styles

```css
.my-element {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-default);
}

.accent-button {
  background-color: var(--color-accent-primary);
  color: var(--color-text-on-dark);
}

.accent-button:hover {
  background-color: var(--color-accent-secondary);
}
```

### 3. Utility Functions

```tsx
import {
  withOpacity,
  createGradient,
  createShadow,
  getContrastRatio
} from './theme';

// Add opacity to colors
const transparentBackground = withOpacity('#EEE9DF', 0.8);

// Create gradients
const gradient = createGradient('#FFB162', '#A35139', 'to bottom');

// Create shadows
const shadow = createShadow('#1B2632', 10);

// Check accessibility
const ratio = getContrastRatio('#1B2632', '#EEE9DF'); // Should be > 4.5
```

## Semantic Token Reference

### Backgrounds
- `background.primary` - Main page background (Palladian)
- `background.secondary` - Secondary sections (Oatmeal)
- `background.tertiary` - Dark sections (Blue Fantastic)
- `background.dark` - Darkest areas (Abyssal Blue)

### Text
- `text.primary` - Main content text (Abyssal Blue)
- `text.secondary` - Secondary text (Blue Fantastic)
- `text.onDark` - Text on dark backgrounds (Palladian)
- `text.onLight` - Text on light backgrounds (Abyssal Blue)

### Accents
- `accent.primary` - Primary CTA color (Burning Flame)
- `accent.secondary` - Secondary accent (Truffle Trouble)

### Interactive
- `interactive.default` - Default interactive state (Burning Flame)
- `interactive.hover` - Hover state (Truffle Trouble)
- `interactive.active` - Active/selected state (Blue Fantastic)

### Borders
- `border.light` - Subtle borders (Oatmeal)
- `border.default` - Default borders (Blue Fantastic)
- `border.dark` - Prominent borders (Abyssal Blue)

## Best Practices

1. **Always use semantic tokens** instead of raw color values
   ```tsx
   // ✅ Good
   color: cssVars.text.primary

   // ❌ Avoid
   color: '#1B2632'
   ```

2. **Use CSS custom properties in CSS files**
   ```css
   /* ✅ Good - allows theming */
   .button { background: var(--color-accent-primary); }

   /* ❌ Avoid - hardcoded */
   .button { background: #FFB162; }
   ```

3. **Check accessibility** for text/background combinations
   ```tsx
   import { meetsAccessibilityStandard } from './theme';

   const isAccessible = meetsAccessibilityStandard(
     textColor,
     backgroundColor
   );
   ```

4. **Use utility functions** for color manipulation
   ```tsx
   // ✅ Good
   const shadow = createShadow(colors.abyssalBlue);

   // ❌ Avoid
   const shadow = '0 5px 10px rgba(27, 38, 50, 0.2)';
   ```

## TypeScript Support

All theme types are fully typed for autocomplete and type safety:

```tsx
import type { Theme, ColorPalette, SemanticColors } from './theme';

const customTheme: Theme = {
  name: 'custom',
  colors: { /* ... */ },
  semantic: { /* ... */ },
};
```

## Architecture

```
src/theme/
├── index.ts           # Main exports
├── types.ts           # TypeScript types
├── colors.ts          # Color definitions
├── cssVariables.ts    # CSS custom properties
├── ThemeProvider.tsx  # React context provider
├── utils.ts           # Utility functions
└── README.md          # Documentation
```
