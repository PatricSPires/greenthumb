import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Stripe, Logo } from './styles'
import LogoGt from '../../assets/logo/logo-greenthumb.svg'

export default function WaterMark() {
  return (
    <Container>
      <NavLink to="/">
        <Logo src={LogoGt} alt="Logo greenthumb" title="Logo greenthumb" />
      </NavLink>
      <Stripe />
    </Container>
  )
}
