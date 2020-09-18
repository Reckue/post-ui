import {Injectable} from '@angular/core';
import {Filters} from '../models/Filters';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() {}

  buildDefaultFilters = () => {
    return this.buildLimitOffsetFilters(10, 0);
  }

  buildLimitOffsetFiltersByCounter = (counter) => {
    const offset = counter * 10;
    const limit = counter + 10;
    return  this.buildLimitOffsetFilters(limit, offset);
  }

  buildLimitOffsetFilters = (limit, offset) => {
    return this.buildFilters(limit, offset, null, null);
  }

  buildFilters = (limit, offset, sort, desc) => {
    return new Filters(limit, offset, sort, desc);
  }
}
