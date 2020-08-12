import {Injectable} from '@angular/core';
import axios from 'axios';
import {environment} from '../../../environments/environment';

const NODES_URL = environment.postApi + '/nodes';

@Injectable({
  providedIn: 'root',
})
export class NodeApiService {

  constructor() {}

  getAllNodes = async () => (await axios.get(NODES_URL)).data;
}
