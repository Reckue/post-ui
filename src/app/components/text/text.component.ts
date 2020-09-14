import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../models/node';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.pug',
  styleUrls: ['./text.component.sass']
})
export class TextComponent implements OnInit {

  @Input() node: Node;
  @Input() change: (event: any) => void;
  value: string;

  constructor() { }

  ngOnInit(): void {
    this.value = this.node.content;
  }

  newEnter = (event) => {
    event.preventDefault();
    let en  = event.target.innerText;
    const n  = document.createElement('br');
    en.append(n);
    en = en.substring(0, en.selectionStart) + '<br />' + ' \n ' + en.substring(en.selectionEnd, en.length);
  }

}
