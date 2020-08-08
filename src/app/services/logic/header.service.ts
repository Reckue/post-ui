import {Injectable} from '@angular/core';
import {HeaderStateService} from '../redux/header-state.service';
import {ReduxHeader} from '../../redux/models/ReduxHeader';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  private menu = {visible: false};
  private search = {visible: false, minSize: 580};

  constructor(private headerStateService: HeaderStateService) {
    this.changeSearchVisible();
    window.addEventListener('resize', this.changeSearchVisible);
  }

  isHidden = (): boolean => this.headerStateService.getHeader().hide;

  /* Search methods */

  changeSearchVisible = () => this.search.visible = document.body.clientWidth > this.search.minSize;

  getSearchVisible = (): boolean => this.search.visible;

  /* Menu methods */

  reverseMenuVisibility = () => this.menu.visible = !this.menu.visible;

  hideMenu = () => this.menu.visible = false;

  getMenuVisible = (): boolean => this.menu.visible;
}
