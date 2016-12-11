import {
    Directive, HostListener, Input, Renderer, ElementRef, OnInit
} from '@angular/core';
import {FormGroup, AbstractControl} from "@angular/forms";
@Directive({
    selector: '[md-input-validity]'
})
export class MdInputValidDirective implements OnInit {

    @Input('md-input-validity') formGroup :FormGroup
    @Input('formControlName') id : string
    @Input('md-input-validity.validator') validator:string
    @Input('md-input-valid') customValid: boolean = true
    model: AbstractControl
    dividerColor : string ='warn'
    hasMdWarnAtStart: boolean

    constructor(private el:ElementRef,private renderer:Renderer) {

    }
    ngOnInit()
    {
        this.model = this.formGroup.controls[this.id]
        if(this._hint().className.includes(this._className()))
        {
            this.hasMdWarnAtStart = true
        }
    }
    @HostListener('mouseenter') onMouseEnter() {
        this._valid()
    }
    @HostListener('mouseleave') onMouseLeave()
    {
        this._valid()
    }
    @HostListener('change') onChange()
    {

        this._valid()
    }
    @HostListener('keyup') onKeyUp()
    {

        this._valid()
    }
    get valid()
    {
        let isValid = this.model.errors == null && this._html5Valid() && this.customValid
        if(this.validator && this.formGroup.errors)
        {
            isValid = isValid && this.formGroup.errors[this.validator] == null
        }
        return isValid ||  this.model.pristine
    }
    private _input()
    {
        return this.el.nativeElement.querySelector('input')
    }
    private _html5Valid()
    {
       let input = this._input()
       if(input)
       {
           return input.validity.valid
       }
       else{
           return true
       }
    }
    private _label() {
        return this.el.nativeElement.querySelector('.md-input-placeholder')
    }
    private _ripple(){
        return this.el.nativeElement.querySelector('.md-input-ripple')
    }
    private _hint(){
        return this.el.nativeElement.querySelector('md-hint')
    }
    private _className()
    {
        return 'md-'+this.dividerColor
    }
    private _update(addClass : boolean = true)
    {
        let hint = this._hint()
        this.renderer.setElementClass(this._label(),this._className(),addClass)
        this.renderer.setElementClass(this._ripple(),this._className(),addClass)
        if(hint)
        {

            this.renderer.setElementClass(this._hint(),this._className(),(this.hasMdWarnAtStart)?this.hasMdWarnAtStart:addClass)
        }
    }
    private _valid()
    {
        if(!this.valid)
        {
            this._update()

        }else{
            this._update(false)
        }
    }
}