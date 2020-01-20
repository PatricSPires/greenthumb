import styled from 'styled-components';

export const HeaderComponent = styled.header`
  max-width: 732px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    padding-top: 96px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
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

export const Subtitle = styled.h3`
  font-size: 14px;
  color: #6e6e6e;
  line-height: 39px;
  text-align: center;
`;
