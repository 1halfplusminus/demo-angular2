import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ResetMotPasseService} from "../reset-mot-passe.service";


@Component({
    selector:'demande-mot-passe-form',
    templateUrl: 'demande-mot-passe-form.component.html',
    styleUrls: ['demande-mot-passe-form.component.scss'],
})

export class DemandeMotPasseFormComponent implements OnInit {
    model = {email:''}
    form: FormGroup
    formErrors : {email,problemeConnexion?}
    formValidations: {email}
    valid: boolean = false
    @Output() onDemande = new EventEmitter<boolean>();

    constructor(private fb: FormBuilder,private resetMotPasseService: ResetMotPasseService){

    }
    ngOnInit(){
        this.formErrors = Object.assign({},this.model)
        this.formValidations = Object.assign({},this.model,{})
        this.form = this.fb.group({
            email:[this.model.email,Validators.required]
        })
    }
    onSubmit(){
        this.formErrors.problemeConnexion = null
        if(!this.valid)
        {
            this.resetMotPasseService.demanderMotPasse(this.model.email).subscribe(()=>{
                this.onDemande.emit(true)
                this.valid = true
            },()=>{
                console.log('here')
                this.formErrors.problemeConnexion = 'Impossible de se connecter au serveur'
            })
        }
    }
}