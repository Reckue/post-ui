import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AuthService} from './AuthService';
import {User} from '../models/User';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private COMMENTS_URL = environment.postApi + '/comments';
}
