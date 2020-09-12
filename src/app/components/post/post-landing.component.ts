import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../models/post';
import {DateFormatService} from '../../services/date-format.service';
import {PopupModalService} from '../../services/popup-modal.service';

@Component({
  selector: 'app-post-landing',
  templateUrl: './post-landing.component.pug',
  styleUrls: ['./post-landing.component.sass', './popup-menu.sass']
})
export class PostLandingComponent implements OnInit {
  @ViewChild('menu') menuButton;
  @Input() post: Post;
  publish: string;

  constructor(private dateFormat: DateFormatService, private popupModalService: PopupModalService) {}

  ngOnInit(): void {
    this.publish = this.dateFormat.getTimeAfterPublish(this.post.createdDate);
  }

  clickMenuButton = () => {
    const menuVisible = this.menuButton.nativeElement.classList.contains('open');
    if (!menuVisible) {
      this.popupModalService.display();
      this.menuButton.nativeElement.classList.add('open');
    } else {
      this.menuButton.nativeElement.classList.remove('open');
    }
  }

  @HostListener('window:click', ['$event'])
  closeMenu = (event) => {
    const element = event.target;
    const notMenuButton = !element.classList.contains('menu-btn');
    const notThisPost = !(element.id === this.post.id);
    if (notMenuButton || notThisPost) {
      this.menuButton.nativeElement.classList.remove('open');
    }
  }
}
