const colors = {
  black: `#0e121b`,
  white: `#f0f3f8`,
  // white: '#fff',
  primary: `#9b4dca`,
  danger: `#e60023`,
  success: `#2fd195`,
}

const typography = {
  heading: {
    fontFamily: `'Roboto Slab', 'Arial', sans-serif`,
  },
  paragraph: {
    fontFamily: `'Roboto Slab', 'Arial', sans-serif`,
  },
}

export const lightTheme = {
  name: `light`,
  app: {
    background: colors.white,
  },
  typography: {
    heading: {
      // color: colors.black,
      fontFamily: typography.heading.fontFamily,
      // fontWeight: 400,
    },
    paragraph: {
      // color: colors.black,
      fontFamily: typography.paragraph.fontFamily,
      // fontWeight: 400,
    },
  },
  colors,
}

export const darkTheme = {
  name: 'dark',
  app: {
    background: colors.black,
  },
  typography: {
    heading: {
      color: colors.primary,
      fontFamily: typography.heading.fontFamily,
      // fontWeight: 400,
    },
    paragraph: {
      color: colors.white,
      fontFamily: typography.paragraph.fontFamily,
      // fontWeight: 400,
    },
  },
  colors,
}
