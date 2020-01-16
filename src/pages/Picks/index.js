import React, { Component } from 'react';

import { Title, LogoContainer, SunContainer } from './styles';
import Logo from '../../assets/logo/logo-greenthumb.svg';
import HandPick from '../../assets/illustrations/pick.png';
import WaterMark from '../../components/WaterMark';
import { Button } from '../../components/Button/Button.styled';

// Icons
import toxic from '../../assets/icons/grey/toxic.svg';
import highSun from '../../assets/icons/grey/highSun.svg';
import lowSun from '../../assets/icons/grey/lowSun.svg';
import noSun from '../../assets/icons/grey/noSun.svg';
import oneDrop from '../../assets/icons/grey/oneDrop.svg';
import twoDrops from '../../assets/icons/grey/twoDrops.svg';
import threeDrops from '../../assets/icons/grey/threeDrops.svg';

import {
  Container,
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
    const sunlight = JSON.parse(localStorage.getItem('sunlight'));
    const water = JSON.parse(localStorage.getItem('water'));
    const pets = JSON.parse(localStorage.getItem('pets'));
    const response = await api.get(
      `?sun=${sunlight}&water=${water}&pets=${pets}`
    );

    this.setState({
      plants: [...this.state.plants, ...response.data],
    });
    console.log(this.state.plants);
  };

  render() {
    return (
      <>
        <WaterMark />
        <Container>
          <LogoContainer>
            <img src={Logo} alt="greenthumb logo" />
          </LogoContainer>
          <SunContainer>
            <img src={HandPick} alt="Handle picking a plant" />
          </SunContainer>
          <Title>Our picks for you</Title>
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
                      {plant.sun === 'high' ? <img src={highSun} alt="" /> : ''}
                      {plant.sun === 'low' ? <img src={lowSun} alt="" /> : ''}
                      {plant.sun === 'no' ? <img src={noSun} alt="" /> : ''}

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
                  <Button>buy now</Button>
                </BuyPlant>
              </PlantCard>
            ))}
          </PlantContainer>
        </Container>
      </>
    );
  }
}
export default Picks;
