import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharingModule } from 'app/shared/sharing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PdfViewDetailComponent } from './pdf-view-detail.component';
import { PdfViewDetailRoutingModule } from './pdf-view-detail-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataService } from 'app/data.service';


@NgModule({
  imports: [
    PdfViewDetailRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    SharingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    PdfViewDetailComponent,
  ],
  providers: [DataService],
})
export class PdfViewDetailModule { }
 