import {ThemeProvider} from '@react-navigation/native';
import React, {useMemo, useEffect, useState} from 'react';

import {useColorScheme} from 'react-native';
import themes from 'src/theme';

type ThemeSelectorContext = {
  appThemes: Array<{
    displayName: string;
    name: string;
  }>;
};
export const Context = React.createContext<ThemeSelectorContext>({
  appThemes: [],
});

const appThemes = [
  {displayName: 'Light', name: 'ligtht'},
  {displayName: 'Dark', name: 'dark'},
];

const systemColorScheme = useColorScheme();

const ThemeSelector = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  const [appColorTheme, setAppColorTheme] = useState<string>();
  const {lightTheme, darkTheme} = themes;

  useEffect(() => {
    setAppColorTheme('dark');
  }, []);

  const theme = useMemo(() => {
    switch (appColorTheme) {
      case 'dark':
        return darkTheme;
      case 'light':
        return lightTheme;

      default:
        return systemColorScheme;
    }
  }, []);

  const contextValues = useMemo(
    () => ({
      appThemes,
    }),
    [],
  );

  return (
    <Context.Provider value={contextValues}>
      <ThemeProvider value={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
export default ThemeSelector;
