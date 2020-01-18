import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Title, SunContainer, CardGroup, ButtonGroup } from './styles';

import { Card } from '../../components/Card/Card.styled';
import { Button } from '../../components/Button/Button.styled';

import WateringCan from '../../assets/illustrations/wateringcan.png';
import { ReactComponent as OneDrop } from '../../assets/icons/green/one-drop.svg';
import { ReactComponent as TwoDrops } from '../../assets/icons/green/two-drops.svg';
import { ReactComponent as ThreeDrops } from '../../assets/icons/green/three-drops.svg';
import { ReactComponent as GreenArrowRight } from '../../assets/icons/green/greenArrowRight.svg';
import { ReactComponent as GreenArrowLeft } from '../../assets/icons/green/greenArrowLeft.svg';

import Container from '../../components/Container';
import { AskContainer } from '../../components/AskContainer';
import Header from '../../components/Header';
import Logo from '../../components/Logo';

class Water extends Component {
  setInputOption = option => {
    localStorage.setItem('water', JSON.stringify(option));
  };

  render() {
    return (
      <>
        <Container>
          <AskContainer>
            <Header>
              <Logo />
            </Header>
            <SunContainer>
              <img src={WateringCan} alt="" />
            </SunContainer>
            <Title>
              How often do you want to <strong>water</strong> your plant?
            </Title>
            <CardGroup>
              <Card onClick={() => this.setInputOption('rarely')}>
                <OneDrop />
                Rarely
              </Card>
              <Card onClick={() => this.setInputOption('regularly')}>
                <TwoDrops />
                Regularly
              </Card>
              <Card onClick={() => this.setInputOption('daily')}>
                <ThreeDrops />
                Daily
              </Card>
            </CardGroup>
            <ButtonGroup>
              <NavLink to="/pets">
                <Button>
                  <GreenArrowRight />
                  next
                </Button>
              </NavLink>
              <NavLink to="/sunlight">
                <Button>
                  <GreenArrowLeft />
                  previous
                </Button>
              </NavLink>
            </ButtonGroup>
          </AskContainer>
        </Container>
      </>
    );
  }
}
export default Water;
