import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PopupNotificationService} from './services/popup-notification.service';
import {PopupModalComponent} from './components/popup/modal/popup-modal.component';
import {PopupModalService} from './services/popup-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('popup') popup;
  @ViewChild('modal') modal;

  constructor(private popupNotificationService: PopupNotificationService,
              private popupModalService: PopupModalService) {
  }

  ngAfterViewInit(): void {
    this.popupNotificationService.setPopupComponent(this.popup);
    this.popupModalService.setModalComponent(this.modal);
  }
}
