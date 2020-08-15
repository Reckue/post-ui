import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GatewayService} from '../gateway.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
              private gatewayService: GatewayService) { }

  async getAll() {
    this.http.get(this.gatewayService.getAllPosts())
      .subscribe(() => console.log('Done'))
  }
}
