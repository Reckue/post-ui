import {NodeType} from './NodeType';
import {NodeContent} from './NodeContent';
import {StatusType} from './StatusType';

export class Node {

  id: string;
  type: NodeType;
  content: NodeContent;
  source: string;
  username: string;
  published: number;
  status: StatusType;
}
