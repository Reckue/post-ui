export class CodeNode {
   id: string;
   language: string;
   content: string;

  constructor(id: string, language: string, content: string) {
    this.id = id;
    this.language = language;
    this.content = content;
  }
}
