import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/common/Post';
import {User} from '../../models/common/User';
import {Rating} from '../../models/common/Rating';
import {UserApiService} from '../../services/api/user-api.service';
import {RatingApiService} from '../../services/api/rating-api.service';
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

  constructor(private ratingService: RatingApiService, private store: Store<any>) { }

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
