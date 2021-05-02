import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {saveToken} from '../../utils/storage';
import Text from '../../components/Text/Text';
import Screen from '../../components/Screen/Screen';

const LoginScreen = () => {
  saveToken('hehe token');

  const navigation = useNavigation();

  useEffect(
    () => navigation.addListener('beforeRemove', e => e.preventDefault()),
    [navigation],
  );

  return (
    <Screen>
      <Text text="LoginScreen" />
      <Text text="connect" onPress={() => navigation.navigate('home')} />
      <Text text="menu-Burger" onPress={() => navigation.navigate('burger')} />
    </Screen>
  );
};

export default LoginScreen;
