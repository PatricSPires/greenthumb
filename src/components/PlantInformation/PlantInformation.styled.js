import styled from 'styled-components';
import { colors } from '../../shared/variables';

export const PlantInformationComponent = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center !important;
  color: ${colors.dove_gray};
  margin-bottom: 14px;

  svg {
    width: 28px;
    height: 28px;
    margin-right: 16px;
  }
`;
