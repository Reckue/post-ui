import { Component, OnInit } from '@angular/core';
import {query} from '@angular/animations';
import {Action} from '../../redux/models/Action';
import {ActionTypes} from '../../redux/models/ActionTypes';
import {Store} from '@ngrx/store';
import {AuthApiService} from '../../services/api/AuthApiService';
import {User} from '../../models/common/User';
import {ReduxUser} from '../../redux/models/ReduxUser';
import {HeaderService} from '../../services/logic/HeaderService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuVisible = false;

  user: ReduxUser;

  constructor(private store: Store<any>,
              private authService: AuthApiService,
              public headerService: HeaderService) { }

  ngOnInit(): void {
    this.store.select('user').subscribe(store => this.user = store);
  }

  reverseMenuVisibility() {
    this.menuVisible = !this.menuVisible;
  }

  hideMenu() {
    this.menuVisible = false;
  }

  unauthorized() {
    this.authService.unauthorizedTokens();
    this.store.dispatch(new Action(ActionTypes.UNAUTHORIZED));
  }
}
