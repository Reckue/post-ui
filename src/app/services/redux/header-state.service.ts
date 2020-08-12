import {Injectable} from '@angular/core';
import {ReduxHeader} from '../../models/redux/ReduxHeader';
import {Store} from '@ngrx/store';
import {Action} from '../../models/redux/Action';
import {ActionTypes} from '../../models/redux/ActionTypes';

@Injectable({
  providedIn: 'root',
})
export class HeaderStateService {

  private header: ReduxHeader;

  constructor(private store: Store<any>) {
    this.store.select('header').subscribe(header => this.header = header);
  }

  getHeader = (): ReduxHeader => this.header;

  hideHeader = () => this.store.dispatch(new Action(ActionTypes.HIDE_HEADER));
}
