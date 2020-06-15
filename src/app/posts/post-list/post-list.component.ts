import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/Post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[] = [
    new Post("1", "Is Quarkus the future of Java?"),
    new Post("2", "Dual Boot is Dead: Windows and Linux are now One"),
    new Post("3", "Build an RPM using Maven and Spring Boot"),
    new Post("4", "A Guide on Good Backend Coding Practices"),
    new Post("5", "Exception Handling in Java"),
    new Post("6", "Apache Kafka Producer/Consumer Spring Boot Implementation"),
    new Post("7", "String, StringBuilder, and StringBuffer Do You Know the Difference?"),
    new Post("8", "Load Balancing with Ribbon in Spring Boot")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
