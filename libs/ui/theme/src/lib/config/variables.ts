const $purpleExtraDark = '#2D1155';
const $purpleDark = '#421D77';
const $purple = '#362c45';
const $purpleLight = '#703CBB';
const $purpleExtraLight = '#F6EFFF';

const $green = '#00D08A';
const $greenLight = '#b1ebcd';

const $textColorDefault = '#a8a8a8';
const $inputBackgroundColor = '#F6F3F9';
const $inputTextColor = '#2D1155';

const $bodyBackgroundColor = '#ffffff';
const $mainBackgroundColor = '#ffffff';
const $filcoinBackgroundColor = '#F9F9F9';
const $fieldIconColor = '#ffffff';
const $white = '#ffffff';
const $black = '#000000';
const $filcoinColor = '#0090FF';
const $filcoinText = '#5CB8FF';
const $filcoinColorLight ='#E5F4FF'

const $switchGrayColor='#A0A0A0';
const $switchBgColorBlue='#B3DEFF';
const $switchBgColorGray='#C8C8CA';

const $fontFamilyPrimary = 'Rajdhani';
const $fontFamilySecondary = 'Rajdhani';

const $fontSize = 14;

export type UiThemeVariables = {
  primaryColor: string;
  primaryColorDark: string;
  primaryColorDim: string;
  secondaryColor: string;
  secondaryColorLight: string;
  textColorDefault: string;
  simpleTextColor: string;
  bodyBackgroundColor: string;
  inputBackgroundColor: string;
  inputTextColor: string;
  mainBackgroundColor: string;
  fieldIconColor: string;
  fontFamilyPrimary: string;
  fontFamilySecondary: string;
  hoverTextColor: string;
  fontSize: number;
  white: string;
  black: string;
  filcoinColor:string;
  purpleLight: string;
  filcoinBackgroundColor: string
  filcoinColorLight: string;
  filcoinText:string;
  switchGrayColor:string;
  switchBgColorBlue:string;
  switchBgColorGray: string
};

export const variables: UiThemeVariables = {
  primaryColor: $purpleExtraDark,
  primaryColorDark: $purpleDark,
  primaryColorDim: $purple,
  secondaryColor: $green,
  secondaryColorLight: $greenLight,
  textColorDefault: $textColorDefault,
  simpleTextColor: $textColorDefault,
  bodyBackgroundColor: $bodyBackgroundColor,
  mainBackgroundColor: $mainBackgroundColor,
  fieldIconColor: $fieldIconColor,
  fontFamilyPrimary: $fontFamilyPrimary,
  fontFamilySecondary: $fontFamilySecondary,
  fontSize: $fontSize,
  inputBackgroundColor: $inputBackgroundColor,
  inputTextColor: $inputTextColor,
  hoverTextColor: $white,
  white: $white,
  filcoinColor: $filcoinColor,
  black: $black,
  purpleLight:  $purpleLight,
  filcoinBackgroundColor :$filcoinBackgroundColor,
  filcoinColorLight: $filcoinColorLight,
  filcoinText:$filcoinText,
  switchGrayColor:$switchGrayColor,
  switchBgColorBlue:$switchBgColorBlue,
  switchBgColorGray:$switchBgColorGray
};
