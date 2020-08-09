import {ActionTypes} from '../models/redux/ActionTypes';
import {ReduxUser} from '../models/redux/ReduxUser';

export const authReducer = (state = new ReduxUser(false), action) => {
  switch (action.type) {
    case ActionTypes.AUTHORIZED:
      console.log(action);
      return {...state, ...{isAuth: true, info: action.payload}};
    case ActionTypes.UNAUTHORIZED:
      console.log(action);
      return {...state, ...{isAuth: false, info: null}};
    default:
      return state;
  }
};