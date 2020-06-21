import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() username: string;
  symbol: string;

  constructor() { }

  ngOnInit(): void {
    this.symbol = this.username.substring(0, 1)
  }

}
