import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SearchComponent } from 'app/shared/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { UCGridFooterComponent } from 'app/shared/UserControl/ucgrid-footer/ucgrid-footer.component';

@NgModule({
    exports: [
        CommonModule,
        SearchComponent,
        NgbModule,
        UCGridFooterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpModule
    ],
    declarations: [
        SearchComponent,
        UCGridFooterComponent,
    ]
})

export class SharingModule { }
