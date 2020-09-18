export class Field {
  message: string;
  iconUrl: string;
  color: string;
  onClick: (...params) => any;

  constructor(value: string, iconUrl: string, color: string, onClick: (...params) => any) {
    this.message = value;
    this.iconUrl = iconUrl;
    this.color = color;
    this.onClick = onClick;
  }
}
