import {Injectable} from '@angular/core';
import axios from 'axios';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor() { }

  async getAllPosts() {
    const response = await axios.get('http://post-reckue.apps.us-east-1.starter.openshift-online.com/posts');
    return response.data;
  }

  async createPost(post: Post) {
    const response = await axios.post('http://post-reckue.apps.us-east-1.starter.openshift-online.com/posts', post);
    return response.data;
  }
}
