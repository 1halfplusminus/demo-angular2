import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class Bulletin{

    constructor(public libelle?: string,public date?: Date,public url?: string)  {}

}