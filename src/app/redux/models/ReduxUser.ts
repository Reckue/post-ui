import {User} from '../../models/common/User';

export class ReduxUser {

  isAuth: boolean;
  info: User;

  constructor(isAuth: boolean = false,
              info: User = new User()) {
    this.isAuth = isAuth;
    this.info = info;
  }
}
