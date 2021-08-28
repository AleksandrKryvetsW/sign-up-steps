import styled from 'styled-components'
import CheckboxMarkedCircleIcon from 'mdi-react/CheckboxMarkedCircleIcon';
import {SecondaryButton} from '../../../../packages';

export const StepWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SuccessIcon = styled(CheckboxMarkedCircleIcon)`
  fill: #4fd84f;
`;

export const GoToDashboardButton = styled(SecondaryButton)`
  margin-top: 10px;
`;