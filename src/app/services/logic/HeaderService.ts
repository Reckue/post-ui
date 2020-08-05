import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  private search = {visible: false, minSize: 580};

  constructor() {
    this.setSearchMinSize(580);
    this.changeSearchVisible();
    window.addEventListener('resize', this.changeSearchVisible);
  }

  setSearchMinSize = (size: number) => this.search.minSize = size;

  changeSearchVisible = () => this.search.visible = document.body.clientWidth > this.search.minSize;

  getSearchVisible = (): boolean => this.search.visible;
}
