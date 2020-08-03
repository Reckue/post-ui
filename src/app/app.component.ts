import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Header} from './redux/models/Header';
import {Tokens} from './models/common/Tokens';
import {AuthService} from './services/AuthService';
import {Action} from './redux/models/Action';
import {ActionTypes} from './redux/models/ActionTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hideHeader = false;

  constructor(private store: Store<any>, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getTokens().access_token) {
      this.authService.info().then(info => {
        this.store.dispatch(new Action(ActionTypes.AUTHORIZED, info));
      });
    }
    this.store.select('header')
      .subscribe(store => {
        const header: Header = store;
        this.hideHeader = header.hide;
      });
  }
}
