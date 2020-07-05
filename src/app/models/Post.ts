import {Tag} from './Tag';
import {Node} from './Node';
import {StatusType} from './StatusType';

export class Post {

  id: string;
  title: string;
  nodes: Node[];
  source: string;
  userId: string;
  tags: Tag[];
  published: number;
  changed: number;
  status: StatusType;

  constructor(id: string = null,
              title: string = '',
              nodes: Node[] = [],
              source: string = null,
              userId: string = null,
              tags: Tag[] = [],
              published: number = Date.now(),
              changed: number = Date.now(),
              status: StatusType = StatusType.ACTIVE) {
    this.id = id;
    this.title = title;
    this.nodes = nodes;
    this.source = source;
    this.userId = userId;
    this.tags = tags;
    this.published = published;
    this.changed = changed;
    this.status = status;
  }
}
