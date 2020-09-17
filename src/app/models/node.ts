import {TextNode} from './TextNode';
import {NodeType} from "./NodeTypes";

export class Node {
  id: string;
  type: NodeType;
  node: TextNode;
  postId: string;
  status: string;
  createdDate: number;
  modificationDate: number;
  userId: string;

  constructor(id: string = null,
              type: NodeType = NodeType.TEXT,
              content: TextNode = new TextNode(),
              postId: string = '',
              status: string = '',
              createdDate: number = null,
              modificationDate: number = null,
              userId: string = '') {
    this.id = id;
    this.type = type;
    this.node = content;
    this.postId = postId;
    this.status = status;
    this.createdDate = createdDate;
    this.modificationDate = modificationDate;
    this.userId = userId;
  }

}
