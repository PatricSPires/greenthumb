import React from 'react';

import { HeaderComponent } from './Header.styled';

export default function Header({ children }) {
  return <HeaderComponent>{children}</HeaderComponent>;
}
