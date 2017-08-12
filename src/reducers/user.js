import _ from 'lodash';
import {store} from '../index.js';
import {push} from 'react-router-redux';

let initialState = {
  currentUser: null
};

export default function user(state = initialState, action) {
  let newState;
  switch (action.type) {
  case "SIGNUP_SUCCEEDED":
    return state;
  case "LOGIN_SUCCEEDED":
    newState = _.cloneDeep(state);
    newState.currentUser = action.data.user;
    return newState;
  default:
      return state;
  }
  
}
