import {Component, Input, OnInit} from '@angular/core';
import {NodeType} from '../../models/NodeTypes';
import {Node} from '../../models/node';
import {TextNode} from "../../models/TextNode";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.pug',
  styleUrls: ['./node.component.sass']
})
export class NodeComponent implements OnInit {

  @Input() node: Node;
  @Input() isInput = false;
  @Input() onChange: (event: any, node: Node) => void;
  @Input() onDelete: (node: Node) => void;
  public Type = NodeType;

  constructor() { }

  ngOnInit(): void {
  }

}
