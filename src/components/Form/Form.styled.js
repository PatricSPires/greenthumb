import styled from 'styled-components';

export const FormComponent = styled.form`
  padding: 30px 10px;
  background-color: #f6f6f6;
  padding-left: 26px;

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
  }

  @media (min-width: 1024px) {
    padding: 42px 50px;
    max-width: 381px;
    width: 100%;

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
