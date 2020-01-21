import React from 'react';
import { NavLink } from 'react-router-dom';

import { Title, Container } from './MainStyles';
import { MediumButton } from '../../components/Button/Button.styled';

import Logo from '../../assets/logo/logo-greenthumb.svg';

import { ReactComponent as ArrowRight } from '../../assets/icons/white/whiteArrow.svg';

export default function Main() {
  return (
    <>
      <Container bgPrimary>
        <img className="logo" src={Logo} alt="sadasd" />
        <Title>Find your next green friend</Title>
        <NavLink to="/sunlight">
          <MediumButton primary>
            <ArrowRight />
            start quizz
          </MediumButton>
        </NavLink>
      </Container>
    </>
  );
}
