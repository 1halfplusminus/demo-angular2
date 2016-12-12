import {NgModule, ModuleWithProviders} from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule,FormsModule } from "@angular/forms"
import {CommonModule} from "@angular/common"
import { SharedModule } from '../shared/shared.module'

import { UtilisateurRoutingModule } from './utilisateur-routing.module'
import { ProfilComponent } from './profil.component'
@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        UtilisateurRoutingModule
    ],
    declarations:[
        ProfilComponent
    ]
})

export class UtilisateurModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UtilisateurModule,
            providers: [

            ]
        };
    }
}