import React from 'react';

import {
  Title,
  Subtitle,
  LogoContainer,
  SunContainer,
  CardGroup,
  ButtonGroup,
} from './styles';

import Card from '../../components/Card';
import { Button } from '../../components/Button/Button.styled';
import { GeneralContainer } from '../../components/GeneralContainer';
import WaterMark from '../../components/WaterMark';

import Logo from '../../assets/logo/logo-greenthumb.svg';
import Dog from '../../assets/illustrations/dog.png';
import Pet from '../../assets/icons/coral/pet.svg';
import NoAnswer from '../../assets/icons/coral/no-answer.svg';
import GreenArrowRight from '../../assets/icons/green/greenArrowRight.svg';
import GreenArrowLeft from '../../assets/icons/green/greenArrowLeft.svg';

export default function Pets() {
  return (
    <>
      <WaterMark />
      <GeneralContainer>
        <LogoContainer>
          <img src={Logo} alt="greenthumb logo" />
        </LogoContainer>
        <SunContainer>
          <img src={Dog} alt="" />
        </SunContainer>
        <Title>
          Do you have pets? Do they <strong>chew</strong> plants?
        </Title>
        <Subtitle>
          We are asking because some plants can be <strong>toxic</strong> for
          your buddy.
        </Subtitle>
        <CardGroup>
          <Card>
            <img src={Pet} alt="" />
            Yes
          </Card>
          <Card>
            <img src={NoAnswer} alt="" />
            No/They don't care
          </Card>
        </CardGroup>
        <ButtonGroup>
          <a href="/picks">
            <Button>
              <img src={GreenArrowRight} alt="Arrow" />
              finish
            </Button>
          </a>
          <a href="/water">
            <Button>
              <img src={GreenArrowLeft} alt="" />
              previous
            </Button>
          </a>
        </ButtonGroup>
      </GeneralContainer>
    </>
  );
}
