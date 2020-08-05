import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import axios from 'axios';
import {Rating} from '../../models/common/Rating';

const RATING_URL = environment.postApi + '/rating';

class RatingRequest {
  postId: string;
  userId: string;

  constructor(postId: string, userId: string) {
    this.postId = postId;
    this.userId = userId;
  }
}

@Injectable({
  providedIn: 'root',
})
export class RatingApiService {

  constructor() {}

  getQuantityOfRatingsToPost = async (id: string): Promise<Rating> => {
    return (await axios.get(RATING_URL + '/post/' + id)).data;
  }

  like = async (postId: string, userId: string) => {
    return (await axios.post(RATING_URL + '/', new RatingRequest(postId, userId))).data;
  }
}
