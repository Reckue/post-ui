import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GatewayService} from '../gateway.service';
import {Observable} from 'rxjs';
import {Post} from '../../models/post';
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
              private gateway: GatewayService,
              private route: ActivatedRoute) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.gateway.getAllPosts());
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(this.gateway.getPostById(id));
  }
  createPost(post: Post): Observable<Post> {
    return  this.http.post<Post>(this.gateway.getAllPosts(), post);
  }
}
