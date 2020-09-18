import {Component, HostListener, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.pug',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  ngOnInit(): void {
    this.postService.subscribePosts();
  }

  constructor(private postService: PostService) {}

  getPosts = () => this.postService.getAll();

  @HostListener('window:scroll')
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.postService.loadPosts();
    }
  }
}
