import { Component, OnInit } from '@angular/core';
import {Action} from '../../redux/models/Action';
import {ActionTypes} from '../../redux/models/ActionTypes';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private wrapper: HTMLElement;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new Action(ActionTypes.SHOW_HEADER));
    this.wrapper = window.document.getElementById('posts-page-wrapper');
    this.adaptation();
    window.addEventListener('resize', () => {
      this.adaptation();
    });
  }

  adaptation() {
    if (document.body.clientWidth < 580) {
      this.wrapper.style.width = '100%';
    } else {
      this.wrapper.style.width = '50vw';
    }
  }
}
