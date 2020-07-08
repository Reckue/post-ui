import { Component, OnInit } from '@angular/core';
import {query} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuVisible = false;

  searchVisible = document.body.clientWidth > 580;

  private wrapper: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    window.onresize = () => {
      this.searchVisible = document.body.clientWidth > 580;
    };
  }

  reverseMenuVisibility() {
    this.menuVisible = !this.menuVisible;
  }

  hideMenu() {
    this.menuVisible = false;
  }
}
