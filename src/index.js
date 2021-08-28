import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'antd/dist/antd.css';
import { App } from './app';
import { SignUp } from './pages';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './reducer';
import {createStore} from './utils';
import {rootSaga} from './saga';

const store = createStore(rootReducer);

store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App>
      <SignUp />
    </App>
  </Provider>
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
