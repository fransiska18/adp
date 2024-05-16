import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsRoutingModule } from "./charts-routing.module";

import { ChartistComponent } from "./chartist/chartist.component";
import { ChartjsComponent } from "./chartjs/chartjs.component";
import { NGXChartsComponent } from "./ngx-charts/ngx-charts.component";
import { CobachartsComponent } from "./coba-charts/coba-charts.component";

//daftar untuk manggil component lain yang ingin dipakai
import { CallBarchartModule } from 'app/call-barchart/call-barchart.module';
import { CallGaugechartModule} from 'app/call-gaugechart/call-gaugechart.module';

//carousel sliding image
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ChartsRoutingModule,
        ChartsModule,
        ChartistModule,
        NgxChartsModule,
        CallBarchartModule,
        CallGaugechartModule,
        NgbModule,
    ],   
    declarations: [
        ChartistComponent,
        ChartjsComponent,
        NGXChartsComponent,
        CobachartsComponent
    ],   
})
export class ChartsNg2Module { }
