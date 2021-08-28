import React, {memo} from 'react';
import {ErrorLabel, FieldWrapper, Label, Wrapper} from './styled';
import {Input} from '../../components';

export const InputFormField = memo(({input, label, type, placeholder, meta: {error}}) => (
      <FieldWrapper>
        <Wrapper>
          <Label>{label}</Label>
          {error && <ErrorLabel>{error}</ErrorLabel>}
        </Wrapper>
        <Input {...input} type={type} placeholder={placeholder}/>
      </FieldWrapper>
  ));


