import React from 'react';

import { LabelComponent } from './Label.styled';

export default function Label({ text, labelFor }) {
  return (
    <div>
      <LabelComponent hrtmlFor={labelFor}>{text}</LabelComponent>
    </div>
  );
}
