import {
    Directive, Input, ElementRef, OnInit
} from '@angular/core';
import { FormGroup } from "@angular/forms"

@Directive({
    selector: '[form-validity]',
    exportAs: "form-validity"
})
export class FormValidityDirective implements OnInit {

    @Input('formGroup') formGroup: FormGroup
    @Input('validationMessages') validationMessages = {}
    @Input('formErrors') formErrors = {}
    isCustomMessages = {}

    constructor(private el: ElementRef) {

    }

    ngOnInit() {
        this.formGroup.valueChanges.subscribe(data => this._onValueChanged(data))
        for (const property in this.formGroup.controls) {
            if (!this.validationMessages[property]) {
                this.validationMessages[property] = {}
            }
            else{
                this.isCustomMessages[property] = true
            }
            this.formErrors[property] = ''
        }
    }

    private _onValueChanged(data?: any) {
        if (!this.formGroup) {
            return;
        }
        const form = this.formGroup;
        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && (!this._html5Valid(field) || !control.valid )) {
                this.formErrors[field] = '';
                let errors = Object.assign({}, this._html5Validation(field), control.errors)
                const messages = this._validationMessages(field);
                for (const key in errors) {
                    if (messages[key]) {
                        this.formErrors[field] += messages[key] + ' ';
                    }
                }
            }

        }
        for(const field in form.errors)
        {
            this.formErrors[field] = '';
            if (this.validationMessages[field]) {
                this.formErrors[field] += this.validationMessages[field] + ' ';
            }
        }

    }

    private _html5Validation(name: string) {
        let errors = {}
        let input = this._input(name)
        for (let field in input.validity) {
            if (input.validity[field] == true) {
                //hack field name for required
                if(field == 'valueMissing')
                {
                    field = 'required'
                }
                if (!this.isCustomMessages[name]) {
                    this.validationMessages[name][field] = input.validationMessage
                }
                errors[field] = true
            }
        }
        return errors
    }

    private _validationMessages(field: string) {
        return this.validationMessages[field]

    }

    private _input(field) {
        return this.el.nativeElement.querySelector(`md-input[formcontrolname="${field}"]`).querySelector(`input`)
    }

    private _html5Valid(field) {
        let input = this._input(field)
        if (input) {
            return input.validity.valid
        }
        else {
            return true
        }
    }

}