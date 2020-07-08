export class Tokens {

  // tslint:disable-next-line:variable-name
  access_token: string;
  // tslint:disable-next-line:variable-name
  expires_in: number;
  // tslint:disable-next-line:variable-name
  refresh_token: string;
  // tslint:disable-next-line:variable-name
  token_type: string;

  // tslint:disable-next-line:variable-name
  constructor(access_token: string = null,
              // tslint:disable-next-line:variable-name
              expires_in: number = null,
              // tslint:disable-next-line:variable-name
              refresh_token: string = null,
              // tslint:disable-next-line:variable-name
              token_type: string = null) {
    this.access_token = access_token;
    this.expires_in = expires_in;
    this.refresh_token = refresh_token;
    this.token_type = token_type;
  }
}
