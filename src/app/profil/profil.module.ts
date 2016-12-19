import {NgModule, ModuleWithProviders} from '@angular/core'
import { SharedModule } from '../shared/shared.module'

import { UtilisateurRoutingModule } from './profil-routing.module'
import { ProfilComponent } from './profil.component'
import { TimelineComponent } from './core/timeline.component'
import { ProfilBarComponent } from './core/profil-bar.component'
import { UtilisateurService }  from './utilisateur.service'
@NgModule({
    imports: [
        SharedModule,
        UtilisateurRoutingModule
    ],
    declarations:[
        ProfilComponent,
        TimelineComponent,
        ProfilBarComponent
    ]
})

export class ProfilModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ProfilModule,
            providers: [
                UtilisateurService
            ]
        };
    }
}