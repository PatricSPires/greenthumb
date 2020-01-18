import React from 'react';

import { CardComponent } from './Card.styled';

export default function Card({ children, primary }) {
  return <CardComponent primary={primary}>{children}</CardComponent>;
}
