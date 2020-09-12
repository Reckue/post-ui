import {Component, OnInit} from '@angular/core';
import {PopupNotificationService} from '../../services/popup-notification.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.pug',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  ngOnInit(): void {
    this.postService.subscribeAll();
  }

  constructor(private postService: PostService) {}

  getPosts = () => this.postService.getAll();
}
