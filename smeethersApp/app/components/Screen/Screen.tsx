import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {ScreenBox} from './Screen.styles';

interface ScreenProps {
  children?: FC;
}

const Screen: FC<ScreenProps> = (props: ScreenProps) => {
  return (
    <ScreenBox>
      <StatusBar barStyle="light-content" />

      {props.children}
    </ScreenBox>
  );
};

export default Screen;
