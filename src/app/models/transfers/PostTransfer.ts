import {Post} from '../common/Post';
import {User} from '../common/User';

export class PostTransfer {

  post: Post;
  user: User;

  constructor(post: Post, user: User) {
    this.post = post;
    this.user = user;
  }
}
