import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScene from '../scenes/OnboardingScene';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function OnboardingStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default OnboardingStack;
