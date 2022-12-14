import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  config,
  theme,
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',

      gray100: '#e1e1e6',
      gray300: '#c4c4cc',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#00b37e',
      green500: '#00875f',

      red300: '#ff4d4f',

      blue500: '#1E6DC7',

      purple700: '#402BAB',

      primary: '#8E31AA',
    },
    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
    fontWeights: {
      medium: '500',
      semibold: '600',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  themeMap: {
    ...defaultThemeMap,
  },
});
