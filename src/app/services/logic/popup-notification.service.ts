import {Injectable, Input} from '@angular/core';
import {PopupNotificationComponent} from '../../components/notification/popup/popup-notification.component';

@Injectable({
  providedIn: 'root',
})
export class PopupNotificationService {

  private popup: PopupNotificationComponent;

  constructor() {
  }

  setPopup = (popup: PopupNotificationComponent) => this.popup = popup;

  displayMessage = (message: string) => {
    this.popup.changeMessage(message);
    this.popup.display();
  }

  closePopup = (ms: number = 0) => setTimeout(this.close, ms);

  close = () => this.popup.close();
}
