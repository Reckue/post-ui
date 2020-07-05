import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  input: HTMLTextAreaElement;

  @Input() id: string;
  @Input() placeholder: string;
  @Input() change: (event: any) => void;
  @Input() value = null;
  constructor() { }

  ngOnInit(): void {
    this.input = window.document.getElementById(this.id) as HTMLTextAreaElement;
    this.input.value = '';
    this.input.cols = 0;
    this.resize();

  }

  resize() {
    this.input.style.height = (this.input.cols * 20) + 'px';
    console.log('\'' + this.input.value + '\'');
  }

  onChange(event: Event) {
    this.resize();
    this.change(event);
  }

  toggleNodeCreated(obj, event) {
    if (event.shiftKey) {
      // do this
      console.log(1);
    } else {
      // do that
    }
  }
}
