import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Post} from '../models/post';
import {TextNode} from '../models/TextNode';
import {Node} from '../models/node';
import {NodeType} from '../models/NodeTypes';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.pug',
  styleUrls: ['./rich-text-editor.component.sass']
})
export class RichTextEditorComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;
  public post: Post = new Post();

  constructor(private elemref: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
  }

  addNode = (event) => {
    const dataTitle = event.target.children;
    this.post.title = dataTitle[0].innerText;
    const data = event.target.getElementsByTagName('p');
    console.log(data);
    const p = data.hasFocus();
    console.log(p);
    const node = new Node(null, NodeType.TEXT , p);
    console.log(node);
    this.post.nodes.push(node);
    const innerText = new TextNode();
    }

  preview(event) {
    const editorContent = this.elemref.nativeElement.querySelector('.input-editor');
    if (event.target.files.length === 0) {
      return;
    }

    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

}
