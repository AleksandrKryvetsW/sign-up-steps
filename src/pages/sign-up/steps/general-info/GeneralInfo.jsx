import React, {memo} from 'react';
import {Field, reduxForm} from 'redux-form'
import {StepWrapper} from './styled';
import {InputFormField} from '../../../../packages';
import {GeneralInfoFieldNames, generalInfoFormName} from './consts';
import {Form} from '../../styled';
import {validateGeneralInfoForm} from './validation';

export const GeneralInfoPure = memo(({onSubmit, handleSubmit, children}) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <StepWrapper>
      <Field
        name={GeneralInfoFieldNames.email}
        component={InputFormField}
        type="email"
        label="Email"
        placeholder="Email"
      />
      <Field
        name={GeneralInfoFieldNames.password}
        component={InputFormField}
        label="Password"
        type="password"
        placeholder="Password"
      />
      <Field
        name={GeneralInfoFieldNames.confirmPassword}
        component={InputFormField}
        label="Confirm password"
        type="password"
        placeholder="Confirm password"
      />
      {children}
    </StepWrapper>
  </Form>
));

export const GeneralInfo = reduxForm({
  form: generalInfoFormName,
  validate: validateGeneralInfoForm,
  destroyOnUnmount: false
})(GeneralInfoPure)


