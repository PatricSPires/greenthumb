import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import {
  Title,
  IllustrationContainer,
  CardGroup,
  ButtonGroup,
} from './SunlightStyles';

import { Button } from '../../components/Button/Button.styled';

import Sun from '../../assets/illustrations/sun.png';
import { ReactComponent as HighSun } from '../../assets/icons/coral/high-sun.svg';
import { ReactComponent as LowhSun } from '../../assets/icons/coral/low-sun.svg';
import { ReactComponent as NoAnswer } from '../../assets/icons/coral/no-answer.svg';
import { ReactComponent as GreenArrowRight } from '../../assets/icons/green/greenArrowRight.svg';
import { ReactComponent as GreenArrowLeft } from '../../assets/icons/green/greenArrowLeft.svg';

import Container from '../../components/Container';
import { AskContainer } from '../../components/AskContainer';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import { Card } from '../../components/Card/Card.styled';

import * as PreferenceActions from '../../store/modules/preferences/actions';

class Sunlight extends Component {
  setInputOption = option => {
    localStorage.setItem('sunlight', JSON.stringify(option));
  };

  handleAddPreference(preference) {
    const { addSunlight } = this.props;
    addSunlight(preference);
  }

  render() {
    return (
      <>
        <Container>
          <AskContainer>
            <Header>
              <Logo />
              <IllustrationContainer>
                <img src={Sun} alt="" />
              </IllustrationContainer>
            </Header>
            <Title>
              First, set the amount of <strong>sunlight</strong> your plant will
              get.
            </Title>
            <CardGroup>
              <Card primary onClick={() => this.handleAddPreference('high')}>
                <HighSun />
                High sunlight
              </Card>
              <Card primary onClick={() => this.handleAddPreference('low')}>
                <LowhSun />
                Low sunlight
              </Card>
              <Card primary onClick={() => this.handleAddPreference('no')}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(PreferenceActions, dispatch);

export default connect(null, mapDispatchToProps)(Sunlight);
