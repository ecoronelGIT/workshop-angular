import {Routes} from '@angular/router';
import {Error404Component} from './error/404.components';
import {
  CreateTaskComponent,
  TasksListComponent,
  TasksListResolver,
  TaskDetailsComponent
} from "./tasks/index";
import {TaskResolver} from "./tasks/task-resolver.service";

export const appRoutes: Routes = [
    {path: 'tasks/new', component: CreateTaskComponent, canDeactivate: ['canDeactivateCreateTask']},
    {path: 'tasks', component: TasksListComponent, resolve: {tasks: TasksListResolver}},
    {path: 'tasks/:id', component: TaskDetailsComponent, resolve: {task: TaskResolver}},
    {path: '404', component: Error404Component},
    {path: 'error', redirectTo: '404', pathMatch: 'full'},
    {path: '', redirectTo: '/tasks', pathMatch: 'full'},
    {path: '**', redirectTo: '/404'}
];
