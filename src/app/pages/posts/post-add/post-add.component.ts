import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../services/PostService';
import {Post} from '../../../models/Post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  private post: Post;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.createPost(new Post()).then(post => {
      this.post = post;
      this.router.navigate(['posts', 'edit', this.post.id]).then();
    });
  }
}
