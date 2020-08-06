import {Injectable} from '@angular/core';
import {AuthApiService} from '../api/auth-api.service';
import {AuthStateService} from '../redux/auth-state.service';
import {ReduxUser} from '../../redux/models/ReduxUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private authApiService: AuthApiService, private authStateService: AuthStateService) {}

  unauthorize() {
    this.authApiService.unauthorizedTokens();
    this.authStateService.unauthorize();
  }

  getUser = (): ReduxUser => this.authStateService.getUser();
}
