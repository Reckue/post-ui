import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import axios from 'axios';
import {Rating} from '../models/Rating';

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
export class RatingService {

  private RATING_URL = environment.postApi + '/rating';

  constructor() { }

  getQuantityOfRatingsToPost = async (id: string): Promise<Rating> => {
    const response = await axios.get(this.RATING_URL + '/post/' + id);
    return response.data;
  }

  async like(postId: string, userId: string) {
    const response = await axios.post(this.RATING_URL + '/', new RatingRequest(postId, userId));
    return response.data;
  }
}
