import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Post} from '../../../models/post';
import {PostService} from '../../../services/api/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isSuccess} from '@angular/http/src/http_utils';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.pug',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  private routeSub: Subscription;
  public post: Post = new Post();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    this.routeSub = this.route.params.subscribe(params => {
      this.postService.getById(params.id).subscribe(
        data => {
          this.post = data as Post;
        },
        err => console.error(err),
        () => console.log(this.post)
      );
    });
  }
}
