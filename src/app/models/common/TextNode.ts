import {NodeContent} from './NodeContent';
import {NodeType} from "./NodeType";

export class TextNode implements NodeContent {

  content: string;
  type: NodeType;

  constructor(content: string = null,
              type: NodeType = NodeType.TEXT) {
    this.content = content;
    this.type = type;
  }
}
