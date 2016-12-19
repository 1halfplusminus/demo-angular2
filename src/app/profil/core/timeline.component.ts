import {Component, ViewEncapsulation } from '@angular/core'
import {BulletinService} from "../../bulletin/bulletin.service";
import {Bulletin} from "../../bulletin/bulletin.model";

@Component({
    selector: 'profil-timeline',
    templateUrl: 'timeline.component.html',
    styleUrls: ['timeline.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TimelineComponent  {

    bulletins: [Bulletin]

    constructor(private bulletinService: BulletinService) {

        this.bulletinService.bulletins().subscribe((bulletins:[Bulletin])=>{
            this.bulletins = bulletins
        })

    }

    openBulletin(url:string)
    {
        window.open(url,'_blank')
    }

}