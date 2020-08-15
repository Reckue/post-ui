import {Component} from '@angular/core';

@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.component.pug',
  styleUrls: ['./popup-notification.component.sass']
})
export class PopupNotificationComponent {

  message = 'default message...';
  isVisible = false;

  constructor() {
  }

  close = () => this.isVisible = false;

  display = () => this.isVisible = true;

  changeMessage = (message: string) => this.message = message;
}
