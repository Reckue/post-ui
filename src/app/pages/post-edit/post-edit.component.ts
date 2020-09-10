import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.pug',
  styleUrls: ['./post-edit.component.sass']
})
export class PostEditComponent implements OnInit {

  public post = new Post();
  constructor() { }

  ngOnInit(): void {
  }

  editTitle(event) {
    this.post.title = event.target.value;
  }
}
