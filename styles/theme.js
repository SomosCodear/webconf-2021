import { transparentize } from 'polished';

const palette = {
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#1F1F1F',
  gray: '#C4C4C4',
  jakarta: '#3C467E',
  darkBlue: '#272D5B',
  disco: '#A70050',
  darkRed: '#4E0528',
  transparent: 'transparent',
  red: '#C60226',
  rombianPink: '#F22588',
  rombianBlack: '#1D1028',
};

const colors = {
  // common
  text: palette.black,
  link: palette.disco,
  error: palette.red,
  separator: transparentize(0.9, palette.black),
  // checkmark
  checkmarkPath: palette.disco,
  // button
  buttonBaseBackground: palette.transparent,
  buttonDisabledBackground: palette.gray,
  buttonDisabledBorder: palette.gray,
  buttonDefaultBorder: palette.disco,
  buttonDefaultBackground: palette.transparent,
  buttonDefaultText: palette.disco,
  buttonPrimaryBorder: palette.jakarta,
  buttonPrimaryBackground: palette.jakarta,
  buttonPrimaryText: palette.white,
  buttonSecondaryBackground: palette.disco,
  buttonSecondaryBorder: palette.disco,
  buttonSecondaryText: palette.white,
  // checkbox
  checkboxText: transparentize(0.3, palette.darkGray),
  checkboxBorder: palette.gray,
  checkboxBackground: palette.white,
  checkboxCheckedBackground: palette.white,
  checkboxDisabledBackground: palette.gray,
  checkboxDisabledCheckedBackground: palette.gray,
  checkboxDisabledTextBackground: palette.gray,
  // input
  inputBorder: palette.gray,
  inputBorderFocused: palette.jakarta,
  inputPlaceholder: transparentize(0.65, palette.darkGray),
  // textarea
  textareaBackground: palette.white,
  textareaBorder: palette.gray,
  textareaPlaceholder: transparentize(0.65, palette.darkGray),
  // loading
  loadingBackground: palette.disco,
  // Landing
  landingBackgroundGradientStart: palette.darkBlue,
  landingBackgroundGradientEnd: palette.darkRed,
  landingHeaderTitle: palette.rombianPink,
  landingHeaderMonth: palette.white,
  landingHeaderGlass: palette.rombianBlack,
  landingHeaderBorder: palette.rombianBlack,
  landingHeaderLearnMore: palette.white,
  landingSectionTitle: palette.white,
  landingSectionTitleAccent: palette.rombianPink,
  landingMainSectionText: palette.white,
  // CFP
  cfpProgressTitle: palette.jakarta,
  cfpProgressIncompleteStepBorder: palette.gray,
  cfpProgressFillBackground: palette.jakarta,
  cfpProgressArrow: palette.disco,
  cfpStepTitle: palette.jakarta,
  cfpStepFieldTitleSmall: transparentize(0.3, palette.darkGray),
  cfpStepFieldDescription: transparentize(0.3, palette.darkGray),
  cfpStepFieldHelp: transparentize(0.65, palette.darkGray),
  cfpGuidelineCheckboxText: palette.darkGray,
  cfpSuccessNote: transparentize(0.3, palette.darkGray),
  cfpSuccessMobileBackground: palette.darkBlue,
  cfpSuccessMobileTitle: palette.white,
  cfpSuccessMobileNote: transparentize(0.5, palette.white),
};

const fonts = {
  default: 'Roboto,sans-serif',
};

const shadows = {};

const breakpoints = {
  desktop: '1024px',
  hiDpi: '2048px',
};

export const theme = {
  colors,
  fonts,
  shadows,
  breakpoints,
};
