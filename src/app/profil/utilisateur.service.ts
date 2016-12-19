import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Utilisateur} from "./utilisateur.model";

@Injectable()
export class UtilisateurService{

    constructor()  {}

    utilisateur() : Observable<Utilisateur>
    {
        return Observable.of(new Utilisateur('test','Développeur','80808808','MDF55215221'))
    }
}