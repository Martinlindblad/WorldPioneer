import {Appearance} from 'react-native';
import colorsDark from 'src/theme/colorsDark';
import colorsLight from 'src/theme/colorsLight';

const colorScheme = Appearance.getColorScheme();

const currentColorScheme = (() => {
  switch (colorScheme) {
    case 'dark':
      return colorsDark;
    case 'light':
    default:
      return colorsLight;
  }
})();

export default currentColorScheme;

export type Colors = {
  primary: string;
  primaryAlt: string;
  primaryLabel: string;
  secondary: string;
  secondaryLabel: string;
  thirdLabel: string;
  text: string;
  icon: string;
  background: string;
  secondaryBackground: string;
  loginBackground: string;
  loadingIndicator: string;
  inputBackground: string;
  iconBackground: string;
  border: string;
  secondaryBorder: string;
  inverted: string;
  negative: string;
  disabled: string;
  facebook: string;
  shadow: string;
};
