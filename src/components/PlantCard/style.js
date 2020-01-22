import styled from 'styled-components';
import { colors, fontSize } from '../../shared/variables';

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const PlantContainer = styled.div`
  width: 100%;
  max-width: 864px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const PlantCard = styled.div`
  display: flex;
  width: 268px;
  background-color: yellow;
  flex-direction: column;
  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: 10px;
  margin-bottom: 54px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 4px 4px ${colors.bg_dark};
    border: 1px solid ${colors.white};
  }

  img {
    width: 200px;
    margin: 0 auto;
  }
`;

export const PlantTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: ${fontSize['u-fontSize-18']};
  line-height: 28px;
  color: ${colors.green_pea};
`;

export const PlantPrice = styled.p`
  font-weight: 300;
  font-size: ${fontSize['u-fontSize-18']};
  line-height: 28px;
  color: ${colors.dove_gray};
`;

export const BuyPlant = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 214px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 22px;
  }
`;

export const PlantInformations = styled.div`
  display: flex;
  justify-content: space-between;
`;
