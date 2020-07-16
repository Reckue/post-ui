import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {Rating} from '../../models/Rating';
import {UserService} from '../../services/UserService';
import {RatingService} from '../../services/RatingService';
import {Store} from '@ngrx/store';
import {ReduxUser} from '../../redux/models/ReduxUser';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() postId: string;

  rating: Rating;

  constructor(private ratingService: RatingService, private store: Store<any>) { }

  ngOnInit(): void {
    this.updateRating();
  }

  updateRating() {
    this.ratingService.getQuantityOfRatingsToPost(this.postId).then(rating => {
      this.rating = rating;
    });
  }

  like() {
    this.store.select('user').subscribe(user => {
      const me: ReduxUser = user;
      this.ratingService.like(this.postId, me.info.id).then(response => {
        this.updateRating();
      }).catch(reason => {
        this.updateRating();
      });
    });
  }
}
