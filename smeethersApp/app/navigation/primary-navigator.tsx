import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import LoginScreen from '../screens/login-screen/login-screen';
import SplashScreen from '../screens/splash-screen/splash-screen';

export type PrimaryParamList = {
  slpash: undefined;
  login: undefined;
};

const Stack = createNativeStackNavigator<PrimaryParamList>();

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="slpash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="slpash" component={SplashScreen} />
    </Stack.Navigator>
  );
}

const exitRoutes = ['slpash'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
