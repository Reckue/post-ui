export class Filters {
  limit: number;
  offset: number;
  sort: string;
  desc: string;

  constructor(limit: number, offset: number, sort: string, desc: string) {
    this.limit = limit;
    this.offset = offset;
    this.sort = sort;
    this.desc = desc;
  }
}
