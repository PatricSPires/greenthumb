import React from 'react';

import { PriceComponent } from './Price.styled';

export default function Price({ price }) {
  return <PriceComponent>${price}</PriceComponent>;
}
