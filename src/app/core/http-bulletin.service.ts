import { Injectable } from '@angular/core'
import {PayeHttpClient} from "./http-client.module";
import {Observable} from "rxjs";
import {Bulletin} from "../bulletin/bulletin.model";
import {AuthService} from "../authentification/authentification.service";
import moment = require("moment");

@Injectable()
export class HttpBulletinService {


    constructor(private http : PayeHttpClient,private authService: AuthService) {

    }
    bulletins() : Observable<Array<Bulletin>>
    {
        return this.http.bulletins(this.authService.token).map((json)=>{
            let bulletins : Array<Bulletin> = []
            json.forEach((item)=>{
                console.log(moment(item.dateDebut))
                let bulletin = new Bulletin(item.libelle,moment(item.dateDebut,"DD-MM-YYYY").toDate(),this.http.urlBulletin(item.id,this.authService.token))
                bulletins.push(bulletin)
            })
            console.log(bulletins)
            return bulletins
        })
    }
}