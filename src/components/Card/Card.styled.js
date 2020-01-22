import styled from 'styled-components';
import { colors, fontSize } from '../../shared/variables';

export const Card = styled.button.attrs({
  type: 'button',
})`
  width: 265px;
  background-color: ${colors.white};
  color: ${colors.silver_chalice};
  font-size: ${fontSize['u-fontSize-16']};
  box-shadow: 0px 20px 34px ${colors.bg_light};
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 26px;
  border: none;
  transition: 0.3s;

  svg {
    width: 42px;
    height: 42px;
    margin-right: 20px;
  }

  @media (min-width: 769px) {
    width: 215px;
    flex-direction: column;
    padding: 42px 0;

    &:hover {
      background-color: ${props =>
        props.primary ? `${colors.atomic_tangerine}` : `${colors.acapulco}`};
      color: ${colors.white};
      font-weight: bold;
    }

    svg {
      width: 67px;
      height: 67px;
      margin-right: 0;
      margin-bottom: 16px;
    }

    &:hover {
      svg {
        path {
          stroke: ${colors.white};
          fill: ${colors.white};
        }
      }
    }
  }
`;
