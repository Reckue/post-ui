import {ReduxHeader} from '../models/ReduxHeader';
import {ActionTypes} from '../models/ActionTypes';

export const headerReducer = (state = new ReduxHeader(false), action) => {
  switch (action.type) {
    case ActionTypes.HIDE_HEADER:
      console.log(action);
      return new ReduxHeader(true);
    case ActionTypes.SHOW_HEADER:
      console.log(action);
      return new ReduxHeader(false);
    default:
      return state;
  }
};
