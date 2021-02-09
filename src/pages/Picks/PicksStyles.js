import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 40px;
  max-width: 243px;
  width: 100%;
  text-align: center;
  margin: 0 auto 28px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  color: #0c261c;

  strong {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    max-width: 732px;
    margin-bottom: 20px;
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 65px;
    max-width: 598px;
    margin-bottom: 78px;
  }
`

export const Subtitle = styled.h2`
  color: #6e6e6e;
  font-size: 14px;
  font-weight: 300;
  width: 100%;
  max-width: 254px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    max-width: 640px;
    margin-bottom: 48px;
  }
`

export const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 146px;
    height: 72px;
  }

  @media (min-width: 1024px) {
    img {
      width: 226px;
      height: 112px;
    }
  }
`

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
`

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 160px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    height: auto;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 38px;

  @media (min-width: 768px) {
    width: 80%;
    margin: 50px auto 0;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
`
