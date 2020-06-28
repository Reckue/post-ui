import {NodeContent} from './NodeContent';

export class TextNode implements NodeContent {

  content: string;

  constructor(content: string = null) {
    this.content = content;
  }

}
