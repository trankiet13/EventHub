import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  ForgotPassword,
  LoginScreen,
  SignUpScreen,
} from '../screens';
import OnBroadingScreen from '../screens/auth/OnBroadingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Verification from '../screens/auth/Verification';

const AuthNavigator = () => {
  // const [isExistingUser,setIsExistingUser] = useState(false);
  // useEffect(() => 
  // {
  //   checkUserExisting()
  // }, [])
  const Stack = createNativeStackNavigator();
  // const checkUserExisting = async () =>
  // {
  //    const res = await AsyncStorage.getItem('auth')

  //    res && setIsExistingUser(true)
  // }
  // console.log(isExistingUser)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name= "OnBroadingScreen" component={OnBroadingScreen}
      ></Stack.Screen>
      <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}></Stack.Screen>
      <Stack.Screen name="Verification" component={Verification}></Stack.Screen>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
