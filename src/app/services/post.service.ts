import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {PostApi} from '../api/post.api';
import {PopupNotificationService} from './popup-notification.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[];
  private postById: Post;

  constructor(private postApi: PostApi, private popupNotificationService: PopupNotificationService, private route: Router) {}

  getAll = () => this.posts;

  getById = () => this.postById;

  subscribeAll = () => this.postApi.getAll().subscribe(
    data => this.posts = data,
    error => this.popupNotificationService.displayMessage(error),
    () => this.popupNotificationService.displayMessage(this.posts.length + ' posts were loaded!'))

  subscribeById = (id: string) => {
    this.postById = null;
    this.postApi.getById(id).subscribe(
      data => this.postById = data,
      error => this.popupNotificationService.displayMessage(error),
      () => this.popupNotificationService.displayMessage('Post was loaded!'));
  }

  createPostAndRedirect = () => {
    this.postById = new Post();
    this.postApi.createPost(this.postById).subscribe(
      data => {
        this.postById = data;
        this.route.navigate([this.postById.id, 'edit']).then();
      },
      error => this.popupNotificationService.displayMessage(error),
      () => this.popupNotificationService.displayMessage('Post created!')
    );
  }
}
