import {NodeType} from './NodeType';
import {NodeContent} from './NodeContent';
import {StatusType} from './StatusType';
import {TextNode} from './TextNode';

export class Node {

  id: string;
  type: NodeType;
  content: NodeContent;
  source: string;
  username: string;
  published: number;
  status: StatusType;

  constructor(id: string = null,
              type: NodeType = NodeType.TEXT,
              content: NodeContent = new TextNode(),
              source: string = null,
              username: string = null,
              published: number = Date.now(),
              status: StatusType = StatusType.ACTIVE) {
    this.id = id;
    this.type = type;
    this.content = content;
    this.source = source;
    this.username = username;
    this.published = published;
    this.status = status;
  }
}
