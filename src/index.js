import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose } from 'redux';
import { rootReducer } from './scripts/reducers';
import { Provider } from 'react-redux';
import './styles/main.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, (process.env.NODE_ENV === 'development'
  ? composeEnhancers()
  : compose()
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('app'));

module.hot.accept();