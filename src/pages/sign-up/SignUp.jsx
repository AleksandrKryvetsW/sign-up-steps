import React, {memo, useCallback} from 'react';
import {ButtonNext, ButtonPrev, ButtonWrapper, Content, Header, PageWrapper} from './styled';
import {Steps} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {signupActions} from './store';
import {signupSelectors} from './selectors';
import {stepsConfig} from './stepsConfig';

const { Step } = Steps;


export const SignUp = memo(() =>  {
  const dispatch = useDispatch();
  const currentStepId = useSelector(signupSelectors.getCurrentStepId)

  const onNextStepHandler = useCallback(() => {
    dispatch(signupActions.nextStep(currentStepId))
  }, [dispatch, currentStepId]);

  const onPrevStepHandler = useCallback((e) => {
    e.preventDefault();

    dispatch(signupActions.setCurrentStepId(currentStepId - 1))
  }, [dispatch, currentStepId]);

  const StepContent = stepsConfig[currentStepId].content;

  return (
    <PageWrapper>
      <Content>
        <Header>Signup</Header>

        <Steps progressDot current={currentStepId}>
          {stepsConfig.map(step => (
            <Step key={step.name} />
          ))}
        </Steps>

        <StepContent onSubmit={onNextStepHandler}>
          <ButtonWrapper>
            {currentStepId > 0 && (
              <ButtonPrev onClick={onPrevStepHandler}>
                Previous
              </ButtonPrev>
            )}
            {currentStepId < stepsConfig.length - 1 && (
              <ButtonNext type="submit">
                Next
              </ButtonNext>
            )}
          </ButtonWrapper>
        </StepContent>

      </Content>
    </PageWrapper>
  );
});
