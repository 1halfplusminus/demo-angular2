import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core'
import {MdSnackBar, MdSnackBarRef} from "@angular/material";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector:'app-auth-page-reset',
    templateUrl: 'reset-mot-passe.component.html',
    styleUrls: ['reset-mot-passe.component.scss'],
    providers: [MdSnackBar],
    encapsulation: ViewEncapsulation.None
})
export class ResetMotPasseComponent implements OnInit,OnDestroy {

    private subscription : Subscription
    private token: string
    constructor(private snackBar: MdSnackBar,private activatedRoute: ActivatedRoute,private router: Router) {}
    ngOnInit()
    {
        this.subscription =  this.activatedRoute.queryParams.subscribe((param:any)=>{
            this.token = param['token']
        })
    }
    ngOnDestroy()
    {
        this.subscription.unsubscribe()
    }
    onReset()
    {
        const {snackBar} = this
        const snackBarRef : MdSnackBarRef<any> = snackBar.open('Votre demande a bien été prise a compte vous allez être redirigé dans quelques secondes','')
        setTimeout(()=> {
            snackBarRef.dismiss()
            this.router.navigate(['/'])
        },5000)
    }
}