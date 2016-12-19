import {Component, OnDestroy} from '@angular/core'
import { ViewEncapsulation } from '@angular/core'
import {AuthService} from "./authentification/authentification.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.material.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {

    private loginSubscription : Subscription
    private logoutSubscription : Subscription

    constructor(private authService:AuthService,private router: Router)
    {
        this.loginSubscription = authService.onLogin().subscribe(()=>{
            this.redirectToDashboard()
        })
        this.logoutSubscription = authService.onLogout().subscribe(()=>{
            this.redirectToLogin()
        })
    }
    ngOnDestroy()
    {
        this.loginSubscription.unsubscribe()
    }
    redirectToDashboard()
    {
        this.router.navigate(['/'])
    }
    redirectToLogin()
    {
        this.router.navigate(['/connexion'])
    }
}