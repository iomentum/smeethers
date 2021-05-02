import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import LoginScreen from '../screens/login-screen/login-screen';
import SplashScreen from '../screens/splash-screen/splash-screen';
import HomeScreen from '../screens/home-screen/home-screen';
import BurgerScreen from '../screens/burger-screen/burger-screen';

export type PrimaryParamList = {
  splash: undefined;
  login: undefined;
  home: undefined;
  burger: undefined;
};

const Stack = createNativeStackNavigator<PrimaryParamList>();

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="burger" component={BurgerScreen} />
    </Stack.Navigator>
  );
}

const exitRoutes = ['slpash'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
