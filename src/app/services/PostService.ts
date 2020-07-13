import {Injectable} from '@angular/core';
import axios from 'axios';
import {Post} from '../models/Post';
import {Filters} from '../models/Filters';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private POST_URL = environment.postApi + '/posts';

  constructor() { }

  async getAllPosts(filters: Filters = new Filters()) {
    const params = '?desc=' + filters.desc + '&limit=' + filters.limit + '&offset=' + filters.offset;
    const response = await axios.get(this.POST_URL + params);
    return response.data;
  }

  async getPostById(id: string) {
    const response = await axios.get(this.POST_URL + id);
    return response.data;
  }

  async createPost(post: Post) {
    const response = await axios.post(this.POST_URL, post);
    return response.data;
  }

  async editPost(id: string, post: Post) {
    const response = await axios.put(this.POST_URL + id, post);
    return response.data;
  }
}
