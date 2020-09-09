import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PopupNotificationService} from './services/popup-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('popup') popup;

  constructor(private popupNotificationService: PopupNotificationService) {
  }

  ngAfterViewInit(): void {
    this.popupNotificationService.setPopupComponent(this.popup);
  }
}
