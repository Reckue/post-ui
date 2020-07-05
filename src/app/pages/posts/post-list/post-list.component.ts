import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/PostService';
import {PopupWindowComponent} from '../../../components/window/popup/popup-window.component';
import {Filters} from '../../../models/Filters';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @ViewChild(PopupWindowComponent) popup: PopupWindowComponent;

  posts: Post[];

  counter = 10;

  canLoad = true;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts()
      .then(response => {
        this.posts = response;
        this.popup.display('10 posts was loaded!');
    });
  }

  loadMore() {
    const filters = new Filters();
    filters.offset = this.counter;
    this.popup.display('loading!');
    this.postService.getAllPosts(filters)
      .then(response => {
        const posts: Post[] = response;
        this.popup.close();
        this.posts.push(...posts);
        this.counter += 10;
        if (posts.length < 10) {
          this.canLoad = false;
        }
      });
  }
}
