import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // this.router.navigate(['txt']).then();
  }

  constructor(private router: Router) { }
}
