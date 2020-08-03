import {Component, Input} from '@angular/core';
import {Post} from '../../models/common/Post';

@Component({
  selector: 'app-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent {

  @Input() post: Post;

  constructor() { }
}
