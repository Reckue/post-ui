import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GatewayService} from '../gateway.service';
import {Observable} from 'rxjs';
import {Post} from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
              private gateway: GatewayService) { }

  getAll(): Observable<Post> {
    return this.http.get<Post>(this.gateway.getAllPosts());
  }
}
