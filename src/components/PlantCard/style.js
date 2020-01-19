import styled from 'styled-components';

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
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PlantCard = styled.div`
  display: flex;
  width: 268px;
  background-color: yellow;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 54px;

  img {
    width: 200px;
    margin: 0 auto;
  }
`;

export const PlantTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  color: #15573f;
`;

export const PlantPrice = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: #6e6e6e;
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

export const PlantAdditionals = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 92px;
  width: 100%;
  margin-bottom: 12px;

  img {
    width: auto;
  }
`;
