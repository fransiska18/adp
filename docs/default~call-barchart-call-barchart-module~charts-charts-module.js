(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~call-barchart-call-barchart-module~charts-charts-module"],{

/***/ "./src/app/call-barchart/call-barchart-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/call-barchart/call-barchart-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CallBarchartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallBarchartRoutingModule", function() { return CallBarchartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _call_barchart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-barchart.component */ "./src/app/call-barchart/call-barchart.component.ts");
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
                path: 'CallBarchart',
                component: _call_barchart_component__WEBPACK_IMPORTED_MODULE_2__["CallBarchartComponent"],
                data: {
                    title: 'Calling Barchart'
                }
            },
        ]
    }
];
var CallBarchartRoutingModule = /** @class */ (function () {
    function CallBarchartRoutingModule() {
    }
    CallBarchartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CallBarchartRoutingModule);
    return CallBarchartRoutingModule;
}());



/***/ }),

/***/ "./src/app/call-barchart/call-barchart.component.html":
/*!************************************************************!*\
  !*** ./src/app/call-barchart/call-barchart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Horizontal Bar Chart Starts-->\r\n      <div class=\"card\">\r\n          <div class=\"card-header\">\r\n              <h6 style=\"color: black\">Top 5 App Input Area Jawa Timur</h6>\r\n          </div>\r\n          <div class=\"card-body\">\r\n              <!-- <div class=\"card-block\"> -->\r\n                  <div id=\"horizontal-bar-chart\" class=\"height-200\" style=\"font-size: 10px\">\r\n                      <ngx-charts-bar-horizontal-2d [scheme]=\"barChartColorScheme\" [results]=\"barChartmulti\" [gradient]=\"barChartGradient\" [xAxis]=\"barChartShowXAxis\"\r\n                          [yAxis]=\"barChartShowYAxis\" [legend]=\"barChartShowLegend\" [showXAxisLabel]=\"barChartShowXAxisLabel\"\r\n                          [showYAxisLabel]=\"barChartShowYAxisLabel\" [xAxisLabel]=\"barChartXAxisLabel\" [yAxisLabel]=\"barChartYAxisLabel\"\r\n                          (select)=\"onSelect($event)\" style=\"font-size: 10px\">\r\n                      </ngx-charts-bar-horizontal-2d>\r\n                  </div>\r\n              <!-- </div> -->\r\n          </div>\r\n      </div>\r\n<!--Horizontal Bar Chart Ends -->"

/***/ }),

/***/ "./src/app/call-barchart/call-barchart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/call-barchart/call-barchart.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGwtYmFyY2hhcnQvY2FsbC1iYXJjaGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/call-barchart/call-barchart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/call-barchart/call-barchart.component.ts ***!
  \**********************************************************/
/*! exports provided: CallBarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallBarchartComponent", function() { return CallBarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_ngxChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/ngxChart */ "./src/app/shared/data/ngxChart.ts");
/* harmony import */ var _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/configs/ngx-charts.config */ "./src/app/shared/configs/ngx-charts.config.ts");
/* harmony import */ var _shared_data_barChartModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/barChartModel */ "./src/app/shared/data/barChartModel.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Object } from 'core-js';
var CallBarchartComponent = /** @class */ (function () {
    function CallBarchartComponent(http) {
        this.http = http;
        this.listBarChartModelObj = new Array();
        this.barChartmulti = _shared_data_ngxChart__WEBPACK_IMPORTED_MODULE_1__["barChartmulti"];
        this.barChartView = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartView"];
        this.barChartShowYAxis = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartShowYAxis"];
        this.barChartShowXAxis = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartShowXAxis"];
        this.barChartGradient = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartGradient"];
        this.barChartShowLegend = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartShowLegend"];
        this.barChartShowXAxisLabel = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartShowXAxisLabel"];
        this.barChartXAxisLabel = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartXAxisLabel"];
        this.barChartShowYAxisLabel = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartShowYAxisLabel"];
        this.barChartYAxisLabel = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartYAxisLabel"];
        this.barChartColorScheme = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_2__["barChartColorScheme"];
    }
    CallBarchartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("./assets/json/example.json").subscribe(function (response) {
            response.forEach(function (item) {
                var barCharObj = new _shared_data_barChartModel__WEBPACK_IMPORTED_MODULE_3__["BarChartModel"]();
                barCharObj.name = item["Year"];
                barCharObj.series.push({ "name": "Interest Amount", "value": item["Interest Amount"] });
                barCharObj.series.push({ "name": "Inventory Amount", "value": item["Inventory Amount"] });
                _this.listBarChartModelObj.push(barCharObj);
            });
            console.log(_this.listBarChartModelObj);
            _this.barChartmulti = _this.listBarChartModelObj;
        }, function (error) {
            console.log(error);
        });
    };
    CallBarchartComponent.prototype.onSelect = function (event) {
        //your code here
    };
    CallBarchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-call-barchart',
            template: __webpack_require__(/*! ./call-barchart.component.html */ "./src/app/call-barchart/call-barchart.component.html"),
            styles: [__webpack_require__(/*! ./call-barchart.component.scss */ "./src/app/call-barchart/call-barchart.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], CallBarchartComponent);
    return CallBarchartComponent;
}());



/***/ }),

/***/ "./src/app/call-barchart/call-barchart.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/call-barchart/call-barchart.module.ts ***!
  \*******************************************************/
/*! exports provided: CallBarchartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallBarchartModule", function() { return CallBarchartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _call_barchart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-barchart-routing.module */ "./src/app/call-barchart/call-barchart-routing.module.ts");
/* harmony import */ var _call_barchart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-barchart.component */ "./src/app/call-barchart/call-barchart.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CallBarchartModule = /** @class */ (function () {
    function CallBarchartModule() {
    }
    CallBarchartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _call_barchart_component__WEBPACK_IMPORTED_MODULE_3__["CallBarchartComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _call_barchart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallBarchartRoutingModule"]
            ],
            declarations: [
                _call_barchart_component__WEBPACK_IMPORTED_MODULE_3__["CallBarchartComponent"]
            ],
        })
    ], CallBarchartModule);
    return CallBarchartModule;
}());



/***/ }),

/***/ "./src/app/shared/configs/ngx-charts.config.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/configs/ngx-charts.config.ts ***!
  \*****************************************************/
/*! exports provided: barChartView, barChartShowXAxis, barChartShowYAxis, barChartGradient, barChartShowLegend, barChartShowXAxisLabel, barChartXAxisLabel, barChartShowYAxisLabel, barChartYAxisLabel, barChartColorScheme, pieChartView, pieChartShowLegend, pieChartColorScheme, pieChartShowLabels, pieChartExplodeSlices, pieChartDoughnut, pieChartGradient, pieChart1ExplodeSlices, pieChart1Doughnut, lineChartView, lineChartShowXAxis, lineChartShowYAxis, lineChartGradient, lineChartShowLegend, lineChartShowXAxisLabel, lineChartXAxisLabel, lineChartShowYAxisLabel, lineChartYAxisLabel, lineChartColorScheme, lineChartAutoScale, lineChartLineInterpolation, areaChartView, areaChartShowXAxis, areaChartShowYAxis, areaChartGradient, areaChartShowLegend, areaChartShowXAxisLabel, areaChartXAxisLabel, areaChartShowYAxisLabel, areaChartYAxisLabel, areaChartColorScheme, areaChartAutoScale, areaChartLineInterpolation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartView", function() { return barChartView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowXAxis", function() { return barChartShowXAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowYAxis", function() { return barChartShowYAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartGradient", function() { return barChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowLegend", function() { return barChartShowLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowXAxisLabel", function() { return barChartShowXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartXAxisLabel", function() { return barChartXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowYAxisLabel", function() { return barChartShowYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartYAxisLabel", function() { return barChartYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartColorScheme", function() { return barChartColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartView", function() { return pieChartView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartShowLegend", function() { return pieChartShowLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartColorScheme", function() { return pieChartColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartShowLabels", function() { return pieChartShowLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartExplodeSlices", function() { return pieChartExplodeSlices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartDoughnut", function() { return pieChartDoughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartGradient", function() { return pieChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChart1ExplodeSlices", function() { return pieChart1ExplodeSlices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChart1Doughnut", function() { return pieChart1Doughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartView", function() { return lineChartView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowXAxis", function() { return lineChartShowXAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowYAxis", function() { return lineChartShowYAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartGradient", function() { return lineChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowLegend", function() { return lineChartShowLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowXAxisLabel", function() { return lineChartShowXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartXAxisLabel", function() { return lineChartXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowYAxisLabel", function() { return lineChartShowYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartYAxisLabel", function() { return lineChartYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartColorScheme", function() { return lineChartColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartAutoScale", function() { return lineChartAutoScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartLineInterpolation", function() { return lineChartLineInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartView", function() { return areaChartView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowXAxis", function() { return areaChartShowXAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowYAxis", function() { return areaChartShowYAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartGradient", function() { return areaChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowLegend", function() { return areaChartShowLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowXAxisLabel", function() { return areaChartShowXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartXAxisLabel", function() { return areaChartXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowYAxisLabel", function() { return areaChartShowYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartYAxisLabel", function() { return areaChartYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartColorScheme", function() { return areaChartColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartAutoScale", function() { return areaChartAutoScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartLineInterpolation", function() { return areaChartLineInterpolation; });
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");

//Bar Chart
var barChartView = [550, 400];
// options
var barChartShowXAxis = true;
var barChartShowYAxis = true;
var barChartGradient = false;
var barChartShowLegend = false;
var barChartShowXAxisLabel = true;
var barChartXAxisLabel = 'Country';
var barChartShowYAxisLabel = true;
var barChartYAxisLabel = 'Population';
var barChartColorScheme = {
    domain: ['#FFB7B2', '#C7CEEA', '#FF586B', '#AAAAAA']
};
//Pie CHart
var pieChartView = [550, 400];
// options
var pieChartShowLegend = false;
var pieChartColorScheme = {
    domain: ['#009DA0', '#FF8D60', '#FF586B', '#AAAAAA']
};
// pie
var pieChartShowLabels = true;
var pieChartExplodeSlices = false;
var pieChartDoughnut = true;
var pieChartGradient = false;
var pieChart1ExplodeSlices = true;
var pieChart1Doughnut = false;
//Line Charts
var lineChartView = [550, 400];
// options
var lineChartShowXAxis = true;
var lineChartShowYAxis = true;
var lineChartGradient = false;
var lineChartShowLegend = false;
var lineChartShowXAxisLabel = true;
var lineChartXAxisLabel = 'Country';
var lineChartShowYAxisLabel = true;
var lineChartYAxisLabel = 'Population';
var lineChartColorScheme = {
    domain: ['#009DA0', '#FF8D60', '#FF586B', '#AAAAAA']
};
// line, area
var lineChartAutoScale = true;
var lineChartLineInterpolation = d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveBasis"];
//Area Charts
var areaChartView = [550, 400];
// options
var areaChartShowXAxis = true;
var areaChartShowYAxis = true;
var areaChartGradient = false;
var areaChartShowLegend = false;
var areaChartShowXAxisLabel = true;
var areaChartXAxisLabel = 'Country';
var areaChartShowYAxisLabel = true;
var areaChartYAxisLabel = 'Population';
var areaChartColorScheme = {
    domain: ['#FF8D60', '#FF586B', '#1CBCD8', '#AAAAAA']
};
// line, area
var areaChartAutoScale = true;
var areaChartLineInterpolation = d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveBasis"];


/***/ }),

/***/ "./src/app/shared/data/barChartModel.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/data/barChartModel.ts ***!
  \**********************************************/
/*! exports provided: BarChartModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartModel", function() { return BarChartModel; });
var BarChartModel = /** @class */ (function () {
    function BarChartModel() {
        this.series = new Array();
    }
    return BarChartModel;
}());



/***/ }),

/***/ "./src/app/shared/data/ngxChart.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/data/ngxChart.ts ***!
  \*****************************************/
/*! exports provided: barChartSingle, barChartmulti, pieChartSingle, pieChartmulti, lineChartSingle, lineChartMulti, areaChartSingle, areaChartMulti */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartSingle", function() { return barChartSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartmulti", function() { return barChartmulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartSingle", function() { return pieChartSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartmulti", function() { return pieChartmulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartSingle", function() { return lineChartSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartMulti", function() { return lineChartMulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartSingle", function() { return areaChartSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartMulti", function() { return areaChartMulti; });
//Bar chart Data
var barChartSingle = [
    {
        "name": "Germany",
        "value": 894
    },
    {
        "name": "USA",
        "value": 500
    },
    {
        "name": "France",
        "value": 720
    },
    {
        "name": "Australia",
        "value": 650
    }
];
var barChartmulti = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 730
            },
            {
                "name": "2011",
                "value": 894
            }
        ]
    },
    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 787
            },
            {
                "name": "2011",
                "value": 827
            }
        ]
    },
    {
        "name": "France",
        "series": [
            {
                "name": "2010",
                "value": 500
            },
            {
                "name": "2011",
                "value": 580
            }
        ]
    },
    {
        "name": "Australia",
        "series": [
            {
                "name": "2010",
                "value": 600
            },
            {
                "name": "2011",
                "value": 650
            }
        ]
    }
];
//Pie chart Data
var pieChartSingle = [
    {
        "name": "Germany",
        "value": 894
    },
    {
        "name": "USA",
        "value": 500
    },
    {
        "name": "France",
        "value": 720
    }
];
var pieChartmulti = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 730
            },
            {
                "name": "2011",
                "value": 894
            }
        ]
    },
    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 787
            },
            {
                "name": "2011",
                "value": 827
            }
        ]
    },
    {
        "name": "France",
        "series": [
            {
                "name": "2010",
                "value": 500
            },
            {
                "name": "2011",
                "value": 580
            }
        ]
    }
];
//Line Chart
var lineChartSingle = [
    {
        "name": "Germany",
        "value": 894
    },
    {
        "name": "USA",
        "value": 500
    },
    {
        "name": "France",
        "value": 720
    }
];
var lineChartMulti = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 700
            },
            {
                "name": "2011",
                "value": 750
            },
            {
                "name": "2012",
                "value": 775
            },
            {
                "name": "2013",
                "value": 725
            },
            {
                "name": "2014",
                "value": 750
            },
            {
                "name": "2015",
                "value": 800
            },
            {
                "name": "2016",
                "value": 860
            }
        ]
    },
    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 650
            },
            {
                "name": "2011",
                "value": 800
            },
            {
                "name": "2012",
                "value": 705
            },
            {
                "name": "2013",
                "value": 750
            },
            {
                "name": "2014",
                "value": 850
            },
            {
                "name": "2015",
                "value": 875
            },
            {
                "name": "2016",
                "value": 730
            }
        ]
    },
    {
        "name": "France",
        "series": [
            {
                "name": "2010",
                "value": 660
            },
            {
                "name": "2011",
                "value": 720
            },
            {
                "name": "2012",
                "value": 680
            },
            {
                "name": "2013",
                "value": 675
            },
            {
                "name": "2014",
                "value": 700
            },
            {
                "name": "2015",
                "value": 680
            },
            {
                "name": "2016",
                "value": 690
            }
        ]
    }
];
//Area Chart
var areaChartSingle = [
    {
        "name": "Germany",
        "value": 894
    },
    {
        "name": "USA",
        "value": 500
    },
    {
        "name": "France",
        "value": 720
    }
];
var areaChartMulti = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 700
            },
            {
                "name": "2011",
                "value": 670
            },
            {
                "name": "2012",
                "value": 825
            },
            {
                "name": "2013",
                "value": 725
            },
            {
                "name": "2014",
                "value": 750
            },
            {
                "name": "2015",
                "value": 800
            },
            {
                "name": "2016",
                "value": 860
            }
        ]
    },
    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 650
            },
            {
                "name": "2011",
                "value": 800
            },
            {
                "name": "2012",
                "value": 705
            },
            {
                "name": "2013",
                "value": 750
            },
            {
                "name": "2014",
                "value": 850
            },
            {
                "name": "2015",
                "value": 875
            },
            {
                "name": "2016",
                "value": 730
            }
        ]
    },
];


/***/ })

}]);
//# sourceMappingURL=default~call-barchart-call-barchart-module~charts-charts-module.js.map