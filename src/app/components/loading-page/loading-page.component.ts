import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})

export class LoadingPageComponent implements OnInit {
  @Input() count: number;
  array: number[] = [];
  ngOnInit() {
    for (let i = 0; i < this.count; i++) {
      this.array.push(i);
      console.log(this.array);
    }
  }
}
