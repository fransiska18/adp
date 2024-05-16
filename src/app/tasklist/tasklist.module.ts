import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TasklistRoutingModule } from "./tasklist-routing.module";
import { TasklistComponent } from "./tasklist.component";

@NgModule({
    imports: [
        CommonModule,
        TasklistRoutingModule,
        Ng2SmartTableModule,
    ],
    declarations: [
        TasklistComponent       
    ]
})
export class TasklistModule { }
