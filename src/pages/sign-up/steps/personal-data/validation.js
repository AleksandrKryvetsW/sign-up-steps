import { validate as valid } from 'validate.js';
import {PersonalDataFieldNames} from './consts';
import {formatError} from '../../../../packages';


const constraints = {
  [PersonalDataFieldNames.birthday]: {
    presence: {
      message: 'field is required',
    },
  },
  [PersonalDataFieldNames.gender]: {
    presence: {
      message: 'field is required',
    },
  },
  [PersonalDataFieldNames.additionalInfo]: {
    presence: {
      message: 'field is required',
    },
  },
};

export const validatePersonalDataForm = (data) => {
  const errors = valid(data, constraints);

  return errors ? formatError(errors) : null;
};
