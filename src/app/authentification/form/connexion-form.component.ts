import {Component, OnInit, Input} from '@angular/core'
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms"
import {AuthService} from "../authentification.service"

@Component({
    selector:'connexion-form',
    templateUrl: 'connexion-form.component.html',
    styleUrls: ['connexion-form.scss'],
})
export class ConnexionFormComponent implements OnInit {
    model = {email:'',motPasse:''}
    form: FormGroup
    formErrors : {email,motPasse,invalidCreds?}
    formValidations: {email,motPasse}
    isLoading: boolean

    constructor(private fb: FormBuilder,private authService: AuthService){

    }
    ngOnInit(): void{
        this.formErrors =  Object.assign({},this.model)
        this.formValidations = Object.assign({},this.model)
        this.form = this.fb.group(
            {
                'email': [this.model.email, Validators.required],
                'motPasse': [this.model.motPasse]
            })
        this.form.valueChanges.subscribe(()=>{
            console.log('here')
            this.formErrors.invalidCreds = null
        })
    }
    onSubmit()
    {
        this.isLoading = true
        setTimeout(()=>{
            return this.authService.login(this.model).subscribe((res)=>{
                this.isLoading = false
            },(err)=>{
                this.isLoading = false
                switch (err)
                {
                    case 400:
                        this.formErrors.invalidCreds = 'Nom d’utilisateur ou mot de passe invalide.'
                        break;
                    default:
                        this.formErrors.invalidCreds = 'Impossible de se connecter au serveur'
                        break
                }
            })
        },600)

    }
}