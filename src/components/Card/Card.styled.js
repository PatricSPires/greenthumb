import styled from 'styled-components';

export const CardComponent = styled.button.attrs(props => ({
  type: 'button',
}))`
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

  @media (min-width: 769px) {
    width: 215px;
    flex-direction: column;
    padding: 42px 0;

    &:hover,
    &:focus {
      background-color: ${props => (props.primary ? '#FD9872' : '#7baf9e')};
      color: #ffffff;
      font-weight: bold;

      svg {
        path {
          stroke: #ffffff;
          fill: #ffffff;
        }
      }
    }

    svg {
      width: 67px;
      height: 67px;
      margin-bottom: 16px;
    }
  }
`;
