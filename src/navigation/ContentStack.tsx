import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomTab from './BottomTab';
import LocationListScene from '../scenes/LocationListScene';

const Stack = createNativeStackNavigator();

function ContentStack(): JSX.Element {
  //   const safeAreaInsets = useSafeAreaInsets();

  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LocationList"
        component={LocationListScene}
        options={{
          title: 'Locations',
        }}
      />
    </Stack.Navigator>
  );
}

export default ContentStack;
