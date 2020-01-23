import React from 'react';

import { PlantAdditionalsComponent } from './PlantAdditionals.styled';

import { ReactComponent as Toxic } from '../../assets/icons/grey/toxic.svg';
import { ReactComponent as HighSun } from '../../assets/icons/grey/highSun.svg';
import { ReactComponent as LowSun } from '../../assets/icons/grey/lowSun.svg';
import { ReactComponent as NoSun } from '../../assets/icons/grey/noSun.svg';
import { ReactComponent as OneDrop } from '../../assets/icons/grey/oneDrop.svg';
import { ReactComponent as TwoDrops } from '../../assets/icons/grey/twoDrops.svg';
import { ReactComponent as ThreeDrops } from '../../assets/icons/grey/threeDrops.svg';

export default function PlantAdditionals({ sun, water, toxicity }) {
  return (
    <PlantAdditionalsComponent>
      {toxicity && <Toxic />}
      {sun === 'high' && <HighSun />}
      {sun === 'low' && <LowSun />}
      {sun === 'no' && <NoSun />}

      {water === 'rarely' && <OneDrop />}
      {water === 'regularly' && <TwoDrops />}
      {water === 'daily' && <ThreeDrops />}
    </PlantAdditionalsComponent>
  );
}
