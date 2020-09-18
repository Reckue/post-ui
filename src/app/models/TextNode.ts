import {NodeType} from './NodeTypes';

export class TextNode {

  content: string;
  type: NodeType;

  constructor(content: string = '',
              type: NodeType = NodeType.TEXT) {
    this.content = content;
    this.type = type;
  }
}
