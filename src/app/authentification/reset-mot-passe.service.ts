import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";

@Injectable()
export class ResetMotPasseService{

    constructor()
    {

    }
    demanderMotPasse(email: string) : Observable <any>{
        if(Math.random() >= 0.5)
        {
            return Observable.of(true)
        }
        else{
            return Observable.throw(false)
        }

    }
    resetMotPasse(nouveauMotPasse: string,confirmationMotPasse : string)
    {
        return Observable.of(Math.random() >= 0.5)
    }
}