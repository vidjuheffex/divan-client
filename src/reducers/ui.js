import _ from 'lodash';
import { TOGGLE_PROJECT_CREATOR} from '../constants/ActionTypes.js';

let initialState = {
  isProjectCreatorVisible: false
};

export default function ui(state = initialState, action) {
  let newState;
  switch (action.type) {
  case TOGGLE_PROJECT_CREATOR:
    newState = _.cloneDeep(state);
    newState.isProjectCreatorVisible = !state.isProjectCreatorVisible;
    return newState;
  default:
    return state;
  }
}
