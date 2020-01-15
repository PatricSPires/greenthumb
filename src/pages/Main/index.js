import React from 'react';

import { IoIosArrowRoundForward } from 'react-icons/io';
import { Title, Container } from './MainStyles';
import { Button } from '../../components/Button/Button.styled';

import Logo from '../../assets/logo/logo-greenthumb.svg';

export default function Main() {
  return (
    <>
      <Container>
        <img className="logo" src={Logo} alt="sadasd" />
        <Title>Find your next green friend</Title>
        <a href="/sunlight">
          <Button primary>
            <IoIosArrowRoundForward />
            start quizz
          </Button>
        </a>
      </Container>
    </>
  );
}
