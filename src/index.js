import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime' //support generator api

import App from './scripts/App';
import rootReducer from './scripts/reducers';
import './index.css';
import rootSaga from './scripts/sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, (process.env.NODE_ENV === 'development'
  ? composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
  : compose(
    applyMiddleware(sagaMiddleware)
  )
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('app'));