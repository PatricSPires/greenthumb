import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../../store';

import { Title, IllustrationContainer } from './PicksStyles';
import HandPick from '../../assets/illustrations/pick.png';
import { LargerButton } from '../../components/Button/Button.styled';

import Container from '../../components/Container';
import { PicksContainer } from '../../components/PicksContainer/PicksContainer.styled';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import PlantAdditionals from '../../components/PlantAdditionals';

import {
  PlantContainer,
  PlantCard,
  PlantTitle,
  PlantPrice,
  BuyPlant,
  PlantInformations,
} from '../../components/PlantCard/style';

import api from '../../services/api';

class Picks extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = async e => {
    const { preferences } = store.getState();
    const response = await api.get(
      `?sun=${preferences.sunlight}&water=${preferences.water}&pets=${preferences.pet}`
    );

    this.setState({
      plants: [...this.state.plants, ...response.data],
    });
  };

  saveplant = id => {
    localStorage.setItem('plant', id);
  };

  render() {
    return (
      <>
        <Container bgPrimary>
          <PicksContainer>
            <Header>
              <Logo />
              <IllustrationContainer>
                <img src={HandPick} alt="Handle picking a plant" />
              </IllustrationContainer>
              <Title>Our picks for you</Title>
            </Header>
            <PlantContainer>
              {this.state.plants.map(plant => (
                <PlantCard key={plant.id}>
                  <img src={plant.url} alt={`Plant ${plant.name}`} />
                  <BuyPlant>
                    <PlantTitle>{plant.name}</PlantTitle>
                    <PlantInformations>
                      <PlantPrice>${plant.price}</PlantPrice>
                      <PlantAdditionals
                        sun={plant.sun}
                        water={plant.water}
                        toxicity={plant.toxicity}
                      />
                    </PlantInformations>
                    <NavLink to="/plant">
                      <LargerButton onClick={() => this.saveplant(plant.id)}>
                        buy now
                      </LargerButton>
                    </NavLink>
                  </BuyPlant>
                </PlantCard>
              ))}
            </PlantContainer>
          </PicksContainer>
        </Container>
      </>
    );
  }
}
export default Picks;
