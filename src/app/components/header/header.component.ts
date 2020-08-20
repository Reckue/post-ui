import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @ViewChild('header') header;
  private headerPosition = 0;

  constructor() { }

  @HostListener('window:scroll')
  track() {
    this.calculatePosition(window.pageYOffset);
    const trackStyle = 'top:-' + (window.pageYOffset - this.headerPosition) + 'px';
    this.header.nativeElement.setAttribute('style', trackStyle);
  }

  calculatePosition = (currentPosition) => {
    if (currentPosition - this.headerPosition >= 60) {
      this.headerPosition = currentPosition - 60;
    } else if (currentPosition - this.headerPosition < 0) {
      this.headerPosition = currentPosition;
    }
  }
}
