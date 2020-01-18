import React from 'react';

import { LogoComponent } from './Logo.styled';
import { ReactComponent as LogoImage } from '../../assets/logo/logo-greenthumb.svg';

export default function Logo() {
  return (
    <LogoComponent>
      <LogoImage />
    </LogoComponent>
  );
}
