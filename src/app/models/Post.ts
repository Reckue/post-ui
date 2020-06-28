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

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}
