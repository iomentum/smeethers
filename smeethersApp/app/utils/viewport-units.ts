import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

export const vw = (v: number) => Math.floor((window.width / 100) * v);
export const vh = (h: number) => Math.floor((window.height / 100) * h);
