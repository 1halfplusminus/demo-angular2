import { Component } from '@angular/core'
import { ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.material.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }