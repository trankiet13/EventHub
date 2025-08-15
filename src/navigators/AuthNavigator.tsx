import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  ForgotPassword,
  LoginScreen,
  SignUpScreen,
  Verication,
} from '../screens';
import OnBroadingScreen from '../screens/auth/OnBroadingScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="OnBroadingScreen"
        component={OnBroadingScreen}
      ></Stack.Screen>
      <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}></Stack.Screen>
      <Stack.Screen name="Verication" component={Verication}></Stack.Screen>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
