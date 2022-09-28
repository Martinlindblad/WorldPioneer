import {ThemeProvider} from '@react-navigation/native';
import React, {
  useCallback,
  useMemo,
  useContext,
  useEffect,
  useState,
} from 'react';

import {useColorScheme} from 'react-native';
import {Context} from 'src/contexts/Auth';
import themes from 'src/Theme';

type ThemeSelectorContext = {
  themes: Array<{
    displayName: string;
    name: string;
  }>;
  updateTheme: (themeName: string) => void;
};

const appThemes = [
  {displayName: 'Light', name: 'ligtht'},
  {displayName: 'Dark', name: 'dark'},
];

const systemColorScheme = useColorScheme();

const themeSelector = ({
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

  return (
    <Context.Provider value={contextValues}>
      <ThemeProvider value={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
