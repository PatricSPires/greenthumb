import React from 'react';

import { InputComponent } from './Input.styled';

export default function Input({ placeholder, type }) {
  return <InputComponent placeholder={placeholder} type={type} />;
}
