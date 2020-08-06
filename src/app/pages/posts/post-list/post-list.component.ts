import {Component, OnInit} from '@angular/core';
import {PostApiService} from '../../../services/api/post-api.service';
import {Filters} from '../../../models/common/Filters';
import {PostTransfer} from '../../../models/transfers/PostTransfer';
import {PopupNotificationService} from '../../../services/logic/popup-notification.service';
import {Post} from '../../../models/common/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: PostTransfer[];

  counter = 10;

  canLoad = true;

  constructor(private postService: PostApiService, private popupNotificationService: PopupNotificationService) {}

  ngOnInit(): void {
    this.postService.getAllPostsWithUser()
      .then(posts => {
        this.posts = posts;
        this.popupNotificationService.displayMessage('Posts was successfully loaded!');
      });
  }

  loadMore() {
    const filters = new Filters();
    filters.limit = this.counter + 10;
    filters.offset = this.counter;
    this.postService.getAllPostsWithUser(filters)
      .then((posts: PostTransfer[]) => {
        this.posts.push(...posts);
        this.counter += 10;
        if (posts.length < 10) {
          this.canLoad = false;
        }
      });
  }
}
