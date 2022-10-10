import React, {
  useMemo,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import {useColorScheme} from 'react-native';
import themes from 'src/theme';
import {Colors} from 'src/theme/colors';

export type ThemeOptions = 'light' | 'dark';
type ThemeSelectorContext = {
  appThemes: Array<{
    displayName: string;
    name: string;
  }>;
};
export const Context = React.createContext<ThemeSelectorContext>({
  appThemes: [],
});
export interface ThemeContextInterface {
  theme: {name: string; colors: Colors; dimensions: {baseSize: number}};
  setTheme: Dispatch<SetStateAction<ThemeOptions>>;
}
const appThemes = [
  {displayName: 'Light', name: 'light'},
  {displayName: 'Dark', name: 'dark'},
];
export const ThemeContext = React.createContext<ThemeContextInterface | null>(
  null,
);

const ThemeSelector: React.FC<{children: JSX.Element}> = ({children}) => {
  // default theme to the system
  const systemColorScheme = useColorScheme();
  const [appColorTheme, setTheme] = useState<ThemeOptions>('dark');
  const {lightTheme, darkTheme} = themes;

  useEffect(() => {
    if (systemColorScheme) setTheme(systemColorScheme);
  }, []);
  const contextValues = useMemo(
    () => ({
      appThemes,
    }),
    [],
  );

  const theme = useMemo(() => {
    switch (appColorTheme) {
      case 'dark':
        return darkTheme;
      case 'light':
        return lightTheme;

      default:
        return darkTheme;
    }
  }, []);

  return (
    <Context.Provider value={contextValues}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    </Context.Provider>
  );
};
export default ThemeSelector;
