export class AuthForm {

  email: string;
  password: string;
  username: string;

  constructor(email: string = null, password: string = null, username: string = null) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
