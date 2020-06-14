import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/Post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[] = [
    new Post("1", "Post 001"),
    new Post("2", "Post 002"),
    new Post("3", "Post 003"),
    new Post("4", "Post 004"),
    new Post("5", "Post 005"),
    new Post("6", "Post 006"),
    new Post("7", "Post 007"),
    new Post("8", "Post 008")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
