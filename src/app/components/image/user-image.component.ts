import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent implements OnInit {

  @Input() username: string;

  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }
}
