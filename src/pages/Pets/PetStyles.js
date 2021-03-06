import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 22px;
  max-width: 288px;
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
    max-width: 732px;
    margin-bottom: 20px;
    font-size: 30px;
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
    width: 90px;
    height: 74px;
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

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 66%;
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

  @media (min-width: 1024px) {
    width: 62%;
    margin: 50px auto 0;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
`
