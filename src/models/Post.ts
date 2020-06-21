export class Post {
  id: string;
  title: string;
  username: string;

  constructor(id: string, title: string, username: string) {
    this.id = id;
    this.title = title;
    this.username = username;
  }
}
