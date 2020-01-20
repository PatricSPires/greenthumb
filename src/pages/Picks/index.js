import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../../store';

import { Title, IllustrationContainer } from './PicksStyles';
import HandPick from '../../assets/illustrations/pick.png';
import { Button } from '../../components/Button/Button.styled';

// Icons
import toxic from '../../assets/icons/grey/toxic.svg';
import highSun from '../../assets/icons/grey/highSun.svg';
import lowSun from '../../assets/icons/grey/lowSun.svg';
import noSun from '../../assets/icons/grey/noSun.svg';
import oneDrop from '../../assets/icons/grey/oneDrop.svg';
import twoDrops from '../../assets/icons/grey/twoDrops.svg';
import threeDrops from '../../assets/icons/grey/threeDrops.svg';

import Container from '../../components/Container';
import { PicksContainer } from '../../components/PicksContainer/PicksContainer.styled';
import Header from '../../components/Header';
import Logo from '../../components/Logo';

import {
  PlantContainer,
  PlantCard,
  PlantTitle,
  PlantPrice,
  BuyPlant,
  PlantInformations,
  PlantAdditionals,
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
        <Container>
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
                      <PlantAdditionals>
                        {plant.toxicity ? (
                          <img src={toxic} alt="This plant is toxic" />
                        ) : (
                          ''
                        )}
                        {plant.sun === 'high' && <img src={highSun} alt="" />}
                        {plant.sun === 'low' && <img src={lowSun} alt="" />}
                        {plant.sun === 'no' && <img src={noSun} alt="" />}

                        {plant.water === 'rarely' ? (
                          <img src={oneDrop} alt="" />
                        ) : (
                          ''
                        )}
                        {plant.water === 'regularly' ? (
                          <img src={twoDrops} alt="" />
                        ) : (
                          ''
                        )}
                        {plant.water === 'daily' ? (
                          <img src={threeDrops} alt="" />
                        ) : (
                          ''
                        )}
                      </PlantAdditionals>
                    </PlantInformations>
                    <NavLink to="/plant">
                      <Button onClick={() => this.saveplant(plant.id)}>
                        buy now
                      </Button>
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
