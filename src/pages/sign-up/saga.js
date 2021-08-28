import { takeEvery, call, put, select } from 'redux-saga/effects'
import {signupActions} from './store';
import {stepsConfig} from './stepsConfig';
import {StepNames} from './consts';
import {signupSelectors} from './selectors';

export function* watchSignupSaga() {
  yield takeEvery(signupActions.nextStep.type, onNextStepHandler)
}

export function* onNextStepHandler({payload: currentStepId}) {
  const currentStep = stepsConfig[currentStepId];

  if(currentStep.name === StepNames.final) {
    yield call(submitRequestModel);
    return;
  }

  yield put(signupActions.setCurrentStepId(currentStepId + 1))
}

export function* submitRequestModel() {
  const generalInfo = yield select(signupSelectors.getGeneralInfoModel)
  const personalData = yield select(signupSelectors.getPersonalDataModel)

  const requestModel = {
    ...generalInfo,
    ...personalData
  }

  console.log(requestModel)
}