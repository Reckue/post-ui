import {Component, Input, OnInit} from '@angular/core';
import {TextNode} from '../../../models/TextNode';
import {NodeContent} from '../../../models/NodeContent';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() content: NodeContent;
  text: string;

  constructor() { }

  ngOnInit(): void {
    const textNode = this.content as TextNode;
    this.text = textNode.content;
  }
}
