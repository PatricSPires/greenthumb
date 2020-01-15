import React from 'react';

import { IoIosArrowRoundForward } from 'react-icons/io';
import { Title, Container, ContainerImage } from './MainStyles';
import { Button } from '../../components/Button/Button.styled';

import Logo from '../../assets/logo/logo-greenthumb.svg';
import HeroMobile from '../../assets/illustrations/illustration-home-mobile.png';

export default function Main() {
  return (
    <>
      <Container>
        <img className="logo" src={Logo} alt="sadasd" />
        <Title>Find your next green friend</Title>
        <Button primary>
          <IoIosArrowRoundForward />
          start quizz
        </Button>
      </Container>
      <ContainerImage>
        <img className="heroMobile" src={HeroMobile} alt="asdasdasd" />
      </ContainerImage>
    </>
  );
}
