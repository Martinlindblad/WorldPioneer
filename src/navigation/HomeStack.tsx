import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScene from '../scenes/HomeScene';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function HomeStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
