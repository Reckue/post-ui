import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../models/post';
import {DateFormatService} from '../../services/date-format.service';

@Component({
  selector: 'app-post-landing',
  templateUrl: './post-landing.component.pug',
  styleUrls: ['./post-landing.component.sass']
})
export class PostLandingComponent implements OnInit {
  @ViewChild('menu') menuButton;
  @Input() post: Post;
  publish: string;

  constructor(private dateFormat: DateFormatService) {}

  ngOnInit(): void {
    this.publish = this.dateFormat.getTimeAfterPublish(this.post.createdDate);
  }

  onClickMenuButton = () => {
    const menuVisible = this.menuButton.nativeElement.classList.contains('open');
    if (!menuVisible) {
      this.menuButton.nativeElement.classList.add('open');
    } else {
      this.menuButton.nativeElement.classList.remove('open');
    }
  }
}
