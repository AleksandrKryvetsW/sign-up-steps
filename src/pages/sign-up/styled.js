import styled from 'styled-components';
import {PrimaryButton, SecondaryButton} from '../../packages';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 500px;
  min-width: 320px;
  height: 400px;
  background: #edebeb;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  width: 100%;
  font-size: 24px;
  color: #1890ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #b1b0b0;
  display: flex;
  padding-top: 20px;
`;

export const ButtonNext = styled(PrimaryButton)`
  display: block;
  margin-left: auto;
`;

export const ButtonPrev = styled(SecondaryButton)`
  display: block;
  margin-right: auto;
`;

export const Form = styled.form`
`;