import React from 'react';

import { PlantInformationComponent } from './PlantInformation.styled';

export default function PlantInformation({ children }) {
  return <PlantInformationComponent>{children}</PlantInformationComponent>;
}
