import './rxjs-extensions';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {TasksAppComponent} from './tasks-app.components';
import {
  CreateTaskComponent,
  TaskResolver,
  TasksListResolver,
  TaskService,
  TasksListComponent,
  TaskThumbnailComponent,
  TaskDetailsComponent
} from './tasks/index';
import {NavBarComponent} from './nav/navbar.components';
import {appRoutes} from './routes';
import {Error404Component} from './error/404.components';
import {
  JQ_TOKEN,
  ModalTriggerDirective,
  SimpleModalComponent,
} from './common/index';

let jQuery: Object = require('jquery');

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToasterModule
    ],
    declarations: [
      CreateTaskComponent,
      Error404Component,
      TasksAppComponent,
      TasksListComponent,
      TaskThumbnailComponent,
      ModalTriggerDirective,
      NavBarComponent,
      SimpleModalComponent,
      TaskDetailsComponent
    ],
    providers: [
        TaskService,
        TaskResolver,
        TasksListResolver,
        { provide: 'canDeactivateCreateTask', useValue: checkDirtyState},
        { provide: JQ_TOKEN, useValue: jQuery}
    ],
    bootstrap: [TasksAppComponent]
})
export class AppModule {

}

export function checkDirtyState(component: CreateTaskComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this task, do you really want to cancel?');
    }
    return true;
}
