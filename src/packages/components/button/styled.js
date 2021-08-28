import styled from 'styled-components';


export const BaseButton = styled.button`
  outline: none;
  min-width: 30px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const PrimaryButton = styled(BaseButton)`
  background: #1890ff;
  color: #edebeb;
`;

export const SecondaryButton = styled(BaseButton)`
  background: transparent;
  border: 1px solid #1890ff;
  color: #1890ff;
`;