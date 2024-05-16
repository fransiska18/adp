import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasklistComponent } from './tasklist.component';

const routes: Routes = [
    {
      path: '',
      component: TasklistComponent,
      data: {
        title: 'Task List'
      },
  
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class TasklistRoutingModule { }
  