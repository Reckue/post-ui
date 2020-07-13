export class User {
  id: string;
  username: string;
  email: string;
  status: string;
  created: number;
  updated: number;
  lastVisit: number;


  constructor(id: string = null,
              username: string = null,
              email: string = null,
              status: string = null,
              created: number = null,
              updated: number = null,
              lastVisit: number = null) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.status = status;
    this.created = created;
    this.updated = updated;
    this.lastVisit = lastVisit;
  }
}
