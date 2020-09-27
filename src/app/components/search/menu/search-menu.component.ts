import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.pug',
  styleUrls: ['./search-menu.component.sass']
})
export class SearchMenuComponent {
  Categories = ['Game', 'Buisness', 'Info', 'LoL', 'Front', 'Back', 'QA', 'Engenering', 'Gan'];
  Authors = ['Yra', 'Peta', 'Vasa', 'Egor', 'Max', 'Basya', 'Elena', 'Nastya', 'Alina'];

  constructor() {}
}
