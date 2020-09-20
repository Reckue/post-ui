import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {PostApi} from '../api/post.api';
import {PopupNotificationService} from './popup-notification.service';
import {FiltersService} from './FiltersService';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private counterOfLoads: number;

  private posts: Post[][];
  private postById: Post;

  constructor(private postApi: PostApi,
              private popupNotificationService: PopupNotificationService,
              private filtersService: FiltersService) {}

  getAll = () => this.posts;

  getById = () => this.postById;

  subscribePosts = () => {
    this.posts = [];
    this.counterOfLoads = 0;
    this.postApi.getAll().subscribe(
      data => this.posts[this.counterOfLoads] = data,
      error => this.popupNotificationService.displayMessage(error),
      () => this.afterLoad()
    );
  }

  loadPosts = () => {
    const limitOffsetFilters = this.filtersService.buildLimitOffsetFiltersByCounter(this.counterOfLoads);
    this.postApi.getPosts(limitOffsetFilters).subscribe(
      data => this.posts[this.counterOfLoads] = data,
      error => this.popupNotificationService.displayMessage(error),
      () => this.afterLoad()
    );
  }

  private afterLoad = () => {
    this.popupNotificationService.displayMessage(this.posts[this.counterOfLoads].length + ' posts were loaded!');
    this.counterOfLoads++;
  }

  subscribeById = (id: string) => {
    this.postById = null;
    this.postApi.getById(id).subscribe(
      data => this.postById = data,
      error => this.popupNotificationService.displayMessage(error),
      () => this.popupNotificationService.displayMessage('Post was loaded!')
    );
  }
}
