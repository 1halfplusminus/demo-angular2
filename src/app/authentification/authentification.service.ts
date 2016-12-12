import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, Subject} from "rxjs";

const loggedIn = 'logged_in'
@Injectable()
export class AuthService{

    private loggedIn = false

    constructor(private router:Router)
    {
        this.loggedIn = localStorage.getItem(loggedIn) != null
    }

    login(creds) : Observable<any>
    {
        if(Math.random() >= 0.5)
        {
            this.loggedIn = true
            return Observable.of("legacy")
        }
        else{
            return Observable.throw(false)
        }

    }
    logout()
    {
        localStorage.removeItem(loggedIn)
        this.loggedIn = false;
    }
    isLoggedIn() : boolean {
        return this.loggedIn
    }
    onLogin() : Observable<any>
    {
        return Observable.of(true)
    }
}