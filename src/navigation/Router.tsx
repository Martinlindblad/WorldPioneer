import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingStack from './OnboardingStack';
import ContentStack from './ContentStack';
import LoginStack from './LoginStack';
import {useAuth} from '../hooks/Auth';

const Stack = createStackNavigator();

function Router(): JSX.Element {
  const {isLoggedIn} = useAuth();
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Content"
            component={ContentStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingStack}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginStack}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}

export default Router;
