import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})
export class PopupWindowComponent {

  message = 'default message...';

  isVisible = false;

  constructor() {
  }

  close = () => {
    this.isVisible = false;
  }

  display = (message: string) => {
    this.message = message;
    this.isVisible = true;
    setTimeout(this.close, 5000);
  }
}
