import _ from 'lodash';
import {store} from '../index.js';
import {push} from 'react-router-redux';

let initialState = {
  globalSettings: {
    rootProjectPath: ""
  }
};

export default function settings(state = initialState, action) {
  let newState;
  switch (action.type) {
  case "GET_GLOBAL_SETTINGS_SUCCEEDED":
    newState = _.cloneDeep(state);
    newState.globalSettings = action.data.globalSettings;
    return newState;
  default:
      return state;
  }
}
