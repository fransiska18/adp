import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { TasklistRoutingModule } from "./tasklist-routing.module";
import { TasklistComponent } from "./tasklist.component";

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
    ]
})
export class TasklistModule { }
