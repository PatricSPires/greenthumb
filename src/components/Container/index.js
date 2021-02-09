import React from 'react'

import { ContainerComponent } from './Container.styled'
import WaterMark from '../WaterMark'

export default function Container({ children, bgPrimary }) {
  return (
    <ContainerComponent bgPrimary={bgPrimary}>
      <WaterMark />
      {children}
    </ContainerComponent>
  )
}
