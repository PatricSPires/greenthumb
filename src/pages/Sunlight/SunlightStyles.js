import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 22px;
  max-width: 230px;
  width: 100%;
  text-align: center;
  margin: 0 auto 32px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  color: #6e6e6e;

  strong {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    max-width: 470px;
    margin-bottom: 65px;
    font-size: 30px;
  }
`;

export const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 96px;
    height: 96px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;

  img {
    width: 196px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 248px;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 38px;

  @media (min-width: 1024px) {
    width: 96%;
    margin: 50px auto 0;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
`;
