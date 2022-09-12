import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingStack from './OnboardingStack';
import ContentStack from './ContentStack';
import LoginStack from './LoginStack';

const Stack = createStackNavigator();

function Router(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Content"
        component={ContentStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;
