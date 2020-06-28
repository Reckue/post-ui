import {NodeContent} from './NodeContent';
import {LangType} from './LangType';

export class CodeNode implements NodeContent {

  content: string;
  language: LangType;

  constructor(content: string = null,
              language: LangType = LangType.NONE) {
    this.content = content;
    this.language = language;
  }

}
