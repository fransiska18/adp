(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~call-gaugechart-call-gaugechart-module~charts-charts-module"],{

/***/ "./src/app/call-gaugechart/call-gaugechart-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/call-gaugechart/call-gaugechart-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CallGaugechartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallGaugechartRoutingModule", function() { return CallGaugechartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _call_gaugechart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-gaugechart.component */ "./src/app/call-gaugechart/call-gaugechart.component.ts");
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
                path: 'CallGaugechart',
                component: _call_gaugechart_component__WEBPACK_IMPORTED_MODULE_2__["CallGaugechartComponent"],
                data: {
                    title: 'Calling Gaugechart'
                }
            },
        ]
    }
];
var CallGaugechartRoutingModule = /** @class */ (function () {
    function CallGaugechartRoutingModule() {
    }
    CallGaugechartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CallGaugechartRoutingModule);
    return CallGaugechartRoutingModule;
}());



/***/ }),

/***/ "./src/app/call-gaugechart/call-gaugechart.component.html":
/*!****************************************************************!*\
  !*** ./src/app/call-gaugechart/call-gaugechart.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <h6 style=\"text-align: center ; margin-top: 25px ; color: black\">4Gauge Chart</h6>\r\n\r\n    <div class=\"row\" style=\"margin-bottom: 0px; padding: 0px\">\r\n        <div class=\"col-sm-6 col-sm-auto\">\r\n            <div id=\"isi\" style=\"text-align: center ; color: black ; font-size: 8px\">Target = </div>>\r\n            <div id=\"donut-chart-target\" style=\"height: 75px;\">\r\n                <x-chartist [data]=\"donutChart1.data\" [type]=\"donutChart1.type\"\r\n                    [options]=\"donutChart1.options\" [responsiveOptions]=\"donutChart1.responsiveOptions\"\r\n                    [events]=\"donutChart1.events\">\r\n                </x-chartist>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-sm-auto\">\r\n            <div id=\"isi\" style=\"text-align: center ; color: black ; font-size: 8px\">Montly Avg. = </div>>\r\n            <div id=\"donut-chart-monthly\" style=\"height: 75px;\">\r\n                <x-chartist [data]=\"donutChart2.data\" [type]=\"donutChart2.type\"\r\n                    [options]=\"donutChart2.options\" [responsiveOptions]=\"donutChart2.responsiveOptions\"\r\n                    [events]=\"donutChart2.events\" style=\"font-size:10px\">\r\n                 </x-chartist>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-bottom: 0px; padding: 0px\">\r\n        <div class=\"col-sm-6 col-sm-auto\">\r\n            <div id=\"isi\" style=\"text-align: center ; color: black ; font-size: 8px\">Branch Avg. = </div>>\r\n            <div id=\"donut-chart-branch\" style=\"height: 75px;\">\r\n                <x-chartist [data]=\"donutChart3.data\" [type]=\"donutChart3.type\"\r\n                            [options]=\"donutChart3.options\" [responsiveOptions]=\"donutChart3.responsiveOptions\"\r\n                            [events]=\"donutChart3.events\">\r\n                </x-chartist>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-sm-auto\">\r\n            <div id=\"isi\" style=\"text-align: center ; color: black ; font-size: 8px\">National Avg. = </div>>\r\n            <div id=\"donut-chart-national\" style=\"height: 75px;\">\r\n                <x-chartist [data]=\"donutChart4.data\" [type]=\"donutChart4.type\"\r\n                            [options]=\"donutChart4.options\" [responsiveOptions]=\"donutChart4.responsiveOptions\"\r\n                            [events]=\"donutChart4.events\" style=\"font-size:10px\">\r\n                </x-chartist>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"card\">\r\n    <h4 class=\"card-title\" style=\"text-align: center ; margin-top: 25px\">4Gauge Chart</h4>\r\n    <div class=\"row\" style=\"margin-bottom: 0px; padding: 0px\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card-header\">\r\n                <h6 style=\"text-align: center\">Target = </h6>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"donut-chart-target\" class=\"height-10\">\r\n                        <x-chartist [data]=\"donutChart1.data\" [type]=\"donutChart1.type\"\r\n                            [options]=\"donutChart1.options\" [responsiveOptions]=\"donutChart1.responsiveOptions\"\r\n                            [events]=\"donutChart1.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card-header\">\r\n                <h6 style=\"text-align: center\">Montly Avg. = </h6>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"donut-chart-monthly\" class=\"height-10\">\r\n                        <x-chartist [data]=\"donutChart2.data\" [type]=\"donutChart2.type\"\r\n                            [options]=\"donutChart2.options\" [responsiveOptions]=\"donutChart2.responsiveOptions\"\r\n                            [events]=\"donutChart2.events\" style=\"font-size:10px\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card-header\">\r\n                <h6 style=\"text-align: center\">Branch Avg. = </h6>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"donut-chart-branch\" class=\"height-10\">\r\n                        <x-chartist [data]=\"donutChart3.data\" [type]=\"donutChart3.type\"\r\n                            [options]=\"donutChart3.options\" [responsiveOptions]=\"donutChart3.responsiveOptions\"\r\n                            [events]=\"donutChart3.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card-header\">\r\n                <h6 style=\"text-align: center\">National Avg. = </h6>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"donut-chart-national\" class=\"height-10\">\r\n                        <x-chartist [data]=\"donutChart4.data\" [type]=\"donutChart4.type\"\r\n                            [options]=\"donutChart4.options\" [responsiveOptions]=\"donutChart4.responsiveOptions\"\r\n                            [events]=\"donutChart4.events\" style=\"font-size:10px\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/call-gaugechart/call-gaugechart.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/call-gaugechart/call-gaugechart.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-slice-donut, .ct-slice-pie {\n  stroke: #f8aeae; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbC1nYXVnZWNoYXJ0L0Q6XFxCU0ErIEhJVExcXEJTQSBnaXRodWJcXGFkcC9zcmNcXGFwcFxcY2FsbC1nYXVnZWNoYXJ0XFxjYWxsLWdhdWdlY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBMEIsRUFFN0IiLCJmaWxlIjoic3JjL2FwcC9jYWxsLWdhdWdlY2hhcnQvY2FsbC1nYXVnZWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LXNsaWNlLWRvbnV0LCAuY3Qtc2xpY2UtcGllIHtcclxuICAgIHN0cm9rZTogcmdiKDI0OCwgMTc0LCAxNzQpO1xyXG5cclxufVxyXG5cclxuLy8gOmhvc3QgL2RlZXAvIC5jdC1zbGljZS10YXJnZXQge1xyXG4vLyAgICAgc3Ryb2tlOiB5ZWxsb3c7XHJcbi8vIH1cclxuXHJcbi8vICNkb251dC1jaGFydC10YXJnZXR7XHJcbi8vICAgICBjb2xvcjogcmVkO1xyXG4vLyB9XHJcblxyXG4vLyAjZG9udXQtY2hhcnQtbW9udGhseXtcclxuLy8gICAgIC8vc3Ryb2tlOnJlZDtcclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/call-gaugechart/call-gaugechart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/call-gaugechart/call-gaugechart.component.ts ***!
  \**************************************************************/
/*! exports provided: CallGaugechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallGaugechartComponent", function() { return CallGaugechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var data = __webpack_require__(/*! ../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var CallGaugechartComponent = /** @class */ (function () {
    // Gauge using donut Chart 1 Ends
    function CallGaugechartComponent() {
        // Gauge using donut Chart 1 Starts
        this.donutChart1 = {
            type: 'Pie',
            data: data['donutTarget'],
            options: {
                donut: true,
                donutWidth: 10,
                startAngle: 225,
                total: 133,
                showLabel: true,
            },
        };
        this.donutChart2 = {
            type: 'Pie',
            data: data['donutMonthly'],
            options: {
                donut: true,
                donutWidth: 10,
                startAngle: 225,
                total: 133,
                showLabel: true,
            },
        };
        this.donutChart3 = {
            type: 'Pie',
            data: data['donutBranch'],
            options: {
                donut: true,
                donutWidth: 10,
                startAngle: 225,
                total: 133,
                showLabel: true,
            },
        };
        this.donutChart4 = {
            type: 'Pie',
            data: data['donutNational'],
            options: {
                donut: true,
                donutWidth: 10,
                startAngle: 225,
                total: 133,
                showLabel: true,
            },
        };
    }
    CallGaugechartComponent.prototype.onSelect = function (event) {
        //your code here
    };
    CallGaugechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-call-gaugechart',
            template: __webpack_require__(/*! ./call-gaugechart.component.html */ "./src/app/call-gaugechart/call-gaugechart.component.html"),
            styles: [__webpack_require__(/*! ./call-gaugechart.component.scss */ "./src/app/call-gaugechart/call-gaugechart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CallGaugechartComponent);
    return CallGaugechartComponent;
}());



/***/ }),

/***/ "./src/app/call-gaugechart/call-gaugechart.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/call-gaugechart/call-gaugechart.module.ts ***!
  \***********************************************************/
/*! exports provided: CallGaugechartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallGaugechartModule", function() { return CallGaugechartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _call_gaugechart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-gaugechart-routing.module */ "./src/app/call-gaugechart/call-gaugechart-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _call_gaugechart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-gaugechart.component */ "./src/app/call-gaugechart/call-gaugechart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CallGaugechartModule = /** @class */ (function () {
    function CallGaugechartModule() {
    }
    CallGaugechartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            //di-exports -> komponen yang diijinkan untuk bisa diakses oleh komponen lain
            exports: [
                _call_gaugechart_component__WEBPACK_IMPORTED_MODULE_4__["CallGaugechartComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                _call_gaugechart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallGaugechartRoutingModule"]
            ],
            declarations: [
                _call_gaugechart_component__WEBPACK_IMPORTED_MODULE_4__["CallGaugechartComponent"]
            ],
        })
    ], CallGaugechartModule);
    return CallGaugechartModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~call-gaugechart-call-gaugechart-module~charts-charts-module.js.map