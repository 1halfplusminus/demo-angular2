import {Component, OnInit, Attribute, Output, EventEmitter} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResetMotPasseService} from "../reset-mot-passe.service";


@Component({
    selector:'reset-mot-passe-form',
    templateUrl: 'reset-mot-passe-form.component.html',
    styleUrls: ['reset-mot-passe-form.component.scss'],
})
export class ResetMotPasseFormComponent implements OnInit {
    model = {email:'',motPasse:'',motPasseConfirmation:''}
    formErrors : {email?,motPasse?,motPasseConfirmation?,mismatchedPasswords?,problemeConnexion?}
    formValidations: {email?,motPasse?,motPasseConfirmation?,mismatchedPasswords}
    valid: boolean = false
    form : FormGroup
    @Output() onReset: EventEmitter<any> = new EventEmitter()

    constructor(private fb:FormBuilder,private resetMotPasseService: ResetMotPasseService){}
    ngOnInit(){
        this.formErrors =  Object.assign({},this.model)
        this.formValidations = {
            mismatchedPasswords:'Les mots de passe saisis ne sont pas identiques.'
        }
        this.form = this.fb.group(
            {
                email:[this.model.email,Validators.required],
                motPasse: [this.model.motPasse, Validators.required],
                motPasseConfirmation: [this.model.motPasseConfirmation, Validators.required]
            },{validator: this.matchingPasswords('motPasse', 'motPasseConfirmation')})
    }
    onSubmit(){
        let {valid,resetMotPasseService,formErrors,form,model,onReset} = this
        formErrors.problemeConnexion = null
        if(!valid)
        {
            resetMotPasseService.resetMotPasse(model.email,model.motPasse).subscribe(()=>{
                valid= true
                form.reset()
                onReset.emit(true)
            },()=>{
                formErrors.problemeConnexion = 'Impossible de se connecter au serveur'
            })
        }
    }
    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }
}