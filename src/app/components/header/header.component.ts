import { Component, OnInit } from '@angular/core';
import {query} from '@angular/animations';
import {Action} from '../../redux/models/Action';
import {ActionTypes} from '../../redux/models/ActionTypes';
import {Store} from '@ngrx/store';
import {AuthService} from '../../services/AuthService';
import {User} from '../../models/User';
import {ReduxUser} from '../../redux/models/ReduxUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuVisible = false;

  searchVisible = document.body.clientWidth > 580;

  user: ReduxUser;

  constructor(private store: Store<any>, private authService: AuthService) { }

  ngOnInit(): void {
    window.onresize = () => {
      this.searchVisible = document.body.clientWidth > 580;
    };
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
