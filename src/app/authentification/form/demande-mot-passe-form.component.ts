import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ResetMotPasseService} from "../mot-passe-oublie/mot-passe-oublie.service";


@Component({
    selector:'demande-mot-passe-form',
    templateUrl: 'mot-passe-oublie-form.component.html',
    styleUrls: ['demande-mot-passe-form.component.scss'],
})

export class DemandeMotPasseFormComponent implements OnInit {
    model = {email:''}
    form: FormGroup
    formErrors : {email,problemeConnexion?}
    formValidations: {email}
    submitted: boolean = false
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
        if(!this.submitted && this.form.valid)
        {
            this.resetMotPasseService.demanderMotPasse(this.form.controls['email'].value).subscribe(()=>{
                this.validate()
            },(status)=>{
                if(status != 404)
                {
                    this.formErrors.problemeConnexion = 'Impossible de se connecter au serveur'
                }else{
                    this.validate()
                }

            })
        }
    }
    private validate()
    {
        this.onDemande.emit(true)
        this.submitted = true
    }
}