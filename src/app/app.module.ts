import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import 'hammerjs'

import  { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { HttpAuthService} from './core/http-authentification.service'

//Auth
import { AuthService } from './authentification/authentification.service'
import { PayeHttpClient } from './core/http-client.module'
import { ResetMotPasseService }from './authentification/reset-mot-passe.service'
import { HttpResetMotPasseService } from './core/http-reset-mot-passe.service'
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        SharedModule,
        AppRoutingModule
    ],
    providers:[
        PayeHttpClient,
        {
            provide:AuthService,useClass: HttpAuthService
        },
        {
            provide:ResetMotPasseService,useClass: HttpResetMotPasseService
        }
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }