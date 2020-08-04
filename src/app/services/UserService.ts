import axios from 'axios';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {User} from '../models/common/User';
import {AuthService} from './AuthService';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private USER_URL = environment.accountApi + '/users';

  constructor(private authService: AuthService) { }

  async getUserById(id: string): Promise<User> {
    const tokens = this.authService.getTokens();
    const response = await axios.get(this.USER_URL + '/' + id, {
      headers: {
        Authorization: 'Bearer ' + tokens.access_token
      }
    });
    return response.data;
  }
}
