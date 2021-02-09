import styled from 'styled-components'
import { colors, fontSize } from '../../shared/variables'

export const SmallButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading
}))`
  background-color: ${props =>
    props.primary ? `${colors.green_pea}` : 'transparent'};
  border-radius: 28px;
  height: 50px;
  color: ${props =>
    props.primary ? `${colors.white}` : `${colors.green_pea}`};
  border: ${props => (props.primary ? 0 : `1px solid ${colors.green_pea}`)};
  font-size: ${fontSize['u-fontSize-16']};
  margin-bottom: 34px;
  transition: 0.2s;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    path {
      stroke: ${props =>
        props.primary ? `${colors.white}` : `${colors.green_pea}`};
    }
  }

  &:hover {
    background-color: ${props =>
      props.primary ? 'transparent' : `${colors.green_pea}`};
    border: ${props =>
      props.primary
        ? `1px solid ${colors.green_pea}`
        : `1px solid ${colors.white}`};
    color: ${props =>
      props.primary ? `${colors.green_pea}` : `${colors.white}`};

    svg {
      path {
        stroke: ${props =>
          props.primary ? `${colors.green_pea}` : `${colors.white}`};
      }
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (min-width: 1024px) {
    max-width: 146px;
    width: 100%;
  }
`

export const MediumButton = styled(SmallButton)`
  width: 174px;

  @media (min-width: 1024px) {
    width: 174px;
  }
`

export const LargerButton = styled(SmallButton)`
  max-width: 292px;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 292px;
  }
`
