import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


@Component({
    selector:'demande-mot-passe-form',
    templateUrl: 'demande-mot-passe-form.component.html',
    styleUrls: ['demande-mot-passe-form.component.scss'],
})

export class DemandeMotPasseFormComponent implements OnInit {
    model = {email:''}
    form: FormGroup
    formErrors : {email}
    formValidations: {email}

    constructor(private fb: FormBuilder){

    }
    ngOnInit(){
        this.formErrors = Object.assign({},this.model)
        this.formValidations = Object.assign({},this.model,{})
        this.form = this.fb.group({
            email:[this.model.email,Validators.required]
        })
    }
}