import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {FormBuilder, FormGroup,Validators} from "@angular/forms"
import {AuthService} from "../authentification.service"

@Component({
    selector:'connexion-form',
    templateUrl: 'connexion-form.component.html',
    styleUrls: ['connexion-form.component.scss'],
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
            this.formErrors.invalidCreds = null
        })
    }
    onSubmit()
    {
        let {form,authService,formErrors,model} = this
        if(form.valid)
        {
            model = form.value
            this.isLoading = true
            setTimeout(()=>{
                return authService.login(model).subscribe(()=>{
                },(err)=>{
                    this.isLoading = false
                    switch (err)
                    {
                        case 400:
                            formErrors.invalidCreds = 'Nom d’utilisateur ou mot de passe invalide.'
                            break;
                        default:
                            formErrors.invalidCreds = 'Impossible de se connecter au serveur'
                            break
                    }
                })
            },600)
        }


    }
}