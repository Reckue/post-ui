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
    description: 'This is default description for post.'
  };

  author = {
    username: 'Hardelele'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
