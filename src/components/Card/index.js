import styled from 'styled-components';

const Card = styled.div`
  width: 265px;
  background-color: #ffffff;
  color: #acacac;
  font-size: 16px;
  box-shadow: 0px 20px 34px rgba(0, 0, 0, 0.0758577);
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px 26px;

  img {
    width: 42px;
  }

  @media (min-width: 769px) {
    width: 215px;
    flex-direction: column;
    padding: 42px 0;

    &:hover {
      background-color: #fd9872;
      color: #ffffff;
    }

    img {
      width: 69px;
      height: 69px;
      margin-bottom: 16px;
    }
  }
`;

export default Card;
