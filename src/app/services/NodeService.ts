import {Injectable} from '@angular/core';
import {Node} from '../models/Node';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class NodeService {

  constructor() { }

  async getAllNodes() {
    const response = await axios.get('http://post-reckue.apps.us-east-1.starter.openshift-online.com/nodes');
    return response.data;
  }
}
