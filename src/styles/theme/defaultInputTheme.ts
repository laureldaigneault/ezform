import { InputThemeType } from './types';

const defaultInputTheme: InputThemeType = {
  palette: {
    contrastThreshold: 3.5,
    common: {
      white: '#FFFFFF',
      black: '#333333',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.8)',
      secondary: 'rgba(0, 0, 0, 0.65)',
      placeholder: 'rgba(0, 0, 0, 0.55)',
      disabled: 'rgba(0, 0, 0, 0.32)',
      // contrast variants for dark modes
      primaryContrast: 'rgba(255, 255, 255, 1)',
      secondaryContrast: 'rgba(255, 255, 255, 0.7)',
      placeholderContrast: 'rgba(255, 255, 255, 0.6)',
      disabledContrast: 'rgba(255, 255, 255, 0.5)',
    },
    background: {
      default: '{{palette.common.white}}',
    },
    border: {
      default: '{{palette.color.celeste}}',
    },
    color: {
      dust: '#eee9e9',
      aquamarine: '#86ffc9',
      lavender: '#a199ff',
      celeste: '#332858',
      pink: '#ff299c',
      chili: '#ea2b1f',
      sahara: '#dd6e42',
      brocoli: '#3e8914',
      sky: '#0ad3ff',
    },
    intent: {
      basic: '{{palette.color.dust}}',
      primary: '{{palette.color.aquamarine}}',
      secondary: '{{palette.color.lavender}}',
      good: '{{palette.color.brocoli}}',
      info: '{{palette.color.sky}}',
      warning: '{{palette.color.sahara}}',
      bad: '{{palette.color.chili}}',
    },
  },

  action: {
    disabled: {
      filter: 'grayscale(100%)',
      opacity: '0.5',
    },
    hover: {
      filter: 'brightness(95%)',
    },
    pressed: {
      filter: 'brightness(90%)',
    },
    focussed: {
      boxShadow: '0 0 0 3px {{palette.color.dust}}',
    },
  },

  typography: {
    rootFontSize: 16,
    font: {
      heading: `Playfair Display, sans-serif`,
      body: `Lato, sans-serif`,
    },
    weight: {
      lightest: 100,
      lighter: 200,
      light: 300,
      normal: 500,
      medium: 600,
      bold: 700,
      bolder: 800,
      boldest: 900,
    },
    fontFamily: '{{typography.font.body}}',
    fontSize: '1rem',
    h1: {
      fontFamily: '{{typography.font.heading}}',
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.58,
      letterSpacing: '-0.01562em',
      textTransform: 'none',
    },
    h2: {
      fontFamily: '{{typography.font.heading}}',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.5,
      letterSpacing: '-0.00833em',
      textTransform: 'none',
    },
    h3: {
      fontFamily: '{{typography.font.heading}}',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.17,
      letterSpacing: '0em',
      textTransform: 'none',
    },
    h4: {
      fontFamily: '{{typography.font.heading}}',
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1,
      letterSpacing: '0em',
      textTransform: 'none',
    },
    h5: {
      fontFamily: '{{typography.font.heading}}',
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1,
      letterSpacing: '0em',
      textTransform: 'none',
    },
    h6: {
      fontFamily: '{{typography.font.heading}}',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1,
      letterSpacing: '0em',
      textTransform: 'none',
    },
    body1: {
      fontFamily: '{{typography.font.body}}',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1,
      letterSpacing: '0em',
      textTransform: 'none',
    },
    body2: {
      fontFamily: '{{typography.font.body}}',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1,
      letterSpacing: '0em',
      textTransform: 'none',
    },
    button: {
      fontFamily: '{{typography.font.body}}',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1,
      letterSpacing: '0.3em',
      textTransform: 'none',
    },
    field: {
      fontFamily: '{{typography.font.body}}',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1,
      letterSpacing: '0em',
      textTransform: 'none',
    },
    fieldLabel: {
      fontFamily: '{{typography.font.body}}',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 1.16,
      letterSpacing: '0em',
      textTransform: 'none',
    },
    fieldHelperText: {
      fontFamily: '{{typography.font.body}}',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1,
      letterSpacing: '0em',
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    border: {
      button: `{{shape.borderStyle}} {{shape.borderWidth}}px {{palette.border.default}}`,
      field: `{{shape.borderStyle}} {{shape.borderWidth}}px {{palette.border.default}}`,
      container: `{{shape.borderStyle}} {{shape.borderWidth}}px {{palette.border.default}}`,
    },
  },

  spacing: {
    unit: 'rem',
    value: 0.5,
  },

  shadow: {
    default: 'none',
    raised:
      '.5px .5px 0 0 {{palette.color.celeste}}, 1px 1px 0 0 {{palette.color.celeste}}, 1.5px 1.5px 0 0 {{palette.color.celeste}}, 2px 2px 0 0 {{palette.color.celeste}}',
    projection: '6px 6px 0 0 {{palette.color.celeste}}',
  },

  zIndex: {
    sidebar: 100,
    navbar: 110,
    modal: 300,
    drawer: 310,
    toast: 320,
    alert: 330,
    contextualMenu: 400,
    tooltip: 500,
  },

  transition: {
    duration: {
      shortest: 50,
      shorter: 100,
      short: 200,
      default: 300,
      complex: 500,
    },
  },

  breakpoint: {
    unit: 'px',
    min: [0, 576],
    phone: [576, 768],
    tablet: [768, 1024],
    laptop: [1024, 1280],
    desktop: [1280, 1920],
    wide: [1920, 2560],
    ultrawide: [2560, Number.MAX_SAFE_INTEGER],
  },
};

export default defaultInputTheme;
