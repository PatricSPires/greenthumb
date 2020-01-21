import styled from 'styled-components';
import { colors, fontSize } from '../../shared/variables';

export const InputComponent = styled.input`
  background-color: ${colors.white};
  max-width: 297px;
  border-radius: 19px;
  font-size: ${fontSize['u-fontSize-14']};
  color: ${colors.alto};
  border: none;
  padding: 6px 75px 6px 25px;
`;
