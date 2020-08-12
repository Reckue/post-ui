import {Tag} from './Tag';
import {Node} from './Node';
import {PostStatusType} from "./PostStatusType";

export class Post {

  id: string;
  title: string;
  nodes: Node[];
  source: string;
  userId: string;
  tags: Tag[];
  createdDate: number;
  modificationDate: number;
  status: PostStatusType;

  constructor(id: string = null,
              title: string = '',
              nodes: Node[] = [],
              source: string = null,
              userId: string = null,
              tags: Tag[] = [],
              createdDate: number = Date.now(),
              modificationDate: number = Date.now(),
              status: PostStatusType = PostStatusType.DRAFT) {
    this.title = title;
    this.nodes = nodes;
    this.source = source;
    this.userId = userId;
    this.tags = tags;
    this.createdDate = createdDate;
    this.modificationDate = modificationDate;
    this.status = status;
  }
}
