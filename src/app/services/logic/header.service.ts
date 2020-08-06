import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  private menu = {visible: false};
  private search = {visible: false, minSize: 580};

  constructor() {
    this.changeSearchVisible();
    window.addEventListener('resize', this.changeSearchVisible);
  }

  /* Search methods */

  changeSearchVisible = () => this.search.visible = document.body.clientWidth > this.search.minSize;

  getSearchVisible = (): boolean => this.search.visible;

  /* Menu methods */

  reverseMenuVisibility = () => this.menu.visible = !this.menu.visible;

  hideMenu = () => this.menu.visible = false;

  getMenuVisible = (): boolean => this.menu.visible;
}
