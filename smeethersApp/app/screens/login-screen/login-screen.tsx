import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {saveToken} from '../../utils/storage';
import Text from '../../components/Text/Text';
import Screen from '../../components/Screen/Screen';

const LoginScreen = () => {
  saveToken('hehe token');

  const navigation = useNavigation();

  return (
    <Screen>
      <Text text="LoginScreen" />
      <Text text="connect" onPress={() => navigation.navigate('home')} />
    </Screen>
  );
};

export default LoginScreen;
