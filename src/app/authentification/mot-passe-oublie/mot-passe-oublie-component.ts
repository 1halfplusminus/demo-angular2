import {Component, ViewEncapsulation} from '@angular/core'
import {Router} from "@angular/router";
import {MdSnackBar,  MdSnackBarRef} from "@angular/material";

@Component({
    selector:'app-auth-page-oublie',
    templateUrl: 'mot-passe-oublie.component.html',
    styleUrls: ['mot-passe-oublie.component.scss'],
    providers: [MdSnackBar],
    encapsulation: ViewEncapsulation.None
})
export class MotPasseOublieComponent  {

    constructor(private router:Router,private snackBar: MdSnackBar) {}

    public onDemande(){
        let snackbar : MdSnackBarRef<any> = this.snackBar.open('Redirection en cours...', '');
        setTimeout(()=>{
            snackbar.dismiss()
            this.router.navigate(['/'])
        },2000)
    }
}