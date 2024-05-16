import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CallBarchartRoutingModule } from "./call-barchart-routing.module";

import { CallBarchartComponent } from "./call-barchart.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
    exports: [
        CallBarchartComponent
    ],
    imports: [
        CommonModule,
        NgxChartsModule,
        CallBarchartRoutingModule
    ],
    declarations: [
        CallBarchartComponent
    ],
})
export class CallBarchartModule { }