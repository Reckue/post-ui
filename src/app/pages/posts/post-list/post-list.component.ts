import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/PostService';
import {PopupNotificationComponent} from '../../../components/notification/popup/popup-notification.component';
import {Filters} from '../../../models/Filters';
import {Store} from '@ngrx/store';
import {RatingService} from '../../../services/RatingService';
import {ReduxUser} from '../../../redux/models/ReduxUser';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @ViewChild(PopupNotificationComponent) popup: PopupNotificationComponent;

  posts: Post[];

  counter = 10;

  canLoad = true;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
      this.postService.getAllPosts()
          .then(response => {
              this.posts = response;
              this.popup.display('Posts was successfully loaded!');
          });
  }

  loadMore() {
    const filters = new Filters();
    filters.limit = this.counter + 10;
    filters.offset = this.counter;
    this.postService.getAllPosts(filters)
      .then(response => {
        const posts: Post[] = response;
        this.posts.push(...posts);
        this.counter += 10;
        if (posts.length < 10) {
          this.canLoad = false;
        }
      });
  }
}
