import { createStitches } from '@stitches/react';

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
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
});
