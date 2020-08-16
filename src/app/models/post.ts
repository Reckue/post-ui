export class Post {
  id: string
  title: string
  nodes: Array<Node>
  createdDate: number
  modificationDate: number
  status: string;
  tags: Array<string>
  userId: string
}
