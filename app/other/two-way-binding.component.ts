import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fa-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">

    <h2>Template Access with Local References, ViewChild and ContentChild</h2>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})

export class TwoWayBindingComponent{
  person = {
    name: "Tushar",
    age: 23
  };

  @Input() bindable = 1000;
}