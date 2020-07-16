import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {UserService} from '../../services/UserService';
import {RatingService} from '../../services/RatingService';
import {Rating} from '../../models/Rating';
import {Store} from '@ngrx/store';
import {ReduxUser} from '../../redux/models/ReduxUser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.post.userId)
      .then(user => {
        this.user = user;
      })
      .catch();
  }
}
