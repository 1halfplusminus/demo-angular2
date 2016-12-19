import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, Subject} from "rxjs";

const loggedIn = 'logged_in'
@Injectable()
export class AuthService{

    public token : string

    protected loggedIn = false

    protected loginSource = new Subject<any>();
    protected logoutSource = new Subject<any>();

    private loginAnnonced$ = this.loginSource.asObservable()
    private logoutAnnonced$ = this.logoutSource.asObservable()

    constructor()
    {
        this.loggedIn = localStorage.getItem(loggedIn) != null
        this.token = localStorage.getItem(loggedIn)
    }

    login(creds) : Observable<any>
    {
        if(Math.random() >= 0.5)
        {
            const token = 'legacy'
            this.saveToken(token)
            return Observable.of(token)
        }
        else{
            return Observable.throw(false)
        }

    }
    logout()
    {
        localStorage.removeItem(loggedIn)
        this.logoutSource .next(true)
        this.loggedIn = false;
    }
    isLoggedIn() : boolean {
        return this.loggedIn
    }
    onLogin() : Observable<any>
    {
        return this.loginAnnonced$
    }
    onLogout() : Observable<any>
    {
        return this.logoutAnnonced$
    }
    protected saveToken(token:string)
    {
        localStorage.removeItem(loggedIn)
        localStorage.setItem(loggedIn,token)
        this.token = token
        this.loggedIn = true
        this.loginSource.next(true)
    }
}