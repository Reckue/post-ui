import {Injectable} from '@angular/core';
import {AuthForm} from '../../models/common/AuthForm';
import axios from 'axios';
import {Tokens} from '../../models/common/Tokens';
import {environment} from '../../../environments/environment';
import {User} from '../../models/common/User';

const AUTH_URL = environment.accountApi + '/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  constructor() { }

  unauthorizeTokens() {
    window.localStorage.clear();
  }

  saveTokens(tokens: Tokens) {
    window.localStorage.setItem('accessToken', tokens.accessToken);
    window.localStorage.setItem('refreshToken', tokens.refreshToken);
    window.localStorage.setItem('expiresIn', tokens.expiresIn.toString());
    window.localStorage.setItem('tokenType', tokens.tokenType);
  }

  getTokens(): Tokens {
    return new Tokens(
      window.localStorage.getItem('accessToken'),
      window.localStorage.getItem('expiresIn') as unknown as number,
      window.localStorage.getItem('refreshToken'),
      window.localStorage.getItem('tokenType')
    );
  }

  async register(registerForm: AuthForm) {
    const response = await axios.post(AUTH_URL + '/register', registerForm);
    this.saveTokens(response.data);
    return this.getTokens();
  }

  async login(loginForm: AuthForm) {
    const response = await axios.post(AUTH_URL + '/login', loginForm);
    this.saveTokens(response.data);
    return this.getTokens();
  }

  async info(): Promise<User> {
    const tokens = this.getTokens();
    const response = await axios.get(AUTH_URL + '/currentUser', {
      headers: {
        Authorization: 'Bearer ' + tokens.accessToken
      }
    });
    return response.data;
  }
}
