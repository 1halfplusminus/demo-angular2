import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { CenterComponent} from './center.component'
import { SideNavLayoutComponent } from './side-nav.component'
import { TopNavFooterLayoutComponent } from './top-nav-footer.component'

@NgModule({
    imports: [
        FlexLayoutModule,
        MaterialModule
    ],
    declarations: [
        CenterComponent,
        SideNavLayoutComponent,
        TopNavFooterLayoutComponent ,
    ],
    exports: [
        CenterComponent,
        SideNavLayoutComponent,
        TopNavFooterLayoutComponent
    ]
})

export class LayoutModule { }