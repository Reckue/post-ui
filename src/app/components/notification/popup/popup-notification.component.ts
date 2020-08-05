import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.component.html',
  styleUrls: ['./popup-notification.component.css']
})
export class PopupNotificationComponent {

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
