import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';

import game from './game/reducer';

const reducers = combineReducers({
  game,
  form
});

const enhancers = [];
enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
enhancers.push(applyMiddleware(thunk));

const store = createStore(reducers, compose(...enhancers));

export default store;
