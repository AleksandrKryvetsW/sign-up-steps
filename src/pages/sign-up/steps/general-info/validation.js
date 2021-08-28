import { validate as valid } from 'validate.js';
import {GeneralInfoFieldNames} from './consts';
import {formatError} from '../../../../packages';

const constraints = {
  [GeneralInfoFieldNames.email]: {
    presence: {
      message: 'field is required',
    },
    email: {
      message: 'is not valid',
    },
  },
  [GeneralInfoFieldNames.password]: {
    presence: {
      message: 'field is required',
    },
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
  },
  [GeneralInfoFieldNames.confirmPassword]: {
    presence: {
      message: 'field is required',
    },
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
    equality: 'password',
  },
};

export const validateGeneralInfoForm = (data) => {
  const errors = valid(data, constraints);

  return errors ? formatError(errors) : null;
};
