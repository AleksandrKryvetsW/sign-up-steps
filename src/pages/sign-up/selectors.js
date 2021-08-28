import {signupReducerNamespace} from './consts';
import { initialState } from './store';
import {createSelector} from '@reduxjs/toolkit';
import {formValueSelector} from 'redux-form';
import {GeneralInfoFieldNames, generalInfoFormName, PersonalDataFieldNames, personalDataFormName} from './steps';


const getSignupData = (state) => state[signupReducerNamespace] || initialState;

const getCurrentStepId = createSelector(
  getSignupData,
  state => state.currentStepId
)

const generalInfoFormSelector = formValueSelector(generalInfoFormName)

const getGeneralInfoModel = (state) => generalInfoFormSelector(
  state,
  ...Object.values(GeneralInfoFieldNames)
)

const personalDataFormSelector = formValueSelector(personalDataFormName)

const getPersonalDataModel = (state) => personalDataFormSelector(
  state,
  ...Object.values(PersonalDataFieldNames)
)

export const signupSelectors = {
  getCurrentStepId,
  getGeneralInfoModel,
  getPersonalDataModel,
};
