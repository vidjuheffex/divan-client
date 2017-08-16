import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import settings from './settings.js';

const rootReducer = combineReducers({
  user,
  settings,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
