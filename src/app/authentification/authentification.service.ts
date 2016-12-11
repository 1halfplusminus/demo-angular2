import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {LoginProvider} from "./core/login.provider";

@Injectable()
export class AuthService{

    private loggedIn = false

    constructor(private router:Router,private loginProvider:LoginProvider)
    {
        this.loggedIn= !!localStorage.getItem('auth_token')
    }

    login(creds) : Observable<any>
    {
        return this.loginProvider.login(creds);
    }

    logout()
    {
        localStorage.removeItem('auth_token')
        this.loggedIn = false;
    }

    isLoggedIn(){
        return this.loggedIn
    }
}