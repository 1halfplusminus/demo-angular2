import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent }   from './connexion.component'
import { MotPasseOublieComponent } from './mot-passe-oublie-component'
import { ResetMotPasseComponent } from './reset-mot-passe.component'

export const routes: Routes = [
    { path: '',
        component: ConnexionComponent
    },
    { path: 'mot-passe-oublie',
        component: MotPasseOublieComponent
    },{
      path: 'reset-mot-passe',
        component: ResetMotPasseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthentificationRoutingModule {}