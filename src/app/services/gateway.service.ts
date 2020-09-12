import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor() { }

  // TODO: In future, here will be only one a service for gateway to Reckue API.
  // private static gatewayService: string        = "https://api.reckue.com"

  private postService           = 'http://post-reckue.apps.us-east-1.starter.openshift-online.com';
  private authorizationService  = 'http://authorization-reckue.apps.us-east-1.starter.openshift-online.com';
  private accountService        = 'http://account-reckue.apps.us-east-1.starter.openshift-online.com';

  public getPostService(): string {
    return this.postService;
  }

  // public getAllPosts(): string {
  //   return this.postService.concat("/posts");
  // }

  public getAllPosts(): string {
    return this.postService.concat('/posts');
  }

  public getPosts(limit: number, offset: number, sort: string, desc: string): string {
    return this.postService.concat('/posts/?limit=' + limit + '&offset=' + offset + '&sort=' + sort + '&desc=' + desc);
  }

  public getPostById(id: string): string {
    return this.postService.concat('/posts/' + id);
  }

  public getAuthorizationService(): string {
    return this.authorizationService;
  }

  public getAccountService(): string {
    return this.accountService;
  }

}
