import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import user from './user.js';
import settings from './settings.js';
import ui from './ui.js';

const rootReducer = combineReducers({
  user,
  settings,
  ui,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
