import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../models/post';
import {DateFormatService} from '../../services/date-format.service';
import {Field} from '../../models/Field';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-landing',
  templateUrl: './post-landing.component.pug',
  styleUrls: ['./post-landing.component.sass', './popup-menu.sass']
})
export class PostLandingComponent implements OnInit {
  @Input() post: Post;
  publish: string;

  @ViewChild('menu') menuButton;
  menuVisible: boolean;
  menuFields: Field[];

  constructor(private dateFormat: DateFormatService, private route: Router) {}

  ngOnInit(): void {
    this.menuVisible = false;
    this.publish = this.dateFormat.getTimeAfterPublish(this.post.createdDate);
    this.menuFields = [];
    this.menuFields.push(new Field('favorites', '', 'black', () => {}));
    this.menuFields.push(new Field('edit', '', 'black', () => this.goEdit()));
    this.menuFields.push(new Field('report', '', 'red', () => {}));
    this.menuFields.push(new Field('remove', '', 'red', () => this.removePost()));
  }

  goEdit = () => {
    this.route.navigate([this.post.id, 'edit']).then(ignore => {});
  }

  removePost = () => {};

  clickMenuButton = () => {
    this.menuVisible = !this.menuButton.nativeElement.classList.contains('open');
    if (this.menuVisible) {
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
      this.menuVisible = false;
      this.menuButton.nativeElement.classList.remove('open');
    }
  }
}
