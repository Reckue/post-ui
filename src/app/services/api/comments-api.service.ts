import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

const COMMENTS_URL = environment.postApi + '/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsApiService {
}
