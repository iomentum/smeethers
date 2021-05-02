import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {saveToken} from '../../utils/storage';
import Text from '../../components/Text/Text';
import Screen from '../../components/Screen/Screen';
import {color} from '../../theme';
import SmeethersLogo from '../../components/Svg/SmeethersLogo';
import LogoEyesUp from '../../components/Svg/LogoEyesUp';
import {
  LogoBox,
  SloganText,
  LoginTextInput,
  CredentialsBox,
  GlobalView,
  ForgottenPasswordText,
  FooterLogoView,
} from './login-screen.styles';
import {translate} from '../../i18n';

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

      <GlobalView>
        <LogoBox>
          <SmeethersLogo />
          <SloganText tx="common.slogan" />
        </LogoBox>
        <CredentialsBox>
          <LoginTextInput
            placeholder={translate('login.email')}
            placeholderTextColor={color.font}
          />
          <LoginTextInput
            placeholder={translate('login.password')}
            placeholderTextColor={color.font}
          />
          <ForgottenPasswordText tx="login.forgottenPassword" />
          <ForgottenPasswordText
            text="se connecter"
            onPress={() => navigation.navigate('home')}
          />
        </CredentialsBox>
      </GlobalView>
      <FooterLogoView>
        <LogoEyesUp />
      </FooterLogoView>

    </Screen>
  );
};

export default LoginScreen;
