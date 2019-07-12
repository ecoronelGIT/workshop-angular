import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ITask} from './share/task.model';
import {TaskService} from "./share/task.service";

@Component({
  templateUrl: 'tasks-list.components.html'
})
export class TasksListComponent implements OnInit {
  tasks: ITask[];
  interval: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }

  ngOnInit() {
    this.tasks = this.route.snapshot.data['tasks'];
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 1000);
  }

  refreshData(){
    this.taskService.getTasks()
      .subscribe(data => {
        this.tasks = data;
      })
  }

  run() {
    this.taskService.runAll();
  }

}
