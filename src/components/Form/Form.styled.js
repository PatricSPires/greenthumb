import styled, { css } from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
  background-color: #ffffff;
  max-width: 297px;
  height: 40px;
  border-radius: 19px;
  font-size: 14px;
  color: #d0d0d0;
  border: none;
  padding: 6px 75px 6px 25px;

  &:focus {
    box-shadow: 0px 10px 28px rgba(0, 0, 0, 0.0896799);
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #f71d1d;
      outline: none;
    `}
`;

export const FormContainer = styled.div`
  background-color: #f6f6f6;
  padding: 28px 10px;

  h1 {
    margin-bottom: 18px;
    padding-left: 18px;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 29px;
    color: #6e6e6e;
    max-width: 260px;
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
    }

    p {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 29px;
      color: #6e6e6e;
      max-width: 250px;
      margin-bottom: 30px;
    }

    button {
      margin: 0 0 0 auto;
      background-color: transparent;
    }
  }
`;

export const Error = styled.div`
  color: #f71d1d;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 27px;
  margin-bottom: 22px;
`;

export const EmailSent = styled.div`
  position: absolute;
  top: 138px;
  background-color: #f6f6f6;
  width: 381px;
  height: 504px;
  padding: 46px 80px;
  display: none;

  h1 {
    font-size: 35px;
    color: #0c261c;
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 27px;
    color: #6e6e6e;
    text-align: center;
    max-width: 265px;
    margin: 0 auto 36px;
  }

  img {
    margin: 0 auto;
  }
`;
