import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular App</h1>
        <fa-other></fa-other>
        <fa-another>
            <div>
                <h2>Hello</h2>
                <h2>Tushar!!!</h2>
            </div>
        </fa-another>
    `,
    styles: [`
        h1 {
            color: red
        }
    `]
})
export class AppComponent { }
