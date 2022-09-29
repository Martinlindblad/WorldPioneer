import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Compose from '../utils/Compose';
import {Provider as FirebaseAuthProvider} from '../contexts/Auth';
import {Provider as ThemeProvider} from 'src/utils/ThemeSelector';
import Router from '../navigation/Router';

function App(): JSX.Element {
  return <Router />;
}

const ComposedApp = () => {
  return (
    <Compose components={[FirebaseAuthProvider, ThemeProvider]}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Compose>
  );
};

export default ComposedApp;
// npx react-native generate-bootsplash assets/bootsplash_logo.png \
//   --background-color=F5FCFF \
//   --logo-width=100 \
//   --assets-path=assets \
//   --flavor=main
