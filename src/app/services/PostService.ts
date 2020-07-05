import {Injectable} from '@angular/core';
import axios from 'axios';
import {Post} from '../models/Post';
import {Filters} from '../models/Filters';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor() { }

  async getAllPosts(filters: Filters = new Filters()) {
    const params = '?desc=' + filters.desc + '&limit=' + filters.limit + '&offset=' + filters.offset;
    const response = await axios.get('http://post-reckue.apps.us-east-1.starter.openshift-online.com/posts' + params);
    return response.data;
  }

  async getPostById(id: string) {
    const response = await axios.get('http://post-reckue.apps.us-east-1.starter.openshift-online.com/posts/' + id);
    return response.data;
  }

  async createPost(post: Post) {
    const response = await axios.post('http://post-reckue.apps.us-east-1.starter.openshift-online.com/posts', post);
    return response.data;
  }

  async editPost(id: string, post: Post) {
    const response = await axios.put('http://post-reckue.apps.us-east-1.starter.openshift-online.com/posts/' + id, post);
    return response.data;
  }
}
