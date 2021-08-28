import React, {memo} from 'react';
import {ContentWrapper, GoToDashboardButton, StepWrapper, SuccessIcon} from './styled';

export const Final = memo(({children, onSubmit}) => (
    <StepWrapper>
        <ContentWrapper>
          <SuccessIcon size={150}/>
          <GoToDashboardButton onClick={onSubmit}>Go to Dashboard</GoToDashboardButton>
        </ContentWrapper>
        {children}
    </StepWrapper>
));

