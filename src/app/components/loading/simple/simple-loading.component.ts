import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-simple-loading',
  templateUrl: './simple-loading.component.pug',
  styleUrls: ['./simple-loading.component.sass']
})
export class SimpleLoadingComponent {
  @Input() condition;
}
