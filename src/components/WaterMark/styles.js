import styled from 'styled-components';
import { colors } from '../../shared/variables';

export const Container = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 12vw;
    flex-direction: column;
    position: absolute;
    top: 256px;
    align-items: center;
    justify-content: center;
    top: 188px;
  }
`;

export const Stripe = styled.div`
  width: 2px;
  background-color: ${colors.green_pea};
  opacity: 41.48%;
  height: 429px;
`;

export const Logo = styled.img`
  width: 208px;
  transform: rotate(270deg);
  margin-bottom: 130px;
`;
