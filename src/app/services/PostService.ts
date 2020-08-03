import {Injectable} from '@angular/core';
import axios from 'axios';
import {Post} from '../models/common/Post';
import {Filters} from '../models/common/Filters';
import {environment} from '../../environments/environment';
import {UserService} from './UserService';
import {PostTransfer} from '../models/transfers/PostTransfer';
import {User} from '../models/common/User';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private POST_URL = environment.postApi + '/posts';

  constructor(private userService: UserService) { }

  async getAllPosts(filters: Filters = new Filters()) {
    const params = '?desc=' + filters.desc + '&limit=' + filters.limit + '&offset=' + filters.offset;
    const response = await axios.get(this.POST_URL + params);
    return response.data;
  }

  async getAllPostsWithUser(filters: Filters = new Filters()) {
    const posts: Post[] = await this.getAllPosts(filters);
    const transfers: PostTransfer[] = [];
    posts.forEach(post => {
      this.userService.getUserById(post.userId)
        .then(user => transfers.push(new PostTransfer(post, user)));
    });
    return transfers;
  }

  async getPostById(id: string) {
    const response = await axios.get(this.POST_URL + '/' + id);
    return response.data;
  }

  async createPost(post: Post) {
    const response = await axios.post(this.POST_URL, post);
    return response.data;
  }

  async editPost(id: string, post: Post) {
    const response = await axios.put(this.POST_URL + '/' + id, post);
    return response.data;
  }
}
