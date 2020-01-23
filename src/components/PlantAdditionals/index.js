import React from 'react';

import { PlantAdditionalsComponent } from './PlantAdditionals.styled';

import toxic from '../../assets/icons/grey/toxic.svg';
import highSun from '../../assets/icons/grey/highSun.svg';
import lowSun from '../../assets/icons/grey/lowSun.svg';
import noSun from '../../assets/icons/grey/noSun.svg';
import oneDrop from '../../assets/icons/grey/oneDrop.svg';
import twoDrops from '../../assets/icons/grey/twoDrops.svg';
import threeDrops from '../../assets/icons/grey/threeDrops.svg';

export default function PlantAdditionals({ sun, water, toxicity }) {
  return (
    <PlantAdditionalsComponent>
      {toxicity ? <img src={toxic} alt="This plant is toxic" /> : ''}
      {sun === 'high' && <img src={highSun} alt="" />}
      {sun === 'low' && <img src={lowSun} alt="" />}
      {sun === 'no' && <img src={noSun} alt="" />}

      {water === 'rarely' ? <img src={oneDrop} alt="" /> : ''}
      {water === 'regularly' ? <img src={twoDrops} alt="" /> : ''}
      {water === 'daily' ? <img src={threeDrops} alt="" /> : ''}
    </PlantAdditionalsComponent>
  );
}
