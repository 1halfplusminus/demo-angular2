import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FooterComponent } from './footer.component'
import { SidebarComponent } from './sidebar.component'
import { TopbarComponent } from './topbar.component'


@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        FooterComponent,
        SidebarComponent,
        TopbarComponent
    ],
    exports: [
        FooterComponent,
        SidebarComponent,
        TopbarComponent
    ]
})

export class SharedModule { }