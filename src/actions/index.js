import {
  GET_GLOBAL_SETTINGS,
  SEND_SIGNUP_REQUEST,
  SEND_LOGIN_REQUEST,
  TOGGLE_PROJECT_CREATOR
} from '../constants/ActionTypes';

function makeActionCreators(actionType){
  return function(payload){
    return {
      type: actionType,
      payload: payload
    };
  };
}

export const sendSignup = makeActionCreators(SEND_SIGNUP_REQUEST);
export const sendLogin = makeActionCreators(SEND_LOGIN_REQUEST);
export const getGlobalSettings = makeActionCreators(GET_GLOBAL_SETTINGS);
export const toggleProjectCreator = makeActionCreators(TOGGLE_PROJECT_CREATOR);

