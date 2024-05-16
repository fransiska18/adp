import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartistComponent } from "./chartist/chartist.component";
import { ChartjsComponent } from "./chartjs/chartjs.component";
import { NGXChartsComponent } from "./ngx-charts/ngx-charts.component";
import { CobachartsComponent } from "./coba-charts/coba-charts.component";

const routes: Routes = [
  {
    path: '',     
    children: [
      {
        path: 'chartist',
        component: ChartistComponent,
        data: {
          title: 'Chartist'
        }
      },
      {
        path: 'chartjs',
        component: ChartjsComponent,
        data: {
          title: 'Chartjs'
        }
      },
      {
        path: 'ngx',
        component: NGXChartsComponent,
        data: {
          title: 'NGX Charts'
        }
      },
      {
        path: 'cobacoba',
        component: CobachartsComponent,
        data: {
          title: 'Coba Charts'
        }
      },   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }
