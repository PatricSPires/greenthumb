
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ReactComponent as NoAnswer } from '../../assets/icons/coral/no-answer.svg';
import { ReactComponent as Pet } from '../../assets/icons/coral/pet.svg';
import { ReactComponent as GreenArrowLeft } from '../../assets/icons/green/greenArrowLeft.svg';
import { ReactComponent as GreenArrowRight } from '../../assets/icons/green/greenArrowRight.svg';
import Dog from '../../assets/illustrations/dog.png';
import { AskContainer } from '../../components/AskContainer';
import { MediumButton } from '../../components/Button/Button.styled';
import { Card } from '../../components/Card/Card.styled';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import * as PreferenceActions from '../../store/modules/preferences/actions';
import {
  ButtonGroup,
  CardGroup,
  IllustrationContainer,
  Subtitle,
  Title
} from './PetStyles';

class Pets extends Component {
  handleAddPreference(preference) {
    const { addPet } = this.props;
    addPet(preference);
  }

  render() {
    return (
      <>
        <Container bgPrimary>
          <AskContainer>
            <Header>
              <Logo />
            </Header>
            <IllustrationContainer>
              <img src={Dog} alt="" />
            </IllustrationContainer>
            <Title>
              Do you have pets? Do they <strong>chew</strong> plants?
            </Title>
            <Subtitle>
              We are asking because some plants can be <strong>toxic</strong>{' '}
              for your buddy.
            </Subtitle>
            <CardGroup>
              <Card primary onClick={() => this.handleAddPreference(true)}>
                <Pet />
                Yes
              </Card>
              <Card primary onClick={() => this.handleAddPreference(false)}>
                <NoAnswer />
                No/They don&apos;t care
              </Card>
            </CardGroup>
            <ButtonGroup>
              <NavLink to="/picks">
                <MediumButton>
                  <GreenArrowRight />
                  finish
                </MediumButton>
              </NavLink>
              <NavLink to="/water">
                <MediumButton>
                  <GreenArrowLeft />
                  previous
                </MediumButton>
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

export default connect(null, mapDispatchToProps)(Pets);
