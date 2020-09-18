import {Component, Input, OnInit} from '@angular/core';
import {TextNode} from '../../../models/TextNode';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.pug',
  styleUrls: ['./text.component.sass']
})
export class TextComponent implements OnInit {

  @Input() node: Node;
  @Input() content: TextNode;
  @Input() isInput: boolean;
  @Input() onChange: (event: any, node: Node) => void;
  @Input() onDelete: (node: Node) => void;
  text: string;

  constructor() { }

  ngOnInit(): void {
    this.text = this.content.content;
    console.log(this.node);
    console.log(this.text);
  }

}
