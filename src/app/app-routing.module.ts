import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }            from './core/guard.provider'
import {ProfilComponent} from "./profil/profil.component";

export const routes: Routes = [
    { path: '',canActivate:[AuthGuard],component:ProfilComponent},
    {
        path: 'connexion', loadChildren: './authentification/authentification.module#AuthentificationModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}