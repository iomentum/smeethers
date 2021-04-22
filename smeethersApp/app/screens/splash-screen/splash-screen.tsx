import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../theme';
// import {loadToken} from '../../utils/storage';
import {styles} from './splash-screen.styles';
import Screen from '../../components/Screen/Screen';
import LoadingWheel from '../../components/LoadingWheel/LoadingWheel';
import SmeethersLogo from '../../components/Svg/SmeethersLogo';

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    // TODO: Make some token verifications
    // console.log(loadToken());

    // fake loader
    navigation.navigate('login');
  }, 2000);

  return (
    <Screen customStyles={styles.screenCustomStyles}>
      <SmeethersLogo />
      <LoadingWheel customStyles={styles.loadingWheelCustomStyles} />
    </Screen>
  );
};

export default SplashScreen;
