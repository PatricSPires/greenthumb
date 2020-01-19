import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #f6f6f6;

  @media (min-width: 1024px) {
    max-width: 381px;
    width: 100%;
  }
`;

export const FormComponent = styled.form`
  padding: 30px 10px;
  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #0c261c;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    color: #6e6e6e;
    line-height: 27px;
    margin-bottom: 30px;
    max-width: 282px;
  }

  button {
    margin-top: 30px;
    background-color: transparent;
  }

  @media (min-width: 1024px) {
    padding: 42px 50px;
    h1 {
      font-size: 40px;
      font-weight: bold;
      color: #0c261c;
      margin-bottom: 16px;
    }

    p {
      line-height: 29px;
    }
  }
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
