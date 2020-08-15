import {Component, OnInit} from '@angular/core';
import {PopupNotificationService} from './services/popup-notification.service';
import {PostService} from './services/api/post.service';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts();
  }

  constructor(private popupNotificationService: PopupNotificationService,
              private postService: PostService) { }

  getPosts() {
    this.postService.getAll().subscribe(
      data => { this.posts = data as any; },
      err => console.error(err),
      () => console.log('Done loading posts')
    );
  }
}
