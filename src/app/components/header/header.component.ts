import { Component, OnInit } from '@angular/core';
import {query} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  backgroundVisible = 'visibility: hidden;';
  constructor() { }

  ngOnInit(): void {
  }
  removeBackground() {
    this.backgroundVisible = 'visibility: hidden;';
  }
  addBackground() {
    this.backgroundVisible = 'visibility: visible;';
  }
}
