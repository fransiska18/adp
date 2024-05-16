import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CallGaugechartRoutingModule } from "./call-gaugechart-routing.module";
import { ChartistModule} from 'ng-chartist';

import { CallGaugechartComponent } from "./call-gaugechart.component";

@NgModule({
    //di-exports -> komponen yang diijinkan untuk bisa diakses oleh komponen lain
    exports: [
        CallGaugechartComponent
    ],
    imports: [
        CommonModule,
        ChartistModule,
        CallGaugechartRoutingModule
    ],
    declarations: [
        CallGaugechartComponent
    ],
})
export class CallGaugechartModule { }