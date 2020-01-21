import React from 'react';

import { PriceComponent } from './Price.styled';

export default function Price({ price, fontSize }) {
  return <PriceComponent fontSize={fontSize}>${price}</PriceComponent>;
}
