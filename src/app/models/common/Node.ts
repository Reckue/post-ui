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
  createdDate: number;
  modificationDate: number;
  status: StatusType;
  postId: string;

  constructor(id: string = null,
              type: NodeType = NodeType.TEXT,
              content: NodeContent = new TextNode(),
              source: string = null,
              userId: string = null,
              createdDate: number = Date.now(),
              modificationDate: number = Date.now(),
              status: StatusType = StatusType.ACTIVE,
              postId: string = null) {
    this.id = id;
    this.type = type;
    this.node = content;
    this.source = source;
    this.userId = userId;
    this.createdDate = createdDate;
    this.modificationDate = modificationDate;
    this.status = status;
    this.postId = postId;
  }
}
