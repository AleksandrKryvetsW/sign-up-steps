import { all } from 'redux-saga/effects';

import { watchSignupSaga,} from './pages';

export function* rootSaga() {
  yield all([
    watchSignupSaga(),
  ]);
}
