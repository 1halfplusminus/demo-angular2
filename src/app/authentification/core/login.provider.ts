import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class LoginProvider{


    login(creds) : Observable<any>
    {
        return Observable.of(true)
    }

}