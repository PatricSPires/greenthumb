import styled from 'styled-components';

export const Card = styled.button.attrs({
  type: 'button',
})`
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
  border: none;

  svg {
    width: 42px;
    height: 42px;
  }

  &:hover {
    svg {
      path {
        stroke: #ffffff;
        fill: #ffffff;
      }
    }
  }

  @media (min-width: 769px) {
    width: 215px;
    flex-direction: column;
    padding: 42px 0;

    &:hover {
      background-color: ${props => (props.primary ? '#fd9872' : '#7BAF9E')};
      color: #ffffff;
      font-weight: bold;
    }

    svg {
      width: 67px;
      height: 67px;
      margin-bottom: 16px;
    }
  }
`;
