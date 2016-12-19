import {NgModule, LOCALE_ID} from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import 'hammerjs'

import  { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { SharedModule } from './shared/shared.module'
import { AuthGuard  } from './core/guard.provider'
import {ProfilModule} from "./profil/profil.module"

import {production,test } from './app.providers'

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        ProfilModule
    ],
    providers:[
        { provide: LOCALE_ID, useValue: "fr-FR" },
        AuthGuard,
        production
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }