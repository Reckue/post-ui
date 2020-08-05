export class Tokens {

  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  tokenType: string;

  constructor(accessToken: string = null,
              expiresIn: number = null,
              refreshToken: string = null,
              tokenType: string = null) {
    this.accessToken = accessToken;
    this.expiresIn = expiresIn;
    this.refreshToken = refreshToken;
    this.tokenType = tokenType;
  }
}
