import {Component, Host, HostListener, ViewChild} from '@angular/core';
import {HeaderContentTypes} from '../../models/HeaderContentTypes';
import {PopupNotificationService} from '../../services/popup-notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @ViewChild('header') header;
  private headerPosition = 0;
  private contentType = HeaderContentTypes.EDIT;

  constructor(private popupNotificationService: PopupNotificationService) {}

  @HostListener('window:scroll')
  onScroll() {
    this.calculatePosition(window.pageYOffset);
    this.track();
    this.popupNotificationService.displayMessage('Im Scrolling');
  }

  track = (headerPosition = this.headerPosition) => {
    const trackStyle = 'top:-' + this.calculatePadding(headerPosition) + 'px';
    this.header.nativeElement.setAttribute('style', trackStyle);
  }

  @HostListener('window:mousemove', ['$event'])
  private onMouseMove = (event) => {
    if (event.clientY < 60 && event.clientY > 0) {
      this.track(window.pageYOffset);
    } else {
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

  private calculatePadding = (headerPosition = this.headerPosition) => window.pageYOffset - headerPosition;
}
