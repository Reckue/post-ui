import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../../services/PostService';
import {Post} from '../../../models/Post';
import {Node} from '../../../models/Node';
import {NodeType} from '../../../models/NodeType';
import {TextNode} from '../../../models/TextNode';
import {PopupWindowComponent} from '../../../components/window/popup/popup-window.component';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  @ViewChild(PopupWindowComponent) popup: PopupWindowComponent;

  public post: Post;

  public title = '';

  public nodes: Node[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.post = new Post();
  }

  createPost() {
    this.post.nodes = this.nodes;
    this.post.title = this.title;
    this.postService
      .createPost(this.post)
      .then(created => {
        this.title = '';
        this.nodes = [];
        console.log(created);
        this.popup.display('Post successfully created!');
      })
      .catch(ignore => this.popup.display('Warring! Something went wrong and post wasn\'t created.'));
  }

  addNode(event) {
    const textContent = new TextNode(event.target.value);
    const index = this.nodes.length.toString();
    const node = new Node(index, NodeType.TEXT, textContent, null, '1');
    this.nodes.push(node);
    event.target.value = '';
    this.popup.display('Node has been created!');
  }

  editTitle(event) {
    this.title = event.target.value;
    this.popup.display('Title has been changed!');
  }

  editNode = (event, id): void => {
    if (event.target.value !== '') {
      const textContent = new TextNode(event.target.value);
      this.nodes[id as number] = new Node(id, NodeType.TEXT, textContent, null, '1');
    } else {
      this.nodes.splice(id, 1);
    }
    this.popup.display('Node has been changed!');
  }

  deleteNode = (id): void => {
    this.nodes.splice(id, 1);
    this.popup.display('Node has been deleted!');
  }
}
