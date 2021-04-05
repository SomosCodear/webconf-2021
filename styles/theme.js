import { transparentize } from 'polished';

const palette = {
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#1F1F1F',
  gray: '#C4C4C4',
  jakarta: '#3C467E',
  disco: '#A70050',
  transparent: 'transparent',
};

const colors = {
  // common
  text: palette.black,
  link: palette.disco,
  separator: transparentize(0.9, palette.black),
  // checkmark
  checkmarkPath: palette.disco,
  // button
  buttonBaseBackground: palette.white,
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
  checkboxBorder: palette.gray,
  checkboxBackground: palette.white,
  checkboxCheckedBackground: palette.white,
  checkboxDisabledBackground: palette.gray,
  checkboxDisabledCheckedBackground: palette.gray,
  checkboxDisabledTextBackground: palette.gray,
  // input
  inputBorder: palette.gray,
  inputPlaceholder: transparentize(0.65, palette.darkGray),
  // textarea
  textareaBackground: palette.white,
  textareaBorder: palette.gray,
  textareaPlaceholder: transparentize(0.65, palette.darkGray),
  // loading
  loadingBackground: palette.disco,
  // CFP
  cfpProgressTitle: palette.jakarta,
  cfpProgressIncompleteStepBorder: palette.gray,
  cfpProgressFillBackground: palette.jakarta,
  cfpProgressArrow: palette.disco,
  cfpStepTitle: palette.jakarta,
  cfpStepFieldTitleSmall: transparentize(0.3, palette.darkGray),
  cfpStepFieldDescription: transparentize(0.3, palette.darkGray),
  cfpStepFieldHelp: transparentize(0.65, palette.darkGray),
};

const fonts = {
  default: 'Roboto,sans-serif',
};

const shadows = {};

export const theme = {
  colors,
  fonts,
  shadows,
};
