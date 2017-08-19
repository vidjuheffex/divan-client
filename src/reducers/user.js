import _ from 'lodash';
import {
  SIGNUP_SUCCEEDED,
  LOGIN_SUCCEEDED
} from '../constants/ActionTypes.js';

let initialState = {
  currentUser: null
};

export default function user(state = initialState, action) {
  let newState;
  switch (action.type) {
  case SIGNUP_SUCCEEDED:
    return state;
  case LOGIN_SUCCEEDED:
    newState = _.cloneDeep(state);
    newState.currentUser = action.data.user;
    localStorage.token = action.data.token;
    return newState;
  default:
      return state;
  }
  
}
