import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScene from '../scenes/LoginScene';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function LoginStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LoginScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
