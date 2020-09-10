import {Component} from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.pug',
  styleUrls: ['./popup-modal.component.sass']
})
export class PopupModalComponent {

  constructor() {
    document.querySelector('body').style.overflow = 'hidden';
  }
}
