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
import WhiteArrow from '../../assets/icons/white/whiteArrow.svg';
import GreenArrow from '../../assets/icons/green/greenArrow.svg';

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
            High sunlight
          </Card>
          <Card>
            <img src={NoAnswer} alt="" />
            Low sunlight
          </Card>
        </CardGroup>
        <ButtonGroup>
          <a href="/pets">
            <Button primary>
              <img src={WhiteArrow} alt="Arrow" />
              finish
            </Button>
          </a>
          <a href="/sunlight">
            <Button>
              <img src={GreenArrow} alt="" />
              previous
            </Button>
          </a>
        </ButtonGroup>
      </GeneralContainer>
    </>
  );
}
