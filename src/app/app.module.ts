import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import 'hammerjs'

import  { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { SharedModule } from './shared/shared.module'
import { AuthentificationModule } from './authentification/authentification.module'
import { PayeLoginProvider } from './core/login.provider'
import { PayeHttpClient } from './core/http-client.module'
@NgModule({
    imports: [
        BrowserModule,
        LayoutModule,
        AuthentificationModule.forRoot(PayeLoginProvider),
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        SharedModule,
        AppRoutingModule
    ],
    providers:[
        PayeHttpClient
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }