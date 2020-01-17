import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Title,
  LogoContainer,
  SunContainer,
  CardGroup,
  ButtonGroup,
} from './styles';

import Card from '../../components/Card';
import { Button } from '../../components/Button/Button.styled';

import Logo from '../../assets/logo/logo-greenthumb.svg';
import Sun from '../../assets/illustrations/sun.png';
import { ReactComponent as HighSun } from '../../assets/icons/coral/high-sun.svg';
import { ReactComponent as LowhSun } from '../../assets/icons/coral/low-sun.svg';
import { ReactComponent as NoAnswer } from '../../assets/icons/coral/no-answer.svg';
import { ReactComponent as GreenArrowRight } from '../../assets/icons/green/greenArrowRight.svg';
import { ReactComponent as GreenArrowLeft } from '../../assets/icons/green/greenArrowLeft.svg';

import Container from '../../components/Container';
import { AskContainer } from '../../components/AskContainer';

class Sunlight extends Component {
  setInputOption = option => {
    localStorage.setItem('sunlight', JSON.stringify(option));
  };

  render() {
    return (
      <>
        <Container>
          <AskContainer>
            <LogoContainer>
              <img src={Logo} alt="greenthumb logo" />
            </LogoContainer>
            <SunContainer>
              <img src={Sun} alt="" />
            </SunContainer>
            <Title>
              First, set the amount of <strong>sunlight</strong> your plant will
              get.
            </Title>
            <CardGroup>
              <Card onClick={() => this.setInputOption('high')}>
                <HighSun />
                High sunlight
              </Card>
              <Card onClick={() => this.setInputOption('low')}>
                <LowhSun />
                Low sunlight
              </Card>
              <Card onClick={() => this.setInputOption('no')}>
                <NoAnswer />
                No sunlight
              </Card>
            </CardGroup>
            <ButtonGroup>
              <NavLink to="/water">
                <Button>
                  <GreenArrowRight />
                  next
                </Button>
              </NavLink>
              <NavLink to="/">
                <Button>
                  <GreenArrowLeft />
                  home
                </Button>
              </NavLink>
            </ButtonGroup>
          </AskContainer>
        </Container>
      </>
    );
  }
}

export default Sunlight;
