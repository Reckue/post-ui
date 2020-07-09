import {Header} from '../models/Header';
import {ActionTypes} from '../models/ActionTypes';

export const headerReducer = (state = new Header(false), action) => {
  switch (action.type) {
    case ActionTypes.HIDE_HEADER:
      console.log(action);
      return new Header(true);
    case ActionTypes.SHOW_HEADER:
      console.log(action);
      return new Header(false);
    default:
      return state;
  }
};
