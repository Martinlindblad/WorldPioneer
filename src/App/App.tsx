import React from 'react';
// import Compose from '../utils/Compose';
// import {Provider as FirebaseAuthProvider} from '../context/Auth';
import RootStack from '../navigation/RootStack';

function App(): JSX.Element {
  return (
    <>
      <RootStack />
    </>
  );
}

const ComposedApp = () => {
  return (
    // <Compose components={[FirebaseAuthProvider]}>
    <App />
    // </Compose>
  );
};

export default ComposedApp;
// npx react-native generate-bootsplash assets/bootsplash_logo.png \
//   --background-color=F5FCFF \
//   --logo-width=100 \
//   --assets-path=assets \
//   --flavor=main
