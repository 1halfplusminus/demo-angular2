import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'connexion', pathMatch: 'full'},
    {   path: 'connexion',
        loadChildren: './app.module.ts#AuthentificationModule?sync=true'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}