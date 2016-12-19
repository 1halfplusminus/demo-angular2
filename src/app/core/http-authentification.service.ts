import { Injectable } from '@angular/core'
import {Observable, Subject} from "rxjs"
import {PayeHttpClient} from "./http-client.module"
import {AuthService} from "../authentification/authentification.service";

@Injectable()
export class HttpAuthService extends AuthService {


    constructor(private http : PayeHttpClient) {
        super()
    }
    login(creds)
    {
        return this.http.identifie(creds.email,creds.motPasse).map((token)=>{
            this.saveToken(token)
            return true
        })

    }
}