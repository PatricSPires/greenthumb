import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 24px;
  background: url('../../assets/illustrations/illustration-home-mobile.png');

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  .logo {
    margin-bottom: 32px;
    width: 166px;

    @media (min-width: 768px) {
      width: 208px;
    }
  }
`;

export const ContainerImage = styled.div`
  .heroMobile {
    width: 90vmin;
    position: fixed;
    bottom: -22px;
    left: -22px;
  }
`;

export const Title = styled.h1`
  color: #0c261c;
  font-weight: bold;
  max-width: 295px;
  margin: 0 auto;
  font-size: 36px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 36px;
`;

export default {
  Title,
};
