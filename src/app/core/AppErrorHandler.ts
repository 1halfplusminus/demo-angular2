import {ErrorHandler, Injectable} from "@angular/core";
import {AuthService} from "../authentification/authentification.service";
/**
 * Created by dartuchiwa on 17/12/16.
 */
@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private authService: AuthService){}

    handleError(error) {
        if(error == 401)
        {
            this.authService.logout()
        }
        else{
            console.error(error.longStack)
        }
    }
}