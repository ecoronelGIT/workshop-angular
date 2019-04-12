"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var angular2_toaster_1 = require("angular2-toaster");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/http");
var tasks_app_components_1 = require("./tasks-app.components");
var index_1 = require("./tasks/index");
var navbar_components_1 = require("./nav/navbar.components");
var routes_1 = require("./routes");
var _404_components_1 = require("./error/404.components");
var index_2 = require("./common/index");
var jQuery = window['$'];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                angular2_toaster_1.ToasterModule
            ],
            declarations: [
                index_1.CreateTaskComponent,
                _404_components_1.Error404Component,
                tasks_app_components_1.TasksAppComponent,
                index_1.TasksListComponent,
                index_1.TaskThumbnailComponent,
                index_2.ModalTriggerDirective,
                navbar_components_1.NavBarComponent,
                index_2.SimpleModalComponent,
                index_1.TaskDetailsComponent
            ],
            providers: [
                index_1.TaskService,
                index_1.TaskResolver,
                index_1.TasksListResolver,
                { provide: 'canDeactivateCreateTask', useValue: checkDirtyState },
                { provide: index_2.JQ_TOKEN, useValue: jQuery }
            ],
            bootstrap: [tasks_app_components_1.TasksAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved this task, do you really want to cancel?');
    }
    return true;
}
exports.checkDirtyState = checkDirtyState;
//# sourceMappingURL=app.module.js.map