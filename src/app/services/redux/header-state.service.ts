import {Injectable} from '@angular/core';
import {ReduxHeader} from '../../redux/models/ReduxHeader';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class HeaderStateService {

  private header: ReduxHeader;

  constructor(private store: Store<any>) {
    this.store.select('header').subscribe(header => this.header = header);
  }

  getHeader = (): ReduxHeader => this.header;
}
