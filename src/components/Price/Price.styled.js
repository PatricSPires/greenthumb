import styled from 'styled-components'
import { colors, fontSize } from '../../shared/variables'

export const PriceComponent = styled.p`
  font-size: ${props => props.fontSize || `${fontSize['u-fontSize-18']}`}px;
  color: ${colors.alto_six};
  font-weight: normal;
`
