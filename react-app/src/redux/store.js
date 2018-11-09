import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';

import game from './game/reducer';
import session from './session/reducer';

const reducers = combineReducers({
  game,
  form,
  session
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
