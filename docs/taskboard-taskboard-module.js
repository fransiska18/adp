(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-taskboard-module"],{

/***/ "./src/app/taskboard/taskboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/taskboard/taskboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TaskboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardRoutingModule", function() { return TaskboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _taskboard_component__WEBPACK_IMPORTED_MODULE_2__["TaskboardComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardRoutingModule = /** @class */ (function () {
    function TaskboardRoutingModule() {
    }
    TaskboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], TaskboardRoutingModule);
    return TaskboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header text-left\">Task Board</div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n</div>\r\n<!-- Taskboard Starts -->\r\n<section id=\"taskboard\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-list mr-1 float-left\"></i> To Dos</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='todo'>\r\n        <div *ngFor='let todo of todo'>\r\n          <div class=\"card\">\r\n            <div class=\"card-block pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{todo.taskMessage}}</p>\r\n              <img [src]=\"[todo.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"primary\">{{todo.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-trending-up mr-1  float-left\"></i> In Progress</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='inProcess'>\r\n        <div *ngFor='let inProcess of inProcess'>\r\n          <div class=\"card\">\r\n            <div class=\"card-block pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{inProcess.taskMessage}}</p>\r\n              <img [src]=\"[inProcess.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"info\">{{inProcess.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-thumbs-up mr-1  float-left\"></i>Completed</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='completed'>\r\n        <div *ngFor='let completed of completed'>\r\n          <div class=\"card\">\r\n            <div class=\"card-block pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{completed.taskMessage}}</p>\r\n              <img [src]=\"[completed.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"success\">{{completed.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-alert-octagon mr-1  float-left\"></i>On Hold</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='backLog'>\r\n        <div *ngFor='let backLog of backLog'>\r\n          <div class=\"card\">\r\n            <div class=\"card-block pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{backLog.taskMessage}}</p>\r\n              <img [src]=\"[backLog.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"warning\">{{backLog.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-block pt-3 text-left\">\r\n        <h5 class=\"text-bold-500\">Create new Task</h5>\r\n        <form class=\"taskboard-app-input row\">\r\n          <fieldset class=\"form-group position-relative has-icon-left col-md-4 col-12 mb-1\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"icon-emoticon-smile\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"todoTitle\" placeholder=\"Title\" (keydown.enter)=\"$event.preventDefault()\"\r\n              #todoTitle>\r\n            <div class=\"form-control-position control-position-right\">\r\n              <i class=\"ft-image\"></i>\r\n            </div>\r\n          </fieldset>\r\n          <fieldset class=\"form-group position-relative has-icon-left col-md-6 col-12 mb-1\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"icon-emoticon-smile\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder=\"Message\" (keydown.enter)=\"$event.preventDefault()\"\r\n              #todoMessage>\r\n            <div class=\"form-control-position control-position-right\">\r\n              <i class=\"ft-image\"></i>\r\n            </div>\r\n          </fieldset>\r\n         \r\n          <fieldset class=\"form-group position-relative has-icon-left col-md-2 col-12 mb-1\">\r\n            <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"onAddTask()\">\r\n              <i class=\"fa fa-paper-plane-o hidden-lg-up\"></i> Create</button>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n</section>\r\n<!-- Taskboard Ends -->\r\n\r\n"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table; }\n\n/* .dragdrop-container {\r\n    display: table-cell;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    width: 25%;\r\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n/*\r\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\r\n   * you're better off giving the draggable elements a unique class and styling that directly!\r\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out; }\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c; }\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkL0Q6XFxCU0ErIEhJVExcXEJTQSBnaXRodWJcXGFkcC9zcmNcXGFwcFxcdGFza2JvYXJkXFx0YXNrYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZTtFQUNmLE9BQU07RUFDTixTQUFRO0VBQ1IsVUFBUyxFQUNWOztBQUVELDBDQUEwQzs7QUFDMUM7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7Ozs7TUFJSTs7QUFDSjtFQUNFLHFDQUFvQyxFQUNyQzs7QUFDRDs7O0tBR0c7O0FBQ0g7O0VBS0UscUNBQW9DLEVBQ3JDOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGFBQVk7RUFFWixxQkFBb0IsRUFDckI7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFFaEIseUJBQXdCLEVBQ3pCOztBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsMkNBQTBDLEVBQzNDOztBQUNEOztFQUVFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixxQ0FBb0M7RUFDcEMsYUFBWSxFQUNiOztBQUNEO0VBQ0UsZUFBYztFQUNkLGVBQWM7RUFDZCxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsWUFBVztFQUNYLFNBQVE7RUFDUixpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuLmdoLWZvcmsge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGRyYWd1bGEtc3BlY2lmaWMgZXhhbXBsZSBwYWdlIHN0eWxlcyAqL1xyXG4gIC5kcmFnZHJvcC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICAvKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH0gKi9cclxuICAuZHJhZ2Ryb3AtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgLypcclxuICAgKiBub3RlIHRoYXQgc3R5bGluZyBndS1taXJyb3IgZGlyZWN0bHkgaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCdzIHRvbyBnZW5lcmljLlxyXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXHJcbiAgICovXHJcbiAgLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdixcclxuICAuZ3UtbWlycm9yIHtcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gICAgY3Vyc29yOiAtbW96LWdyYWI7XHJcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuICB9XHJcbiAgLmd1LW1pcnJvciB7XHJcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xyXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG4gIH1cclxuICAuZHJhZ2Ryb3AtY29udGFpbmVyIC5leC1tb3ZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xyXG4gIH1cclxuICAuZHJhZ2Ryb3AtY29udGFpbmVyLmV4LW92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIH1cclxuICAjbGVmdC1sb3ZlaGFuZGxlcyA+IGRpdixcclxuICAjcmlnaHQtbG92ZWhhbmRsZXMgPiBkaXYge1xyXG4gICAgY3Vyc29yOiBpbml0aWFsO1xyXG4gIH1cclxuICAuaGFuZGxlIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgfVxyXG4gIC5pbWFnZS10aGluZyB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2xhY2stam9pbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.ts ***!
  \**************************************************/
/*! exports provided: TaskboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function() { return TaskboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskboard.service */ "./src/app/taskboard/taskboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskboardComponent = /** @class */ (function () {
    function TaskboardComponent(elRef, taskBoardService) {
        this.elRef = elRef;
        this.taskBoardService = taskBoardService;
        this.todo = taskBoardService.todo;
        this.inProcess = taskBoardService.inProcess;
        this.backLog = taskBoardService.backLog;
        this.completed = taskBoardService.completed;
    }
    TaskboardComponent.prototype.onAddTask = function () {
        if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
            this.taskBoardService.addNewTask(this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value);
            this.todo = this.taskBoardService.gettodo();
        }
        this.titleInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.value = "";
        this.titleInputRef.nativeElement.focus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('todoTitle'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskboardComponent.prototype, "titleInputRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('todoMessage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskboardComponent.prototype, "messageInputRef", void 0);
    TaskboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskboard',
            template: __webpack_require__(/*! ./taskboard.component.html */ "./src/app/taskboard/taskboard.component.html"),
            styles: [__webpack_require__(/*! ./taskboard.component.scss */ "./src/app/taskboard/taskboard.component.scss")],
            providers: [_taskboard_service__WEBPACK_IMPORTED_MODULE_1__["TaskBoardService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _taskboard_service__WEBPACK_IMPORTED_MODULE_1__["TaskBoardService"]])
    ], TaskboardComponent);
    return TaskboardComponent;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.model.ts":
/*!**********************************************!*\
  !*** ./src/app/taskboard/taskboard.model.ts ***!
  \**********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskTitle, taskMessage, createdOn, createdBy, assignedTo, status) {
        this.taskTitle = taskTitle;
        this.taskMessage = taskMessage;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.status = status;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/taskboard/taskboard.module.ts ***!
  \***********************************************/
/*! exports provided: TaskboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardModule", function() { return TaskboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard-routing.module */ "./src/app/taskboard/taskboard-routing.module.ts");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TaskboardModule = /** @class */ (function () {
    function TaskboardModule() {
    }
    TaskboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaskboardRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"]
            ],
            declarations: [
                _taskboard_component__WEBPACK_IMPORTED_MODULE_4__["TaskboardComponent"]
            ]
        })
    ], TaskboardModule);
    return TaskboardModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/taskboard/taskboard.service.ts ***!
  \************************************************/
/*! exports provided: TaskBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardService", function() { return TaskBoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskboard.model */ "./src/app/taskboard/taskboard.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskBoardService = /** @class */ (function () {
    function TaskBoardService() {
        this.todo = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Responsive', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('QA Testing', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Budget', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New')
        ];
        this.inProcess = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('checklist', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Navigation', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Bootstrap 4', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process')
        ];
        this.backLog = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Assessment', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Schedule', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Unit tests', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending')
        ];
        this.completed = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Angular 5', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Fields', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Task board', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed')
        ];
    }
    TaskBoardService.prototype.addNewTask = function (title, message) {
        this.todo.push(new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](title, message, 'Nov 12', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'));
    };
    TaskBoardService.prototype.gettodo = function () {
        return this.todo;
    };
    TaskBoardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TaskBoardService);
    return TaskBoardService;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-taskboard-module.js.map