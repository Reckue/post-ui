import {NodeType} from './NodeType';
import {NodeContent} from './NodeContent';
import {StatusType} from './StatusType';
import {TextNode} from './TextNode';

export class Node {

  id: string;
  type: NodeType;
  node: NodeContent;
  source: string;
  userId: string;
  published: number;
  status: StatusType;
  postId: string;

  constructor(id: string = null,
              type: NodeType = NodeType.TEXT,
              content: NodeContent = new TextNode(),
              source: string = null,
              userId: string = null,
              published: number = Date.now(),
              status: StatusType = StatusType.ACTIVE,
              postId: string = null) {
    this.id = id;
    this.type = type;
    this.node = content;
    this.source = source;
    this.userId = userId;
    this.published = published;
    this.status = status;
    this.postId = postId;
  }
}
