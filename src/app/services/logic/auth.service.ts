import {Injectable} from '@angular/core';
import {AuthApiService} from '../api/auth-api.service';
import {AuthStateService} from '../redux/auth-state.service';
import {ReduxUser} from '../../redux/models/ReduxUser';
import {Action} from '../../redux/models/Action';
import {ActionTypes} from '../../redux/models/ActionTypes';
import {HeaderStateService} from '../redux/header-state.service';
import {PopupNotificationService} from './popup-notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private authApiService: AuthApiService, private authStateService: AuthStateService,
              private popupNotificationService: PopupNotificationService) {}

  unauthorize() {
    this.authApiService.unauthorizedTokens();
    this.authStateService.unauthorize();
  }

  getUser = (): ReduxUser => this.authStateService.getUser();

  tryAuth = () => {
    const haveToken = this.authApiService.getTokens().accessToken;
    if (haveToken) {
      this.authApiService.info()
        .then(info => {
          this.authStateService.authorize(info);
          this.popupNotificationService.displayMessage('Successfully authorized!');
        })
        .catch(cause => this.popupNotificationService.displayMessage(cause));
    }
  }
}
