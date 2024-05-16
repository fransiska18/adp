import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfViewDetailComponent } from './pdf-view-detail.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PdfViewDetailComponent,
        data: {
          title: 'pdf-view-detail'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfViewDetailRoutingModule { }
