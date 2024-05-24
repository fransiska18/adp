import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { TasklistRoutingModule } from "./tasklist-routing.module";
import { TasklistComponent } from "./tasklist.component";
import { DataService } from 'app/data.service';

@NgModule({
    exports: [
        TasklistComponent
    ],
    imports: [
        CommonModule,
        TasklistRoutingModule,
    ],
    declarations: [
        TasklistComponent       
    ],
    providers: [DataService],
})
export class TasklistModule { }
