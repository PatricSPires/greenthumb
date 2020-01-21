import styled from 'styled-components';
import { colors } from '../../shared/variables';

export const Purchase = styled.div`
  max-width: 381px;
  width: 100%;
  padding: 0 0 0 28px;

  h1 {
    font-size: 50px;
    font-weight: bold;
    max-width: 377px;
    text-align: left;
    margin-bottom: 10px;
    color: ${colors.bush};
  }

  img {
    margin-bottom: 30px;
  }

  p {
    font-weight: 300;
    font-style: normal;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;
