import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/Post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[] = [
    new Post("1", "Is Quarkus the future of Java?", "Daria Smirnova"),
    new Post("2", "Dual Boot is Dead: Windows and Linux are now One", "Danil Schuchkin"),
    new Post("3", "Build an RPM using Maven and Spring Boot", "Vladislav Lapshin"),
    new Post("4", "A Guide on Good Backend Coding Practices", "Alexander Tamazyan"),
    new Post("5", "Exception Handling in Java", "Yaroslav Cherepanov"),
    new Post("6", "Apache Kafka Producer/Consumer Spring Boot Implementation", "Kamila Meshcheryakova"),
    new Post("7", "String, StringBuilder, and StringBuffer Do You Know the Difference?", "Artyom Ivanyutin"),
    new Post("8", "Load Balancing with Ribbon in Spring Boot", "Mikhail Sergeev")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
