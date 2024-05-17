module.exports = {
  mode: 'jit',
  purge: {
    // mode: 'all',
    // preserveHtmlElements: true,
    content: [
      './templates/**/*.json',
      './templates/*.json',
      './layout/*.liquid',
      './snippets/*.liquid',
      './sections/*.liquid',
      './scripts/**/*.js',
      './.eleventy.js',
      './lib/serializers.js',
    ],
    safelist: [
      'bg-owhite',
      'bg-orange',
      'bg-green',
      'bg-moss',
      'bg-hunter',
      'bg-red',
      'bg-pink',
      'bg-blue',
      'bg-robin',
      'col-span-8',
      'scale-[-1]',
      'right-[-15%]',
      'left-[-15%]',
      'rotate-90',
      '-rotate-90',
      'h-25',
      'gap-15',
      'rotate-45',
      'indent-[4rem]',
      'bg-glass',
      'm:bg-glass'
    ],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Ok', 'sans-serif'],
      serif: ['Malibu', 'serif'],
    },
    fontWeight: {
      400: 400,
      500: 500,
      700: 700,
    },
    letterSpacing: {
      tight: '-.02em',
      normal: '-.01em',
      wide: '.02em',
    },
    screens: {
      '2xs': '375px',
      xs: '400px',
      s: '650px',
      m: '900px',
      l: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      tertiary: 'var(--tertiary)',
      white: '#E8E1D7',
      black: '#000000',
      slate: '#5F5F5F',
      cream: '#FFFBEB',
      grey: '#898989',
      red: '#A50E07',
      green: '#2A8544',
      disable: '#808080',
      alert: '#ff0000',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontSize: {
      ...new Array(201)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`
          return acc
        }, {}),
    },
    lineHeight: {
      ...new Array(61)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[100 + val] = (100 + val) / 100
          return acc
        }, {}),
    },
    spacing: {
      ...new Array(51)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`
          return acc
        }, {}),
      ...new Array(50)
        .fill()
        .map((_, i) => (11 + i) * 5)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`
          return acc
        }, {}),
    },
    opacity: {
      ...new Array(21)
        .fill()
        .map((_, i) => i * 5)
        .reduce((acc, val) => {
          acc[val] = val / 100
          return acc
        }, {}),
    },
    zIndex: {
      ...new Array(11)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = val
          return acc
        }, {}),
      99: '99',
    },
    height: {
      ...new Array(200)
        .fill()
        .map((_, i) => i * 5)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`
          return acc
        }, {}),
      full: '100%',
      screen: 'calc(var(--vh, 1vh) * 100)',
      hero: 'calc(var(--vh, 1vh) * 100 - (var(--headerHeight)))',
      menu: 'calc(var(--vh, 1vh) * 100 - (var(--headerHeight)))',
      '20vw': '2vw',
      '25vw': '2.5vw',
      '35vw': '3.5vw',
      '40vw': '40vw',
      '50vw': '50vw',
      '60vw': '60vw',
      '80vw': '80vw',
      '100vw': '100vw',
      20: '2rem',
      30: '3rem',
      35: '3.5rem',
      50: '5rem',
    },
    width: {
      ...new Array(200)
        .fill()
        .map((_, i) => i * 5)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`
          return acc
        }, {}),
      full: '100%',
      screen: '100vw',
      unset: 'unset',
      '1/4': '25%',
      '1/3': '33.33%',
      '1/2': '50%',
      '2/3': '66.66%',
      '7/12': '58%',
      '5/12': '42%',
      '1/6': '16.667%',
      '3/4': '75%',
      '3/5': '60%',
      '40p': '40%',
      '45p': '45%',
      '55p': '55%',
      '60p': '60%',
      '90p': '90%',
    },
    maxWidth: {
      100: '10rem',
      120: '12rem',
      150: '15rem',
      170: '17rem',
      200: '20rem',
      250: '25rem',
      300: '30rem',
      350: '35rem',
      400: '40rem',
      450: '45rem',
      500: '50rem',
      560: '56rem',
      600: '60rem',
      620: '62rem',
      650: '65rem',
      800: '80rem',
      1100: '110rem',
      1240: '124rem',
      page: '160rem',
    },
    minHeight: {
      180: '18rem',
      400: '40rem',
      600: '60rem',
      1240: '124rem',
      unset: 'unset',
      '100vh': '100vh',
    },
    boxShadow: {
      base: '1rem 1rem 0 0 black',
      title: '0px 2px 1px rgba(0, 0, 0, 0.25)',
    },
    borderRadius: {
      none: '0',
      sm: '0.2rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '0.5rem',
      lg: '1rem',
      10: '1rem',
      15: '1.5rem',
      20: '2rem',
      30: '3rem',
      50: '5rem',
      80: '8rem',
      100: '10rem',
      150: '15rem',
      200: '20rem',
      full: '9999px',
      large: '12px',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.23, 1, 0.32, 1)',
      'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
      'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
      'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
      'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
      'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
      'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
      'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    stroke: (theme) => ({
      white: theme('colors.white'),
      black: theme('colors.black'),
      current: theme('colors.current'),
      transparent: theme('colors.transparent'),
    }),
    fill: (theme) => ({
      white: theme('colors.white'),
      black: theme('colors.black'),
      current: theme('colors.current'),
      transparent: theme('colors.transparent'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
