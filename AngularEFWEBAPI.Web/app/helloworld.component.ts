import { Component } from '@angular/core';


@Component({
    selector: 'hello',
    template: '<strong>{{getMessage()}}</strong><h1>hola mundo</h1>'
})
export class HelloWorldComponent {
    getMessage(): string {
        return "Hello World...this is my message";
    }
}