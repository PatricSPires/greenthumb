import styled from 'styled-components';
import { colors, fontSize } from '../../shared/variables';

export const EmailSent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 676px;
  background-color: ${colors.wild_sand};
  width: 100%;
  height: 463px;
  left: 0;
  padding: 8% 14%;

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

  @media (min-width: 1024px) {
    padding: 46px 80px;
    width: 384px;
    top: 234px;
    left: 54%;
    height: 568px;

    img {
      margin: 0 auto;
    }
  }
`;
