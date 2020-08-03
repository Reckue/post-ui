import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../../models/common/Post';
import {PostService} from '../../../services/PostService';
import {PopupNotificationComponent} from '../../../components/notification/popup/popup-notification.component';
import {Filters} from '../../../models/common/Filters';
import {UserService} from '../../../services/UserService';
import {PostTransfer} from '../../../models/transfers/PostTransfer';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @ViewChild(PopupNotificationComponent) popup: PopupNotificationComponent;

  posts: PostTransfer[];

  counter = 10;

  canLoad = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
      this.postService.getAllPostsWithUser()
          .then(posts => {
              this.posts = posts;
              this.popup.display('Posts was successfully loaded!');
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
