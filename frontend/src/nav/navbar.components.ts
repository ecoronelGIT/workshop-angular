import {Component} from '@angular/core';
import {ITask} from "../tasks/share/task.model";
import {TaskService} from "../tasks/share/task.service";

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.components.html',
  styleUrls: ['navbar.components.css']
})
export class NavBarComponent {
    searchTerm: string = '';
    foundTasks: ITask[];
    urlImageDespegar:any = require('./../assets/images/despegar.svg');

    constructor(private taskService: TaskService) {

    }

    searchTasks(searchTerm: string) {
        this.taskService.searchTasks(searchTerm).subscribe((tasks) => {
            this.foundTasks = tasks;
        });
    }
}
