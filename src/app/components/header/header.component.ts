import { Component, OnInit } from '@angular/core';
import {query} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  backgroundVisible = 'visibility: hidden;';
  searchVisible = document.body.clientWidth > 580;
  constructor() { }

  ngOnInit(): void {
    window.onresize = () => {
      this.searchVisible = document.body.clientWidth > 580;
    };
  }

  removeBackground() {
    this.backgroundVisible = 'visibility: hidden;';
  }

  addBackground() {
    this.backgroundVisible = 'visibility: visible;';
  }
}
