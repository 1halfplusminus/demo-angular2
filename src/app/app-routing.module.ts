import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'connexion', pathMatch: 'full'},
    {
        path: 'connexion', loadChildren: './authentification/authentification.module#AuthentificationModule'
    },
    {
        path: 'profil',  loadChildren: './utilisateur/utilisateur.module#UtilisateurModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}