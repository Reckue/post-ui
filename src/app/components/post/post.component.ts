import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/common/Post';
import {User} from '../../models/common/User';
import {PostTransfer} from '../../models/transfers/PostTransfer';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() transfer: PostTransfer;
  @Input() print: () => void;

  post: Post;
  user: User;

  constructor() {}

  ngOnInit(): void {
    this.post = this.transfer.post;
    this.user = this.transfer.user;
    // this.userService.getUserById(this.post.userId).then(user => {this.user = user;}).catch();
  }
}
