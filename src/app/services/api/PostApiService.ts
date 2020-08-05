import {Injectable} from '@angular/core';
import axios from 'axios';
import {Post} from '../../models/common/Post';
import {Filters} from '../../models/common/Filters';
import {environment} from '../../../environments/environment';
import {UserApiService} from './UserApiService';
import {PostTransfer} from '../../models/transfers/PostTransfer';

const POST_URL = environment.postApi + '/posts';

@Injectable({
  providedIn: 'root',
})
export class PostApiService {

  constructor(private userService: UserApiService) { }

  async getAllPosts(filters: Filters = new Filters()) {
    const params = '?desc=' + filters.desc + '&limit=' + filters.limit + '&offset=' + filters.offset;
    const response = await axios.get(POST_URL + params);
    return response.data;
  }

  async getAllPostsWithUser(filters: Filters = new Filters()) {
    const posts: Post[] = await this.getAllPosts(filters);
    const transfers: PostTransfer[] = [];
    for (const post of posts) {
      const user = await this.userService.getUserById(post.userId);
      transfers.push(new PostTransfer(post, user));
    }
    return transfers;
  }

  async getPostById(id: string) {
    const response = await axios.get(POST_URL + '/' + id);
    return response.data;
  }

  async createPost(post: Post) {
    const response = await axios.post(POST_URL, post);
    return response.data;
  }

  async editPost(id: string, post: Post) {
    const response = await axios.put(POST_URL + '/' + id, post);
    return response.data;
  }
}
