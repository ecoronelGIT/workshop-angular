import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TaskService} from "./share/task.service";
import {ITask} from "./share/task.model";

@Component({
  templateUrl: 'task-details.component.html',
  styles : [`
    .container {padding-left: 20px; padding-right: 20px;}
    .event-image {height: 100px}
    a {cursor: pointer;}
    .result {padding-top: 15px;font-weight: bolder;  font-size: 17px;}  
`]
})
export class TaskDetailsComponent implements OnInit {
  task: ITask;
  addMode: boolean;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.task = data['task'];
    });
  }

  run() {
    this.taskService.run(this.task.id).subscribe(response => {
      this.router.navigateByUrl('/tasks');
    });
  }

  delete() {
    this.taskService.delete(this.task.id).subscribe( response => {
      this.router.navigateByUrl('/tasks');
    })
  }

  cancel() {
    this.router.navigateByUrl('/tasks');
  }
}
