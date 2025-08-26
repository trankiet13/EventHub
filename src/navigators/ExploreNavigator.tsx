import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens';
import SearchEvents from '../screens/events/SearchEvents';

const ExploreNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchEvents" component={SearchEvents} />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;