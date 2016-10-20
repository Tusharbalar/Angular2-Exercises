import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fa-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `,
  styles: []
})

export class TwoWayBindingComponent{
  person = {
    name: "Tushar",
    age: 23
  };
}