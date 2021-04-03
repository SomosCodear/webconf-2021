import { transparentize } from 'polished';

const palette = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#C4C4C4',
  jakarta: '#3C467E',
  disco: '#A70050',
  transparent: 'transparent',
};

const colors = {
  // common
  text: palette.black,
  separator: transparentize(0.9, palette.black),
  // button
  buttonBaseBackground: palette.white,
  buttonDefaultBorder: palette.disco,
  buttonDefaultBackground: palette.transparent,
  buttonDefaultText: palette.disco,
  buttonPrimaryBorder: palette.jakarta,
  buttonPrimaryBackground: palette.jakarta,
  buttonPrimaryText: palette.white,
  buttonSecondaryBackground: palette.disco,
  buttonSecondaryBorder: palette.disco,
  buttonSecondaryText: palette.white,
  // CFP
  cfpProgressTitle: palette.jakarta,
  cfpProgressIncompleteStepBorder: palette.gray,
  cfpProgressCompleteStepBorder: palette.jakarta,
  cfpProgressCompletedStepBackground: palette.jakarta,
  cfpProgressArrow: palette.disco,
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
