import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() id: string;
  @Input() placeholder: string;
  @Input() change: (event: any) => void;
  @Input() value = null;
  constructor() { }

  ngOnInit(): void {
  }
}
