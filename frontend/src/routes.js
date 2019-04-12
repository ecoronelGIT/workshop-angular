"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _404_components_1 = require("./error/404.components");
var index_1 = require("./tasks/index");
var task_resolver_service_1 = require("./tasks/task-resolver.service");
exports.appRoutes = [
    { path: 'tasks/new', component: index_1.CreateTaskComponent, canDeactivate: ['canDeactivateCreateTask'] },
    { path: 'tasks', component: index_1.TasksListComponent, resolve: { tasks: index_1.TasksListResolver } },
    { path: 'tasks/:id', component: index_1.TaskDetailsComponent, resolve: { task: task_resolver_service_1.TaskResolver } },
    { path: '404', component: _404_components_1.Error404Component },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map