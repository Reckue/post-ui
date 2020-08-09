import {Injectable} from '@angular/core';
import {AuthApiService} from '../api/auth-api.service';
import {Action} from '../../models/redux/Action';
import {ActionTypes} from '../../models/redux/ActionTypes';
import {Store} from '@ngrx/store';
import {ReduxUser} from '../../models/redux/ReduxUser';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {

  private user: ReduxUser;

  constructor(private store: Store<any>) {
    this.store.select('auth').subscribe(user => this.user = user);
  }

  authorize = (info) => this.store.dispatch(new Action(ActionTypes.AUTHORIZED, info));

  unauthorize = () => this.store.dispatch(new Action(ActionTypes.UNAUTHORIZED));

  getUser = (): ReduxUser => this.user;
}