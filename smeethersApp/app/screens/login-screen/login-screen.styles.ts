import styled from 'styled-components/native';
import Text from '../../components/Text/Text';
import {typography, color} from '../../theme';

export const GlobalView = styled.View`
  margin-horizontal: 56px;
  margin-vertical: 80px;
  flex: 1;
`;

export const LogoBox = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 88px;
`;

export const CredentialsBox = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SloganText = styled(Text)`
  font-size: 13px;
  font-family: ${typography.secondary};
`;

export const LoginTextInput = styled.TextInput`
  border-bottom-width: 3px;
  border-color: ${color.font};
  color: ${color.font};
  width: 100%;
  font-family: ${typography.primary};
  font-size: 21px;
  margin-bottom: 16px;
  height: 50px;
`;

export const ForgottenPasswordText = styled(Text)`
  font-size: 13px;
  font-family: ${typography.secondary};
`;

export const FooterLogoView = styled.View`
  align-items: center;
`;
