import {Directive, Input, ElementRef, OnInit, HostBinding, HostListener, Renderer} from '@angular/core';

@Directive({
    selector: '[track-scroll]',
    host: {'(window:scroll)': 'onScroll()'}
})
export class TrackScrollDirective implements OnInit  {

    @Input() visibleClass : string = ''
    @Input() hiddenClass  : string = ''
    isVisible : boolean = false;
    constructor(private el : ElementRef,private renderer: Renderer) {

    }
    ngOnInit(){
        this.checkVisibility()
        this.renderHiddenClass()
    }
    onScroll() {
        if(this.isVisible === false)
        {
            this.checkVisibility()
            if(this.isVisible) {
                this.renderVisibleClass()
                this.renderHiddenClass()
            }
        }
    }
    private renderVisibleClass()
    {
        this.visibleClass.split(' ').forEach((className) => {
            this.renderer.setElementClass(this.el.nativeElement, className, this.isVisible)
        })
    }
    private renderHiddenClass()
    {
        this.hiddenClass.split(' ').forEach((className)=>{
            this.renderer.setElementClass(this.el.nativeElement,className,!this.isVisible)
        })
    }
    private checkVisibility()
    {
        const nativeElement = this.el.nativeElement
        let rect = nativeElement.getBoundingClientRect()
        this.isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        )
    }
}