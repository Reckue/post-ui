import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor() { }

  // TODO: In future, here will be only one a service for gateway to Reckue API.
  // private static gatewayService: string        = "https://api.reckue.com"

  private static postService: string           = "http://post-reckue.apps.us-east-1.starter.openshift-online.com";
  private static authorizationService: string  = "http://authorization-reckue.apps.us-east-1.starter.openshift-online.com";
  private static accountService: string        = "http://account-reckue.apps.us-east-1.starter.openshift-online.com";

  static getPostService(): string {
    return this.postService;
  }

  static getAuthorizationService(): string {
    return this.authorizationService;
  }

  static getAccountService(): string {
    return this.accountService;
  }

}
