import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { PriceComponent } from './Price.styled';

export default function Price({ price, fontSize }) {
  return (
    <PriceComponent fontSize={fontSize}>
      {price ? `$${price}` : <Skeleton count={1} duration={2} />}
    </PriceComponent>
  );
}
