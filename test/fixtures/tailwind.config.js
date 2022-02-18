module.exports = {
  content: [
    './src/**/*.html',
  ],
  presets: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      primary: '#0000ff',
      secondary: '#ff0000',
      light: '#f3f3f3',
      dark: '#252525'
    },
    backgroundColor: ({theme}) => theme('colors'),
    textColor: ({theme}) => theme('colors'),
    spacing: {
      'sm': '0.75em',
      'md': '1rem',
      'lg': '1.5rem',
    },
    fontSize: {
      'sm': '0.75em',
      'md': '1rem',
      'lg': '1.5rem',
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],
  plugins: [],
}
