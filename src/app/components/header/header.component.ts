import {Component, Host, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @ViewChild('header') header;
  private headerPosition = 0;

  constructor() {}

  @HostListener('window:scroll')
  onScroll() {
    this.calculatePosition(window.pageYOffset);
    this.track();
  }

  track = () => {
    const trackStyle = 'top:-' + this.calculatePadding() + 'px';
    this.header.nativeElement.setAttribute('style', trackStyle);
  }

  @HostListener('window:mousemove', ['$event'])
  private onMouseMove = (event) => {
    if (event.clientY < 60) {
      this.headerPosition = window.pageYOffset;
      this.track();
    }
  }

  private calculatePosition = (pagePosition) => {
    if (this.calculatePadding() >= 60) {
      this.headerPosition = pagePosition - 60;
    } else if (this.calculatePadding() < 0) {
      this.headerPosition = pagePosition;
    }
  }

  private calculatePadding = () => window.pageYOffset - this.headerPosition;
}
