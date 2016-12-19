/**
 * Created by dartuchiwa on 12/12/16.
 */
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../authentification/authentification.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService:  AuthService ) {}

    canActivate() {
        if(this.authService.isLoggedIn())
        {
            return true
        }
        this.authService.logout()
        return false;
    }
}