import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PopupNotificationComponent} from './components/popup-notification/popup-notification.component';
import {PopupNotificationService} from './services/popup-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(PopupNotificationComponent) popup: PopupNotificationComponent;

  constructor(private popupNotificationService: PopupNotificationService) {}

  ngAfterViewInit(): void {
    this.popupNotificationService.setPopupComponent(this.popup);
    this.popupNotificationService.displayMessage('Popup example');
  }
}
