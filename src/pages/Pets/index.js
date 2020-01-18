import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Title,
  Subtitle,
  SunContainer,
  CardGroup,
  ButtonGroup,
} from './styles';

import Card from '../../components/Card';
import { Button } from '../../components/Button/Button.styled';

import Dog from '../../assets/illustrations/dog.png';
import { ReactComponent as Pet } from '../../assets/icons/coral/pet.svg';
import { ReactComponent as NoAnswer } from '../../assets/icons/coral/no-answer.svg';
import { ReactComponent as GreenArrowRight } from '../../assets/icons/green/greenArrowRight.svg';
import { ReactComponent as GreenArrowLeft } from '../../assets/icons/green/greenArrowLeft.svg';

import Container from '../../components/Container';
import { AskContainer } from '../../components/AskContainer';
import Header from '../../components/Header';
import Logo from '../../components/Logo';

class Pets extends Component {
  setInputOption = option => {
    localStorage.setItem('pets', JSON.stringify(option));
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
              <img src={Dog} alt="" />
            </SunContainer>
            <Title>
              Do you have pets? Do they <strong>chew</strong> plants?
            </Title>
            <Subtitle>
              We are asking because some plants can be <strong>toxic</strong>{' '}
              for your buddy.
            </Subtitle>
            <CardGroup>
              <Card onClick={() => this.setInputOption(true)}>
                <Pet />
                Yes
              </Card>
              <Card onClick={() => this.setInputOption(false)}>
                <NoAnswer />
                No/They don't care
              </Card>
            </CardGroup>
            <ButtonGroup>
              <NavLink to="/picks">
                <Button>
                  <GreenArrowRight />
                  finish
                </Button>
              </NavLink>
              <NavLink to="/water">
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

export default Pets;
