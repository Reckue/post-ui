import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {PopupNotificationService} from '../../../services/popup-notification.service';
import {PostService} from '../../../services/api/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.pug',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  public posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts();
  }

  constructor(private popupNotificationService: PopupNotificationService,
              private postService: PostService) { }

  getPosts() {
    this.postService.getAll().subscribe(
      data => { this.posts = data as Post[]; },
      err => console.error(err),
      () => console.log(this.posts)
    );
  }
}
