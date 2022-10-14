import React, {useEffect, useState, Dispatch, SetStateAction} from 'react';

import {useColorScheme} from 'react-native';

export type ThemeOptions = 'light' | 'dark';

export interface ThemeContextInterface {
  theme: ThemeOptions;
  setTheme: Dispatch<SetStateAction<ThemeOptions>>;
}

export const ThemeContext = React.createContext<ThemeContextInterface | null>(
  null,
);

const ThemeSelector: React.FC<{children: JSX.Element}> = ({children}) => {
  // default theme to the system
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeOptions>('dark');

  useEffect(() => {
    if (systemColorScheme) setTheme(systemColorScheme);
  }, []);

  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeSelector;
