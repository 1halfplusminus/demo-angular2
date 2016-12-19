import {NgModule, ModuleWithProviders} from '@angular/core'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [
        SharedModule
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