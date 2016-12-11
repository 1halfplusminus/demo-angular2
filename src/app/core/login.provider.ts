import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { PayeHttpClient }from './http-client.module'

@Injectable()
export class PayeLoginProvider{

    constructor(private http: PayeHttpClient) {}
    login(creds) : Observable<any>
    {
        return this.http.identifie(creds.email,creds.motPasse).catch((err)=>{
            console.log(err)
            return Observable.throw(err.status);
        }).map((res)=>{
            if(res.status != 200)
            {
                throw res
            }
            return true
        })
    }

}