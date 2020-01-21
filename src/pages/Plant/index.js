import React, { Component } from 'react';
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

export default class Plant extends Component {
  constructor() {
    super();
    this.state = {
      plant: [],
    };
  }

  async componentDidMount() {
    const selectedPlant = localStorage.getItem('plant');

    const response = await api.get(`/plant?id=${selectedPlant}`);
    this.setState({
      plant: response.data,
    });
  }

  render() {
    const { name, price, url, sun, water, toxicity } = this.state.plant;
    return (
      <Container>
        <Header>
          <Logo />
        </Header>
        <BuyContainer>
          <Purchase>
            <h1>{name}</h1>
            <Price price={price} fontSize={24} />
            <img src={url} alt={`This plant is: ${name}`} />
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
                  Low Sunight
                </PlantInformation>
              ) : (
                ''
              )}
              {sun === 'no' ? (
                <PlantInformation>
                  <NoSun />
                  No Sunight
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
                  Water Regulary
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
}
