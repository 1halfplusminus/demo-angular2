import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule,FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common"

import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { TopbarComponent } from './topbar/topbar.component'
import { LogoComponent } from './logo/logo.component'

import { MdInputValidyDirective } from './md-input-validy.directive'
import { FormValidityDirective  } from './form-validity.directive'
import { TrackScrollDirective   } from './trackscroll.directive'


@NgModule({
    imports: [
        //Angular
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        //Vendor
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot()
    ],
    declarations: [
        FooterComponent,
        SidebarComponent,
        TopbarComponent,
        LogoComponent,
        MdInputValidyDirective,
        FormValidityDirective,
        TrackScrollDirective
    ],
    exports: [
        //Angular
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        //Vendor
        MaterialModule,
        FlexLayoutModule,
        //Custom
        FooterComponent,
        SidebarComponent,
        TopbarComponent,
        LogoComponent,
        MdInputValidyDirective,
        FormValidityDirective,
        TrackScrollDirective
    ]
})

export class SharedModule { }