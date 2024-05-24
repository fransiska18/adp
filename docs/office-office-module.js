(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-office-module"],{

/***/ "./src/app/office/office-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/office/office-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OfficeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeRoutingModule", function() { return OfficeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_office_office_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/office/office.component */ "./src/app/office/office.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: app_office_office_component__WEBPACK_IMPORTED_MODULE_2__["OfficeComponent"],
                data: {
                    title: 'Office'
                },
            }
        ]
    }
];
var OfficeRoutingModule = /** @class */ (function () {
    function OfficeRoutingModule() {
    }
    OfficeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], OfficeRoutingModule);
    return OfficeRoutingModule;
}());



/***/ }),

/***/ "./src/app/office/office.component.html":
/*!**********************************************!*\
  !*** ./src/app/office/office.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search id=\"ucSearch\" style=\"width:100%;\" [_url]='urlJson' [apiQryPaging]='urlQryPaging' [enviromentUrl]='urlEnviPaging'\r\n    (result)=\"getResult($event)\"></app-search>\r\n\r\n<div [hidden]=\"resultData?.data == null\">\r\n<table class=\"table table-responsive-md text-center table-hover\">\r\n    <thead>\r\n        <tr class=\"table-header\">\r\n            <th><span translate class=\"thead-header\" (click)=\"searchSort($event)\" name='officeName'>Office Name</span></th>\r\n            <th><span translate class=\"thead-header\"  (click)=\"searchSort($event)\" name='officeCode'>Office Code</span></th>\r\n            <th><span translate class=\"thead-header\"  (click)=\"searchSort($event)\" name='cntctPersonName' translate>Contact Person</span></th>\r\n            <th><span translate class=\"thead-header\"  (click)=\"searchSort($event)\" name='officeAddr' translate>Address</span></th>\r\n            <th><span translate class=\"thead-header\"  (click)=\"searchSort($event)\" name='city' translate>City</span></th>\r\n            <th><span translate class=\"thead-header\"  (click)=\"searchSort($event)\" name='orgMdlName'>Model Name</span></th>\r\n            <th><span translate class=\"thead-header\"  (click)=\"searchSort($event)\" name='isActive'>Active Status</span></th>\r\n            <th><span translate class=\"thead-header\"  (click)=\"searchSort($event)\" name='mrKonvenSyariah'>Konvensional / Syariah</span></th>\r\n            <th><span translate class=\"thead-header\"  (click)=\"searchSort($event)\" name='isVirtualOffice' translate>Virtual Office</span></th>\r\n            <th translate>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of resultData?.data\">\r\n            <td class=\"text-left\">{{item.officeName}}</td>\r\n            <td>{{item.officeCode}}</td>\r\n            <td class=\"text-left\">{{item.cntctPersonName}}</td>\r\n            <td class=\"text-left\">{{item.officeAddr}}</td>\r\n            <td class=\"text-left\">{{item.city}}</td>\r\n            <td class=\"text-left\">{{item.orgMdlName}}</td>\r\n            <td *ngIf=\"item.isActive === '1'\">Yes</td>\r\n            <td *ngIf=\"item.isActive === '0'\">No</td>\r\n            <td *ngIf=\"item.mrKonvenSyariah === 'KON'\">Konvensional</td>\r\n            <td *ngIf=\"item.mrKonvenSyariah === 'SYA'\">Syariah</td>\r\n            <td *ngIf=\"item.mrKonvenSyariah === ''\"></td>\r\n            <td *ngIf=\"item.isVirtualOffice === '1'\">Yes</td>\r\n            <td *ngIf=\"item.isVirtualOffice === '0'\">No</td>\r\n            <td>\r\n                <a class=\"success p-0\" data-original-title=\"\" title=\"\" [routerLink]=\"['/office/add']\"\r\n                    [queryParams]=\"{param:'edit',refOfficeId:item.refOfficeId}\" [ngClass]=\"{'d-none': displayNone}\">\r\n                    <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                </a>\r\n                <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"delete(item.refOfficeId)\">\r\n                    <i class=\"ft-trash-2 font-medium-3 mr-2\"></i>\r\n                </a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<app-ucgrid-footer (select)=\"onSelect($event)\"></app-ucgrid-footer>\r\n<!-- <i class=\"fa fa-plus-circle\" [routerLink]=\"['/office/add']\"\r\n    style=\"position: absolute; right: 30px; bottom: 0; cursor: pointer; font-size: 36px\"></i> -->\r\n</div>"

/***/ }),

/***/ "./src/app/office/office.component.scss":
/*!**********************************************!*\
  !*** ./src/app/office/office.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9vZmZpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/office/office.component.ts":
/*!********************************************!*\
  !*** ./src/app/office/office.component.ts ***!
  \********************************************/
/*! exports provided: OfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeComponent", function() { return OfficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_shared_AdInstConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/AdInstConstant */ "./src/app/shared/AdInstConstant.ts");
/* harmony import */ var app_components_extra_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components/extra/toastr/toastr.service */ "./src/app/components/extra/toastr/toastr.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_shared_model_OfficeObj_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/model/OfficeObj.model */ "./src/app/shared/model/OfficeObj.model.ts");
/* harmony import */ var app_shared_UserControl_ucgrid_footer_ucgrid_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/UserControl/ucgrid-footer/ucgrid-footer.component */ "./src/app/shared/UserControl/ucgrid-footer/ucgrid-footer.component.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/search/search.component */ "./src/app/shared/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OfficeComponent = /** @class */ (function () {
    function OfficeComponent(httpClient, toastr) {
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.urlJson = "./assets/search/searchOffice.json";
        this.pageSize = 10;
        this.orderByKey = null;
        this.orderByValue = true;
        this.urlQryPaging = app_shared_AdInstConstant__WEBPACK_IMPORTED_MODULE_2__["AdInsConstant"].GetListOffice;
        this.urlEnviPaging = environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].foundationUrl;
        this.displayNone = false;
        this.foundationUrl = environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].foundationUrl;
    }
    OfficeComponent.prototype.ngOnInit = function () {
        this.pageNow = 1;
        this.pageSize = 10;
        this.apiUrl = this.foundationUrl + app_shared_AdInstConstant__WEBPACK_IMPORTED_MODULE_2__["AdInsConstant"].GetListOffice;
        this.deleteUrl = this.foundationUrl + app_shared_AdInstConstant__WEBPACK_IMPORTED_MODULE_2__["AdInsConstant"].DeleteRefOffice;
    };
    // Success Type
    OfficeComponent.prototype.searchSort = function (event) {
        if (this.resultData != null) {
            if (this.orderByKey == event.target.attributes.name.nodeValue) {
                this.orderByValue = !this.orderByValue;
            }
            else {
                this.orderByValue = true;
            }
            this.orderByKey = event.target.attributes.name.nodeValue;
            var order = {
                key: this.orderByKey,
                value: this.orderByValue
            };
            this.searchComponent.search(this.apiUrl, this.pageNow, this.pageSize, order);
        }
    };
    OfficeComponent.prototype.searchPagination = function (event) {
        this.pageNow = event;
        var order = null;
        if (this.orderByKey != null) {
            order = {
                key: this.orderByKey,
                value: this.orderByValue
            };
        }
        this.searchComponent.search(this.apiUrl, this.pageNow, this.pageSize, order);
    };
    //** Start UC Search **/
    OfficeComponent.prototype.getResult = function (event) {
        console.log(event);
        this.resultData = event.response.returnObject;
        this.totalData = event.response.returnObject.count;
        this.ucgridFooter.pageNow = event.pageNow;
        this.ucgridFooter.totalData = this.totalData;
        this.ucgridFooter.resultData = this.resultData;
    };
    OfficeComponent.prototype.onSelect = function (event) {
        this.pageNow = event.pageNow;
        this.pageSize = event.pageSize;
        this.searchPagination(this.pageNow);
    };
    OfficeComponent.prototype.delete = function (refOfficeId) {
        var _this = this;
        if (confirm("Are you sure to delete this record?")) {
            this.officeObj = new app_shared_model_OfficeObj_model__WEBPACK_IMPORTED_MODULE_5__["OfficeObj"]();
            this.officeObj.refOfficeId = refOfficeId;
            this.httpClient.post(this.deleteUrl, this.officeObj).subscribe(function (response) {
                _this.toastr.successMessage(response['message']);
                _this.searchPagination(1);
            }, function (error) {
                console.log("Error");
                console.log(error);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_shared_UserControl_ucgrid_footer_ucgrid_footer_component__WEBPACK_IMPORTED_MODULE_6__["UCGridFooterComponent"]),
        __metadata("design:type", Object)
    ], OfficeComponent.prototype, "ucgridFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_shared_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]),
        __metadata("design:type", Object)
    ], OfficeComponent.prototype, "searchComponent", void 0);
    OfficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office',
            template: __webpack_require__(/*! ./office.component.html */ "./src/app/office/office.component.html"),
            styles: [__webpack_require__(/*! ./office.component.scss */ "./src/app/office/office.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"], app_components_extra_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_3__["NGXToastrService"]] // add NgbPaginationConfig to the component providers
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], app_components_extra_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_3__["NGXToastrService"]])
    ], OfficeComponent);
    return OfficeComponent;
}());



/***/ }),

/***/ "./src/app/office/office.module.ts":
/*!*****************************************!*\
  !*** ./src/app/office/office.module.ts ***!
  \*****************************************/
/*! exports provided: OfficeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeModule", function() { return OfficeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_office_office_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/office/office.component */ "./src/app/office/office.component.ts");
/* harmony import */ var app_office_office_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/office/office-routing.module */ "./src/app/office/office-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/sharing.module */ "./src/app/shared/sharing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OfficeModule = /** @class */ (function () {
    function OfficeModule() {
    }
    OfficeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_office_office_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfficeRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                app_shared_sharing_module__WEBPACK_IMPORTED_MODULE_5__["SharingModule"]
            ],
            declarations: [
                app_office_office_component__WEBPACK_IMPORTED_MODULE_2__["OfficeComponent"],
            ]
        })
    ], OfficeModule);
    return OfficeModule;
}());



/***/ }),

/***/ "./src/app/shared/model/OfficeObj.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/model/OfficeObj.model.ts ***!
  \*************************************************/
/*! exports provided: OfficeObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeObj", function() { return OfficeObj; });
// Generated by https://quicktype.io
var OfficeObj = /** @class */ (function () {
    function OfficeObj() {
    }
    return OfficeObj;
}());



/***/ })

}]);
//# sourceMappingURL=office-office-module.js.map