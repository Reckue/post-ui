import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post = {
    id: 'FGU438jdfk48932fdsg23',
    title: 'This is default title for post.',
    description: 'Continuous delivery results out of the agile movement. Iterative feedback is at its core. Learning from hands-on experiences and incorporating that feedback is essential.'
  };

  author = {
    username: 'Hardelele'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
