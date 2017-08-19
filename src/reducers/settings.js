import _ from 'lodash';
import {GET_GLOBAL_SETTINGS_SUCCEEDED} from '../constants/ActionTypes.js';

let initialState = {
  globalSettings: {
    rootProjectPath: ""
  }
};

export default function settings(state = initialState, action) {
  let newState;
  switch (action.type) {
  case GET_GLOBAL_SETTINGS_SUCCEEDED:
    newState = _.cloneDeep(state);
    newState.globalSettings = action.data.globalSettings;
    return newState;
  default:
      return state;
  }
}
