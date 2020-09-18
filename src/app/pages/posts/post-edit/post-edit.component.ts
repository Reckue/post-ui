import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../../models/post';
import {PostApi} from '../../../api/post.api';
import {ActivatedRoute} from '@angular/router';
import {Node} from '../../../models/node';
import {TextNode} from '../../../models/TextNode';
import {NodeType} from '../../../models/NodeTypes';
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.pug',
  styleUrls: ['./post-edit.component.sass']
})
export class PostEditComponent implements OnInit {

  constructor(private postService: PostService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.params.subscribe(params => this.postService.subscribeById(params.id)));
  }

  editPost = () => this.postService.getById();

  editTitle(event) {
    event.preventDefault();
    this.editPost().title = event.target.innerText;
  }

  addTitle(event) {
    event.preventDefault();
    if (event.target.innerText !== '') {
      this.editPost().title = event.target.innerText;
      const txt = new TextNode('');
      const node = new Node(null, NodeType.TEXT, txt);
      this.editPost().nodes.push(node);
    }
    // this.post.title = event.target.value;
    // event.target.value = '';
  }
  addNode = (event) => {
    event.preventDefault();
    if (event.target.innerText !== '') {
      const content = new TextNode(event.target.innerText);
      const node = new Node(null, NodeType.TEXT, content);
      this.editPost().nodes.push(node);
      event.target.innerText = '';
    }
  }
  editNode = (event, node): void => {
    const id = this.editPost().nodes.indexOf(node);
    if (event.target.innerText !== '') {
      const textContent = new TextNode(event.target.innerText);
      this.editPost().nodes[id] = new Node(null, NodeType.TEXT, textContent, null, '1');
    } else {
      this.editPost().nodes.splice(id, 1);
    }
  }
  deleteNode = (node): void => {
    const id = this.editPost().nodes.indexOf(node);
    this.editPost().nodes.splice(id, 1);
  }
}
