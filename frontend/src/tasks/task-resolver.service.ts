import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {TaskService} from './share/task.service';

@Injectable()
export class TaskResolver implements Resolve<any> {

    constructor(private taskService: TaskService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.taskService.getTask(route.params['id']);
    }
}
