import React, {memo} from 'react';
import {Field, reduxForm} from 'redux-form'
import {StepWrapper} from './styled';
import {InputFormField} from '../../../../packages';
import {PersonalDataFieldNames, personalDataFormName} from './consts';
import {Form} from '../../styled';
import {validatePersonalDataForm} from './validation';

export const PersonalDataPure = memo(({onSubmit, handleSubmit, children}) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <StepWrapper>
      <Field
        name={PersonalDataFieldNames.birthday}
        component={InputFormField}
        label="Birthday"
        placeholder="Birthday"
      />
      <Field
        name={PersonalDataFieldNames.gender}
        component={InputFormField}
        label="Gender"
        placeholder="Gender"
      />
      <Field
        name={PersonalDataFieldNames.additionalInfo}
        component={InputFormField}
        label="Where did you hear about us?"
        placeholder="Where did you hear about us?"
      />
      {children}
    </StepWrapper>
  </Form>
));

export const PersonalData = reduxForm({
  form: personalDataFormName,
  validate: validatePersonalDataForm,
  destroyOnUnmount: false
})(PersonalDataPure)


