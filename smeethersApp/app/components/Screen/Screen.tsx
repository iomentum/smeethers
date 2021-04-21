import React, {FC} from 'react';
import {View} from 'react-native';

interface ScreenProps {}

const Screen: FC<ScreenProps> = ({children}) => {
  return <View style={{backgroundColor: 'red', flex: 1}}>{children}</View>;
};

export default Screen;
