import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    {{result}}
    <h2> Event Binding</h2>
    <button (click)="clickMe()">Click me!</button>
  `,
  styles: []
})

export class PropertyBindingComponent {
  // property binding
  @Input() result: number = 0;

  // event binding
  clickMe() {
    alert("It worked.");
  }
}