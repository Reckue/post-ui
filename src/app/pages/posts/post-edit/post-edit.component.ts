import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../../models/post';
import {PostApi} from '../../../api/post.api';
import {ActivatedRoute} from '@angular/router';
import {Node} from '../../../models/node';
import {TextNode} from '../../../models/TextNode';
import {NodeType} from '../../../models/NodeTypes';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.pug',
  styleUrls: ['./post-edit.component.sass']
})
export class PostEditComponent implements OnInit {

  public post: Post = new Post();
  constructor(private postApi: PostApi,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postApi.getById(id).subscribe(
      data => this.post = data as Post,
      err => console.error(err),
      () => console.log(this.post.nodes)
    );
  }

  editTitle(event) {
    event.preventDefault();
    this.post.title = event.target.innerText;
    console.log(this.post.title);
  }

  addTitle(event) {
    event.preventDefault();
    if (event.target.innerText !== '') {
      this.post.title = event.target.innerText;
      const txt = new TextNode('');
      const node = new Node(null, NodeType.TEXT, txt);
      this.post.nodes.push(node);
    }
    // this.post.title = event.target.value;
    // event.target.value = '';
  }
  addNode = (event) => {
    console.log('1234');
    event.preventDefault();
    if (event.target.innerText !== '') {
      const content = new TextNode(event.target.innerText);
      const node = new Node(null, NodeType.TEXT, content);
      console.log(node);
      console.log(this.post.nodes);
      this.post.nodes.push(node);
      event.target.innerText = '';
    }
  }
  editNode = (event, node): void => {
    const id = this.post.nodes.indexOf(node);
    if (event.target.innerText !== '') {
      const textContent = new TextNode(event.target.innerText);
      this.post.nodes[id] = new Node(null, NodeType.TEXT, textContent, null, '1');
    } else {
      this.post.nodes.splice(id, 1);
    }
    console.log('asdf');
  }
  deleteNode = (node): void => {
    const id = this.post.nodes.indexOf(node);
    this.post.nodes.splice(id, 1);
  }
}
