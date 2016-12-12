import {NgModule, ModuleWithProviders} from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule,FormsModule } from "@angular/forms"
import {CommonModule} from "@angular/common"
import { SharedModule } from '../shared/shared.module'


require('./assets/connexion-background.jpg')

@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    declarations:[

    ]
})

export class BulletinModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BulletinModule,
            providers: [

            ]
        };
    }
}