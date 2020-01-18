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
import { Informations } from './styles';
import Logo from '../../components/Logo';

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
    return (
      <Container>
        <Logo />
        <BuyContainer>
          <Purchase>
            <h1>{this.state.plant.name}</h1>
            <Price price={this.state.plant.price} />
            <img
              src={this.state.plant.url}
              alt={`This plant is: ${this.state.plant.name}`}
            />
            <Informations>
              {this.state.plant.sun === 'high' ? (
                <PlantInformation>
                  <HighSun />
                  High Sunight
                </PlantInformation>
              ) : (
                ''
              )}
              {this.state.plant.sun === 'low' ? (
                <PlantInformation>
                  <LowSun />
                  Low Sunight
                </PlantInformation>
              ) : (
                ''
              )}
              {this.state.plant.sun === 'no' ? (
                <PlantInformation>
                  <NoSun />
                  No Sunight
                </PlantInformation>
              ) : (
                ''
              )}

              {this.state.plant.water === 'rarely' ? (
                <PlantInformation>
                  <OneDrop />
                  Water Rarely
                </PlantInformation>
              ) : (
                ''
              )}
              {this.state.plant.water === 'regularly' ? (
                <PlantInformation>
                  <TwoDrops />
                  Water Regulary
                </PlantInformation>
              ) : (
                ''
              )}
              {this.state.plant.water === 'daily' ? (
                <PlantInformation>
                  <ThreeDrops />
                  Water Daily
                </PlantInformation>
              ) : (
                ''
              )}

              {this.state.plant.toxicity ? (
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
