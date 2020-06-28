import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {Node} from '../../../models/Node';
import {NodeType} from '../../../models/NodeType';
import {TextNode} from '../../../models/TextNode';
import {NodeService} from '../../../services/NodeService';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public nodes: Node[] = [
    new Node('1',
      NodeType.TEXT,
      new TextNode('Quarkus is the latest addition to the Java world. ' +
        'This open-source framework initiated by Redhat has been talked about ' +
        'for some time. it improves start-up times, execution costs, increases' +
        ' productivity. This is why Quarkus was already considered by some to ' +
        'be the future of Java.')),
    new Node('2',
      NodeType.TEXT,
      new TextNode('It was designed to allow the development of so-called' +
        ' cloud-native Java applications, or “Kubernetes native” to use their ' +
        'terms. The main objective then is to reduce the start-up time of applications ' +
        'and their memory footprint.')),
    new Node('3',
      NodeType.TEXT,
      new TextNode('Beyond these performance objectives, the framework displays a ' +
        'strong desire to simplify the life of developers by offering them a unified configuration ' +
        'and the return of live reload.'))
  ];

  public posts: Post[] = [
    new Post('1', 'Is Quarkus the future of Java?', this.nodes),
    new Post('2', 'Dual Boot is Dead: Windows and Linux are now One', [this.nodes[1]]),
    new Post('3', 'Build an RPM using Maven and Spring Boot', [this.nodes[2]]),
    new Post('4', 'A Guide on Good Backend Coding Practices'),
    new Post('5', 'Exception Handling in Java'),
    new Post('6', 'Apache Kafka Producer/Consumer Spring Boot Implementation'),
    new Post('7', 'String, StringBuilder, and StringBuffer Do You Know the Difference?'),
    new Post('8', 'Load Balancing with Ribbon in Spring Boot'),
    new Post('9', 'New post')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
