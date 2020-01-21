import styled from 'styled-components';

export const SmallButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: ${props => (props.primary ? '#15573f' : '#FFFFFF')};
  border-radius: 28px;
  height: 50px;
  max-width: 292px;
  color: ${props => (props.primary ? '#FFFFFF' : '#15573f')};
  border: ${props => (props.primary ? 0 : '1px solid #15573f')};
  font-size: 16px;
  margin-bottom: 34px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    path {
      stroke: ${props => (props.primary ? '#FFFFFF' : '#15573f')};
    }
  }

  &:hover {
    background-color: ${props => (props.primary ? '#FFFFFF' : '#15573f')};
    border: ${props =>
      props.primary ? '1px solid #15573f' : '1px solid #ffffff'};
    color: ${props => (props.primary ? '#15573f' : '#FFFFFF')};

    svg {
      path {
        stroke: ${props => (props.primary ? '#15573f' : '#FFFFFF')};
      }
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (min-width: 1024px) {
    max-width: 146px;
    width: 100%;
  }
`;

export const MediumButton = styled(SmallButton)`
  width: 174px;

  @media (min-width: 1024px) {
    width: 174px;
  }
`;

export const LargerButton = styled(SmallButton)`
  max-width: 292px;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 292px;
  }
`;
