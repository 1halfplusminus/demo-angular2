import {Component, Input } from '@angular/core'

@Component({
    selector: 'layout-sidenav',
    templateUrl: 'side-nav.component.html',
    styleUrls: ['layouts.scss']
})
export class SideNavLayoutComponent {
     _left: boolean = true
     _right : boolean = false
     @Input() sideNavFlexXs
     @Input() sideNavFlexSm
     @Input() sideNavFlex
     @Input() showGtMd :boolean = false
     @Input() show :boolean = true

     @Input()
    set left (val:boolean){
        this._left = val;
        this._right = !val;
    }
    @Input()
    set right (val:boolean | null) {
        this._right = val;
        this._left = !val;
    }
    orderNavBar = () =>{
        if(this._left)
            return 1;
        if(this._right)
            return 2;
    }
    orderMain = ()=> {
        if(this._left)
            return 2;
        if(this._right)
            return 1;
    }
}