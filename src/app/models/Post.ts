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
              title: string = null,
              nodes: Node[] = [],
              source: string = '',
              userId: string = '',
              tags: Tag[] = [],
              published: number = Date.now(),
              changed: number = Date.now(),
              status: StatusType = StatusType.ACTIVE) {
    this.id = id;
    this.title = title;
  }
}
