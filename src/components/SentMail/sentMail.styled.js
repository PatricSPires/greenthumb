import styled from 'styled-components';
import { colors, fontSize } from '../../shared/variables';

export const EmailSent = styled.div`
  position: absolute;
  top: 230px;
  background-color: ${colors.wild_sand};
  width: 384px;
  height: 568px;
  left: 1330px;
  padding: 46px 80px;
  transition: 0.3s;

  h1 {
    font-size: 35px;
    color: ${colors.bush};
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    font-size: ${fontSize['u-fontSize-16']};
    line-height: 27px;
    color: ${colors.dove_gray};
    text-align: center;
    max-width: 265px;
    margin: 0 auto 36px;
  }

  img {
    margin: 0 auto;
  }
`;
