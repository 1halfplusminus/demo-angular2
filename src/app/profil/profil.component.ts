import {Component, ViewEncapsulation} from '@angular/core'
import {UtilisateurService} from "./utilisateur.service";
import {Utilisateur} from "./utilisateur.model";

@Component({
    selector: 'app-profil-page',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfilComponent  {

    public utilisateur : Utilisateur = new Utilisateur();

    constructor(private userService : UtilisateurService) {
        this.userService.utilisateur().subscribe((utilisateur)=>{
            this.utilisateur = utilisateur
        })
    }


}