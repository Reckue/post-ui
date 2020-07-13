import {Injectable} from '@angular/core';
import {AuthForm} from '../models/AuthForm';
import axios from 'axios';
import {Tokens} from '../models/Tokens';
import {environment} from '../../environments/environment';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private AUTH_URL = environment.accountApi + '/auth';

  constructor() { }

  unauthorizedTokens() {
    window.localStorage.clear();
  }

  saveTokens(tokens: Tokens) {
    window.localStorage.setItem('access_token', tokens.access_token);
    window.localStorage.setItem('refresh_token', tokens.refresh_token);
    window.localStorage.setItem('expires_in', tokens.expires_in.toString());
    window.localStorage.setItem('token_type', tokens.token_type);
  }

  getTokens(): Tokens {
    // tslint:disable-next-line:variable-name
    const expires_in = window.localStorage.getItem('expires_in') as unknown as number;
    return new Tokens(
      window.localStorage.getItem('access_token'),
      expires_in,
      window.localStorage.getItem('refresh_token'),
      window.localStorage.getItem('token_type')
    );
  }

  async register(registerForm: AuthForm) {
    const response = await axios.post(this.AUTH_URL + '/register', registerForm);
    this.saveTokens(response.data);
    return this.getTokens();
  }

  async login(loginForm: AuthForm) {
    const response = await axios.post(this.AUTH_URL + '/login', loginForm);
    this.saveTokens(response.data);
    return this.getTokens();
  }

  async info(): Promise<User> {
    const tokens = this.getTokens();
    const response = await axios.get(this.AUTH_URL + '/current_user', {
      headers: {
        Authorization: 'Bearer ' + tokens.access_token
      }
    });
    return response.data;
  }
}
