import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthApiService} from '../../services/api/auth-api.service';
import {AuthForm} from '../../models/common/AuthForm';
import {Store} from '@ngrx/store';
import {Action} from '../../models/redux/Action';
import {ActionTypes} from '../../models/redux/ActionTypes';
import {Router} from '@angular/router';
import {ReduxUser} from '../../models/redux/ReduxUser';
import {PopupNotificationService} from '../../services/logic/popup-notification.service';
import {AuthService} from '../../services/logic/auth.service';
import {HeaderService} from '../../services/logic/header.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  registration = false;

  constructor(private authService: AuthService, private headerService: HeaderService) {
    this.authService.redirectAuthorizedUsers();
    this.headerService.hideHeader();
  }

  onChange = (event) => this.authService.changeForm(event);

  auth = () => this.authService.auth();

  register = () => this.authService.register();

  swap = () => this.registration = !this.registration;
}
