import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/AuthService';
import {AuthForm} from '../../models/common/AuthForm';
import {Store} from '@ngrx/store';
import {Action} from '../../redux/models/Action';
import {ActionTypes} from '../../redux/models/ActionTypes';
import {Router} from '@angular/router';
import {ReduxUser} from '../../redux/models/ReduxUser';
import {PopupNotificationComponent} from '../../components/notification/popup/popup-notification.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild(PopupNotificationComponent) popup: PopupNotificationComponent;

  registration = false;

  public authForm: AuthForm = new AuthForm();

  constructor(private authService: AuthService,
              private store: Store<any>,
              private router: Router) {
    this.store.dispatch(new Action(ActionTypes.HIDE_HEADER));
  }

  ngOnInit(): void {
    this.store.select('user')
      .subscribe(store => {
        const user: ReduxUser = store;
        if (user.isAuth) {
          this.router.navigate(['posts']).then();
        }
      });
  }

  onChange = (event) => {
    this.authForm[event.target.name] = event.target.value;
  }

  auth = () => {
    this.authService
      .login(this.authForm)
      .then(tokens => {
        this.authService.info().then(info => {
          this.store.dispatch(new Action(ActionTypes.AUTHORIZED, info));
          this.router.navigate(['posts']).then();
        });
      }).catch(ignore => {
        this.popup.display('Error! User can\'t be authorized!');
      });
  }

  register = () => {
    this.authService
      .register(this.authForm)
      .then(tokens => {
        this.authService.info().then(info => {
          this.store.dispatch(new Action(ActionTypes.AUTHORIZED, info));
          this.router.navigate(['posts']).then();
        });
      }).catch();
  }

  swap = () => {
    this.registration = !this.registration;
  }
}
