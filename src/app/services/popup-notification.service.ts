import {Injectable} from '@angular/core';
import {PopupNotificationComponent} from '../components/popup/notification/popup-notification.component';
import {Field} from '../models/Field';

@Injectable({
  providedIn: 'root',
})
export class PopupNotificationService {

  private popup: PopupNotificationComponent;

  constructor() {}

  setPopupComponent = (popup: PopupNotificationComponent) => this.popup = popup;

  displayMessage = (message: string) => {
    this.popup.addNotification(new Field(message, '', '', null));
    this.closePopup(4000);
  }

  closePopup = (ms: number = 0) => setTimeout(() => this.close(), ms);

  close = () => this.popup.closeNotification();
}
