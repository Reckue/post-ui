import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {PostApi} from '../api/post.api';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[];
  private postById: Post;

  constructor(private postApi: PostApi) {}

  getAll = () => this.posts;

  getById = () => this.postById;

  subscribeAll = () => this.postApi.getAll().subscribe(data => this.posts = data);

  subscribeById = (id: string) => this.postApi.getById(id).subscribe(data => this.postById = data);
}
