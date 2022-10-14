import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from 'src/navigation/Router';
import Compose from 'src/utils/Compose';
import {Provider as FirebaseAuthProvider} from 'src/contexts/Auth';

function App(): JSX.Element {
  return <Router />;
}

const ComposedApp = () => {
  return (
    <Compose components={[FirebaseAuthProvider]}>
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
