import styled from 'styled-components';
import { colors } from '../../shared/variables';

export const ContainerComponent = styled.div`
  background-color: ${props =>
    props.bgPrimary ? `${colors.concrete}` : `${colors.white}`};
  height: 100%;
`;
