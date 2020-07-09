import {ActionTypes} from './ActionTypes';

export class Action {

  type: ActionTypes;
  payload: any;

  constructor(type: ActionTypes, payload: any = null) {
    this.type = type;
    this.payload = payload;
  }
}
