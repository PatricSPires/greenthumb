import React from 'react';
import {
  Title,
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
import Sun from '../../assets/illustrations/sun.png';
import HighSun from '../../assets/icons/coral/high-sun.svg';
import LowhSun from '../../assets/icons/coral/low-sun.svg';
import NoAnswer from '../../assets/icons/coral/no-answer.svg';
import WhiteArrow from '../../assets/icons/white/whiteArrow.svg';
import GreenArrow from '../../assets/icons/green/greenArrow.svg';

export default function Sunlight() {
  return (
    <>
      <WaterMark />
      <GeneralContainer>
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
          <Card>
            <img src={HighSun} alt="" />
            High sunlight
          </Card>
          <Card>
            <img src={LowhSun} alt="" />
            Low sunlight
          </Card>
          <Card>
            <img src={NoAnswer} alt="" />
            No sunlight
          </Card>
        </CardGroup>
        <ButtonGroup>
          <a href="/water">
            <Button primary>
              <img src={WhiteArrow} alt="Arrow" />
              next
            </Button>
          </a>
          <a href="/">
            <Button>
              <img src={GreenArrow} alt="" />
              home
            </Button>
          </a>
        </ButtonGroup>
      </GeneralContainer>
    </>
  );
}
