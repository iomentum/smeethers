import styled from 'styled-components/native';
import Text from '../../components/Text/Text';
import {color, typography} from '../../theme';

export const ContainerView = styled.View`
  width: 100%;
  height: 100%;
`;

export const BlackCrossTouchableOpacity = styled.TouchableOpacity`
  margin: 20px 0 0 20px;
`;

export const MenuContainer = styled.View`
  margin: auto;
  align-content: center;
`;

export const MenuText = styled(Text)`
  color: ${color.font};
  font-family: ${typography.primary};
  font-size: 36px;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: ${props => (props.isNoMargin ? 0 : 20)}px;
`;

export const SmallText = styled(Text)`
  color: ${color.font};
  font-family: ${typography.primary};
  font-size: 13px;
  line-height: 14px;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 20px;
`;

export const DisconnectText = styled(Text)`
  color: ${color.font};
  font-family: ${typography.primary};
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 30px;
`;
