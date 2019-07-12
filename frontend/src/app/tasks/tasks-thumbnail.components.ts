import {Component, Input} from "@angular/core";
import {ITask, StateEnum} from "./share/task.model";

@Component({
  selector: 'task-thumbnail',
  templateUrl: 'tasks-thumbnail.components.html',
  styleUrls:['tasks-thumbnail.components.css']
})
export class TaskThumbnailComponent {
    @Input() task:ITask;

  getStartTimeClass(task:ITask) {
    let classStyle = {running: false, hold: false, failed: false, completed: false, waiting: false}
    switch(task.state) {
      case StateEnum.COMPLETED: {
        classStyle.completed = true;
        break;
      }
      case StateEnum.FAILED: {
        classStyle.failed = true;
        break;
      }
      case StateEnum.RUNNING: {
        classStyle.running = true;
        break;
      }
      case StateEnum.WAITING: {
        classStyle.waiting = true;
        break;
      }
      default: {
        classStyle.hold = true;
        break;
      }
    }
    return classStyle;
  }
}