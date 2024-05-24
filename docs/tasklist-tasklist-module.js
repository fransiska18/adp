(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasklist-tasklist-module"],{

/***/ "./src/app/tasklist/tasklist-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tasklist/tasklist-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TasklistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistRoutingModule", function() { return TasklistRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasklist.component */ "./src/app/tasklist/tasklist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _tasklist_component__WEBPACK_IMPORTED_MODULE_2__["TasklistComponent"],
        data: {
            title: 'Task List'
        },
    }
];
var TasklistRoutingModule = /** @class */ (function () {
    function TasklistRoutingModule() {
    }
    TasklistRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], TasklistRoutingModule);
    return TasklistRoutingModule;
}());



/***/ }),

/***/ "./src/app/tasklist/tasklist.component.html":
/*!**************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  tasklist works!\r\n</p> -->\r\n\r\n<!--Extended Table starts-->\r\n<!-- <div class=\"row text-left\">\r\n  <div class=\"col-12\">\r\n      <div class=\"content-header\">Extended Tables</div>\r\n      <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\r\n  </div>\r\n</div> -->\r\n<section id=\"extended\">\r\n  <div class=\"row text-left\">\r\n      <div class=\"col-sm-12\">\r\n          <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                  <h4 class=\"card-title\">Task List</h4>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                  <div class=\"card-block\">\r\n                    <input #search class=\"search mb-2\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\r\n                      <table class=\"table table-responsive-md text-center\">\r\n                          <thead>\r\n                              <tr>\r\n                                  <th>No</th>\r\n                                  <th>ID</th>\r\n                                  <th>Bank</th>\r\n                                  <th>Page(s)</th>\r\n                                  <th>Status</th>\r\n                                  <th>Actions</th>\r\n                              </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                              <tr *ngFor=\"let item of data; let i = index\">\r\n                                  <td>{{ i+1 }}</td>\r\n                                  <td>{{ item.id }}</td>\r\n                                  <td>{{ item.bank }}</td>\r\n                                  <td>{{ item.pagenum }}</td>\r\n                                  <td>{{ item.status }}</td>\r\n                                  <td>\r\n                                      <a [ngClass]=\"{'success p-0': item.status !== 'Done', 'info p-0': item.status === 'Done'}\" (click)=\"onEditClick(item)\" data-original-title=\"\" title=\"\">\r\n                                          <i [ngClass]=\"{'ft-edit-2 font-medium-4 mr-2': item.status !== 'Done', 'ft-eye font-medium-3 mr-2': item.status === 'Done'}\"></i>\r\n                                      </a>\r\n                                      <!-- <a *ngIf=\"item.status !== 'Done'\" class=\"success p-0\" (click)=\"onEditClick(item)\" data-original-title=\"\" title=\"\">\r\n                                          <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                                      </a> -->\r\n                                      <!-- <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                                          <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                                      </a> -->\r\n                                    \r\n                                  </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n<!--Extended Table Ends-->"

/***/ }),

/***/ "./src/app/tasklist/tasklist.component.scss":
/*!**************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tsaXN0L3Rhc2tsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasklist/tasklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.ts ***!
  \************************************************/
/*! exports provided: TasklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistComponent", function() { return TasklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _callAPI_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callAPI/api.service */ "./src/app/callAPI/api.service.ts");
/* harmony import */ var app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasklistComponent = /** @class */ (function () {
    function TasklistComponent(apiService, router, dataService) {
        this.apiService = apiService;
        this.router = router;
        this.dataService = dataService;
        this.data = [];
    }
    TasklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getJson("tasklist.json").subscribe(function (response) {
            _this.data = response;
        });
    };
    TasklistComponent.prototype.onEditClick = function (item) {
        // Navigate to another page with the item's ID
        this.router.navigate(['/pdf-view-detail', item.id]);
        // this.router.navigate(['/pdf-view-detail']);
    };
    TasklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasklist',
            template: __webpack_require__(/*! ./tasklist.component.html */ "./src/app/tasklist/tasklist.component.html"),
            styles: [__webpack_require__(/*! ./tasklist.component.scss */ "./src/app/tasklist/tasklist.component.scss")]
        }),
        __metadata("design:paramtypes", [_callAPI_api_service__WEBPACK_IMPORTED_MODULE_2__["apiservice"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], app_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], TasklistComponent);
    return TasklistComponent;
}());



/***/ }),

/***/ "./src/app/tasklist/tasklist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tasklist/tasklist.module.ts ***!
  \*********************************************/
/*! exports provided: TasklistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistModule", function() { return TasklistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tasklist_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasklist-routing.module */ "./src/app/tasklist/tasklist-routing.module.ts");
/* harmony import */ var _tasklist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasklist.component */ "./src/app/tasklist/tasklist.component.ts");
/* harmony import */ var app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TasklistModule = /** @class */ (function () {
    function TasklistModule() {
    }
    TasklistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _tasklist_component__WEBPACK_IMPORTED_MODULE_3__["TasklistComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tasklist_routing_module__WEBPACK_IMPORTED_MODULE_2__["TasklistRoutingModule"],
            ],
            declarations: [
                _tasklist_component__WEBPACK_IMPORTED_MODULE_3__["TasklistComponent"]
            ],
            providers: [app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]],
        })
    ], TasklistModule);
    return TasklistModule;
}());



/***/ })

}]);
//# sourceMappingURL=tasklist-tasklist-module.js.map