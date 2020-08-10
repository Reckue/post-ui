// tslint:disable-next-line:no-empty-interface
import {NodeType} from "./NodeType";

export class NodeContent {

  type: NodeType;

  constructor(type: NodeType = NodeType.TEXT) {
    this.type = type;
  }
}
