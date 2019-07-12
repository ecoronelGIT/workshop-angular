import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TasksAppComponent} from './tasks-app.components';
import {HttpClientModule} from "@angular/common/http";
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
  ModalTriggerDirective,
  SimpleModalComponent,
} from './common/index';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
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
        ToasterService,
        { provide: 'canDeactivateCreateTask', useValue: checkDirtyState}
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
