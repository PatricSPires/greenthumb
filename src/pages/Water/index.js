import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import {
  Title,
  IllustrationContainer,
  CardGroup,
  ButtonGroup,
} from './WaterStyles';

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
import * as PreferenceActions from '../../store/modules/preferences/actions';

class Water extends Component {
  setInputOption = option => {
    localStorage.setItem('water', JSON.stringify(option));
  };

  handleAddPreference(preference) {
    const { addWater } = this.props;
    addWater(preference);
  }

  render() {
    return (
      <>
        <Container>
          <AskContainer>
            <Header>
              <Logo />
            </Header>
            <IllustrationContainer>
              <img src={WateringCan} alt="" />
            </IllustrationContainer>
            <Title>
              How often do you want to <strong>water</strong> your plant?
            </Title>
            <CardGroup>
              <Card onClick={() => this.handleAddPreference('rarely')}>
                <OneDrop />
                Rarely
              </Card>
              <Card onClick={() => this.handleAddPreference('regularly')}>
                <TwoDrops />
                Regularly
              </Card>
              <Card onClick={() => this.handleAddPreference('daily')}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(PreferenceActions, dispatch);

export default connect(null, mapDispatchToProps)(Water);
