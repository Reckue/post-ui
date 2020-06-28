import {Component, Input, OnInit} from '@angular/core';
import {NodeService} from '../../services/NodeService';
import {Node} from '../../models/Node';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;

  nodes: Node[];

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeService.getAllNodes().then(response => {
      this.nodes = response;
    });
  }
}
