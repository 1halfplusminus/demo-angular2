import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthentificationModule} from "./authentification/authentification.module";

export const routes: Routes = [
    {   path: '',component:AuthentificationModule }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}