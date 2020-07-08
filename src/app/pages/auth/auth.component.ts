import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/AuthService';
import {AuthForm} from '../../models/AuthForm';
import {Tokens} from '../../models/Tokens';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public tokens: Tokens = new Tokens();

  public authForm: AuthForm = new AuthForm();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService
      .login(new AuthForm('hale@yahoo.com', '123123', 'elele'))
      .then(tokens => this.tokens = tokens)
      .catch();
  }

}
