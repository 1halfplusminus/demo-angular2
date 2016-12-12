import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { PayeHttpClient }from './http-client.module'

const token_key = 'bfc_token'

@Injectable()
export class TokenProvider{

    token : string = ''

    constructor() {
        this.token = localStorage.getItem(token_key)
    }

    public save(token:string)
    {
        localStorage.setItem(token_key,token)
    }
    public get() : string
    {
        return this.token
    }
    public hasToken() : boolean
    {
        return this.token != ''
    }
}