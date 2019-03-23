import { UserPageComponent } from './configuration/containers/user-page/user-page.component';

import { SharedModule } from '../shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualisationRoutingModule } from './visualisation-routing.module';
import { HomeShowComponent } from './home/containers/home-show/home-show.component';
import { UserAddComponent } from './configuration/components/user-add/user-add.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        VisualisationRoutingModule,
    ],
    declarations: [
        UserAddComponent,
        UserPageComponent
    ],
    entryComponents: [

    ]
})
export class VisualisationModule { }
