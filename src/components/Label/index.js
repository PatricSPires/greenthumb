import React from 'react'

import { LabelComponent } from './Label.styled'

export default function Label({ text, htmlFor }) {
  return (
    <div>
      <LabelComponent hrtmlFor={htmlFor}>{text}</LabelComponent>
    </div>
  )
}
