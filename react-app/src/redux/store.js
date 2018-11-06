import { createStore, combineReducers } from 'redux';

import game from './game/reducer';

const reducers = combineReducers({
  game
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, composeEnhancer);

export default store;
