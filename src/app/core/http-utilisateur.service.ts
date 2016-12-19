import { Injectable } from '@angular/core'
import {Observable} from "rxjs"

import {PayeHttpClient} from "./http-client.module"
import {Utilisateur} from "../profil/utilisateur.model";
import {AuthService} from "../authentification/authentification.service";

@Injectable()
export class HttpUtilisateurService {


    constructor(private http : PayeHttpClient,private authService: AuthService) {

    }
    utilisateur() : Observable<Utilisateur>
    {
        return this.http.moi(this.authService.token).map((json)=>{
            return new Utilisateur(json.nom,"","","")
        })
    }
}