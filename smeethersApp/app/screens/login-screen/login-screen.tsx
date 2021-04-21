import React from 'react';
import {saveToken} from '../../utils/storage';
import Text from '../../components/Text/Text';
import Screen from '../../components/Screen/Screen';
// import Screen from '../../components/Screen/Screen';

const LoginScreen = () => {
  saveToken('hehe token');

  return (
    <Screen>
      <Text text="LoginScreen" />
    </Screen>
  );
};

export default LoginScreen;
