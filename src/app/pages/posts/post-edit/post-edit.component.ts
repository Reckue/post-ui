import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {PostService} from '../../../services/api/post.service';
import {ActivatedRoute} from '@angular/router';
import {Node} from '../../../models/node';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.pug',
  styleUrls: ['./post-edit.component.sass']
})
export class PostEditComponent implements OnInit {

  public post: Post = new Post();
  constructor(private postService: PostService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  editTitle(event) {
    event.preventDefault();
    this.post.title = event.target.innerText;
    console.log(this.post.title);
  }
    // this.post.title = event.target.value;
    // event.target.value = '';
  addNode = (event) => {
    event.preventDefault();
    if (event.target.innerText !== '') {
      const innerText = event.target.innerText;
      const node = new Node(null, 'TEXT', innerText);
      console.log(innerText);
      console.log(node);
      console.log(this.post.nodes);
      this.post.nodes.push(node);
      event.target.innerText = '';
    }
  }
}
