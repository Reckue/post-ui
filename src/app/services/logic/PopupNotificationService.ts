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

  displayMessage = (message: string) => this.popup.display(message);

  closePopup = () => this.popup.close();
}
