import {Colors} from './colors';
import colorsDark from 'src/theme/colorsDark';
import colorsLight from 'src/theme/colorsLight';
import dimensions from 'src/theme/dimensions';

const themeSpecLight = {
  name: 'light',
  colors: colorsLight as Colors,
  dimensions,
  //   fonts,
  //   getFontName,
};

const themeSpecDark = {
  name: 'dark',
  colors: colorsDark as Colors,
  dimensions,
  //   fonts,
  //   getFontName,
};
const themeSpecs = [themeSpecLight, themeSpecDark];

const themes = themeSpecs.map(theme => {
  return theme;
});
export default {
  lightTheme: themes[0],
  darkTheme: themes[1],
};
