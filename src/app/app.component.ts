import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PopupNotificationComponent} from './components/notification/popup/popup-notification.component';
import {PopupNotificationService} from './services/logic/popup-notification.service';
import {AuthService} from './services/logic/auth.service';
import {HeaderService} from './services/logic/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(PopupNotificationComponent) popup: PopupNotificationComponent;

  constructor(private authService: AuthService,
              private headerService: HeaderService,
              private popupNotificationService: PopupNotificationService) {
    this.authService.tryTakeUserByToken();
  }

  isHidden = () => this.headerService.isHidden();

  ngAfterViewInit(): void {
    this.popupNotificationService.setPopupComponent(this.popup);
  }
}
