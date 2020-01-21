import styled from 'styled-components';

export const ContainerComponent = styled.div`
  background-color: ${props => (props.bgPrimary ? '#f2f2f2' : '#ffffff')};
  height: 100%;
`;
