import styled from 'styled-components';
import { colors, fontSize } from '../../shared/variables';

export const LabelComponent = styled.label`
  font-size: ${fontSize['u-fontSize-16']};
  color: ${colors.dove_gray};
  font-weight: 600;
  font-style: normal;
  line-height: 27px;
  padding-left: 18px;

  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;
