import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Avenir Next',
      styles: ['300', '400', '500', '600', '700'],
    },
    {
      name: 'Helvetica',
      styles: ['300', '400', '500', '600', '700'],
    },
    {
      name: 'Roboto',
      styles: ['300', '400', '500', '600', '700'],
    },
    {
      name: 'sans-serif',
      styles: ['300', '400', '500', '600', '700'],
    },
  ],
  baseFontSize: '10px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Avenir Next', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Avenir Next', 'Roboto', 'sans-serif'],
});

// Export helper functions
// export const { scale, rhythm, options } = typography
export default typography;
