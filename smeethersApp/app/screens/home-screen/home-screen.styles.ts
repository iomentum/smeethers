import styled from 'styled-components/native';
import Text from '../../components/Text/Text';
import {typography} from '../../theme';
import {vw} from '../../utils/viewport-units';

export const HeaderBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;

export const PendingReplyText = styled(Text)`
  margin-horizontal: ${vw(8)}px;
  font-size: 16px
  text-align: center;
  margin-top: 64px;
  font-family: ${typography.secondary}
`;
