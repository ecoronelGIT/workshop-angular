import {Component} from "@angular/core";

@Component({
    selector : 'tasks-app',
    template : `
        <toaster-container></toaster-container>
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class TasksAppComponent {

}