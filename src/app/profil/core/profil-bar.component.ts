import {Component, ViewEncapsulation, Input} from '@angular/core'
import {Utilisateur} from "../utilisateur.model";

@Component({
    selector: 'profil-bar',
    templateUrl: 'profil-bar.component.html',
    styleUrls: ['profil-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfilBarComponent {
    @Input() utilisateur: Utilisateur;

    constructor() {}

}