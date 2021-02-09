import styled, { css } from 'styled-components'
import { Field } from 'formik'
import { colors, fontSize } from '../../shared/variables'

export const Input = styled(Field)`
  background-color: ${colors.white};
  height: 40px;
  border-radius: 19px;
  font-size: ${fontSize['u-fontSize-14']};
  color: ${colors.dove_gray};
  border: none;
  padding: 6px 75px 6px 25px;
  width: 100%;

  &:focus {
    box-shadow: 0px 10px 28px ${colors.bg_shadow};
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${colors.torch_red};
      outline: none;
    `}
`

export const FormContainer = styled.div`
  background-color: ${colors.wild_sand};
  padding: 28px 10px;

  h1 {
    margin-bottom: 18px;
    padding-left: 18px;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: ${fontSize['u-fontSize-16']};
    line-height: 29px;
    color: ${colors.dove_gray};
    max-width: 310px;
    margin-bottom: 30px;
    padding-left: 18px;
  }

  button {
    width: 100%;
    background-color: transparent;
  }

  @media (min-width: 1024px) {
    padding: 40px 48px;
    max-width: 381px;
    width: 100%;

    h1 {
      margin-bottom: 16px;
      padding-left: 0;
    }

    p {
      font-style: normal;
      font-weight: 300;
      font-size: ${fontSize['u-fontSize-16']};
      line-height: 29px;
      color: ${colors.dove_gray};
      max-width: 230px;
      margin-bottom: 30px;
      padding-left: 0;
    }

    button {
      margin: 0 0 0 auto;
      background-color: transparent;
    }
  }
`

export const Error = styled.div`
  color: ${colors.torch_red};
  font-style: normal;
  font-weight: normal;
  font-size: ${fontSize['u-fontSize-12']};
  line-height: 27px;
  margin-bottom: 22px;
`
