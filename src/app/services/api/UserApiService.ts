import axios from 'axios';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {User} from '../../models/common/User';
import {AuthApiService} from './AuthApiService';

const USER_URL = environment.accountApi + '/users';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  constructor(private authService: AuthApiService) { }

  async getUserById(id: string): Promise<User> {
    const tokens = this.authService.getTokens();
    const response = await axios.get(USER_URL + '/' + id, {
      headers: {
        Authorization: 'Bearer ' + tokens.accessToken
      }
    });
    return response.data;
  }
}
