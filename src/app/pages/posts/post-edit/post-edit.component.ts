import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PopupNotificationComponent} from '../../../components/notification/popup/popup-notification.component';
import {Post} from '../../../models/common/Post';
import {Node} from '../../../models/common/Node';
import {PostService} from '../../../services/PostService';
import {TextNode} from '../../../models/common/TextNode';
import {NodeType} from '../../../models/common/NodeType';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  @ViewChild(PopupNotificationComponent) popup: PopupNotificationComponent;

  public post = new Post();

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id)
      .then(post => {
        this.post = post;
      })
      .catch();
  }

  editPost() {
    this.postService
      .editPost(this.post.id, this.post)
      .then(created => {
        this.popup.display('Post successfully edited!');
      })
      .catch(ignore => this.popup.display('Warring! Something went wrong and post wasn\'t edited.'));
  }

  addNode = (event) => {
    event.preventDefault();
    if (event.target.innerText !== '') {
      const textContent = new TextNode(event.target.innerText);
      const node = new Node(null, NodeType.TEXT, textContent, null, '1');
      this.post.nodes.push(node);
      event.target.innerText = '';
      this.editPost();
    }
  };

  editTitle(event) {
    this.post.title = event.target.value;
    this.editPost();
  }

  editNode = (event, node): void => {
    const id = this.post.nodes.indexOf(node);
    if (event.target.innerText !== '') {
      const textContent = new TextNode(event.target.innerText);
      this.post.nodes[id] = new Node(null, NodeType.TEXT, textContent, null, '1');
    } else {
      this.post.nodes.splice(id, 1);
    }
    this.editPost();
  }

  deleteNode = (node): void => {
    const id = this.post.nodes.indexOf(node);
    this.post.nodes.splice(id, 1);
    this.editPost();
  }
}
