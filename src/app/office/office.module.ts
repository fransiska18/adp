import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from 'app/office/office.component';
import { OfficeRoutingModule } from 'app/office/office-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharingModule } from 'app/shared/sharing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    OfficeRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    SharingModule
  ],
  declarations: [
    OfficeComponent,
  ]
})
export class OfficeModule { }
 