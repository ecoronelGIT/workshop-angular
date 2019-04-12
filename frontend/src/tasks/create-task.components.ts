import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from "./share/task.service";

@Component({
  templateUrl: 'crate-task.components.html',
  styleUrls: [ 'create-task.components.css']
})
export class CreateTaskComponent {
  isDirty: Boolean = false;
  task: any = {};

  constructor(private router: Router, private taskService: TaskService) { }

  saveTask(formValues: any) {
    this.taskService.saveTask(formValues).subscribe(response => {
      this.isDirty = false;
      this.router.navigateByUrl('/tasks');
    });
  }

  cancel() {
    this.router.navigateByUrl('/tasks');
  }
}
