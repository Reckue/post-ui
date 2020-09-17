import {Node} from './node';

export class Post {

  id: string;
  title: string;
  nodes: Array<Node>;
  createdDate: number;
  modificationDate: number;
  status: string;
  tags: Array<string>;
  userId: string;

  constructor(id: string = null,
              title: string = '',
              nodes: Array<Node> = [],
              createdDate: number = null,
              modificationDate: number = null,
              status: string = 'DRAFT',
              tags: Array<string> = [],
              userId: string = '1234') {

    this.id = id;
    this.title = title;
    this.nodes = nodes;
    this.createdDate = createdDate;
    this.modificationDate = modificationDate;
    this.status = status;
    this.tags = tags;
    this.userId = userId;
  }
}
