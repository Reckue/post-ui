export class Filters {

  public desc: boolean;
  public limit: number;
  public offset: number;
  public sort: string;

  constructor(desc: boolean = false,
              limit: number = 10,
              offset: number = 0,
              sort: string = 'id') {
      this.desc = desc;
      this.limit = limit;
      this.offset = offset;
      this.sort = sort;
  }
}
