"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var task_service_1 = require("./share/task.service");
var TasksListComponent = (function () {
    function TasksListComponent(route, taskService) {
        this.route = route;
        this.taskService = taskService;
    }
    TasksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasks = this.route.snapshot.data['tasks'];
        this.refreshData();
        this.interval = setInterval(function () {
            _this.refreshData();
        }, 1000);
    };
    TasksListComponent.prototype.refreshData = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (data) {
            _this.tasks = data;
        });
    };
    TasksListComponent.prototype.run = function () {
        this.taskService.runAll();
    };
    TasksListComponent.prototype.delete = function () {
        this.taskService.deleteAll();
    };
    TasksListComponent = __decorate([
        core_1.Component({
            templateUrl: 'tasks-list.components.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, task_service_1.TaskService])
    ], TasksListComponent);
    return TasksListComponent;
}());
exports.TasksListComponent = TasksListComponent;
//# sourceMappingURL=tasks-list.components.js.map