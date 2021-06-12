module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },
      padding: {
        '120': '120px',
      }
    },
    colors: {
      transparent: 'transparent',
      basic: '#F9F9F7',
      primary: {
        DEFAULT: '#5DFBD7',
        100: '#DEFEEB',
        200: '#BEFEDD',
        300: '#9DFDD5',
        400: '#85FCD5',
        500: '#5DFBD7',
        600: '#43D7C4',
        700: '#2EB4AF',
        800: '#1D8A91',
        900: '#116878',
      },
      secondary: {
        DEFAULT: '#5c5bfd',
        50:  '#f6f9fb',
        100: '#e3f0fd',
        200: '#c6d8fb',
        300: '#9eb4f4',
        400: '#7d8cec',
        500: '#5c5bfd',
        600: '#544bdb',
        700: '#4038bd',
        800: '#2d278f',
        900: '#19185b',
      },
      accent1: {
        DEFAULT: '#00A6FF',
        100: '#CCFAFF',
        200: '#99EEFF',
        300: '#66DCFF',
        400: '#3FC8FF',
        500: '#00A6FF',
        600: '#0080DB',
        700: '#0060B7',
        800: '#004493',
        900: '#00307A',
      },
      accent2: {
        DEFAULT: '#5C5BFD',
        100: '#DEDEFE',
        200: '#BEBDFE',
        300: '#9D9CFE',
        400: '#8483FD',
        500: '#5C5BFD',
        600: '#4342D9',
        700: '#2E2DB6',
        800: '#1D1D92',
        900: '#111179',
      },
      green: {
        DEFAULT: '#48B72A',
        100: '#E8FBD4',
        200: '#CCF7AB',
        300: '#A4E97D',
        400: '#7CD359',
        500: '#48B72A',
        600: '#309D1E',
        700: '#1C8315',
        800: '#0D6A0E',
        900: '#08570E',
      },
      blue: {
        DEFAULT: '#3BB7F9',
        100: '#D7FBFE',
        200: '#B0F2FE',
        300: '#89E3FD',
        400: '#6BD2FB',
        500: '#3BB7F9',
        600: '#2B8FD6',
        700: '#1D6CB3',
        800: '#124C90',
        900: '#0B3677',
      },
      orange: {
        DEFAULT: '#FFCE0C',
        100: '#FFF9CE',
        200: '#FFF19D',
        300: '#FFE76D',
        400: '#FFDE48',
        500: '#FFCE0C',
        600: '#DBAC08',
        700: '#B78C06',
        800: '#936D03',
        900: '#7A5802',
      },
      red: {
        DEFAULT: '#FF5238',
        100: '#FFE8D7',
        200: '#FFCCAF',
        300: '#FFAA87',
        400: '#FF8969',
        500: '#FF5238',
        600: '#DB3228',
        700: '#B71C20',
        800: '#93111F',
        900: '#7A0A1F',
      },
      gray: {
        DEFAULT: '#6B7280',
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      black: '#000000',
      white: '#FFFFFF',
    }
  },
  variants: {},
  plugins: [],
}
