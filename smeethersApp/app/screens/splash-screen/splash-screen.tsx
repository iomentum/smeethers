import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../theme';
import Screen from '../../components/Screen/Screen';
import Text from '../../components/Text/Text';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <ActivityIndicator size="large" color={color.primary} />
      <Text onPress={() => navigation.navigate('login')} text="navigate" />
    </Screen>
  );
};

export default SplashScreen;
