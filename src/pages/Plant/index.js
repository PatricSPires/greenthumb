import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import api from '../../services/api';

import { Purchase } from '../../components/Purchase';
import Price from '../../components/Price';

import { ReactComponent as Toxic } from '../../assets/icons/grey/toxic.svg';
import { ReactComponent as Pet } from '../../assets/icons/grey/pet.svg';
import { ReactComponent as HighSun } from '../../assets/icons/grey/highSun.svg';
import { ReactComponent as LowSun } from '../../assets/icons/grey/lowSun.svg';
import { ReactComponent as NoSun } from '../../assets/icons/grey/noSun.svg';
import { ReactComponent as OneDrop } from '../../assets/icons/grey/oneDrop.svg';
import { ReactComponent as TwoDrops } from '../../assets/icons/grey/twoDrops.svg';
import { ReactComponent as ThreeDrops } from '../../assets/icons/grey/threeDrops.svg';

import Form from '../../components/Form';

import Container from '../../components/Container';
import { BuyContainer } from '../../components/BuyContainer/BuyContainer.styled';
import PlantInformation from '../../components/PlantInformation';
import { Informations } from './PlantStyles';
import Logo from '../../components/Logo';
import Header from '../../components/Header';

function Plant({ match }) {
  const [plant, setPlant] = useState([]);
  const selectedPlantId = match.params.plantId;

  useEffect(() => {
    async function getPlantInformation() {
      const response = await api.get(`/plant?id=${selectedPlantId}`);
      setPlant(response.data);
    }
    getPlantInformation();
  }, [selectedPlantId]);

  const { name, price, url, sun, water, toxicity } = plant;

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <BuyContainer>
        <Purchase>
          <h1>{name || <Skeleton count={1} />}</h1>
          <Price price={price} fontSize={24} />
          {url ? (
            <img src={url} alt={`This plant is: ${name}`} />
          ) : (
            <Skeleton />
          )}
          <Informations>
            {sun === 'high' ? (
              <PlantInformation>
                <HighSun />
                High Sunlight
              </PlantInformation>
            ) : (
              ''
            )}
            {sun === 'low' ? (
              <PlantInformation>
                <LowSun />
                Low Sunlight
              </PlantInformation>
            ) : (
              ''
            )}
            {sun === 'no' ? (
              <PlantInformation>
                <NoSun />
                No Sunlight
              </PlantInformation>
            ) : (
              ''
            )}

            {water === 'rarely' ? (
              <PlantInformation>
                <OneDrop />
                Water Rarely
              </PlantInformation>
            ) : (
              ''
            )}
            {water === 'regularly' ? (
              <PlantInformation>
                <TwoDrops />
                Water Regularly
              </PlantInformation>
            ) : (
              ''
            )}
            {water === 'daily' ? (
              <PlantInformation>
                <ThreeDrops />
                Water Daily
              </PlantInformation>
            ) : (
              ''
            )}

            {toxicity ? (
              <PlantInformation>
                <Toxic />
                <strong>Beware!</strong> &nbsp;Toxic for pets
              </PlantInformation>
            ) : (
              <PlantInformation>
                <Pet />
                Non-toxic for pets
              </PlantInformation>
            )}
          </Informations>
        </Purchase>
        <Form />
      </BuyContainer>
    </Container>
  );
}

export default Plant;
