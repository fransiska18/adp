import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallBarchartComponent } from "./call-barchart.component";

const routes: Routes = [
  {
    path: '',     
    children: [
      {
        path: 'CallBarchart',
        component: CallBarchartComponent,
        data: {
          title: 'Calling Barchart'
        }
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallBarchartRoutingModule { }