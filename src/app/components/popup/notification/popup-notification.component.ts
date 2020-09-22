import {Component, OnInit} from '@angular/core';
import {Field} from '../../../models/Field';

@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.component.pug',
  styleUrls: ['./popup-notification.component.sass']
})
export class PopupNotificationComponent implements OnInit {

  fields: Field[];

  constructor() {}

  ngOnInit(): void {
    this.fields = [];
  }

  closeNotification = () => this.fields.splice(0, 1);

  closeById = (id) => this.fields.splice(id, 1);

  addNotification = (field: Field) => {
    field.onClick = this.closeById;
    this.fields.push(field);
  }
}
