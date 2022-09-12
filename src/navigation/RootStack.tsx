import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useFirebaseUserAuth} from '../context/Auth';

// import {View, ActivityIndicator} from 'react-native';
// import {useFirebaseUserData} from '../context/UserData';
import ContentStack from './ContentStack';
import OnboardingStack from './OnboardingStack';
import LoginStack from './LoginStack';

const Stack = createNativeStackNavigator();

// function Splash() {
//   return (
//     <View style={{flex: 1}}>
//       <ActivityIndicator />
//     </View>
//   );
// }
function RootStack(): JSX.Element {
  // const {currentUser} = useFirebaseUserAuth();
  // const {userData, isInitializing} = useFirebaseUserData();
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
          primary: 'gray',
          text: 'black',
        },
      }}>
      {/* <Stack.Navigator initialRouteName="Splash">
        {!currentUser ||
          (isInitializing && (
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
          ))}
        {currentUser ? (
          <>
            {!userData?.onboardingCompleted && (
              <Stack.Screen
                name="Onboarding"
                component={OnboardingStack}
                options={{headerShown: false}}
              />
            )}
            <Stack.Screen
              name="Content"
              component={ContentStack}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginStack}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator> */}
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
      <Stack.Screen
        name="Content"
        component={ContentStack}
        options={{headerShown: false}}
      />
    </NavigationContainer>
  );
}

export default RootStack;
