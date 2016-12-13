import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { TopbarComponent } from './topbar/topbar.component'
import { MdInputValidyDirective } from './md-input-validy.directive'
import { FormValidityDirective  } from './form-validity.directive'

@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        FooterComponent,
        SidebarComponent,
        TopbarComponent,
        MdInputValidyDirective,
        FormValidityDirective
    ],
    exports: [
        FooterComponent,
        SidebarComponent,
        TopbarComponent,
        MdInputValidyDirective,
        FormValidityDirective
    ]
})

export class SharedModule { }