import {Component} from '@angular/core';
import {HeaderService} from '../../services/logic/header.service';
import {AuthService} from '../../services/logic/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private headerService: HeaderService) {}

  getUser = () => this.authService.getUser();

  unauthorize = () => this.authService.unauthorize();

  getMenuVisible = () => this.headerService.getMenuVisible();

  reverseMenuVisibility = () => this.headerService.reverseMenuVisibility();

  getSearchVisible = () => this.headerService.getSearchVisible();

  hideMenu = () => this.headerService.hideMenu();
}
