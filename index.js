/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {initializeApp} from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const firebaseApp = initializeApp(firebaseConfig, App);

AppRegistry.registerComponent(appName, () => firebaseApp);
