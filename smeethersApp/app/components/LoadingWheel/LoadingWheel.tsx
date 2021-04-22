import React, {FC} from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';
import {color} from '../../theme';

interface LoadingWheelProps {
  wheelColor?: string;
  customStyles?: ViewStyle;
}

const LoadingWheel: FC<LoadingWheelProps> = props => {
  const {customStyles, wheelColor = color.primary}: LoadingWheelProps = props;

  return (
    <ActivityIndicator style={customStyles} size="large" color={wheelColor} />
  );
};

export default LoadingWheel;
