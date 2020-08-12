import {Injectable} from '@angular/core';
import {HeaderStateService} from '../redux/header-state.service';
import {ReduxHeader} from '../../models/redux/ReduxHeader';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  private menu = {visible: false};
  private search = {visible: false, minSize: 580};

  constructor(private headerStateService: HeaderStateService) {
    this.getSearchVisible();
    window.addEventListener('resize', this.getSearchVisible);
  }

  isHidden = (): boolean => this.headerStateService.getHeader().hide;

  hideHeader = () => this.headerStateService.hideHeader();

  /* Search methods */

  getSearchVisible = () => this.search.visible = document.body.clientWidth > this.search.minSize;

  /* Menu methods */

  reverseMenuVisibility = () => this.menu.visible = !this.menu.visible;

  hideMenu = () => this.menu.visible = false;

  getMenuVisible = (): boolean => this.menu.visible;
}
