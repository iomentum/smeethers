import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import {StatusBar} from 'react-native';
import {ScreenBox} from './Screen.styles';

interface ScreenProps {
  children?: FC;
  customStyles?: ViewStyle;
}

const Screen: FC<ScreenProps> = (props: ScreenProps) => {
  const {customStyles}: ScreenProps = props;

  return (
    <ScreenBox style={customStyles}>
      <StatusBar barStyle="light-content" />

      {props.children}
    </ScreenBox>
  );
};

export default Screen;
