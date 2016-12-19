import {Component, ViewEncapsulation} from '@angular/core'
import {AuthService} from "../../authentification/authentification.service";

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TopbarComponent {


    constructor(private authService : AuthService){}

    onLogout()
    {
        this.authService.logout()
    }
}