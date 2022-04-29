import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { updateCalculateValue } from './updateCalculateValue';

const rootReducer = combineReducers({
  data: updateCalculateValue,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;