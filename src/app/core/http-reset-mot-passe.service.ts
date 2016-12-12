import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { PayeHttpClient }from './http-client.module'

@Injectable()
export class HttpResetMotPasseService{

    constructor(private http: PayeHttpClient) {}

    demanderMotPasse(email: string) : Observable <any>{
        return this.http.demandeMotPasse(email).catch(this.handleHttpError);
    }
    resetMotPasse(token:string,nouveauMotPasse:string,confirmationMotPasse:string)  : Observable <any>
    {
        console.log(nouveauMotPasse,confirmationMotPasse)
        return this.http.modifieMotPasse(nouveauMotPasse,confirmationMotPasse,token).catch(this.handleHttpError)
    }
    private handleHttpError(err)
    {
        return Observable.throw(err.status)
    }
}