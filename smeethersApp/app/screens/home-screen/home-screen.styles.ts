import styled from 'styled-components/native';
import Text from '../../components/Text/Text';
// import {color, typography} from '../../theme';

export const HeaderBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;

// TODO: spaces in wh & vw
export const PendingReplyText = styled(Text)`
  margin-horizontal: 50px;
  background-color: red;
  font-size: 16px
  text-align: center;
`;
