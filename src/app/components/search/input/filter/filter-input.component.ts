import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.pug',
  styleUrls: ['./filter-input.component.sass']
})
export class FilterInputComponent {

  @Input() name: string;

  constructor() {}
}
