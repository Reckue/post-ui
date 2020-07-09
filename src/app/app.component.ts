import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Header} from './redux/models/Header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hideHeader = false;

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.select('header')
      .subscribe(store => {
        const header: Header = store;
        this.hideHeader = header.hide;
      });
  }
}
