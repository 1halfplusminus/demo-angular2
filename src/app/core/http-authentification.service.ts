import { Injectable } from '@angular/core'
import {Observable, Subject} from "rxjs"
import {PayeHttpClient} from "./http-client.module"

const loggedIn = 'logged_in'
@Injectable()
export class HttpAuthService{

    private loggedIn = false
    private loginSource = new Subject<any>();

    private loginAnnonced$ = this.loginSource.asObservable()

    constructor(private http : PayeHttpClient) {}

    login(creds)
    {
        return this.http.identifie(creds.email,creds.motPasse).catch((err)=>{
            return Observable.throw(err.status);
        }).map((res)=>{
            this.loggedIn = true
            this.loginSource.next(true)
            return true
        })

    }
    logout()
    {
        this.loggedIn = false
    }
    isLoggedIn(){
        return this.loggedIn
    }
    onLogin() : Observable<any>
    {
        return  this.loginAnnonced$
    }
}