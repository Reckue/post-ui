import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {Node} from '../../../models/Node';
import {NodeType} from '../../../models/NodeType';
import {TextNode} from '../../../models/TextNode';
import {PostService} from '../../../services/PostService';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().then(response => {
      const posts: Post[] = response;
      console.log(posts);
      this.posts = posts;
    });
  }

}
