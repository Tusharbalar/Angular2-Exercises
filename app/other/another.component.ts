import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
    article {
      border: 1px solid black
    }
  `]
})

export class AnotherComponent implements OnInit, AfterContentInit {

  constructor() {}

  ngOnInit() {

  }

  @ContentChild('boundContent')
  boundContent: HTMLElement

  ngAfterContentInit() {
    console.log("ContentChild", this.boundContent)
  }

}