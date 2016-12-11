import { Component } from '@angular/core'
import {MdSnackBar, MdSnackBarRef} from "@angular/material";
import {Router} from "@angular/router";

@Component({
    templateUrl: './reset-mot-passe.component.html',
    styleUrls: ['./reset-mot-passe.component.scss'],
    providers: [MdSnackBar]
})
export class ResetMotPasseComponent  {
    constructor(private snackBar: MdSnackBar,private router:Router) {}
    onReset()
    {
        const {snackBar} = this
        const snackBarRef : MdSnackBarRef<any> = snackBar.open('Votre demande a bien été prise a compte vous allez être redirigé dans quelques secondes','')
        setTimeout(()=> {
            snackBarRef.dismiss()
            this.router.navigate(['/'])
        },2000)
    }
}