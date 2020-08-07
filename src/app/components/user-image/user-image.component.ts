import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {

  @Input() username: string;

  @Input() url: string;

  constructor() {}
}
