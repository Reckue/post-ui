import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {TextNode} from '../../models/TextNode';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post: Post;

  constructor() { }
}
