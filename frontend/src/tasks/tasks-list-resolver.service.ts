import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {TaskService} from './share/task.service';

@Injectable()
export class TasksListResolver implements Resolve<any> {

    constructor(private taskService: TaskService) { }

    resolve() {
        return this.taskService.getTasks();
    }
}
