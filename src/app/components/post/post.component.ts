import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {TextNode} from '../../models/TextNode';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  description = '';

  constructor() { }

  ngOnInit(): void {
    const nodes = this.post.nodes;
    if (nodes.length > 0) {
      const node = nodes[0].content as TextNode;
      this.description = node.content;
    }
  }
}
