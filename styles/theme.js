import { transparentize } from 'polished';

const palette = {
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
  checkboxCheckmark: palette.disco,
  checkboxBorder: palette.gray,
  checkboxBackground: palette.white,
  checkboxCheckedBackground: palette.white,
  checkboxDisabledBackground: palette.gray,
  checkboxDisabledCheckedBackground: palette.gray,
  checkboxDisabledTextBackground: palette.gray,
  // input
  inputBorder: palette.gray,
  inputPlaceholder: palette.darkGray,
  // CFP
  cfpProgressTitle: palette.jakarta,
  cfpProgressIncompleteStepBorder: palette.gray,
  cfpProgressCompleteStepBorder: palette.jakarta,
  cfpProgressCompletedStepBackground: palette.jakarta,
  cfpProgressArrow: palette.disco,
  cfpStepTitle: palette.jakarta,
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
