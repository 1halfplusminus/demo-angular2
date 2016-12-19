import {NgModule, ModuleWithProviders} from '@angular/core'

import { AuthentificationRoutingModule } from './authentification-routing.module'
import { ConnexionComponent } from './connexion/connexion.component'
import { MotPasseOublieComponent } from './mot-passe-oublie/mot-passe-oublie-component'
import { CenterLayoutComponent } from './shared/center-layout.component'
import { ResetMotPasseComponent } from './mot-passe-oublie/reset-mot-passe.component'
import { ConnexionFormComponent }          from './form/connexion-form.component'
import { DemandeMotPasseFormComponent }  from './form/demande-mot-passe-form.component'
import { ResetMotPasseFormComponent } from './form/reset-mot-passe-form.component'
import { AuthService }            from './authentification.service'
import { ResetMotPasseService }   from './mot-passe-oublie/mot-passe-oublie.service'

import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [
        AuthentificationRoutingModule,
        SharedModule
    ],
    declarations:[
        ConnexionComponent,
        CenterLayoutComponent,
        MotPasseOublieComponent,
        ResetMotPasseComponent,
        ConnexionFormComponent,
        DemandeMotPasseFormComponent,
        ResetMotPasseFormComponent,

    ]
})

export class AuthentificationModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthentificationModule,
            providers: [
                AuthService,
                ResetMotPasseService
            ]
        };
    }
}