import React from 'react'
import { NavLink } from 'react-router-dom'

import { LogoComponent } from './Logo.styled'
import { ReactComponent as LogoImage } from '../../assets/logo/logo-greenthumb.svg'

export default function Logo() {
  return (
    <LogoComponent>
      <NavLink to="/">
        <LogoImage />
      </NavLink>
    </LogoComponent>
  )
}
