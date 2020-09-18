import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../services/post.service';
import {DateFormatService} from '../../../services/date-format.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.pug',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              public dateFormatService: DateFormatService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.postService.subscribeById(params.id));
  }

  getPost = () => this.postService.getById();
}
