import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './reducers';

const configureStore = (initialState = {}) => {
  const enhancers = [];

  const middleware = [reduxPromise, reduxThunk, logger];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  return createStore(reducers, initialState, composedEnhancers);
};

const store = configureStore({});

export default store;
