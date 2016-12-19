import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector:'app-logo',
  styleUrls: ['./logo.component.scss'],
  templateUrl:'./logo.component.html',
  host:{
    'class':'logo'
  },
  encapsulation:ViewEncapsulation.None
})
export class LogoComponent{

}