import {signupReducer, signupReducerNamespace} from './pages';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = {
  [signupReducerNamespace]: signupReducer,
  form: formReducer,
};
