/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import { createStore, combineReducers } from 'redux';

import characterReducer from '../reducers/character';

const rootReducer = combineReducers({
    character: characterReducer
});

const configureStore = () =>
  createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { configureStore };
