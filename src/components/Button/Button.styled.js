import styled from 'styled-components';

export const Button = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: ${props => (props.primary ? '#15573f' : '#FFFFFF')};
  border-radius: 28px;
  height: 50px;
  width: 174px;
  color: ${props => (props.primary ? '#FFFFFF' : '#15573f')};
  border: ${props => (props.primary ? 0 : '1px solid #15573f')};
  font-size: 16px;
  margin-bottom: 34px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
