import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers/';

const loggerMiddleware = createLogger();

const store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store;
