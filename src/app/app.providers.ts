import {ErrorHandler} from "@angular/core"

import {PayeHttpClient} from "./core/http-client.module"
//Auth
import {ResetMotPasseService} from "./authentification/mot-passe-oublie/mot-passe-oublie.service"
import {AuthService} from "./authentification/authentification.service"
import {HttpAuthService} from "./core/http-authentification.service"
import {HttpResetMotPasseService} from "./core/http-reset-mot-passe.service"

//Utilisateur
import {UtilisateurService} from "./profil/utilisateur.service"
import {HttpUtilisateurService} from "./core/http-utilisateur.service"

//Bulletin
import {BulletinService} from "./bulletin/bulletin.service"
import {HttpBulletinService} from "./core/http-bulletin.service"

import {AppErrorHandler} from "./core/AppErrorHandler"




export const test =[
    AuthService,
    UtilisateurService,
    ResetMotPasseService,
    BulletinService
]

export const production = [
    PayeHttpClient,
    {
        provide:AuthService,useClass: HttpAuthService
    },
    {
        provide:UtilisateurService,useClass: HttpUtilisateurService
    },
    {
        provide:ResetMotPasseService,useClass: HttpResetMotPasseService
    },
    {
        provide:BulletinService,useClass: HttpBulletinService
    },
    {provide: ErrorHandler, useClass: AppErrorHandler}
]