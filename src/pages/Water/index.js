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
import WateringCan from '../../assets/illustrations/wateringcan.png';
import OneDrop from '../../assets/icons/green/one-drop.svg';
import TwoDrops from '../../assets/icons/green/two-drops.svg';
import ThreeDrops from '../../assets/icons/green/three-drops.svg';
import WhiteArrow from '../../assets/icons/white/whiteArrow.svg';
import GreenArrow from '../../assets/icons/green/greenArrow.svg';

export default function Water() {
  return (
    <>
      <WaterMark />
      <GeneralContainer>
        <LogoContainer>
          <img src={Logo} alt="greenthumb logo" />
        </LogoContainer>
        <SunContainer>
          <img src={WateringCan} alt="" />
        </SunContainer>
        <Title>
          How often do you want to <strong>water</strong> your plant?
        </Title>
        <CardGroup>
          <Card>
            <img src={OneDrop} alt="" />
            High sunlight
          </Card>
          <Card>
            <img src={TwoDrops} alt="" />
            Low sunlight
          </Card>
          <Card>
            <img src={ThreeDrops} alt="" />
            No sunlight
          </Card>
        </CardGroup>
        <ButtonGroup>
          <a href="/pets">
            <Button primary>
              <img src={WhiteArrow} alt="Arrow" />
              next
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
