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
var TaskDetailsComponent = (function () {
    function TaskDetailsComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.task = data['task'];
        });
    };
    TaskDetailsComponent.prototype.run = function () {
        var _this = this;
        this.taskService.run(this.task.id).subscribe(function (response) {
            _this.router.navigateByUrl('/tasks');
        });
    };
    TaskDetailsComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/tasks');
    };
    TaskDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: 'task-details.component.html',
            styles: ["\n    .container {padding-left: 20px; padding-right: 20px;}\n    .event-image {height: 100px}\n    a {cursor: pointer;}\n    .result {padding-top: 15px;font-weight: bolder;  font-size: 17px;}  \n"]
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
    var _a, _b;
}());
exports.TaskDetailsComponent = TaskDetailsComponent;
//# sourceMappingURL=task-details.component.js.map