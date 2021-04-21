import React from 'react';
import {ActivityIndicator} from 'react-native';
import Screen from '../../components/Screen/Screen';
import {color} from '../../theme';
// import Screen from '../../components/Screen/Screen';

const SplashScreen = () => {
  return (
    <Screen>
      <ActivityIndicator size="large" color={color.primary} />
    </Screen>
  );
};

export default SplashScreen;
