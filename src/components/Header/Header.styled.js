import styled from 'styled-components';
import { colors, fontSize } from '../../shared/variables';

export const HeaderComponent = styled.header`
  max-width: 732px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    padding-top: 96px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  font-size: ${fontSize['u-fontSize-22']};
  max-width: 230px;
  width: 100%;
  text-align: center;
  margin: 0 auto 32px;
  font-style: normal;
  font-weight: 300;
  color: ${colors.dove_gray};

  strong {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    max-width: 470px;
    margin-bottom: 65px;
    font-size: ${fontSize['u-fontSize-30']};
  }
`;

export const Subtitle = styled.h3`
  font-size: ${fontSize['u-fontSize-14']};
  color: ${colors.dove_gray};
  line-height: 39px;
  text-align: center;
`;
