import {Component, Input, OnInit} from '@angular/core';
import {TextNode} from '../../../models/TextNode';
import {NodeContent} from '../../../models/NodeContent';
import {Node} from '../../../models/Node';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() node: Node;
  @Input() content: NodeContent;
  @Input() isInput: boolean;
  @Input() onChange: (event: any, node: Node) => void;
  @Input() onDelete: (node: Node) => void;
  text: string;

  constructor() { }

  ngOnInit(): void {
    const textNode = this.content as TextNode;
    this.text = textNode.content;
  }
}
