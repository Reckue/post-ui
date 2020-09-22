import {Component, Host, HostListener, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../models/post';
import {PostApi} from '../../api/post.api';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @ViewChild('header') header;
  private headerPosition = 0;

  constructor(private postService: PostService) {}

  addPost = () => this.postService.createPostAndRedirect();

  @HostListener('window:scroll')
  onScroll() {
    this.calculatePosition(window.pageYOffset);
    this.track();
  }

  track = (headerPosition = this.headerPosition) => {
    const trackStyle = 'top:-' + this.calculatePadding(headerPosition) + 'px';
    this.header.nativeElement.setAttribute('style', trackStyle);
  }

  @HostListener('window:mousemove', ['$event'])
  private onMouseMove = (event) => {
    if (event.clientY < 60 && event.clientY > 0) {
      this.track(window.pageYOffset);
    } else {
      this.track();
    }
  }

  private calculatePosition = (pagePosition) => {
    if (this.calculatePadding() >= 60) {
      this.headerPosition = pagePosition - 60;
    } else if (this.calculatePadding() < 0) {
      this.headerPosition = pagePosition;
    }
  }

  private calculatePadding = (headerPosition = this.headerPosition) => window.pageYOffset - headerPosition;
}
