import React from 'react';

import { Container, Stripe, Logo } from './styles';
import LogoGt from '../../assets/logo/logo-greenthumb.svg';

export default function WaterMark() {
  return (
    <Container>
      <Logo src={LogoGt} alt="Logo greenthumb" />
      <Stripe />
    </Container>
  );
}
