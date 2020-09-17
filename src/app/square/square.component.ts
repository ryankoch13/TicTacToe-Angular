import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton hero shape="semi-round" *ngIf="!value">{{ value }}</button>
    <button nbButton hero shape="round" status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero shape="round" status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O'
  constructor() { }
}
