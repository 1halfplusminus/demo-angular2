import {Component, OnInit, Attribute, Output, EventEmitter, Input} from '@angular/core'
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
    @Input() token: string
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
        let {valid,resetMotPasseService,formErrors,form,model,onReset,token} = this
        this.formErrors.problemeConnexion = null
        if(!valid)
        {
            model = form.value
            resetMotPasseService.resetMotPasse(token,model.motPasseConfirmation,model.motPasse).subscribe(()=>{
                valid= true
                form.reset()
                onReset.emit(true)
            },(err)=>{
                if(err == 401)
                {
                    formErrors.problemeConnexion = 'Token invalide.'
                }else{
                    formErrors.problemeConnexion = 'Impossible de se connecter au serveur'
                }

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