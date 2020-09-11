import {Component, OnInit} from '@angular/core';
import {ModalAction} from '../../../models/ModalAction';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.pug',
  styleUrls: ['./popup-modal.component.sass']
})
export class PopupModalComponent implements OnInit {

  protected isVisible = false;
  protected title = 'Default title';
  protected message = 'This is default message!';
  protected actions: ModalAction[];

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

  protected onClickBackground = (event) =>  event.target.valueOf().className === 'popup-window' ? this.close() : undefined;

  close = () => {
    this.isVisible = false;
    document.querySelector('body').style.overflow = 'visible';
  }

  display = () => {
    this.isVisible = true;
    document.querySelector('body').style.overflow = 'hidden';
  }

  private setTitle = (title: string) => this.title = title;

  private setMessage = (title: string) => this.title = title;

  private setActions = (title: string) => this.title = title;
}
