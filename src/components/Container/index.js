import React from 'react';

import { ContainerComponent } from './Container.styled';
import WaterMark from '../WaterMark';

export default function Container({ children }) {
  return (
    <ContainerComponent>
      <WaterMark />
      {children}
    </ContainerComponent>
  );
}
