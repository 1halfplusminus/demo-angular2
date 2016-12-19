import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {Bulletin} from "./bulletin.model";

import "moment"
import moment = require("moment");

@Injectable()
export class BulletinService{

    constructor()  {}

    bulletins() : Observable<[Bulletin]>
    {
        let bulletins : Array<Bulletin> = [];
        for(let month : number = 12; month > 0; month--)
        {
            bulletins.push(new Bulletin("Bulletin de " + moment(`01/${month}/2016`, 'DD/MM/YYYY').format("MMMM YYYY"),
                new Date(2016,month-1,1),
                "http://www.cogilog.com/Logiciel/exemple-bulletin-paie/employe-1.pdf"))
        }
        return Observable.of(bulletins)
    }
}