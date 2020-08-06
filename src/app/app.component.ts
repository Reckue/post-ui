import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Header} from './redux/models/Header';
import {AuthApiService} from './services/api/auth-api.service';
import {Action} from './redux/models/Action';
import {ActionTypes} from './redux/models/ActionTypes';
import {PopupNotificationComponent} from './components/notification/popup/popup-notification.component';
import {PopupNotificationService} from './services/logic/popup-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(PopupNotificationComponent) popup: PopupNotificationComponent;

  hideHeader = false;

  constructor(private store: Store<any>,
              private authService: AuthApiService,
              private popupNotificationService: PopupNotificationService) {}

  ngOnInit(): void {
    if (this.authService.getTokens().accessToken) {
      this.authService.info().then(info => {
        this.store.dispatch(new Action(ActionTypes.AUTHORIZED, info));
      });
    }
    this.store.select('header')
      .subscribe(store => {
        const header: Header = store;
        this.hideHeader = header.hide;
      });
  }

  ngAfterViewInit(): void {
    this.popupNotificationService.setPopup(this.popup);
  }
}
