export class Field {
  value: string;
  iconUrl: string;
  color: string;
  onClick: (...params) => any;

  constructor(value: string, iconUrl: string, color: string, onClick: (...params) => any) {
    this.value = value;
    this.iconUrl = iconUrl;
    this.color = color;
    this.onClick = onClick;
  }
}
