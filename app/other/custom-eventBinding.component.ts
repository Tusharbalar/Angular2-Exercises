import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">custom event check!</button>
  `,
  styles: []
})

export class EventBindingComponent {

  // custom event binding
  @Output() clicked = new EventEmitter<string>();

  onClicked() {
    this.clicked.emit("custom event binding works");
  }
}