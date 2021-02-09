import styled from 'styled-components'
import HeroMobile from '../../assets/illustrations/illustration-home-mobile.png'
import HeroDesktop from '../../assets/illustrations/illustration-home.png'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 24px;
  background-image: url(${HeroMobile});
  background-repeat: no-repeat;
  background-position-x: -14%;
  background-position-y: 106%;
  background-size: 84%;
  height: 100vh;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    background-position-x: center;
    background-position-y: 114%;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    background-image: url(${HeroDesktop});
    background-position-x: right;
    background-position-y: bottom;
    background-size: 80%;
    background-size: 70%;
  }

  .logo {
    margin-bottom: 32px;
    width: 166px;

    @media (min-width: 768px) {
      width: 208px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 96px;
    }
  }
`

export const Title = styled.h1`
  color: #0c261c;
  font-weight: bold;
  max-width: 295px;
  margin: 0 auto;
  font-size: 36px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 36px;

  @media (min-width: 1024px) {
    max-width: 433px;
    margin: 0;
    font-size: 66px;
    text-align: left;
    margin-bottom: 28px;
  }
`
