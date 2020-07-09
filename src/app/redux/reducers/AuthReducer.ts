import {Header} from '../models/Header';
import {ActionTypes} from '../models/ActionTypes';
import {User} from '../models/User';

export const userReducer = (state = new User(false), action) => {
  switch (action.type) {
    case ActionTypes.AUTHORIZED:
      console.log(action);
      return new User(true);
    case ActionTypes.UNAUTHORIZED:
      console.log(action);
      return new User(false);
    default:
      return state;
  }
};
