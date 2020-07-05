import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../models/Node';
import {NodeType} from '../../models/NodeType';

@Component({
  selector: 'app-node',
  styleUrls: ['./node.component.css'],
  templateUrl: './node.component.html'
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
