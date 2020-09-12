import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ModalAction} from '../../../models/ModalAction';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.pug',
  styleUrls: ['./popup-modal.component.sass']
})
export class PopupModalComponent implements OnInit {
  isVisible = false;
  title = 'Default title';
  message = 'This is default message!';
  actions: ModalAction[];

  @ViewChild('background') background;

  constructor() {}

  private initDefaultAction = () => {
    this.actions = [];
    const ok = new ModalAction();
    ok.message = 'OK';
    ok.func = this.close;
    this.actions.push(ok);
  }

  ngOnInit(): void {
    this.initDefaultAction();
  }

  onClickBackground = (event) =>  event.target.valueOf().className === 'popup-window' ? this.close() : undefined;

  close = () => {
    this.isVisible = false;
    document.querySelector('body').style.overflow = 'visible';
  }

  display = () => {
    this.isVisible = true;
    document.querySelector('body').style.overflow = 'hidden';
  }

  public setTitle = (title: string) => this.title = title;

  public setMessage = (title: string) => this.title = title;

  public setActions = (title: string) => this.title = title;
}
