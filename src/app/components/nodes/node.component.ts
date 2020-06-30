import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../models/Node';
import {NodeType} from '../../models/NodeType';


@Component({
  selector: 'app-node',
  templateUrl: './node.component.html'
})
export class NodeComponent implements OnInit {

  @Input() node: Node;
  public Type = NodeType;

  constructor() { }

  ngOnInit(): void {
  }
}
