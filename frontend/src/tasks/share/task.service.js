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
var Rx_1 = require("rxjs/Rx");
var task_model_1 = require("./task.model");
var http_1 = require("@angular/http");
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get('http://localhost:8090/tasks').map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    TaskService.prototype.getTask = function (id) {
        return this.http.get('http://localhost:8090/tasks/' + id).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    TaskService.prototype.saveTask = function (task) {
        task.state = task_model_1.StateEnum.HOLD;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8090/tasks/', JSON.stringify(task), options)
            .map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    TaskService.prototype.updateTask = function (task) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('http://localhost:8090/tasks/', { task: JSON.stringify(task) }, options)
            .map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    TaskService.prototype.searchTasks = function (searchTerm) {
        var term = searchTerm.toLocaleLowerCase();
        return this.http.get('http://localhost:8090/tasks/getByName/' + searchTerm)
            .map(function (response) {
            var tasks = response.json();
            return tasks;
        }).catch(this.handleError);
    };
    TaskService.prototype.run = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8090/tasks/run/' + id, {}, options)
            .map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    TaskService.prototype.runAll = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post('http://localhost:8090/tasks/run/', {}, options)
            .map(function (response) {
            return response;
        }).catch(this.handleError).subscribe();
    };
    TaskService.prototype.delete = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8090/tasks/delete/' + id, {}, options)
            .map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    TaskService.prototype.deleteAll = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post('http://localhost:8090/tasks/delete/', {}, options)
            .map(function (response) {
            return response;
        }).catch(this.handleError).subscribe();
    };
    TaskService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.statusText);
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map