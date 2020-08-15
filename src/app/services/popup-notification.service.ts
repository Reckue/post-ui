import {Injectable} from '@angular/core';
import {PopupNotificationComponent} from '../components/popup-notification/popup-notification.component';

@Injectable({
  providedIn: 'root',
})
export class PopupNotificationService {

  private popup: PopupNotificationComponent;

  constructor() {
  }

  setPopupComponent = (popup: PopupNotificationComponent) => this.popup = popup;

  displayMessage = (message: string) => {
    this.popup.changeMessage(message);
    this.popup.display();
    this.closePopup(4000);
  }

  closePopup = (ms: number = 0) => setTimeout(this.close, ms);

  close = () => this.popup.close();
}
