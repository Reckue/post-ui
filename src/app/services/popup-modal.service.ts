import {Injectable} from '@angular/core';
import {PopupModalComponent} from '../components/popup/modal/popup-modal.component';

@Injectable({
  providedIn: 'root',
})
export class PopupModalService {

  private modal: PopupModalComponent;

  constructor() {
  }

  setModalComponent = (modal: PopupModalComponent) => this.modal = modal;

  close = () => this.modal.close();

  display = () => this.modal.display();
}
