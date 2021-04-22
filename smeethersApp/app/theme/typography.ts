import {Platform} from 'react-native';

export const typography = {
  //TODO: manage primaryColor
  primary: Platform.select({
    ios: 'Byrd-SemiBold',
    android: 'Byrd-SemiBold',
  }),
  secondary: Platform.select({ios: 'Helvetica', android: 'Helvetica'}),

  default: Platform.select({ios: 'Courier', android: 'monospace'}),

  assets: ['../../assets/fonts'],
};
