import {Injectable} from '@angular/core';
import {AuthApiService} from '../api/auth-api.service';
import {AuthStateService} from '../redux/auth-state.service';
import {ReduxUser} from '../../models/redux/ReduxUser';
import {PopupNotificationService} from './popup-notification.service';
import {Router} from '@angular/router';
import {AuthForm} from '../../models/common/AuthForm';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public authForm: AuthForm = new AuthForm();

  constructor(private router: Router,
              private authApiService: AuthApiService,
              private authStateService: AuthStateService,
              private popupNotificationService: PopupNotificationService) {}

  unauthorize() {
    this.authApiService.unauthorizeTokens();
    this.authStateService.unauthorize();
  }

  displayMessage = (message) => this.popupNotificationService.displayMessage(message);

  getUser = (): ReduxUser => this.authStateService.getUser();

  checkTokenAndExecute = (func) => {
    const haveToken = this.authApiService.getTokens().accessToken;
    if (haveToken) {
      func();
    }
  }

  redirectAuthorizedUsers = () => {
    this.router.navigate(['posts']).then();
  }

  tryTakeUserByToken = () => {
    this.authApiService.info()
      .then(info => {
        this.authStateService.authorize(info);
        this.displayMessage('Successfully authorized!');
      })
      .catch(cause => this.displayMessage(cause));
  }

  auth = () => {
    this.authApiService
      .login(this.authForm)
      .then(ignore => {
        this.checkTokenAndExecute(this.tryTakeUserByToken);
        this.router.navigate(['posts']).then();
      })
      .catch(cause => this.displayMessage(cause));
  }

  register = () => {
    this.authApiService
      .register(this.authForm)
      .then(ignore => {
        this.checkTokenAndExecute(this.tryTakeUserByToken);
        this.router.navigate(['posts']).then();
      })
      .catch(cause => this.displayMessage(cause));
  }

  changeForm = (event) => this.authForm[event.target.name] = event.target.value;
}
