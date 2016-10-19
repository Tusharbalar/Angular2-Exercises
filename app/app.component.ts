import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular App</h1>
        <fa-other></fa-other>
        <fa-another></fa-another>
    `,
    styles: [`
        h1 {
            color: red
        }
    `]
})
export class AppComponent { }
