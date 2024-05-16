import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallGaugechartComponent } from "./call-gaugechart.component";

const routes: Routes = [
    {
      path: '',     
      children: [
        {
          path: 'CallGaugechart',
          component: CallGaugechartComponent,
          data: {
            title: 'Calling Gaugechart'
          }
        }, 
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CallGaugechartRoutingModule { }