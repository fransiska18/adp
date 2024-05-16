import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharingModule } from 'app/shared/sharing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PdfViewDetailComponent } from './pdf-view-detail.component';
import { PdfViewDetailRoutingModule } from './pdf-view-detail-routing.module';


@NgModule({
  imports: [
    PdfViewDetailRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    SharingModule
  ],
  declarations: [
    PdfViewDetailComponent,
  ]
})
export class PdfViewDetailModule { }
 