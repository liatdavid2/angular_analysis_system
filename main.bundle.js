webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activity-graph/activity-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\r\n\r\n  <div class=\"example-sidenav-content\" style=\"z-index:10000;    float: right;\">\r\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n\r\n    </button>\r\n  </div>\r\n  <div #containerScatterGraph></div>\r\n\r\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" opened=\"true\" position=\"end\">\r\n    <p matLine>\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n\r\n        <mat-icon class=\"icon_marging_left\">more_vert</mat-icon>\r\n      </button>\r\n    </p>\r\n    <p matLine>\r\n      <mat-menu #menu=\"matMenu\">\r\n\r\n        <button mat-menu-item (click)=\"measureDistance()\">\r\n          <span>Measure Distance</span>\r\n        </button>\r\n\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n          <span>Change Map</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,3)\">\r\n          <span>Center map about a selected point</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n          <span>Lasso</span>\r\n        </button>\r\n        <hr>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"menu2\">\r\n          <span>Lasso - Options and filters</span>\r\n          <mat-menu #menu2=\"matMenu\">\r\n\r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,6)\">\r\n              <span>Create cluster based on selected elements</span>\r\n            </button>\r\n\r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n              <span>Highlight</span>\r\n          </button>\r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n              <span>Open in a map</span>\r\n            </button>\r\n\r\n\r\n\r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n              <span>High-Light</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n              <span>Remove from cluster</span>\r\n            </button>\r\n          </mat-menu>\r\n\r\n\r\n        </button>\r\n        <hr>\r\n        <button mat-menu-item (click)=\"loadselectedfromtable()\">\r\n          <span>load selected points</span>\r\n        </button>\r\n\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n          <span>Add Textual Annotation</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n          <span>Delete Textual Annotation</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n          <span>Draw Silde</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n          <span>Report</span>\r\n        </button>\r\n\r\n      </mat-menu>\r\n\r\n      <span> {{clusterView}} </span>\r\n\r\n    </p>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n         \r\n          <button (click)=\"getNextPageFromServer()\">>></button>\r\n          <button (click)=\"getPrevPageFromServer()\">\r\n            <<</button>\r\n              <label class=\"colorWhite\">{{startServerPage}} - {{endServerPage}} first result</label>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </mat-drawer>\r\n\r\n\r\n\r\n</mat-drawer-container>\r\n\r\n\r\n<mat-sidenav-container>\r\n  <mat-sidenav #sidenav2>\r\n\r\n  </mat-sidenav>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/activity-graph/activity-graph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorWhite {\n  color: white; }\n\n.mat-drawer {\n  background-color: #193061;\n  background-color: #49474a;\n  color: rgba(0, 0, 0, 0.87);\n  width: 200px;\n  background: #290940; }\n\n.icon_marging_left {\n  color: white; }\n\n.mat-button {\n  color: white; }\n\n.example-sidenav-content {\n  background: #2c2c2e; }\n\n/deep/.mat-drawer-content {\n  background: #2c2c2e;\n  overflow-x: hidden; }\n\n.mat-drawer-container {\n  background: #2c2c2e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-graph/activity-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_ScatterGraph_service__ = __webpack_require__("../../../../../src/app/shared/services/ScatterGraph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_classes_GraphTheme__ = __webpack_require__("../../../../../src/app/shared/classes/GraphTheme.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityGraphComponent = ActivityGraphComponent_1 = (function () {
    function ActivityGraphComponent(_ScatterGraphService) {
        this._ScatterGraphService = _ScatterGraphService;
        this.startServerPage = 0;
        this.endServerPage = 100000;
    }
    ActivityGraphComponent.prototype.ngOnInit = function () {
        console.log(this.CluserId);
        // var n = 100000;
        //this.data = this.getData(n);
    };
    ActivityGraphComponent.prototype.getPrevPageFromServer = function () {
        var self = this;
        this._ScatterGraphService;
        if (this.startServerPage != 0) {
            this.startServerPage -= 100000;
            this.endServerPage -= 100000;
            this.chart2.series[0].update({
                //data: res,
                type: 'scatter',
                color: 'rgb(152, 0, 67)',
                marker: {
                    radius: 2
                }
            });
        }
    };
    ActivityGraphComponent.prototype.updateStartEndServerPage = function () {
        this.startServerPage += 100000;
        this.endServerPage += 100000;
    };
    ActivityGraphComponent.prototype.getNextPageFromServer = function () {
        var selfNext = this;
        this.startServerPage += 100000;
        this.endServerPage += 100000;
        this.chart2.series[0].update({
            name: ' no more data',
            data: []
        });
        this.startServerPage -= 100000;
        this.endServerPage -= 100000;
    };
    ActivityGraphComponent.prototype.changeGraphYAxisDate = function () {
        this.chart2.series[0].update({
            data: [1417680117775, 1417680119040]
        });
        this.chart2.yAxis[0].update({
            type: 'datetime',
            categories: null,
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%d:%m:%Y', this.value);
                }
            },
        });
        this.chart2.tooltip.update({
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.y))
                    + '  <br/>' + new Date(this.x) + ' K.';
            }
        });
    };
    ActivityGraphComponent.prototype.changeGraphYAxisNumber = function () {
        var _this = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            console.log(res);
            _this.chart2.series[0].update({
                data: res,
            });
            _this.chart2.yAxis[0].update({
                type: 'linear',
                categories: null,
            });
            _this.chart2.yAxis[0].setTitle({
                text: 'New y axis title'
            });
            if (_this.chart2.xAxis[0].userOptions.type === "datetime") {
                console.log("this.chart2.xAxis[0].type==='datetime'");
                _this.handleAxis_x_Datetime(res);
                _this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.x))
                            + '  <br/>' + this.y;
                    }
                });
            }
            else
                _this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' + this.x + ' K.'
                            + '  <br/>' + this.y + ' K.';
                    }
                });
        });
    };
    ActivityGraphComponent.prototype.handleAxis_x_Datetime = function (res) {
        this.chart2.series[0].update({
            data: res,
            pointStart: Date.UTC(2012, 2, 30),
            pointInterval: 60 * 1000,
        });
    };
    ActivityGraphComponent.prototype.changeGraphAxisYCatagory = function () {
        var _this = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            ActivityGraphComponent_1.selectElementX = "Catagory";
            var arr = [];
            var i, x;
            for (var i_1 = 0; i_1 < 100000; i_1++) {
                arr.push("catagory" + i_1);
            }
            console.log(arr);
            _this.chart2.yAxis[0].update({
                type: 'category',
                categories: arr
            });
            if (_this.chart2.xAxis[0].userOptions.type === "datetime") {
                _this.handleAxis_x_Datetime(res);
            }
            else
                _this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>'
                            + this.point.series.yAxis.categories[this.y] + '<br/>' + this.x + ' K.';
                    }
                });
        });
    };
    ActivityGraphComponent.prototype.Axis_Y_TypeTooltipFormater = function () {
        console.log(this.chart2);
        switch (this.chart2.yAxis[0].userOptions.type) {
            case "datetime": {
                this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>'
                            + this.point.series.xAxis.categories[this.key] + '<br/>'
                            + Highcharts.dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.y)) + ' K.';
                    }
                });
                break;
            }
            case "category": {
                this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>'
                            + this.point.series.xAxis.categories[this.key] + '<br/>'
                            + this.point.series.yAxis.categories[this.key] + ' K.';
                    }
                });
                break;
            }
            case "linear": {
                this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>'
                            + this.point.series.xAxis.categories[this.key] + '<br/>'
                            + this.y + ' K.';
                    }
                });
                break;
            }
        }
    };
    ActivityGraphComponent.prototype.changeGraphAxisXCatagory = function () {
        var _this = this;
        var self = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            ActivityGraphComponent_1.selectElementX = "Number";
            var arr = [];
            var i, x;
            for (var i_2 = 0; i_2 < 100000; i_2++) {
                arr.push("catagory" + i_2);
            }
            console.log(arr);
            _this.chart2.xAxis[0].update({
                type: 'category',
                categories: arr
            });
            _this.chart2.series[0].update({
                //  data: res,
                pointStart: 0,
                pointInterval: 1
            });
            self.Axis_Y_TypeTooltipFormater();
        });
    };
    ActivityGraphComponent.prototype.changeGraphAxisXDate = function () {
        var _this = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            ActivityGraphComponent_1.selectElementX = "Date";
            _this.chart2.xAxis[0].update({
                type: 'datetime',
                categories: null,
            });
            _this.chart2.series[0].update({
                // data: res,
                pointStart: Date.UTC(2012, 2, 30),
                pointInterval: 60 * 1000,
            });
            _this.chart2.tooltip.update({
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.x))
                        + '  <br/>' + this.y + ' K.';
                }
            });
        });
    };
    ActivityGraphComponent.prototype.changeGraphXAxis = function () {
        var _this = this;
        this._ScatterGraphService.getData()
            .subscribe(function (res) {
            console.log(res);
            _this.chart2.series[0].update({
                pointStart: 0,
                pointInterval: 1
            });
            _this.chart2.xAxis[0].update({
                type: 'linear',
                categories: null,
            });
            _this.chart2.xAxis[0].setTitle({
                text: 'New x axis title'
            });
            _this.chart2.tooltip.update({
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' + this.x + ' K.'
                        + '  <br/>' + this.y + ' K.';
                }
            });
        });
    };
    /*getData(n) {
      var arr = [];
      let i,x;
   
     for(let i=0;i<n;i++)
     {
      arr.push(i);
     }
     console.log(arr)
      return arr;
  }*/
    ActivityGraphComponent.prototype.ngOnChanges = function (changes) {
        if (this.drawer !== undefined) {
            this.drawer.open();
        }
        if (this.chart2 !== undefined) {
            this.chart2.setSize(this.chartWidth, this.chartHeight);
        }
    };
    ActivityGraphComponent.prototype.addHighchartsTheme = function () {
        this._GraphTheme = new __WEBPACK_IMPORTED_MODULE_2__shared_classes_GraphTheme__["a" /* GraphTheme */]();
        Highcharts.theme = this._GraphTheme.addHighchartsTheme();
        Highcharts.setOptions(Highcharts.theme);
    };
    ActivityGraphComponent.prototype.ngAfterViewInit = function () {
        this.addHighchartsTheme();
        this.chart2 = Highcharts.chart(this.containerScatterGraph.nativeElement, {
            chart: {
                type: 'xrange',
                styledMode: true,
                zoomType: 'xy',
                width: this.chartWidth,
                height: this.chartHeight,
            },
            exporting: { enabled: false },
            title: {
                text: 'Activity Graph'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: ''
                },
                categories: ['Project 1', 'Project 2', 'Project 3'],
                reversed: true
            },
            series: [{
                    name: 'Project 1',
                    pointWidth: 20,
                    data: [{
                            x: 1516199002000,
                            x2: 1516199111000,
                            y: 0,
                        }, {
                            x: 1516199167000,
                            x2: 1516199567500,
                            y: 1,
                        },
                        {
                            x: 1516199567500,
                            x2: 1516199667500,
                            y: 2,
                        },
                        {
                            x: 1516199002000,
                            x2: 1516199311000,
                            y: 2,
                        },
                        {
                            x: 1516199367500,
                            x2: 1516199667500,
                            y: 0,
                        }
                    ]
                }],
        });
    };
    return ActivityGraphComponent;
}());
ActivityGraphComponent.selectElementX = 'Date';
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ActivityGraphComponent.prototype, "chartWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ActivityGraphComponent.prototype, "chartHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ActivityGraphComponent.prototype, "CluserId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('containerScatterGraph'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ActivityGraphComponent.prototype, "containerScatterGraph", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('drawer'),
    __metadata("design:type", Object)
], ActivityGraphComponent.prototype, "drawer", void 0);
ActivityGraphComponent = ActivityGraphComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'activity-graph',
        template: __webpack_require__("../../../../../src/app/activity-graph/activity-graph.component.html"),
        styles: [__webpack_require__("../../../../../src/app/activity-graph/activity-graph.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_ScatterGraph_service__["a" /* ScatterGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_ScatterGraph_service__["a" /* ScatterGraphService */]) === "function" && _b || Object])
], ActivityGraphComponent);

var ActivityGraphComponent_1, _a, _b;
//# sourceMappingURL=activity-graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app {\n  height: 1000px;\n  width: 100%;\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_gridster_module__ = __webpack_require__("../../../../../src/lib/gridster.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_inputs__ = __webpack_require__("../../../../@progress/kendo-angular-inputs/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pie_chart_pie_chart_component__ = __webpack_require__("../../../../../src/app/pie-chart/pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__histogram_graph_histogram_graph_component__ = __webpack_require__("../../../../../src/app/histogram-graph/histogram-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_table_service__ = __webpack_require__("../../../../../src/app/shared/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_CListService_service__ = __webpack_require__("../../../../../src/app/shared/services/CListService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_SharedService_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_ScatterGraph_service__ = __webpack_require__("../../../../../src/app/shared/services/ScatterGraph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_user_login_service__ = __webpack_require__("../../../../../src/app/shared/services/user-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_guards_user_login_guard_guard__ = __webpack_require__("../../../../../src/app/shared/guards/user-login-guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__table_reusing_data_items_table_reusing_data_items_component__ = __webpack_require__("../../../../../src/app/table-reusing-data-items/table-reusing-data-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__report_nice_edit_report_nice_edit_component__ = __webpack_require__("../../../../../src/app/report-nice-edit/report-nice-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__start_page_start_page_component__ = __webpack_require__("../../../../../src/app/start-page/start-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_shared_services_clusterTable_service__ = __webpack_require__("../../../../../src/app/shared/services/clusterTable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__session_page_session_page_component__ = __webpack_require__("../../../../../src/app/session-page/session-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__clusters_page_clusters_page_component__ = __webpack_require__("../../../../../src/app/clusters-page/clusters-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_Pipes_FilterPipe__ = __webpack_require__("../../../../../src/app/shared/Pipes/FilterPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_app_shared_services_sessions_service__ = __webpack_require__("../../../../../src/app/shared/services/sessions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_app_shared_services_clusters_service__ = __webpack_require__("../../../../../src/app/shared/services/clusters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__time_angle_graph500_k_time_angle_graph500_k_component__ = __webpack_require__("../../../../../src/app/time-angle-graph500-k/time-angle-graph500-k.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_services_user_register_service__ = __webpack_require__("../../../../../src/app/shared/services/user-register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__table_from_server_table_from_server_component__ = __webpack_require__("../../../../../src/app/table-from-server/table-from-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_services_SharedServiceMapTableGraphs_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedServiceMapTableGraphs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pop_up_dialog_pop_up_dialog_component__ = __webpack_require__("../../../../../src/app/pop-up-dialog/pop-up-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__activity_graph_activity_graph_component__ = __webpack_require__("../../../../../src/app/activity-graph/activity-graph.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { QuillEditorModule } from 'ngx-quill-editor';




























var appRouts = [{ path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_23__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_23__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'Clusters', component: __WEBPACK_IMPORTED_MODULE_28__start_page_start_page_component__["a" /* StartPageComponent */] },
    { path: 'Register', component: __WEBPACK_IMPORTED_MODULE_36__register_register_component__["a" /* RegisterComponent */] }];
//,
//  canActivate:[UserLoginGuardGuard]},
// {path:'',component:LoginFormComponent}]
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pie_chart_pie_chart_component__["a" /* PieChartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__histogram_graph_histogram_graph_component__["a" /* HistogramGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_18__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_23__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_26__table_reusing_data_items_table_reusing_data_items_component__["a" /* TableReusingDataItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__report_nice_edit_report_nice_edit_component__["a" /* ReportNiceEditComponent */],
            __WEBPACK_IMPORTED_MODULE_28__start_page_start_page_component__["a" /* StartPageComponent */],
            __WEBPACK_IMPORTED_MODULE_30__session_page_session_page_component__["a" /* SessionPageComponent */],
            __WEBPACK_IMPORTED_MODULE_31__clusters_page_clusters_page_component__["a" /* ClustersPageComponent */],
            __WEBPACK_IMPORTED_MODULE_32__shared_Pipes_FilterPipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_35__time_angle_graph500_k_time_angle_graph500_k_component__["a" /* TimeAngleGraph500KComponent */],
            __WEBPACK_IMPORTED_MODULE_36__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_38__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_39__table_from_server_table_from_server_component__["a" /* TableFromServerComponent */],
            __WEBPACK_IMPORTED_MODULE_41__pop_up_dialog_pop_up_dialog_component__["a" /* PopUpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_42__activity_graph_activity_graph_component__["a" /* ActivityGraphComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientJsonpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_9__lib_gridster_module__["a" /* GridsterModule */], __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_grid__["a" /* ExcelModule */], __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_dialog__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_buttons__["b" /* ButtonsModule */], __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_grid__["c" /* GridModule */], __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_inputs__["c" /* SliderModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_stepper__["b" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_dialog__["b" /* WindowModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */].forRoot(appRouts, { useHash: true }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__shared_services_table_service__["a" /* Tableservice */], __WEBPACK_IMPORTED_MODULE_22__shared_services_ScatterGraph_service__["a" /* ScatterGraphService */], __WEBPACK_IMPORTED_MODULE_20__shared_services_CListService_service__["a" /* CListService */], __WEBPACK_IMPORTED_MODULE_21__shared_services_SharedService_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_24__shared_services_user_login_service__["a" /* UserLoginService */],
            __WEBPACK_IMPORTED_MODULE_25__shared_guards_user_login_guard_guard__["a" /* UserLoginGuardGuard */], __WEBPACK_IMPORTED_MODULE_34_app_shared_services_clusters_service__["a" /* ClustersService */], __WEBPACK_IMPORTED_MODULE_29_app_shared_services_clusterTable_service__["a" /* clusterTable */], __WEBPACK_IMPORTED_MODULE_33_app_shared_services_sessions_service__["a" /* SessionsService */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatStepperIntl */], __WEBPACK_IMPORTED_MODULE_37__shared_services_user_register_service__["a" /* UserRegisterService */],
            __WEBPACK_IMPORTED_MODULE_40__shared_services_SharedServiceMapTableGraphs_service__["a" /* SharedServiceMapTableGraphs */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clusters-page/clusters-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contentBG\">\r\n    <div class=\"row SubTitleBlackBg\">\r\n        <h4 class=\"col-sm-2\">Select cluster:</h4>\r\n        <div class=\"col-sm-6\"></div>\r\n        <!--search cluster -->\r\n        <div class=\"col-sm-4\">\r\n            <input class=\"searchTextInput\" [(ngModel)]=\"searchText\" placeholder=\"enter search term here\">\r\n        </div>\r\n        <!--end search cluster -->\r\n    </div>\r\n<!--Rename free cluster name Dialog-->\r\n    <kendo-window title=\"Please Rename cluster\" *ngIf=\"RenameDialogOpened\" (close)=\"RenameDialogClose()\" [minWidth]=\"250\" [width]=\"450\">\r\n        <form class=\"k-form\" ref=\"form\">\r\n\r\n            <label class=\"k-form-field\">\r\n                <input class=\"k-textbox\" placeholder=\"Enter cluster Name\" #clusterTextBox />\r\n            </label>\r\n\r\n            <div class=\"text-right\">\r\n                <button type=\"button\" class=\"k-button grayBtn\" (click)=\"RenameDialogClose()\">Cancel</button>\r\n                <button type=\"button\" class=\"k-button k-primary grayBtn\" \r\n                (click)=\"RenameDialogSubmit(clusterTextBox,$event)\">Submit</button>\r\n            </div>\r\n        </form>\r\n    </kendo-window>\r\n<!--end Rename free cluster name Dialog-->\r\n    <div class=\"row\">\r\n<!-- print all free clusters-->\r\n        <div class=\"col-sm-2 col-md-3   col-xl-1 col-lg-2 text-center\" *ngFor=\"let CLUSTER of CLUSTERS |async | filter : 'CLUSTER_NAME' : searchText\"\r\n           >\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"MenuBtnWhite\">\r\n                        <mat-icon>more_vert</mat-icon>\r\n                    </button>\r\n                    <mat-menu #menu=\"matMenu\">\r\n                        <button mat-menu-item class=\"MenuBtn\" (click)=\"DeleteCluster(CLUSTER)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                            <span>delete</span>\r\n                        </button>\r\n                        <button mat-menu-item class=\"MenuBtn\" (click)=\"RenameDialogOpen(CLUSTER)\">\r\n                            <mat-icon>dialpad</mat-icon>\r\n                            <span>rename</span>\r\n                        </button>\r\n                    </mat-menu>\r\n                </div>\r\n                <div class=\"col-sm-8\"  (click)=\"Select(CLUSTER)\">\r\n                    <img class=\"iconSize\"  src={{CLUSTER.CLUSTER_Image}} >\r\n                </div>\r\n                <div class=\"col-sm-4\"></div>\r\n                <div class=\"col-sm-8\">\r\n                    <h5>{{CLUSTER.CLUSTER_NAME}}</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n        <!--end print all free clusters-->\r\n        <!--button mat-button matStepperNext class=\"grayBtn\">Next</button-->\r\n        <button (click)=\"StartEdit()\" class=\"grayBtn\">Start Edit</button>\r\n\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/clusters-page/clusters-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu_Color {\n  background: #151f25;\n  height: 95px; }\n\n.fillPageHight {\n  height: 100%; }\n\n.fillPageHight2 {\n  height: 100%; }\n\n.contentBG {\n  background: #303b48;\n  /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  /* For Opera 11.1 to 12.0 */\n  /* For Firefox 3.6 to 15 */\n  background: linear-gradient(#4e5f74, black);\n  /* Standard syntax (must be last) */\n  box-shadow: inset -1px 14px 10px -8px rgba(0, 0, 0, 0.75);\n  background: linear-gradient(#4e5f74, black);\n  box-shadow: inset 20px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  box-shadow: inset -13px 13px 10px -8px rgba(0, 0, 0, 0.75); }\n\n.SideBarBG {\n  background-color: #28333c;\n  /* background: linear-gradient(to right, #3e4a59, black); */\n  box-shadow: inset -1px 14px 10px -8px rgba(0, 0, 0, 0.75); }\n\n.headline {\n  height: 45px;\n  background: black;\n  width: 100%; }\n\n.col-sm-12 {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 20px 18px 17px -8px rgba(0, 0, 0, 0.75); }\n\n.img-fluid, .img-fluid-right, .img-fluid-left {\n  max-width: 100%;\n  max-height: 100%; }\n\n.img-fluid-right {\n  float: right; }\n\n.img-fluid-left {\n  float: left; }\n\nh4 {\n  color: white;\n  margin-bottom: auto;\n  margin-top: auto; }\n\n.SubTitleBlackBg {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 20px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  margin-bottom: 5%;\n  background: #16222e;\n  height: 50px;\n  margin-bottom: 5%;\n  border-bottom: 1px solid white;\n  text-align: right;\n  box-shadow: inset -2px 15px 10px -8px rgba(0, 0, 0, 0.75); }\n\nh5, h6 {\n  color: white;\n  font-weight: lighter; }\n\n.marginBottom {\n  margin-bottom: 5%; }\n\n.text-center {\n  margin-bottom: 3%; }\n\n.PaddingTop {\n  margin-top: 5%;\n  padding-top: 5%;\n  border-top: 1px solid white; }\n\n#BtnAddNewSession {\n  background: #2aa19d;\n  border: none;\n  color: white; }\n\nh4 {\n  color: white;\n  margin-bottom: auto;\n  margin-top: auto; }\n\n.SubTitleBlackBg {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 15px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  box-shadow: inset -13px 15px 10px -8px rgba(0, 0, 0, 0.75);\n  margin-bottom: 5%; }\n\n.iconSize {\n  width: 79px;\n  height: 96px;\n  margin: 0 auto; }\n\nh5 {\n  color: white;\n  font-weight: lighter; }\n\n.marginBottom {\n  margin-bottom: 5%; }\n\n.text-center {\n  margin-bottom: 3%; }\n\n.mat-horizontal-content-container {\n  padding: 0; }\n\n.grayBtn {\n  background: linear-gradient(#44545e, #394954);\n  border: 3px solid #333f4b;\n  color: #bababa;\n  font-weight: bold;\n  border-radius: 25px;\n  width: 90px;\n  height: 32px;\n  line-height: 0.5; }\n\n.grayBtn:hover {\n  background-image: none;\n  background-color: #74448d;\n  border-color: #74448d;\n  color: white; }\n\n.searchTextInput {\n  border-radius: 25px;\n  border: none;\n  padding: 2px;\n  float: right;\n  margin-right: 10px;\n  margin-top: 10px;\n  width: 300px;\n  background: #fbfcfd; }\n\n.searchTextInput::-webkit-input-placeholder {\n  color: #61297e;\n  text-align: center;\n  font-weight: bold; }\n\n.searchTextInput:-ms-input-placeholder {\n  color: #61297e;\n  text-align: center;\n  font-weight: bold; }\n\n.searchTextInput::placeholder {\n  color: #61297e;\n  text-align: center;\n  font-weight: bold; }\n\n.MenuBtn {\n  background: transparent;\n  color: black;\n  border-radius: 0; }\n\n.MenuBtnWhite {\n  background: transparent;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clusters-page/clusters-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClustersPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_clusters_service__ = __webpack_require__("../../../../../src/app/shared/services/clusters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_SharedService_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClustersPageComponent = (function () {
    //----------------end RenameClusterDialog---------------------//
    function ClustersPageComponent(_ClustersServicee, _SharedService, router) {
        var _this = this;
        this._ClustersServicee = _ClustersServicee;
        this._SharedService = _SharedService;
        this.router = router;
        //----------------RenameClusterDialog---------------------//
        this.RenameDialogOpened = false;
        this.selectedClustersIds = [];
        this._SharedService.currSession.subscribe(function (res) {
            console.log("value", res);
            _this.sessionId = res;
        });
        //constructor call one to get getSession from db
        // _StartPageService.getSession(1);
    }
    ClustersPageComponent.prototype.RenameDialogOpen = function (Cluster) {
        this.currCluster = Cluster;
        console.log(this.currCluster);
        this.RenameDialogOpened = true;
    };
    ClustersPageComponent.prototype.RenameDialogClose = function () {
        this.RenameDialogOpened = false;
    };
    ClustersPageComponent.prototype.RenameDialogSubmit = function (clusterTextBox, event) {
        this.RenameDialogClose();
        this.CLUSTERS = this._ClustersServicee.UpdateClusterName(clusterTextBox.value, this.currCluster);
    };
    //todo:deselect   cluster - change image to prev image and 
    //remove clusterid from this.selectedClustersIds arr
    ClustersPageComponent.prototype.Select = function (_CLUSTER) {
        _CLUSTER.CLUSTER_Image = "assets/images/header/logo_world_2.png";
        this.selectedClustersIds.push(_CLUSTER.CLUSTERID);
        console.log(_CLUSTER, this.selectedClustersIds);
    };
    ClustersPageComponent.prototype.DeleteCluster = function (Cluster) {
        this.CLUSTERS = this._ClustersServicee.deleteClusterById(Cluster.CLUSTERID);
    };
    ClustersPageComponent.prototype.ngOnInit = function () {
        this.CLUSTERS = this._ClustersServicee.getClusertsWithoutParent();
    };
    ClustersPageComponent.prototype.StartEdit = function () {
        var _this = this;
        this._ClustersServicee.AddClustersParentSessionId(this.sessionId, this.selectedClustersIds).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['dashboard', { currSession: _this.sessionId }]);
        });
    };
    return ClustersPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], ClustersPageComponent.prototype, "CLUSTERS", void 0);
ClustersPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'clusters-page',
        template: __webpack_require__("../../../../../src/app/clusters-page/clusters-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/clusters-page/clusters-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_clusters_service__["a" /* ClustersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_clusters_service__["a" /* ClustersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_SharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_SharedService_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ClustersPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=clusters-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenav  opened>\r\n\r\n    <div class=\"container-fluid\" style=\" width: 340px;\">\r\n      <div class=\"row\" style=\"padding: 10px;\r\n      background: #000000;\">\r\n\r\n        <button mat-mini-fab (click)=\"makeReport()\" matTooltip=\"Make Report\" class=\"add-button\">\r\n          <mat-icon>description</mat-icon>\r\n        </button>\r\n\r\n\r\n        <button mat-mini-fab (click)=\"makeReport()\" matTooltip=\"Make Report\" class=\"add-button\">\r\n          <mat-icon>save</mat-icon>\r\n        </button>\r\n\r\n\r\n        <button mat-mini-fab (click)=\"makeReport()\" matTooltip=\"Make Report\" class=\"add-button\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n\r\n\r\n        <button mat-mini-fab (click)=\"makeReport()\" matTooltip=\"Make Report\" class=\"add-button\">\r\n          <mat-icon>attach_file</mat-icon>\r\n        </button>\r\n\r\n        <button mat-mini-fab (click)=\"highlight()\" matTooltip=\"Make Report\" class=\"add-button\">\r\n          <mat-icon>share</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"highlight()\" matTooltip=\"highlight\" class=\"add-button\">\r\n          <mat-icon>highlight</mat-icon>\r\n        </button>\r\n\r\n        <button mat-mini-fab (click)=\"makeReport()\" matTooltip=\"Make Report\" class=\"add-button\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n      <div class=\"row\" style=\"background: #2d2d2d;padding-left: 15px;    padding-left: 15px;padding-top: 10px;padding-bottom: 10px;\">\r\n        <label class=\"mat-headline\">Analyzes List</label>\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n        <mat-accordion class=\"cols-2\">\r\n          <mat-expansion-panel *ngFor=\"let cluster of clustersList\">\r\n\r\n            <mat-expansion-panel-header>\r\n              <div matLine style=\"width:100%;font-size: 12pt;margin-top: 13px;\">\r\n                {{cluster.CLUSTER_NAME}}\r\n\r\n\r\n\r\n\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" style=\"float: right;\">\r\n                  <mat-icon >more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,6)\">\r\n                    <mat-icon>pie_chart</mat-icon>\r\n                    <span class=\"black\">pie Graph</span>\r\n                  </button>\r\n\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                    <mat-icon>bubble_chart</mat-icon>\r\n                    <span class=\"black\">Scatter Graph</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,5)\">\r\n                    <mat-icon>bubble_chart</mat-icon>\r\n                    <span class=\"black\">Activity Graph</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,3)\">\r\n                    <mat-icon>bar_chart</mat-icon>\r\n                    <span class=\"black\">Histogarm Graph</span>\r\n                  </button>\r\n\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,1)\">\r\n                    <mat-icon>list_alt</mat-icon>\r\n                    <span class=\"black\">Table</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <mat-icon>place</mat-icon>\r\n                    <span class=\"black\">Map</span>\r\n                  </button>\r\n                  <hr>\r\n                  <button mat-menu-item (click)=\"addAnalizeByCluserIdAndType(cluster,7)\">\r\n                    <mat-icon>place</mat-icon>\r\n                    <span class=\"black\">analysis 1</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"addAnalizeByCluserIdAndType2(cluster,7)\">\r\n                    <mat-icon>place</mat-icon>\r\n                    <span class=\"black\">analysis 2</span>\r\n                  </button>\r\n                </mat-menu>\r\n\r\n              \r\n\r\n              </div>\r\n            </mat-expansion-panel-header>\r\n        \r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </mat-sidenav>\r\n  <button mat-mini-fab class=\"sidenav-fab\" (click)=\"sidenav.toggle()\" id=\"sidebar\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n\r\n  <gridster [options]=\"options\">\r\n    <gridster-item class=\"gridster-item-content\" [item]=\"item\" *ngFor=\"let item of staticDashboard\" ngSwitch=\"{{item.ViewType %8}}\" style=\"padding:0\">\r\n      <h1 *ngIf=\"!item.hasContent\">{{item.label}}</h1>\r\n      <pie-chart class=\"container\" *ngSwitchCase=\"'6'\" [chartWidth]=\"item.chartWidth\" [chartHeight]=\"item.chartHeight\" class=\"no_margin_no_padding\"></pie-chart>\r\n      <histogram-graph class=\"container\" *ngSwitchCase=\"'3'\" [chartWidth]=\"item.chartWidth\" [chartHeight]=\"item.chartHeight\" class=\"no_margin_no_padding\"></histogram-graph>\r\n    \r\n      <map class=\"container\" *ngSwitchCase=\"'7'\" style=\"height: 0;overflow-x: hidden;overflow-y: hidden;\" \r\n      [chartWidth]=\"item.chartWidth\" \r\n        [chartHeight]=\"item.chartHeight\" class=\"no_margin_no_padding\"></map>\r\n\r\n      <report-nice-edit class=\"container\" *ngSwitchCase=\"'0'\" class=\"no_margin_no_padding\"></report-nice-edit>\r\n      <time-angle-graph500-k class=\"container\" *ngSwitchCase=\"'2'\" [CluserId]=\"item.CluserId\" [chartWidth]=\"item.chartWidth\" [chartHeight]=\"item.chartHeight+7\" class=\"no_margin_no_padding\"\r\n     ></time-angle-graph500-k>\r\n\r\n      <activity-graph class=\"container\" *ngSwitchCase=\"'5'\" [CluserId]=\"item.CluserId\" [chartWidth]=\"item.chartWidth\" [chartHeight]=\"item.chartHeight+7\" class=\"no_margin_no_padding\"></activity-graph>\r\n      <div class=\"button-holder\">\r\n\r\n        <!--table-from-server *ngSwitchCase=\"'100'\"></table-from-server-->\r\n        <table-reusing-data-items *ngSwitchCase=\"'1'\" class=\"container gridster-item-content\" [chartWidth]=\"item.chartWidth\" [chartHeight]=\"item.chartHeight\"\r\n          [CluserId]=\"item.CluserId\" style=\"-webkit-user-select: text\"></table-reusing-data-items>\r\n\r\n\r\n\r\n        <div class=\"item-buttons\">\r\n          <button mat-icon-button mat-raised-button class=\"drag-handler\">\r\n            <mat-icon>open_with</mat-icon>\r\n          </button>\r\n\r\n          <button mat-icon-button mat-raised-button class=\"remove-button IconStyle\" (mousedown)=\"removeItem($event, item)\" (touchstart)=\"removeItem($event, item)\"\r\n            matTooltip=\"Remove\">\r\n            <mat-icon class=\"IconStyle\">clear</mat-icon>\r\n          </button>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </gridster-item>\r\n  </gridster>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container {\n  margin: 0;\n  width: 100%;\n  height: 100%; }\n\nmat-sidenav {\n  overflow-x: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100px;\n  padding: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nmat-sidenav .cols-2 {\n  grid-column: 1/3; }\n\nmat-sidenav mat-checkbox {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\nmat-sidenav .add-button {\n  justify-self: end;\n  float: left;\n  margin-left: 2px; }\n\n.sidenav-fab {\n  position: absolute;\n  z-index: 5;\n  float: left; }\n\ngridster-item div.button-holder {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\ngridster-item {\n  background: #16222e; }\n\ngridster-item .item-buttons {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\ngridster-item .gridster-item-content {\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.mat-list-icon {\n  color: rgba(0, 0, 0, 0.54); }\n\nh1 {\n  color: white;\n  font-weight: lighter;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.IconStyle {\n  color: white;\n  background: #16222e; }\n\ngridster-item {\n  border: 3px solid black; }\n\n.mat-headline {\n  height: 20px;\n  color: white;\n  margin-bottom: 30px;\n  /* border-top: 1px solid white; */\n  /* padding: 10px; */\n  margin-top: 10px; }\n\nmat-sidenav[_ngcontent-c0] {\n  min-width: 30%;\n  padding: 0;\n  overflow-y: hidden; }\n\n.mat-toolbar.mat-primary {\n  height: 100%; }\n\n.mat-list .mat-list-item {\n  display: block;\n  border-bottom: 1px solid #e0d8d8; }\n\n.mat-mini-fab.mat-accent {\n  background-color: #feffff;\n  color: #16222e;\n  /* border: 1px solid black; */ }\n\n.mat-selection-list .mat-list-option .mat-list-item-content-reverse, .mat-selection-list .mat-list-option .mat-list-text {\n  padding: 0; }\n\ngridster-item[_ngcontent-c1] {\n  overflow-y: hidden;\n  overflow-x: hidden;\n  background: #2c2c2d;\n  background: #343436;\n  border: 3px solid #10171c; }\n\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background: #485765;\n  color: #cec9c9;\n  border-bottom: 1px solid #151e28;\n  background: white;\n  color: #172530;\n  border-bottom: 1px solid #e7e7e7; }\n\nmat-sidenav[_ngcontent-c1] .cols-2[_ngcontent-c1] {\n  grid-column: 1/3;\n  background: #16222e;\n  margin-bottom: -5px;\n  margin-top: -5px;\n  background: linear-gradient(#4e5f74, black);\n  box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  background: #151f25; }\n\n.mat-list-option:not([disabled]) {\n  border-bottom: 1px solid; }\n\n.fit[_nghost-c11] {\n  background: #151f25; }\n\n.SubTitleBlackBg {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 15px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  box-shadow: inset -13px 15px 10px -8px rgba(0, 0, 0, 0.75);\n  margin-bottom: 0; }\n\nmat-accordion .mat-expansion-panel-spacing:first-child {\n  margin-bottom: 0; }\n\nmat-sidenav[_ngcontent-c1] .add-button[_ngcontent-c1] {\n  margin-bottom: 20px; }\n\n/deep/.mat-sidenav {\n  background: #49474a; }\n\n/deep/.cols-2 .mat-toolbar mat-primary {\n  background: black; }\n\nmat-sidenav[_ngcontent-c1][_ngcontent-c1] .cols-2[_ngcontent-c1][_ngcontent-c1] {\n  background: black;\n  margin-bottom: -5px;\n  margin-top: -5px;\n  background: linear-gradient(#4e5f74, black);\n  background: #151f25;\n  /*box-shadow: inset 15px 15px 5px 0px rgba(0, 0, 0, 0.75);*/ }\n\nmat-sidenav[_ngcontent-c1][_ngcontent-c1] {\n  background: #151f25;\n  border-right: 3px solid #908f91;\n  width: 340px;\n  min-width: 0;\n  -webkit-box-shadow: 5px 0px 10px -1px rgba(0, 0, 0, 0.75);\n  border: none;\n  -webkit-box-align: top;\n      -ms-flex-align: top;\n          align-items: top;\n  -webkit-box-align: normal;\n      -ms-flex-align: normal;\n          align-items: normal; }\n\n.mat-toolbar.mat-primary {\n  background: #2196f3;\n  color: white;\n  background: black; }\n\n.mat-expansion-panel[_ngcontent-c1]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background: #485765;\n  color: #cec9c9;\n  border-bottom: 1px solid #151e28;\n  background: #f5f5f5;\n  color: #172530;\n  border-bottom: 1px solid #000000;\n  background: #3a0667;\n  background: #49474a; }\n\nmat-sidenav[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] .cols-2[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] {\n  padding: 0; }\n\n/*gridster-item[_ngcontent-c1] div.button-holder[_ngcontent-c1] {\r\n  height: 0;\r\n}*/\n/*/deep/.mat-content {\r\n  color: #bbb8bc;\r\n}\r\n\r\n/deep/.mat-pseudo-checkbox {\r\n  color: #5c8ab0;\r\n}\r\n.mat-list .mat-list-option .mat-list-icon, .mat-nav-list .mat-list-option .mat-list-icon, .mat-selection-list .mat-list-option .mat-list-icon {\r\n  color: #5c8ab0;\r\n}\r\n/deep/.mat-selection-list .mat-list-option .mat-list-text>* {\r\n  color: #5c8ab0;\r\n}\r\n/deep/.mat-expansion-panel-header-description, .mat-expansion-indicator::after {\r\n  color: #5c8ab0;\r\n}\r\n.mat-icon {\r\n  color: #000000;\r\n  background: transparent;\r\n}\r\n/deep/button.add-button .mat-mini-fab .mat-accent {\r\n  color: #16222e;\r\n}\r\n.mat-icon[_ngcontent-c1] {\r\n  color: #000000;\r\n  background: transparent;\r\n}\r\n*/\ngridster-item[_ngcontent-c1] .gridster-item-content[_ngcontent-c1] {\n  max-width: 4000px;\n  padding: 0; }\n\ngridster-item[_ngcontent-c1] .item-buttons[_ngcontent-c1] {\n  z-index: 1000;\n  left: 0;\n  right: auto;\n  margin-left: 30px; }\n\n.fit[_nghost-c17] {\n  background: #10171c; }\n\n.fit[_nghost-c11][_ngcontent-c1] {\n  background: #10171c; }\n\n/deep/.mat-content {\n  color: #bbbbbb;\n  /*font-weight: bold;*/ }\n\nspan.mat-content {\n  color: #bbbbbb; }\n\nspan {\n  color: #1fbbd6;\n  color: #bbbbbb; }\n\n.mat-selection-list .mat-list-option .mat-list-icon {\n  /*color: #49474a;\r\n  background: #1fbbd6;*/\n  color: #bbbbbb; }\n\n.mat-icon-button .mat-icon {\n  color: #1fbbd6;\n  color: #bbbbbb; }\n\n.mat-selection-list .mat-list-option.mat-pseudo-checkbox {\n  border: 2px solid #1fbbd6;\n  border-radius: 0px; }\n\n/deep/span.mat-expansion-indicator .ng-tns-c7-2 .ng-trigger .ng-trigger-indicatorRotate {\n  color: #2196f3; }\n\n.mat-list-option[_ngcontent-c1]:not([disabled]) {\n  border-bottom: 1px solid #8b9196; }\n\n.fit {\n  background: #10171c; }\n\n.mat-expansion-panel[_ngcontent-c10]:not([class*=mat-elevation-z]) {\n  background: #49474a; }\n\n.black {\n  color: black; }\n\n/*/deep/.mat-expansion-panel-indicator::after{\r\n  color: #1fbbd6;\r\n}*/\n/deep/.mat-expansion-indicator::after {\n  color: #bbbbbb; }\n\n/deep/mat-pseudo-checkbox.mat-pseudo-checkbox {\n  display: none; }\n\n.mat-toolbar .mat-toolbar-row {\n  background: #290940; }\n\n.mat-toolbar .mat-toolbar-row {\n  background: #290940; }\n\n.mat-toolbar-row {\n  background: #290940; }\n\n.btnMenu {\n  border-top: 1px solid #615b5b;\n  padding-top: 10px; }\n\nmat-sidenav[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] .cols-2[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] {\n  background: #49474a;\n  -ms-flex-line-pack: start;\n      align-content: start;\n  width: 340px;\n  min-width: 0; }\n\nmat-sidenav[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] {\n  background: #151f25;\n  border-right: 3px solid #908f91;\n  background: #49474a;\n  -ms-flex-line-pack: start;\n      align-content: start;\n  width: 340px;\n  min-width: 0;\n  -webkit-box-shadow: 5px 0px 10px -1px rgba(0, 0, 0, 0.75);\n  border: none; }\n\nmat-sidenav[_ngcontent-c10] {\n  width: 350px;\n  padding: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: top;\n  -webkit-box-align: normal;\n      -ms-flex-align: normal;\n          align-items: normal;\n  -webkit-box-shadow: 5px 0px 10px -1px rgba(0, 0, 0, 0.75);\n  border: none; }\n\n/deep/.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0);\n  /* background: #c5c4c494; */ }\n\n.fit[_ngcontent-c1] {\n  background: #8c8c8c; }\n\n.no_margin_no_padding {\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_CListService_service__ = __webpack_require__("../../../../../src/app/shared/services/CListService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_SharedService_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_user_login_service__ = __webpack_require__("../../../../../src/app/shared/services/user-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_clusters_service__ = __webpack_require__("../../../../../src/app/shared/services/clusters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = DashboardComponent_1 = (function () {
    function DashboardComponent(_httpService, _CListService, _SharedService, userlogin, _ClustersService, route) {
        this._httpService = _httpService;
        this._CListService = _CListService;
        this._SharedService = _SharedService;
        this.userlogin = userlogin;
        this._ClustersService = _ClustersService;
        this.route = route;
        this.clusterViews = [];
        this.clustersList = [{ CLUSTERID: 1, CLUSTER_NAME: 'covid-19 analysis', CLUSTER_Image: '' },
            { CLUSTERID: 2, CLUSTER_NAME: 'Healthcare Analytics', CLUSTER_Image: '' }];
        // options.enableEmptyCellContextMenu
        this.Sdata = "Shared Data22";
        this.yValue = 0;
        _SharedService.currSession.subscribe(function (res) {
            console.log("dashboard _SharedService", res);
        });
    }
    DashboardComponent.eventStop = function (item, itemComponent, event) {
        //console.info('eventStop', item, itemComponent, event);
    };
    DashboardComponent.itemChange = function (item, itemComponent) {
        //console.info('itemChanged', item, itemComponent);
    };
    DashboardComponent.itemInit = function (item, itemComponent) {
        //console.info('itemInitialized', item, itemComponent);
    };
    DashboardComponent.itemRemoved = function (item, itemComponent) {
        // console.info('itemRemoved', item, itemComponent);
    };
    DashboardComponent.prototype.emptyCellClick = function (event, item) {
        // console.info('empty cell click', event, item);
        DashboardComponent_1.dashboard.push(item);
    };
    DashboardComponent.prototype.highlight = function () {
        this.colorData = true;
        this._SharedService.cartData.emit(this.colorData);
        //this._SharedService.cartData.subscribe((value: string) => console.log('Triggered!', value));
        // console.log(this._SharedService.cartData);
    };
    DashboardComponent.prototype.showClusterGraph = function (cluster) {
        console.log(cluster.CLUSTERID);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.options = {
            gridType: 'fit',
            compactType: 'none',
            hasContent: true,
            itemChangeCallback: DashboardComponent_1.itemChange,
            itemResizeCallback: DashboardComponent_1.itemResize,
            itemInitCallback: DashboardComponent_1.itemInit,
            itemRemovedCallback: DashboardComponent_1.itemRemoved,
            margin: 5,
            outerMargin: true,
            mobileBreakpoint: 640,
            minCols: 1,
            maxCols: 100,
            minRows: 1,
            maxRows: 100,
            maxItemCols: 100,
            minItemCols: 1,
            maxItemRows: 100,
            minItemRows: 1,
            maxItemArea: 2500,
            minItemArea: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 105,
            fixedRowHeight: 105,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellClickCallback: this.emptyCellClick.bind(this),
            emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
            emptyCellDropCallback: this.emptyCellClick.bind(this),
            emptyCellDragCallback: this.emptyCellClick.bind(this),
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            draggable: {
                delayStart: 0,
                enabled: true,
                ignoreContentClass: 'container',
                ignoreContent: true,
                dragHandleClass: 'drag-handler',
                stop: DashboardComponent_1.eventStop
            },
            resizable: {
                delayStart: 0,
                enabled: true,
                stop: DashboardComponent_1.eventStop,
                handles: {
                    s: true,
                    e: true,
                    n: true,
                    w: true,
                    se: true,
                    ne: true,
                    sw: true,
                    nw: true
                }
            },
            api: {
                resize: DashboardComponent_1.eventStop,
                optionsChanged: DashboardComponent_1.eventStop,
                getNextPossiblePosition: DashboardComponent_1.eventStop,
            },
            swap: true,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: { north: true, east: true, south: true, west: true },
            pushResizeItems: false,
            displayGrid: 'onDrag&Resize',
            disableWindowResize: false
        };
        DashboardComponent_1.dashboard = [];
    };
    DashboardComponent.prototype.allowDrag = function () {
        this.options.draggable.enabled = false;
    };
    DashboardComponent.prototype.changedOptions = function () {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    };
    DashboardComponent.itemResize = function (item, itemComponent) {
        if (DashboardComponent_1.dashboard[DashboardComponent_1.dashboard.indexOf(item)] !== undefined) {
            DashboardComponent_1.dashboard[DashboardComponent_1.dashboard.indexOf(item)].chartWidth = itemComponent.width;
            DashboardComponent_1.dashboard[DashboardComponent_1.dashboard.indexOf(item)].chartHeight = itemComponent.height - 50;
        }
    };
    DashboardComponent.prototype.RegularScreen = function ($event, item) {
        console.log(item);
        DashboardComponent_1.dashboard = this.lastDashboard;
        console.log(this.lastDashboard);
    };
    DashboardComponent.prototype.removeItem = function ($event, item) {
        // $event.preventDefault();
        //$event.stopPropagation();
        DashboardComponent_1.dashboard.splice(DashboardComponent_1.dashboard.indexOf(item), 1);
    };
    //CluserType - map / graph=2 / table
    DashboardComponent.prototype.addItemByCluserIdAndType = function (cluster, ViewType) {
        console.log(cluster);
        DashboardComponent_1.dashboard.push({
            label: "dfgdf", i: this.yValue, chartWidth: 500,
            chartHeight: 200, hasContent: true, CluserId: cluster.CLUSTERID,
            ViewType: ViewType
        });
        this.yValue++;
        console.log(DashboardComponent_1.dashboard);
    };
    DashboardComponent.prototype.addAnalizeByCluserIdAndType2 = function (cluster) {
        //pie
        DashboardComponent_1.dashboard.push({
            label: "dfgdf", i: this.yValue, chartWidth: 500,
            chartHeight: 200, hasContent: true, CluserId: cluster.CLUSTERID,
            ViewType: 6
        });
        //table
        DashboardComponent_1.dashboard.push({
            label: "dfgdf", i: this.yValue, chartWidth: 500,
            chartHeight: 200, hasContent: true, CluserId: cluster.CLUSTERID,
            ViewType: 3
        });
        //Graph
        DashboardComponent_1.dashboard.push({
            label: "dfgdf", i: this.yValue, chartWidth: 500,
            chartHeight: 200, hasContent: true, CluserId: cluster.CLUSTERID,
            ViewType: 2
        });
        this.yValue++;
    };
    DashboardComponent.prototype.addAnalizeByCluserIdAndType = function (cluster, ViewType) {
        console.log(cluster);
        //pie
        DashboardComponent_1.dashboard.push({
            label: "dfgdf", i: this.yValue, chartWidth: 500,
            chartHeight: 200, hasContent: true, CluserId: cluster.CLUSTERID,
            ViewType: 6
        });
        //table
        // DashboardComponent.dashboard.push({label:"dfgdf",i:this.yValue,chartWidth:500,
        // chartHeight:200,hasContent: true,CluserId:cluster.CLUSTERID,
        // ViewType:1});
        //map
        DashboardComponent_1.dashboard.push({
            label: "dfgdf", i: this.yValue, chartWidth: 500,
            chartHeight: 200, hasContent: true, CluserId: cluster.CLUSTERID,
            ViewType: 7
        });
        this.yValue++;
        console.log(DashboardComponent_1.dashboard);
    };
    DashboardComponent.prototype.makeReport = function () {
        DashboardComponent_1.dashboard.push({
            label: "dfgdf", i: this.yValue, chartWidth: 500,
            chartHeight: 200, hasContent: true,
            ViewType: 0
        });
        this.yValue++;
    };
    DashboardComponent.prototype.addItem = function () {
        DashboardComponent_1.dashboard.push({ label: "dfgdf", i: this.yValue, chartWidth: 500, chartHeight: 200, hasContent: true });
        this.yValue++;
    };
    Object.defineProperty(DashboardComponent.prototype, "staticDashboard", {
        get: function () {
            return DashboardComponent_1.dashboard;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav__["a" /* MatSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material_sidenav__["a" /* MatSidenav */]) === "function" && _a || Object)
], DashboardComponent.prototype, "sidenav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('mattoolbar'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "mattoolbar", void 0);
DashboardComponent = DashboardComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_CListService_service__["a" /* CListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_CListService_service__["a" /* CListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_SharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_SharedService_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_user_login_service__["a" /* UserLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_user_login_service__["a" /* UserLoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_app_shared_services_clusters_service__["a" /* ClustersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_shared_services_clusters_service__["a" /* ClustersService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], DashboardComponent);

var DashboardComponent_1, _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/histogram-graph/histogram-graph.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--button (click)=\"ClickBtnHighlight()\">Highlight</button>\r\n<button (click)=\"ClickBtnZoom()\">Zoom</button>\r\n<button (click)=\"ClickBtnLasso($event)\">Lasso</button>\r\n<button (click)=\"ClickExportChart()\">Export chart</button>\r\n<div #imgContainert>\r\n\r\n</div>\r\n<img/>\r\n<div #containerHistogram ></div-->\r\n\r\n    <mat-drawer-container class=\"example-container\">\r\n\r\n        <div class=\"example-sidenav-content\" style=\"z-index:10000;    float: right;\">\r\n          <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n            <mat-icon>menu</mat-icon>\r\n      \r\n          </button>\r\n        </div>\r\n        <div #containerHistogram ></div>\r\n        <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" position=\"end\">\r\n          <p matLine >\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      \r\n              <mat-icon class=\"icon_marging_left\">more_vert</mat-icon>\r\n            </button>\r\n          </p>\r\n          <p matLine>\r\n            <mat-menu #menu=\"matMenu\">\r\n      \r\n              <button mat-menu-item (click)=\"measureDistance()\">\r\n                <span>Measure Distance</span>\r\n              </button>\r\n      \r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                <span>Change Map</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,3)\">\r\n                <span>Center map about a selected point</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n                <span>Lasso</span>\r\n              </button>\r\n              <hr>\r\n              <button mat-menu-item [matMenuTriggerFor]=\"menu2\">\r\n                <span>Lasso - Options and filters</span>\r\n                <mat-menu #menu2=\"matMenu\">\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,6)\">\r\n                    <span>Create cluster based on selected elements</span>\r\n                  </button>\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                    <span>Highlight</span>\r\n                </button>\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n                    <span>Open in a map</span>\r\n                  </button>\r\n      \r\n\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>High-Light</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>Remove from cluster</span>\r\n                  </button>\r\n                </mat-menu>\r\n      \r\n      \r\n              </button>\r\n              <hr>\r\n              <button mat-menu-item (click)=\"loadselectedfromtable()\">\r\n                <span>load selected points</span>\r\n              </button>\r\n      \r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Add Textual Annotation</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Delete Textual Annotation</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Draw Silde</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Report</span>\r\n              </button>\r\n      \r\n            </mat-menu>\r\n      \r\n            <span> {{clusterView}} </span>\r\n      \r\n          </p>\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label class=\"colorWhite\">select y axis: </label>\r\n                <select #selectElemY (change)=\"Change_Y_Axis(selectElemY.value)\">\r\n                  <option value=\"Number\">Number</option>\r\n                  <option value=\"Catagory\">Catagory</option>\r\n      \r\n                </select>\r\n      \r\n                <label class=\"colorWhite\">select x axis: </label>\r\n                <select #selectElemX (change)=\"Change_X_Axis(selectElemX.value)\">\r\n                  <option value=\"Date\">Date</option>\r\n                  <option value=\"Catagory\">Catagory</option>\r\n                  <option value=\"Number\">Number</option>\r\n                </select>\r\n                <hr>\r\n                <button (click)=\"getNextPageFromServer()\">>></button>\r\n                <button (click)=\"getPrevPageFromServer()\">\r\n                  <<</button>\r\n                    <label class=\"colorWhite\">{{startServerPage}} - {{endServerPage}} first result</label>\r\n      \r\n              </div>\r\n      \r\n            </div>\r\n      \r\n          </div>\r\n      \r\n        </mat-drawer>\r\n      \r\n      \r\n      \r\n      </mat-drawer-container>\r\n      \r\n      \r\n      <mat-sidenav-container>\r\n        <mat-sidenav #sidenav2>\r\n      \r\n        </mat-sidenav>\r\n      </mat-sidenav-container>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/histogram-graph/histogram-graph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorWhite {\n  color: white; }\n\n.mat-drawer {\n  background-color: #193061;\n  background-color: #49474a;\n  color: rgba(0, 0, 0, 0.87);\n  width: 200px;\n  background: #290940; }\n\n.icon_marging_left {\n  color: white; }\n\n.mat-button {\n  color: white; }\n\n.example-sidenav-content {\n  background: #2c2c2e; }\n\n/deep/.mat-drawer-content {\n  background: #2c2c2e;\n  overflow-x: hidden; }\n\n.mat-drawer-container {\n  background: #2c2c2e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/histogram-graph/histogram-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistogramGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_ScatterGraph_service__ = __webpack_require__("../../../../../src/app/shared/services/ScatterGraph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_SharedService_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_classes_GraphTheme__ = __webpack_require__("../../../../../src/app/shared/classes/GraphTheme.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistogramGraphComponent = (function () {
    function HistogramGraphComponent(_httpService, _ScatterGraphService, _SharedService) {
        this._httpService = _httpService;
        this._ScatterGraphService = _ScatterGraphService;
        this._SharedService = _SharedService;
    }
    HistogramGraphComponent.prototype.ngOnChanges = function (changes) {
        if (this.drawer !== undefined) {
            this.drawer.open();
        }
        if (this.chart2 !== undefined) {
            this.chart2.setSize(this.chartWidth, this.chartHeight);
            console.log("chartWidth: " + this.chartWidth + " _chartHeight: " + this.chartHeight);
        }
    };
    HistogramGraphComponent.prototype.ClickBtnZoom = function () {
        Highcharts.removeEvent(this.chart2, 'selection');
    };
    HistogramGraphComponent.prototype.ClickBtnLasso = function () {
        var ch2 = this.chart2;
        Highcharts.addEvent(this.chart2, 'selection', function (event) {
            event.target.pointer.zoomX = false;
            event.target.pointer.zoomY = false;
            var d = [];
            if (event.xAxis) {
                console.log('min: ' + event.xAxis[0].min + ', max: ' + event.xAxis[0].max);
                for (var i = 0; i < event.target.series[1].yData.length; i++) {
                    if (event.target.series[1].xData[i] >= event.xAxis[0].min && event.target.series[1].xData[i] <= event.xAxis[0].max && event.target.series[1].yData[i] >= event.yAxis[0].min && event.target.series[1].yData[i] <= event.yAxis[0].max) {
                        d.push([event.target.series[1].xData[i], event.target.series[1].yData[i]]);
                    }
                }
                this.selectedSeriescounter += 1;
                event.target.addSeries({
                    name: 'Selection',
                    data: d,
                    type: 'scatter',
                    color: 'red',
                    showInNavigator: false,
                    marker: {
                        radius: 2
                    },
                    navigator: {
                        series: {
                            type: 'line',
                            color: 'black',
                        }
                    }
                });
            }
        });
    };
    HistogramGraphComponent.prototype.ClickBtnHighlight = function () {
        this._SharedService.cartData.emit(true);
    };
    HistogramGraphComponent.prototype.highlightFunctionality = function () {
        var _this = this;
        //highlight functionality
        this._SharedService.cartData.subscribe(function (value) {
            var self = _this;
            var d = [];
            _this.colorData = value;
            if (_this.chart2.series[2] !== undefined) {
                _this.chart2.series[2].remove();
            }
            if (self.colorData === true) {
                for (var i = 0; i < 20000; i++) {
                    d.push([_this.chart2.series[1].xData[i], _this.chart2.series[1].yData[i]]);
                }
                _this.chart2.addSeries({
                    name: 'Highlight',
                    data: d,
                    type: 'scatter',
                    color: 'yellow',
                    marker: {
                        radius: 2
                    }
                });
            }
        });
    };
    HistogramGraphComponent.prototype.ClickExportChart = function () {
        //var img = document.querySelector('img');
        //img.src = 'data:image/svg+xml;base64,' + window.btoa(this.chart2.getSVG());
        //var imgContainert = document.getElementById('imgContainert');
        //his.imgContainert.nativeElement
        //remove all images
        console.log(this.imgContainert.nativeElement);
        while (this.imgContainert.nativeElement.hasChildNodes()) {
            this.imgContainert.nativeElement.removeChild(this.imgContainert.nativeElement.lastChild);
        }
        var image = new Image();
        image.src = 'data:image/svg+xml;base64,' + window.btoa(this.chart2.getSVG());
        this.imgContainert.nativeElement.appendChild(image);
    };
    HistogramGraphComponent.prototype.addHighchartsTheme = function () {
        this._GraphTheme = new __WEBPACK_IMPORTED_MODULE_4__shared_classes_GraphTheme__["a" /* GraphTheme */]();
        Highcharts.theme = this._GraphTheme.addHighchartsTheme();
        Highcharts.setOptions(Highcharts.theme);
    };
    HistogramGraphComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var r = [];
        this.addHighchartsTheme();
        this._ScatterGraphService
            .getXYGraphByCluster_startEnd(0, 100000)
            .subscribe(function (res) {
            for (var i = 0; i < 100000; i++) {
                r.push([i, i]);
            }
            _this.chart2 = Highcharts.chart(_this.containerHistogram.nativeElement, {
                chart: {
                    zoomType: 'xy',
                    width: _this.chartWidth,
                    height: _this.chartHeight,
                },
                exporting: { enabled: false },
                boost: {
                    useGPUTranslations: true
                },
                title: {
                    text: 'Highcharts Histogram'
                },
                xAxis: [{
                        title: { text: 'Data' }
                    }, {
                        title: { text: 'Histogram' },
                        opposite: true
                    }],
                yAxis: [{
                        title: { text: 'Data' }
                    }, {
                        title: { text: 'Histogram' },
                        opposite: true
                    }],
                /* exporting: {
                     filename: '1',
                     url:'http://localhost:60985/api/Values/add'
                 },*/
                series: [{
                        name: 'Histogram',
                        type: 'histogram',
                        xAxis: 1,
                        yAxis: 1,
                        baseSeries: 's1',
                        zIndex: -1
                    }, {
                        name: 'Data',
                        type: 'scatter',
                        data: r,
                        id: 's1',
                        marker: {
                            radius: 1.5
                        }
                    }]
            });
        });
        this.highlightFunctionality();
    };
    return HistogramGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], HistogramGraphComponent.prototype, "chartWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], HistogramGraphComponent.prototype, "chartHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('drawer'),
    __metadata("design:type", Object)
], HistogramGraphComponent.prototype, "drawer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('containerHistogram'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], HistogramGraphComponent.prototype, "containerHistogram", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('imgContainert'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], HistogramGraphComponent.prototype, "imgContainert", void 0);
HistogramGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'histogram-graph',
        template: __webpack_require__("../../../../../src/app/histogram-graph/histogram-graph.component.html"),
        styles: [__webpack_require__("../../../../../src/app/histogram-graph/histogram-graph.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_ScatterGraph_service__["a" /* ScatterGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_ScatterGraph_service__["a" /* ScatterGraphService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_SharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_SharedService_service__["a" /* SharedService */]) === "function" && _e || Object])
], HistogramGraphComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=histogram-graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--login form-->\r\n<form class=\"container\" (submit)=\"loginUser($event)\">\r\n    <h1 id=\"headline\">Please Login</h1>  \r\n  <hr>\r\n  <div class=\"form-group input\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Please Enter Username\">\r\n  </div>\r\n\r\n  <div class=\"form-group input\">\r\n    <input type=\"password\" class=\"form-control\" placeholder=\"Please Enter Password\">\r\n  </div>\r\n\r\n  <div class=\"form-group input\">\r\n    <input type=\"submit\" value=\"Login\" class=\"btn grayBtn\">\r\n  </div>\r\n\r\n  <p id=\"linkRegister\" (click)=\"redirectToRegister()\">Create Acoount</p>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  background: linear-gradient(#4e5f74, black);\n  width: 70%;\n  height: 90%;\n  padding: 200px;\n  box-shadow: 5px 10px 8px black;\n  padding-top: 100px;\n  margin-top: 80px; }\n\nhr {\n  border-top: 1px solid black; }\n\ninput {\n  background: #151f25;\n  border: none;\n  border-radius: 25px; }\n\nlabel {\n  color: white; }\n\n#headline {\n  color: white; }\n\nhr {\n  border-top: 1px solid white;\n  margin-bottom: 40px; }\n\ninput:focus {\n  background: #411a55;\n  border: none;\n  font-weight: bold;\n  box-shadow: none;\n  box-shadow: inset -10px 10px 10px -8px rgba(0, 0, 0, 0.75);\n  color: white; }\n\n.grayBtn {\n  background: linear-gradient(#44545e, #394954);\n  border: 3px solid #333f4b;\n  color: #bababa;\n  font-weight: bold;\n  border-radius: 25px;\n  width: 90px;\n  height: 32px;\n  line-height: 0.5; }\n\n.grayBtn:focus {\n  box-shadow: none; }\n\n#linkRegister {\n  color: white;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_login_service__ = __webpack_require__("../../../../../src/app/shared/services/user-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_SharedService_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(router, userlogin, _SharedService) {
        this.router = router;
        this.userlogin = userlogin;
        this._SharedService = _SharedService;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    //link to register
    LoginFormComponent.prototype.redirectToRegister = function () {
        this.router.navigate(['Register']);
    };
    LoginFormComponent.prototype.loginUser = function (e) {
        var _this = this;
        //prevent submit defult behavior 
        e.preventDefault();
        //get form data
        var userName = e.target.elements[0].value;
        var Pass = e.target.elements[1].value;
        //If the user exists in DB USERNAME & USERPASSWORD - return user userid
        this.userlogin.GetUserIdFromUserNameAndPassword({ USERID: 0, USERNAME: userName, USERPASSWORD: Pass })
            .subscribe(function (res) {
            // console.log(res)
            // this._SharedService.currUser.emit(res);
            _this.router.navigate(['Clusters', { UserId: res }]);
        });
        return false;
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login-form',
        template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_login_service__["a" /* UserLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_login_service__["a" /* UserLoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_SharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_SharedService_service__["a" /* SharedService */]) === "function" && _c || Object])
], LoginFormComponent);

var _a, _b, _c;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/10000points.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addressPoints; });
//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/
//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
var addressPoints = [
    [-37.8839, 175.3745188667, "571"],
    [-37.8869090667, 175.3657417333, "486"],
    [-37.8894207167, 175.4015351167, "807"],
    [-37.8927369333, 175.4087452333, "899"],
    [-37.90585105, 175.4453463833, "1273"],
    [-37.9064188833, 175.4441556833, "1258"],
    [-37.90584715, 175.4463564333, "1279"],
    [-37.9033391333, 175.4244005667, "1078"],
    [-37.9061991333, 175.4492620333, "1309"],
    [-37.9058955167, 175.4445613167, "1261"],
    [-37.88888045, 175.39146475, "734"],
    [-37.8950811333, 175.41079175, "928"],
    [-37.88909235, 175.3922956333, "740"],
    [-37.8889259667, 175.3938591667, "759"],
    [-37.8876576333, 175.3859563833, "687"],
    [-37.89027155, 175.3973178833, "778"],
    [-37.8864473667, 175.3806136833, "631"],
    [-37.9000262833, 175.4183242167, "1012"],
    [-37.90036495, 175.4189457, "1024"],
    [-37.9000976833, 175.4197312167, "1027"],
    [-37.90239975, 175.42371165, "1067"],
    [-37.9043379667, 175.42430325, "1080"],
    [-37.9026441, 175.4231055167, "1068"],
    [-37.8883536333, 175.3888573833, "718"],
    [-37.9029948833, 175.4237386167, "1070"],
    [-37.89824135, 175.4150421667, "982"],
    [-37.8976067833, 175.41510265, "983"],
    [-37.9023491333, 175.4225495, "1066"],
    [-37.8856157167, 175.3775632833, "608"],
    [-37.8963032667, 175.4132068, "951"],
    [-37.8922813667, 175.4073402333, "1/898"],
    [-37.88933345, 175.3956084333, "769"],
    [-37.8936148833, 175.4090577, "906"],
    [-37.8939398, 175.4094444833, "914"],
    [-37.8857355333, 175.3722297667, "542"],
    [-37.8931092167, 175.4083014, "898"],
    [-37.9008253167, 175.4198128, "1030"],
    [-37.9045052333, 175.4260735, "1100"],
    [-37.9053927167, 175.42822265, "1130"],
    [-37.90507935, 175.4313065, "1147"],
    [-37.9055749667, 175.4319092167, "1154"],
    [-37.9039034833, 175.4274736667, "1/1105"],
    [-37.9037633, 175.4261181833, "1093"],
    [-37.9038755, 175.42871045, "3/1105"],
    [-37.90369555, 175.4285285, "2/1105"],
    [-37.9056626, 175.4341078833, "1170"],
    [-37.9018736833, 175.438852, "1/1213"],
    [-37.9057596167, 175.4356650167, "1180"],
    [-37.9053502, 175.4361049333, "1185"],
    [-37.9053379167, 175.4366986167, "1195"],
    [-37.9058892333, 175.4381450333, "1204"],
    [-37.9060264167, 175.4400763167, "1220"],
    [-37.9056766833, 175.4412592, "1233"],
    [-37.9057312167, 175.4418380333, "1235"],
    [-37.9061575833, 175.4421068667, "1242"],
    [-37.9063946167, 175.4438004667, "1256"],
    [-37.8996027667, 175.43995055, "4/1215"],
    [-37.9006449667, 175.4395556833, "3/1215"],
    [-37.9009138167, 175.4394061333, "2/1215"],
    [-37.9034547, 175.4396315, "1219"],
    [-37.9055243, 175.4396033, "1221"],
    [-37.89952325, 175.4406619167, "5/1215"],
    [-37.90561525, 175.4404853167, "1225"],
    [-37.9045602333, 175.4477690333, "1285"],
    [-37.9040051667, 175.4388491833, "1213"],
    [-37.90588145, 175.4440349167, "1257"],
    [-37.90595915, 175.4389286833, "1212"],
    [-37.9059939667, 175.4398068833, "1218"],
    [-37.8868631833, 175.37991055, "630"],
    [-37.8878744833, 175.382179, "650"],
    [-37.8880764, 175.3839845667, "670"],
    [-37.8850457333, 175.3759821, "594"],
    [-37.88446045, 175.3762872667, "587"],
    [-37.8880782667, 175.38423415, "1/670"],
    [-37.8863533833, 175.3690698667, "515"],
    [-37.8861783167, 175.3710009833, "530"],
    [-37.885424, 175.3716677833, "541"],
    [-37.88524065, 175.3722141167, "547"],
    [-37.9022371333, 175.47991035, "10"],
    [-37.9020014833, 175.4799581667, "1"],
    [-37.9020824, 175.4802630167, "2"],
    [-37.9018589833, 175.4804760833, "3"],
    [-37.9018211333, 175.4806769667, "4"],
    [-37.9021543667, 175.4805538833, "5"],
    [-37.9022658, 175.4807579333, "6"],
    [-37.9024517833, 175.4806480667, "7"],
    [-37.9024251167, 175.48041985, "8"],
    [-37.9023317833, 175.4802119667, "9"],
    [-37.9321212167, 175.4555088, "39"],
    [-37.8956185167, 175.4719458667, "4"],
    [-37.8954566, 175.4728120333, "20"],
    [-37.8957231833, 175.4727906, "22A"],
    [-37.8956085833, 175.4726702, "22"],
    [-37.8956460167, 175.4718485167, "2"],
    [-37.8953487167, 175.47202915, "5"],
    [-37.8800121167, 175.4865467167, "9"],
    [-37.8803487833, 175.48595255, "3"],
    [-37.8802064167, 175.4861004, "5"],
    [-37.8800705167, 175.4862671167, "7"],
    [-37.8798887333, 175.4863712333, "7A"],
    [-37.8801676667, 175.4866722667, "10"],
    [-37.88029245, 175.4868499667, "8"],
    [-37.8803302167, 175.4865822167, "6"],
    [-37.88038715, 175.4864004167, "4"],
    [-37.8805029333, 175.4862314167, "2"],
    [-37.9127148667, 175.4710607833, "51"],
    [-37.9118609667, 175.4668648, "20"],
    [-37.9122010667, 175.47078695, "49A"],
    [-37.91191245, 175.4682913833, "29"],
    [-37.9112774333, 175.4668027333, "17A"],
    [-37.91244995, 175.4700709833, "41"],
    [-37.9149636, 175.4772568333, "98"],
    [-37.9128421833, 175.4702103167, "42"],
    [-37.91130515, 175.4650217667, "2"],
    [-37.9140405333, 175.4754503833, "85"],
    [-37.91155815, 175.4670938833, "21"],
    [-37.9144416167, 175.4754564, "86"],
    [-37.91149715, 175.4668828667, "19"],
    [-37.9155068167, 175.4784839167, "116"],
    [-37.9135311667, 175.4736794833, "69"],
    [-37.9146717667, 175.4773664833, "103"],
    [-37.9135175667, 175.4724437333, "62"],
    [-37.9117463, 175.4676612167, "23"],
    [-37.9136108833, 175.47263915, "64"],
    [-37.9118005167, 175.46788515, "25"],
    [-37.9142630167, 175.4748833333, "80"],
    [-37.9118481833, 175.4680930167, "27"],
    [-37.91519165, 175.47727755, "100"],
    [-37.9121701, 175.4679073167, "28"],
    [-37.9152358167, 175.4780924833, "112"],
    [-37.9122425667, 175.4681859167, "30"],
    [-37.9150027167, 175.47843285, "107"],
    [-37.91196865, 175.4684916833, "31"],
    [-37.9132330333, 175.4726685333, "61"],
    [-37.9123722, 175.4685087667, "32"],
    [-37.9151754667, 175.4790262, "113"],
    [-37.9120319833, 175.46868985, "33"],
    [-37.9151328167, 175.4788729, "111"],
    [-37.9124617167, 175.4687799833, "34"],
    [-37.9150617167, 175.4786454167, "109"],
    [-37.9120926, 175.4688931667, "35"],
    [-37.9132881333, 175.47285965, "63"],
    [-37.9119984333, 175.4691844, "37A"],
    [-37.9120311, 175.4673706667, "24"],
    [-37.91214925, 175.46909885, "37"],
    [-37.91408025, 175.4759690833, "91B"],
    [-37.9125366, 175.4691343, "38"],
    [-37.9134794833, 175.4739836167, "71A"],
    [-37.9122081167, 175.4674649333, "26A"],
    [-37.9140814333, 175.4736708667, "72A"],
    [-37.9120801, 175.4675947333, "26"],
    [-37.9113324167, 175.46512405, "4"],
    [-37.91185795, 175.4686138167, "31A"],
    [-37.9144403167, 175.4767387667, "101"],
    [-37.9125054167, 175.46896025, "36A"],
    [-37.9151334833, 175.4778022667, "106"],
    [-37.9126167833, 175.4688409667, "36B"],
    [-37.9111576, 175.4663765167, "13A"],
    [-37.9112960833, 175.4662379, "13"],
    [-37.9116252167, 175.46602135, "14"],
    [-37.9113666167, 175.4664507833, "15"],
    [-37.9117068333, 175.466336, "16"],
    [-37.9114338333, 175.4666576, "17"],
    [-37.9119338667, 175.4665694167, "18A"],
    [-37.9117808333, 175.4665752, "18"],
    [-37.9110205, 175.4652438667, "3"],
    [-37.9110742833, 175.4654501167, "5"],
    [-37.9111370833, 175.4656566833, "7"],
    [-37.9111865833, 175.4658542667, "9"],
    [-37.9112390333, 175.46602075, "11"],
    [-37.9118135167, 175.46543705, "6A"],
    [-37.9118572167, 175.46556135, "6B"],
    [-37.91145615, 175.4655286, "6"],
    [-37.9115389167, 175.4657957167, "8"],
    [-37.9127748333, 175.4699760667, "40"],
    [-37.9125127167, 175.4703133, "43"],
    [-37.9129274, 175.4704172833, "44"],
    [-37.9125759833, 175.4705303667, "45"],
    [-37.9129758667, 175.4706118, "46"],
    [-37.9126359667, 175.4707644, "47"],
    [-37.91226225, 175.47106665, "49"],
    [-37.9130937833, 175.4709588833, "50"],
    [-37.9131644667, 175.4711523, "52"],
    [-37.9132299667, 175.4713462167, "60"],
    [-37.9127690833, 175.4712279667, "53"],
    [-37.9133607167, 175.4730695833, "65"],
    [-37.91367805, 175.4728816667, "66"],
    [-37.9134211, 175.4732760667, "67"],
    [-37.9137477833, 175.4731176, "68"],
    [-37.9138932333, 175.4736511667, "70"],
    [-37.9135950667, 175.4738879833, "71"],
    [-37.9139430167, 175.4737982333, "72"],
    [-37.9136486, 175.4740868667, "73"],
    [-37.91400415, 175.4740125833, "74"],
    [-37.9140350333, 175.4741693833, "76"],
    [-37.91432385, 175.475081, "82"],
    [-37.9139975333, 175.47523055, "83"],
    [-37.9143889667, 175.47526065, "84"],
    [-37.9137640333, 175.47575135, "87"],
    [-37.91449875, 175.4756521167, "88"],
    [-37.9141123, 175.4756848833, "89"],
    [-37.9145492167, 175.4758458667, "90"],
    [-37.9141779667, 175.4758650667, "91"],
    [-37.9146104833, 175.4760345, "92"],
    [-37.9142320333, 175.4760478833, "93"],
    [-37.9146642167, 175.47621125, "94"],
    [-37.9142896667, 175.4762277667, "95"],
    [-37.9147136833, 175.4764402833, "96"],
    [-37.9143434167, 175.47639805, "97"],
    [-37.9143937167, 175.4765685, "99"],
    [-37.91501315, 175.4774403667, "102"],
    [-37.9154860667, 175.4774428167, "104"],
    [-37.9149432667, 175.4782801, "105"],
    [-37.9152651667, 175.47833035, "114"],
    [-37.9299333167, 175.55909085, "128"],
    [-37.9286782833, 175.5545978, "181"],
    [-37.9300747333, 175.5497311333, "3/193"],
    [-37.9276611167, 175.5543011333, "192"],
    [-37.9305557833, 175.5594630333, "129"],
    [-37.9280362, 175.5517895, "2/193"],
    [-37.9284764, 175.5616764333, "103"],
    [-37.93143935, 175.55390345, "165"],
    [-37.9288132, 175.5647016167, "61"],
    [-37.9275235, 175.5619954833, "94"],
    [-37.93081245, 175.5577222333, "149"],
    [-37.9300416667, 175.5566331333, "161"],
    [-37.92921255, 175.5684947, "16"],
    [-37.9304111667, 175.5673126333, "35"],
    [-37.9291729667, 175.5653647333, "55"],
    [-37.9289266333, 175.5656691333, "56"],
    [-37.92751825, 175.5531413167, "1/193"],
    [-37.9323321667, 175.5512635167, "1/165"],
    [-37.9045377667, 175.4827770167, "3"],
    [-37.9051343333, 175.4829339167, "10"],
    [-37.9045625, 175.4832139167, "4"],
    [-37.9052854167, 175.4828661667, "12"],
    [-37.9045012833, 175.4825234, "3A"],
    [-37.9054383, 175.4831963, "14"],
    [-37.9048575167, 175.4826078167, "7"],
    [-37.9050790667, 175.4825558167, "9A"],
    [-37.90496205, 175.4830191667, "8"],
    [-37.9050431833, 175.4823803833, "9B"],
    [-37.9047063167, 175.4826914667, "5"],
    [-37.9051649333, 175.4825182667, "11"],
    [-37.9047697333, 175.4831092667, "6"],
    [-37.9044120833, 175.4828407333, "1"],
    [-37.8987653333, 175.4845873667, "12"],
    [-37.89849935, 175.4843253333, "8"],
    [-37.8989808833, 175.4835699333, "13"],
    [-37.8982670333, 175.4839818167, "5"],
    [-37.89792805, 175.4841291833, "1"],
    [-37.8990696333, 175.48395625, "18"],
    [-37.8983429167, 175.4837488833, "7A"],
    [-37.8986908667, 175.4846387167, "10"],
    [-37.8985086333, 175.48330895, "9A"],
    [-37.8980756833, 175.4840675333, "3"],
    [-37.8984572667, 175.4838707, "7"],
    [-37.8988333833, 175.48411825, "16"],
    [-37.89797735, 175.4845139167, "2"],
    [-37.8988639833, 175.4832473, "9B"],
    [-37.8985740667, 175.4844548333, "8A"],
    [-37.8983953667, 175.4832022167, "9"],
    [-37.898132, 175.48448765, "4"],
    [-37.8983169333, 175.48441905, "6"],
    [-37.898835, 175.4848386, "12A"],
    [-37.8982524667, 175.4837739667, "5A"],
    [-37.7992683667, 175.4068494, "44D"],
    [-37.7973138333, 175.40680895, "37"],
    [-37.79798795, 175.4063265667, "41"],
    [-37.7983426667, 175.4060350833, "38"],
    [-37.7981863, 175.40728095, "45"],
    [-37.7985252667, 175.4070533167, "46"],
    [-37.7991710833, 175.4079073667, "44A"],
    [-37.7994488333, 175.4084595333, "44B"],
    [-37.7998703833, 175.4089765833, "44C"],
    [-37.7969343667, 175.4040572333, "15"],
    [-37.7991115833, 175.406026, "44E"],
    [-37.9108972667, 175.4737860333, "1"],
    [-37.9109227833, 175.4740157167, "3"],
    [-37.9110122167, 175.47419315, "5"],
    [-37.91133475, 175.4740478833, "6"],
    [-37.91125305, 175.4738936667, "4"],
    [-37.9111422333, 175.4736767667, "2"],
    [-37.9110952167, 175.47448295, "7"],
    [-37.9112131667, 175.4741245667, "8"],
    [-37.8804519333, 175.4809153167, "16A"],
    [-37.8808188333, 175.4804471833, "8"],
    [-37.8805619667, 175.4804252833, "10"],
    [-37.8810451833, 175.4809865167, "11"],
    [-37.8806955167, 175.4806394, "12"],
    [-37.8808969, 175.48108405, "13"],
    [-37.8806416, 175.4807763833, "14"],
    [-37.8807567, 175.48110125, "15"],
    [-37.8806444167, 175.4809707333, "16"],
    [-37.8805414833, 175.4812062167, "17"],
    [-37.8812994167, 175.4798864833, "1"],
    [-37.8810411333, 175.4798769333, "2"],
    [-37.8812669, 175.4801150167, "3"],
    [-37.8810092333, 175.4800721333, "4"],
    [-37.8811867333, 175.48041535, "5"],
    [-37.8809235, 175.4802776833, "6"],
    [-37.8811437833, 175.4806999667, "7"],
    [-37.8811760167, 175.4808741333, "9"],
    [-37.8778504833, 175.5246844167, "102"],
    [-37.8819230667, 175.52038225, "37"],
    [-37.8838481333, 175.5190955, "15"],
    [-37.8825636667, 175.5211268, "42"],
    [-37.8789988, 175.5217598167, "79"],
    [-37.8729074667, 175.5286693667, "167"],
    [-37.8760724333, 175.52502585, "127"],
    [-37.8745184833, 175.5278637167, "148"],
    [-37.8744641, 175.5268869667, "145"],
    [-37.8971449, 175.3967563, "82"],
    [-37.8943781833, 175.3977300667, "44"],
    [-37.9004613, 175.47640765, "13"],
    [-37.9004093667, 175.4762205333, "11"],
    [-37.9002790833, 175.4769703167, "16"],
    [-37.9003597167, 175.4772565, "20"],
    [-37.90090275, 175.4763007167, "15"],
    [-37.90094715, 175.4764403167, "17"],
    [-37.9006751333, 175.4771785333, "27"],
    [-37.90107225, 175.4768541333, "25"],
    [-37.9001119667, 175.4749271333, "1"],
    [-37.9006160667, 175.4769211667, "23"],
    [-37.9002628, 175.4757354, "3"],
    [-37.9005473333, 175.4767056, "19"],
    [-37.9002167333, 175.4750815167, "2"],
    [-37.8998862167, 175.4772123833, "18"],
    [-37.9003037333, 175.47596475, "9"],
    [-37.9000952167, 175.4752010833, "2A"],
    [-37.9006044167, 175.475943, "9A"],
    [-37.9085414, 175.47102025, "1"],
    [-37.90831215, 175.4705452333, "4"],
    [-37.9085338333, 175.4706769667, "2"],
    [-37.90815565, 175.470603, "5"],
    [-37.9082244667, 175.4708460167, "6"],
    [-37.9083062, 175.4711227667, "7"],
    [-37.9084509833, 175.47045035, "3"],
    [-37.8911392333, 175.4583220667, "8"],
    [-37.891127, 175.4585561667, "10"],
    [-37.8912095833, 175.4581187333, "7"],
    [-37.8910674833, 175.4575599333, "2"],
    [-37.8913220333, 175.4574411833, "1"],
    [-37.89159775, 175.4573200333, "1A"],
    [-37.8910451833, 175.4580652333, "6"],
    [-37.8913072667, 175.4576702667, "3"],
    [-37.8913322, 175.4579054333, "5"],
    [-37.8910210167, 175.45784865, "4"],
    [-37.8853014, 175.4629564833, "3"],
    [-37.88554135, 175.4629736, "2"],
    [-37.88541785, 175.46296925, "1"],
    [-37.9193531833, 175.54385725, "354"],
    [-37.9188882667, 175.5420886333, "355"],
    [-37.9192738333, 175.5435102833, "356"],
    [-37.9192985333, 175.5429392833, "358"],
    [-37.9193181167, 175.54233135, "360"],
    [-37.9192005, 175.5403558833, "130"],
    [-37.9186817333, 175.5404104667, "109"],
    [-37.9199342167, 175.5412764833, "260"],
    [-37.9193768333, 175.5412782167, "223"],
    [-37.91831485, 175.5400403333, "103"],
    [-37.91961875, 175.5408546833, "200"],
    [-37.9176805, 175.5413459167, "105"],
    [-37.9190955, 175.5408870167, "171"],
    [-37.9182861833, 175.5408937167, "107"],
    [-37.9195153, 175.5433797, "352"],
    [-37.92030865, 175.54192075, "264"],
    [-37.920463, 175.5417725, "262"],
    [-37.9197269667, 175.5432480167, "350"],
    [-37.9197592167, 175.5415707667, "266"],
    [-37.9195913167, 175.54231935, "348"],
    [-37.9183186167, 175.5393124667, "2"],
    [-37.9187989667, 175.53988695, "70"],
    [-37.9185694, 175.5418133, "353"],
    [-37.8994012, 175.3657659333, "821"],
    [-37.89971895, 175.3645648833, "835"],
    [-37.9139332167, 175.4090271667, "332"],
    [-37.8988464667, 175.3659825667, "828"],
    [-37.9022981, 175.38067085, "685"],
    [-37.9065350333, 175.4018221167, "434"],
    [-37.90028885, 175.3798328667, "697"],
    [-37.9084945333, 175.4050759167, "410"],
    [-37.89922135, 175.3740981833, "747"],
    [-37.9232422167, 175.4145657333, "185"],
    [-37.9245097667, 175.41242555, "187"],
    [-37.9159503333, 175.40778185, "303"],
    [-37.9094665, 175.4069157667, "388"],
    [-37.9231998333, 175.4170489, "158"],
    [-37.9102601, 175.4072221667, "383"],
    [-37.9207001, 175.4065603167, "257"],
    [-37.9102264, 175.4082195, "372"],
    [-37.9217580667, 175.4087488, "233"],
    [-37.9021599833, 175.3911428167, "598"],
    [-37.9229502667, 175.4127942667, "197"],
    [-37.90296435, 175.3924815167, "583"],
    [-37.9255960833, 175.4136194333, "2/187"],
    [-37.9245176, 175.4278129833, "59"],
    [-37.9249067167, 175.4263146667, "75"],
    [-37.92534045, 175.4130770333, "1/187"],
    [-37.9077678, 175.4038107833, "424"],
    [-37.9244162333, 175.4258990667, "76"],
    [-37.9237273333, 175.4194401833, "138"],
    [-37.9019339833, 175.3879181167, "625"],
    [-37.90920365, 175.4053418167, "397"],
    [-37.9057407667, 175.39478875, "540"],
    [-37.9243174333, 175.4220341833, "112"],
    [-37.8992012333, 175.3666729333, "815"],
    [-37.9110874833, 175.4102195833, "360"],
    [-37.9027096, 175.3913196333, "591"],
    [-37.9011183833, 175.38410915, "655"],
    [-37.9234701333, 175.4155696333, "181"],
    [-37.90254175, 175.3926162167, "582"],
    [-37.92450575, 175.4246711167, "90"],
    [-37.9242924167, 175.4289432833, "47"],
    [-37.8986079833, 175.3685293333, "801"],
    [-37.9030857, 175.3932839, "577"],
    [-37.90235535, 175.3894401667, "613"],
    [-37.9008578833, 175.3826145667, "675"],
    [-37.90071405, 175.3818195, "681"],
    [-37.8820639667, 175.4856738333, "4"],
    [-37.8811382833, 175.4847224333, "17"],
    [-37.8820705, 175.4859065167, "2"],
    [-37.8822594167, 175.4854946333, "5"],
    [-37.88230695, 175.4860176667, "1"],
    [-37.8816572833, 175.4846057667, "14"],
    [-37.8822931167, 175.4857413833, "3"],
    [-37.8820614833, 175.4849636833, "10"],
    [-37.8814784167, 175.4853259333, "20"],
    [-37.8820341167, 175.4854254, "6"],
    [-37.8814562667, 175.4855579, "22"],
    [-37.8820407667, 175.4852060167, "8"],
    [-37.88139725, 175.4857370167, "24"],
    [-37.8819474, 175.4846312, "12"],
    [-37.8812179833, 175.4855291833, "23"],
    [-37.8811665833, 175.4849644, "19"],
    [-37.8822871333, 175.4850344167, "9"],
    [-37.8822664667, 175.4852611, "7"],
    [-37.8813914667, 175.4847524, "16"],
    [-37.8812347667, 175.4852638167, "21"],
    [-37.8814556, 175.48509055, "18"],
    [-37.8811484833, 175.4844946, "15"],
    [-37.8823244833, 175.4848154333, "11"],
    [-37.8823452833, 175.4845833667, "13"],
    [-37.9599893167, 175.5018972167, "82"],
    [-37.9618358833, 175.4874459667, "18"],
    [-37.9618619, 175.50776785, "90"],
    [-37.9616283333, 175.4929460167, "64"],
    [-37.9611726167, 175.4984393667, "80"],
    [-37.9607851, 175.5016190333, "86"],
    [-37.9608416167, 175.4971466, "78"],
    [-37.9614436333, 175.5080607667, "92"],
    [-37.9643050333, 175.4953529167, "2/84"],
    [-37.9610803, 175.4864609, "7"],
    [-37.9606146667, 175.4939399, "83"],
    [-37.9609926167, 175.4857235333, "3"],
    [-37.96113465, 175.4948554, "84"],
    [-37.9613254333, 175.5047791833, "88"],
    [-37.8593059833, 175.5330650333, "10"],
    [-37.8596072333, 175.533587, "19"],
    [-37.90423375, 175.4844148, "107B"],
    [-37.9020309333, 175.4769959167, "49A"],
    [-37.9029281167, 175.4805014167, "81A"],
    [-37.9016197667, 175.4756437833, "37"],
    [-37.90101005, 175.4735379833, "21"],
    [-37.9016823667, 175.4760847833, "39A"],
    [-37.90178185, 175.4761837333, "41"],
    [-37.9011922667, 175.4725514167, "8"],
    [-37.9015593833, 175.4738315333, "26"],
    [-37.9015446833, 175.473388, "18A"],
    [-37.9024291, 175.4783928, "57"],
    [-37.9010319, 175.4736316167, "23"],
    [-37.9039576333, 175.4835641667, "103"],
    [-37.9011953333, 175.4741573333, "29A"],
    [-37.9042121, 175.4828802833, "100"],
    [-37.9010152, 175.4741578667, "29B"],
    [-37.9019761833, 175.4752665167, "34"],
    [-37.90256225, 175.4788024667, "71"],
    [-37.9031558833, 175.4793385, "68"],
    [-37.9043412833, 175.48477025, "109A-109D"],
    [-37.9030168667, 175.4803624833, "81"],
    [-37.9054432333, 175.48740955, "114"],
    [-37.9032955667, 175.4821555167, "93B"],
    [-37.9052043, 175.4875160667, "118"],
    [-37.9040282167, 175.4838154167, "105"],
    [-37.90498365, 175.4875592167, "120"],
    [-37.90388715, 175.4833244, "101"],
    [-37.90156105, 175.47306285, "1/14-5/14"],
    [-37.9028688, 175.4798400167, "77"],
    [-37.9017512, 175.4730746667, "16A"],
    [-37.9034353833, 175.48239905, "95A"],
    [-37.9018501333, 175.47294875, "16B"],
    [-37.9065120667, 175.4873521833, "114A"],
    [-37.9027523, 175.47799015, "58"],
    [-37.9029325833, 175.4801074833, "79"],
    [-37.9032525167, 175.4811784, "87"],
    [-37.9031822833, 175.4809204, "85"],
    [-37.9033394667, 175.4814522333, "89"],
    [-37.9011077167, 175.4738625833, "25"],
    [-37.9024641, 175.4756984333, "40"],
    [-37.9044449, 175.4836965167, "104"],
    [-37.9023471833, 175.47810245, "55"],
    [-37.9029669667, 175.4787094167, "62"],
    [-37.90442275, 175.4850982, "115"],
    [-37.9026089, 175.47587495, "44"],
    [-37.90264365, 175.4790681667, "73"],
    [-37.9035878333, 175.4823534, "95"],
    [-37.9024915, 175.4786270833, "67"],
    [-37.9031010167, 175.4812452667, "87A"],
    [-37.9030982, 175.47913305, "66"],
    [-37.9035099167, 175.4821307, "93A"],
    [-37.90079465, 175.4741973833, "33"],
    [-37.9040185667, 175.48229025, "96"],
    [-37.9023384167, 175.4765524833, "50"],
    [-37.9022154167, 175.4786401833, "59"],
    [-37.9018837333, 175.4765543333, "45"],
    [-37.9029163333, 175.4785064167, "60"],
    [-37.9022748167, 175.4763478167, "48"],
    [-37.9041422, 175.4826398833, "98"],
    [-37.9022017333, 175.4761212333, "46A"],
    [-37.9034542333, 175.4818904, "91"],
    [-37.9019505833, 175.4767386667, "47"],
    [-37.9018310833, 175.4763711167, "43"],
    [-37.9022245, 175.4761991, "46B"],
    [-37.9022058833, 175.4776710667, "51"],
    [-37.9011141167, 175.4738904667, "31"],
    [-37.90381365, 175.48307595, "99"],
    [-37.9013508667, 175.4731568833, "14"],
    [-37.9026744667, 175.4776618667, "54"],
    [-37.9013012667, 175.4729456, "12"],
    [-37.9016709167, 175.4758279833, "39"],
    [-37.9012509333, 175.4727291833, "10"],
    [-37.902262, 175.4778573167, "53"],
    [-37.9011626167, 175.4723885667, "6"],
    [-37.9015607167, 175.4753714333, "35"],
    [-37.9007910667, 175.47417145, "27"],
    [-37.9020738833, 175.47565455, "36"],
    [-37.9010502667, 175.4719555, "4"],
    [-37.9036689667, 175.4826166, "97"],
    [-37.90165275, 175.4742215833, "28"],
    [-37.9043576, 175.4834127, "102"],
    [-37.9014172833, 175.4734044167, "18"],
    [-37.90310965, 175.4806441333, "83"],
    [-37.90305305, 175.4810779, "85A"],
    [-37.9041825833, 175.4842419667, "107A"],
    [-37.9018864667, 175.4749266667, "32"],
    [-37.9018503333, 175.47696095, "49"],
    [-37.9030326167, 175.47892515, "64"],
    [-37.9017621333, 175.4733169667, "20"],
    [-37.89705485, 175.4732848667, "5"],
    [-37.8972060833, 175.4727957833, "1A"],
    [-37.8950392167, 175.47373745, "28B"],
    [-37.8965514333, 175.4726139833, "6"],
    [-37.8952181167, 175.4744414833, "33B"],
    [-37.8952637167, 175.47354965, "26A"],
    [-37.8951086667, 175.4742331167, "33A"],
    [-37.8966904333, 175.4729455, "11A"],
    [-37.8962754333, 175.4733100167, "17"],
    [-37.8968641333, 175.4728138667, "1/3-5/3"],
    [-37.8949580667, 175.4743396167, "35"],
    [-37.8973106167, 175.4729746, "1B"],
    [-37.8949376167, 175.47388345, "30"],
    [-37.89572315, 175.4732895, "18"],
    [-37.8958303167, 175.4731749333, "16"],
    [-37.8969656167, 175.4732634, "7"],
    [-37.896495, 175.4731159833, "13"],
    [-37.8968125667, 175.4731199333, "11B"],
    [-37.89640605, 175.4732035667, "15"],
    [-37.8952445667, 175.4736735667, "26"],
    [-37.8960091167, 175.47303035, "14"],
    [-37.896205, 175.47289145, "10"],
    [-37.8956152, 175.4738212833, "29"],
    [-37.8950829667, 175.4737896, "28A"],
    [-37.8955509167, 175.4734385333, "22"],
    [-37.8972144833, 175.4729756, "1C"],
    [-37.8970069167, 175.4727237833, "1D"],
    [-37.8964112667, 175.4727309333, "8"],
    [-37.89685155, 175.4723649167, "2"],
    [-37.8959909833, 175.4735371333, "19"],
    [-37.8968653333, 175.4732429833, "9"],
    [-37.8952936, 175.4740853667, "31"],
    [-37.8956491833, 175.47335855, "20"],
    [-37.8971588833, 175.4725988, "1"],
    [-37.95948505, 175.3813743167, "3/362"],
    [-37.9267924667, 175.3947664833, "790"],
    [-37.95374205, 175.3785110333, "417"],
    [-37.9270906333, 175.3962139333, "802"],
    [-37.95208085, 175.3790772833, "435"],
    [-37.9537863833, 175.37916715, "418"],
    [-37.9336977167, 175.3872475333, "660"],
    [-37.9370890667, 175.3861055333, "610"],
    [-37.9632177167, 175.37745245, "310"],
    [-37.9552044167, 175.3775981, "391"],
    [-37.95356905, 175.3785904167, "419"],
    [-37.9658669167, 175.3737947167, "273"],
    [-37.9591853, 175.37834395, "360"],
    [-37.95818485, 175.3776341167, "1/362"],
    [-37.9264044, 175.3933694833, "770"],
    [-37.94279195, 175.3830579333, "541"],
    [-37.9358610167, 175.3856405, "623"],
    [-37.92604605, 175.39188825, "762"],
    [-37.95893715, 175.3798225167, "2/362"],
    [-37.9257693333, 175.3904065167, "750"],
    [-37.9654268167, 175.3769618333, "308"],
    [-37.9323014833, 175.3868321333, "743"],
    [-37.93764955, 175.3850314, "599"],
    [-37.9095889, 175.4694829333, "13"],
    [-37.9099912333, 175.4694063167, "4"],
    [-37.9101332, 175.4693430167, "2"],
    [-37.90943375, 175.4691617333, "9"],
    [-37.90960705, 175.46916755, "7"],
    [-37.9100405, 175.4689760667, "1"],
    [-37.9095270167, 175.4693311, "11"],
    [-37.9098948167, 175.4690437, "3"],
    [-37.9097340167, 175.4696952667, "10"],
    [-37.9095571, 175.4697117833, "12"],
    [-37.90975285, 175.4691024667, "5"],
    [-37.9018515667, 175.47956045, "10"],
    [-37.9025733333, 175.4796073833, "1A"],
    [-37.90234615, 175.4792779, "4"],
    [-37.9027908167, 175.4795601333, "1"],
    [-37.9024103667, 175.47967745, "3"],
    [-37.90205615, 175.4794369167, "8"],
    [-37.89827985, 175.4664433333, "25"],
    [-37.8990345167, 175.4670508, "11"],
    [-37.8989251667, 175.4664513667, "17"],
    [-37.8990204833, 175.4665540333, "15"],
    [-37.8996123667, 175.4678836167, "10"],
    [-37.89873215, 175.4672828, "18"],
    [-37.89858465, 175.4666028667, "21"],
    [-37.8990743833, 175.4675788, "12A"],
    [-37.8984592, 175.4665057, "23"],
    [-37.89889965, 175.467451, "12"],
    [-37.9002081667, 175.46756315, "1"],
    [-37.9001357167, 175.4679316667, "4"],
    [-37.898277, 175.46726385, "24"],
    [-37.89978315, 175.46793515, "8"],
    [-37.8983929667, 175.4669553667, "26"],
    [-37.8991940667, 175.4672154167, "9"],
    [-37.8980936167, 175.4664998167, "27"],
    [-37.8995042, 175.4674747167, "7"],
    [-37.898334, 175.46731845, "22"],
    [-37.8999632833, 175.4679440333, "6"],
    [-37.89794665, 175.4665422333, "29"],
    [-37.8988821167, 175.4669019167, "13"],
    [-37.8980275167, 175.4668801333, "30"],
    [-37.89871525, 175.4676048667, "14"],
    [-37.8977558667, 175.4665362333, "31"],
    [-37.8986535, 175.4675602667, "16"],
    [-37.8979195833, 175.4667739667, "32"],
    [-37.89979585, 175.4675336833, "5"],
    [-37.8974943167, 175.46652485, "33"],
    [-37.8987147333, 175.46672835, "19"],
    [-37.8977257333, 175.4666500833, "34"],
    [-37.8985690333, 175.4671123833, "20"],
    [-37.9003081667, 175.46791995, "2"],
    [-37.8981989167, 175.4668991, "28"],
    [-37.8999918333, 175.4675733167, "3"],
    [-37.9085979, 175.47228295, "6"],
    [-37.9082979333, 175.4727952, "1"],
    [-37.9084415, 175.4723396833, "4"],
    [-37.9085185333, 175.4726990667, "3"],
    [-37.90870765, 175.4724272833, "8"],
    [-37.9082453167, 175.4725341667, "2"],
    [-37.9087162, 175.4725830333, "5"],
    [-37.8992527333, 175.46141755, "5A"],
    [-37.8974537333, 175.4597499, "30"],
    [-37.8990513167, 175.461357, "5"],
    [-37.89854655, 175.4618827833, "2"],
    [-37.8962418167, 175.4614646667, "69"],
    [-37.89729515, 175.4597868833, "32"],
    [-37.8986072, 175.4598125833, "18"],
    [-37.8990041, 175.4601224, "17"],
    [-37.8986801, 175.46007825, "16"],
    [-37.8976013667, 175.4596983333, "28"],
    [-37.8987992333, 175.4607934667, "10"],
    [-37.8961486, 175.4612296167, "65"],
    [-37.8987145333, 175.4602998667, "14"],
    [-37.8986250667, 175.4616027833, "6"],
    [-37.8985372, 175.4606703, "12A"],
    [-37.8990944833, 175.4618171167, "3A"],
    [-37.8987547833, 175.4605145833, "12"],
    [-37.8989327667, 175.46174375, "3"],
    [-37.89940475, 175.4614229833, "5B"],
    [-37.8981109833, 175.4595815167, "22"],
    [-37.8992761667, 175.4612548833, "7A"],
    [-37.89858635, 175.4617420167, "4"],
    [-37.89615355, 175.4610093667, "63"],
    [-37.8960633167, 175.4614357, "67"],
    [-37.8970480833, 175.4594701667, "47"],
    [-37.8964719167, 175.4610726, "46"],
    [-37.89942805, 175.4612639, "7B"],
    [-37.8969129333, 175.4595048833, "49"],
    [-37.8983810333, 175.4595983, "20"],
    [-37.8966503, 175.4601548, "40"],
    [-37.8965228167, 175.4605625667, "42"],
    [-37.8979410167, 175.4596252, "24"],
    [-37.89698365, 175.45986105, "36"],
    [-37.89909445, 175.46094265, "9"],
    [-37.8990747, 175.4611943333, "7"],
    [-37.8968194333, 175.4598978167, "38"],
    [-37.8990957833, 175.4607578667, "11"],
    [-37.8993121167, 175.4605309833, "13A"],
    [-37.8993347667, 175.4606526667, "11A"],
    [-37.8977427333, 175.4596749667, "26"],
    [-37.8964422833, 175.4608866833, "44"],
    [-37.897148, 175.4598171667, "34"],
    [-37.8964457667, 175.4614839667, "50"],
    [-37.8965226, 175.4613232333, "48"],
    [-37.89666225, 175.4616268167, "50A"],
    [-37.8967215667, 175.4614938667, "48A"],
    [-37.8961699833, 175.4606764833, "61"],
    [-37.8990274167, 175.4594845333, "21A"],
    [-37.8978044833, 175.4592938, "37"],
    [-37.89765145, 175.45932785, "39"],
    [-37.8972011167, 175.4594360833, "45"],
    [-37.89748945, 175.45936165, "41"],
    [-37.8973585333, 175.4594078333, "43"],
    [-37.8989135833, 175.4593674167, "23A"],
    [-37.8982502167, 175.4591910333, "31"],
    [-37.8980929167, 175.4592136833, "33"],
    [-37.8979576667, 175.4592540667, "35"],
    [-37.8987865, 175.459442, "23"],
    [-37.8983624667, 175.4591781333, "29"],
    [-37.89859365, 175.4592542667, "25"],
    [-37.8984648833, 175.4592043833, "27"],
    [-37.89599285, 175.4605853833, "61A"],
    [-37.8967193667, 175.4595488167, "51"],
    [-37.89895945, 175.45991735, "19"],
    [-37.8988903667, 175.4596039833, "21"],
    [-37.8991762833, 175.4598346833, "19A"],
    [-37.8990309833, 175.4603212, "15"],
    [-37.8992306667, 175.4600061667, "17A"],
    [-37.8990798333, 175.46053775, "13"],
    [-37.8960234, 175.46042255, "59A"],
    [-37.8961819167, 175.4595465333, "55A"],
    [-37.8965562167, 175.4596334167, "53"],
    [-37.8962467833, 175.4604475, "59"],
    [-37.8961687167, 175.459936, "57A"],
    [-37.8963601167, 175.4599881167, "57"],
    [-37.8964266, 175.4598209333, "55"],
    [-37.89876895, 175.4610164333, "8"],
    [-37.89888655, 175.46191985, "1"],
    [-37.8992657, 175.4618445667, "3B"],
    [-37.89942775, 175.46177925, "3C"],
    [-37.8994213333, 175.461939, "3D"],
    [-37.8877845667, 175.4769104167, "15A"],
    [-37.8884691333, 175.47652905, "9"],
    [-37.8876236833, 175.4762465333, "14"],
    [-37.8881092667, 175.4765359833, "11"],
    [-37.8870282333, 175.47689615, "21"],
    [-37.8878168667, 175.4761862, "12"],
    [-37.8869641167, 175.4766908333, "20"],
    [-37.88876965, 175.4761694167, "7"],
    [-37.8866340667, 175.4762948167, "20D"],
    [-37.8875209833, 175.4767726667, "17"],
    [-37.8878835333, 175.4766054, "13"],
    [-37.8870823167, 175.4763955, "18"],
    [-37.8885070833, 175.4758756667, "6"],
    [-37.8880108, 175.4760921833, "10"],
    [-37.8888735667, 175.4758855333, "5"],
    [-37.8879635, 175.4768245333, "13A"],
    [-37.8890102, 175.4753934667, "1"],
    [-37.887397, 175.4763382, "16"],
    [-37.8867165333, 175.4763817833, "20C"],
    [-37.8881819, 175.4760513167, "8"],
    [-37.886801, 175.4764408667, "20B"],
    [-37.8873439167, 175.4769787167, "19A"],
    [-37.88688675, 175.47651985, "20A"],
    [-37.8872187, 175.4769650667, "19"],
    [-37.8874603333, 175.4770461667, "19B"],
    [-37.8877107667, 175.4766732833, "15"],
    [-37.9028793667, 175.4694345, "9"],
    [-37.9027742, 175.4691508167, "5"],
    [-37.9027706333, 175.46934705, "7"],
    [-37.9030670833, 175.4689651833, "4"],
    [-37.903068, 175.4692231333, "6"],
    [-37.90282975, 175.4689251167, "2"],
    [-37.9030033, 175.4694327333, "8"],
    [-37.7979216167, 175.3709623333, "40"],
    [-37.7901529, 175.3755824, "144"],
    [-37.7907598333, 175.3744419, "134"],
    [-37.7937929667, 175.3664199167, "59C"],
    [-37.79439395, 175.3674624167, "59B"],
    [-37.7944289667, 175.3725634167, "82A"],
    [-37.7904513167, 175.3738425333, "131"],
    [-37.794607, 175.3745403833, "82B"],
    [-37.7921551167, 175.3768403, "132"],
    [-37.7926399833, 175.3722763, "102"],
    [-37.7967557, 175.3729791333, "60A"],
    [-37.7921326333, 175.37322975, "110"],
    [-37.8012874, 175.3703331, "14"],
    [-37.7948232167, 175.3716246, "74"],
    [-37.7979944667, 175.3703715167, "35"],
    [-37.7956465, 175.3714636167, "66"],
    [-37.7911951833, 175.3732412833, "123B"],
    [-37.7987651833, 175.3708161667, "32"],
    [-37.79171095, 175.3736367667, "112"],
    [-37.7976371833, 175.3704513833, "41"],
    [-37.7911877333, 175.3732945667, "123A"],
    [-37.7913029167, 175.37306835, "121"],
    [-37.7906186667, 175.3755869, "140"],
    [-37.7931244667, 175.3712613167, "93A"],
    [-37.7974290667, 175.3711039667, "42"],
    [-37.7936148167, 175.3719375667, "84"],
    [-37.8005517667, 175.3700387, "9"],
    [-37.7938986667, 175.3710440333, "77"],
    [-37.7965492333, 175.3713085167, "54"],
    [-37.8001176167, 175.3701064333, "13"],
    [-37.7930191667, 175.37129215, "93B"],
    [-37.7926151667, 175.37155955, "99A"],
    [-37.7950692833, 175.3686159167, "59A"],
    [-37.7969088, 175.37462925, "60B"],
    [-37.7951773167, 175.37087185, "75"],
    [-37.7921505, 175.3713529333, "99B"],
    [-37.7904565167, 175.3749809333, "138"],
    [-37.8006982167, 175.3700011, "7"],
    [-37.7991912, 175.3699700833, "29"],
    [-37.7967847667, 175.3705662167, "47"],
    [-37.792296, 175.3720602333, "99C"],
    [-37.7980087167, 175.36967245, "31"],
    [-37.7982152833, 175.3709274, "34"],
    [-37.9155702167, 175.4723301167, "4"],
    [-37.9159029, 175.4721897167, "8"],
    [-37.9157610833, 175.4726929667, "3"],
    [-37.9160956333, 175.4725375333, "7"],
    [-37.9153328, 175.4724436667, "2"],
    [-37.9164312667, 175.4723669167, "11"],
    [-37.9165995, 175.4722833833, "13"],
    [-37.9162671833, 175.4724523333, "9"],
    [-37.9162124833, 175.4720273, "12"],
    [-37.9160704833, 175.4720950333, "10"],
    [-37.9170187667, 175.4717177667, "22"],
    [-37.9164956667, 175.4718994167, "16"],
    [-37.9163615667, 175.4719599333, "14"],
    [-37.9155396833, 175.4728079667, "1"],
    [-37.9157325833, 175.4722579833, "6"],
    [-37.9159316, 175.47261835, "5"],
    [-37.8914888167, 175.4620999667, "21"],
    [-37.8837548, 175.4623328, "77B"],
    [-37.8930618833, 175.4622745, "11"],
    [-37.8852888667, 175.46116795, "76"],
    [-37.8913069667, 175.4621727167, "23"],
    [-37.8839160167, 175.4615298167, "75"],
    [-37.8883285167, 175.4618738833, "47"],
    [-37.8858521667, 175.46093185, "68B"],
    [-37.8853005333, 175.4610670333, "76A"],
    [-37.88383285, 175.4621270167, "75A"],
    [-37.8823235167, 175.4605504833, "110A"],
    [-37.8914899333, 175.46174725, "22"],
    [-37.8818567333, 175.4608746167, "116"],
    [-37.88353235, 175.4618320333, "77A"],
    [-37.88134175, 175.4613161333, "95"],
    [-37.8879809, 175.4618373667, "49"],
    [-37.88152115, 175.46131485, "93"],
    [-37.8885148667, 175.4618976167, "45"],
    [-37.8872325667, 175.4613256333, "54"],
    [-37.8877582, 175.4620199, "51A"],
    [-37.8837208833, 175.4615252, "77"],
    [-37.8879695167, 175.4611445833, "50A"],
    [-37.8933130333, 175.46192685, "6"],
    [-37.88794035, 175.46146015, "50"],
    [-37.8911399667, 175.4621445, "25"],
    [-37.8927127, 175.4625991167, "15"],
    [-37.8898722833, 175.4620120667, "37"],
    [-37.8817498333, 175.4605830833, "118A"],
    [-37.8856498167, 175.4611874667, "70"],
    [-37.8818152333, 175.4605837833, "118B"],
    [-37.8834546167, 175.4619323333, "1/79-3/79"],
    [-37.8817077833, 175.46087495, "120"],
    [-37.88566165, 175.4608763667, "70B"],
    [-37.8881064833, 175.4614714667, "48"],
    [-37.8883276833, 175.4614909, "46"],
    [-37.8900726, 175.4616307167, "34"],
    [-37.8824921167, 175.4614109333, "85"],
    [-37.8902574, 175.4620445833, "33"],
    [-37.8821857333, 175.4613799, "89"],
    [-37.8909901, 175.4620973667, "27"],
    [-37.8906249333, 175.4624066333, "31A"],
    [-37.8909031667, 175.4623998167, "27A"],
    [-37.8823715333, 175.4609577, "110"],
    [-37.8885618333, 175.4615104, "44"],
    [-37.8907907, 175.4624375833, "29A"],
    [-37.8911051167, 175.4615235333, "26A"],
    [-37.8912843667, 175.46171725, "24"],
    [-37.88775155, 175.4618187333, "51"],
    [-37.88202465, 175.4608939, "114"],
    [-37.8877833167, 175.4614137, "52"],
    [-37.8907810833, 175.462108, "29"],
    [-37.8910314667, 175.4617401833, "26"],
    [-37.882292, 175.4613977333, "87"],
    [-37.8906141333, 175.4621064667, "31"],
    [-37.8892757667, 175.4615758167, "38"],
    [-37.8904495, 175.4624898833, "33B"],
    [-37.8868235333, 175.461296, "58"],
    [-37.8904039167, 175.4622297, "33A"],
    [-37.8826623167, 175.4609461833, "106"],
    [-37.89295465, 175.4615430167, "14B"],
    [-37.8907016, 175.46165145, "28"],
    [-37.89291045, 175.4618812167, "14"],
    [-37.8854757, 175.461181, "74"],
    [-37.8930916667, 175.46189575, "12"],
    [-37.8856999, 175.4605845, "70A"],
    [-37.8928368667, 175.4622630833, "13"],
    [-37.8899615833, 175.4616178167, "36"],
    [-37.8925096667, 175.4618395167, "16A"],
    [-37.8927205667, 175.4618461, "16"],
    [-37.8925576333, 175.4622484333, "17"],
    [-37.8887964167, 175.4615352, "42"],
    [-37.8887897667, 175.4619157667, "43"],
    [-37.8813160833, 175.46082205, "124"],
    [-37.88148945, 175.46084125, "122"],
    [-37.8822301, 175.4605952667, "112B"],
    [-37.8821928667, 175.4609133167, "112A"],
    [-37.8825255, 175.4609447167, "108"],
    [-37.886356, 175.4607633833, "62A"],
    [-37.88384855, 175.46107535, "84"],
    [-37.8844810833, 175.46111955, "78"],
    [-37.8865957833, 175.4612863167, "60"],
    [-37.8870465333, 175.4613338333, "56"],
    [-37.8840136833, 175.4610932, "82"],
    [-37.8840612333, 175.4615617667, "73"],
    [-37.8858403667, 175.4612416667, "68A"],
    [-37.8863992833, 175.4612464333, "62"],
    [-37.88602145, 175.4612203, "66"],
    [-37.8862464, 175.4607918667, "64A"],
    [-37.8859472, 175.4606057333, "66A"],
    [-37.88617885, 175.4612264667, "64"],
    [-37.8841155833, 175.4606926667, "82A"],
    [-37.8842170667, 175.46156725, "71"],
    [-37.8843494167, 175.4615815167, "69"],
    [-37.8845482333, 175.4615789, "61"],
    [-37.8832313667, 175.4614822, "81"],
    [-37.8833854333, 175.46147585, "79"],
    [-37.8842273333, 175.4610982667, "80"],
    [-37.8842230833, 175.4607088333, "80A"],
    [-37.88898595, 175.4619261, "41"],
    [-37.8836924167, 175.4610583833, "86"],
    [-37.88897595, 175.4615556167, "40"],
    [-37.8835485833, 175.4610374, "88"],
    [-37.8812029, 175.4608328833, "126"],
    [-37.8834193333, 175.4610251833, "90"],
    [-37.8174314833, 175.3761889833, "28"],
    [-37.8175173333, 175.3745060667, "41A"],
    [-37.8189801, 175.3767644333, "19"],
    [-37.81721685, 175.3746944667, "40A"],
    [-37.8184217833, 175.3785756333, "7"],
    [-37.81727655, 175.3739209, "41C"],
    [-37.8169354333, 175.3751527667, "40B"],
    [-37.8183142667, 175.3745782, "39"],
    [-37.8177220333, 175.3774063833, "18"],
    [-37.8181192333, 175.3734650333, "41B"],
    [-37.8182567, 175.37774445, "15"],
    [-37.8177787833, 175.3756114, "31"],
    [-37.8171698, 175.37896375, "14"],
    [-37.8179103833, 175.3762068167, "27"],
    [-37.81816045, 175.3773152167, "17"],
    [-37.8187562833, 175.3765890167, "21"],
    [-37.81804885, 175.3788571, "6"],
    [-37.8184971667, 175.3750758833, "49"],
    [-37.8173303, 175.3796556667, "12"],
    [-37.8177653667, 175.3776830167, "16"],
    [-37.81610655, 175.3744603333, "40C"],
    [-37.8175659833, 175.3767630167, "24"],
    [-37.8857427167, 175.4668167833, "6"],
    [-37.8842291667, 175.46713325, "21"],
    [-37.88552105, 175.46728075, "7"],
    [-37.8822557833, 175.4671910833, "41A"],
    [-37.88573115, 175.4665300333, "6A"],
    [-37.8841256167, 175.4667261, "22"],
    [-37.8855689, 175.4668563667, "8"],
    [-37.8833609167, 175.4664140667, "30A"],
    [-37.8819612833, 175.4662849167, "42A"],
    [-37.8854916667, 175.4665621167, "8A"],
    [-37.88355305, 175.4666830167, "28"],
    [-37.8858997833, 175.46683345, "2"],
    [-37.88529365, 175.4675717333, "9A"],
    [-37.8853087167, 175.46724515, "9"],
    [-37.8858362167, 175.4668311, "4"],
    [-37.88501735, 175.4672261167, "13"],
    [-37.88173245, 175.4665125833, "44"],
    [-37.8819903833, 175.4669395333, "43"],
    [-37.8819599, 175.46652035, "42"],
    [-37.8821801667, 175.4669412, "41"],
    [-37.8820951, 175.4665340833, "40"],
    [-37.8822636667, 175.4665534167, "36"],
    [-37.8836934333, 175.4671131833, "27"],
    [-37.8817733333, 175.4669241, "45"],
    [-37.8811819833, 175.46709535, "49A"],
    [-37.8812991667, 175.4664858167, "48"],
    [-37.8815565333, 175.4668967167, "47"],
    [-37.8815367, 175.46651585, "46"],
    [-37.8837635333, 175.4667121, "26"],
    [-37.8811047333, 175.466856, "51"],
    [-37.8810985833, 175.4664679167, "50"],
    [-37.8813315833, 175.46687885, "49"],
    [-37.8838189667, 175.4665006, "26A"],
    [-37.8840672667, 175.46711675, "23"],
    [-37.8838811667, 175.4670993333, "25"],
    [-37.8839458833, 175.4667205667, "24"],
    [-37.8832529, 175.4673047167, "33A"],
    [-37.88359175, 175.4664604333, "28A"],
    [-37.8830642667, 175.4666342167, "32"],
    [-37.8835364167, 175.4675321, "29"],
    [-37.8834683333, 175.4670743667, "31"],
    [-37.883317, 175.4666640833, "30"],
    [-37.8851499333, 175.4667468, "12"],
    [-37.8851338167, 175.46723935, "11"],
    [-37.8828958667, 175.4666283167, "34"],
    [-37.88325825, 175.46707095, "33"],
    [-37.8853570333, 175.4667731167, "10"],
    [-37.88494775, 175.4672146833, "15"],
    [-37.8854012333, 175.466548, "10A"],
    [-37.88298215, 175.4670794667, "35"],
    [-37.9137448167, 175.4769976167, "9"],
    [-37.9139995, 175.4769421167, "1"],
    [-37.9137195833, 175.4762766333, "5"],
    [-37.9136874333, 175.4768144167, "8"],
    [-37.9138555833, 175.4762229167, "4"],
    [-37.9139553833, 175.4765034, "3"],
    [-37.9139429833, 175.4767303, "2"],
    [-37.91357485, 175.4763857833, "6"],
    [-37.91363055, 175.47658545, "7"],
    [-37.9070534333, 175.4673664667, "26"],
    [-37.9051596, 175.4668419167, "13"],
    [-37.9107910167, 175.4652498167, "70"],
    [-37.9049454167, 175.4681745833, "8"],
    [-37.9086697833, 175.466192, "46A"],
    [-37.9049889333, 175.4680154333, "8A"],
    [-37.90506145, 175.4674941833, "7"],
    [-37.9106372333, 175.4652995167, "68"],
    [-37.9083611333, 175.4663507667, "42"],
    [-37.9062177333, 175.4681393167, "16B"],
    [-37.91076535, 175.46463305, "71"],
    [-37.90610465, 175.46785555, "16A"],
    [-37.9054751167, 175.4677389667, "12"],
    [-37.9058089833, 175.4680032167, "14A"],
    [-37.9054853667, 175.4672854833, "17"],
    [-37.90856345, 175.4665805333, "44"],
    [-37.9088263, 175.4661217333, "48"],
    [-37.9101238833, 175.4655415667, "62"],
    [-37.908529, 175.4662483167, "46"],
    [-37.9056721833, 175.46797, "12A"],
    [-37.9057461833, 175.4675941167, "14"],
    [-37.90600145, 175.4670439167, "23"],
    [-37.9076178833, 175.4673104167, "34A"],
    [-37.90463895, 175.46807945, "3"],
    [-37.9049602667, 175.4669330833, "9"],
    [-37.90673685, 175.4671040833, "22"],
    [-37.907098, 175.4676191667, "32"],
    [-37.9076081833, 175.46671515, "38"],
    [-37.90916225, 175.4659552667, "52"],
    [-37.90454345, 175.4684433, "1"],
    [-37.90512805, 175.4671995667, "11A"],
    [-37.9059193, 175.4674994, "16"],
    [-37.9073133167, 175.4668277667, "34"],
    [-37.9102952667, 175.4654520833, "64"],
    [-37.9092774833, 175.46591125, "52A"],
    [-37.9052165167, 175.4674315333, "11"],
    [-37.9053672, 175.4671046, "17B"],
    [-37.9048409833, 175.46859545, "4"],
    [-37.905671, 175.46720995, "19"],
    [-37.9048928333, 175.4683727167, "6"],
    [-37.9058366833, 175.4671128, "21"],
    [-37.9071612667, 175.4678683, "30"],
    [-37.9089840667, 175.4660592667, "50"],
    [-37.90527545, 175.4667925333, "15"],
    [-37.90715615, 175.466917, "32A"],
    [-37.9061779167, 175.4669647333, "25"],
    [-37.9077133333, 175.4674576833, "36A"],
    [-37.9104661667, 175.4653805167, "66"],
    [-37.9051668667, 175.4678703167, "10"],
    [-37.89370395, 175.47271155, "11"],
    [-37.8921716167, 175.4721017, "26"],
    [-37.8935424167, 175.4728224833, "13A"],
    [-37.8935212, 175.4727174167, "13"],
    [-37.8937888333, 175.4722797667, "12"],
    [-37.89444175, 175.4723851667, "2"],
    [-37.89426415, 175.4731979833, "8/7"],
    [-37.8944458167, 175.4722873333, "1/2"],
    [-37.8940236833, 175.4722967667, "8"],
    [-37.8944464167, 175.47217745, "2/2"],
    [-37.89289535, 175.4722046, "20"],
    [-37.8940564, 175.4721777667, "1/8"],
    [-37.89387485, 175.47305145, "9A"],
    [-37.8941962833, 175.4734008333, "7/7"],
    [-37.8940251167, 175.4729672167, "3/7"],
    [-37.8940147167, 175.4733695833, "5/7"],
    [-37.8927664833, 175.4726649, "21"],
    [-37.8940957833, 175.4733820167, "6/7"],
    [-37.8942063833, 175.47275275, "11/7"],
    [-37.8938730167, 175.4727318667, "9"],
    [-37.8940384833, 175.4727499833, "1/7"],
    [-37.8916949833, 175.47255425, "29"],
    [-37.8940345667, 175.4728609333, "2/7"],
    [-37.8920309, 175.4720907167, "28"],
    [-37.8942669167, 175.4723162, "6"],
    [-37.8920657333, 175.4725813667, "27"],
    [-37.8924789, 175.4721364167, "22"],
    [-37.89162635, 175.4720620167, "34"],
    [-37.89420475, 175.4728706, "10/7"],
    [-37.8924279, 175.4726186167, "25"],
    [-37.89427175, 175.4730613833, "9/7"],
    [-37.8917478833, 175.4720685333, "32"],
    [-37.89359425, 175.4722612333, "14"],
    [-37.8919238167, 175.4717851167, "30A"],
    [-37.89358685, 175.47297855, "11A"],
    [-37.8917815667, 175.4717468667, "32A"],
    [-37.8940195667, 175.4730878667, "4/7"],
    [-37.89188475, 175.4720793833, "30"],
    [-37.8766258167, 175.4531757333, "63"],
    [-37.8793250667, 175.4531694667, "33"],
    [-37.87557575, 175.4531778333, "71"],
    [-37.8649285167, 175.4537918667, "194"],
    [-37.8758193333, 175.4536709167, "72"],
    [-37.8730099333, 175.4536885167, "104"],
    [-37.87537995, 175.4536875833, "76"],
    [-37.866365, 175.4537908667, "182"],
    [-37.8773983, 175.4531370667, "53"],
    [-37.8663474333, 175.4540325167, "182A"],
    [-37.8765353, 175.4536952667, "68"],
    [-37.8633266833, 175.4532383833, "213"],
    [-37.8748418833, 175.4536900667, "86"],
    [-37.8723979667, 175.4536811667, "112"],
    [-37.8789557167, 175.4531799167, "37"],
    [-37.8744338333, 175.45543435, "88"],
    [-37.8780606333, 175.4531695167, "49"],
    [-37.8613876667, 175.4533495833, "1/233"],
    [-37.8779126333, 175.449236, "4/51"],
    [-37.86132765, 175.4526138667, "2/233"],
    [-37.8779974333, 175.45063155, "3/51"],
    [-37.8629783167, 175.4532700667, "215"],
    [-37.8777104167, 175.4515755167, "2/51"],
    [-37.8811745, 175.4555028167, "4"],
    [-37.8779778833, 175.4521171, "1/51"],
    [-37.8619675333, 175.4532946667, "227"],
    [-37.8786639833, 175.4493194167, "5/51"],
    [-37.88057795, 175.4544579, "18"],
    [-37.86531615, 175.4531001833, "191"],
    [-37.8655207167, 175.4536965333, "186"],
    [-37.8646614333, 175.4537639667, "198"],
    [-37.8647871333, 175.4541422833, "196"],
    [-37.86771765, 175.4537268, "162"],
    [-37.8711387333, 175.4536879167, "124"],
    [-37.8611343167, 175.45330145, "235"],
    [-37.8624900167, 175.4532548833, "221"],
    [-37.86872715, 175.4532476, "151"],
    [-37.8703843667, 175.4532525, "131"],
    [-37.8692643833, 175.45371825, "150"],
    [-37.8699453833, 175.4537083667, "142"],
    [-37.88075845, 175.4546889, "14"],
    [-37.8810108833, 175.45510075, "8"],
    [-37.8808800833, 175.45486695, "12"],
    [-37.8810951, 175.45531175, "6"],
    [-37.8812414333, 175.4557114167, "2"],
    [-37.8737279833, 175.4537149833, "90"],
    [-37.8804315833, 175.4547993833, "2/16"],
    [-37.8806571333, 175.4551276833, "2/10"],
    [-37.8807296667, 175.4552756333, "1/10"],
    [-37.8805078333, 175.4548978667, "1/16"],
    [-37.8305417667, 175.4407137167, "106"],
    [-37.8305758833, 175.4444438667, "78"],
    [-37.8305754, 175.45156825, "18"],
    [-37.83063965, 175.45322105, "2"],
    [-37.8305728333, 175.4437875667, "82"],
    [-37.8690497667, 175.4740093167, "7"],
    [-37.86952375, 175.4790699, "60"],
    [-37.8713118667, 175.4763685667, "42"],
    [-37.8690602667, 175.4767549167, "47"],
    [-37.8957648333, 175.4773709167, "4A"],
    [-37.8971239167, 175.47716665, "16"],
    [-37.89663135, 175.4774846833, "10"],
    [-37.8972863333, 175.4770748833, "18"],
    [-37.8969474167, 175.4772745667, "14"],
    [-37.8963529167, 175.4776375333, "8"],
    [-37.8982169667, 175.4746382667, "44"],
    [-37.8958142, 175.4771743333, "4B"],
    [-37.89577995, 175.4770061667, "4C"],
    [-37.8956352667, 175.4772386167, "4"],
    [-37.89679325, 175.4773878, "12"],
    [-37.8956875333, 175.4769206, "4D"],
    [-37.8955368, 175.4771246333, "2"],
    [-37.9075869833, 175.4681207167, "5"],
    [-37.9076935833, 175.4688911, "1"],
    [-37.9078046833, 175.4683225333, "7"],
    [-37.9077261333, 175.4681354833, "6"],
    [-37.9078473333, 175.4685627833, "8"],
    [-37.9075310167, 175.46846565, "3"],
    [-37.9079180333, 175.46879245, "9"],
    [-37.90762245, 175.4686683, "2"],
    [-37.9074934833, 175.4682448, "4"],
    [-37.8065385167, 175.3969116167, "26"],
    [-37.8052316167, 175.3947853833, "1"],
    [-37.8054979333, 175.3951090333, "5"],
    [-37.8061355333, 175.3955903667, "12"],
    [-37.8057016167, 175.3950258333, "6"],
    [-37.8059893667, 175.3953958833, "10"],
    [-37.8068311167, 175.3965807, "22"],
    [-37.80583815, 175.3952011167, "8"],
    [-37.8067129833, 175.3967156, "24"],
    [-37.8062816833, 175.39578495, "14"],
    [-37.8056595, 175.3953378, "7"],
    [-37.80642775, 175.3959857667, "16"],
    [-37.8067297167, 175.39640035, "20"],
    [-37.8063663, 175.3962931167, "13"],
    [-37.8053626333, 175.3949338333, "3"],
    [-37.8065366, 175.3965265333, "15"],
    [-37.80539065, 175.394573, "2"],
    [-37.8065884, 175.39621225, "18"],
    [-37.8055506833, 175.39481855, "4"],
    [-37.8062047667, 175.3961045, "11"],
    [-37.91218215, 175.4768794167, "8"],
    [-37.9120288167, 175.4765747, "7B"],
    [-37.9122875167, 175.4765784167, "3"],
    [-37.9123338833, 175.4771329833, "6B"],
    [-37.9120254167, 175.4764380167, "5"],
    [-37.91246155, 175.4769255333, "4"],
    [-37.9125897333, 175.4768015, "2"],
    [-37.9121711333, 175.4767164667, "7"],
    [-37.9122827167, 175.4769958667, "6A"],
    [-37.8527505833, 175.53393255, "617"],
    [-37.8826752167, 175.5025520333, "9"],
    [-37.81291845, 175.5447496, "1161"],
    [-37.8788362167, 175.510149, "1/88"],
    [-37.81259405, 175.5447376, "1163"],
    [-37.8763215167, 175.5110032333, "115"],
    [-37.8751193167, 175.51276665, "134"],
    [-37.86748695, 175.5219444167, "272"],
    [-37.8793489167, 175.5093666167, "80"],
    [-37.8249454833, 175.5459290333, "1021"],
    [-37.87870795, 175.5090378667, "81"],
    [-37.8802461667, 175.5019911, "1/37"],
    [-37.8790009333, 175.5095332, "84"],
    [-37.8675435167, 175.51850165, "243"],
    [-37.8783544, 175.5094524833, "97"],
    [-37.8785864667, 175.5105412333, "2/88"],
    [-37.8565379167, 175.5340265667, "567"],
    [-37.8790696167, 175.5117932, "98"],
    [-37.8579882167, 175.5332226833, "557"],
    [-37.8228546333, 175.5478497667, "1043"],
    [-37.8111895167, 175.5446341667, "1177"],
    [-37.8670294, 175.5209776667, "265"],
    [-37.8111449, 175.5438866, "1179"],
    [-37.8810532167, 175.50530935, "39"],
    [-37.8107934667, 175.5438973833, "1183"],
    [-37.8766940333, 175.51263885, "2/110"],
    [-37.8094178833, 175.5439488333, "1195"],
    [-37.8484587833, 175.5342090667, "663"],
    [-37.81064835, 175.5445837167, "1187"],
    [-37.8744863, 175.5115857333, "139"],
    [-37.8099838, 175.54453645, "1191"],
    [-37.8787071333, 175.5051437667, "2/39"],
    [-37.8092644167, 175.54453125, "1199"],
    [-37.8361982667, 175.5463852167, "890"],
    [-37.8389412667, 175.5464548, "858"],
    [-37.8789616667, 175.5121996833, "100"],
    [-37.8336715167, 175.5454231, "919"],
    [-37.8289189, 175.5478054833, "986"],
    [-37.8323492833, 175.5460591, "928"],
    [-37.8320521833, 175.5459855, "930"],
    [-37.8251348833, 175.5480670667, "1016"],
    [-37.8561845167, 175.5327450833, "581"],
    [-37.8262207333, 175.5482595333, "996"],
    [-37.8083614833, 175.5449377833, "1211"],
    [-37.8172147667, 175.5457622333, "1107"],
    [-37.8461716667, 175.5348015333, "688"],
    [-37.8159882, 175.5454072833, "1119"],
    [-37.8801261, 175.5011647833, "37"],
    [-37.8788507333, 175.5071659, "5/39"],
    [-37.86353225, 175.5262979167, "392"],
    [-37.8087557667, 175.5460182, "1208"],
    [-37.8799249, 175.50989025, "70"],
    [-37.8087391167, 175.5453725167, "1206"],
    [-37.8368114333, 175.5449542167, "881"],
    [-37.8278101833, 175.5479474667, "990"],
    [-37.8144593833, 175.5446729333, "1143"],
    [-37.8763691667, 175.51261455, "1/110"],
    [-37.8141157667, 175.5446296, "1145"],
    [-37.8675668333, 175.5223205667, "276"],
    [-37.86875635, 175.5151021667, "207"],
    [-37.8785670167, 175.5058547667, "3/39"],
    [-37.8766803833, 175.5140811167, "6/110"],
    [-37.86696285, 175.5258656667, "302"],
    [-37.81135475, 175.5425439833, "1/1181"],
    [-37.8809864833, 175.5057107, "8/39"],
    [-37.8788209, 175.5065659833, "4/39"],
    [-37.8792938833, 175.5065692167, "7/39"],
    [-37.8139674667, 175.5456240667, "1146"],
    [-37.8611906333, 175.5269748, "432"],
    [-37.8402324, 175.5411414667, "809"],
    [-37.82010205, 175.5480512333, "1070"],
    [-37.8771378833, 175.51029235, "1/103"],
    [-37.8213269333, 175.54882125, "1052"],
    [-37.8089942, 175.5452704833, "1202"],
    [-37.8212039667, 175.5500653333, "1/1052"],
    [-37.86704345, 175.5199686167, "257"],
    [-37.8211860833, 175.55188125, "2/1052"],
    [-37.8732234167, 175.51193365, "151"],
    [-37.8231706667, 175.5483519, "1040"],
    [-37.8129427333, 175.54544965, "1158"],
    [-37.8398410833, 175.5429798, "817"],
    [-37.8774619667, 175.5081401333, "4/103"],
    [-37.8413094333, 175.5414880333, "796"],
    [-37.8734242333, 175.5114266833, "149"],
    [-37.8116329167, 175.54465065, "1173"],
    [-37.8790814667, 175.505419, "6/39"],
    [-37.8402537, 175.54399925, "830"],
    [-37.87415495, 175.5111152667, "1/139"],
    [-37.8090223833, 175.5446570333, "1201"],
    [-37.8809561333, 175.5036574833, "35"],
    [-37.8085440167, 175.5454961667, "1210"],
    [-37.8413132, 175.5395747333, "773"],
    [-37.87539025, 175.5146704167, "1/138"],
    [-37.83847385, 175.54218775, "2/815"],
    [-37.87580405, 175.5118973167, "126"],
    [-37.86917495, 175.5157794167, "1/208"],
    [-37.8082772667, 175.5455867333, "1212"],
    [-37.8096694667, 175.5450804833, "1194"],
    [-37.8787073667, 175.5083375, "79"],
    [-37.8763409333, 175.51340955, "3/110"],
    [-37.8080369167, 175.5450349667, "1213"],
    [-37.8093666167, 175.5451384833, "1196"],
    [-37.82245505, 175.5477440333, "1047"],
    [-37.8775422667, 175.5104792, "2/103"],
    [-37.8236463333, 175.5474525, "1033"],
    [-37.8814960667, 175.50479415, "33"],
    [-37.8245330667, 175.5471272667, "1023"],
    [-37.8403625, 175.5402170167, "1/809"],
    [-37.8678366667, 175.5195366167, "254"],
    [-37.8790242333, 175.5103504333, "4/88"],
    [-37.8218208, 175.5477814333, "1049"],
    [-37.8789700833, 175.5084782833, "77/1"],
    [-37.8704926333, 175.5137601667, "188"],
    [-37.87878565, 175.5106821667, "3/88"],
    [-37.871913, 175.5121444333, "163"],
    [-37.87933595, 175.5101975333, "6/88"],
    [-37.8748227833, 175.5121225, "136"],
    [-37.87947495, 175.5108712167, "5/88"],
    [-37.8753615167, 175.5127019833, "132"],
    [-37.8109761333, 175.5426080167, "1181"],
    [-37.8773393667, 175.5116264833, "104"],
    [-37.8370667667, 175.5458885833, "879"],
    [-37.8765559833, 175.5101962833, "103"],
    [-37.8253379167, 175.5472683, "989"],
    [-37.8793315833, 175.5086546167, "77"],
    [-37.8661602, 175.52487915, "316"],
    [-37.8776637333, 175.50929225, "3/103"],
    [-37.8092819667, 175.5456565833, "2/1200"],
    [-37.87534805, 175.5120049833, "128"],
    [-37.81204605, 175.5446423333, "1169"],
    [-37.8752625833, 175.5140794833, "138"],
    [-37.8766464333, 175.5134206667, "4/110"],
    [-37.8770230167, 175.5108992333, "113"],
    [-37.8406207, 175.5394538167, "2/809"],
    [-37.8770699833, 175.5116503167, "106"],
    [-37.8122078667, 175.5440270833, "1165"],
    [-37.87518925, 175.5112472667, "129"],
    [-37.8507412333, 175.5347013833, "633"],
    [-37.8759461833, 175.5110732833, "117"],
    [-37.8210931833, 175.5477387333, "1055"],
    [-37.87555235, 175.5111759667, "127"],
    [-37.8180744833, 175.5471867333, "1092"],
    [-37.8761638, 175.5118200833, "120"],
    [-37.8714445, 175.5188348833, "2/208"],
    [-37.8738533, 175.5117649, "141"],
    [-37.8083899, 175.5443001833, "1209"],
    [-37.8672468667, 175.5243000167, "295"],
    [-37.8395333333, 175.54262905, "1/815"],
    [-37.8093977833, 175.5456164833, "1/1200"],
    [-37.86778915, 175.5240579167, "290"],
    [-37.8151683, 175.5450954333, "1133"],
    [-37.8676913333, 175.5179285833, "235"],
    [-37.87977015, 175.5090145833, "66"],
    [-37.8785379333, 175.5043763, "1/39"],
    [-37.8764341333, 175.51407215, "5/110"],
    [-37.8740516, 175.5125295667, "146"],
    [-37.87401495, 175.47760185, "16"],
    [-37.8739528333, 175.4764705667, "31"],
    [-37.8739846167, 175.4768385667, "33"],
    [-37.8748585167, 175.4767720333, "11"],
    [-37.8736880333, 175.4772042167, "37"],
    [-37.8747492333, 175.4769483667, "9"],
    [-37.87503235, 175.4775088667, "3"],
    [-37.87489515, 175.4779213833, "6"],
    [-37.8748158667, 175.4774378, "5"],
    [-37.8750760667, 175.4779026, "4"],
    [-37.8746501167, 175.4773401167, "7"],
    [-37.8741460667, 175.4765724167, "27"],
    [-37.8739166167, 175.477184, "35"],
    [-37.8741975833, 175.47717515, "23"],
    [-37.8738094, 175.47760075, "18"],
    [-37.8749257833, 175.4765688833, "13"],
    [-37.8741402667, 175.4763856, "29"],
    [-37.8742506833, 175.4775977, "14"],
    [-37.8741505, 175.47681925, "25"],
    [-37.8747261167, 175.4778583667, "8"],
    [-37.8745555, 175.4777541667, "10"],
    [-37.8743982667, 175.4777232, "12"],
    [-37.87440735, 175.4772111833, "21"],
    [-37.8745958667, 175.47674675, "19"],
    [-37.8747628333, 175.47645865, "15"],
    [-37.8745715333, 175.4764928667, "17"],
    [-37.9116880667, 175.4711713833, "3"],
    [-37.9116604333, 175.4715114333, "1"],
    [-37.9118500667, 175.4714183, "5"],
    [-37.9122240667, 175.4713923, "11"],
    [-37.9118788833, 175.4710693167, "7"],
    [-37.9123174667, 175.4714676167, "10"],
    [-37.91227905, 175.4716167167, "8"],
    [-37.9117270667, 175.4718080667, "2"],
    [-37.91205, 175.4713633167, "9"],
    [-37.912161, 175.4717712, "6"],
    [-37.8859179333, 175.4582119667, "1"],
    [-37.8865885333, 175.4581321667, "6A"],
    [-37.88640305, 175.45807455, "6"],
    [-37.8860451667, 175.4578916833, "4D"],
    [-37.8863091167, 175.45790615, "5"],
    [-37.8861527, 175.4579021833, "4A"],
    [-37.8859058833, 175.4578780333, "3"],
    [-37.8861333333, 175.4577295167, "4B"],
    [-37.8859079333, 175.45834695, "1A"],
    [-37.8861985, 175.4582370667, "7"],
    [-37.8860742333, 175.4577260833, "4C"],
    [-37.8858135, 175.4580266333, "2"],
    [-37.8856798, 175.4576616167, "3B"],
    [-37.8857954333, 175.45773405, "3A"],
    [-37.8039755167, 175.3924264333, "588"],
    [-37.8024268333, 175.3891336167, "555"],
    [-37.80621375, 175.3790952, "476A"],
    [-37.8035793667, 175.3898201333, "565"],
    [-37.8041731333, 175.3674844, "348"],
    [-37.8035751833, 175.38904805, "559"],
    [-37.8013125167, 175.390194, "569A"],
    [-37.8039518333, 175.3880558333, "550"],
    [-37.7993036333, 175.3774681, "447B"],
    [-37.80163095, 175.39138825, "577"],
    [-37.8035939833, 175.3922268667, "583"],
    [-37.8034719167, 175.3864473333, "535A"],
    [-37.80612815, 175.3786574833, "476C"],
    [-37.80604375, 175.3653441833, "320"],
    [-37.8030940833, 175.3837668333, "515"],
    [-37.8017065167, 175.37966555, "471"],
    [-37.8032808167, 175.3824573833, "496C"],
    [-37.8023511333, 175.3675479833, "361"],
    [-37.8029974167, 175.38875325, "553B"],
    [-37.8013158, 175.3713298333, "400"],
    [-37.8069269167, 175.38494245, "522A"],
    [-37.8041518333, 175.3666512333, "342"],
    [-37.8035926, 175.3904181, "569B"],
    [-37.8022781333, 175.3782524667, "450A"],
    [-37.8010726667, 175.3710681167, "395"],
    [-37.80130715, 175.37668905, "445"],
    [-37.8010362667, 175.3712212667, "399"],
    [-37.8032196333, 175.36794415, "358"],
    [-37.80095265, 175.3727210333, "409"],
    [-37.8021615667, 175.3808655833, "481B"],
    [-37.80149165, 175.3733540167, "418"],
    [-37.8010327833, 175.3739455167, "419"],
    [-37.8037261333, 175.3859318333, "530"],
    [-37.8019531333, 175.36978095, "382"],
    [-37.8035854333, 175.3674296167, "352"],
    [-37.8035820667, 175.3681635, "358B"],
    [-37.8044532833, 175.3898220167, "562A"],
    [-37.8030543167, 175.3681729333, "360"],
    [-37.80023085, 175.3753558333, "429B"],
    [-37.8029366333, 175.3683441833, "362"],
    [-37.8046987, 175.38796795, "548"],
    [-37.80282455, 175.3684962, "364"],
    [-37.8016347167, 175.3738360667, "420"],
    [-37.8031052333, 175.3689649333, "366"],
    [-37.8026689, 175.3687241167, "368"],
    [-37.8025527333, 175.3689042333, "370"],
    [-37.8037381333, 175.3672040667, "350B"],
    [-37.8015959333, 175.37030475, "384"],
    [-37.8037429667, 175.3861631667, "532"],
    [-37.8056256, 175.3854121, "522D"],
    [-37.8074032833, 175.37890055, "476D"],
    [-37.8033627833, 175.3941313, "601"],
    [-37.8035645833, 175.3885777333, "553A"],
    [-37.8037265833, 175.3751864333, "438"],
    [-37.80393295, 175.3820938333, "496B"],
    [-37.8039961667, 175.3937407167, "600"],
    [-37.8016335, 175.3785741333, "455B"],
    [-37.8028840667, 175.3674978, "357"],
    [-37.8009541833, 175.3783785, "455C"],
    [-37.8061105, 175.3849712833, "518"],
    [-37.8041071, 175.3675672667, "350A"],
    [-37.8039732667, 175.3922047667, "586"],
    [-37.7970054833, 175.3806949833, "475B"],
    [-37.80154115, 175.3776200833, "455A"],
    [-37.7968634833, 175.3813122667, "475C"],
    [-37.8040230333, 175.3951761833, "610"],
    [-37.8004082667, 175.3807690333, "475D"],
    [-37.8020559, 175.3804593667, "481A"],
    [-37.8029026667, 175.3814678667, "490"],
    [-37.79877225, 175.3804673833, "475A"],
    [-37.8024990833, 175.3803016, "478"],
    [-37.80798195, 175.3848864167, "522B"],
    [-37.8032268667, 175.3820611833, "496A"],
    [-37.8039424333, 175.3900004667, "566"],
    [-37.8055885667, 175.3849529667, "508"],
    [-37.8039439833, 175.3902647333, "568"],
    [-37.8044673167, 175.3791537667, "476B"],
    [-37.8034701, 175.3861407833, "531"],
    [-37.80394855, 175.3905212833, "570"],
    [-37.8033434667, 175.3677650667, "356"],
    [-37.8039541167, 175.3897445, "564"],
    [-37.8044864833, 175.3894950833, "562B"],
    [-37.8023883667, 175.3792474, "468"],
    [-37.8037905667, 175.3868461833, "538"],
    [-37.80376065, 175.3848380167, "516"],
    [-37.8037788333, 175.3866195333, "536"],
    [-37.8013236667, 175.3867703833, "535B"],
    [-37.80376085, 175.3863884, "534"],
    [-37.8038128667, 175.38531645, "524"],
    [-37.8038359, 175.3875590667, "546"],
    [-37.8053126, 175.3651698, "328"],
    [-37.8038053833, 175.3870689, "540"],
    [-37.80589585, 175.3892222167, "560"],
    [-37.8035248667, 175.3876434167, "545"],
    [-37.8037198, 175.3949872, "609"],
    [-37.80381955, 175.38729175, "542"],
    [-37.8075598333, 175.3855587, "522C"],
    [-37.8039602167, 175.3917614333, "582"],
    [-37.80139505, 175.3727005667, "414"],
    [-37.8036690667, 175.3910398667, "575"],
    [-37.8039518833, 175.3910117167, "574"],
    [-37.80395405, 175.3914879333, "580"],
    [-37.8002672167, 175.3771908, "447A"],
    [-37.8039521833, 175.3907747167, "572"],
    [-37.8036402667, 175.3914460167, "579"],
    [-37.803952, 175.3912312333, "578"],
    [-37.8015263667, 175.3694650333, "383"],
    [-37.80400045, 175.3949203833, "608"],
    [-37.8039955333, 175.3935219167, "598"],
    [-37.8039738167, 175.3926465167, "590"],
    [-37.8034657167, 175.3675994, "354"],
    [-37.8039642833, 175.3919945, "584"],
    [-37.8039832667, 175.3932899167, "596"],
    [-37.7988289, 175.3754860833, "429C"],
    [-37.80369095, 175.3927310167, "591"],
    [-37.80233225, 175.3911433833, "571"],
    [-37.8039846667, 175.3930810833, "594"],
    [-37.8013068333, 175.37155805, "402"],
    [-37.80397775, 175.3928504167, "592"],
    [-37.8040068833, 175.3948069833, "608A"],
    [-37.8037325167, 175.3941101167, "603"],
    [-37.8021858833, 175.3685292167, "369"],
    [-37.8039958, 175.3939723167, "602"],
    [-37.8048039833, 175.3657911, "336"],
    [-37.80368355, 175.39362055, "599"],
    [-37.8039906833, 175.3668667833, "344"],
    [-37.8037408333, 175.39457725, "607"],
    [-37.8040022167, 175.3941957, "604"],
    [-37.80357305, 175.3683457167, "358A"],
    [-37.80400475, 175.3944321167, "606"],
    [-37.8037340667, 175.3943487167, "605"],
    [-37.8021156667, 175.3876556833, "543"],
    [-37.8012321, 175.3754553833, "429A"],
    [-37.8018551667, 175.3752511, "430"],
    [-37.8038677333, 175.3670357333, "346"],
    [-37.8037207167, 175.3857282667, "528"],
    [-37.89186715, 175.4802623167, "40"],
    [-37.8923304833, 175.4777135167, "13"],
    [-37.8929612833, 175.4756593333, "1"],
    [-37.8918642, 175.4800987833, "38"],
    [-37.8926700333, 175.4763031833, "5"],
    [-37.89194195, 175.47893395, "28A"],
    [-37.8924575833, 175.4767435167, "9"],
    [-37.8918917333, 175.47938125, "32"],
    [-37.8922351667, 175.4796796333, "27"],
    [-37.8916363333, 175.47957795, "34A"],
    [-37.8922002833, 175.48006775, "29"],
    [-37.8918962833, 175.4796114333, "34"],
    [-37.8923002333, 175.4783952667, "21"],
    [-37.89225505, 175.4790280833, "25"],
    [-37.8920123333, 175.4773945167, "10"],
    [-37.8919046167, 175.4791651833, "30"],
    [-37.89170475, 175.4789158833, "28B"],
    [-37.89166225, 175.4793545667, "32A"],
    [-37.8919418833, 175.4787236, "26"],
    [-37.89187395, 175.4798382833, "36"],
    [-37.89226945, 175.4788097167, "23"],
    [-37.8919833667, 175.47800955, "14"],
    [-37.88193185, 175.4866305833, "1"],
    [-37.8812478, 175.4878395, "20"],
    [-37.8819307, 175.48686775, "3"],
    [-37.8823734333, 175.4877629833, "8B"],
    [-37.8821842833, 175.48700355, "4"],
    [-37.8818976833, 175.4871309333, "5"],
    [-37.8821982333, 175.4867615167, "2"],
    [-37.8821772, 175.48722635, "6"],
    [-37.8809340667, 175.4875154, "24"],
    [-37.8815621333, 175.4870228333, "11B"],
    [-37.88080855, 175.4873367167, "26"],
    [-37.8810877167, 175.4876951, "22"],
    [-37.8806647833, 175.4872178, "25"],
    [-37.8815580667, 175.4875735333, "9"],
    [-37.88050695, 175.48709835, "23"],
    [-37.8823652833, 175.48799725, "10B"],
    [-37.8817490333, 175.4878626667, "12"],
    [-37.88214405, 175.4874454833, "8"],
    [-37.8816923833, 175.4878766167, "14"],
    [-37.8823520667, 175.4875880667, "8A"],
    [-37.8814424167, 175.48790665, "16"],
    [-37.8819485333, 175.48774405, "10"],
    [-37.8813723833, 175.4878899, "18"],
    [-37.8822010167, 175.4879131167, "10A"],
    [-37.8825377667, 175.48796795, "8C"],
    [-37.8808839, 175.4866251333, "17"],
    [-37.8807889, 175.4868384833, "19"],
    [-37.8806788833, 175.4869695333, "21"],
    [-37.8818035, 175.48743315, "7"],
    [-37.8810684667, 175.4871791, "13"],
    [-37.8809503667, 175.4869225, "15"],
    [-37.8812931167, 175.4874573167, "11"],
    [-37.8812351167, 175.4869114833, "13A"],
    [-37.8814375667, 175.4871747, "11A"],
    [-37.8813577333, 175.4869692333, "13B"],
    [-37.9359592833, 175.5576784333, "1/21"],
    [-37.9380472167, 175.5564234833, "20"],
    [-37.9388147833, 175.5583222333, "2/21"],
    [-37.9370746333, 175.55679275, "21"],
    [-37.9396807833, 175.5590516333, "4/21"],
    [-37.9321653667, 175.5586632333, "15"],
    [-37.93777925, 175.5607732333, "3/21"],
    [-37.93261665, 175.5577030167, "22"],
    [-37.9350610667, 175.5544772, "18"],
    [-37.9324680333, 175.55825425, "17"],
    [-37.93286725, 175.5580919667, "19"],
    [-37.9655341, 175.48344125, "228"],
    [-37.9662557833, 175.4823937167, "238"],
    [-37.9551121167, 175.4819800167, "74"],
    [-37.97145005, 175.4810869667, "298"],
    [-37.96511045, 175.4842071167, "226"],
    [-37.9597843, 175.4837558833, "1/144"],
    [-37.9542875333, 175.4787352833, "46"],
    [-37.96095, 175.4848569, "156"],
    [-37.9608395667, 175.4825922167, "144"],
    [-37.9665397, 175.4859805667, "227"],
    [-37.9546337667, 175.4780326167, "44"],
    [-37.9662588833, 175.48466365, "229"],
    [-37.9774811333, 175.4827824167, "367"],
    [-37.9532187667, 175.4778035833, "25"],
    [-37.9779600167, 175.4820124333, "380"],
    [-37.96688945, 175.4825700833, "244"],
    [-37.9724996333, 175.4816797, "317"],
    [-37.9551293333, 175.4882803333, "2/81"],
    [-37.9544212167, 175.4829611333, "79"],
    [-37.9552378333, 175.4835594, "3/81"],
    [-37.9551674833, 175.4873534333, "1/81"],
    [-37.8177678333, 175.36481165, "23"],
    [-37.8176856667, 175.36528815, "21"],
    [-37.81793065, 175.36431665, "24"],
    [-37.8188466, 175.3655251167, "13"],
    [-37.8183913167, 175.3654774833, "14"],
    [-37.8186506667, 175.3663757833, "8"],
    [-37.9091586833, 175.4806199667, "8"],
    [-37.9097846667, 175.4804238833, "5"],
    [-37.9095970833, 175.4803937333, "6"],
    [-37.90949585, 175.48088805, "2"],
    [-37.9097125667, 175.4807851667, "3"],
    [-37.9090767333, 175.4810419167, "1"],
    [-37.9098378, 175.4806015167, "4"],
    [-37.9094125333, 175.48047265, "7"],
    [-37.8987957167, 175.4867648167, "4"],
    [-37.8993040833, 175.48608325, "13A"],
    [-37.8986618667, 175.4863548, "3"],
    [-37.8990157167, 175.4866799667, "8"],
    [-37.8988486167, 175.48625515, "11"],
    [-37.89940275, 175.48652375, "12"],
    [-37.8990940333, 175.4857358333, "15"],
    [-37.8994477, 175.4860294167, "13"],
    [-37.8984905333, 175.4864897167, "1"],
    [-37.8910458667, 175.4604486167, "4A"],
    [-37.8909012833, 175.4603024667, "1"],
    [-37.8912700667, 175.4604892667, "4B"],
    [-37.8909202167, 175.4608893333, "3C"],
    [-37.8912779333, 175.4605982333, "4C"],
    [-37.8909172, 175.4610096, "3D"],
    [-37.8910309833, 175.46058295, "4D"],
    [-37.8909275167, 175.4607770667, "3B"],
    [-37.8908830667, 175.46040695, "2"],
    [-37.8907294667, 175.4603703, "2B"],
    [-37.8909360167, 175.4606728333, "3A"],
    [-37.8910318, 175.46011345, "5"],
    [-37.9038995167, 175.4740167833, "1"],
    [-37.9040010833, 175.4744881, "3"],
    [-37.9039700667, 175.4742456667, "2"],
    [-37.9041160333, 175.4738995667, "9"],
    [-37.9042205, 175.4746609667, "5"],
    [-37.90408835, 175.4746666167, "4"],
    [-37.9043300333, 175.4745611833, "6"],
    [-37.9042862667, 175.47435, "7"],
    [-37.9041895, 175.4741327333, "8"],
    [-37.8412972333, 175.51498905, "2/370"],
    [-37.85380915, 175.5048969, "197"],
    [-37.8393792167, 175.5185004833, "4/370"],
    [-37.8356004, 175.5155473833, "1/446"],
    [-37.8516975167, 175.5088596333, "230"],
    [-37.83493705, 175.5162245, "2/446"],
    [-37.8630868833, 175.5013258667, "77"],
    [-37.8341336333, 175.5147212667, "454"],
    [-37.8317585167, 175.511789, "495"],
    [-37.8378645667, 175.51179665, "422"],
    [-37.8482979667, 175.5057717167, "2/277"],
    [-37.8384529, 175.5107566, "1/413"],
    [-37.8543168833, 175.5057733167, "200"],
    [-37.8382859, 175.51004915, "2/413"],
    [-37.8302591667, 175.51099635, "520"],
    [-37.8430264833, 175.5117441667, "361"],
    [-37.8569890167, 175.50014995, "145"],
    [-37.8546612333, 175.51046255, "4/210"],
    [-37.8291138167, 175.5100652833, "537"],
    [-37.8644712, 175.5010749167, "57"],
    [-37.8537165667, 175.5061015667, "1/210"],
    [-37.8561494333, 175.5002218833, "151"],
    [-37.8531273167, 175.50591205, "207"],
    [-37.8661337333, 175.50044185, "39"],
    [-37.8572501333, 175.50068855, "142"],
    [-37.86749845, 175.4999983667, "31"],
    [-37.8311046167, 175.5124198667, "504"],
    [-37.8610681167, 175.5009140667, "99"],
    [-37.86009745, 175.5013829333, "110"],
    [-37.8635882333, 175.5025296333, "2/72"],
    [-37.8381455333, 175.5095623833, "415"],
    [-37.86345265, 175.5022295333, "1/72"],
    [-37.8535591333, 175.5063429, "3/210"],
    [-37.8428438667, 175.5239404333, "8/370"],
    [-37.8425296667, 175.5133880833, "1/370"],
    [-37.8415704667, 175.5230515333, "7/370"],
    [-37.8607450167, 175.5008543833, "101"],
    [-37.8402798167, 175.5220041667, "6/370"],
    [-37.8540611833, 175.5052768833, "198"],
    [-37.8457524833, 175.5094666, "314"],
    [-37.8379597667, 175.51065885, "417"],
    [-37.83947605, 175.5206863, "5/370"],
    [-37.8301105, 175.5103759, "521"],
    [-37.84097385, 175.5217665167, "9/370"],
    [-37.8408829167, 175.5157633333, "3/370"],
    [-37.8540650833, 175.5067036667, "2/210"],
    [-37.8541100167, 175.5042267333, "191"],
    [-37.8426532167, 175.5117339667, "365"],
    [-37.8483104167, 175.50609355, "1/277"],
    [-37.8610126167, 175.5014974, "98"],
    [-37.8409556, 175.5110372667, "383"],
    [-37.8563855167, 175.4999012333, "149"],
    [-37.8591389167, 175.5012515167, "118"],
    [-37.8622922667, 175.5017081, "86"],
    [-37.8279955333, 175.5107170333, "548"],
    [-37.8293633667, 175.5100288667, "535"],
    [-37.87412315, 175.36871325, "20"],
    [-37.8741985167, 175.3678984333, "25"],
    [-37.8744552833, 175.36791385, "23"],
    [-37.82354435, 175.3645601333, "31"],
    [-37.81426245, 175.3697857667, "140B"],
    [-37.8249820167, 175.36436295, "18A"],
    [-37.8247545333, 175.3644630667, "18B"],
    [-37.8196718, 175.3690864167, "74B"],
    [-37.8141992167, 175.3685047667, "140D"],
    [-37.8202965167, 175.3688420833, "74C"],
    [-37.8180317333, 175.3670563833, "97"],
    [-37.8166606, 175.3680389833, "116"],
    [-37.81378495, 175.3674693667, "143"],
    [-37.8140329833, 175.36750105, "141"],
    [-37.8230129333, 175.36477085, "33"],
    [-37.8181065333, 175.367528, "96A"],
    [-37.822355, 175.3651528333, "43"],
    [-37.8207430167, 175.37001735, "72"],
    [-37.8175852333, 175.36768535, "104"],
    [-37.8240652167, 175.3643383167, "25"],
    [-37.8208649167, 175.3708165167, "72C"],
    [-37.8158759333, 175.3699935167, "124A"],
    [-37.81611735, 175.3726213833, "124D"],
    [-37.8141102833, 175.3710208167, "140E"],
    [-37.8158552833, 175.3725671, "126C"],
    [-37.8172870667, 175.3672759333, "105"],
    [-37.8149043167, 175.3680942, "126A"],
    [-37.8156860667, 175.3714600667, "126B"],
    [-37.82234555, 175.3676551167, "58C"],
    [-37.8229201, 175.3663306333, "42B"],
    [-37.8217244667, 175.36615365, "56"],
    [-37.82168065, 175.3671740333, "58A"],
    [-37.8226533, 175.3656960667, "42A"],
    [-37.81969495, 175.3671185, "74A"],
    [-37.8139910833, 175.3680670333, "142"],
    [-37.8222810667, 175.36812165, "58B"],
    [-37.8160942833, 175.3717498333, "124C"],
    [-37.8210101167, 175.3697359333, "72D"],
    [-37.8199424667, 175.3700336667, "72A"],
    [-37.8162840333, 175.36763115, "115"],
    [-37.8169082, 175.3674243667, "109"],
    [-37.8231334167, 175.3666729833, "42C"],
    [-37.8211535833, 175.3664307, "66"],
    [-37.8159958, 175.3710006, "124B"],
    [-37.8230926333, 175.3654223667, "40"],
    [-37.8142580167, 175.3692795333, "140C"],
    [-37.8184104667, 175.3677529833, "96B"],
    [-37.8232137667, 175.3664941667, "42D"],
    [-37.8238653167, 175.3649438333, "30"],
    [-37.8210668833, 175.3659746167, "59"],
    [-37.8204322833, 175.3668945833, "70"],
    [-37.8141750667, 175.3703629167, "140A"],
    [-37.8203761167, 175.3663, "69"],
    [-37.8190875, 175.3666263, "83"],
    [-37.8206303833, 175.37079745, "72B"],
    [-37.8159921167, 175.36829495, "120"],
    [-37.8702900833, 175.4823576, "129"],
    [-37.8691575833, 175.4875552167, "174"],
    [-37.8752810167, 175.4785701333, "29"],
    [-37.8739353333, 175.4787035333, "71"],
    [-37.8694349833, 175.4853619333, "150"],
    [-37.86819925, 175.4904272667, "203"],
    [-37.8739757333, 175.4791716, "36"],
    [-37.8743164833, 175.47849545, "69"],
    [-37.8764327833, 175.4784211167, "18"],
    [-37.8772371, 175.47724965, "11"],
    [-37.8711581167, 175.4812798, "99"],
    [-37.8774015333, 175.4771253167, "9"],
    [-37.8747281, 175.4786202833, "35"],
    [-37.8769075, 175.47753225, "15"],
    [-37.8764091, 175.4779333667, "21"],
    [-37.8751066833, 175.47903655, "28"],
    [-37.8755713333, 175.4789569333, "24"],
    [-37.8767426833, 175.4776735667, "17"],
    [-37.87754365, 175.4769945167, "7"],
    [-37.8749176, 175.4790524, "30"],
    [-37.86789545, 175.4922832833, "215"],
    [-37.8762449333, 175.4780463833, "23"],
    [-37.8746104333, 175.4786632333, "37"],
    [-37.87535045, 175.4789887, "26"],
    [-37.8690190833, 175.4889257667, "188"],
    [-37.8766569, 175.4782477833, "16"],
    [-37.8777791667, 175.4743660833, "3F"],
    [-37.8760992833, 175.4781375667, "25"],
    [-37.8735414833, 175.4792975667, "40"],
    [-37.8749123833, 175.4786099333, "33"],
    [-37.8778868667, 175.4755309333, "3B"],
    [-37.8757382667, 175.4789290833, "22"],
    [-37.8690839, 175.4882992333, "182"],
    [-37.8778719167, 175.4752090167, "3C"],
    [-37.8692440333, 175.487114, "168"],
    [-37.87786735, 175.4759980333, "3A"],
    [-37.8750885833, 175.4785857167, "31"],
    [-37.8778593, 175.4767417, "1"],
    [-37.8770541, 175.4774016167, "13"],
    [-37.8693264333, 175.4864033167, "160"],
    [-37.8776720667, 175.47687455, "5"],
    [-37.87418305, 175.4791450333, "34"],
    [-37.8772782167, 175.4778079333, "12"],
    [-37.8694907, 175.48387845, "139"],
    [-37.8737682833, 175.4792036833, "38"],
    [-37.8780202167, 175.4743749, "3E"],
    [-37.87657365, 175.4778033833, "19"],
    [-37.8769227, 175.4780192833, "14"],
    [-37.8778372, 175.4747625833, "3D"],
    [-37.9058634167, 175.4818391833, "11"],
    [-37.90651765, 175.4816564, "7"],
    [-37.90600205, 175.4817922833, "10"],
    [-37.9065382667, 175.4819836667, "6"],
    [-37.9064549667, 175.48231495, "4"],
    [-37.9065751, 175.4821868667, "5"],
    [-37.9062895, 175.4822382667, "3"],
    [-37.9061909, 175.4817668, "9"],
    [-37.9058636333, 175.4821877667, "1"],
    [-37.90609375, 175.48208955, "2"],
    [-37.9063477667, 175.4818540833, "8"],
    [-37.9028285, 175.4830620667, "10"],
    [-37.9033403333, 175.4828242833, "4"],
    [-37.9026557833, 175.4836036833, "11"],
    [-37.9026651667, 175.4831392167, "12"],
    [-37.9024793, 175.4836898833, "13"],
    [-37.9024864833, 175.4832286333, "14"],
    [-37.9022771167, 175.4837931167, "15"],
    [-37.9023275333, 175.48331475, "16"],
    [-37.9021481167, 175.4833864333, "18"],
    [-37.9034164167, 175.48324155, "3"],
    [-37.9020819667, 175.4837508833, "17"],
    [-37.9032251, 175.4833323833, "5"],
    [-37.9031833833, 175.4829241667, "6"],
    [-37.9030398667, 175.4834288667, "7"],
    [-37.9030060333, 175.4827531167, "8A"],
    [-37.90303195, 175.4830065, "8"],
    [-37.90285465, 175.48352545, "9"],
    [-37.9030180333, 175.4855010667, "50"],
    [-37.90297345, 175.4847805333, "52"],
    [-37.90302055, 175.4852138333, "50A"],
    [-37.9006098833, 175.4854521833, "33"],
    [-37.9029307667, 175.485268, "48"],
    [-37.9014686667, 175.48551475, "36"],
    [-37.9017719833, 175.4853557833, "40"],
    [-37.9016177667, 175.4854306833, "38"],
    [-37.9023493667, 175.48468465, "47"],
    [-37.9027064667, 175.4842364667, "51A"],
    [-37.9019256667, 175.4852900333, "42"],
    [-37.9016388667, 175.4849819167, "41"],
    [-37.9014681667, 175.485061, "39"],
    [-37.9033233167, 175.48461845, "56"],
    [-37.9037893833, 175.4839462667, "63"],
    [-37.9031498833, 175.4846976667, "54"],
    [-37.9026018, 175.48495995, "44"],
    [-37.9030769833, 175.4842938, "55"],
    [-37.9027864167, 175.4848613, "46"],
    [-37.9037959667, 175.4843982667, "62"],
    [-37.90251565, 175.4845560333, "49"],
    [-37.9039613167, 175.4843144, "64"],
    [-37.9027125667, 175.4844694167, "51"],
    [-37.9034637167, 175.4841226, "59"],
    [-37.9028946833, 175.4843869, "53"],
    [-37.9036489333, 175.4840298833, "61"],
    [-37.90327315, 175.4842082833, "57"],
    [-37.90046945, 175.4855198667, "29"],
    [-37.9010344833, 175.4856939833, "34"],
    [-37.9013283667, 175.4851346333, "37"],
    [-37.9017672167, 175.4849186, "43"],
    [-37.8611247, 175.4102509167, "175"],
    [-37.8499004667, 175.4102191667, "47"],
    [-37.86802365, 175.4100161, "251"],
    [-37.8527479167, 175.4097375667, "82"],
    [-37.84663775, 175.41026955, "13"],
    [-37.8556193, 175.4102112167, "113"],
    [-37.8623374833, 175.4096021667, "188"],
    [-37.8570313833, 175.4097304667, "128"],
    [-37.8508672833, 175.4096890333, "58"],
    [-37.8633539667, 175.4102016833, "197"],
    [-37.8624295167, 175.4113314833, "187"],
    [-37.8643999167, 175.4142555167, "211A"],
    [-37.8674836667, 175.4109264333, "245A"],
    [-37.8645949333, 175.4142231333, "211B"],
    [-37.863722, 175.4116543667, "203"],
    [-37.8652689, 175.4102405667, "217"],
    [-37.8674028167, 175.4119272333, "245B"],
    [-37.8688986, 175.4071594333, "283"],
    [-37.8626189667, 175.4102669333, "191"],
    [-37.86890705, 175.4066821333, "285"],
    [-37.8638613833, 175.4102196333, "205"],
    [-37.8520415333, 175.4096858833, "74"],
    [-37.85366185, 175.4103740333, "91"],
    [-37.8541498167, 175.4102157, "99"],
    [-37.8481882167, 175.4096517333, "32"],
    [-37.8998180833, 175.4671585833, "1"],
    [-37.8994876333, 175.46689395, "4"],
    [-37.8995568833, 175.4671854, "2"],
    [-37.89982245, 175.4669492, "3"],
    [-37.8997823167, 175.4667780333, "5"],
    [-37.8993499, 175.4665456333, "6"],
    [-37.8994541, 175.4664421167, "8"],
    [-37.8996415, 175.4667272333, "7"],
    [-37.8916384833, 175.4630697, "40"],
    [-37.8913306, 175.4610441333, "24"],
    [-37.89161595, 175.4716677667, "133"],
    [-37.8914569167, 175.4754211833, "149"],
    [-37.89160835, 175.4718250167, "135"],
    [-37.89234715, 175.4585814667, "9"],
    [-37.8915247667, 175.4732450833, "137"],
    [-37.8916493667, 175.4628682, "36"],
    [-37.89127365, 175.4608001667, "1/20-3/20"],
    [-37.8922152167, 175.4605929667, "17"],
    [-37.89145415, 175.4607833333, "4/20-7/20"],
    [-37.8917261333, 175.4624021, "32"],
    [-37.8919335167, 175.45821125, "4C"],
    [-37.8922107833, 175.4609609833, "21"],
    [-37.8919453667, 175.4579664333, "4B"],
    [-37.8915077, 175.4658864333, "66"],
    [-37.8919506333, 175.4577320333, "4A"],
    [-37.8916613167, 175.4626608667, "34"],
    [-37.8919576833, 175.4575137, "2C"],
    [-37.89126035, 175.4701749167, "92"],
    [-37.8922950667, 175.4588386, "11"],
    [-37.8921412333, 175.4623956833, "31"],
    [-37.8918877167, 175.4588751167, "10"],
    [-37.8912372, 175.4708680333, "98"],
    [-37.8920993333, 175.4636887167, "43"],
    [-37.89223965, 175.4603451, "15"],
    [-37.8920777333, 175.4638900667, "43A"],
    [-37.89235135, 175.4580704, "5"],
    [-37.8916213667, 175.4634083333, "44"],
    [-37.8913535, 175.4751499333, "147"],
    [-37.8911645667, 175.4634580167, "46"],
    [-37.89154565, 175.460355, "16A"],
    [-37.8916286667, 175.4636265667, "48"],
    [-37.8914890667, 175.4661530833, "68"],
    [-37.8916243333, 175.46377045, "50A"],
    [-37.8921945667, 175.4613726833, "25"],
    [-37.8916212333, 175.4638566667, "50"],
    [-37.8917585833, 175.4617233333, "28"],
    [-37.8916201, 175.4640203, "52"],
    [-37.89219925, 175.46119465, "23"],
    [-37.891597, 175.46425765, "54"],
    [-37.8918353, 175.46017655, "14"],
    [-37.8919748667, 175.4649644667, "53"],
    [-37.8917905667, 175.4608055333, "22"],
    [-37.89131955, 175.4756406, "153"],
    [-37.8923704333, 175.4576240833, "3"],
    [-37.8905614333, 175.4758690167, "154"],
    [-37.8916816167, 175.4707503, "97"],
    [-37.8913018667, 175.4759012333, "155"],
    [-37.89253265, 175.4612154167, "23B"],
    [-37.8909466833, 175.4760167333, "156"],
    [-37.8920906167, 175.4634921, "41"],
    [-37.8912217, 175.4774480833, "165"],
    [-37.8921237833, 175.46277795, "35"],
    [-37.8908697333, 175.477294, "162"],
    [-37.8920948667, 175.4632665833, "39"],
    [-37.8912003333, 175.47770905, "167"],
    [-37.8914414833, 175.4678414, "76"],
    [-37.8908453833, 175.4777106667, "168"],
    [-37.8912160667, 175.4629456833, "38"],
    [-37.8911874, 175.4779408167, "169"],
    [-37.8919186333, 175.4584176833, "6"],
    [-37.89118215, 175.4781761167, "171"],
    [-37.8916446833, 175.4632172667, "42"],
    [-37.8911654333, 175.4784059833, "173"],
    [-37.8918217333, 175.4603906, "16"],
    [-37.8911525333, 175.47862755, "175"],
    [-37.8924511333, 175.4606313, "17B"],
    [-37.8907954, 175.4784089, "176"],
    [-37.8915381333, 175.46524225, "58"],
    [-37.8911355667, 175.478864, "177"],
    [-37.892167, 175.4617876833, "29"],
    [-37.8911190667, 175.4790793167, "179"],
    [-37.89148925, 175.47413605, "141"],
    [-37.891102, 175.4793148833, "181"],
    [-37.89174025, 175.4622023, "30"],
    [-37.8910930167, 175.4795416333, "183"],
    [-37.8923048, 175.4605938667, "17A"],
    [-37.8907614, 175.4793265833, "184"],
    [-37.8919164833, 175.45868485, "8"],
    [-37.89108015, 175.4797723833, "185"],
    [-37.8905659667, 175.4757830667, "152"],
    [-37.8910595667, 175.4800169167, "187"],
    [-37.8923372333, 175.4582542, "7"],
    [-37.8917307333, 175.46930505, "83"],
    [-37.8909663333, 175.4756883833, "150"],
    [-37.8909111167, 175.47660485, "160"],
    [-37.8916525667, 175.47116215, "129"],
    [-37.8909366167, 175.4762755333, "158"],
    [-37.8911956, 175.4715676333, "104"],
    [-37.8915429, 175.4650714667, "56"],
    [-37.8916859833, 175.45866365, "8A"],
    [-37.8919523, 175.4651683833, "55"],
    [-37.8915248667, 175.4654342167, "60"],
    [-37.8917482, 175.4613051333, "26"],
    [-37.89101255, 175.4753879, "148"],
    [-37.8925110833, 175.4608349833, "19"],
    [-37.89179885, 175.4605882333, "18"],
    [-37.8918582667, 175.4680386, "79"],
    [-37.8921763167, 175.461584, "27"],
    [-37.8914747833, 175.4665362167, "70"],
    [-37.8923905833, 175.4611956167, "23A"],
    [-37.8919975333, 175.4651655, "55A-55E"],
    [-37.8920026167, 175.45729865, "2B"],
    [-37.8920162667, 175.4570673, "2A"],
    [-37.8916384333, 175.4713722, "131"],
    [-37.8912288333, 175.4711408333, "102"],
    [-37.8915248167, 175.4656389833, "62"],
    [-37.8917611667, 175.46114545, "26A"],
    [-37.8921091, 175.4630288167, "37"],
    [-37.8209873167, 175.3760669333, "191C"],
    [-37.8249917, 175.3656036667, "91A"],
    [-37.8190006167, 175.3860204167, "254B"],
    [-37.818206, 175.38533, "254C"],
    [-37.8061591667, 175.3983436, "462"],
    [-37.8056489333, 175.3937574167, "423"],
    [-37.79713005, 175.40084965, "545"],
    [-37.79324805, 175.4048036667, "601"],
    [-37.8186617833, 175.3815952, "248A"],
    [-37.8090422833, 175.3906621333, "383B"],
    [-37.8183971667, 175.3818555667, "248B"],
    [-37.8027335833, 175.3963706167, "471"],
    [-37.8167087, 175.3801758333, "267D"],
    [-37.7975265333, 175.4015703333, "548"],
    [-37.8190651167, 175.3786646333, "229"],
    [-37.7903981, 175.4069922833, "639B"],
    [-37.8253436333, 175.3662536, "91B"],
    [-37.8085089, 175.3916918167, "406"],
    [-37.82507135, 175.36734685, "107A"],
    [-37.8243141667, 175.3677190167, "107B"],
    [-37.8240930167, 175.3684544333, "107C"],
    [-37.82428045, 175.3692349, "107D"],
    [-37.79320855, 175.4054745333, "606"],
    [-37.8210957833, 175.3758549, "191A"],
    [-37.8220672667, 175.3711244167, "155B"],
    [-37.7905658333, 175.40715725, "639A"],
    [-37.8219987167, 175.37182365, "155C"],
    [-37.79282425, 175.4050586, "605"],
    [-37.8217745833, 175.37222335, "155D"],
    [-37.80515685, 175.3938695, "437"],
    [-37.8076407333, 175.3900775, "397"],
    [-37.8237106, 175.3712966333, "131"],
    [-37.8015971, 175.3955181667, "479"],
    [-37.8227929, 175.3730921167, "157"],
    [-37.7961391167, 175.4003037, "549"],
    [-37.8233609833, 175.37310895, "152"],
    [-37.8219492667, 175.3745148667, "167"],
    [-37.8247903833, 175.3685883333, "109"],
    [-37.8248283, 175.3705193167, "126"],
    [-37.8109710333, 175.3856751167, "341"],
    [-37.82605485, 175.3651553667, "80"],
    [-37.8107359, 175.3894516833, "368"],
    [-37.8120085667, 175.3845064, "321"],
    [-37.8128636833, 175.38379265, "310"],
    [-37.81208235, 175.3843228, "319"],
    [-37.8046513333, 175.3956590833, "452"],
    [-37.8144067333, 175.3816008667, "275"],
    [-37.8102773, 175.3874213, "345B"],
    [-37.8144369, 175.38227185, "280"],
    [-37.8164895333, 175.3782892333, "267C"],
    [-37.8182382167, 175.3800216667, "240"],
    [-37.8173681833, 175.3806125, "248C"],
    [-37.8181792333, 175.3832736333, "254A"],
    [-37.8095723, 175.3899326833, "383A"],
    [-37.81761125, 175.3835261667, "254D"],
    [-37.8028805167, 175.3962506667, "469"],
    [-37.8185789, 175.3845444, "254"],
    [-37.8163547167, 175.3812859833, "258"],
    [-37.7930282167, 175.40572125, "608"],
    [-37.821138, 175.38039485, "216D"],
    [-37.81606355, 175.3793317167, "267B"],
    [-37.81934515, 175.3785087833, "225"],
    [-37.8050155667, 175.3943832667, "443A"],
    [-37.81861015, 175.379036, "235A"],
    [-37.8121421833, 175.3842917833, "317"],
    [-37.7913696833, 175.4063793, "623"],
    [-37.8205651167, 175.3768472333, "201"],
    [-37.8205108, 175.37795785, "212"],
    [-37.8231057, 175.3725295333, "155A"],
    [-37.8046846167, 175.3939956333, "443B"],
    [-37.7964915667, 175.40187745, "559"],
    [-37.80485815, 175.39453205, "443C"],
    [-37.8060723667, 175.3939798167, "428"],
    [-37.8047227, 175.3946713167, "445"],
    [-37.8048381667, 175.3949814667, "448"],
    [-37.8045786833, 175.3947850833, "449"],
    [-37.7981357, 175.3900883333, "461B"],
    [-37.8099047, 175.39060605, "388"],
    [-37.8043014333, 175.3950148, "453"],
    [-37.8043075833, 175.3954701167, "456"],
    [-37.79168895, 175.4068591833, "626"],
    [-37.8021525833, 175.39678165, "481"],
    [-37.8034197833, 175.39575665, "463"],
    [-37.8032362167, 175.3959217833, "467"],
    [-37.80216475, 175.3974925167, "484"],
    [-37.8203596833, 175.3755115833, "191B"],
    [-37.7993380667, 175.3999904667, "522"],
    [-37.8085763833, 175.3912222, "391"],
    [-37.7981168833, 175.4004628, "533"],
    [-37.7969743333, 175.4013795333, "553"],
    [-37.7970796333, 175.4021227667, "554"],
    [-37.7943688833, 175.4045175833, "590"],
    [-37.8073738833, 175.39222815, "419"],
    [-37.7955603667, 175.4027828667, "569"],
    [-37.8102608, 175.3842148333, "345A"],
    [-37.7958160167, 175.4031990833, "570"],
    [-37.7924329333, 175.4084768167, "630"],
    [-37.7956436833, 175.4033528333, "572"],
    [-37.7960458333, 175.4022678, "563"],
    [-37.8030297833, 175.3966600167, "472"],
    [-37.7963875, 175.4000470667, "547"],
    [-37.8052467, 175.39419005, "439"],
    [-37.8103165333, 175.38810555, "345C"],
    [-37.7987565833, 175.3998819167, "531A"],
    [-37.7982830833, 175.40023825, "531B"],
    [-37.79918855, 175.4000808833, "524"],
    [-37.7944693667, 175.4027557167, "577"],
    [-37.7950937833, 175.4031431333, "575"],
    [-37.7927918333, 175.4046828167, "603"],
    [-37.7947576333, 175.4034387833, "579"],
    [-37.8117228167, 175.38764085, "346B"],
    [-37.7911496667, 175.40664935, "629"],
    [-37.81588535, 175.3807131667, "267A"],
    [-37.7912028, 175.40724595, "634"],
    [-37.7908960167, 175.4074944, "638"],
    [-37.8108278167, 175.3873807333, "346A"],
    [-37.8109458667, 175.3868272333, "346"],
    [-37.8861902333, 175.4912457, "146"],
    [-37.8868429667, 175.4923818, "242"],
    [-37.8863162333, 175.4914635667, "150"],
    [-37.8866134167, 175.4930928167, "281"],
    [-37.8857069333, 175.49160115, "115"],
    [-37.88701045, 175.4928565167, "282"],
    [-37.8865745167, 175.4918085333, "196"],
    [-37.8847997667, 175.49160355, "1"],
    [-37.88530765, 175.49159645, "65"],
    [-37.8858858, 175.4924325333, "195"],
    [-37.88625505, 175.4922030167, "201"],
    [-37.8858815167, 175.49117815, "140"],
    [-37.8870972167, 175.4937585167, "370"],
    [-37.8871422667, 175.4932273333, "330"],
    [-37.8867199333, 175.4935654, "331"],
    [-37.88711285, 175.4670386167, "6"],
    [-37.8867336333, 175.4670516667, "3"],
    [-37.8867436833, 175.4669519, "1"],
    [-37.8869533833, 175.4669386667, "2"],
    [-37.8869398667, 175.46704125, "4"],
    [-37.8871175, 175.46692505, "5"],
    [-37.9008030333, 175.4861118167, "2"],
    [-37.90075285, 175.4859038833, "1"],
    [-37.9009336167, 175.4865805833, "4"],
    [-37.9008800167, 175.4863431167, "3"],
    [-37.90100455, 175.4868142, "5"],
    [-37.9014235667, 175.4873154667, "7B"],
    [-37.9010728, 175.4870406333, "6"],
    [-37.9012685833, 175.4873578833, "7A"],
    [-37.9011401833, 175.4872876833, "7"],
    [-37.8158733667, 175.37666665, "18A"],
    [-37.8161566833, 175.3760580333, "16"],
    [-37.8161400333, 175.3766246833, "18B"],
    [-37.81564025, 175.3760005833, "20"],
    [-37.9147940667, 175.4781293167, "2"],
    [-37.91445275, 175.477954, "5"],
    [-37.91432165, 175.4780204333, "7"],
    [-37.9142254833, 175.4781627667, "9"],
    [-37.9142594833, 175.4783362167, "11"],
    [-37.9140805833, 175.4785308167, "11A"],
    [-37.9141151333, 175.47861905, "10A"],
    [-37.91436635, 175.4784698833, "10"],
    [-37.9144396667, 175.4784653667, "8"],
    [-37.9147089667, 175.47783895, "1"],
    [-37.9145894, 175.4778914333, "3"],
    [-37.9146597833, 175.4781811833, "4"],
    [-37.9145286, 175.4783673833, "6"],
    [-37.9030873667, 175.47210575, "3"],
    [-37.9032704833, 175.472054, "5"],
    [-37.9032275333, 175.4724681, "4"],
    [-37.9029155167, 175.4722868333, "1"],
    [-37.9029878333, 175.4725947167, "2"],
    [-37.9033794333, 175.4723403167, "6"],
    [-37.9033877, 175.4721768833, "8"],
    [-37.9026622333, 175.5342312833, "2/60"],
    [-37.8962902167, 175.5377237833, "3/157"],
    [-37.9056577833, 175.5300138, "24"],
    [-37.8978118667, 175.53526435, "1/157"],
    [-37.9036869333, 175.5324068, "46"],
    [-37.8976678167, 175.5356030833, "2/157"],
    [-37.9025187, 175.53438235, "3/60"],
    [-37.8981575333, 175.5358635, "1/158"],
    [-37.9027801667, 175.5340282833, "1/60"],
    [-37.8979776333, 175.536204, "2/158"],
    [-37.9023776667, 175.5345600167, "4/60"],
    [-37.8853151833, 175.4743354167, "6"],
    [-37.8839096667, 175.4747028, "17"],
    [-37.8826408833, 175.4741236667, "44"],
    [-37.8835314167, 175.4746655333, "21"],
    [-37.88308945, 175.4737775333, "28"],
    [-37.8814453833, 175.4749238167, "41"],
    [-37.8829200333, 175.4741641167, "40"],
    [-37.8804728833, 175.4739323833, "66"],
    [-37.8824228667, 175.47455335, "33"],
    [-37.8849254333, 175.4748141333, "9"],
    [-37.8815074833, 175.4735321333, "54A"],
    [-37.8829310333, 175.4736918167, "38"],
    [-37.8836627167, 175.47426195, "20"],
    [-37.8818192, 175.4745435833, "35"],
    [-37.8816592833, 175.4740403, "48"],
    [-37.8816905333, 175.4745296167, "37"],
    [-37.8835084, 175.47420785, "22"],
    [-37.8810922833, 175.4739643833, "58"],
    [-37.8814526, 175.4737812167, "52"],
    [-37.8813118333, 175.4739949167, "56"],
    [-37.88347125, 175.4749025167, "21A"],
    [-37.88493785, 175.4743158, "10"],
    [-37.88273915, 175.4748604167, "29A"],
    [-37.8837637667, 175.4746886167, "19"],
    [-37.8833199667, 175.47417425, "24"],
    [-37.8838467, 175.4742672333, "18"],
    [-37.8833191167, 175.4746548333, "23"],
    [-37.8845514833, 175.4742861, "14"],
    [-37.8853397, 175.4748736833, "5"],
    [-37.8847559333, 175.4748089167, "11"],
    [-37.8829521167, 175.47379525, "36"],
    [-37.88450605, 175.4747736667, "13"],
    [-37.8851099333, 175.4747525667, "7"],
    [-37.8847199, 175.4743100333, "12"],
    [-37.8831416, 175.4741727333, "26"],
    [-37.8808951333, 175.47394745, "60"],
    [-37.8808293167, 175.4744251333, "49"],
    [-37.8806857667, 175.4739440333, "62"],
    [-37.8815219, 175.4745206667, "39"],
    [-37.88054725, 175.47393465, "64"],
    [-37.8851369667, 175.4743293333, "8"],
    [-37.8829415167, 175.4735765833, "34"],
    [-37.8813163167, 175.4745132667, "45"],
    [-37.8825621, 175.4745672, "31"],
    [-37.882743, 175.4745888, "29"],
    [-37.8849588833, 175.4740735333, "10A"],
    [-37.8830033833, 175.47362085, "32"],
    [-37.8814134833, 175.4735401, "54"],
    [-37.8829174167, 175.4746101833, "27"],
    [-37.881329, 175.4749196167, "43"],
    [-37.8818477833, 175.4741495167, "46"],
    [-37.8806645833, 175.474444, "51"],
    [-37.8835542, 175.4740686833, "22A"],
    [-37.8815817333, 175.4735421833, "54B"],
    [-37.8840175333, 175.4742836, "16"],
    [-37.8827733167, 175.4741382833, "42"],
    [-37.8831040167, 175.4746167333, "25"],
    [-37.88152945, 175.47402335, "50"],
    [-37.8810197, 175.4744641667, "47"],
    [-37.90035815, 175.4810595167, "6"],
    [-37.9004626167, 175.48148175, "5"],
    [-37.9004783333, 175.4807893167, "8"],
    [-37.90053035, 175.48110305, "10"],
    [-37.9001194333, 175.4813414167, "1"],
    [-37.9002854167, 175.4813794, "3"],
    [-37.9005929833, 175.4812279167, "12"],
    [-37.9005808667, 175.4813900667, "7"],
    [-37.90019795, 175.4810457333, "4"],
    [-37.9000177833, 175.4810738667, "2"],
    [-37.8970709833, 175.471412, "47"],
    [-37.8962267, 175.4699139833, "25"],
    [-37.8957546, 175.46976195, "14"],
    [-37.8960248333, 175.4695108167, "15"],
    [-37.8958360833, 175.4699171167, "16"],
    [-37.8960595667, 175.4695834167, "17"],
    [-37.8956411833, 175.46957925, "12"],
    [-37.8955700333, 175.46945925, "10"],
    [-37.8957725, 175.4690580833, "13"],
    [-37.8957180833, 175.4689838167, "11"],
    [-37.89593735, 175.4700870667, "18"],
    [-37.8960019667, 175.4702152333, "20"],
    [-37.8960897167, 175.4696367833, "21"],
    [-37.8960816667, 175.4703379833, "22"],
    [-37.8961728667, 175.4698312667, "23"],
    [-37.89611545, 175.4703987167, "24"],
    [-37.89616535, 175.4704619, "26"],
    [-37.8965143333, 175.4704345833, "31"],
    [-37.8965995, 175.4706005, "33"],
    [-37.8952596167, 175.46889415, "2"],
    [-37.8954856333, 175.4693051333, "8"],
    [-37.8953389167, 175.4690297167, "4"],
    [-37.8953875833, 175.469136, "6"],
    [-37.9194040167, 175.4783079, "10"],
    [-37.9197726333, 175.4782003, "12"],
    [-37.9194026167, 175.4796128167, "133"],
    [-37.9197761667, 175.47866625, "40"],
    [-37.9199951833, 175.4798155667, "148"],
    [-37.91981195, 175.47907645, "78"],
    [-37.9194262833, 175.4788171833, "59"],
    [-37.9196759333, 175.4798573833, "154"],
    [-37.9193148667, 175.48000435, "155"],
    [-37.9194418667, 175.479248, "95"],
    [-37.91985945, 175.47946575, "114"],
    [-37.8948282, 175.4632178833, "7"],
    [-37.8948541333, 175.4634539, "11"],
    [-37.8946653333, 175.46382725, "6A"],
    [-37.8942238167, 175.4629336667, "1A"],
    [-37.8942486167, 175.4635523667, "2"],
    [-37.8942641667, 175.4631693, "1"],
    [-37.8950186, 175.4640242, "8C"],
    [-37.8944589, 175.4631798333, "3"],
    [-37.8946294333, 175.4631902, "5"],
    [-37.89450815, 175.4635785333, "4"],
    [-37.8946479, 175.4635948, "6"],
    [-37.89498065, 175.4637099667, "8B"],
    [-37.8948863333, 175.4637035833, "8A"],
    [-37.89496985, 175.46325115, "9"],
    [-37.8947899667, 175.4637024167, "8"],
    [-37.89513905, 175.4640248667, "8D"],
    [-37.9428737167, 175.4654487167, "80"],
    [-37.9435976167, 175.4662367333, "85"],
    [-37.9406954, 175.4650713667, "60"],
    [-37.9443210167, 175.466494, "91"],
    [-37.9430113833, 175.4661685167, "79"],
    [-37.9423613, 175.4660200167, "73"],
    [-37.9217937167, 175.54130465, "1"],
    [-37.9214646833, 175.5409056667, "41"],
    [-37.9210630667, 175.5409307333, "86"],
    [-37.9211853667, 175.5410841, "66"],
    [-37.92096145, 175.5405598333, "83"],
    [-37.9206217333, 175.54086065, "133"],
    [-37.9216795, 175.5411416833, "21"],
    [-37.9213075167, 175.5412473167, "48"],
    [-37.9214208167, 175.54139905, "26"],
    [-37.9204421, 175.5405807833, "127"],
    [-37.8771340667, 175.4766456167, "17"],
    [-37.87582545, 175.4764970667, "2"],
    [-37.8772717167, 175.47651465, "19"],
    [-37.87616025, 175.47643495, "6"],
    [-37.87713215, 175.4761358333, "20"],
    [-37.8763702833, 175.4764765, "10"],
    [-37.8768617333, 175.4759845333, "18A"],
    [-37.87599415, 175.4764346167, "4"],
    [-37.8767086, 175.4760073, "18B"],
    [-37.8762125167, 175.4761083833, "8"],
    [-37.8771747, 175.4758428833, "22"],
    [-37.8774091, 175.4763950167, "21"],
    [-37.8764912333, 175.4760901, "18C"],
    [-37.8775394167, 175.47599195, "25"],
    [-37.8765312333, 175.47650495, "12"],
    [-37.8774804667, 175.47621635, "23"],
    [-37.8767157833, 175.4764832833, "14"],
    [-37.8776499, 175.4754748667, "26B"],
    [-37.8769073667, 175.4763486167, "16"],
    [-37.8774781667, 175.4755253167, "26A"],
    [-37.8769741333, 175.4767701, "15"],
    [-37.8761039, 175.4768351333, "3"],
    [-37.8767738333, 175.4768931333, "13"],
    [-37.8775332833, 175.4757816833, "27"],
    [-37.87661205, 175.4769204667, "11"],
    [-37.8773297333, 175.4756777167, "24"],
    [-37.8761442833, 175.47743145, "5B"],
    [-37.8761289667, 175.4772156167, "5A"],
    [-37.87642575, 175.47690055, "7"],
    [-37.87587225, 175.4768522667, "1"],
    [-37.8762655667, 175.4774301667, "5C"],
    [-37.8765258167, 175.4771421167, "9"],
    [-37.8775364167, 175.48049705, "9"],
    [-37.87721065, 175.48073405, "3"],
    [-37.8773645167, 175.48035315, "6"],
    [-37.8769231833, 175.4805237833, "2"],
    [-37.8776686, 175.4807239333, "7"],
    [-37.87711275, 175.4803929167, "4"],
    [-37.8774604167, 175.4807430667, "5"],
    [-37.87709625, 175.4808098667, "1"],
    [-37.8775519167, 175.48027995, "8"],
    [-37.8028734167, 175.5544968333, "64"],
    [-37.7908094, 175.55717225, "231"],
    [-37.8020794667, 175.5538755, "79"],
    [-37.8025875667, 175.5538326167, "73"],
    [-37.8788754667, 175.4246207833, "26"],
    [-37.8579076333, 175.423369, "257A"],
    [-37.8799908833, 175.4247353667, "14"],
    [-37.8576267333, 175.4217187, "257D"],
    [-37.8792310833, 175.4241302167, "21"],
    [-37.8560683833, 175.4248801833, "278"],
    [-37.8737989833, 175.42415875, "79"],
    [-37.8813433667, 175.42936065, "8/8"],
    [-37.8734102333, 175.4246495, "86"],
    [-37.8605645333, 175.42419905, "229"],
    [-37.8719786333, 175.4241769, "91"],
    [-37.8781270333, 175.4246374167, "34"],
    [-37.8720274833, 175.4248217833, "94"],
    [-37.8578687167, 175.4212873833, "257C"],
    [-37.87800375, 175.4263720167, "40"],
    [-37.8618965833, 175.4242119333, "213"],
    [-37.8801869167, 175.42773835, "1/8"],
    [-37.8779240167, 175.42463595, "36"],
    [-37.8743793333, 175.4246104667, "76"],
    [-37.8578661, 175.4218172, "257B"],
    [-37.8539269833, 175.4240546833, "293"],
    [-37.8767564, 175.4218264667, "49"],
    [-37.8598008833, 175.4242299667, "235"],
    [-37.8584386667, 175.42421145, "249"],
    [-37.8570034667, 175.4213275, "265"],
    [-37.8800888, 175.42631445, "10"],
    [-37.8771395667, 175.4240152, "43"],
    [-37.8781435167, 175.4240972, "33"],
    [-37.8767499333, 175.4247563, "52"],
    [-37.87567625, 175.42459055, "60"],
    [-37.8807013, 175.4246087167, "6"],
    [-37.8764337167, 175.42402455, "55"],
    [-37.8645742, 175.4242096833, "183"],
    [-37.88046835, 175.4241622833, "7"],
    [-37.8700695833, 175.4241415, "109"],
    [-37.87820565, 175.4227695333, "31"],
    [-37.86436995, 175.42472575, "184"],
    [-37.8712348833, 175.4199563167, "129"],
    [-37.8655708833, 175.4241920833, "163"],
    [-37.866108, 175.4247113333, "168"],
    [-37.85758825, 175.4248484667, "258"],
    [-37.8806747167, 175.4289119667, "3/8"],
    [-37.8808697333, 175.4291759167, "5/8"],
    [-37.8805498667, 175.4315314333, "7/8"],
    [-37.8805142333, 175.4283195667, "8"],
    [-37.8642561, 175.4211131, "185B"],
    [-37.8642016333, 175.4241768167, "185C"],
    [-37.8584019167, 175.4247333, "254"],
    [-37.8579075, 175.4247216333, "256"],
    [-37.85733205, 175.4242334, "261"],
    [-37.8572177833, 175.4231895, "263"],
    [-37.8643650167, 175.4220877667, "185A"],
    [-37.89998625, 175.4831132833, "33"],
    [-37.9028015, 175.4824331833, "62A"],
    [-37.9027069833, 175.4824823167, "60A"],
    [-37.8999237833, 175.48395105, "28"],
    [-37.8998797667, 175.4835940667, "30"],
    [-37.9000587333, 175.4835154167, "32"],
    [-37.9016412667, 175.48230395, "51"],
    [-37.901574, 175.4827421167, "52"],
    [-37.90194355, 175.4826111667, "54"],
    [-37.90215485, 175.4824878833, "56"],
    [-37.9003890667, 175.48224575, "41"],
    [-37.9005753833, 175.4833095667, "42"],
    [-37.9004801833, 175.4824322, "43"],
    [-37.90073175, 175.48323555, "44"],
    [-37.9007203833, 175.4827551667, "45"],
    [-37.9008984833, 175.4831199, "46"],
    [-37.9010707, 175.4830293333, "48"],
    [-37.9010407167, 175.4825866833, "49"],
    [-37.90236485, 175.4823782167, "58"],
    [-37.9025425, 175.4818774167, "59"],
    [-37.9025757167, 175.4822757667, "60"],
    [-37.9029402833, 175.4816723667, "61"],
    [-37.90278895, 175.4821800333, "62"],
    [-37.9031374667, 175.4822319333, "64A"],
    [-37.9030315833, 175.4820359667, "64"],
    [-37.9032178667, 175.4819789333, "66"],
    [-37.9019434, 175.48286115, "54A"],
    [-37.8818104333, 175.4707039833, "12"],
    [-37.8814851833, 175.4704820167, "9"],
    [-37.8810768333, 175.4699034, "5B"],
    [-37.8818488, 175.4702216, "1"],
    [-37.8816215667, 175.47092875, "11"],
    [-37.8816941833, 175.4701273667, "2"],
    [-37.8811842333, 175.4704525667, "7"],
    [-37.8813522667, 175.47002245, "4"],
    [-37.88194605, 175.4707180167, "13"],
    [-37.8813308, 175.4704956333, "8"],
    [-37.88115305, 175.4702513333, "6"],
    [-37.8811936167, 175.4700739, "5A"],
    [-37.8815373167, 175.4700831, "3"],
    [-37.8816521333, 175.4705540833, "10"],
    [-37.8088981167, 175.36906915, "77"],
    [-37.8088042833, 175.3655253833, "80"],
    [-37.8066999167, 175.3689073333, "52"],
    [-37.8042113, 175.3710341667, "21"],
    [-37.8035833, 175.3699288833, "17"],
    [-37.8043107833, 175.3697591667, "23"],
    [-37.8108776667, 175.3698460833, "87B"],
    [-37.8045451333, 175.3697163333, "25"],
    [-37.8104246167, 175.365628, "94B"],
    [-37.8047750833, 175.3692679333, "30"],
    [-37.80400095, 175.3716803333, "19B"],
    [-37.8025388833, 175.3693096833, "2"],
    [-37.8032552333, 175.3718025, "19A"],
    [-37.8027435333, 175.3695240333, "4"],
    [-37.8105842, 175.3663406667, "94A"],
    [-37.8028778167, 175.3696653833, "6"],
    [-37.8095059667, 175.37026555, "81"],
    [-37.8055475667, 175.3691296833, "36"],
    [-37.8101165833, 175.3695157, "87A"],
    [-37.8055532333, 175.3695431833, "41"],
    [-37.8068988, 175.3688744333, "54"],
    [-37.8059911667, 175.3690365333, "44"],
    [-37.8074588333, 175.36921695, "59"],
    [-37.8075005667, 175.3687474667, "60"],
    [-37.80836585, 175.3685797833, "64"],
    [-37.8060896833, 175.3724944167, "67A"],
    [-37.8079139, 175.3722770833, "67B"],
    [-37.8089385167, 175.3721465167, "67C"],
    [-37.81012905, 175.37175445, "67D"],
    [-37.8110090333, 175.3680073333, "96"],
    [-37.8103251, 175.3687031333, "89"],
    [-37.8101581667, 175.36820355, "88"],
    [-37.8097519333, 175.36879765, "85"],
    [-37.8084821, 175.37132025, "69"],
    [-37.8818073167, 175.4679643, "6"],
    [-37.8823003833, 175.4676866167, "1"],
    [-37.8818464333, 175.4675593, "5"],
    [-37.8822481333, 175.4679646833, "2"],
    [-37.8817913833, 175.4677682167, "7"],
    [-37.8821612333, 175.4674131167, "3A"],
    [-37.8821403, 175.46766325, "3"],
    [-37.8821458833, 175.4679535, "4"],
    [-37.9077193667, 175.4708605833, "32"],
    [-37.9105951, 175.4793621667, "98A"],
    [-37.9066916333, 175.4685963, "19"],
    [-37.9104376833, 175.4794448167, "98"],
    [-37.9064596833, 175.4678557333, "11"],
    [-37.9103041333, 175.479528, "100"],
    [-37.9090584167, 175.477976, "83"],
    [-37.9088679, 175.4779112, "81B"],
    [-37.90751235, 175.4701317833, "26"],
    [-37.9085779167, 175.4748978833, "57B"],
    [-37.9077844167, 175.4710735, "34"],
    [-37.9088840833, 175.4747589333, "60"],
    [-37.9063916833, 175.4676261333, "9"],
    [-37.9091791167, 175.47510015, "64A"],
    [-37.9090063, 175.4778273167, "81"],
    [-37.9094076667, 175.4749288167, "66"],
    [-37.9104649333, 175.4812665333, "111"],
    [-37.9094658167, 175.47513735, "66A"],
    [-37.9106371667, 175.4806045833, "108"],
    [-37.9085164667, 175.47469955, "57A"],
    [-37.9065306333, 175.4680931667, "13B"],
    [-37.90744655, 175.46992735, "24"],
    [-37.90669875, 175.4675042833, "10"],
    [-37.9063321167, 175.467451, "7"],
    [-37.9068232667, 175.4690555333, "23"],
    [-37.9064476333, 175.4682054167, "13A"],
    [-37.90728695, 175.4687101167, "20A"],
    [-37.90564665, 175.4665080833, "1B"],
    [-37.9095425167, 175.4780996, "87"],
    [-37.9055099333, 175.4665785667, "1C"],
    [-37.9064278333, 175.4685453667, "17"],
    [-37.9087755667, 175.4730346, "48A"],
    [-37.9092946833, 175.4772395333, "77"],
    [-37.9089289833, 175.4729708, "48B"],
    [-37.9070766, 175.4680242167, "14A"],
    [-37.9099299333, 175.4794760167, "97"],
    [-37.9060196667, 175.4664193167, "3"],
    [-37.9093701833, 175.4764340333, "78"],
    [-37.9088882, 175.4759446333, "71"],
    [-37.9071022833, 175.4688659833, "20"],
    [-37.9087805333, 175.4732292667, "50A"],
    [-37.9101438333, 175.4802177167, "103"],
    [-37.9100409167, 175.4805634167, "105A"],
    [-37.9103943, 175.4797851, "102"],
    [-37.9097405333, 175.4787679167, "95"],
    [-37.9093126667, 175.4762224667, "76"],
    [-37.9076596, 175.4706490167, "30"],
    [-37.9090636667, 175.4764674667, "75"],
    [-37.9091701167, 175.47836235, "89"],
    [-37.9089457333, 175.4761631167, "73"],
    [-37.9085522833, 175.4736826, "52"],
    [-37.9092411833, 175.4760100667, "74"],
    [-37.9079714833, 175.4729381333, "45"],
    [-37.9080979833, 175.4733453333, "49"],
    [-37.9069515333, 175.4683180833, "16"],
    [-37.9066421833, 175.4673182, "8"],
    [-37.90937045, 175.47757155, "79"],
    [-37.9081895333, 175.47364565, "51"],
    [-37.9086237333, 175.4750583333, "59"],
    [-37.9091840167, 175.4757918333, "72"],
    [-37.9087522333, 175.47547835, "63"],
    [-37.90689515, 175.46927105, "25"],
    [-37.9078795, 175.4713550833, "36"],
    [-37.9056039, 175.4664057333, "1A"],
    [-37.9106886833, 175.4808305833, "110"],
    [-37.9059434167, 175.4661582833, "1"],
    [-37.90686465, 175.4680447333, "14"],
    [-37.9100754167, 175.4799441333, "101"],
    [-37.9096307667, 175.4784052167, "93"],
    [-37.9103163333, 175.4807391667, "107"],
    [-37.9099907833, 175.47967445, "99"],
    [-37.9102545333, 175.4804980667, "105"],
    [-37.9067854667, 175.46778495, "12"],
    [-37.9087875, 175.4761555333, "73A"],
    [-37.9088226667, 175.4757288667, "69"],
    [-37.90860015, 175.4738656333, "54"],
    [-37.9084004667, 175.4731332667, "48"],
    [-37.9086524, 175.4734778333, "52A"],
    [-37.9070271167, 175.4685905333, "18"],
    [-37.9075912333, 175.47002045, "26A"],
    [-37.9089373833, 175.4749522333, "62"],
    [-37.90542545, 175.4648276667, "2"],
    [-37.9075973667, 175.4703872167, "28"],
    [-37.9084245, 175.4757077667, "65"],
    [-37.90912645, 175.4755800667, "70"],
    [-37.90927015, 175.4751967833, "68A"],
    [-37.9094690167, 175.4778629667, "85"],
    [-37.90713625, 175.4682970167, "16A"],
    [-37.9084881667, 175.4734576333, "50"],
    [-37.9071228167, 175.4684523333, "18A"],
    [-37.9066047833, 175.4683209, "15"],
    [-37.9086888833, 175.4752875667, "61"],
    [-37.9092166833, 175.4785048333, "91"],
    [-37.90675295, 175.4688188167, "21"],
    [-37.9089505167, 175.4731089667, "50B"],
    [-37.9090581667, 175.4753575833, "68"],
    [-37.9086879167, 175.47334805, "50C"],
    [-37.91039185, 175.48101575, "109"],
    [-37.9091127833, 175.4786399833, "91A"],
    [-37.90897975, 175.4751060667, "64"],
    [-37.8717186833, 175.4615598167, "102"],
    [-37.8620697167, 175.4558799667, "224"],
    [-37.8767515, 175.4619986833, "42"],
    [-37.8664140333, 175.4578848167, "168"],
    [-37.8778354833, 175.46234395, "32"],
    [-37.8624631167, 175.456142, "216"],
    [-37.8639001667, 175.4568719667, "194"],
    [-37.8719572167, 175.4602589, "100"],
    [-37.87530725, 175.46140325, "60"],
    [-37.86265385, 175.4563095333, "214"],
    [-37.8736987167, 175.46078595, "80"],
    [-37.8899623167, 175.4632323, "57A"],
    [-37.8891142333, 175.4571846167, "4"],
    [-37.8896277, 175.4633464833, "59"],
    [-37.88913275, 175.4644998167, "60"],
    [-37.8891977, 175.46335, "1/52"],
    [-37.8902417, 175.4604661, "25A"],
    [-37.8892224667, 175.4630494333, "50"],
    [-37.8904468333, 175.4604248, "25"],
    [-37.8899309167, 175.45755835, "7"],
    [-37.8893669667, 175.4601698, "26"],
    [-37.8891862667, 175.4573128833, "4B"],
    [-37.8897543167, 175.4603741167, "27A"],
    [-37.8895259333, 175.4573211667, "4A"],
    [-37.8899523167, 175.4603841667, "27B"],
    [-37.8887959333, 175.4610821833, "34"],
    [-37.8901048833, 175.4603943833, "27C"],
    [-37.8891028833, 175.4650312333, "64"],
    [-37.88868315, 175.4633466833, "52B"],
    [-37.8896881, 175.4624856667, "43"],
    [-37.8899772333, 175.46296325, "53"],
    [-37.8893557167, 175.4604985333, "28"],
    [-37.8887644667, 175.46359225, "54A"],
    [-37.8887913667, 175.46338915, "52A"],
    [-37.8891714, 175.4635651833, "54B"],
    [-37.8898920167, 175.4582737, "13"],
    [-37.8891619167, 175.46382635, "56"],
    [-37.8902644667, 175.4602963, "23B"],
    [-37.8903580333, 175.4578762167, "9A"],
    [-37.8895457333, 175.4571203833, "2"],
    [-37.8899171667, 175.4577745667, "9"],
    [-37.8891239833, 175.4610409833, "32"],
    [-37.8886105167, 175.4627844833, "48A"],
    [-37.8897850667, 175.4601521667, "23"],
    [-37.8885782833, 175.4630716, "48B"],
    [-37.8895879667, 175.4639701, "65"],
    [-37.88875245, 175.4628892667, "48C"],
    [-37.8897637667, 175.46090555, "29"],
    [-37.8898831667, 175.4584686167, "15"],
    [-37.8900645833, 175.4630566333, "57"],
    [-37.8894477833, 175.4587900667, "20"],
    [-37.8898162, 175.4597956833, "21"],
    [-37.8903147667, 175.4585830833, "15A"],
    [-37.8899451, 175.4573311, "5"],
    [-37.8892625, 175.46226515, "42"],
    [-37.88959655, 175.4636994833, "63"],
    [-37.8888289, 175.4626433167, "46B"],
    [-37.8897502167, 175.4611882333, "31"],
    [-37.8890874833, 175.4653801667, "66"],
    [-37.8896453667, 175.4629410333, "51"],
    [-37.88871155, 175.4626789833, "46A"],
    [-37.8889027, 175.4648962833, "64A"],
    [-37.8888759167, 175.4633533167, "2/52"],
    [-37.8903299167, 175.4581553, "13A"],
    [-37.8890716, 175.4657335833, "68"],
    [-37.8894647167, 175.4584316167, "16"],
    [-37.8889404333, 175.4574026, "6B"],
    [-37.8896737667, 175.4626918667, "45"],
    [-37.8899074, 175.4580168, "11"],
    [-37.8898575333, 175.4588148833, "17"],
    [-37.8896982167, 175.46224375, "1/41-7/41"],
    [-37.8895164167, 175.4575203, "6"],
    [-37.8899765333, 175.4602187333, "23A"],
    [-37.8891143, 175.4647213833, "62"],
    [-37.8892440667, 175.46252665, "46"],
    [-37.88890735, 175.4607073833, "30A"],
    [-37.88930945, 175.4612971, "36"],
    [-37.8892202667, 175.4574350833, "6A"],
    [-37.8891678667, 175.4639653333, "58"],
    [-37.8898663667, 175.4589170833, "19"],
    [-37.88937355, 175.4599354833, "24"],
    [-37.8893259833, 175.4609626833, "32A"],
    [-37.8899845333, 175.4624851, "49"],
    [-37.8700170667, 175.4425962167, "35"],
    [-37.87002395, 175.4440538333, "45"],
    [-37.8703417167, 175.4408183833, "19"],
    [-37.8704475833, 175.44446245, "48"],
    [-37.8705703667, 175.44211805, "32"],
    [-37.8712876167, 175.4401329, "8"],
    [-37.8706072, 175.4431831333, "40"],
    [-37.88103245, 175.43996055, "74"],
    [-37.8810238833, 175.44054185, "144"],
    [-37.8819540833, 175.44341985, "444"],
    [-37.8810368167, 175.4414257833, "218"],
    [-37.8836569833, 175.4449454, "695"],
    [-37.8805499, 175.44146635, "219"],
    [-37.88153545, 175.4435217, "409"],
    [-37.8805337667, 175.4422020167, "277"],
    [-37.8810820333, 175.4423189667, "302"],
    [-37.8826985333, 175.4431283833, "503"],
    [-37.8825451667, 175.4439081167, "533"],
    [-37.8834376, 175.4454858167, "694"],
    [-37.8806721167, 175.44412345, "397"],
    [-37.81387095, 175.45409265, "1"],
    [-37.821195, 175.4616223833, "104"],
    [-37.8211624833, 175.4682833, "181"],
    [-37.8178846167, 175.4588240333, "65"],
    [-37.8149536667, 175.4553629333, "15"],
    [-37.8197732667, 175.4671436, "167"],
    [-37.8161526333, 175.4563465, "35"],
    [-37.8209648833, 175.4674674, "178"],
    [-37.820487, 175.4606511167, "86"],
    [-37.9711954833, 175.3673120333, "66"],
    [-37.8927382667, 175.4630076, "2A"],
    [-37.8930191833, 175.4631100333, "1"],
    [-37.89302745, 175.4629626333, "1A"],
    [-37.8927669333, 175.46308965, "2"],
    [-37.8929038667, 175.46322235, "5"],
    [-37.8926603333, 175.4633015, "3A"],
    [-37.89273305, 175.4631913833, "3"],
    [-37.8928261167, 175.4632172333, "4"],
    [-37.8863257333, 175.3892431333, "29"],
    [-37.8828649833, 175.3942711333, "76"],
    [-37.88740485, 175.3880108167, "3"],
    [-37.8816477833, 175.39495895, "85"],
    [-37.9193026667, 175.46865615, "27"],
    [-37.9191047667, 175.4689871, "21"],
    [-37.9190031667, 175.4685222, "29"],
    [-37.9191244667, 175.4666619167, "55"],
    [-37.9187559333, 175.4673880833, "43"],
    [-37.9191856, 175.4667804333, "49"],
    [-37.9183846667, 175.4653317833, "75"],
    [-37.9186045833, 175.46662185, "59"],
    [-37.9191840167, 175.4678865167, "35"],
    [-37.9191584333, 175.4662006333, "61"],
    [-37.9188624, 175.4676419833, "39"],
    [-37.9184419667, 175.4657698, "69"],
    [-37.9178364167, 175.4627168667, "111"],
    [-37.9185242667, 175.4661814167, "63"],
    [-37.9191998, 175.4694479333, "17"],
    [-37.9190388167, 175.4654450833, "71"],
    [-37.91796485, 175.4632720833, "103"],
    [-37.91880005, 175.4653678333, "73"],
    [-37.9182357167, 175.4645811, "93"],
    [-37.9177229333, 175.4619539, "119"],
    [-37.91802955, 175.4624559167, "115"],
    [-37.9176650833, 175.4616779667, "123"],
    [-37.91870075, 175.4670770833, "45"],
    [-37.9176143667, 175.4613274, "125"],
    [-37.9189086667, 175.468155, "33"],
    [-37.9174097167, 175.4613318833, "127"],
    [-37.9190924, 175.4675234333, "41"],
    [-37.8068523167, 175.3939250833, "5"],
    [-37.8144720167, 175.4032648333, "122"],
    [-37.8070121667, 175.3941206333, "7"],
    [-37.8135841833, 175.40160315, "114"],
    [-37.8071723, 175.39433025, "9"],
    [-37.8073319667, 175.3945375, "13"],
    [-37.8088248333, 175.39658935, "35"],
    [-37.8150867, 175.4041908167, "138"],
    [-37.8087098667, 175.39797025, "45"],
    [-37.8153430833, 175.4043867333, "140"],
    [-37.8113713333, 175.3997835833, "77"],
    [-37.8128633667, 175.4026050333, "103"],
    [-37.8153182333, 175.404702, "142"],
    [-37.8136947667, 175.4026962667, "113"],
    [-37.8146717833, 175.4042277167, "133"],
    [-37.8132897167, 175.40224345, "105"],
    [-37.87318525, 175.5752061, "783"],
    [-37.87086625, 175.5605686167, "3/668"],
    [-37.8736095333, 175.5759500667, "791"],
    [-37.8846973333, 175.5128454333, "105"],
    [-37.882909, 175.5284399, "295"],
    [-37.8854251167, 175.50715345, "42"],
    [-37.8730277, 175.5735052333, "768"],
    [-37.8852305667, 175.5138063667, "116"],
    [-37.8765950833, 175.5441586167, "457"],
    [-37.8854819167, 175.51593135, "130"],
    [-37.8793962333, 175.5400538, "398"],
    [-37.8856814667, 175.5176310333, "146"],
    [-37.8850541667, 175.5122725, "94"],
    [-37.8859048, 175.5196622667, "158"],
    [-37.8839926333, 175.5070946667, "44"],
    [-37.8828246833, 175.5299873833, "300"],
    [-37.8835640333, 175.5073463, "47"],
    [-37.8812550167, 175.53308795, "338"],
    [-37.87624165, 175.5468433, "472"],
    [-37.8735672333, 175.5726554167, "2/766"],
    [-37.8756854833, 175.5468615167, "483"],
    [-37.8855889333, 175.5069699, "1/42"],
    [-37.8764352833, 175.55027325, "508"],
    [-37.88626155, 175.5222170833, "2/182"],
    [-37.8739916667, 175.5532237833, "537"],
    [-37.8790302167, 175.5397931667, "396"],
    [-37.8750138, 175.5530649833, "542"],
    [-37.8839209333, 175.5106114167, "79"],
    [-37.8790556833, 175.5364847667, "371"],
    [-37.8804106667, 175.5347674167, "348"],
    [-37.8843208, 175.50806425, "50"],
    [-37.8835448667, 175.50621025, "37"],
    [-37.8789683667, 175.5407611667, "400"],
    [-37.8819428333, 175.5302822333, "307"],
    [-37.8838573833, 175.5041196833, "26"],
    [-37.8728271833, 175.5730276667, "1/766"],
    [-37.8862517333, 175.5218569167, "1/182"],
    [-37.88592065, 175.52030825, "170"],
    [-37.8804488333, 175.5336723833, "345"],
    [-37.8724145667, 175.5722238833, "756"],
    [-37.8710689167, 175.5600702167, "2/668"],
    [-37.8749418667, 175.5762505333, "808"],
    [-37.88330185, 175.5037989167, "25"],
    [-37.8742985667, 175.5709469667, "766"],
    [-37.8855461833, 175.5169524167, "138"],
    [-37.8840771833, 175.5086316, "57"],
    [-37.8799641333, 175.5345286833, "351"],
    [-37.8747767833, 175.5703700833, "4/766"],
    [-37.8712547, 175.5595212, "1/668"],
    [-37.8852620333, 175.5203346333, "167"],
    [-37.87846535, 175.5402971, "407"],
    [-37.87451705, 175.5722616833, "3/766"],
    [-37.8865716667, 175.5064284333, "2/42"],
    [-37.8699697833, 175.5701625667, "725"],
    [-37.8850022833, 175.5119347333, "92"],
    [-37.9141589833, 175.4676254, "19"],
    [-37.9155973833, 175.46772575, "11/2"],
    [-37.91552955, 175.4660865, "36/2"],
    [-37.9156190333, 175.4673462667, "9/2"],
    [-37.9154039167, 175.4660434167, "35/2"],
    [-37.9155738333, 175.4664463167, "5/2"],
    [-37.91535915, 175.4658985167, "34/2"],
    [-37.9155678833, 175.4667106333, "6/2"],
    [-37.91544365, 175.4658299, "33/2"],
    [-37.9160503333, 175.4675822, "21/2"],
    [-37.9156064333, 175.4657751333, "32/2"],
    [-37.9147495167, 175.4662775167, "5"],
    [-37.9157566167, 175.46569785, "31/2"],
    [-37.9154667667, 175.4679029167, "12/2"],
    [-37.91585185, 175.4657343333, "30/2"],
    [-37.9152016333, 175.4653091167, "1"],
    [-37.9153522167, 175.4663997833, "4"],
    [-37.9156452333, 175.4675400833, "10/2"],
    [-37.9153521167, 175.4665981833, "4A"],
    [-37.91558475, 175.4671245833, "8/2"],
    [-37.9153486333, 175.4667996333, "6"],
    [-37.9155721333, 175.4669092, "7/2"],
    [-37.9152996667, 175.4669875833, "6A"],
    [-37.9150243, 175.46636625, "5A"],
    [-37.9162041333, 175.4675381333, "22/2"],
    [-37.9162005, 175.4673120333, "23/2"],
    [-37.9161440167, 175.4671061, "24/2"],
    [-37.9160962667, 175.4669004667, "25/2"],
    [-37.9160486333, 175.4666893333, "26/2"],
    [-37.9159963833, 175.46648905, "27/2"],
    [-37.91591785, 175.4662933333, "28/2"],
    [-37.9157758667, 175.4662000667, "38/2"],
    [-37.9157248667, 175.4659447167, "37/2"],
    [-37.9158606, 175.46592755, "29/2"],
    [-37.9159540833, 175.4673968833, "20/2"],
    [-37.91578295, 175.4674348167, "17/2"],
    [-37.91584205, 175.4677180167, "18/2"],
    [-37.9156962333, 175.4664396833, "13/2"],
    [-37.915699, 175.4667043333, "14/2"],
    [-37.9157030167, 175.4669139, "15/2"],
    [-37.9157118833, 175.4671016, "16/2"],
    [-37.9158802833, 175.4671848, "19/2"],
    [-37.9146419333, 175.4678385333, "16"],
    [-37.9149667, 175.46605435, "3"],
    [-37.9150279333, 175.4667922833, "7"],
    [-37.9141704333, 175.4678512833, "21"],
    [-37.9142653, 175.4673118833, "15"],
    [-37.91450075, 175.4674330833, "13"],
    [-37.9147242667, 175.46734925, "11"],
    [-37.9148913167, 175.4671297667, "9"],
    [-37.9151929833, 175.4672369167, "8"],
    [-37.9144812833, 175.4679524833, "18"],
    [-37.9149502167, 175.4675873667, "12"],
    [-37.9147979333, 175.4677301167, "14"],
    [-37.9140953833, 175.4682407667, "22"],
    [-37.9143135333, 175.4679806667, "20"],
    [-37.9139027667, 175.4673990667, "17"],
    [-37.91508455, 175.46743825, "10"],
    [-37.8207364833, 175.3925286333, "110"],
    [-37.8140913167, 175.3867786167, "31"],
    [-37.82388165, 175.3961648833, "164"],
    [-37.8149241833, 175.3869723167, "38"],
    [-37.8341317167, 175.4133935833, "364"],
    [-37.8244762167, 175.39859475, "186"],
    [-37.82108675, 175.3928284333, "112"],
    [-37.8257318, 175.4028302167, "236"],
    [-37.8213587333, 175.3930749333, "114"],
    [-37.8245402667, 175.3979335833, "184"],
    [-37.8216469333, 175.3939728667, "129"],
    [-37.8287610333, 175.4083265833, "302"],
    [-37.82049075, 175.3882675333, "92"],
    [-37.8209210167, 175.3876718333, "90B"],
    [-37.8243807167, 175.4009181, "207"],
    [-37.8210754833, 175.3869467167, "90A"],
    [-37.8142259167, 175.3862871667, "26"],
    [-37.8142241, 175.3891889667, "43"],
    [-37.8355967167, 175.4144058667, "382"],
    [-37.8263508333, 175.4048937333, "251"],
    [-37.8237985833, 175.3972016667, "173"],
    [-37.82187925, 175.3941376333, "137"],
    [-37.8159891667, 175.3862058833, "42"],
    [-37.8233059333, 175.3950369833, "156"],
    [-37.8224871333, 175.3939314167, "148"],
    [-37.8194135833, 175.3914179833, "100"],
    [-37.8149244, 175.38763835, "41"],
    [-37.8192395667, 175.3919598167, "103"],
    [-37.8202387167, 175.3879586, "90D"],
    [-37.81610515, 175.3888637333, "59"],
    [-37.8282481667, 175.4077297, "290"],
    [-37.81714775, 175.3892465833, "68"],
    [-37.8196078, 175.3887699667, "90"],
    [-37.817284, 175.39001715, "77"],
    [-37.81837465, 175.39045065, "86"],
    [-37.8277749, 175.4071191667, "272"],
    [-37.8265916333, 175.4056707167, "251A"],
    [-37.8128841167, 175.3855143833, "11"],
    [-37.8291297, 175.4098336167, "313"],
    [-37.8329969667, 175.4126325333, "358"],
    [-37.8322266, 175.4129321167, "347"],
    [-37.8348266833, 175.4139054, "372"],
    [-37.9099726167, 175.4757886667, "71"],
    [-37.9101903333, 175.4760631833, "73"],
    [-37.9152217167, 175.47371395, "131"],
    [-37.9059390167, 175.47854405, "32"],
    [-37.9097995667, 175.4753924833, "71B"],
    [-37.9044269833, 175.4792423333, "12"],
    [-37.9084252667, 175.4764496833, "49"],
    [-37.9086711167, 175.4772269833, "52"],
    [-37.9116987, 175.4759278667, "92"],
    [-37.9098638167, 175.47581795, "69"],
    [-37.9117964333, 175.4757621167, "94"],
    [-37.90989485, 175.47559865, "71A"],
    [-37.9073590833, 175.4778494167, "40A"],
    [-37.91330765, 175.47552755, "108"],
    [-37.9057401833, 175.4781938167, "25"],
    [-37.911296, 175.4748848167, "89"],
    [-37.9121108667, 175.4758530667, "98A"],
    [-37.9043787833, 175.4787889167, "13"],
    [-37.9083076667, 175.4766785667, "47A"],
    [-37.9036909333, 175.4791402667, "3"],
    [-37.91220345, 175.4755294, "100"],
    [-37.9053728833, 175.4783509333, "1/23"],
    [-37.90519915, 175.4784179, "21"],
    [-37.9052690667, 175.4783896667, "21A"],
    [-37.9114245, 175.4759148333, "88"],
    [-37.9081505833, 175.4774655, "46"],
    [-37.9142982833, 175.4745833, "120"],
    [-37.9131166, 175.4751412333, "106"],
    [-37.9083510667, 175.47694365, "47"],
    [-37.9065192667, 175.4778253667, "31"],
    [-37.9083240333, 175.47739375, "48"],
    [-37.9149526833, 175.4742867833, "126"],
    [-37.9103091667, 175.476032, "75"],
    [-37.9118749833, 175.4749764833, "101A"],
    [-37.9042161667, 175.4788623333, "11"],
    [-37.9129278167, 175.4752157333, "104"],
    [-37.9121256667, 175.4751926333, "103"],
    [-37.9112547, 175.4755432667, "85"],
    [-37.9142550667, 175.4741810667, "121"],
    [-37.9106238667, 175.4759059667, "77A"],
    [-37.9104479, 175.4759570167, "77"],
    [-37.9114070667, 175.4754850833, "87"],
    [-37.9113298833, 175.47516835, "87A"],
    [-37.9148737833, 175.4738503833, "127"],
    [-37.9112868667, 175.4759815833, "86"],
    [-37.9111339667, 175.4760538, "82"],
    [-37.91156375, 175.4758556833, "90"],
    [-37.9151142, 175.4742192667, "128"],
    [-37.9151403167, 175.4737436, "129"],
    [-37.915375, 175.4740628167, "130"],
    [-37.9144834167, 175.4745128333, "122"],
    [-37.9144913, 175.4737651167, "123A"],
    [-37.9144983167, 175.4740186167, "123"],
    [-37.9146270167, 175.4744201833, "124"],
    [-37.9126748, 175.4749461833, "105"],
    [-37.9128134833, 175.4748703333, "107"],
    [-37.9129492333, 175.4747718167, "109"],
    [-37.9131005833, 175.4746998, "111"],
    [-37.9132571833, 175.4746269833, "113"],
    [-37.9135018833, 175.4749717, "114"],
    [-37.91340395, 175.4745515, "115"],
    [-37.9136698, 175.4748826167, "116"],
    [-37.91356065, 175.4744797, "117"],
    [-37.91379245, 175.4748357, "118"],
    [-37.9136715833, 175.4744300167, "119"],
    [-37.9085906833, 175.4768593, "53"],
    [-37.9089448167, 175.47752235, "54A"],
    [-37.9088353, 175.4771584333, "54"],
    [-37.9087287167, 175.4767663333, "55"],
    [-37.9090036667, 175.4770825167, "56"],
    [-37.9065108833, 175.4773228833, "33"],
    [-37.90671225, 175.4781606833, "34"],
    [-37.90673975, 175.4777032, "35"],
    [-37.9068835, 175.4780653833, "36"],
    [-37.9067380833, 175.4772301167, "37"],
    [-37.9070569167, 175.47798485, "38"],
    [-37.9070025333, 175.4775753333, "39"],
    [-37.90721945, 175.47790165, "40"],
    [-37.9072522667, 175.4774842833, "41"],
    [-37.9073576167, 175.47744775, "43"],
    [-37.9055054167, 175.4782415167, "23"],
    [-37.9146826833, 175.4739228, "125"],
    [-37.9048823167, 175.4785375333, "17"],
    [-37.9120084333, 175.4756561667, "98"],
    [-37.9086973167, 175.4775292833, "52A"],
    [-37.90495545, 175.4780925667, "19A"],
    [-37.9115964667, 175.4754098667, "91"],
    [-37.9117456333, 175.4753338667, "93"],
    [-37.9047131167, 175.47861435, "15"],
    [-37.9166350333, 175.47304345, "141"],
    [-37.9119624833, 175.4752623, "101"],
    [-37.9039384833, 175.4785719, "9A"],
    [-37.9040451, 175.4789520667, "9"],
    [-37.9159567333, 175.4733394833, "133"],
    [-37.9133416833, 175.4750525833, "112"],
    [-37.9164713167, 175.4731105667, "139"],
    [-37.9162964833, 175.4731911, "137"],
    [-37.91611805, 175.4732665833, "135"],
    [-37.9050444167, 175.4785102333, "19"],
    [-37.9084974833, 175.47730975, "50"],
    [-37.9168131667, 175.4729816333, "143"],
    [-37.9088890667, 175.47665875, "51"],
    [-37.9169769833, 175.47291525, "145"],
    [-37.91109855, 175.4756779833, "83"],
    [-37.9036883833, 175.47891485, "5"],
    [-37.9038746333, 175.4790332667, "7"],
    [-37.9098547333, 175.4762237333, "67"],
    [-37.9134471167, 175.47558925, "110"],
    [-37.9091846167, 175.4769739333, "58"],
    [-37.9041253333, 175.47834505, "67"],
    [-37.9031156667, 175.47324245, "30"],
    [-37.9039179333, 175.4771832667, "57"],
    [-37.9027583833, 175.4732321833, "31"],
    [-37.9039296333, 175.4759913167, "1/48-5/48"],
    [-37.9031900333, 175.4735082833, "32"],
    [-37.9034018667, 175.4743276167, "36"],
    [-37.9023766833, 175.47196845, "7"],
    [-37.9032458833, 175.47560575, "49A"],
    [-37.9020863667, 175.4722218833, "9"],
    [-37.9043371833, 175.4768388333, "56B"],
    [-37.902459, 175.47222945, "15"],
    [-37.9037351, 175.47533715, "44"],
    [-37.9034826333, 175.4756647333, "51"],
    [-37.9036591, 175.47507465, "42"],
    [-37.90418945, 175.4769539167, "56"],
    [-37.9032979333, 175.4750164, "45"],
    [-37.9034232167, 175.47544545, "49"],
    [-37.9033578, 175.4752311833, "47"],
    [-37.9038201667, 175.4756474167, "46"],
    [-37.9022973167, 175.4729606, "25"],
    [-37.90414875, 175.4768183, "52"],
    [-37.90349885, 175.4745345833, "38"],
    [-37.9026894, 175.4730117167, "29"],
    [-37.9021493667, 175.47246275, "17"],
    [-37.9026062167, 175.47272955, "23"],
    [-37.9025311667, 175.4725057, "21"],
    [-37.9030380667, 175.47297935, "28"],
    [-37.9024547167, 175.4734671, "33"],
    [-37.9025374333, 175.4713386333, "2"],
    [-37.9032365, 175.4747976667, "43"],
    [-37.903545, 175.4758786333, "53"],
    [-37.9036348667, 175.47615225, "55"],
    [-37.9040838167, 175.4777189667, "61"],
    [-37.9044308, 175.4778047833, "62A"],
    [-37.9045770833, 175.4776408667, "62"],
    [-37.9041435833, 175.4779421667, "63"],
    [-37.9045395167, 175.4780827833, "64"],
    [-37.9042280667, 175.4782127, "65"],
    [-37.9046025833, 175.4783325333, "66"],
    [-37.9027241, 175.4719824833, "6"],
    [-37.9031429167, 175.4744526833, "41"],
    [-37.90234395, 175.4730909833, "27"],
    [-37.9035807667, 175.474814, "40"],
    [-37.9024965667, 175.4735884667, "35"],
    [-37.9028375333, 175.4735153, "37"],
    [-37.90263765, 175.4716923333, "4"],
    [-37.9021975, 175.47257235, "19"],
    [-37.9043748667, 175.4775318, "60"],
    [-37.90399325, 175.4774612167, "59"],
    [-37.9042882333, 175.4772585333, "58"],
    [-37.8844172167, 175.4672121, "84"],
    [-37.88526725, 175.4677498167, "89"],
    [-37.88475025, 175.4713889167, "129A"],
    [-37.8850106, 175.4704196167, "119B"],
    [-37.8848693167, 175.4653303833, "67A"],
    [-37.8849946167, 175.47052095, "119A"],
    [-37.8853588667, 175.4594981667, "21A"],
    [-37.8840973667, 175.4733293833, "140"],
    [-37.88468505, 175.4712750833, "127B"],
    [-37.8848600667, 175.47296205, "141"],
    [-37.8846001333, 175.4600292833, "26A"],
    [-37.8836016167, 175.4733639667, "142"],
    [-37.8834011333, 175.4735009333, "144A"],
    [-37.8836620833, 175.4735234, "144"],
    [-37.8836292333, 175.4677762333, "92A"],
    [-37.8848011, 175.4732428833, "145"],
    [-37.8848537, 175.4655050667, "67B"],
    [-37.8840610333, 175.4737371333, "146"],
    [-37.884338, 175.4684939, "106"],
    [-37.8844335167, 175.4733986333, "147"],
    [-37.88444615, 175.4731180167, "1/143"],
    [-37.8840384, 175.4739760167, "148"],
    [-37.8846361, 175.4730721, "2/143"],
    [-37.8847583667, 175.4735201333, "149"],
    [-37.8847493833, 175.4736688167, "151"],
    [-37.8846399333, 175.4737421667, "153A"],
    [-37.8844193833, 175.4737101333, "153"],
    [-37.8844016, 175.4739577167, "155"],
    [-37.8846051, 175.4703118167, "117"],
    [-37.8842630167, 175.4702309167, "118"],
    [-37.8845899833, 175.4706008833, "119"],
    [-37.8839889, 175.4702975, "120"],
    [-37.8845767833, 175.4708850333, "121"],
    [-37.8848939667, 175.471153, "125"],
    [-37.8845648, 175.4711997833, "127A"],
    [-37.8845397333, 175.4714559833, "129"],
    [-37.8845394, 175.4715708167, "131"],
    [-37.88370185, 175.4681742833, "100A"],
    [-37.8839465, 175.4681139833, "100"],
    [-37.8839286333, 175.4682708, "102"],
    [-37.8847414667, 175.4683697167, "101"],
    [-37.8843311333, 175.4683495167, "104"],
    [-37.8850005167, 175.468632, "105"],
    [-37.8847132167, 175.4687043167, "107"],
    [-37.88432375, 175.4686693, "108A"],
    [-37.8841027333, 175.4686521333, "108B"],
    [-37.8837668333, 175.4686217667, "108C"],
    [-37.8843156167, 175.4690232667, "110"],
    [-37.8844019333, 175.4676185833, "88"],
    [-37.8839683, 175.4676575, "90"],
    [-37.8839636333, 175.4677862833, "92"],
    [-37.8847523333, 175.4678389667, "93"],
    [-37.8843878667, 175.4678844833, "94"],
    [-37.8843912, 175.46807835, "96"],
    [-37.88488445, 175.4681411333, "97A"],
    [-37.8847461167, 175.4681295167, "97"],
    [-37.8850594333, 175.46849965, "103"],
    [-37.88521615, 175.46866015, "105A"],
    [-37.8852093833, 175.4680692333, "95B"],
    [-37.8844562, 175.4666664667, "82"],
    [-37.8844693167, 175.4664959833, "80"],
    [-37.8850079167, 175.4663639833, "77"],
    [-37.8850347667, 175.4662661667, "75A"],
    [-37.8845094, 175.46511225, "70"],
    [-37.8848360833, 175.46580235, "71"],
    [-37.8845048333, 175.4652718333, "72"],
    [-37.88484705, 175.4659848667, "73"],
    [-37.8846077667, 175.4632926667, "56"],
    [-37.8849583, 175.4636067667, "57"],
    [-37.8849358667, 175.46389605, "59"],
    [-37.8846143167, 175.4635059, "60"],
    [-37.8849265833, 175.4640693333, "61"],
    [-37.88458485, 175.4638039167, "62"],
    [-37.8846887167, 175.4620028833, "40"],
    [-37.8846763667, 175.4622161, "42"],
    [-37.88439555, 175.46253885, "50A"],
    [-37.8843140667, 175.4625245333, "50B"],
    [-37.8846659833, 175.4626401167, "50"],
    [-37.8843395, 175.4756649667, "165"],
    [-37.8843288167, 175.4758768167, "167"],
    [-37.8847458167, 175.47598175, "169"],
    [-37.8839907333, 175.4754077667, "154"],
    [-37.8832283833, 175.4761336167, "158A"],
    [-37.8834749667, 175.4760305, "158"],
    [-37.8839257333, 175.4761204333, "160"],
    [-37.8839105, 175.4763266167, "162"],
    [-37.8839068667, 175.4765393833, "164"],
    [-37.8839006667, 175.4766556333, "166A"],
    [-37.8838300333, 175.4766482833, "166B"],
    [-37.8837648667, 175.4766430667, "166C"],
    [-37.88370985, 175.4766495333, "166D"],
    [-37.88450305, 175.4759053833, "167A"],
    [-37.8843063833, 175.47627465, "173"],
    [-37.88481905, 175.4593686833, "20"],
    [-37.8848109, 175.4595419, "22"],
    [-37.8847686333, 175.4602303333, "28"],
    [-37.8847849, 175.4600010333, "26"],
    [-37.8847695, 175.4604640833, "30"],
    [-37.8847524167, 175.4606697667, "32A"],
    [-37.8846032167, 175.4607054667, "32"],
    [-37.8847437, 175.4609159, "34"],
    [-37.8847367167, 175.4610480333, "36"],
    [-37.8846226, 175.4597085, "24A"],
    [-37.88480055, 175.4597682833, "24"],
    [-37.8849988, 175.45680165, "4"],
    [-37.88498305, 175.4570515667, "6"],
    [-37.8852893167, 175.45737525, "9A"],
    [-37.8856279667, 175.4573165333, "9"],
    [-37.8852346167, 175.4583441167, "17"],
    [-37.8846999, 175.46184155, "38"],
    [-37.8842668333, 175.4699965667, "116"],
    [-37.8849434, 175.4633167, "55"],
    [-37.8849201333, 175.4582107833, "14"],
    [-37.8841963333, 175.4680842833, "98"],
    [-37.8850626333, 175.4680435333, "95A"],
    [-37.8849265167, 175.4579232, "12"],
    [-37.8849416333, 175.4576479667, "10"],
    [-37.88464885, 175.4628154667, "52"],
    [-37.88495495, 175.4630154, "53"],
    [-37.8841566, 175.46306945, "54C"],
    [-37.8843828833, 175.4631118167, "54B"],
    [-37.8846277833, 175.4630559167, "54A"],
    [-37.8852737333, 175.4576375667, "11"],
    [-37.8849684, 175.4572897333, "8"],
    [-37.8842156, 175.4664696, "80A"],
    [-37.8852629167, 175.4609307833, "31A"],
    [-37.88407215, 175.4664618, "80B"],
    [-37.8853292833, 175.4658178167, "69D"],
    [-37.8845638833, 175.4761256667, "171A"],
    [-37.8843256167, 175.4761031333, "171"],
    [-37.88461985, 175.4700835333, "115"],
    [-37.8852249667, 175.4591643, "19"],
    [-37.8850024667, 175.4655843667, "69A"],
    [-37.8853347667, 175.4565859833, "3"],
    [-37.8849291167, 175.4710324667, "123"],
    [-37.8850487333, 175.46776055, "91"],
    [-37.88518005, 175.4657751833, "69B"],
    [-37.8847597, 175.4703240833, "117A"],
    [-37.8838148667, 175.4733438, "140A"],
    [-37.8852627, 175.4581414167, "15"],
    [-37.8852686333, 175.4578723833, "13"],
    [-37.8843833333, 175.4628765333, "52A"],
    [-37.8846312667, 175.47258135, "135A"],
    [-37.8841268, 175.4727441333, "134"],
    [-37.8841223833, 175.4729087, "136"],
    [-37.8844595167, 175.4725233833, "135"],
    [-37.8844608, 175.4728356, "139"],
    [-37.88411085, 175.4730945167, "138"],
    [-37.8844061, 175.4674269333, "86"],
    [-37.8846697, 175.4623996833, "44"],
    [-37.8843516833, 175.4624326667, "46"],
    [-37.8845218833, 175.4609426833, "34A"],
    [-37.8845623833, 175.4649360333, "68"],
    [-37.8852556667, 175.46580475, "69C"],
    [-37.8853163833, 175.4638318667, "57A"],
    [-37.8841402833, 175.4725588333, "132"],
    [-37.8845058, 175.46627115, "78"],
    [-37.88520865, 175.4594427, "21"],
    [-37.88518675, 175.4597238, "23"],
    [-37.88516405, 175.4602253833, "27A"],
    [-37.8851860333, 175.4600092, "25"],
    [-37.8851601667, 175.4603894167, "27B"],
    [-37.8851518333, 175.4606064167, "29"],
    [-37.8851348833, 175.4608605667, "31"],
    [-37.8850809, 175.4610533333, "33"],
    [-37.8856552, 175.4571406667, "7A"],
    [-37.8853045167, 175.4571108167, "7"],
    [-37.88540295, 175.4658220667, "69E"],
    [-37.8853268167, 175.459619, "23A"],
    [-37.8836866, 175.4760956667, "160A"],
    [-37.8847632333, 175.4673442, "83"],
    [-37.8847711333, 175.4675412167, "85"],
    [-37.8848386167, 175.4661800667, "75"],
    [-37.8845198, 175.4660549333, "76"],
    [-37.8848257667, 175.46637395, "79"],
    [-37.88481345, 175.4665570333, "81"],
    [-37.8850432333, 175.4640734333, "61A"],
    [-37.8854814333, 175.46382035, "57B"],
    [-37.8853202, 175.45681275, "5"],
    [-37.88467615, 175.4756712, "165A"],
    [-37.8843590833, 175.4753791667, "163"],
    [-37.8854775, 175.4568292667, "5A"],
    [-37.8846230833, 175.4699498, "113"],
    [-37.8840125667, 175.47500995, "150"],
    [-37.8840018667, 175.4752078667, "152"],
    [-37.8846837667, 175.4753169, "163A"],
    [-37.8843619333, 175.4750396667, "161"],
    [-37.8840304667, 175.4794188333, "2A"],
    [-37.8807723833, 175.4785762167, "38"],
    [-37.8832733667, 175.4785025167, "14"],
    [-37.8805087833, 175.4795802, "39"],
    [-37.8825106167, 175.4792898667, "22"],
    [-37.8807048667, 175.4788063333, "40"],
    [-37.88040735, 175.47993645, "41"],
    [-37.8802707, 175.4795716333, "43"],
    [-37.8806401833, 175.4791473833, "46"],
    [-37.8805187667, 175.4791179667, "48"],
    [-37.8803874167, 175.47910085, "52A"],
    [-37.8832278833, 175.4793638667, "16"],
    [-37.8830907167, 175.4793476833, "18"],
    [-37.8821391833, 175.4796965667, "27"],
    [-37.8822759, 175.4797246333, "25"],
    [-37.88156645, 175.4792199667, "26"],
    [-37.88154905, 175.4796941667, "29"],
    [-37.8814046333, 175.4791842167, "28"],
    [-37.8841534, 175.4798770333, "1"],
    [-37.88124075, 175.47917795, "30"],
    [-37.8811993833, 175.4787023, "32"],
    [-37.8809580167, 175.4791391833, "34"],
    [-37.8809750667, 175.4788466833, "34A"],
    [-37.8835383667, 175.4798388, "9"],
    [-37.8831311167, 175.4801495667, "15"],
    [-37.88322745, 175.47980485, "13"],
    [-37.8806638833, 175.4795858667, "37"],
    [-37.88084555, 175.4786213833, "36"],
    [-37.88399585, 175.4798779833, "3"],
    [-37.8839041667, 175.4794138833, "2"],
    [-37.8837673333, 175.4794031833, "4"],
    [-37.8837132667, 175.4798593833, "7"],
    [-37.8808555833, 175.47961625, "35"],
    [-37.8835850167, 175.47938365, "8"],
    [-37.8838495167, 175.4798612, "5"],
    [-37.8837031833, 175.4801284167, "7A"],
    [-37.8836938167, 175.47892395, "6"],
    [-37.8833948833, 175.4788199167, "12"],
    [-37.8832576167, 175.4787911, "14A"],
    [-37.8834012333, 175.4798226333, "11"],
    [-37.8834290167, 175.4793790167, "10"],
    [-37.9152153667, 175.5551235833, "3/5"],
    [-37.91650135, 175.5636650667, "82"],
    [-37.9161045333, 175.5591854333, "41"],
    [-37.9154124667, 175.5548626, "2/5"],
    [-37.9166862333, 175.55784235, "32"],
    [-37.91602365, 175.5560715, "21"],
    [-37.91628925, 175.5653876833, "94"],
    [-37.9160243833, 175.55493095, "1/5"],
    [-37.91517585, 175.5660481167, "109"],
    [-37.91440645, 175.5544777167, "9"],
    [-37.9154713667, 175.56556335, "105"],
    [-37.9123841333, 175.5769109, "1/239"],
    [-37.9138841833, 175.5671444, "127"],
    [-37.916035, 175.5569371167, "25"],
    [-37.91497065, 175.5671545333, "1/114"],
    [-37.9146378167, 175.5673035, "2/114"],
    [-37.9176808667, 175.5727210167, "192"],
    [-37.91296825, 175.57312245, "1/192"],
    [-37.9165331, 175.56259155, "70"],
    [-37.9128700167, 175.5676242167, "135"],
    [-37.9127302333, 175.5677905167, "137"],
    [-37.9138889, 175.57603805, "212"],
    [-37.8834204167, 175.4653173333, "2/67"],
    [-37.8829550167, 175.4680045, "93A"],
    [-37.8815600333, 175.4786609667, "164C"],
    [-37.8830218167, 175.4623102, "41"],
    [-37.8817898333, 175.47891525, "166A"],
    [-37.8827127167, 175.46177765, "40"],
    [-37.8822979167, 175.4663795167, "74A"],
    [-37.8828493167, 175.4591475, "16"],
    [-37.88142475, 175.4786348833, "164D"],
    [-37.88306005, 175.4616891167, "37"],
    [-37.8820609167, 175.4740814833, "122"],
    [-37.8826992167, 175.4619383167, "42"],
    [-37.8821519667, 175.4815448333, "209A"],
    [-37.883041, 175.4620756167, "39"],
    [-37.8832654167, 175.4652926667, "1/67"],
    [-37.88272565, 175.4616287, "38"],
    [-37.8830076333, 175.4626069, "43"],
    [-37.8831357, 175.4601246167, "27"],
    [-37.8817307, 175.4761582, "146A"],
    [-37.8831685833, 175.4596908, "25"],
    [-37.8815906167, 175.4788964667, "166B"],
    [-37.88278065, 175.4602865167, "26"],
    [-37.8835589833, 175.4653321833, "3/67"],
    [-37.8825282667, 175.4646378, "60"],
    [-37.8813641333, 175.4755528333, "136A"],
    [-37.8823392167, 175.4748610333, "155"],
    [-37.8833277833, 175.46261325, "43A"],
    [-37.8815676833, 175.4731547, "114B"],
    [-37.8819471167, 175.4816728, "211"],
    [-37.8829108333, 175.4730159, "139"],
    [-37.8831197, 175.4654452, "69A"],
    [-37.8827723, 175.4605280167, "28"],
    [-37.8829114, 175.4647714833, "59"],
    [-37.88250115, 175.4649823, "64"],
    [-37.8829076, 175.46497065, "61"],
    [-37.88293875, 175.4727218, "135"],
    [-37.8824690167, 175.4726854833, "133"],
    [-37.88310945, 175.4604659833, "31"],
    [-37.8831059, 175.4608415833, "35"],
    [-37.8827654333, 175.4607287333, "30"],
    [-37.8831227667, 175.4602889167, "29"],
    [-37.8825220833, 175.4621568833, "44A"],
    [-37.88299765, 175.4628680167, "45"],
    [-37.8832516833, 175.4628885167, "45A"],
    [-37.8826944667, 175.46216875, "44"],
    [-37.8825202167, 175.46254835, "48A"],
    [-37.8833442667, 175.45699385, "5"],
    [-37.8829708667, 175.4632570667, "51"],
    [-37.8824811, 175.4725087833, "131"],
    [-37.8829959833, 175.4630565833, "49"],
    [-37.8826675833, 175.4625577, "48"],
    [-37.88331805, 175.45745235, "9"],
    [-37.8824531333, 175.47297485, "141"],
    [-37.8827041833, 175.45734235, "8"],
    [-37.8833336167, 175.4572248667, "7"],
    [-37.8829612, 175.4728780167, "137"],
    [-37.8823318333, 175.4686371167, "86"],
    [-37.8824054833, 175.4672578333, "78"],
    [-37.8823379667, 175.4683863333, "84A-84D"],
    [-37.8823962167, 175.4674496167, "80"],
    [-37.8824414833, 175.46633525, "74"],
    [-37.8827537667, 175.4672953, "85"],
    [-37.8822319333, 175.4661475333, "72"],
    [-37.8824802, 175.4658691833, "70"],
    [-37.8827660833, 175.4671242167, "83"],
    [-37.8823372667, 175.47505315, "157"],
    [-37.8826545167, 175.4751218167, "157A"],
    [-37.8820193333, 175.4750065167, "128"],
    [-37.8818626167, 175.4777718333, "152"],
    [-37.8819736, 175.47592125, "140"],
    [-37.8819698, 175.4757241667, "138"],
    [-37.8823149, 175.4754510833, "165"],
    [-37.8823264833, 175.4752907833, "163"],
    [-37.8827581167, 175.4752805833, "161"],
    [-37.8829257833, 175.4751779333, "159"],
    [-37.8822762, 175.4760006333, "167"],
    [-37.8821834, 175.4777217333, "177"],
    [-37.8822236833, 175.4803508667, "199"],
    [-37.8815487833, 175.4799515, "172A"],
    [-37.8821390333, 175.4785808167, "185"],
    [-37.8821657167, 175.4779489667, "179"],
    [-37.8821615, 175.47814015, "181"],
    [-37.8821482167, 175.4783480833, "183"],
    [-37.88205545, 175.4801785, "197"],
    [-37.8817139833, 175.48044315, "176"],
    [-37.8817403667, 175.4799308667, "172"],
    [-37.8817075, 175.4806324333, "176A"],
    [-37.8816647167, 175.4814856333, "184"],
    [-37.8817027333, 175.4808254167, "178"],
    [-37.8816651167, 175.48128865, "182"],
    [-37.8816775833, 175.4810764167, "180"],
    [-37.8821253667, 175.4788135833, "187"],
    [-37.88211265, 175.4790205167, "189"],
    [-37.88210465, 175.4792012833, "191"],
    [-37.8820355, 175.4804062667, "201"],
    [-37.88222755, 175.4806704167, "203A"],
    [-37.8820247167, 175.4806337333, "203"],
    [-37.8821983833, 175.4809817, "205A"],
    [-37.8820063, 175.4808974, "205"],
    [-37.8819872, 175.4811870167, "207"],
    [-37.88197265, 175.4814592667, "209"],
    [-37.8831150167, 175.4606360833, "33"],
    [-37.8827381667, 175.4614688333, "36"],
    [-37.88168275, 175.4731685667, "114A"],
    [-37.8825469333, 175.4624433, "46A"],
    [-37.8827017167, 175.4623766, "46"],
    [-37.8828950667, 175.4652071, "65"],
    [-37.88223365, 175.4708144, "98"],
    [-37.8826632333, 175.46886835, "99"],
    [-37.88294545, 175.4574472333, "10"],
    [-37.8820008, 175.47545635, "132"],
    [-37.8815931167, 175.4754940333, "134"],
    [-37.8815807333, 175.4756172833, "136"],
    [-37.8820043167, 175.4752607833, "130"],
    [-37.88218895, 175.4774782333, "175"],
    [-37.88172165, 175.4801884, "174"],
    [-37.8830567667, 175.4618380833, "37A"],
    [-37.88330235, 175.4576792167, "11"],
    [-37.8818654333, 175.4775383667, "150"],
    [-37.8826391333, 175.4630505, "50C"],
    [-37.8826306167, 175.4631781333, "50D"],
    [-37.8822323333, 175.46476475, "62"],
    [-37.8818249833, 175.4749363833, "128A"],
    [-37.8826051333, 175.4701299167, "109"],
    [-37.8822580667, 175.47622145, "169"],
    [-37.8821165333, 175.4729660833, "112"],
    [-37.8826087833, 175.4699331333, "107"],
    [-37.8819629, 175.4761853, "146"],
    [-37.8820175833, 175.4748403667, "126"],
    [-37.8825933333, 175.4704919167, "113"],
    [-37.8825976, 175.4703054667, "111"],
    [-37.8815316833, 175.4759537667, "142"],
    [-37.8815485667, 175.4760951167, "144"],
    [-37.8826667167, 175.4685696833, "97A"],
    [-37.8823006, 175.4698174167, "90"],
    [-37.8822800167, 175.4702989667, "96"],
    [-37.8819513333, 175.47633525, "148"],
    [-37.8828277833, 175.4687268667, "97"],
    [-37.8822974333, 175.469983, "92"],
    [-37.8828276667, 175.4593929667, "18"],
    [-37.8823263167, 175.4688898, "88"],
    [-37.8832137, 175.4589384833, "17"],
    [-37.8822883667, 175.4701519667, "94"],
    [-37.8826732, 175.4684589667, "97B"],
    [-37.8822189833, 175.47111545, "100"],
    [-37.8820588, 175.4799191833, "195"],
    [-37.8817857167, 175.4791120667, "168"],
    [-37.8815184167, 175.4779607667, "156"],
    [-37.8831976333, 175.4593128167, "21"],
    [-37.8823417833, 175.4681742167, "82"],
    [-37.8827111, 175.4679744667, "93"],
    [-37.8832019667, 175.4591213833, "19"],
    [-37.8815556333, 175.4802543833, "174A"],
    [-37.88215085, 175.4723449167, "108"],
    [-37.8815176167, 175.4778254833, "154"],
    [-37.8820986333, 175.4731788833, "114"],
    [-37.8820722833, 175.47386775, "120"],
    [-37.8821363667, 175.4725972667, "110"],
    [-37.8818740833, 175.47394495, "120A"],
    [-37.8820951167, 175.4734228167, "116"],
    [-37.88208125, 175.4736554333, "118"],
    [-37.8816796667, 175.4786736667, "164B"],
    [-37.88313585, 175.4678512667, "91"],
    [-37.8824046833, 175.4740707, "153"],
    [-37.8829457667, 175.45767015, "12A"],
    [-37.8825498667, 175.45756275, "12"],
    [-37.8832922167, 175.4578983333, "13"],
    [-37.8829356167, 175.4578815, "14"],
    [-37.8832731833, 175.4580626167, "15"],
    [-37.8833720833, 175.4564383833, "1"],
    [-37.8833604167, 175.4567315167, "3"],
    [-37.8828452833, 175.4659509, "75"],
    [-37.88283615, 175.4661431333, "77"],
    [-37.8828280833, 175.4662871833, "79"],
    [-37.8831762333, 175.4650671667, "63A"],
    [-37.8832807333, 175.4650862667, "63B"],
    [-37.8828784, 175.4654325333, "69"],
    [-37.88286845, 175.4656069833, "71"],
    [-37.8828541167, 175.4657729833, "73"],
    [-37.88225265, 175.4763298333, "171"],
    [-37.88244025, 175.4731903833, "143"],
    [-37.88277745, 175.4714596167, "123A"],
    [-37.8825218833, 175.4714168, "123"],
    [-37.8826166167, 175.4697419333, "105"],
    [-37.88317465, 175.4595099667, "23"],
    [-37.88146045, 175.47846145, "162"],
    [-37.8818026833, 175.47869275, "164A"],
    [-37.8825380333, 175.47125165, "121"],
    [-37.8821686667, 175.4812678167, "207A"],
    [-37.8825423167, 175.47107055, "119"],
    [-37.8818212833, 175.4783825, "160"],
    [-37.8825595667, 175.4708636, "117"],
    [-37.8822055167, 175.4713504167, "104"],
    [-37.8821969167, 175.4715105167, "106"],
    [-37.88270855, 175.4681556333, "95"],
    [-37.8818339, 175.4781130167, "158"],
    [-37.88248225, 175.4723453, "129"],
    [-37.8825806, 175.4706828667, "115"],
    [-37.8824171833, 175.47368635, "149"],
    [-37.8830100833, 175.4662410333, "77A"],
    [-37.88294835, 175.4681855, "95A"],
    [-37.8824262667, 175.4734592, "147"],
    [-37.88256465, 175.4739109667, "151A"],
    [-37.88265405, 175.4627631667, "50A"],
    [-37.88273475, 175.4676983, "89"],
    [-37.8826450667, 175.4629121333, "50B"],
    [-37.8827506167, 175.4674962833, "87"],
    [-37.8824087, 175.4738996167, "151"],
    [-37.8752754167, 175.4687945, "5"],
    [-37.8762403, 175.4685664667, "17"],
    [-37.8754141333, 175.46920485, "7"],
    [-37.87579005, 175.4687529833, "11B"],
    [-37.8756581167, 175.4691656167, "9"],
    [-37.8765213333, 175.4682912, "19D"],
    [-37.8756935167, 175.46956425, "10"],
    [-37.87642715, 175.46787445, "19B"],
    [-37.8755152333, 175.4695951833, "8"],
    [-37.8764289167, 175.46891995, "20"],
    [-37.8753332833, 175.4696019833, "6"],
    [-37.8751625833, 175.4692038167, "3"],
    [-37.8751427, 175.4696164667, "4"],
    [-37.8764386833, 175.46867495, "21"],
    [-37.87496015, 175.4696499, "2"],
    [-37.8756744167, 175.4688181667, "11A"],
    [-37.8749777333, 175.4692451667, "1"],
    [-37.8763775667, 175.4681980333, "19A"],
    [-37.87626605, 175.46911145, "16"],
    [-37.8765451333, 175.4678920167, "19C"],
    [-37.87614825, 175.4692725667, "14"],
    [-37.87655055, 175.4693377, "18"],
    [-37.8760211, 175.4693800167, "12"],
    [-37.87610675, 175.46867635, "15"],
    [-37.8759566833, 175.4689563167, "13"],
    [-37.8746548333, 175.4923337833, "108"],
    [-37.8761834667, 175.4925171833, "86"],
    [-37.8786149333, 175.4916796167, "61"],
    [-37.8767351, 175.4913667333, "83"],
    [-37.8802232333, 175.49233165, "48"],
    [-37.8775048833, 175.4913709, "75"],
    [-37.8754266, 175.4923112333, "98"],
    [-37.8778063333, 175.4924615667, "72"],
    [-37.8803238667, 175.49186235, "45"],
    [-37.8723323333, 175.49117315, "131"],
    [-37.8718419, 175.4924310167, "138"],
    [-37.8711135, 175.4946030167, "148"],
    [-37.8697698833, 175.4923552333, "166"],
    [-37.8688831, 175.4922950167, "176"],
    [-37.8789681333, 175.4925074, "58"],
    [-37.8820738333, 175.4926333167, "30"],
    [-37.8812172, 175.49178955, "37"],
    [-37.88069745, 175.4925708333, "42"],
    [-37.8787213167, 175.4903820667, "63"],
    [-37.8789726667, 175.4909397833, "59"],
    [-37.8796000667, 175.4917581167, "53"],
    [-37.8795261833, 175.49247645, "54"],
    [-37.8736368167, 175.4923986833, "124"],
    [-37.8727232333, 175.4924140333, "126"],
    [-37.87437165, 175.4674392167, "27"],
    [-37.8746732167, 175.4701863, "7"],
    [-37.8744574833, 175.4691624667, "17"],
    [-37.8743822167, 175.47024785, "9A"],
    [-37.8749997667, 175.4700487, "12"],
    [-37.8743498667, 175.4700893333, "9B"],
    [-37.8752501333, 175.4707564333, "4"],
    [-37.8746036167, 175.46989845, "11"],
    [-37.8744127333, 175.4663752333, "33"],
    [-37.87455375, 175.4696726333, "13"],
    [-37.87442195, 175.4683011333, "21"],
    [-37.87475005, 175.4704344167, "5"],
    [-37.8747738, 175.4664531833, "32"],
    [-37.8747376833, 175.4677991, "24"],
    [-37.8748038833, 175.4662112833, "34"],
    [-37.8743485, 175.4672374833, "29"],
    [-37.87475315, 175.4683317, "22"],
    [-37.8747034167, 175.4672897833, "28"],
    [-37.8751725667, 175.4705402833, "6"],
    [-37.8743703, 175.46656865, "31"],
    [-37.8747061667, 175.4675099333, "26"],
    [-37.8749663833, 175.4711516, "1"],
    [-37.8750729167, 175.4702726833, "10"],
    [-37.8747800333, 175.4687326833, "20"],
    [-37.8747974333, 175.468992, "18"],
    [-37.87484445, 175.4707471667, "3"],
    [-37.8754537333, 175.47035305, "8A"],
    [-37.8753716, 175.4710875, "2"],
    [-37.8749196, 175.4697604667, "14"],
    [-37.8744452, 175.4661277667, "35"],
    [-37.8744961833, 175.46941455, "15"],
    [-37.8747449667, 175.4666386167, "30"],
    [-37.87482605, 175.4692223833, "16"],
    [-37.8754105667, 175.4702048167, "8B"],
    [-37.8743849167, 175.4676931, "25"],
    [-37.8744337, 175.4689042667, "19"],
    [-37.8743984167, 175.4679389167, "23"],
    [-37.8778069667, 175.4712312167, "25"],
    [-37.8763120333, 175.4717215833, "44"],
    [-37.87672545, 175.4712506833, "41"],
    [-37.8772550667, 175.4717175167, "32"],
    [-37.8668511333, 175.4718110667, "166"],
    [-37.8767613667, 175.4717327167, "40"],
    [-37.8733181333, 175.47092935, "81"],
    [-37.86564525, 175.47179185, "172"],
    [-37.866566, 175.47182225, "170"],
    [-37.8709313833, 175.472052, "102"],
    [-37.8773583833, 175.4709902333, "33A"],
    [-37.8718238, 175.4719052833, "100"],
    [-37.8636636, 175.4713474333, "185"],
    [-37.8639432, 175.4718744833, "180"],
    [-37.87639895, 175.4712276333, "43"],
    [-37.86320725, 175.47180795, "190"],
    [-37.87736335, 175.4707706667, "33B"],
    [-37.8635744667, 175.4721996167, "1/186"],
    [-37.8770291667, 175.4712897833, "37"],
    [-37.8744578833, 175.4712959833, "63"],
    [-37.87760745, 175.4717249167, "30"],
    [-37.8748192, 175.47130365, "59"],
    [-37.8647013333, 175.4717920833, "174"],
    [-37.8754668167, 175.4712709333, "55"],
    [-37.8748770833, 175.4717543167, "62"],
    [-37.863631, 175.4717906, "186"],
    [-37.8759205833, 175.4712616667, "51"],
    [-37.86283285, 175.4713374833, "195"],
    [-37.8773474667, 175.4713414333, "35"],
    [-37.87610145, 175.4712462667, "47"],
    [-37.8736575, 175.4709245667, "75"],
    [-37.8743432333, 175.4718551833, "66"],
    [-37.86451155, 175.47179665, "176"],
    [-37.8735859667, 175.4719257333, "74"],
    [-37.8734058167, 175.47132365, "79"],
    [-37.8742359, 175.4712991333, "67"],
    [-37.87358325, 175.4713242167, "77"],
    [-37.87305765, 175.4719396833, "82"],
    [-37.8727949333, 175.4719115167, "86"],
    [-37.8722028667, 175.4741686, "90"],
    [-37.8675567167, 175.4711739833, "137"],
    [-37.8725890333, 175.46970215, "2/95"],
    [-37.8726248333, 175.4710150833, "1/95"],
    [-37.8702623, 175.4720475333, "116"],
    [-37.8780759667, 175.4717211333, "24"],
    [-37.8738727167, 175.4713038, "73"],
    [-37.8739672333, 175.4710486167, "71"],
    [-37.8935260167, 175.4748064, "10"],
    [-37.89273555, 175.4747373, "16"],
    [-37.8919345833, 175.4746388833, "24"],
    [-37.89328595, 175.4747852667, "12"],
    [-37.8938477333, 175.47430505, "8A"],
    [-37.8936160833, 175.47481635, "8"],
    [-37.8920694833, 175.4757293833, "23A"],
    [-37.89206575, 175.4752388667, "23"],
    [-37.8923724, 175.4746924667, "18"],
    [-37.89353315, 175.47444375, "10A"],
    [-37.8899805167, 175.4750166667, "41"],
    [-37.89167325, 175.4757043333, "27A"],
    [-37.89028415, 175.47505045, "39"],
    [-37.892463, 175.47526755, "17"],
    [-37.8918398667, 175.4752066, "25"],
    [-37.8908128167, 175.4750707333, "33"],
    [-37.8904636333, 175.4750504333, "37"],
    [-37.8906359833, 175.47507655, "35"],
    [-37.8916253, 175.47516515, "27"],
    [-37.8909492333, 175.47507265, "31"],
    [-37.8905761667, 175.4744542167, "1/30-5/30"],
    [-37.8881462333, 175.4754198167, "57"],
    [-37.88850555, 175.47524575, "53"],
    [-37.8894041667, 175.47498115, "45"],
    [-37.9014205, 175.4676039667, "9"],
    [-37.9052175667, 175.4691138833, "53"],
    [-37.90503895, 175.46905685, "51"],
    [-37.90533595, 175.4686957333, "55"],
    [-37.90163855, 175.46769255, "17"],
    [-37.9033958, 175.4683840167, "35"],
    [-37.9053689667, 175.46858075, "57"],
    [-37.9012599667, 175.4679458667, "12"],
    [-37.9014051333, 175.46801755, "14"],
    [-37.9015679, 175.4680723333, "16"],
    [-37.9031653, 175.4679986833, "31A"],
    [-37.9007696333, 175.46734585, "1"],
    [-37.9017356333, 175.4681344333, "18"],
    [-37.9019312333, 175.46780625, "19"],
    [-37.9019026, 175.4682113333, "20"],
    [-37.9023515833, 175.4679880667, "23"],
    [-37.9025247833, 175.4680511, "25"],
    [-37.9019499, 175.46872425, "26"],
    [-37.9027011167, 175.4680964167, "27"],
    [-37.90322595, 175.4683034667, "33"],
    [-37.9022090667, 175.46834225, "28"],
    [-37.9028740333, 175.4681630167, "29"],
    [-37.9009473167, 175.4678397833, "2"],
    [-37.9030474, 175.46823325, "31"],
    [-37.9024255333, 175.4684154833, "32"],
    [-37.9024751, 175.4690537, "34A"],
    [-37.9025607, 175.4684754, "34"],
    [-37.9047760167, 175.4688679333, "49"],
    [-37.9035690833, 175.46844705, "37"],
    [-37.9032248, 175.4687414833, "38"],
    [-37.9037398833, 175.4685398, "39"],
    [-37.90425835, 175.4687235833, "45"],
    [-37.9039185, 175.4686071, "41"],
    [-37.9040853333, 175.4686607667, "43"],
    [-37.9044377833, 175.46879205, "47"],
    [-37.9027932167, 175.4685815833, "36"],
    [-37.90099425, 175.46709335, "3"],
    [-37.90111195, 175.4678951333, "4"],
    [-37.9010127333, 175.4674434667, "5"],
    [-37.9012417333, 175.4675368333, "7"],
    [-37.9054492167, 175.4684984667, "59"],
    [-37.9055391, 175.4685278333, "61"],
    [-37.90550535, 175.46878055, "63"],
    [-37.9054566667, 175.46921805, "65"],
    [-37.90230745, 175.4676206667, "21A"],
    [-37.90216175, 175.4679036667, "21"],
    [-37.8808262333, 175.4773818, "55A"],
    [-37.8830005833, 175.4767448167, "16"],
    [-37.8828296667, 175.4767286, "18"],
    [-37.88259875, 175.4772334333, "31"],
    [-37.8824754, 175.47721195, "33"],
    [-37.8831398167, 175.4779190333, "17"],
    [-37.8825963167, 175.4777829, "29"],
    [-37.8842646833, 175.4768462333, "2"],
    [-37.8810851333, 175.476127, "36"],
    [-37.8806964, 175.47760075, "57"],
    [-37.8805952167, 175.4775984333, "59"],
    [-37.8813687667, 175.4765958833, "32"],
    [-37.8824115167, 175.4772049833, "35"],
    [-37.8811797, 175.4765765833, "34"],
    [-37.8815471667, 175.4766046333, "30"],
    [-37.88417235, 175.4773933667, "3"],
    [-37.88174695, 175.4772075667, "39"],
    [-37.8809885833, 175.47654575, "38"],
    [-37.8814635333, 175.4771838167, "43"],
    [-37.8816058667, 175.4771958, "41"],
    [-37.88064845, 175.4765253, "42"],
    [-37.8808178333, 175.4765337333, "40"],
    [-37.883982, 175.4773589667, "5"],
    [-37.8834955667, 175.4767355667, "10"],
    [-37.88350755, 175.4765409, "10A"],
    [-37.8836987667, 175.47736385, "7"],
    [-37.88321935, 175.4767625833, "12"],
    [-37.8833260667, 175.4773372, "13"],
    [-37.8830089, 175.4772931833, "19A"],
    [-37.8831393167, 175.4773106833, "19"],
    [-37.88264695, 175.47671705, "20"],
    [-37.88292945, 175.4775952333, "21"],
    [-37.8824614333, 175.4767002833, "22"],
    [-37.8828817167, 175.4779039, "23"],
    [-37.8823059167, 175.4766897833, "24"],
    [-37.8827997667, 175.4772721833, "25A"],
    [-37.8828034167, 175.4775536833, "25B"],
    [-37.8827016667, 175.4777941, "27"],
    [-37.8828062, 175.47779805, "27A"],
    [-37.8817341833, 175.4766062333, "28"],
    [-37.8813136167, 175.4771594167, "45"],
    [-37.8811630667, 175.4771457, "47"],
    [-37.8809942833, 175.4776755833, "51"],
    [-37.8804464667, 175.4764969833, "44"],
    [-37.8810737, 175.4776356667, "49"],
    [-37.8809778333, 175.4774265, "53A"],
    [-37.8810030333, 175.4771406667, "53"],
    [-37.88079105, 175.47712645, "55"],
    [-37.8835414333, 175.4773520667, "9"],
    [-37.8805955667, 175.4771014667, "61"],
    [-37.8804778167, 175.4770884667, "63"],
    [-37.8802896833, 175.4770558, "65"],
    [-37.8834467833, 175.4778119333, "11"],
    [-37.8878083, 175.4623779167, "49A"],
    [-37.8872817833, 175.45737585, "10"],
    [-37.8877537333, 175.4595533, "27A"],
    [-37.8884375167, 175.45748685, "11B"],
    [-37.8878958, 175.4596416167, "27B"],
    [-37.88824535, 175.45746395, "11A"],
    [-37.8875099833, 175.4575973667, "14"],
    [-37.8866716167, 175.4603215333, "36B"],
    [-37.8871296333, 175.4604902833, "36C"],
    [-37.8873681333, 175.4599526667, "30"],
    [-37.8880297, 175.4601033833, "31A"],
    [-37.8881606833, 175.4601333667, "31B"],
    [-37.8869335833, 175.4608386833, "40A"],
    [-37.8873096333, 175.4609038, "40"],
    [-37.8878578167, 175.4576188333, "13"],
    [-37.8871150667, 175.4574956333, "12"],
    [-37.8878406333, 175.45785455, "15"],
    [-37.8871478667, 175.4578061667, "16A"],
    [-37.8869680833, 175.4578044667, "16B"],
    [-37.8874965167, 175.4577967, "16"],
    [-37.8872507333, 175.4580158333, "18A"],
    [-37.88747815, 175.4580365167, "18"],
    [-37.8880638833, 175.45810725, "19A"],
    [-37.88784345, 175.4580772667, "19"],
    [-37.8877572333, 175.45932705, "25"],
    [-37.8879145667, 175.45669455, "1"],
    [-37.8873702833, 175.4595467333, "26"],
    [-37.8879238167, 175.4569262833, "1A"],
    [-37.8874736, 175.4582577833, "20"],
    [-37.8878260333, 175.4583038167, "21"],
    [-37.8873656333, 175.4597425833, "28"],
    [-37.8879435667, 175.4597720333, "29A"],
    [-37.8881376167, 175.45977945, "29B"],
    [-37.8883413667, 175.4597758333, "29C"],
    [-37.8884945333, 175.45978905, "29D"],
    [-37.8877360167, 175.45978725, "29"],
    [-37.8871679167, 175.4598937333, "30A"],
    [-37.8877368167, 175.45999715, "31"],
    [-37.8873456, 175.4602082167, "32"],
    [-37.8877073333, 175.4602192333, "33"],
    [-37.88687805, 175.4602032667, "34A"],
    [-37.8866636, 175.4602061833, "34B"],
    [-37.8868802667, 175.4603641333, "36A"],
    [-37.8877013333, 175.4604213, "35"],
    [-37.8875414167, 175.4568279333, "2"],
    [-37.8873298167, 175.4604643167, "36"],
    [-37.8876929833, 175.4606236833, "37"],
    [-37.8869503167, 175.4606911333, "38A"],
    [-37.8873173833, 175.46064935, "38"],
    [-37.8880788167, 175.46095015, "39A"],
    [-37.8876923833, 175.4607943167, "39"],
    [-37.88767155, 175.4610391833, "41"],
    [-37.8876050833, 175.4618428, "43"],
    [-37.8876116333, 175.4619894, "45"],
    [-37.88820765, 175.4571291333, "3A"],
    [-37.88840855, 175.4571648833, "3B"],
    [-37.8875992833, 175.4621293167, "47"],
    [-37.88757835, 175.4622876333, "49"],
    [-37.8875702, 175.4625005667, "51"],
    [-37.8875504, 175.46284035, "53"],
    [-37.8875351833, 175.46302475, "55"],
    [-37.88811905, 175.4635122, "57E"],
    [-37.88825965, 175.46351715, "57F"],
    [-37.8882625, 175.4633885, "57G"],
    [-37.8882589333, 175.4632448167, "57H"],
    [-37.8875218833, 175.4632180167, "57"],
    [-37.8875030667, 175.4634566667, "59"],
    [-37.8871363, 175.4643333667, "64"],
    [-37.88744265, 175.4645542333, "65"],
    [-37.8871286333, 175.4645791667, "66"],
    [-37.8876065667, 175.4648085833, "67A"],
    [-37.88744175, 175.4647992167, "67"],
    [-37.88711895, 175.4648136, "68"],
    [-37.8885710333, 175.4571354, "5A"],
    [-37.8886647667, 175.4571676667, "5B"],
    [-37.8874510667, 175.4649796333, "69A"],
    [-37.8875224833, 175.4649906833, "69B"],
    [-37.8878563833, 175.4571620833, "7A"],
    [-37.8880328667, 175.4571656833, "7B"],
    [-37.8875264167, 175.4573541, "8"],
    [-37.88804485, 175.4574312167, "9B"],
    [-37.8875345667, 175.4570015833, "6"],
    [-37.8878647667, 175.45740435, "9A"],
    [-37.8879745833, 175.4634900667, "57D"],
    [-37.8878037333, 175.4633596833, "57B"],
    [-37.8878387167, 175.4631928333, "57A"],
    [-37.8878102333, 175.46349065, "57C"],
    [-37.9019538167, 175.4671126833, "7A"],
    [-37.903244, 175.4676256333, "14A"],
    [-37.9020871667, 175.4668353167, "7"],
    [-37.9027623667, 175.4671213167, "11"],
    [-37.9025892667, 175.4670505333, "10"],
    [-37.9024684667, 175.4672691667, "10A"],
    [-37.90241945, 175.4669742667, "9"],
    [-37.9029300667, 175.4671840333, "12"],
    [-37.90311145, 175.4672579333, "13"],
    [-37.9032782833, 175.4673314833, "14"],
    [-37.9036218833, 175.4674643167, "16"],
    [-37.9037919667, 175.46753785, "17"],
    [-37.90344895, 175.4673941667, "15"],
    [-37.9039705667, 175.4676045333, "18"],
    [-37.9041435833, 175.467671, "19"],
    [-37.9010125167, 175.4664210333, "1A"],
    [-37.9007809667, 175.4663229167, "1"],
    [-37.9043140333, 175.4677303167, "20"],
    [-37.90448985, 175.46780755, "21"],
    [-37.9046493333, 175.4670530667, "23"],
    [-37.9048533833, 175.4675182833, "24"],
    [-37.9012388167, 175.46653205, "2"],
    [-37.9014534667, 175.46660645, "4"],
    [-37.9017320167, 175.4669518333, "5"],
    [-37.9018944667, 175.4667655333, "6"],
    [-37.9022384667, 175.46689735, "8"],
    [-37.90570045, 175.46976825, "72/91"],
    [-37.9051381333, 175.4722857333, "96"],
    [-37.9032204, 175.4703621333, "53"],
    [-37.9053162167, 175.4723414, "98"],
    [-37.9037962833, 175.4711215833, "5/91"],
    [-37.9055880667, 175.4707876167, "108/91"],
    [-37.9045404333, 175.4699855167, "46/91"],
    [-37.9016813667, 175.4703439167, "17"],
    [-37.9047542667, 175.4700433333, "48/91"],
    [-37.9038862333, 175.4703755167, "31/91"],
    [-37.9046661667, 175.4695472667, "56/91"],
    [-37.9033795167, 175.4706831, "10/91"],
    [-37.9049449167, 175.4696617167, "54/91"],
    [-37.90342665, 175.4705010167, "26/91"],
    [-37.9042283333, 175.4698824, "43/91"],
    [-37.9034820167, 175.4702482, "27/91"],
    [-37.9041029833, 175.471257, "3/91"],
    [-37.9035045167, 175.47071685, "11/91"],
    [-37.9034292833, 175.4709543667, "8/91"],
    [-37.9035455167, 175.4705136333, "25/91"],
    [-37.9044278, 175.4696974167, "52/91"],
    [-37.9036199667, 175.4702949333, "28/91"],
    [-37.9050604833, 175.4696742167, "53/91"],
    [-37.9035777167, 175.4701138, "29/91"],
    [-37.9047726833, 175.46981425, "49/91"],
    [-37.9037153, 175.4701772333, "30/91"],
    [-37.90366135, 175.4710693333, "6/91"],
    [-37.9036912333, 175.4708029167, "12/91"],
    [-37.9039544333, 175.4701398833, "39/91"],
    [-37.90384865, 175.4708670667, "13/91"],
    [-37.90441965, 175.4694715667, "58/91"],
    [-37.9039537167, 175.4709042667, "14/91"],
    [-37.9048014667, 175.46941845, "66/91"],
    [-37.90397155, 175.4704078333, "32/91"],
    [-37.9046743167, 175.4697731167, "50/91"],
    [-37.9040982, 175.4709554167, "15/91"],
    [-37.9049822333, 175.4694750833, "67/91"],
    [-37.9042064833, 175.4709969, "16/91"],
    [-37.9039450167, 175.4711861667, "4/91"],
    [-37.9043704167, 175.47106545, "17/91"],
    [-37.9045624167, 175.4693054333, "64/91"],
    [-37.90449515, 175.4711117167, "18/91"],
    [-37.9040047, 175.46996625, "40/91"],
    [-37.9038797333, 175.4706635, "24/91"],
    [-37.9035451833, 175.4710177667, "7/91"],
    [-37.9039780833, 175.4707046333, "23/91"],
    [-37.9045066833, 175.46972115, "51/91"],
    [-37.9041615833, 175.4707864333, "22/91"],
    [-37.9060640333, 175.4699358833, "91/91"],
    [-37.9042534333, 175.47082315, "21/91"],
    [-37.9047130333, 175.4693776833, "65/91"],
    [-37.9044305, 175.47089635, "20/91"],
    [-37.9043041167, 175.46989765, "44/91"],
    [-37.9041919167, 175.4691500833, "61/91"],
    [-37.9044746667, 175.46996645, "45/91"],
    [-37.9042904667, 175.4691828667, "62/91"],
    [-37.9040487167, 175.4697756833, "41/91"],
    [-37.90415055, 175.4693699833, "60/91"],
    [-37.90446065, 175.46926835, "63/91"],
    [-37.9042810333, 175.46945405, "59/91"],
    [-37.9032851, 175.4708958667, "9/91"],
    [-37.90451895, 175.4709371333, "19/91"],
    [-37.9045116833, 175.4694999333, "57/91"],
    [-37.9040854167, 175.4704954667, "33/91"],
    [-37.9043916, 175.4713621667, "1/91"],
    [-37.9041970167, 175.4705370833, "34/91"],
    [-37.9050893833, 175.46956665, "68/91"],
    [-37.9043310833, 175.4706087333, "35/91"],
    [-37.9040848, 175.4696433167, "42/91"],
    [-37.90443305, 175.4706374667, "36/91"],
    [-37.90476785, 175.4695885167, "55/91"],
    [-37.9045282833, 175.4706701333, "37/91"],
    [-37.9042286667, 175.471303, "2/91"],
    [-37.90462665, 175.4707112667, "38/91"],
    [-37.9046719667, 175.4700236667, "47/91"],
    [-37.9063787833, 175.47006835, "93/91"],
    [-37.9052918833, 175.4698329167, "76/91"],
    [-37.9052114833, 175.4700221833, "77/91"],
    [-37.9050883833, 175.4701973667, "79/91"],
    [-37.9053839167, 175.4698613, "75/91"],
    [-37.9052999333, 175.47006295, "78/91"],
    [-37.9051933667, 175.47023875, "80/91"],
    [-37.9052919167, 175.4702715333, "81/91"],
    [-37.9055609, 175.4699386667, "74/91"],
    [-37.9056495333, 175.4699711, "73/91"],
    [-37.9054736, 175.4701402167, "82/91"],
    [-37.9063660167, 175.4715132167, "102/91"],
    [-37.9062675667, 175.4719148667, "118/91"],
    [-37.9062345, 175.4720598833, "134/91"],
    [-37.9061993167, 175.4712732833, "104/91"],
    [-37.9061410333, 175.4715093, "117/91"],
    [-37.90608265, 175.4717494667, "119/91"],
    [-37.9060274833, 175.47199395, "133/91"],
    [-37.9059191, 175.4719566333, "132/91"],
    [-37.9059778667, 175.47169975, "120/91"],
    [-37.90603625, 175.4714595667, "116/91"],
    [-37.9061060667, 175.4711529667, "105/91"],
    [-37.9053162667, 175.4716843, "137/91"],
    [-37.9055131833, 175.4717582167, "136/91"],
    [-37.9055088, 175.471073, "112/91"],
    [-37.9056170833, 175.4711144833, "113/91"],
    [-37.9057647667, 175.4711699333, "114/91"],
    [-37.9058762667, 175.4712157167, "115/91"],
    [-37.9054861167, 175.4707589, "109/91"],
    [-37.9055522167, 175.4701764667, "83/91"],
    [-37.9057089833, 175.4702698167, "84/91"],
    [-37.9058203833, 175.4703197833, "85/91"],
    [-37.90590455, 175.4701097667, "89/91"],
    [-37.9059963, 175.4701506667, "88/91"],
    [-37.90573235, 175.4708471167, "107/91"],
    [-37.9061820167, 175.4702237333, "87/91"],
    [-37.9062864333, 175.4702866167, "86/91"],
    [-37.9058177667, 175.47087525, "106/91"],
    [-37.9064954833, 175.4701769667, "94/91"],
    [-37.9065182667, 175.4703407, "95/91"],
    [-37.90647405, 175.4705396167, "96/91"],
    [-37.906434, 175.4707011, "97/91"],
    [-37.9064003667, 175.47087115, "98/91"],
    [-37.9065184833, 175.4709171667, "100/91"],
    [-37.9053462, 175.4696260167, "69/91"],
    [-37.9054348333, 175.46965845, "70/91"],
    [-37.9056151167, 175.4697359333, "71/91"],
    [-37.9065477667, 175.4707929167, "99/91"],
    [-37.9063361667, 175.4716625167, "103/91"],
    [-37.9064024833, 175.47136415, "101/91"],
    [-37.9062771167, 175.4700270833, "92/91"],
    [-37.90561825, 175.4717954167, "135/91"],
    [-37.9052021167, 175.4714629667, "127/91"],
    [-37.9053039667, 175.4714958833, "128/91"],
    [-37.9055797833, 175.4715935333, "130/91"],
    [-37.9057338, 175.4716617333, "131/91"],
    [-37.9054388, 175.47153415, "129/91"],
    [-37.90521165, 175.4711876167, "126/91"],
    [-37.9053168167, 175.47122065, "125/91"],
    [-37.9054577833, 175.4712800167, "124/91"],
    [-37.9055496333, 175.47131675, "123/91"],
    [-37.9057004333, 175.47138065, "122/91"],
    [-37.9057989, 175.4714176167, "121/91"],
    [-37.9052758833, 175.4709810667, "110/91"],
    [-37.9053744333, 175.4710138667, "111/91"],
    [-37.9029642833, 175.4708119167, "49"],
    [-37.9013200667, 175.47020055, "9"],
    [-37.9059721, 175.4699033333, "90/91"],
    [-37.9009692833, 175.4700359167, "1"],
    [-37.9020093333, 175.4704903167, "25"],
    [-37.9028505, 175.4713808167, "42"],
    [-37.9026220667, 175.4707023167, "41"],
    [-37.9030775167, 175.47144105, "44"],
    [-37.9032627, 175.4715188333, "46"],
    [-37.90279945, 175.4707535, "47"],
    [-37.9034596333, 175.4715854667, "48"],
    [-37.9046305667, 175.4720644, "90"],
    [-37.9048369667, 175.472151, "92"],
    [-37.9049919, 175.4722146, "94"],
    [-37.9036494333, 175.4716701167, "50"],
    [-37.90358525, 175.4846141, "12"],
    [-37.9037579, 175.4852529, "6"],
    [-37.9038024667, 175.4850978, "7"],
    [-37.9037217667, 175.4849037333, "8"],
    [-37.90347035, 175.4850285667, "2"],
    [-37.9032276333, 175.48546265, "3"],
    [-37.9035196167, 175.4852706167, "4"],
    [-37.9036445667, 175.4853146167, "5"],
    [-37.893842, 175.4658828667, "14"],
    [-37.8942232167, 175.4658869, "10"],
    [-37.8942694, 175.4655608, "10A"],
    [-37.8939012167, 175.46629055, "11"],
    [-37.89414105, 175.46563135, "12A"],
    [-37.89403175, 175.4658608667, "12"],
    [-37.8928791667, 175.4657609, "18"],
    [-37.8920411833, 175.4656866167, "26"],
    [-37.8947138333, 175.46562585, "4A"],
    [-37.89482635, 175.4656405333, "4B"],
    [-37.8943928667, 175.4659067667, "8"],
    [-37.89417895, 175.4666384333, "7A"],
    [-37.8941652333, 175.4663256, "7"],
    [-37.8930164333, 175.4657825333, "16"],
    [-37.8945337167, 175.46636655, "3"],
    [-37.8947049667, 175.4662976667, "1"],
    [-37.8943467167, 175.4663510667, "5"],
    [-37.8945939667, 175.46589925, "6A"],
    [-37.8946026667, 175.4655432, "6B"],
    [-37.89400605, 175.4666357, "9A"],
    [-37.89400415, 175.4663002333, "9"],
    [-37.8947237, 175.4659225, "4"],
    [-37.8948905833, 175.4659464167, "2"],
    [-37.8926863, 175.465739, "20"],
    [-37.8923385, 175.4654623833, "24B"],
    [-37.89249375, 175.4657308833, "22"],
    [-37.8923111667, 175.4657147167, "24"],
    [-37.8815449167, 175.4655157, "12"],
    [-37.8822096833, 175.4655813667, "2"],
    [-37.88233595, 175.4651839667, "1"],
    [-37.8816413667, 175.4648852333, "9B"],
    [-37.88217595, 175.4651827, "3"],
    [-37.8816216167, 175.4650913833, "9A"],
    [-37.8814350167, 175.4653094667, "13"],
    [-37.8813971333, 175.4649169833, "11B"],
    [-37.8814120833, 175.4650868167, "11A"],
    [-37.8819977833, 175.4651571333, "5"],
    [-37.8818037833, 175.46516125, "7"],
    [-37.9272509333, 175.5707935167, "17"],
    [-37.92487165, 175.5688565167, "50"],
    [-37.9279805, 175.5715888167, "2/4"],
    [-37.9281482167, 175.57159225, "3/4"],
    [-37.9277371667, 175.5716141833, "1/4"],
    [-37.9283277667, 175.5715995333, "4/4"],
    [-37.9259907667, 175.5697310833, "41"],
    [-37.9139028667, 175.4794934333, "16"],
    [-37.9131072667, 175.4784122, "5"],
    [-37.913859, 175.4793484, "14"],
    [-37.9137596833, 175.4789706167, "10"],
    [-37.9129783833, 175.4779572167, "1"],
    [-37.9134818333, 175.4796230333, "13"],
    [-37.9134313, 175.47942965, "11"],
    [-37.9130481833, 175.4781893667, "3"],
    [-37.9136100333, 175.4785928, "8"],
    [-37.9137780667, 175.47816635, "6A"],
    [-37.9134069333, 175.4779523167, "2"],
    [-37.9134797167, 175.4781646167, "4"],
    [-37.9135479833, 175.4783853833, "6"],
    [-37.9074968667, 175.4759960667, "26"],
    [-37.90790835, 175.4788683333, "53"],
    [-37.9077523333, 175.47593355, "26A"],
    [-37.9075665667, 175.47624025, "30"],
    [-37.9073841167, 175.47837545, "45"],
    [-37.90830365, 175.4786741167, "52"],
    [-37.9087247333, 175.4801247333, "64"],
    [-37.9075075667, 175.4788175333, "51"],
    [-37.9088166, 175.4804266333, "66"],
    [-37.9082595167, 175.4801578667, "65"],
    [-37.9082304, 175.47843325, "50"],
    [-37.90781645, 175.4785779, "49"],
    [-37.9083352333, 175.48044785, "67"],
    [-37.9065845333, 175.4744138667, "15"],
    [-37.9069974, 175.47423525, "12"],
    [-37.9065571167, 175.4727805333, "2"],
    [-37.9066387833, 175.47305845, "4"],
    [-37.9068011, 175.4735746167, "8"],
    [-37.90669225, 175.47329415, "6"],
    [-37.9072826667, 175.4752864833, "18"],
    [-37.9081420333, 175.47812825, "44"],
    [-37.9076585, 175.47803815, "43"],
    [-37.9079773, 175.4776514, "42"],
    [-37.9080697, 175.4779212, "42A"],
    [-37.90758785, 175.4777916167, "41"],
    [-37.90774285, 175.4783192, "47"],
    [-37.9085469333, 175.47804035, "46"],
    [-37.907853, 175.4771642833, "40"],
    [-37.90694245, 175.4762600833, "27A"],
    [-37.90714115, 175.4762523167, "27"],
    [-37.9085940333, 175.4781931, "48"],
    [-37.90842915, 175.4807205833, "69"],
    [-37.90889165, 175.4806537667, "68"],
    [-37.9090825167, 175.4813461833, "72"],
    [-37.9085069833, 175.48098455, "71"],
    [-37.9091493333, 175.4815615167, "74"],
    [-37.9085867333, 175.4812446833, "73"],
    [-37.90638345, 175.4737115833, "9"],
    [-37.9073718833, 175.4770443667, "35"],
    [-37.9076616333, 175.47651175, "34"],
    [-37.9070147167, 175.4757612667, "19"],
    [-37.9080529667, 175.4794295333, "61"],
    [-37.9081081167, 175.4796110667, "63"],
    [-37.9067812333, 175.4766508667, "29"],
    [-37.90727425, 175.4767382167, "33"],
    [-37.9080598, 175.4763364, "32"],
    [-37.9080013, 175.4761604, "32A"],
    [-37.9072168667, 175.4765151833, "31"],
    [-37.9069078, 175.47611375, "21A"],
    [-37.9070925167, 175.4759961167, "21"],
    [-37.9073595833, 175.4755532, "20"],
    [-37.9078311, 175.47552015, "22"],
    [-37.9066715333, 175.4762365333, "23"],
    [-37.9074292167, 175.4757909, "24"],
    [-37.9067200667, 175.4763614333, "25"],
    [-37.9079507667, 175.47594195, "28"],
    [-37.9077839333, 175.4769487333, "38"],
    [-37.9087032167, 175.478581, "54"],
    [-37.90755175, 175.4791360667, "55"],
    [-37.9087507167, 175.47871815, "56"],
    [-37.9075607333, 175.4792694833, "57"],
    [-37.9085885667, 175.4789704, "58A"],
    [-37.908387, 175.47897535, "58"],
    [-37.9078259667, 175.4793328833, "59A"],
    [-37.90801855, 175.47915195, "59"],
    [-37.90845065, 175.4792147, "60"],
    [-37.9086727, 175.4815190333, "75"],
    [-37.9092022333, 175.4817325833, "76"],
    [-37.9087436333, 175.4817835, "77"],
    [-37.9068335333, 175.475831, "19A"],
    [-37.9064835, 175.4740658167, "11"],
    [-37.9068924667, 175.4738985333, "10"],
    [-37.90772245, 175.47673845, "36"],
    [-37.9153057833, 175.4700439333, "8"],
    [-37.9151920167, 175.470103, "7"],
    [-37.9154897833, 175.4704254667, "4"],
    [-37.91544255, 175.4701449833, "6"],
    [-37.9152406333, 175.4705098833, "3"],
    [-37.9155660833, 175.47067085, "2"],
    [-37.9153145667, 175.470762, "1"],
    [-37.915152, 175.4703036833, "5"],
    [-37.8753657, 175.4666292833, "7"],
    [-37.8752355833, 175.4664042833, "5"],
    [-37.8751239167, 175.4667343, "3"],
    [-37.8749005333, 175.4667724833, "1"],
    [-37.8759491, 175.4666146833, "13"],
    [-37.8761423333, 175.4666642667, "15"],
    [-37.8757443667, 175.46657535, "11"],
    [-37.8755500833, 175.4665719333, "9"],
    [-37.8762191, 175.4673812833, "18"],
    [-37.8764603333, 175.4671767333, "22"],
    [-37.87631595, 175.4667095833, "17"],
    [-37.8765421, 175.4670481833, "23"],
    [-37.8764974333, 175.4666557, "19"],
    [-37.8765351667, 175.46685605, "21"],
    [-37.8763332, 175.4671934833, "20"],
    [-37.8761136667, 175.4670612333, "16"],
    [-37.8759115833, 175.4670291, "14"],
    [-37.8757069333, 175.4669862167, "12"],
    [-37.87555015, 175.4673181667, "10"],
    [-37.8754323167, 175.4670474333, "8"],
    [-37.8752163333, 175.4671320667, "6"],
    [-37.8750437, 175.4671685, "4"],
    [-37.87486615, 175.4671727833, "2"],
    [-37.8836992833, 175.4725036, "23A"],
    [-37.8827955833, 175.47167325, "34"],
    [-37.88383525, 175.47247865, "21B"],
    [-37.8836711, 175.4721970333, "23"],
    [-37.88384845, 175.4721985333, "21A"],
    [-37.8832467333, 175.4721379, "31"],
    [-37.8852774167, 175.4718275333, "10"],
    [-37.8841115833, 175.4722314667, "17"],
    [-37.882555, 175.4720817333, "41"],
    [-37.8814569667, 175.4715107167, "46"],
    [-37.8826952667, 175.4720762667, "39"],
    [-37.8834193, 175.4725388, "27"],
    [-37.8834190667, 175.47216485, "29"],
    [-37.8835037667, 175.4725855, "25"],
    [-37.88308205, 175.4721211333, "33"],
    [-37.88081245, 175.47212895, "67A"],
    [-37.8808169167, 175.4719355833, "67"],
    [-37.8854703, 175.4715485833, "8A"],
    [-37.8854802667, 175.4723117333, "7"],
    [-37.8819775333, 175.4720601833, "45"],
    [-37.8820338, 175.4715768333, "38"],
    [-37.88505425, 175.4725552, "11A"],
    [-37.8816020167, 175.4715219833, "44"],
    [-37.8818502167, 175.4715604167, "40"],
    [-37.8817451, 175.4715327167, "42"],
    [-37.8817693333, 175.4720335, "47"],
    [-37.8826490167, 175.4716679, "36"],
    [-37.882937, 175.4720998667, "35"],
    [-37.8828116667, 175.4720924167, "37"],
    [-37.8851022, 175.4718166333, "12"],
    [-37.8817387667, 175.47236985, "49"],
    [-37.8812409667, 175.4710926333, "50"],
    [-37.8815675333, 175.4723074, "51A"],
    [-37.8816046833, 175.4720110833, "51"],
    [-37.8812419, 175.4709490833, "52"],
    [-37.8811635333, 175.4709188667, "54"],
    [-37.8814256833, 175.47197785, "55"],
    [-37.8811236333, 175.4712705167, "56"],
    [-37.8811993, 175.4719696333, "57"],
    [-37.88108405, 175.4714977167, "58"],
    [-37.8809842667, 175.4719474833, "59"],
    [-37.8809340167, 175.4725577, "61"],
    [-37.8808571667, 175.47147535, "62A"],
    [-37.8808698167, 175.4712961833, "62B"],
    [-37.88095885, 175.4727073167, "63"],
    [-37.8805953667, 175.471471, "64"],
    [-37.8808394, 175.4727179833, "65"],
    [-37.8856441667, 175.4723274, "5"],
    [-37.8856559833, 175.47193445, "6A"],
    [-37.8858045667, 175.4719521, "6"],
    [-37.8854608833, 175.4718410833, "8"],
    [-37.8852512333, 175.4722922833, "9"],
    [-37.8812897833, 175.47150895, "48"],
    [-37.8846497167, 175.4717921833, "18"],
    [-37.8850509167, 175.4722740667, "11"],
    [-37.8849657833, 175.4718045667, "14"],
    [-37.8863145, 175.47202075, "4"],
    [-37.8863136833, 175.4724193333, "3"],
    [-37.8848130833, 175.4725039833, "13A"],
    [-37.8848266333, 175.47225735, "13"],
    [-37.8839960167, 175.4722167, "19"],
    [-37.8848076833, 175.47180565, "16"],
    [-37.8847455833, 175.4722526833, "15"],
    [-37.8850477, 175.4726911167, "11B"],
    [-37.8941738167, 175.4707689, "84D"],
    [-37.8940840667, 175.4708939333, "84C"],
    [-37.8941785, 175.4709219, "84B"],
    [-37.8941324333, 175.47094385, "84A"],
    [-37.8935136, 175.4612187667, "11"],
    [-37.8939243167, 175.4608987333, "10"],
    [-37.8933340667, 175.4717043167, "100"],
    [-37.8936952, 175.4650319333, "42"],
    [-37.8932683, 175.4655177833, "41"],
    [-37.8936863667, 175.46521985, "44"],
    [-37.8936738833, 175.4655087667, "46"],
    [-37.8938362667, 175.4624257833, "22"],
    [-37.8937817, 175.4635414833, "30"],
    [-37.8938118, 175.4643993167, "40A"],
    [-37.8937340833, 175.4643627, "40"],
    [-37.8935297167, 175.4682022667, "68"],
    [-37.8932907833, 175.4653249667, "39"],
    [-37.8935900167, 175.4670001333, "54"],
    [-37.89330695, 175.4650841, "37"],
    [-37.8927154833, 175.4709052, "65B"],
    [-37.8927901, 175.4708936667, "65A"],
    [-37.8927898667, 175.4705552833, "63A"],
    [-37.8930308333, 175.461289, "13A"],
    [-37.8932869167, 175.46127415, "13"],
    [-37.89365705, 175.4657872833, "48"],
    [-37.8939401, 175.46390025, "32A"],
    [-37.8936144167, 175.4665801333, "52"],
    [-37.89383355, 175.4665993833, "52A"],
    [-37.8932530667, 175.47349375, "120"],
    [-37.8934369833, 175.4623886667, "19"],
    [-37.8942868333, 175.4610974, "12"],
    [-37.89390075, 175.46130575, "14"],
    [-37.8934877, 175.4615844, "15"],
    [-37.89438475, 175.4619340667, "16A"],
    [-37.89440795, 175.46167145, "16"],
    [-37.89348165, 175.4617730167, "17"],
    [-37.8938709333, 175.46165795, "18"],
    [-37.8933871167, 175.4633617, "27"],
    [-37.8934256333, 175.46270255, "21"],
    [-37.8934101, 175.4630095833, "23"],
    [-37.8938231667, 175.4626998167, "24"],
    [-37.8938185, 175.4629043667, "26"],
    [-37.8933327, 175.4599851667, "1"],
    [-37.8938655, 175.4619277667, "20"],
    [-37.8933737667, 175.4636349, "29"],
    [-37.8933599167, 175.4638405667, "31"],
    [-37.8937605833, 175.4638030667, "32"],
    [-37.8933501333, 175.4640728, "33"],
    [-37.89409735, 175.4639711333, "34"],
    [-37.89333535, 175.46433465, "35"],
    [-37.8937382833, 175.4641705, "36"],
    [-37.8938094833, 175.46310885, "28"],
    [-37.8937422833, 175.4642690333, "38"],
    [-37.8932706, 175.46028355, "3A"],
    [-37.8934162167, 175.4602382333, "3"],
    [-37.8935366333, 175.4605623667, "5"],
    [-37.8935312, 175.4607884833, "7"],
    [-37.89396845, 175.4602069333, "8"],
    [-37.8935128167, 175.4609781167, "9"],
    [-37.8932981167, 175.47301005, "108"],
    [-37.8932691667, 175.4732267667, "110"],
    [-37.8936267667, 175.47335325, "112A"],
    [-37.8938256167, 175.4733656, "112B"],
    [-37.8936103333, 175.4733669833, "112"],
    [-37.8937215333, 175.4735637667, "114"],
    [-37.89365715, 175.4738653167, "116"],
    [-37.8935390333, 175.4735507333, "118"],
    [-37.8934577667, 175.4693120833, "70"],
    [-37.8929881833, 175.4703184667, "59"],
    [-37.8929812667, 175.4706668833, "63"],
    [-37.8929615667, 175.47086305, "65"],
    [-37.8929371167, 175.4712434167, "69"],
    [-37.8929520667, 175.47105645, "67"],
    [-37.89367425, 175.46743525, "58A"],
    [-37.8937744667, 175.4673928, "58B"],
    [-37.8935667833, 175.46736855, "58"],
    [-37.89367375, 175.4675524167, "60A"],
    [-37.8937666333, 175.4676028333, "60B"],
    [-37.8935516833, 175.46756615, "60"],
    [-37.8935477333, 175.4677751333, "62"],
    [-37.8935387833, 175.4679283333, "64"],
    [-37.8935372333, 175.4680373167, "66"],
    [-37.8934518, 175.4694155833, "72"],
    [-37.8934506167, 175.4695295167, "74"],
    [-37.8934785833, 175.4697087167, "76"],
    [-37.8934174, 175.4705130167, "82"],
    [-37.8934133, 175.4707143833, "84"],
    [-37.89339765, 175.4708925667, "86"],
    [-37.8937520167, 175.4710181667, "88"],
    [-37.8933705, 175.47113315, "90"],
    [-37.8934223167, 175.4702347833, "78"],
    [-37.8933635, 175.4712602167, "92"],
    [-37.8933623333, 175.4713753167, "94"],
    [-37.89334455, 175.4715971333, "98"],
    [-37.8933610333, 175.4714828333, "96"],
    [-37.89307625, 175.4690541333, "2/53"],
    [-37.8930733667, 175.46912325, "3/53"],
    [-37.8930706333, 175.4691856, "4/53"],
    [-37.89306775, 175.4692547333, "5/53"],
    [-37.8930755833, 175.4687906833, "47"],
    [-37.8930806333, 175.4689783167, "1/53"],
    [-37.8937726, 175.46406345, "36A"],
    [-37.8940399167, 175.4626443667, "24A"],
    [-37.89306665, 175.4694318, "57A"],
    [-37.8929485833, 175.4694292, "57B"],
    [-37.893691, 175.4662858833, "50"],
    [-37.892929, 175.4695717833, "57C"],
    [-37.8818993667, 175.48831235, "10"],
    [-37.8819047, 175.4884493667, "9"],
    [-37.8818925167, 175.4887367833, "8"],
    [-37.8817909833, 175.4886448, "7"],
    [-37.88156225, 175.4884151333, "5"],
    [-37.8816410667, 175.4884968833, "6"],
    [-37.8817882667, 175.4881434333, "12"],
    [-37.8820450667, 175.4880255, "14"],
    [-37.8820399833, 175.4881601833, "13"],
    [-37.8817013833, 175.48815045, "11"],
    [-37.8814522333, 175.4882864667, "4"],
    [-37.88135345, 175.4881963833, "3"],
    [-37.89047955, 175.3660982833, "48"],
    [-37.8939863833, 175.3676102167, "84"],
    [-37.8908236333, 175.3668215167, "57"],
    [-37.8927242667, 175.3669994667, "72"],
    [-37.89707325, 175.3696241833, "111"],
    [-37.8951834, 175.3681841167, "96"],
    [-37.8891679333, 175.3661342, "25"],
    [-37.8990757167, 175.4813831667, "12"],
    [-37.8990598, 175.4826089667, "27"],
    [-37.8996862, 175.48382855, "34"],
    [-37.8998746167, 175.4868621833, "99"],
    [-37.9001283, 175.4864203833, "97"],
    [-37.90028175, 175.4875789833, "111"],
    [-37.9004845333, 175.4875032167, "113"],
    [-37.9005451667, 175.4877341667, "115"],
    [-37.8987095167, 175.48150085, "15"],
    [-37.8987892, 175.4817609, "17"],
    [-37.8991357, 175.48159105, "14"],
    [-37.89891375, 175.4808869667, "10"],
    [-37.8985199667, 175.4808965667, "11"],
    [-37.8985627833, 175.4811206333, "13"],
    [-37.8992842667, 175.4821156167, "18-20"],
    [-37.8988612333, 175.48195285, "19"],
    [-37.8993973833, 175.4824338, "22"],
    [-37.8989453833, 175.48216625, "23"],
    [-37.8994684833, 175.4826182833, "24"],
    [-37.8989983, 175.48239085, "25"],
    [-37.8995365667, 175.4828116833, "26"],
    [-37.8982566833, 175.4800233833, "1"],
    [-37.8995900333, 175.48303525, "28"],
    [-37.8991642833, 175.4829475167, "29"],
    [-37.8996510167, 175.4832267667, "30"],
    [-37.899284, 175.4832051333, "31"],
    [-37.8983305, 175.4802590667, "3"],
    [-37.8985982333, 175.4800186167, "2"],
    [-37.8995170333, 175.4845078667, "49"],
    [-37.8987404667, 175.4802334667, "4"],
    [-37.89943635, 175.4849588167, "77"],
    [-37.8983839667, 175.4804605, "5"],
    [-37.8987906833, 175.4804517, "6"],
    [-37.89971175, 175.4849414, "81"],
    [-37.8984425333, 175.4806757, "7"],
    [-37.8988546833, 175.4806650333, "8"],
    [-37.8982073167, 175.4808983833, "9"],
    [-37.9002304333, 175.4868039667, "101"],
    [-37.8997452667, 175.48737465, "103"],
    [-37.9001569667, 175.4873521333, "105A"],
    [-37.90035675, 175.4871693, "105"],
    [-37.89977645, 175.4853644833, "85"],
    [-37.8998911833, 175.4857328667, "93"],
    [-37.89830875, 175.4810073667, "11A"],
    [-37.8991998, 175.4818039833, "16"],
    [-37.9000736, 175.48765565, "109"],
    [-37.8998738833, 175.4877091, "107"],
    [-37.8584179167, 175.3917306, "28C"],
    [-37.8604560167, 175.3943771, "27"],
    [-37.8594062, 175.39328765, "22"],
    [-37.8602464667, 175.3945281333, "25"],
    [-37.8580738, 175.3913907167, "28B"],
    [-37.8588583833, 175.3948410167, "10"],
    [-37.8597253167, 175.3943257167, "20"],
    [-37.8594598667, 175.3949546667, "17"],
    [-37.85742675, 175.3934756833, "28D"],
    [-37.85779025, 175.3909575667, "28A"],
    [-37.8602461333, 175.39392145, "24"],
    [-37.8615513167, 175.3930931833, "30"],
    [-37.8615702833, 175.3936576333, "41"],
    [-37.8648762167, 175.391556, "85"],
    [-37.8669371833, 175.38969465, "116"],
    [-37.8656294833, 175.39053055, "96"],
    [-37.8627939333, 175.3928152833, "57"],
    [-37.8642163, 175.3938465167, "63B"],
    [-37.8633075167, 175.3925197167, "63A"],
    [-37.8752946833, 175.47600165, "16"],
    [-37.8752789, 175.4745710667, "26"],
    [-37.8752698667, 175.4741175667, "30"],
    [-37.8752788833, 175.4747855667, "24"],
    [-37.8753729833, 175.4773013667, "4"],
    [-37.8752503333, 175.47339515, "36"],
    [-37.8753239, 175.4768918333, "8"],
    [-37.8752590667, 175.4736461333, "34"],
    [-37.8756213167, 175.4747827833, "25"],
    [-37.8752682333, 175.4738759333, "32"],
    [-37.8752943, 175.47621685, "14"],
    [-37.8755946667, 175.4783229167, "2"],
    [-37.8757436, 175.47737735, "7"],
    [-37.8758519, 175.4778569167, "3"],
    [-37.8756174833, 175.4745228, "27"],
    [-37.8756574833, 175.4762356, "15"],
    [-37.8756050833, 175.4734895, "33"],
    [-37.875302, 175.4766701833, "10"],
    [-37.8756027333, 175.4736947333, "31"],
    [-37.8752780667, 175.4758057, "18"],
    [-37.8757905833, 175.477583, "5"],
    [-37.8756395833, 175.4758414333, "19"],
    [-37.8756402, 175.4760084333, "17"],
    [-37.8752715833, 175.4751979, "20"],
    [-37.8757130167, 175.4771411333, "9"],
    [-37.8752756833, 175.47501635, "22"],
    [-37.87527695, 175.47433525, "28"],
    [-37.8756425833, 175.4752112667, "21"],
    [-37.8752937833, 175.4764377, "12"],
    [-37.87559675, 175.4732172, "35"],
    [-37.8753504333, 175.477108, "6"],
    [-37.8755737333, 175.4729657167, "37"],
    [-37.8756244333, 175.4743205667, "29"],
    [-37.8755172667, 175.4727099833, "39"],
    [-37.8756327333, 175.4750188, "23"],
    [-37.8754463333, 175.4724567833, "41"],
    [-37.8753804667, 175.4721916167, "43"],
    [-37.8753413, 175.4719123167, "45"],
    [-37.8751775167, 175.4728065, "40"],
    [-37.87523985, 175.4731198167, "38"],
    [-37.9129636333, 175.47354695, "15"],
    [-37.9129915667, 175.4741582833, "10"],
    [-37.9130924, 175.4741147667, "12"],
    [-37.91301345, 175.4738697833, "14"],
    [-37.9125089, 175.47363755, "3"],
    [-37.9126150667, 175.4743185833, "4"],
    [-37.9126618333, 175.4735482833, "5"],
    [-37.9125892, 175.47392305, "6"],
    [-37.9127883167, 175.47388245, "8"],
    [-37.9126731333, 175.473192, "7"],
    [-37.91275485, 175.47314795, "9"],
    [-37.9128106333, 175.4733799667, "11"],
    [-37.9123932, 175.4739944667, "2"],
    [-37.9123316833, 175.4737106167, "1"],
    [-37.9838611667, 175.5750239333, "209"],
    [-37.9690023333, 175.5700330333, "12"],
    [-37.9711171, 175.5702027833, "25"],
    [-37.9779899, 175.570433, "1/122"],
    [-37.97820695, 175.57005845, "2/122"],
    [-37.9800575, 175.5723918333, "153"],
    [-37.9811843, 175.5731835, "177"],
    [-37.9754233167, 175.57078555, "95"],
    [-37.8838929167, 175.4818853167, "12"],
    [-37.8837344667, 175.4818862, "14"],
    [-37.8835817667, 175.4818741, "16"],
    [-37.8834241, 175.4818550667, "18"],
    [-37.8832506167, 175.48183555, "20"],
    [-37.8830817667, 175.4818428833, "22"],
    [-37.8828965167, 175.48182015, "24"],
    [-37.8827122833, 175.4817928, "26"],
    [-37.8814133667, 175.4817274333, "44"],
    [-37.8813040833, 175.48171155, "46"],
    [-37.8810746667, 175.4817141833, "48"],
    [-37.8809023, 175.4816841, "50"],
    [-37.8807272167, 175.4816891167, "52"],
    [-37.8805686833, 175.4816589167, "54"],
    [-37.8803979167, 175.4816530833, "56"],
    [-37.8801843833, 175.48158535, "58"],
    [-37.8825403667, 175.4813836167, "32A"],
    [-37.88253505, 175.4817773, "32"],
    [-37.8825069167, 175.48115065, "34"],
    [-37.88240895, 175.4812873333, "36"],
    [-37.8823411, 175.4817443167, "38"],
    [-37.8822324, 175.4817659167, "40"],
    [-37.8852853, 175.4825293667, "1"],
    [-37.8852325667, 175.4820864167, "2"],
    [-37.8856616, 175.4830290667, "3"],
    [-37.8851546, 175.4819058667, "4"],
    [-37.8853310833, 175.4831131333, "5"],
    [-37.8851287833, 175.4816127333, "6"],
    [-37.8827869667, 175.4815392833, "26B"],
    [-37.88484925, 175.4820581167, "8"],
    [-37.9024855, 175.4814230667, "6"],
    [-37.9027508667, 175.48132635, "2"],
    [-37.90267385, 175.4810493833, "3"],
    [-37.902509, 175.4810477333, "4"],
    [-37.90239855, 175.4812007, "5"],
    [-37.8861399167, 175.4659005167, "2A"],
    [-37.8858972, 175.4701092167, "36"],
    [-37.8867484667, 175.4678494333, "19"],
    [-37.8861574833, 175.46575525, "2"],
    [-37.8864493167, 175.4662703167, "3"],
    [-37.88622685, 175.47015215, "39"],
    [-37.88624375, 175.4699778833, "37"],
    [-37.8863943167, 175.4703065667, "39A"],
    [-37.8858773667, 175.4704395333, "38"],
    [-37.8866652833, 175.4663845667, "3A"],
    [-37.8862623667, 175.4706270167, "41"],
    [-37.8856218833, 175.4704532333, "40"],
    [-37.8854065833, 175.4706356333, "42B"],
    [-37.88625425, 175.4707564167, "43"],
    [-37.88541165, 175.4704709667, "42A"],
    [-37.8861368333, 175.47271145, "55"],
    [-37.886122, 175.4661553833, "4"],
    [-37.8863355167, 175.4685020667, "27"],
    [-37.8865969667, 175.4687519167, "29A"],
    [-37.8865831, 175.4689422667, "31A"],
    [-37.8860333167, 175.46789315, "20"],
    [-37.8858932167, 175.4702396667, "36A"],
    [-37.88643745, 175.4660770167, "1"],
    [-37.8857492, 175.46868685, "30A"],
    [-37.8855154167, 175.4686515333, "30B"],
    [-37.8856861, 175.46828205, "24A"],
    [-37.8860060667, 175.4682543333, "24"],
    [-37.8863518833, 175.4681365167, "23"],
    [-37.8860244, 175.4680726833, "22"],
    [-37.8860988667, 175.4665564833, "10"],
    [-37.8863865333, 175.4673575, "11"],
    [-37.8863826833, 175.4675404, "13"],
    [-37.8863788667, 175.4677124167, "15"],
    [-37.8860585833, 175.4674608333, "14"],
    [-37.8856044667, 175.46749745, "16A"],
    [-37.8857502, 175.46754885, "16"],
    [-37.8864570833, 175.4677168333, "17"],
    [-37.8860457333, 175.4676692, "18"],
    [-37.8867451667, 175.4680089167, "19A"],
    [-37.8858168333, 175.4717908, "58"],
    [-37.8866057333, 175.4666266833, "5A"],
    [-37.8864473333, 175.4665519333, "5"],
    [-37.88573305, 175.4662191833, "6"],
    [-37.8861234333, 175.4729670667, "57"],
    [-37.8861040833, 175.4732588, "59"],
    [-37.8857812833, 175.4727290333, "62"],
    [-37.8860733167, 175.47367975, "63"],
    [-37.8853214167, 175.47302445, "64A"],
    [-37.8857647, 175.4729568833, "64"],
    [-37.8860630667, 175.4741376333, "65"],
    [-37.8855514167, 175.4731432833, "66A"],
    [-37.8857605333, 175.4732639667, "66"],
    [-37.88604615, 175.4744234333, "67"],
    [-37.8857253333, 175.4734757667, "68"],
    [-37.8860271667, 175.4749003, "71"],
    [-37.8864273833, 175.4668194167, "7"],
    [-37.8861134167, 175.4663483833, "8"],
    [-37.88530955, 175.4734951667, "72A"],
    [-37.8853649167, 175.4735031333, "72"],
    [-37.8857145667, 175.47370235, "74"],
    [-37.88570935, 175.4738793833, "76"],
    [-37.8856962833, 175.4740871833, "78"],
    [-37.8855425, 175.4740492667, "80"],
    [-37.8855359667, 175.47421665, "82"],
    [-37.8856920333, 175.4742632667, "84"],
    [-37.88567285, 175.4743871833, "86"],
    [-37.8856348, 175.47498665, "88"],
    [-37.8864008667, 175.4671270833, "9"],
    [-37.8859601833, 175.47522375, "73"],
    [-37.8859930167, 175.4754003167, "75"],
    [-37.88563045, 175.4752063667, "90"],
    [-37.8856196667, 175.4754834167, "94"],
    [-37.8855985333, 175.4757720333, "98"],
    [-37.8852094333, 175.4756059333, "96"],
    [-37.8856225333, 175.4706336667, "44"],
    [-37.8863443167, 175.4711711167, "45A"],
    [-37.8862241333, 175.47112885, "45"],
    [-37.8858591, 175.4707636333, "46"],
    [-37.8862151, 175.4713376833, "47"],
    [-37.88584785, 175.4710055, "48"],
    [-37.8863784667, 175.4716221167, "49A"],
    [-37.88619305, 175.4716161667, "49"],
    [-37.8854010167, 175.4710779333, "50A"],
    [-37.8855194, 175.4710888, "50"],
    [-37.8861586167, 175.4718484, "51"],
    [-37.8855134333, 175.4712143833, "52"],
    [-37.8858417833, 175.4713232833, "54"],
    [-37.8858254, 175.4715816333, "56"],
    [-37.8859913, 175.4685190667, "28"],
    [-37.8863223167, 175.4686848833, "29"],
    [-37.8859773333, 175.46879095, "30"],
    [-37.8863225167, 175.4688814167, "31"],
    [-37.8859628333, 175.4690224667, "32"],
    [-37.8863278333, 175.4690195667, "33"],
    [-37.8860351333, 175.4746824, "69"],
    [-37.88563915, 175.4684005167, "26"],
    [-37.8863489, 175.4683084, "25"],
    [-37.8866069, 175.4673016, "11A"],
    [-37.8868120167, 175.4673208833, "11B"],
    [-37.88578115, 175.4680634667, "22A"],
    [-37.8863727, 175.4679364, "21"],
    [-37.8858363, 175.4659994, "4A"],
    [-37.88658795, 175.4674919167, "13A"],
    [-37.92234345, 175.4747052, "199"],
    [-37.92177305, 175.4769218333, "2"],
    [-37.9221347833, 175.47694995, "1"],
    [-37.9222941667, 175.47512075, "165"],
    [-37.9219244667, 175.4755311667, "126"],
    [-37.92194885, 175.4751084333, "164"],
    [-37.92227225, 175.4756573333, "109"],
    [-37.9226473833, 175.47590455, "105"],
    [-37.9217738833, 175.4766539667, "38"],
    [-37.9226126333, 175.4765605333, "45"],
    [-37.9221432333, 175.4762786, "51"],
    [-37.92185925, 175.4759778667, "80"],
    [-37.9219880167, 175.4744712833, "230"],
    [-37.9213271, 175.4744695667, "200"],
    [-37.9210363333, 175.4743909167, "210"],
    [-37.9206876333, 175.4744863, "220"],
    [-37.9212772667, 175.4748825167, "184"],
    [-37.9213329, 175.4754072167, "194"],
    [-37.92179965, 175.4763127667, "50"],
    [-37.9226488667, 175.4760626667, "101"],
    [-37.9224377167, 175.4742912, "231"],
    [-37.9222663833, 175.4741209667, "253"],
    [-37.9220891, 175.4742094833, "250"],
    [-37.8763709833, 175.4737251167, "6"],
    [-37.8762928, 175.4740830833, "7"],
    [-37.8757872, 175.47372185, "2"],
    [-37.8759274833, 175.4737143667, "4"],
    [-37.8761889833, 175.4744309833, "5B"],
    [-37.8760917667, 175.4744256833, "5A"],
    [-37.8760035, 175.47408515, "3"],
    [-37.8758006, 175.4741481167, "1"],
    [-37.8945807833, 175.4731283, "92"],
    [-37.8952838, 175.4659743667, "9"],
    [-37.8945913667, 175.47286075, "88"],
    [-37.8948307167, 175.4678840833, "26"],
    [-37.8946495333, 175.4715883833, "68"],
    [-37.8955784167, 175.4666195833, "17"],
    [-37.8950308833, 175.4707890333, "55"],
    [-37.8950268333, 175.4708643, "57"],
    [-37.8950210333, 175.4709645333, "59"],
    [-37.8950726167, 175.4692980667, "35"],
    [-37.8948167167, 175.4681206667, "28"],
    [-37.89480715, 175.4683576167, "30"],
    [-37.89448235, 175.47392275, "100"],
    [-37.8949025833, 175.4736886667, "101"],
    [-37.8944604833, 175.4740989333, "102"],
    [-37.8940345667, 175.4741795333, "104"],
    [-37.8948037, 175.4748156667, "105"],
    [-37.8944383833, 175.4744140333, "106"],
    [-37.8949698833, 175.4659329667, "10"],
    [-37.8949612167, 175.4663892333, "12"],
    [-37.8949153, 175.46660965, "14"],
    [-37.8948991667, 175.46678365, "16"],
    [-37.8947661, 175.46694865, "18A"],
    [-37.8944432333, 175.4669301, "18B"],
    [-37.8948852, 175.4669605667, "18"],
    [-37.8948780167, 175.46712785, "20"],
    [-37.8944023, 175.4672810833, "22B"],
    [-37.8947610167, 175.46729965, "22A"],
    [-37.8948679667, 175.46733215, "22"],
    [-37.8948783833, 175.46748345, "1/24-7/24"],
    [-37.8947230167, 175.4702766667, "42"],
    [-37.8946909667, 175.4707959333, "54"],
    [-37.8946726833, 175.4711023333, "60"],
    [-37.8946703833, 175.4712066833, "62"],
    [-37.8946656, 175.4712626667, "64"],
    [-37.8949888833, 175.4656431, "6"],
    [-37.89493175, 175.4729810833, "93"],
    [-37.8945739333, 175.47341895, "94"],
    [-37.8949277, 175.4731673, "95"],
    [-37.89438165, 175.4736724333, "96A"],
    [-37.8945503667, 175.4736765833, "96"],
    [-37.8949105333, 175.47340155, "97A"],
    [-37.8942335833, 175.4737639667, "98"],
    [-37.8946295667, 175.4718361, "72"],
    [-37.89462675, 175.4719766167, "74"],
    [-37.8949939167, 175.4719069333, "77"],
    [-37.8946185167, 175.4722803667, "82"],
    [-37.8949549, 175.4725255167, "87"],
    [-37.8949826333, 175.4657729, "8"],
    [-37.8952739667, 175.4662657333, "11"],
    [-37.8954714167, 175.4664023833, "13A"],
    [-37.8955781667, 175.46640275, "13B"],
    [-37.8952808167, 175.4663722, "13"],
    [-37.89527365, 175.4665192833, "15"],
    [-37.8956551167, 175.4661953667, "11B"],
    [-37.8953330833, 175.4650771, "1"],
    [-37.8950785667, 175.4691175167, "33"],
    [-37.8950110333, 175.4654238667, "2"],
    [-37.8950599167, 175.4704818, "45"],
    [-37.8950526167, 175.4705562667, "47"],
    [-37.8950517333, 175.4706304167, "49"],
    [-37.8950748667, 175.4694276667, "41"],
    [-37.8953314667, 175.4653118333, "3"],
    [-37.8950057833, 175.46551395, "4"],
    [-37.8950353, 175.4734756833, "97"],
    [-37.8950013, 175.4717792, "75"],
    [-37.8950426833, 175.4706778167, "51"],
    [-37.89503905, 175.4707278833, "53"],
    [-37.8950147333, 175.4710415167, "61"],
    [-37.8950166833, 175.4711306, "63"],
    [-37.8950141, 175.4712134833, "65"],
    [-37.8950130833, 175.4712694167, "67"],
    [-37.8950105, 175.4713271, "69"],
    [-37.8950101667, 175.4713877667, "71"],
    [-37.8950061333, 175.4714993167, "73"],
    [-37.8953044, 175.4655703333, "5"],
    [-37.8953043, 175.4657896167, "7"],
    [-37.8948314667, 175.46896985, "36"],
    [-37.8944233667, 175.4670945167, "20B"],
    [-37.89476705, 175.4671119, "20A"],
    [-37.8948155167, 175.46873695, "34"],
    [-37.8785435, 175.4391193, "108"],
    [-37.85482825, 175.43943885, "372"],
    [-37.8843674667, 175.44077705, "44"],
    [-37.8514708333, 175.44301855, "414"],
    [-37.8786210833, 175.4386722333, "107"],
    [-37.8536346167, 175.43854, "2/377"],
    [-37.88482555, 175.43861845, "37"],
    [-37.85393405, 175.4384665833, "1/377"],
    [-37.87792065, 175.43870995, "115"],
    [-37.8616766, 175.43942835, "296"],
    [-37.8758269167, 175.439114, "136"],
    [-37.8611102167, 175.4393358, "302"],
    [-37.8630311167, 175.4365396167, "279"],
    [-37.8653560833, 175.4373495833, "253"],
    [-37.8757949833, 175.4386379333, "137"],
    [-37.8786179833, 175.4342996333, "2/105"],
    [-37.8874004, 175.4391212667, "1/10-2/10"],
    [-37.8447363167, 175.43930545, "482"],
    [-37.88403545, 175.4386151333, "45"],
    [-37.8717442667, 175.4349390667, "183"],
    [-37.8767875333, 175.4386578667, "127"],
    [-37.8797060833, 175.4386293833, "93"],
    [-37.8866638167, 175.4390628, "18"],
    [-37.8791973, 175.4386315, "97"],
    [-37.88585575, 175.4362985167, "19"],
    [-37.8790987667, 175.4391399833, "100"],
    [-37.8771662, 175.43926595, "124"],
    [-37.8838361, 175.4391195833, "48"],
    [-37.8857025667, 175.4423457333, "30"],
    [-37.8854774667, 175.4423092, "3/30"],
    [-37.8449495333, 175.43932215, "480"],
    [-37.8540070333, 175.4394581833, "376"],
    [-37.8831838833, 175.4385145, "55"],
    [-37.8588749833, 175.4393561333, "326"],
    [-37.86279375, 175.4385341667, "281"],
    [-37.8445601333, 175.43930445, "484"],
    [-37.84437095, 175.43930065, "486"],
    [-37.8788133833, 175.4351573667, "1/105"],
    [-37.8800643333, 175.4356186, "1/93"],
    [-37.87918835, 175.4355875333, "2/93"],
    [-37.88086735, 175.4358693833, "83"],
    [-37.88697085, 175.4385406333, "15"],
    [-37.8505857167, 175.4386953333, "425"],
    [-37.8857656333, 175.4386266333, "21"],
    [-37.8517299333, 175.43952155, "404"],
    [-37.8859354667, 175.4391316833, "20"],
    [-37.8643110167, 175.43852915, "269"],
    [-37.8638944167, 175.4352222, "271"],
    [-37.8629044167, 175.4394276667, "280"],
    [-37.8636698333, 175.4384519167, "273"],
    [-37.87065885, 175.4387204333, "197"],
    [-37.870552, 175.4392104333, "198"],
    [-37.86847865, 175.4362560333, "215"],
    [-37.8682894833, 175.4387331667, "221"],
    [-37.8723437333, 175.4386659167, "179"],
    [-37.8713473833, 175.4386830333, "191"],
    [-37.8803684, 175.4391223, "84"],
    [-37.8801818167, 175.4386532333, "89"],
    [-37.8795138833, 175.4391232667, "98"],
    [-37.88233015, 175.4385688167, "67"],
    [-37.8822730833, 175.439127, "68"],
    [-37.8815140333, 175.4385229167, "75"],
    [-37.88161725, 175.43921275, "76"],
    [-37.88298115, 175.4391210167, "60"],
    [-37.88356985, 175.44183935, "54"],
    [-37.88688885, 175.4390723333, "16"],
    [-37.8854630667, 175.44062525, "1/30"],
    [-37.8857315833, 175.4406345667, "2/30"],
    [-37.8850814333, 175.4391024667, "32"],
    [-37.85615335, 175.4394051333, "358"],
    [-37.8484322833, 175.4386304333, "451"],
    [-37.849595, 175.4395278833, "438"],
    [-37.8685579333, 175.43929385, "222"],
    [-37.8673376667, 175.4387301333, "231"],
    [-37.8672263, 175.4391822833, "234"],
    [-37.8658104, 175.4384541833, "249"],
    [-37.8650818333, 175.4384285833, "257"],
    [-37.8572850833, 175.4388435667, "345"],
    [-37.8695889833, 175.4385987333, "207"],
    [-37.8444514833, 175.4388799167, "483"],
    [-37.8828889333, 175.4356993, "51"],
    [-37.8832340833, 175.4358504, "1/51"],
    [-37.8573635, 175.4392901833, "342"],
    [-37.86163445, 175.43881845, "295"],
    [-37.8624819833, 175.438809, "287"],
    [-37.84347995, 175.4385449833, "495"],
    [-37.85704685, 175.4422632333, "346"],
    [-37.8881785167, 175.4536787833, "11"],
    [-37.8876931833, 175.4532197833, "5"],
    [-37.8877175833, 175.4536870667, "7"],
    [-37.8883681, 175.4535562333, "2/10"],
    [-37.88862675, 175.4537201667, "4/10"],
    [-37.88857235, 175.4536184167, "3/10"],
    [-37.88834935, 175.45339255, "1/10"],
    [-37.8880737833, 175.4534382833, "9"],
    [-37.88862905, 175.4582377167, "8"],
    [-37.888388, 175.4577553167, "5A"],
    [-37.8890413167, 175.4584074, "10A"],
    [-37.8890455167, 175.45818135, "10"],
    [-37.8893714, 175.4579083667, "1"],
    [-37.8891550333, 175.4579009333, "2"],
    [-37.8889156, 175.45789245, "3"],
    [-37.8887209667, 175.4578687833, "4"],
    [-37.8885121, 175.45785425, "5"],
    [-37.8884355167, 175.4579579333, "6"],
    [-37.8884670667, 175.4581608667, "7"],
    [-37.88885115, 175.4581993167, "9"],
    [-37.88829695, 175.4581456, "7A"],
    [-37.89493095, 175.50293945, "2/207"],
    [-37.8939846833, 175.4919359167, "1/143"],
    [-37.9326599333, 175.5720857333, "946"],
    [-37.8940428667, 175.4929087, "2/143"],
    [-37.93985015, 175.5776648, "1006"],
    [-37.9234984333, 175.5621109333, "816"],
    [-37.9374057, 175.57533755, "1004"],
    [-37.92045495, 175.5594362667, "773"],
    [-37.9370037333, 175.5752245333, "1002"],
    [-37.9233134, 175.5619061667, "814"],
    [-37.9247701333, 175.5642938333, "838"],
    [-37.9091874667, 175.5318147333, "504"],
    [-37.90968075, 175.53436585, "525"],
    [-37.9100798667, 175.53351915, "518"],
    [-37.9137304333, 175.5349179, "560"],
    [-37.9131590333, 175.53488155, "558"],
    [-37.9072097667, 175.5257719, "458"],
    [-37.89594205, 175.4996267667, "178"],
    [-37.9372702, 175.57594035, "1013"],
    [-37.89638255, 175.5065894833, "246"],
    [-37.8968645833, 175.50876055, "259"],
    [-37.8980340833, 175.5096747833, "276"],
    [-37.8986749667, 175.5105449167, "280"],
    [-37.89924075, 175.5129982667, "295"],
    [-37.9015737, 175.515433, "324"],
    [-37.91571275, 175.5534373, "705"],
    [-37.9162442833, 175.5534827, "706"],
    [-37.9148016833, 175.54767885, "648"],
    [-37.9148501, 175.5499118333, "673"],
    [-37.9151485667, 175.5495203167, "660"],
    [-37.9197264, 175.5575957333, "748"],
    [-37.9212959167, 175.5604435167, "787"],
    [-37.9255722167, 175.5660694167, "852"],
    [-37.9026268333, 175.5172354667, "356"],
    [-37.8950368333, 175.5025268833, "1/207"],
    [-37.9122779833, 175.5393717167, "2/573"],
    [-37.9114679667, 175.5398593333, "3/573"],
    [-37.91540075, 175.5527015167, "699"],
    [-37.9012012167, 175.51619825, "335"],
    [-37.9168711667, 175.5553676, "719"],
    [-37.9175395667, 175.5561893167, "723"],
    [-37.9180392833, 175.5566833, "739"],
    [-37.9130946167, 175.5474586167, "637"],
    [-37.8940036333, 175.4831404833, "29"],
    [-37.8943207667, 175.4865820833, "69"],
    [-37.8943952833, 175.4886118, "71"],
    [-37.8951511833, 175.4905976667, "112"],
    [-37.90356905, 175.5202661333, "379"],
    [-37.9042539, 175.5213877833, "391"],
    [-37.9058724667, 175.5242790667, "427"],
    [-37.9355250333, 175.57499645, "987"],
    [-37.9134563333, 175.5426692667, "603"],
    [-37.9135913667, 175.54315755, "607"],
    [-37.91401355, 175.5428852833, "608"],
    [-37.9106131167, 175.5359661167, "539"],
    [-37.9111353167, 175.53571595, "542"],
    [-37.9113920167, 175.5360293167, "546"],
    [-37.9121793167, 175.5377621, "568"],
    [-37.9346634, 175.5743922333, "979"],
    [-37.9374423833, 175.5674758833, "972"],
    [-37.9156359, 175.55118655, "692"],
    [-37.9155415167, 175.5508029, "690"],
    [-37.90281625, 175.51905675, "373"],
    [-37.9027791333, 175.5175252833, "358"],
    [-37.8958690833, 175.5018481167, "190"],
    [-37.9789857333, 175.4405075667, "168"],
    [-37.9695422, 175.4324544167, "23"],
    [-37.9694634, 175.4313197333, "12"],
    [-37.9734056167, 175.4391843667, "105"],
    [-37.9748037833, 175.4419470833, "123"],
    [-37.9775236, 175.4415263333, "155"],
    [-37.9782757667, 175.44079755, "166"],
    [-37.9718126167, 175.4347789833, "54"],
    [-37.8974829, 175.4523839667, "11"],
    [-37.896949, 175.4538974333, "10"],
    [-37.8973599167, 175.4533428167, "3"],
    [-37.89717915, 175.4544804167, "4"],
    [-37.8973309833, 175.45308765, "5"],
    [-37.8972213833, 175.4542655167, "6"],
    [-37.8972975167, 175.452858, "7"],
    [-37.8971736167, 175.4540106333, "8"],
    [-37.8972301333, 175.4525011667, "9"],
    [-37.8962831, 175.4514132833, "40"],
    [-37.8962904167, 175.4509267333, "42"],
    [-37.8964889167, 175.4515006167, "44"],
    [-37.8966648, 175.4514576667, "46"],
    [-37.8963241333, 175.4516917333, "38"],
    [-37.8971486, 175.4537583167, "12"],
    [-37.8974914833, 175.4522686333, "13"],
    [-37.8968280167, 175.4517962167, "32"],
    [-37.8965602833, 175.4518541, "34"],
    [-37.8963553, 175.4518366333, "36"],
    [-37.8972173667, 175.4551419333, "2"],
    [-37.8970665667, 175.45323925, "14"],
    [-37.8971966, 175.4522688167, "15"],
    [-37.8968064, 175.4532278167, "16"],
    [-37.8967456833, 175.4531232333, "18"],
    [-37.8974595167, 175.4539856833, "1"],
    [-37.89702105, 175.4529966167, "20"],
    [-37.89697325, 175.4525840667, "22"],
    [-37.8966754833, 175.45262025, "24"],
    [-37.8965024, 175.4525581333, "26"],
    [-37.8967277167, 175.4524711167, "28"],
    [-37.8969411167, 175.4523854, "30"],
    [-37.8971252667, 175.4517190167, "17"],
    [-37.8973954333, 175.4516434667, "19"],
    [-37.89734885, 175.4512056667, "27"],
    [-37.8975603333, 175.4513639167, "23"],
    [-37.8975662667, 175.45155165, "21"],
    [-37.89758735, 175.45118755, "25"],
    [-37.8976514, 175.4505551833, "25A"],
    [-37.93618265, 175.4679452833, "99"],
    [-37.9364427, 175.47434405, "47"],
    [-37.93602995, 175.4635648833, "143"],
    [-37.9363754167, 175.4732709667, "55"],
    [-37.9364611, 175.47575415, "37"],
    [-37.9362570167, 175.4694700833, "89"],
    [-37.9356639667, 175.4542221333, "225"],
    [-37.9365317333, 175.4564987833, "201"],
    [-37.9357644333, 175.45652615, "1/201"],
    [-37.9356391667, 175.4555529667, "209"],
    [-37.9359229, 175.4614506167, "157"],
    [-37.9354519, 175.4510958, "245"],
    [-37.8043647667, 175.3646767, "9"],
    [-37.8033645333, 175.3644417333, "14"],
    [-37.8041373, 175.3641572833, "11"],
    [-37.9559902833, 175.4358548667, "1/3116"],
    [-37.9541933, 175.43567675, "3126"],
    [-37.9159823833, 175.4458315667, "2/3627"],
    [-37.91406535, 175.4497318167, "3668"],
    [-37.9555601667, 175.4360378833, "2/3116"],
    [-37.9139425833, 175.4497730667, "3666"],
    [-37.9160902, 175.4453786667, "1/3627"],
    [-37.9619189333, 175.4331309167, "3032"],
    [-37.9609963833, 175.4328218833, "3039"],
    [-37.9616219333, 175.4333006833, "3036"],
    [-37.9329983333, 175.4291615333, "3361"],
    [-37.9152040667, 175.4487561167, "3654"],
    [-37.9319928333, 175.4302175167, "3384"],
    [-37.91578065, 175.4478569, "3642"],
    [-37.9157454833, 175.4465326333, "3635"],
    [-37.9151056, 175.4479749833, "3643"],
    [-37.91545865, 175.4473662167, "3639"],
    [-37.9155843167, 175.4470310167, "3637"],
    [-37.9027715667, 175.45210165, "3794"],
    [-37.9032760833, 175.4549883, "3784"],
    [-37.9748930833, 175.4242103667, "2855"],
    [-37.9773033833, 175.42065365, "2829"],
    [-37.9444458667, 175.4188207667, "3217"],
    [-37.9012992833, 175.4500824333, "3807"],
    [-37.9127339333, 175.4503371, "3682"],
    [-37.90071495, 175.4536467833, "3829"],
    [-37.9048702167, 175.45171675, "2/3774"],
    [-37.9001265, 175.4627736833, "3910"],
    [-37.8984810667, 175.4580702, "2/3879"],
    [-37.8987156833, 175.45782225, "3/3879"],
    [-37.8996284833, 175.4598028333, "3886"],
    [-37.91662675, 175.4488524167, "3648"],
    [-37.9105417167, 175.4505777, "3714"],
    [-37.9047285333, 175.4517519, "1/3774"],
    [-37.98387015, 175.4128784667, "2/2724"],
    [-37.9836752333, 175.4125610667, "1/2724"],
    [-37.8997874, 175.4596524, "2/3886"],
    [-37.8999206167, 175.4595150667, "3/3886"],
    [-37.9052384833, 175.4516238333, "3/3774"],
    [-37.9009602667, 175.4546291667, "3846"],
    [-37.89997485, 175.4588545167, "3890"],
    [-37.9160101833, 175.4469321333, "3636"],
    [-37.9504464333, 175.43548145, "3164"],
    [-37.90139465, 175.4518174, "3808"],
    [-37.9003306333, 175.4547485333, "3831"],
    [-37.9150642, 175.4457459, "3631"],
    [-37.9700292833, 175.4302066, "2954"],
    [-37.9719347833, 175.4284579333, "2920"],
    [-37.9684611833, 175.4302354667, "2959"],
    [-37.9638249667, 175.4310026333, "3011"],
    [-37.9635499667, 175.4311723667, "3013"],
    [-37.9621262833, 175.4321201167, "3025"],
    [-37.9599553667, 175.4336584667, "3059"],
    [-37.9593913167, 175.4346581667, "3072"],
    [-37.9671775, 175.4315904833, "2978"],
    [-37.9654828167, 175.4323972833, "2996"],
    [-37.9304655333, 175.4298457167, "3403"],
    [-37.9397400667, 175.4320840667, "3292"],
    [-37.9397871333, 175.4311546, "3299"],
    [-37.93902, 175.4299714, "3301"],
    [-37.93884655, 175.4297564667, "3311"],
    [-37.9378664, 175.42977575, "3320"],
    [-37.9375432, 175.42891805, "3321"],
    [-37.9370408, 175.4289005833, "3331"],
    [-37.9364621167, 175.4289989833, "3337"],
    [-37.9358432667, 175.4290959667, "3339"],
    [-37.95477045, 175.4310178833, "3103"],
    [-37.9508932667, 175.4345944, "3163"],
    [-37.9502843833, 175.4345016333, "3169"],
    [-37.9476339333, 175.4348761333, "1/3200"],
    [-37.9459382167, 175.4300649167, "3215"],
    [-37.9294075333, 175.4304862, "3414"],
    [-37.9292768667, 175.4300710167, "3415"],
    [-37.9481910333, 175.43494365, "2/3200"],
    [-37.9276201333, 175.4302237167, "3433"],
    [-37.9263022167, 175.4323864333, "3456"],
    [-37.9577552167, 175.43514095, "3090"],
    [-37.9559199, 175.4356498167, "3110"],
    [-37.9556312, 175.4352157667, "3111"],
    [-37.9541667833, 175.4350528333, "3127"],
    [-37.924353, 175.43477375, "3488"],
    [-37.92140285, 175.4361990333, "3521"],
    [-37.9216205, 175.4367220333, "3522"],
    [-37.9199150167, 175.4372039667, "3537"],
    [-37.9191848333, 175.4377457167, "3553"],
    [-37.91800785, 175.4398907667, "3571"],
    [-37.9175554, 175.4427753167, "3596"],
    [-37.9167918667, 175.4434860333, "3611"],
    [-37.9154718333, 175.4484893833, "3650"],
    [-37.91254, 175.4489284667, "3693"],
    [-37.9096463167, 175.4500162167, "3715"],
    [-37.9095109, 175.45076725, "3718"],
    [-37.90312135, 175.4513793, "3791"],
    [-37.9025248833, 175.4514848833, "3797"],
    [-37.9027026, 175.4521118333, "3796"],
    [-37.9012756, 175.4523393333, "3809"],
    [-37.9000247833, 175.4550734667, "3847"],
    [-37.8996109167, 175.45623955, "3853"],
    [-37.8990466, 175.4570460167, "3861"],
    [-37.8982341833, 175.4584695333, "1/3879"],
    [-37.9037354333, 175.4513122, "3783"],
    [-37.9164707667, 175.4457016833, "3626"],
    [-37.9005404, 175.4554475167, "3838"],
    [-37.92350345, 175.4354481833, "3498"],
    [-37.92093435, 175.4372154, "3528"],
    [-37.9733884167, 175.4270654167, "2900"],
    [-37.9735011833, 175.426221, "2883"],
    [-37.9737880333, 175.4258421667, "2881"],
    [-37.9736479167, 175.4268099667, "2882"],
    [-37.8857180167, 175.4319128667, "1/1699"],
    [-37.8762356, 175.4124507167, "1498"],
    [-37.8760383833, 175.4119469333, "1494"],
    [-37.8881260667, 175.4328696, "2/1715"],
    [-37.8866376, 175.4333463667, "1/1715"],
    [-37.8884282, 175.4323350167, "1714"],
    [-37.8881726667, 175.44522875, "1835A"],
    [-37.8828618833, 175.42668015, "1643"],
    [-37.8875062667, 175.4321305667, "1713"],
    [-37.8891637, 175.4487508333, "1863"],
    [-37.8890458667, 175.4450934833, "1835"],
    [-37.8893503667, 175.4505826167, "1881"],
    [-37.8892833167, 175.4493800333, "1871"],
    [-37.88967995, 175.44903065, "1866"],
    [-37.8897650833, 175.45173775, "1894"],
    [-37.88972655, 175.4509517833, "1886"],
    [-37.8893972, 175.4519753167, "1895"],
    [-37.8893728833, 175.4515209833, "1891"],
    [-37.8893832667, 175.4517583333, "1893"],
    [-37.88975065, 175.4512729833, "1888"],
    [-37.8897555167, 175.4524542333, "1896"],
    [-37.8789651833, 175.4203288667, "1567"],
    [-37.8891086, 175.4330816833, "1716"],
    [-37.8749076, 175.4095179667, "1466"],
    [-37.8766546833, 175.41371075, "1510"],
    [-37.87762145, 175.4159128833, "1532"],
    [-37.8778396333, 175.41638935, "1534"],
    [-37.8784475833, 175.4175476, "1544"],
    [-37.8789228667, 175.4189449833, "1560"],
    [-37.8838774833, 175.4277925667, "1659"],
    [-37.8865829, 175.4310726667, "2/1699"],
    [-37.8869873, 175.4315526833, "1705"],
    [-37.8887145167, 175.4342103167, "1735"],
    [-37.8886082667, 175.4386434, "1786"],
    [-37.8888977833, 175.4397067833, "1788"],
    [-37.8889447833, 175.4399386, "1790"],
    [-37.8891184, 175.4403393, "1800"],
    [-37.8886052167, 175.44114285, "1811"],
    [-37.8890688833, 175.4442045667, "1829"],
    [-37.8894286667, 175.4442416167, "1830"],
    [-37.8894495167, 175.4447870333, "1832"],
    [-37.8894350833, 175.4526888167, "1903"],
    [-37.8898216167, 175.45284305, "1902"],
    [-37.8898244333, 175.45305355, "1906"],
    [-37.8895077667, 175.4534430333, "1907"],
    [-37.8895153, 175.4539427833, "1913"],
    [-37.8820731, 175.4246370667, "1/1628"],
    [-37.8829790333, 175.42515415, "2/1628"],
    [-37.8829182333, 175.42331235, "3/1628"],
    [-37.8846927167, 175.4287510833, "1669"],
    [-37.8857990667, 175.4293535333, "1682"],
    [-37.8859693167, 175.4303029167, "1/1689"],
    [-37.8861213333, 175.4304782, "1689"],
    [-37.9054227833, 175.4822613, "5"],
    [-37.90567515, 175.4819121167, "6"],
    [-37.9058446667, 175.4825176167, "10"],
    [-37.9057151167, 175.4832514, "11"],
    [-37.9059177, 175.4827449333, "12"],
    [-37.9062382833, 175.48278225, "14"],
    [-37.9059932667, 175.4830166333, "16"],
    [-37.90537935, 175.4821119, "3"],
    [-37.9055974, 175.4816880167, "4"],
    [-37.9055800167, 175.4827762667, "7"],
    [-37.9053443333, 175.4819134167, "1"],
    [-37.9056483167, 175.4830068333, "9"],
    [-37.9687541667, 175.5740302667, "1149"],
    [-37.9203192833, 175.5148173833, "4/319"],
    [-37.9566814833, 175.5624372, "1/978"],
    [-37.95688745, 175.5621776167, "2/978"],
    [-37.9580920167, 175.5647472333, "995"],
    [-37.92775475, 175.5378236667, "2/568"],
    [-37.92609085, 175.5347061333, "1/542"],
    [-37.9266186167, 175.5349056333, "2/542"],
    [-37.9269626167, 175.5353566167, "3/542"],
    [-37.9208396833, 175.5299344667, "422"],
    [-37.9207653333, 175.5242669667, "387"],
    [-37.9178039333, 175.49454775, "140"],
    [-37.9456599, 175.5548334167, "2/836"],
    [-37.9455115167, 175.5542481167, "1/836"],
    [-37.9194724833, 175.5061424833, "238"],
    [-37.9193864333, 175.5055969833, "232"],
    [-37.9175102167, 175.49730755, "159"],
    [-37.9307227667, 175.53812715, "1/618-10/618"],
    [-37.9369806, 175.5416204833, "648A"],
    [-37.93400485, 175.5405088167, "648"],
    [-37.9352812167, 175.5418752167, "656"],
    [-37.9261541333, 175.5367970667, "564"],
    [-37.9276279, 175.5381303167, "1/568"],
    [-37.9461318333, 175.5545134167, "842"],
    [-37.94315595, 175.5537148, "806"],
    [-37.9464287167, 175.5549129667, "844"],
    [-37.9713060833, 175.57780675, "1198"],
    [-37.9403528, 175.5492173333, "748"],
    [-37.9406445667, 175.5496667833, "1/750"],
    [-37.9282707, 175.5363209167, "7/568"],
    [-37.9188207333, 175.505113, "225"],
    [-37.9388163333, 175.5467693, "714"],
    [-37.9405476, 175.5503991667, "749"],
    [-37.94102555, 175.55021985, "750"],
    [-37.94425745, 175.5552436333, "819"],
    [-37.9459448333, 175.55501645, "838"],
    [-37.9465835833, 175.5559441, "845"],
    [-37.9472323167, 175.5550552833, "850"],
    [-37.9479511833, 175.5562512667, "1/861"],
    [-37.9481898667, 175.55635715, "2/861"],
    [-37.9500993333, 175.5559819167, "888"],
    [-37.95089095, 175.5580154, "899"],
    [-37.9289862833, 175.5364012833, "6/568"],
    [-37.9653755, 175.5702818667, "1099"],
    [-37.9299398667, 175.5377803667, "3/610"],
    [-37.9297131333, 175.5382649, "2/610"],
    [-37.92950415, 175.5389677333, "1/610"],
    [-37.9285464333, 175.53936505, "601"],
    [-37.92981565, 175.5365770833, "568"],
    [-37.9335473333, 175.5403341667, "646"],
    [-37.9331034167, 175.5400956, "642"],
    [-37.9327759167, 175.538732, "640"],
    [-37.9334526333, 175.5387036667, "638"],
    [-37.93320675, 175.5383744833, "636"],
    [-37.9336129167, 175.5375626, "634"],
    [-37.93288865, 175.5381226667, "632"],
    [-37.9327198833, 175.53720065, "630"],
    [-37.93255565, 175.53790585, "628"],
    [-37.93178035, 175.5394509333, "626"],
    [-37.9186410667, 175.5002110833, "182"],
    [-37.9172343667, 175.4951996667, "139"],
    [-37.9180053667, 175.5002946167, "183"],
    [-37.9174022167, 175.4964858167, "151"],
    [-37.9234301333, 175.5355513833, "516"],
    [-37.9434775667, 175.5532109833, "808"],
    [-37.93984305, 175.5484721667, "742"],
    [-37.9705266833, 175.57732895, "1175"],
    [-37.9272626167, 175.53717615, "3/568"],
    [-37.9532905667, 175.5580751833, "926"],
    [-37.9528798333, 175.5576940667, "924"],
    [-37.9659760333, 175.5710443833, "1/1111"],
    [-37.9396966667, 175.5481831, "740"],
    [-37.9128371, 175.4832793167, "19"],
    [-37.9140123833, 175.4838446333, "26"],
    [-37.9172423167, 175.4912675833, "106"],
    [-37.91736885, 175.4918037833, "110"],
    [-37.91754985, 175.4930980167, "120"],
    [-37.9169178833, 175.4926386, "121"],
    [-37.9163286667, 175.4889877833, "85"],
    [-37.9169649167, 175.4891728833, "86"],
    [-37.9165898167, 175.4905852833, "97"],
    [-37.9139972667, 175.4850735, "37"],
    [-37.9158482667, 175.48707945, "68"],
    [-37.9195504667, 175.5065384833, "240"],
    [-37.9197355333, 175.5077362, "256"],
    [-37.9187252667, 175.5091617167, "263"],
    [-37.9196476833, 175.5108055333, "277"],
    [-37.9202849333, 175.5111623667, "300"],
    [-37.9206995667, 175.5135292833, "1/314"],
    [-37.9207361, 175.5138259667, "2/314"],
    [-37.9562101, 175.5616106, "972"],
    [-37.9204318667, 175.5155629167, "1/319"],
    [-37.9203768167, 175.5151516333, "2/319"],
    [-37.91788475, 175.51599185, "3/319"],
    [-37.9208983667, 175.5150343667, "322"],
    [-37.9207446167, 175.5174052333, "355"],
    [-37.9213706667, 175.5182903833, "364"],
    [-37.9209673667, 175.5228385667, "381"],
    [-37.9121427, 175.48111095, "1"],
    [-37.9210744167, 175.526721, "398"],
    [-37.92060065, 175.5267811333, "421"],
    [-37.9203042167, 175.53031625, "441"],
    [-37.9205438667, 175.5322192667, "472"],
    [-37.95440025, 175.5603198167, "949"],
    [-37.9549745833, 175.5610077, "955"],
    [-37.9557622833, 175.5620862333, "971"],
    [-37.95699575, 175.56162575, "976"],
    [-37.96071475, 175.5671597833, "1043"],
    [-37.95945125, 175.5654647667, "1048"],
    [-37.9618459333, 175.56799375, "1/1049"],
    [-37.9616152833, 175.5678077833, "2/1049"],
    [-37.9661303667, 175.5708020833, "2/1111"],
    [-37.9667493333, 175.57131025, "1115"],
    [-37.96711415, 175.5715806667, "1117"],
    [-37.9675804833, 175.5719935, "1121"],
    [-37.9684296167, 175.5727105333, "1133"],
    [-37.9470393333, 175.5592361, "859"],
    [-37.91908795, 175.5034454, "1/222"],
    [-37.9190107333, 175.5030951833, "2/222"],
    [-37.9182063667, 175.4975724833, "162"],
    [-37.9215276333, 175.5398657167, "338"],
    [-37.9214903, 175.5403513167, "347"],
    [-37.9192073833, 175.5385113667, "60"],
    [-37.9194124167, 175.53863005, "70"],
    [-37.9202965333, 175.5390272333, "170"],
    [-37.9202201333, 175.5394256333, "187"],
    [-37.9200427667, 175.5393355, "165"],
    [-37.9196745333, 175.5387265333, "110"],
    [-37.9196443833, 175.5391287333, "113"],
    [-37.9200210333, 175.5388776, "148"],
    [-37.9198508167, 175.5392385667, "139"],
    [-37.9198443833, 175.53880195, "130"],
    [-37.92078415, 175.5393372, "240"],
    [-37.9203728, 175.5395211833, "205"],
    [-37.92054995, 175.5391807, "218"],
    [-37.9207016833, 175.53928345, "222"],
    [-37.9204983167, 175.5396219333, "225"],
    [-37.9206377, 175.5392380167, "220"],
    [-37.9209028833, 175.53941765, "1/258"],
    [-37.9206256667, 175.5397483667, "243"],
    [-37.92098855, 175.5394799, "2/258"],
    [-37.9211211, 175.54010905, "303"],
    [-37.9207808, 175.5398586, "261"],
    [-37.9209433167, 175.5399736333, "285"],
    [-37.9210710833, 175.53953355, "3/258"],
    [-37.9213220667, 175.54020665, "325"],
    [-37.9213740167, 175.5397642, "320"],
    [-37.9216746167, 175.5399703333, "356"],
    [-37.9217735667, 175.5401128333, "370"],
    [-37.9216458, 175.5405448833, "373"],
    [-37.92187255, 175.54025525, "386"],
    [-37.9219284333, 175.5408441667, "401"],
    [-37.9103304833, 175.4721328333, "10"],
    [-37.9102787167, 175.4719914, "11"],
    [-37.9108774833, 175.4715148, "1"],
    [-37.91067615, 175.4716186, "3"],
    [-37.9107711833, 175.4719261333, "4"],
    [-37.9105010667, 175.4716637167, "5"],
    [-37.9106344833, 175.4720128, "6"],
    [-37.9103480333, 175.4717653333, "7"],
    [-37.91015655, 175.4718258167, "9"],
    [-37.9104869167, 175.47212505, "8"],
    [-37.8164228, 175.5139775667, "1"],
    [-37.8062942167, 175.5133165, "174"],
    [-37.8153860333, 175.5132536167, "21"],
    [-37.8101489667, 175.5102431, "70"],
    [-37.81422025, 175.5124331667, "36"],
    [-37.8662685833, 175.38685585, "101"],
    [-37.8696932667, 175.3909689667, "156"],
    [-37.86591225, 175.38439815, "82"],
    [-37.8665148, 175.3851989333, "100"],
    [-37.8672423833, 175.385944, "102"],
    [-37.8633081833, 175.3778155667, "18"],
    [-37.8628883333, 175.3783555833, "20"],
    [-37.8633668167, 175.3794526667, "34"],
    [-37.8687968833, 175.3875604333, "124"],
    [-37.87375745, 175.4073473, "309"],
    [-37.871102, 175.3963777667, "206"],
    [-37.8643377167, 175.3813198167, "48A"],
    [-37.8647317667, 175.38235055, "62"],
    [-37.8653946, 175.3839015333, "72"],
    [-37.8691804167, 175.3885183, "136"],
    [-37.8695428667, 175.3900536333, "150"],
    [-37.8708532667, 175.3954820167, "200"],
    [-37.8696376833, 175.3931483, "165"],
    [-37.8708364167, 175.3980991167, "221"],
    [-37.8769260167, 175.3983096333, "256B"],
    [-37.8739190333, 175.4060778667, "298"],
    [-37.8736307833, 175.4070128, "307"],
    [-37.8743770667, 175.4077305, "316"],
    [-37.8703100667, 175.3894640833, "146"],
    [-37.8697010667, 175.39052375, "154"],
    [-37.8641413167, 175.3808931667, "48E"],
    [-37.8673080333, 175.3779883667, "48B"],
    [-37.8673718333, 175.3785550833, "48C"],
    [-37.8674977833, 175.3793694333, "48D"],
    [-37.86895095, 175.3799414833, "66B"],
    [-37.8626150667, 175.3776425167, "14"],
    [-37.87166565, 175.3986665667, "254A"],
    [-37.8723313833, 175.4007501, "256A"],
    [-37.8728116833, 175.4024396333, "276A"],
    [-37.8735445333, 175.4044031333, "276B"],
    [-37.8788183833, 175.3998753, "276C"],
    [-37.8700288, 175.39251035, "170"],
    [-37.8700618833, 175.3926480833, "172"],
    [-37.87032565, 175.3935790167, "182"],
    [-37.87129395, 175.3971019667, "210"],
    [-37.8684687167, 175.3787688, "66A"],
    [-37.86917345, 175.3816180667, "66"],
    [-37.8994036333, 175.46781995, "2"],
    [-37.89908445, 175.46789945, "3"],
    [-37.8992924, 175.46819555, "4"],
    [-37.8990193667, 175.4681169167, "5"],
    [-37.8994638333, 175.46840135, "6"],
    [-37.8988995167, 175.4683006333, "7"],
    [-37.8992033, 175.46852295, "8"],
    [-37.8866583833, 175.4532039667, "33F"],
    [-37.8864233833, 175.4521969667, "32"],
    [-37.8866203333, 175.4534927833, "33E"],
    [-37.88746175, 175.45179065, "24A"],
    [-37.8826686, 175.4521089833, "48"],
    [-37.8871881167, 175.4517683, "26A"],
    [-37.8891620833, 175.4522299333, "2A"],
    [-37.8870288833, 175.4517563333, "28A"],
    [-37.8847421333, 175.4521349667, "46"],
    [-37.8866198667, 175.4517700333, "30A"],
    [-37.8847517, 175.4530716833, "49"],
    [-37.8864979167, 175.4517625333, "32A"],
    [-37.8877413167, 175.4522157, "22"],
    [-37.8875273, 175.4522017833, "24"],
    [-37.8886485, 175.4522158667, "10"],
    [-37.8863276167, 175.4526999167, "39"],
    [-37.8872459167, 175.4521917333, "26"],
    [-37.8869694333, 175.4521850167, "28"],
    [-37.8884949833, 175.4526693667, "11"],
    [-37.8884365167, 175.4522167833, "12"],
    [-37.8883604667, 175.45266065, "13"],
    [-37.88909265, 175.4527732833, "1A"],
    [-37.8890918, 175.4526509167, "1"],
    [-37.8892247667, 175.4522300833, "2"],
    [-37.8889543167, 175.4526548333, "3"],
    [-37.88878835, 175.4526679667, "5"],
    [-37.8879826333, 175.4526516667, "17"],
    [-37.8879732333, 175.4522717, "18"],
    [-37.8876465167, 175.4529919333, "21"],
    [-37.8874666333, 175.4526953333, "23"],
    [-37.88718005, 175.45269155, "27"],
    [-37.88667215, 175.4527091167, "35"],
    [-37.8865333667, 175.452713, "37"],
    [-37.8869211167, 175.4527025667, "31"],
    [-37.8889064667, 175.45167665, "6"],
    [-37.8887104, 175.4530365333, "7"],
    [-37.8888331333, 175.45221635, "8"],
    [-37.8886320167, 175.4530411167, "9"],
    [-37.8866415, 175.4537552833, "33D"],
    [-37.8868032, 175.4537838167, "33C"],
    [-37.8868312167, 175.45354015, "33B"],
    [-37.88685175, 175.4532279333, "33A"],
    [-37.8867126, 175.4521915667, "30"],
    [-37.89138475, 175.4647044, "31"],
    [-37.8884147667, 175.4636648, "60B"],
    [-37.8944636333, 175.4644644833, "10A"],
    [-37.8944416833, 175.4645756833, "10"],
    [-37.8941219, 175.46491495, "11"],
    [-37.8943222167, 175.4642833333, "12A"],
    [-37.8930367667, 175.4648168, "15A"],
    [-37.8931255, 175.4648136167, "15B"],
    [-37.8931035167, 175.4644127333, "18"],
    [-37.89292315, 175.4648254167, "19"],
    [-37.8942371, 175.4645572667, "12"],
    [-37.89397735, 175.4649136, "13"],
    [-37.89409845, 175.4643458667, "14"],
    [-37.89391375, 175.4645277333, "16"],
    [-37.8929680833, 175.4643951, "20"],
    [-37.8927348833, 175.46480795, "21"],
    [-37.8928157667, 175.46437875, "22A"],
    [-37.8927337833, 175.4643644833, "22"],
    [-37.8925561167, 175.46478985, "23"],
    [-37.8923608833, 175.4647155, "25A"],
    [-37.8924641833, 175.46493565, "25"],
    [-37.8949511, 175.4649854, "1A"],
    [-37.8922117333, 175.4647047167, "27"],
    [-37.8915681667, 175.4646986833, "29"],
    [-37.8913701667, 175.4642759667, "30A-30D"],
    [-37.8913990167, 175.4642620667, "30"],
    [-37.8913092333, 175.46425895, "32"],
    [-37.8912003667, 175.46469755, "33"],
    [-37.8911230333, 175.4642383333, "34A"],
    [-37.8911486667, 175.46399235, "34B"],
    [-37.8911019, 175.4642380167, "34"],
    [-37.89098895, 175.4646725333, "35"],
    [-37.89084255, 175.4642192333, "36A"],
    [-37.8909496167, 175.46422895, "36B"],
    [-37.8908606333, 175.4642211667, "36"],
    [-37.8948280833, 175.46498935, "3"],
    [-37.8908666333, 175.4646632833, "37"],
    [-37.8907759333, 175.4646549833, "39A"],
    [-37.8907216667, 175.4646473167, "39B"],
    [-37.8906578833, 175.4646450333, "39C"],
    [-37.8905375667, 175.4646237167, "41"],
    [-37.8904761833, 175.4646328667, "43"],
    [-37.8902941833, 175.4641657667, "44A"],
    [-37.8902406833, 175.46415805, "44B"],
    [-37.8903436667, 175.4641675667, "44"],
    [-37.89028625, 175.46460345, "45"],
    [-37.8901877167, 175.4641515667, "46A"],
    [-37.89013315, 175.4641537667, "46B"],
    [-37.8949605167, 175.4645740333, "4"],
    [-37.8900607167, 175.4645841333, "47"],
    [-37.8900176, 175.4641449833, "48"],
    [-37.8899419667, 175.464572, "49A"],
    [-37.88987475, 175.4645733833, "49B"],
    [-37.8898110667, 175.4645667333, "49C"],
    [-37.8896632167, 175.4645695333, "49D"],
    [-37.8898541333, 175.46475255, "49E"],
    [-37.8897567333, 175.4647629, "49F"],
    [-37.8896634667, 175.4647669667, "49G"],
    [-37.8898924167, 175.4641263833, "50"],
    [-37.8897574667, 175.4641326833, "52"],
    [-37.8889242333, 175.4640623167, "54"],
    [-37.88865535, 175.4644431167, "55"],
    [-37.8887946833, 175.4638054667, "56A"],
    [-37.8946296667, 175.4649645, "5"],
    [-37.8887812167, 175.4640600833, "56"],
    [-37.8884208167, 175.46442915, "57"],
    [-37.8886385667, 175.4637760833, "58A"],
    [-37.8886053667, 175.4640482, "58"],
    [-37.8882043667, 175.4644158333, "59"],
    [-37.8885028333, 175.463677, "60A"],
    [-37.88839355, 175.4640293333, "60"],
    [-37.8879652167, 175.4644074, "61"],
    [-37.8877446333, 175.46437685, "63"],
    [-37.8881502667, 175.4640036667, "64"],
    [-37.8879700167, 175.4639859333, "66"],
    [-37.8878033167, 175.4639686667, "68"],
    [-37.8947931167, 175.4646081167, "6A"],
    [-37.8948649333, 175.4643251333, "6"],
    [-37.8944518833, 175.4649523167, "7"],
    [-37.8946088333, 175.4645449667, "8"],
    [-37.89429465, 175.4649376, "9"],
    [-37.8951769667, 175.4645875167, "2"],
    [-37.88757625, 175.46390195, "70"],
    [-37.8940272667, 175.4652238, "11A"],
    [-37.8929316167, 175.4651907833, "19A"],
    [-37.8910516167, 175.4651865667, "35A"],
    [-37.8950131667, 175.4649995667, "1"],
    [-37.8946681667, 175.4642288167, "8A"],
    [-37.8950832, 175.4643562167, "2A"],
    [-37.89289445, 175.4639297667, "1/22-11/22"],
    [-37.8839810833, 175.4856866167, "3"],
    [-37.8839609167, 175.4862087667, "4"],
    [-37.8813706667, 175.4859932667, "25"],
    [-37.8815762, 175.4860593167, "23"],
    [-37.88176925, 175.48611695, "21"],
    [-37.8819291833, 175.4861440667, "19"],
    [-37.8812535167, 175.48626755, "28"],
    [-37.8814419833, 175.486341, "26"],
    [-37.8816454, 175.486407, "24"],
    [-37.8817836833, 175.4864573167, "22"],
    [-37.8823392667, 175.4866145167, "20"],
    [-37.8824710167, 175.4866385333, "18"],
    [-37.8823897, 175.4862189833, "17"],
    [-37.8810208833, 175.4857673833, "27"],
    [-37.8809241333, 175.4860744, "32"],
    [-37.8810838833, 175.4862027833, "30"],
    [-37.8807501667, 175.4855223, "35"],
    [-37.8809029, 175.48565165, "33"],
    [-37.88077235, 175.4859607667, "34"],
    [-37.8805942833, 175.48538215, "37"],
    [-37.8806738833, 175.48500715, "39"],
    [-37.8804429167, 175.4856392833, "36"],
    [-37.8806746667, 175.48474885, "41"],
    [-37.8802171333, 175.4854475, "38"],
    [-37.8800456167, 175.4853260167, "40"],
    [-37.8805906167, 175.4847991833, "43"],
    [-37.8803164833, 175.4846505, "49"],
    [-37.8803990833, 175.4851850833, "45"],
    [-37.8802597333, 175.4850626167, "47"],
    [-37.8800347333, 175.4849136333, "53"],
    [-37.88023585, 175.4846241, "51"],
    [-37.87911725, 175.4844298333, "63"],
    [-37.8793032, 175.4845327167, "61"],
    [-37.8794998, 175.48456245, "59"],
    [-37.8796728333, 175.48464225, "57"],
    [-37.8798386, 175.4844502667, "55B"],
    [-37.87985855, 175.4847564333, "55"],
    [-37.8798501167, 175.4851561333, "42"],
    [-37.8792051, 175.48470885, "65"],
    [-37.8796635, 175.4850343667, "44"],
    [-37.8834352333, 175.4858534667, "5"],
    [-37.8832857667, 175.4859341667, "7"],
    [-37.88359745, 175.4863355833, "8"],
    [-37.8830905833, 175.4860275333, "9"],
    [-37.88377265, 175.48624865, "6"],
    [-37.8826329333, 175.4866849167, "16"],
    [-37.8825409333, 175.4862091167, "15"],
    [-37.8827294333, 175.4862135, "13"],
    [-37.8834279333, 175.4864298333, "10"],
    [-37.8832412, 175.4865308833, "12"],
    [-37.883058, 175.4865957667, "14"],
    [-37.8828529667, 175.4861158333, "11"],
    [-37.8834473167, 175.3733817, "7"],
    [-37.8821477, 175.3739511333, "17"],
    [-37.8835727833, 175.3742963167, "4"],
    [-37.8829996167, 175.37376495, "11"],
    [-37.8799677333, 175.3744603833, "49"],
    [-37.8801634167, 175.37443835, "43"],
    [-37.8131783667, 175.38169875, "10"],
    [-37.8129868833, 175.3819189, "8"],
    [-37.8122474333, 175.3825065833, "6C"],
    [-37.8130850833, 175.3823078833, "6A"],
    [-37.8124561333, 175.38300715, "6B"],
    [-37.81348525, 175.3804658333, "12"],
    [-37.81168165, 175.3801314, "16B"],
    [-37.8110145667, 175.3801371167, "16C"],
    [-37.8106325333, 175.3808725167, "16D"],
    [-37.8105196, 175.3799175, "16E"],
    [-37.8134586333, 175.37986425, "16A"],
    [-37.8608434833, 175.4499011, "43"],
    [-37.8612150667, 175.44990305, "45"],
    [-37.8618689167, 175.4498981167, "47"],
    [-37.86239125, 175.4505662333, "49"],
    [-37.8626794667, 175.4498931333, "51"],
    [-37.86272035, 175.4492676833, "53"],
    [-37.86160045, 175.4492898833, "55"],
    [-37.8830900667, 175.48706325, "2"],
    [-37.8833400667, 175.4873493167, "3"],
    [-37.88330455, 175.4870247333, "4"],
    [-37.8835654833, 175.4872303, "5"],
    [-37.8835200667, 175.48693185, "6"],
    [-37.8837668167, 175.4872335833, "7"],
    [-37.88372005, 175.48686615, "8"],
    [-37.88385335, 175.4870479667, "9"],
    [-37.8831409167, 175.4873846167, "1"],
    [-37.8838673, 175.4868328833, "10"],
    [-37.88305215, 175.4682743333, "2"],
    [-37.8832460833, 175.4683237, "3"],
    [-37.8833727333, 175.4683497167, "4"],
    [-37.8833539333, 175.4684306333, "5"],
    [-37.8832353667, 175.4684359833, "6"],
    [-37.8356606333, 175.4259896, "44"],
    [-37.8361144333, 175.4254149667, "39"],
    [-37.8298011333, 175.4247086333, "97"],
    [-37.8328783, 175.4254824333, "73"],
    [-37.8326006333, 175.42427305, "71"],
    [-37.831938, 175.42577585, "85"],
    [-37.8296909667, 175.4253358667, "98A"],
    [-37.8304079333, 175.42640705, "98B"],
    [-37.9136688833, 175.47027315, "11"],
    [-37.9136547333, 175.47069685, "10"],
    [-37.9138316333, 175.4708094833, "12"],
    [-37.9137826667, 175.4703954167, "16"],
    [-37.91318695, 175.4705625333, "1"],
    [-37.9132175333, 175.4701367, "3"],
    [-37.9134621167, 175.47077345, "4"],
    [-37.9134043833, 175.47044285, "5"],
    [-37.9136208, 175.4710819333, "6"],
    [-37.91350565, 175.47029995, "7"],
    [-37.9137004667, 175.4710525667, "8"],
    [-37.9135834833, 175.4699601167, "9"],
    [-37.8994691333, 175.46256515, "2"],
    [-37.8995118667, 175.4628252833, "2A"],
    [-37.8995123, 175.4630041667, "2B"],
    [-37.8994579333, 175.4622181667, "1"],
    [-37.8974378833, 175.4617671667, "28"],
    [-37.8974075167, 175.4619900333, "26"],
    [-37.89761855, 175.4608725333, "25"],
    [-37.8977565167, 175.4606562, "27"],
    [-37.8979072833, 175.4605283333, "29"],
    [-37.89808565, 175.4603934333, "31"],
    [-37.8982804333, 175.46037375, "33"],
    [-37.89837375, 175.4602651333, "35"],
    [-37.89802395, 175.46003665, "50"],
    [-37.8978844167, 175.4601356167, "48"],
    [-37.8977532, 175.4602402333, "46"],
    [-37.8976160167, 175.4603286167, "44"],
    [-37.89819545, 175.4599255167, "52"],
    [-37.8974890167, 175.4604333667, "42"],
    [-37.8973825833, 175.46056285, "40"],
    [-37.8984307833, 175.4623306333, "14"],
    [-37.8993176, 175.46225845, "3"],
    [-37.8982570167, 175.4622604, "16"],
    [-37.89807915, 175.4621847167, "18"],
    [-37.8979096167, 175.46211465, "20"],
    [-37.8977295167, 175.4620442, "22"],
    [-37.8983868833, 175.4619344833, "11"],
    [-37.8982446, 175.4618734, "13"],
    [-37.8980852, 175.46182235, "15"],
    [-37.8979221167, 175.4617471667, "17"],
    [-37.8977388167, 175.4616313167, "19"],
    [-37.8975900833, 175.4619512333, "24"],
    [-37.8976432833, 175.4613693, "21"],
    [-37.8976362833, 175.4611184667, "23"],
    [-37.8973338667, 175.4610383, "34"],
    [-37.89734735, 175.46128405, "32"],
    [-37.8973671167, 175.4615326833, "30"],
    [-37.8983740833, 175.4600625, "37"],
    [-37.8973341333, 175.46074505, "38"],
    [-37.8971390333, 175.46087135, "36"],
    [-37.8986548667, 175.4624186833, "12"],
    [-37.89883265, 175.462497, "10"],
    [-37.8990063167, 175.46257255, "8"],
    [-37.8991676833, 175.4626289833, "6"],
    [-37.8993200333, 175.4626184667, "4"],
    [-37.8990043833, 175.4621885667, "7"],
    [-37.8988871333, 175.4621417, "9"],
    [-37.8991505333, 175.4622658, "5"],
    [-37.9839604, 175.45833975, "21"],
    [-37.9833674167, 175.4588416833, "15"],
    [-37.8359882667, 175.4393378167, "84"],
    [-37.81988195, 175.4304131333, "303"],
    [-37.8180250667, 175.4265244667, "359"],
    [-37.8183922667, 175.42604195, "361"],
    [-37.8176359333, 175.4250678167, "377"],
    [-37.8345467667, 175.4387839833, "99"],
    [-37.83385615, 175.4387189, "107"],
    [-37.80686185, 175.4025271167, "621E"],
    [-37.8072254833, 175.4031670833, "621F"],
    [-37.8157959333, 175.4221578, "401B"],
    [-37.8061875667, 175.401462, "621A"],
    [-37.8058821833, 175.4010980167, "621B"],
    [-37.81469335, 175.4231989, "406"],
    [-37.8174082667, 175.4176129667, "413"],
    [-37.8141161167, 175.4226544167, "416"],
    [-37.8138467167, 175.4215990833, "419"],
    [-37.8135359833, 175.4220777667, "424"],
    [-37.81227475, 175.4238289333, "426"],
    [-37.81351715, 175.4209686667, "431"],
    [-37.8344727, 175.43943635, "100"],
    [-37.8341482167, 175.4394138833, "102"],
    [-37.8335249, 175.4387248167, "111"],
    [-37.8332444167, 175.4386937167, "113"],
    [-37.8258899667, 175.4354216333, "201"],
    [-37.8207155167, 175.4310458, "287"],
    [-37.82205395, 175.4322644, "273"],
    [-37.82211345, 175.4333285833, "268"],
    [-37.8116728667, 175.4194537167, "440A"],
    [-37.8113214333, 175.4130010333, "491A"],
    [-37.8163042833, 175.4288074167, "348B"],
    [-37.81563165, 175.4286594, "348A"],
    [-37.8059561833, 175.41024335, "566"],
    [-37.8054795833, 175.3996853333, "621D"],
    [-37.8049338667, 175.4001146333, "621C"],
    [-37.8194743833, 175.42997115, "315"],
    [-37.8179959833, 175.4296346167, "328"],
    [-37.8184434333, 175.4287788333, "327"],
    [-37.8064376833, 175.406161, "597B"],
    [-37.8062919333, 175.4056468333, "597C"],
    [-37.8165707167, 175.4301424, "336B"],
    [-37.8172738, 175.4285947167, "336A"],
    [-37.8189469333, 175.4303026167, "312A"],
    [-37.81940555, 175.4307701833, "312B"],
    [-37.8199143667, 175.4312459, "300"],
    [-37.8175767667, 175.4291582, "334"],
    [-37.8152067667, 175.4162956667, "441B"],
    [-37.8142325667, 175.4148164667, "441D"],
    [-37.8149509, 175.4159546667, "441C"],
    [-37.815999, 175.4175927333, "441A"],
    [-37.80413515, 175.4042530167, "612"],
    [-37.8036285, 175.4024796333, "627B"],
    [-37.8014316833, 175.4040596333, "636"],
    [-37.8026355333, 175.4024570667, "638"],
    [-37.8046866167, 175.4038756333, "613"],
    [-37.8028006833, 175.4016926167, "639A"],
    [-37.8015622167, 175.4017531, "652"],
    [-37.8004875333, 175.4008727667, "670"],
    [-37.7997891, 175.40002805, "676"],
    [-37.8083442333, 175.4139592833, "509"],
    [-37.8074935333, 175.4139840667, "532"],
    [-37.8072659167, 175.4124669333, "543"],
    [-37.8081279, 175.40823995, "567A"],
    [-37.8087099667, 175.4071535667, "567C"],
    [-37.804962, 175.4071512, "586"],
    [-37.8046189167, 175.4061273333, "598"],
    [-37.8052894167, 175.4083249, "576"],
    [-37.8060052167, 175.4083508333, "571"],
    [-37.8053679167, 175.4062368, "597A"],
    [-37.8051049667, 175.4051947167, "607"],
    [-37.8089437667, 175.4076931167, "567B"],
    [-37.8113679833, 175.4200005667, "440B"],
    [-37.8112042667, 175.4175891, "463"],
    [-37.8114033, 175.4191389167, "442"],
    [-37.81667955, 175.4240415167, "387"],
    [-37.8160871, 175.4248795, "390"],
    [-37.81503135, 175.4226562, "401A"],
    [-37.8158879667, 175.42335465, "393"],
    [-37.8104159333, 175.41701115, "477"],
    [-37.84176295, 175.4387852167, "25"],
    [-37.8394856333, 175.43871765, "53"],
    [-37.84315575, 175.4396268667, "4"],
    [-37.8382764833, 175.4387401333, "65"],
    [-37.8365486833, 175.4387233, "81"],
    [-37.83550145, 175.4387130167, "91"],
    [-37.8063373333, 175.40984385, "565A"],
    [-37.8068884167, 175.4101122333, "553"],
    [-37.8073266833, 175.40938595, "565B"],
    [-37.8022880667, 175.4015246833, "647"],
    [-37.8032717167, 175.3994722333, "649"],
    [-37.8125184833, 175.4206463, "432A"],
    [-37.8131087167, 175.4214898833, "432D"],
    [-37.81219155, 175.4220903333, "432B"],
    [-37.8123494833, 175.4226102667, "432C"],
    [-37.8323999167, 175.4388484167, "113/1"],
    [-37.8137884667, 175.4184721333, "439B"],
    [-37.8128705833, 175.4202196333, "439A"],
    [-37.8030845, 175.4029651, "634"],
    [-37.80229035, 175.4038689333, "634A"],
    [-37.8016416, 175.4044987167, "634B"],
    [-37.8040659833, 175.4028728333, "627A"],
    [-37.8039385667, 175.4012164167, "627C"],
    [-37.8041331833, 175.4011953333, "627D"],
    [-37.8104539833, 175.4114936333, "501"],
    [-37.8095276, 175.41551535, "491C"],
    [-37.8104942333, 175.4142607333, "491B"],
    [-37.8118822333, 175.4251615167, "426A"],
    [-37.9146426833, 175.46333945, "8"],
    [-37.9146966667, 175.4641698333, "12"],
    [-37.9148385667, 175.4646229167, "14"],
    [-37.9145846833, 175.4637018, "10"],
    [-37.9148759167, 175.4632119667, "6"],
    [-37.9150353667, 175.4631399, "4"],
    [-37.8791983833, 175.48491125, "1"],
    [-37.8794456833, 175.4852828333, "4"],
    [-37.8795405, 175.4855742333, "6"],
    [-37.8796772167, 175.4856965, "8"],
    [-37.87980185, 175.4857916833, "10"],
    [-37.8796864, 175.4861288, "15"],
    [-37.8797264167, 175.4859489333, "12"],
    [-37.8795614, 175.4860496167, "13"],
    [-37.8794049667, 175.4858653167, "11"],
    [-37.8792908167, 175.4856798667, "9"],
    [-37.8791893, 175.4854042167, "5"],
    [-37.879194, 175.4855697, "7"],
    [-37.87919295, 175.4851510333, "3"],
    [-37.9021503333, 175.4819923833, "1"],
    [-37.9020893333, 175.4817469667, "2"],
    [-37.90202325, 175.4814764333, "3"],
    [-37.90189885, 175.4813368167, "4"],
    [-37.9017681, 175.4813746667, "5"],
    [-37.9017408667, 175.4815826667, "6"],
    [-37.9018523, 175.4818607167, "7"],
    [-37.90192475, 175.4821145, "8"],
    [-37.91226175, 175.46593575, "11"],
    [-37.9122654667, 175.4666392333, "2"],
    [-37.9124824333, 175.4664875, "1"],
    [-37.9126646667, 175.4661762167, "3"],
    [-37.9121691, 175.4663371, "4"],
    [-37.9126312167, 175.4661364333, "5"],
    [-37.9121084167, 175.46614215, "6"],
    [-37.91239705, 175.46620525, "7"],
    [-37.912165, 175.4659997167, "8"],
    [-37.91234125, 175.4659673167, "9"],
    [-37.8640527833, 175.4896800333, "1/239"],
    [-37.8637439833, 175.4893278333, "2/239"],
    [-37.8399393, 175.4691242833, "563"],
    [-37.8403040167, 175.4695932333, "555"],
    [-37.8626741167, 175.4890199667, "250"],
    [-37.86235545, 175.4877547333, "263"],
    [-37.8621190833, 175.4881775833, "260"],
    [-37.8697908333, 175.4976855333, "2/143"],
    [-37.8696097167, 175.50222845, "109"],
    [-37.8650994667, 175.4906942667, "217"],
    [-37.8587062667, 175.4842270833, "308"],
    [-37.8585393667, 175.4832368167, "323"],
    [-37.856982, 175.4821791333, "337"],
    [-37.8557220333, 175.4813075, "357"],
    [-37.87269675, 175.51109805, "9"],
    [-37.86818685, 175.4965807167, "154"],
    [-37.8391881333, 175.4691244833, "570"],
    [-37.8392424167, 175.4682793833, "573"],
    [-37.8384787167, 175.4682486667, "580"],
    [-37.8380699833, 175.4677177667, "586"],
    [-37.83591845, 175.4652008167, "1/620"],
    [-37.8356297, 175.4656015333, "2/620"],
    [-37.85443655, 175.48126465, "362"],
    [-37.8543465667, 175.4803770667, "363"],
    [-37.8533677, 175.4796417833, "383"],
    [-37.8400570333, 175.4693165167, "559"],
    [-37.8701502, 175.5066921333, "58"],
    [-37.8688167, 175.5031792667, "94"],
    [-37.8633276833, 175.48971255, "240"],
    [-37.84499075, 175.47397555, "489"],
    [-37.8390078667, 175.4675286, "579"],
    [-37.8615817667, 175.4874484667, "272"],
    [-37.8611261, 175.48692335, "1/276"],
    [-37.8609821, 175.48677485, "2/276"],
    [-37.8443942167, 175.4735167, "491"],
    [-37.84453425, 175.4741157833, "490"],
    [-37.8728439333, 175.5114111333, "5"],
    [-37.8479137833, 175.47588805, "449"],
    [-37.8694130667, 175.5004653167, "118"],
    [-37.8381128333, 175.4689194667, "578"],
    [-37.8387493167, 175.4686557833, "576"],
    [-37.834946, 175.4616395, "648"],
    [-37.8355279667, 175.4648596667, "626"],
    [-37.8352287, 175.46082495, "670"],
    [-37.84359945, 175.4735256167, "500"],
    [-37.8437138833, 175.4730056833, "501"],
    [-37.8433661667, 175.4727594167, "511"],
    [-37.8429640667, 175.4725448333, "513"],
    [-37.8424090833, 175.4720656833, "517"],
    [-37.8419261, 175.4716311333, "529"],
    [-37.84138045, 175.4707106667, "535"],
    [-37.8407243, 175.4700550167, "551"],
    [-37.84032605, 175.4702964, "552"],
    [-37.8397895, 175.46968935, "562"],
    [-37.83966945, 175.4688137833, "567"],
    [-37.8458821833, 175.4743360167, "479"],
    [-37.8523557667, 175.4795548667, "394"],
    [-37.8519909833, 175.4785619833, "401"],
    [-37.85128865, 175.4790768167, "408"],
    [-37.8505837, 175.4777973667, "419"],
    [-37.8494416833, 175.4767902167, "429"],
    [-37.8501747833, 175.478082, "422"],
    [-37.8487495333, 175.477303, "446"],
    [-37.8613924167, 175.4866768333, "275"],
    [-37.8612592667, 175.48651665, "277"],
    [-37.8606625, 175.4863779, "280"],
    [-37.8602587667, 175.4860168333, "288"],
    [-37.8662275, 175.4932509, "192"],
    [-37.8656668, 175.4925030333, "206"],
    [-37.8718011, 175.50936105, "31"],
    [-37.871327, 175.50837775, "41"],
    [-37.8481012833, 175.4755436333, "455"],
    [-37.8662202833, 175.4971715833, "2/164"],
    [-37.8665327833, 175.4968656167, "1/164"],
    [-37.87262005, 175.5101317, "11"],
    [-37.8407464167, 175.4693628, "553"],
    [-37.8687301, 175.50368985, "92"],
    [-37.8576066333, 175.4826215667, "331"],
    [-37.867679, 175.4952846833, "164"],
    [-37.8698948833, 175.4990379333, "133"],
    [-37.8639344, 175.49046205, "230"],
    [-37.8645916667, 175.4912248333, "224"],
    [-37.8710460833, 175.50036065, "125"],
    [-37.8694796667, 175.4976021667, "1/143"],
    [-37.8733131, 175.4691004333, "3A"],
    [-37.87406055, 175.4694125667, "6A"],
    [-37.8735341167, 175.469327, "5"],
    [-37.8735109667, 175.46960345, "7"],
    [-37.87351105, 175.4698807333, "11"],
    [-37.8735358667, 175.47009225, "13"],
    [-37.8736709667, 175.4702864167, "17"],
    [-37.8737941667, 175.47025885, "16"],
    [-37.8738211333, 175.4693453167, "4"],
    [-37.8737987667, 175.46968045, "8"],
    [-37.8738769167, 175.4699632, "10"],
    [-37.8739402833, 175.4701521167, "12"],
    [-37.8732443833, 175.4692419333, "3B"],
    [-37.8740679833, 175.4695514833, "6B"],
    [-37.8739830167, 175.4704122667, "14"],
    [-37.8735580667, 175.4702317, "15"],
    [-37.87328745, 175.4697687167, "9"],
    [-37.8738628167, 175.46909085, "2"],
    [-37.8735833, 175.4690007, "1"],
    [-37.9140601833, 175.4734438833, "1"],
    [-37.91414235, 175.4726753, "7A"],
    [-37.9148196333, 175.4729240333, "4"],
    [-37.9145959167, 175.4727449, "5"],
    [-37.9144294, 175.4728081667, "6"],
    [-37.9142862333, 175.4729454, "7"],
    [-37.9140804667, 175.4729594, "8"],
    [-37.91442545, 175.4732771, "2A"],
    [-37.9146292, 175.47320695, "3"],
    [-37.9142898833, 175.4733283333, "2"],
    [-37.8924708, 175.4694829667, "3"],
    [-37.8921866833, 175.4690726, "4-6"],
    [-37.8744290667, 175.4729675333, "16"],
    [-37.8747743333, 175.4729266667, "17"],
    [-37.8743306833, 175.4749814667, "2"],
    [-37.8743712167, 175.4747777167, "4"],
    [-37.8743979833, 175.4745281667, "6"],
    [-37.8744096167, 175.47429405, "8"],
    [-37.8744245167, 175.4740094333, "10"],
    [-37.8744545333, 175.4736160667, "12"],
    [-37.8742322333, 175.47382395, "10A"],
    [-37.87422675, 175.47369315, "12A"],
    [-37.8742394, 175.4730406667, "16A"],
    [-37.8742450667, 175.4731634667, "14A"],
    [-37.8744790667, 175.4732784833, "14"],
    [-37.8747754833, 175.4731559, "15"],
    [-37.8747613167, 175.4734085833, "13"],
    [-37.8747389, 175.4736529667, "11"],
    [-37.8747211167, 175.47387885, "9"],
    [-37.8747006167, 175.4741313, "7"],
    [-37.8746909667, 175.4743708167, "5"],
    [-37.8746798167, 175.4746769, "3"],
    [-37.8748711167, 175.4748117167, "3A"],
    [-37.8748328833, 175.4749142833, "1A"],
    [-37.874621, 175.4750391, "1"],
    [-37.8755351667, 175.4795168667, "6A"],
    [-37.8754681, 175.4798997667, "6"],
    [-37.8756842833, 175.4798735833, "8"],
    [-37.8756412167, 175.4794951833, "8A"],
    [-37.8758023167, 175.4803141667, "5"],
    [-37.8757598667, 175.4801058, "7"],
    [-37.8757471833, 175.4799721833, "9"],
    [-37.8755322, 175.4802420833, "3"],
    [-37.8753549833, 175.47993535, "4"],
    [-37.8817592, 175.4617109667, "4A"],
    [-37.8820907333, 175.4622059833, "5"],
    [-37.8815066, 175.4617161667, "4B"],
    [-37.8817534333, 175.4618948333, "6A"],
    [-37.8815026667, 175.46184895, "6B"],
    [-37.8815932167, 175.46217415, "10A"],
    [-37.8817450167, 175.46226225, "10"],
    [-37.8818722667, 175.4626555167, "11"],
    [-37.8817309, 175.4624690333, "12"],
    [-37.8821211333, 175.4617608833, "1"],
    [-37.8817646833, 175.4615252167, "2A"],
    [-37.8815099, 175.4615357667, "2B"],
    [-37.88209615, 175.4619084, "3"],
    [-37.8820657333, 175.4624910833, "7"],
    [-37.8817491333, 175.4620671833, "8A"],
    [-37.8814882667, 175.4620343, "8B"],
    [-37.8820256333, 175.4626954, "9"],
    [-37.9011387, 175.4845455833, "11A"],
    [-37.9004465667, 175.4842316167, "6"],
    [-37.9006268333, 175.4836419, "1"],
    [-37.9005414333, 175.4845609667, "10"],
    [-37.9009292833, 175.4847187667, "11"],
    [-37.90099175, 175.48493945, "13"],
    [-37.900608, 175.4848214333, "14"],
    [-37.9002908667, 175.4835936167, "2"],
    [-37.9003859333, 175.4839906667, "4"],
    [-37.9007548667, 175.4840674, "5"],
    [-37.9008090833, 175.4842714333, "7"],
    [-37.90027845, 175.4844867667, "8"],
    [-37.90087325, 175.4844819167, "9"],
    [-37.9010882333, 175.4852001, "15"],
    [-37.9007465833, 175.4850981333, "16"],
    [-37.9008384, 175.48536275, "18"],
    [-37.9009003833, 175.4836903667, "3A"],
    [-37.9006948, 175.48386545, "3"],
    [-37.8352114167, 175.3932620667, "614"],
    [-37.8358616, 175.3932373667, "607"],
    [-37.8527932167, 175.4481416, "66"],
    [-37.8535776833, 175.4477748333, "59"],
    [-37.8513053333, 175.4468875167, "88"],
    [-37.8367923167, 175.39439545, "597"],
    [-37.8356857333, 175.39511535, "594"],
    [-37.8338485, 175.3905351667, "644"],
    [-37.8342344833, 175.3914293833, "636"],
    [-37.8349352, 175.39110985, "631"],
    [-37.8340942167, 175.3894187167, "647"],
    [-37.8361288, 175.3943564333, "603"],
    [-37.835456, 175.3923533167, "621"],
    [-37.8316758833, 175.3851704333, "690"],
    [-37.82606465, 175.3729124, "823A"],
    [-37.8360247333, 175.40845075, "472"],
    [-37.8367576167, 175.4058547167, "499"],
    [-37.8307850333, 175.3833224167, "716"],
    [-37.8297911333, 175.3838338167, "722A"],
    [-37.82856305, 175.3853371, "722B"],
    [-37.8366530833, 175.4158296167, "407"],
    [-37.8343563333, 175.3899946667, "645"],
    [-37.83378605, 175.3887814833, "649"],
    [-37.8383438833, 175.4167502667, "403A"],
    [-37.8269138333, 175.3707719, "823B"],
    [-37.8262433167, 175.37126425, "823C"],
    [-37.8278735833, 175.3745076, "791C"],
    [-37.82803615, 175.3751116833, "791B"],
    [-37.8284354167, 175.3743400333, "791D"],
    [-37.8283312333, 175.3722626167, "803H"],
    [-37.8308135833, 175.3857800333, "700A"],
    [-37.83039575, 175.3861873667, "700B"],
    [-37.8297918, 175.3866039833, "700C"],
    [-37.8323622833, 175.3869592167, "680A"],
    [-37.8317271833, 175.3872918333, "680B"],
    [-37.8320544167, 175.3863078833, "680C"],
    [-37.8265114833, 175.3737262, "811A"],
    [-37.8268406667, 175.37269475, "811B"],
    [-37.8272920833, 175.3716203, "811C"],
    [-37.8537437333, 175.4489413667, "62"],
    [-37.83192005, 175.3841341833, "695"],
    [-37.8368657833, 175.4028889833, "525"],
    [-37.83376425, 175.3968886333, "590B"],
    [-37.8299130333, 175.3859233667, "702C"],
    [-37.8305810833, 175.38512625, "702B"],
    [-37.8360455333, 175.4081179333, "474"],
    [-37.8276760833, 175.3808082167, "756C"],
    [-37.8283299333, 175.3802092167, "756B"],
    [-37.85043345, 175.4461019, "100"],
    [-37.8297131833, 175.38286445, "724A"],
    [-37.82929325, 175.383521, "724B"],
    [-37.8369757, 175.3983033667, "571"],
    [-37.8376989333, 175.4166211, "403B"],
    [-37.8368311167, 175.4050104667, "505"],
    [-37.8412127667, 175.4050228833, "491A"],
    [-37.83852105, 175.4062947, "491B"],
    [-37.8338348833, 175.3934827333, "622B"],
    [-37.8330032, 175.3939467333, "622C"],
    [-37.8282068, 175.376844, "775A"],
    [-37.8295163167, 175.3755049667, "775B"],
    [-37.828404, 175.37718215, "775C"],
    [-37.8362426, 175.39711805, "578"],
    [-37.8361603, 175.39675875, "580"],
    [-37.8424267833, 175.4340512167, "232"],
    [-37.84114775, 175.4311295833, "272"],
    [-37.82872315, 175.3709866833, "803A"],
    [-37.8285930667, 175.3703004167, "803B"],
    [-37.8294768667, 175.3691337, "803C"],
    [-37.8292017, 175.36888125, "803D"],
    [-37.8285291333, 175.36580345, "803E"],
    [-37.8298995333, 175.3673114167, "803F"],
    [-37.8302568833, 175.36760835, "803G"],
    [-37.8267714167, 175.3742385167, "807"],
    [-37.83126665, 175.3844291833, "702A"],
    [-37.83016355, 175.3818740833, "734"],
    [-37.8296635167, 175.3807643167, "742"],
    [-37.82974665, 175.3798092, "747"],
    [-37.829114, 175.3799039833, "752"],
    [-37.8288072833, 175.3779985667, "765"],
    [-37.8278203667, 175.3760339333, "789"],
    [-37.8274609333, 175.3753562, "791A"],
    [-37.8320049, 175.39796425, "592B"],
    [-37.8304380667, 175.3993220667, "592C"],
    [-37.8323366667, 175.3982387333, "592D"],
    [-37.8332103167, 175.39666495, "590A"],
    [-37.8362232667, 175.4049506333, "504"],
    [-37.83689715, 175.4034307333, "523"],
    [-37.8362677, 175.4030851833, "522"],
    [-37.8363718333, 175.4003976167, "548"],
    [-37.836423, 175.3953457167, "585"],
    [-37.83596855, 175.3959414667, "586"],
    [-37.8392194, 175.4133888333, "439"],
    [-37.8367003667, 175.4102236167, "461"],
    [-37.83586315, 175.4121175333, "442"],
    [-37.8387438833, 175.4244664667, "318"],
    [-37.8382094333, 175.42266185, "346"],
    [-37.8366223667, 175.4173578167, "396"],
    [-37.8405799833, 175.4294097167, "284"],
    [-37.8409799, 175.4286117333, "289"],
    [-37.8404157, 175.4273133667, "291"],
    [-37.8448297, 175.4386074, "188"],
    [-37.8445996333, 175.4385307833, "190"],
    [-37.8445953833, 175.4381869167, "192"],
    [-37.8462362333, 175.4406972, "162"],
    [-37.8453950333, 175.4394750167, "180"],
    [-37.8561178167, 175.4522334, "11"],
    [-37.8560307, 175.4511923667, "17"],
    [-37.8361288, 175.4061807167, "492"],
    [-37.83609445, 175.40683275, "490"],
    [-37.8545275667, 175.44950565, "40"],
    [-37.8375230333, 175.4199872333, "372"],
    [-37.8388781167, 175.4226393667, "343"],
    [-37.83701825, 175.41844345, "378"],
    [-37.8371192833, 175.4187303167, "376"],
    [-37.8373785667, 175.4194973167, "374"],
    [-37.8367387167, 175.4085570167, "473"],
    [-37.8318677333, 175.3858444, "688"],
    [-37.8327873167, 175.3878064833, "674"],
    [-37.83304365, 175.3883507667, "664"],
    [-37.8366133333, 175.4130614667, "427"],
    [-37.8508733333, 175.44641935, "94"],
    [-37.8433085667, 175.4359371667, "212"],
    [-37.8376679667, 175.3994774833, "549"],
    [-37.8388004167, 175.3998009833, "549C"],
    [-37.8369648167, 175.40033875, "549B"],
    [-37.8376661833, 175.3999770333, "549A"],
    [-37.8368055667, 175.3968196667, "575"],
    [-37.8369513667, 175.39729965, "573"],
    [-37.836328, 175.3975344167, "576"],
    [-37.8419685667, 175.4332863667, "240"],
    [-37.83147865, 175.3703224333, "781A"],
    [-37.8302962167, 175.3727004833, "781B"],
    [-37.8300511833, 175.3734676833, "781C"],
    [-37.9155750333, 175.4788872333, "103"],
    [-37.9080710333, 175.4815503833, "39C"],
    [-37.9081354167, 175.48171275, "39B"],
    [-37.90819845, 175.4819203833, "39A"],
    [-37.9165609667, 175.4784770333, "115"],
    [-37.91497395, 175.4792572167, "99"],
    [-37.9096164833, 175.4817164167, "49"],
    [-37.9116786667, 175.48074935, "69"],
    [-37.9140226, 175.479658, "85"],
    [-37.9069150833, 175.4829900333, "27A"],
    [-37.9069469833, 175.4828211667, "27B"],
    [-37.9141799333, 175.4796010667, "87"],
    [-37.9148269, 175.4793132333, "95"],
    [-37.9148061667, 175.47892315, "97"],
    [-37.9052287833, 175.4834456667, "7A"],
    [-37.9157397167, 175.4785532167, "107A"],
    [-37.9164115167, 175.4783404167, "113"],
    [-37.9162113333, 175.4786140333, "109"],
    [-37.9159243667, 175.4787397833, "107B"],
    [-37.91564195, 175.4783057333, "107"],
    [-37.9095836167, 175.48142755, "49A"],
    [-37.9097563, 175.4813824667, "51A"],
    [-37.9142505167, 175.47917545, "89A"],
    [-37.9143203667, 175.4795241, "89"],
    [-37.9143582167, 175.4791171833, "91A"],
    [-37.90809605, 175.4820482833, "37A"],
    [-37.9080426833, 175.4818123, "37B"],
    [-37.9079928333, 175.4816048, "37C"],
    [-37.9144982167, 175.4794426833, "91"],
    [-37.9146732833, 175.4793797, "93"],
    [-37.9046052333, 175.48406395, "1"],
    [-37.90479665, 175.4839646833, "3"],
    [-37.9049845333, 175.4838759833, "5"],
    [-37.9061106, 175.4833581667, "17"],
    [-37.9062431667, 175.4833112333, "19"],
    [-37.9063920333, 175.4832255333, "21"],
    [-37.9065708, 175.48314765, "23"],
    [-37.9067455333, 175.4830679333, "25"],
    [-37.90686575, 175.4825972667, "29"],
    [-37.9053759667, 175.4837128167, "11"],
    [-37.9055325, 175.4836456167, "13"],
    [-37.9057146333, 175.4835634667, "15"],
    [-37.9080300333, 175.4824985, "35"],
    [-37.9081798333, 175.4824187833, "37"],
    [-37.90842625, 175.4822687667, "39"],
    [-37.90871305, 175.4821525333, "43"],
    [-37.9071454167, 175.4828962333, "31"],
    [-37.90945405, 175.4818068167, "47"],
    [-37.9097787167, 175.4816407833, "51"],
    [-37.9101221667, 175.48147745, "55"],
    [-37.9099619333, 175.4815613833, "53"],
    [-37.9108703, 175.48113905, "57"],
    [-37.9111010167, 175.4810227833, "61"],
    [-37.9113033333, 175.4806476167, "63A"],
    [-37.9113063333, 175.4809305333, "63"],
    [-37.9113486333, 175.48054435, "65"],
    [-37.9115162333, 175.4808384167, "67"],
    [-37.9118321, 175.4806828667, "71"],
    [-37.912005, 175.4805931333, "73"],
    [-37.9126924, 175.4801856167, "75"],
    [-37.9128904333, 175.48013955, "77"],
    [-37.91306105, 175.4801038667, "79"],
    [-37.91323275, 175.4800307667, "81"],
    [-37.90504305, 175.48350075, "7"],
    [-37.9161411, 175.4791161, "104"],
    [-37.9052017167, 175.4837928833, "9"],
    [-37.9048593333, 175.4837002833, "5A"],
    [-37.9134008167, 175.4799760333, "83"],
    [-37.91608025, 175.4781871, "111A"],
    [-37.9159769333, 175.4778862, "111B"],
    [-37.91609255, 175.4778227833, "111C"],
    [-37.9162477333, 175.4781089667, "111D"],
    [-37.8954434833, 175.47689195, "1"],
    [-37.7968509833, 175.4409205333, "218"],
    [-37.7967954, 175.4415974333, "226"],
    [-37.79061135, 175.4311808833, "105"],
    [-37.7936930167, 175.4323678167, "144"],
    [-37.7936793, 175.4341171833, "169"],
    [-37.7906754167, 175.4300550333, "101"],
    [-37.7923387667, 175.4305234833, "114"],
    [-37.7921506667, 175.4312033333, "119"],
    [-37.79638115, 175.44350555, "244"],
    [-37.9026378, 175.4249371167, "6"],
    [-37.9018287167, 175.4251090167, "15"],
    [-37.9005140167, 175.4267575167, "32"],
    [-37.90030005, 175.4272810167, "36"],
    [-37.9000367833, 175.4266413167, "1/45"],
    [-37.8999172167, 175.4269248667, "2/45"],
    [-37.8998128167, 175.42722285, "3/45"],
    [-37.8997664167, 175.4278138333, "46"],
    [-37.89874045, 175.42933485, "47"],
    [-37.90246715, 175.4251130833, "8"],
    [-37.98415945, 175.5440391833, "1/398"],
    [-37.9842023, 175.5446759833, "398"],
    [-37.9673053833, 175.5493618, "1/200"],
    [-37.9595488167, 175.5503643667, "2/94"],
    [-37.9548066833, 175.5547442167, "41"],
    [-37.975043, 175.5502804667, "288"],
    [-37.9674483333, 175.54948405, "2/200"],
    [-37.9675936167, 175.54960055, "3/200"],
    [-37.9536896833, 175.5558200833, "21"],
    [-37.9537523333, 175.5551846667, "24"],
    [-37.9758721, 175.55151395, "297"],
    [-37.9715911333, 175.5505416, "246"],
    [-37.97615305, 175.5531409833, "1/299"],
    [-37.9759959833, 175.5531752167, "2/299"],
    [-37.9762314333, 175.5517778833, "3/299"],
    [-37.9789959667, 175.5511051167, "1/317"],
    [-37.9791978667, 175.5509703167, "2/317"],
    [-37.97016405, 175.5511682333, "233"],
    [-37.9840100667, 175.5422511833, "3/398"],
    [-37.9832081667, 175.5409176, "4/398"],
    [-37.9626150333, 175.5485202333, "1/142"],
    [-37.9620708667, 175.5493090333, "139"],
    [-37.9646945333, 175.5484742, "164"],
    [-37.95884865, 175.5515776333, "91"],
    [-37.9588039667, 175.5510064, "1/94"],
    [-37.9794108833, 175.5497014333, "332"],
    [-37.9806783167, 175.5477771, "352"],
    [-37.8757744167, 175.46972585, "1"],
    [-37.8758043667, 175.4700843, "3"],
    [-37.8758559833, 175.4703261667, "5"],
    [-37.8759855667, 175.4703921667, "7"],
    [-37.8761207333, 175.4703036833, "9"],
    [-37.8763731833, 175.4703581, "8B"],
    [-37.8763879, 175.4701746167, "8A"],
    [-37.8760971833, 175.4699428, "6"],
    [-37.8763947, 175.46978015, "4"],
    [-37.8760231167, 175.4695721, "2"],
    [-37.84887105, 175.5612401333, "268"],
    [-37.8480716667, 175.5605471, "1/271"],
    [-37.8481743833, 175.5599216, "2/271"],
    [-37.8475651333, 175.5602482833, "273"],
    [-37.8549548833, 175.5645155167, "187"],
    [-37.8590531333, 175.56929455, "111"],
    [-37.8579502, 175.5697828667, "1/128"],
    [-37.8577433333, 175.5697812167, "2/128"],
    [-37.8663423167, 175.5687757833, "25"],
    [-37.8659378833, 175.5701593333, "1/32"],
    [-37.8656144667, 175.5703594167, "2/32"],
    [-37.9075306667, 175.4735409, "8"],
    [-37.90741835, 175.4736250333, "12"],
    [-37.9077710167, 175.4736747, "3"],
    [-37.90756245, 175.4735306833, "7"],
    [-37.90776065, 175.4736345167, "4"],
    [-37.9076790833, 175.4734552333, "6"],
    [-37.90770165, 175.4734532167, "5"],
    [-37.90742555, 175.4736053833, "11"],
    [-37.9074725833, 175.4739170833, "14"],
    [-37.9074575333, 175.47388525, "13"],
    [-37.90752205, 175.4737226167, "10"],
    [-37.9075427667, 175.4737034667, "9"],
    [-37.9078406167, 175.4738848333, "1"],
    [-37.9078192667, 175.4738328667, "2"],
    [-37.9079175667, 175.4742687333, "19"],
    [-37.9076409333, 175.4739459, "15"],
    [-37.9077643333, 175.4742689, "18"],
    [-37.9077539833, 175.4742287, "17"],
    [-37.9076577333, 175.47400055, "16"],
    [-37.9079030333, 175.4742141667, "20"],
    [-37.9156256167, 175.4748749833, "78"],
    [-37.9146128333, 175.4721344167, "56A"],
    [-37.9151661833, 175.4733835167, "66"],
    [-37.9140138, 175.4694897, "30"],
    [-37.9140857167, 175.46969035, "32"],
    [-37.9144033, 175.4695158, "33"],
    [-37.91414165, 175.4698978167, "34"],
    [-37.91444875, 175.4697295833, "35"],
    [-37.9142653833, 175.4703260667, "38"],
    [-37.9142211667, 175.4701128667, "36"],
    [-37.9155440833, 175.4732913, "65"],
    [-37.9134283, 175.4674369333, "14"],
    [-37.9155934667, 175.4735220833, "67"],
    [-37.9151737667, 175.4721487333, "57"],
    [-37.9155787333, 175.4746912167, "76"],
    [-37.9143332167, 175.4693118167, "29"],
    [-37.9151155, 175.4718793167, "55"],
    [-37.9134783167, 175.4676862167, "16"],
    [-37.91350365, 175.4678403, "18"],
    [-37.9135371667, 175.4680652, "20"],
    [-37.9135827167, 175.4682467, "22"],
    [-37.9136676, 175.4684140667, "24"],
    [-37.91375, 175.4685284833, "26"],
    [-37.9144983333, 175.4699386333, "39"],
    [-37.9145579833, 175.4701247833, "41"],
    [-37.9146344333, 175.4703215833, "43"],
    [-37.9140692167, 175.4706085833, "46"],
    [-37.91469445, 175.47051275, "47"],
    [-37.9143359333, 175.4705744833, "48"],
    [-37.9147432833, 175.47069995, "49"],
    [-37.9146982, 175.4717894167, "54"],
    [-37.9147643333, 175.47204645, "56"],
    [-37.91485235, 175.4723157167, "58"],
    [-37.9149395167, 175.4725939833, "60"],
    [-37.9144000333, 175.4707812, "50"],
    [-37.9148043167, 175.4709096, "51"],
    [-37.9157513167, 175.4752532333, "82"],
    [-37.9158039333, 175.47545195, "84"],
    [-37.9156901667, 175.4750640167, "80"],
    [-37.9158563833, 175.4756482667, "86"],
    [-37.91508355, 175.4731087, "64"],
    [-37.9154807667, 175.4730812167, "63"],
    [-37.9154616667, 175.4742882833, "72"],
    [-37.91552175, 175.47449895, "74"],
    [-37.9790357333, 175.4624267667, "19"],
    [-37.9791358667, 175.4611471, "6"],
    [-37.9797030333, 175.4636025333, "30"],
    [-37.9790060167, 175.4621910833, "17"],
    [-37.9786417667, 175.4608476833, "5"],
    [-37.9804888333, 175.4691719, "83"],
    [-37.9793757333, 175.4644864667, "37"],
    [-37.9794654667, 175.4649678833, "39"],
    [-37.9815936, 175.4721696167, "104"],
    [-37.9806346333, 175.46753305, "62"],
    [-37.9801957667, 175.4694512667, "1/83"],
    [-37.9813943, 175.4789249667, "2/172"],
    [-37.9811831333, 175.4791219167, "1/172"],
    [-37.9815603333, 175.4787492833, "3/172"],
    [-37.9817079333, 175.4785843667, "4/172"],
    [-37.98098455, 175.4692836, "84"],
    [-37.9797661167, 175.4828635833, "209"],
    [-37.9819302167, 175.4751814833, "130"],
    [-37.9810331167, 175.4792768333, "172"],
    [-37.9791101833, 175.4807109667, "193"],
    [-37.9211995833, 175.54297615, "118"],
    [-37.9213446, 175.5421832, "105"],
    [-37.9211681167, 175.54216685, "107"],
    [-37.9209082667, 175.5425332333, "111"],
    [-37.9208103667, 175.542655, "113"],
    [-37.92117155, 175.5424739667, "109"],
    [-37.9206148667, 175.5429439167, "119"],
    [-37.9207782667, 175.5431801, "117"],
    [-37.9210005833, 175.542809, "115"],
    [-37.9223620333, 175.5419011, "44"],
    [-37.9221513667, 175.5414861833, "22"],
    [-37.9220122833, 175.54171955, "48"],
    [-37.9214541667, 175.5419499167, "103"],
    [-37.9216856333, 175.54226385, "110"],
    [-37.92188255, 175.54189345, "70"],
    [-37.9216037833, 175.5417236667, "79"],
    [-37.9217873667, 175.5420768833, "90"],
    [-37.9207292667, 175.5435594333, "127"],
    [-37.9215061833, 175.5424147833, "112"],
    [-37.9214096333, 175.5425683833, "114"],
    [-37.9212674167, 175.5427841667, "116"],
    [-37.9211160833, 175.5431952167, "120"],
    [-37.9210373167, 175.5434004167, "122"],
    [-37.9209575167, 175.5435602167, "124"],
    [-37.9206745667, 175.5433710667, "125"],
    [-37.92082745, 175.54361115, "128"],
    [-37.9209216, 175.5437402667, "126"],
    [-37.9205988167, 175.5431733333, "123"],
    [-37.9204654167, 175.54300295, "121"],
    [-37.9059849833, 175.4685779333, "10"],
    [-37.9063778167, 175.4688591, "11"],
    [-37.9057737333, 175.4693218333, "2"],
    [-37.9064842, 175.4693450167, "7"],
    [-37.9060801333, 175.46881255, "12"],
    [-37.9060230333, 175.46940395, "1"],
    [-37.9060816167, 175.4691977833, "3"],
    [-37.90581185, 175.4691003833, "4"],
    [-37.9063729333, 175.4693653667, "5"],
    [-37.9058748833, 175.4689197333, "6"],
    [-37.90586325, 175.46860955, "8"],
    [-37.9064269833, 175.4690855667, "9"],
    [-37.8955635667, 175.4714488333, "3"],
    [-37.89574055, 175.4716702667, "6"],
    [-37.8760291333, 175.4752209667, "4"],
    [-37.8761012667, 175.4756677333, "5"],
    [-37.8761172, 175.4749063833, "6A"],
    [-37.8762485667, 175.4748657167, "6B"],
    [-37.8765363167, 175.4750690167, "10"],
    [-37.87633255, 175.4751297667, "8"],
    [-37.8767972333, 175.4754502, "13"],
    [-37.8767630833, 175.4749863833, "12"],
    [-37.87581215, 175.4752698833, "2"],
    [-37.8757609167, 175.4757446833, "1"],
    [-37.8774312833, 175.4746756833, "25"],
    [-37.87757445, 175.4749078, "23"],
    [-37.8773315167, 175.4749104, "21"],
    [-37.8772196833, 175.4750822833, "19"],
    [-37.8771222167, 175.47521495, "17"],
    [-37.8769752, 175.4753515167, "15"],
    [-37.8766353, 175.47550835, "11"],
    [-37.8764627667, 175.4755687833, "9"],
    [-37.8762885333, 175.4756105, "7"],
    [-37.8759247333, 175.4757173667, "3"],
    [-37.8769794333, 175.4747672167, "14"],
    [-37.97891525, 175.4601520333, "772"],
    [-37.9464645333, 175.4822205167, "329"],
    [-37.9470361333, 175.4829135, "337"],
    [-37.9713491167, 175.4612835833, "684"],
    [-37.9615547167, 175.4636732, "578"],
    [-37.9642195, 175.4617228, "606"],
    [-37.9214648167, 175.4783231833, "49"],
    [-37.9212708833, 175.47781485, "1/49"],
    [-37.9230265, 175.478089, "65"],
    [-37.9669955167, 175.46143295, "653"],
    [-37.9801441, 175.4596936833, "784"],
    [-37.91909305, 175.4782088, "27"],
    [-37.9278700667, 175.4760814333, "122"],
    [-37.9393246667, 175.4798381833, "256"],
    [-37.98099395, 175.4594168167, "788"],
    [-37.9235198, 175.4765764833, "76"],
    [-37.9838248833, 175.4507092333, "885"],
    [-37.9840650667, 175.4492086167, "893"],
    [-37.9819271833, 175.4584667833, "812"],
    [-37.97680425, 175.4605180667, "746"],
    [-37.9772555, 175.4612509, "751"],
    [-37.9553357833, 175.4689185833, "484"],
    [-37.9549016, 175.4705773167, "469"],
    [-37.9549819, 175.4681984167, "492"],
    [-37.95610765, 175.4687586833, "495"],
    [-37.9558325167, 175.4681527833, "496"],
    [-37.9563786, 175.4673479667, "506"],
    [-37.9588897333, 175.4662872333, "549"],
    [-37.9374805167, 175.4792935833, "232"],
    [-37.9385204667, 175.4796240833, "250"],
    [-37.9418827167, 175.48053625, "282"],
    [-37.9422215667, 175.4814613667, "291"],
    [-37.9452781, 175.4815002, "318"],
    [-37.9482466667, 175.4790639833, "372"],
    [-37.9497215167, 175.47691875, "396"],
    [-37.9341688833, 175.4782591167, "196"],
    [-37.9265146833, 175.4765383667, "109"],
    [-37.93050445, 175.4778804333, "151"],
    [-37.9283181, 175.4771124167, "129"],
    [-37.9251162, 175.4762160667, "98"],
    [-37.92343355, 175.4771558167, "73"],
    [-37.9239441667, 175.4794231667, "75"],
    [-37.9241087667, 175.4769972833, "83"],
    [-37.9222823667, 175.4774759333, "61"],
    [-37.9199369167, 175.4774060333, "34"],
    [-37.9203899333, 175.475518, "36"],
    [-37.9203777167, 175.4773256, "40"],
    [-37.9206612167, 175.4765307833, "42"],
    [-37.9210448, 175.4771433833, "44"],
    [-37.9220389167, 175.47755095, "57"],
    [-37.91929535, 175.4775611167, "26"],
    [-37.9216718667, 175.4775874667, "55"],
    [-37.98317275, 175.4515617, "874"],
    [-37.9834542667, 175.449681, "890"],
    [-37.94112955, 175.48040145, "278"],
    [-37.9511382833, 175.4768400333, "401"],
    [-37.9529536833, 175.4734404167, "447"],
    [-37.9818127667, 175.4589793667, "794"],
    [-37.9216345833, 175.4771334167, "50"],
    [-37.9817718333, 175.4597500333, "789"],
    [-37.8840469167, 175.4595505333, "3A"],
    [-37.8836735833, 175.4604158333, "4B"],
    [-37.88403835, 175.4600429333, "5"],
    [-37.8834882, 175.4601379, "1A"],
    [-37.88367125, 175.4597893667, "1"],
    [-37.8835863, 175.4604458167, "2A"],
    [-37.8835968, 175.4601401333, "2"],
    [-37.88386135, 175.4597867, "3"],
    [-37.88376075, 175.4601527667, "4"],
    [-37.8838918833, 175.4601641667, "6"],
    [-37.8842726667, 175.4597851667, "5A"],
    [-37.8840725833, 175.4598049333, "3B"],
    [-37.8976647333, 175.4710761333, "3"],
    [-37.8975512333, 175.4708644667, "7"],
    [-37.8973241167, 175.4703941833, "15"],
    [-37.8972415667, 175.4702575667, "17"],
    [-37.8973903333, 175.4705850167, "13"],
    [-37.8974731667, 175.4707213, "9"],
    [-37.8976014, 175.4709784167, "5"],
    [-37.8973658833, 175.4713826333, "1"],
    [-37.88263055, 175.4789374667, "2"],
    [-37.88295785, 175.4787557167, "3"],
    [-37.88262705, 175.4787408333, "4"],
    [-37.8828655833, 175.47856665, "5"],
    [-37.8826968, 175.4785708667, "6"],
    [-37.8829381167, 175.4790952, "1"],
    [-37.8829405833, 175.4789477, "1A"],
    [-37.9471062833, 175.4443811, "285"],
    [-37.9482693333, 175.4618783667, "129"],
    [-37.9477489, 175.4616306833, "134"],
    [-37.94778825, 175.4623992333, "120"],
    [-37.9476318333, 175.4527723667, "205"],
    [-37.9487271, 175.47377555, "22"],
    [-37.9483278667, 175.4699560333, "64"],
    [-37.9505486833, 175.475507, "3"],
    [-37.9471956833, 175.45408385, "192"],
    [-37.9474878167, 175.4494432167, "241"],
    [-37.9465419167, 175.4494655333, "240"],
    [-37.8980432167, 175.4818800667, "20"],
    [-37.8980799167, 175.4813788167, "11"],
    [-37.8979071, 175.4814689833, "11A"],
    [-37.8976527, 175.4820540667, "10"],
    [-37.8978225833, 175.48198855, "12"],
    [-37.8980157833, 175.4823010833, "14"],
    [-37.8981133, 175.4825153333, "18"],
    [-37.8972657167, 175.48179755, "1"],
    [-37.8982001167, 175.4818174667, "22"],
    [-37.89831945, 175.48166055, "26"],
    [-37.8974300667, 175.4821601, "2"],
    [-37.8976037833, 175.4823142833, "6"],
    [-37.8975959167, 175.4816213167, "7"],
    [-37.8977532667, 175.48153515, "9"],
    [-37.8985379, 175.4825481, "24"],
    [-37.8966536667, 175.4826586833, "25A"],
    [-37.8984072, 175.48528765, "54A"],
    [-37.8960960167, 175.4812310167, "5"],
    [-37.8976620167, 175.4837889667, "38"],
    [-37.8957596833, 175.4808671833, "1"],
    [-37.896049, 175.4808353333, "1A"],
    [-37.89630705, 175.4808317833, "3"],
    [-37.8980094, 175.4834140167, "34"],
    [-37.89804835, 175.4835438167, "36"],
    [-37.8978337, 175.483244, "30"],
    [-37.8977234667, 175.4828271167, "26"],
    [-37.8974671333, 175.4832206833, "28"],
    [-37.89729555, 175.4826933167, "22"],
    [-37.8982734, 175.4859548167, "60"],
    [-37.8993387167, 175.4873577333, "76"],
    [-37.8971479167, 175.4808783833, "10"],
    [-37.8959557167, 175.48164725, "11"],
    [-37.8973392833, 175.4807942, "12"],
    [-37.8973916333, 175.4808756, "14"],
    [-37.8966921833, 175.4822478333, "21"],
    [-37.89642605, 175.4824713833, "23"],
    [-37.8967609167, 175.4825135833, "25"],
    [-37.8971820833, 175.4809704667, "16"],
    [-37.89693775, 175.4814169833, "18A"],
    [-37.8968612333, 175.4812093333, "18"],
    [-37.8968348, 175.4827666333, "27"],
    [-37.8969158833, 175.4829914167, "29"],
    [-37.8969838333, 175.4832029333, "31"],
    [-37.89760075, 175.4835397, "32"],
    [-37.8970568167, 175.48351615, "33"],
    [-37.8967365, 175.4807273, "2"],
    [-37.8979339167, 175.4848533, "44"],
    [-37.8967854, 175.4809565833, "4"],
    [-37.8958402333, 175.481278, "7"],
    [-37.8964383667, 175.4812642667, "9"],
    [-37.8980381167, 175.4851460667, "48"],
    [-37.8985301167, 175.4851492, "52"],
    [-37.8981529, 175.4855380167, "54"],
    [-37.8986448333, 175.4855899833, "56"],
    [-37.8985807833, 175.4870328333, "66"],
    [-37.8986987667, 175.4873079333, "68"],
    [-37.8987788167, 175.4875430667, "74"],
    [-37.89890085, 175.4879704667, "80"],
    [-37.8966231333, 175.4820502667, "17A"],
    [-37.8964502667, 175.4821239667, "17B"],
    [-37.896275, 175.48221365, "17"],
    [-37.8964864333, 175.4816180167, "15"],
    [-37.89829765, 175.4849233667, "48A"],
    [-37.8983503, 175.4862882, "62"],
    [-37.8963564333, 175.4817611, "15A"],
    [-37.8961816167, 175.4819250833, "15B"],
    [-37.8838324667, 175.4758307667, "1"],
    [-37.8836433833, 175.4758399333, "2"],
    [-37.8833977167, 175.47575535, "3"],
    [-37.8833314667, 175.4755896167, "4"],
    [-37.8834651, 175.4752073, "5A"],
    [-37.8833988833, 175.4754131, "5"],
    [-37.8836138833, 175.4754014333, "6"],
    [-37.88376315, 175.4754688833, "7"],
    [-37.8453489, 175.4520246, "12"],
    [-37.8453374333, 175.44998695, "30"],
    [-37.8456579, 175.4496963667, "33"],
    [-37.84527125, 175.4440318, "40"],
    [-37.8447595167, 175.4494073667, "38"],
    [-37.8453093333, 175.4489722667, "40"],
    [-37.8453195333, 175.4515149667, "16"],
    [-37.8833522167, 175.4662158833, "2/13"],
    [-37.8838213, 175.46524815, "10A"],
    [-37.88380855, 175.46613485, "7A"],
    [-37.8832769, 175.4662041167, "1/13"],
    [-37.88379275, 175.4654513833, "10"],
    [-37.88377815, 175.4658082667, "11"],
    [-37.88342395, 175.4662276833, "3/13"],
    [-37.883518, 175.4662264667, "4/13"],
    [-37.8836896667, 175.4656703833, "14"],
    [-37.8834471333, 175.4658730667, "15"],
    [-37.88344295, 175.46574735, "16"],
    [-37.8843819333, 175.4658316167, "1"],
    [-37.8844031667, 175.4655400167, "2"],
    [-37.8841441667, 175.4660546, "3A"],
    [-37.8841592333, 175.46611295, "3B"],
    [-37.8842008167, 175.4658206, "3"],
    [-37.8841960167, 175.4655438833, "4"],
    [-37.8840714, 175.4658066333, "5"],
    [-37.8840438, 175.4655440333, "6"],
    [-37.8839425167, 175.46582275, "7"],
    [-37.8839567167, 175.4654131167, "8"],
    [-37.8837516, 175.4660999833, "9"],
    [-37.883711, 175.4655393167, "12"],
    [-37.9413734667, 175.4995142833, "306"],
    [-37.9264553167, 175.4927426, "101"],
    [-37.9263942667, 175.495421, "93"],
    [-37.9367796667, 175.49396525, "218"],
    [-37.9306420333, 175.4927391167, "147"],
    [-37.9314740333, 175.4922045333, "156"],
    [-37.9346698333, 175.4939321167, "195"],
    [-37.9210469167, 175.49473535, "45"],
    [-37.9244517667, 175.4930819833, "76"],
    [-37.92482195, 175.4937379833, "85"],
    [-37.9278428667, 175.49133405, "116"],
    [-37.928097, 175.4920060333, "117"],
    [-37.9259406, 175.4921851333, "98"],
    [-37.9432639333, 175.5024320833, "321"],
    [-37.9478774167, 175.50590725, "360"],
    [-37.9006717, 175.3709368333, "24"],
    [-37.90793765, 175.3650150333, "121"],
    [-37.9056018833, 175.3671315333, "89"],
    [-37.9073516833, 175.3655189333, "119"],
    [-37.8986494833, 175.4611173667, "1"],
    [-37.8984617833, 175.4610480667, "3"],
    [-37.8983073667, 175.4609003333, "5"],
    [-37.8985554833, 175.4614893833, "2"],
    [-37.8983680333, 175.4614087, "4"],
    [-37.8981331333, 175.4608315333, "7"],
    [-37.8982140167, 175.4613434833, "6"],
    [-37.8979873167, 175.4611021667, "10"],
    [-37.8980203833, 175.4609355833, "9"],
    [-37.89806, 175.4612782333, "8"],
    [-37.9028616833, 175.4335225667, "29"],
    [-37.9031164833, 175.4331062, "27"],
    [-37.9017570667, 175.4336130833, "43"],
    [-37.9018962667, 175.4342030167, "42"],
    [-37.9035645333, 175.4334544, "21"],
    [-37.8997075167, 175.4313605167, "63"],
    [-37.9028940667, 175.4339966333, "28"],
    [-37.90126025, 175.43430315, "54"],
    [-37.9009420667, 175.4335351333, "57"],
    [-37.8997543667, 175.4328163667, "67"],
    [-37.9042664833, 175.4334384833, "9"],
    [-37.9004958, 175.4365008, "56"],
    [-37.8999357667, 175.4364970167, "58"],
    [-37.9193787167, 175.4035627667, "29"],
    [-37.9187184, 175.40134295, "50"],
    [-37.91970595, 175.4043742667, "21"],
    [-37.93012645, 175.3979479333, "179"],
    [-37.9287776167, 175.3984838, "167"],
    [-37.9244404833, 175.40003235, "125"],
    [-37.9182969, 175.4015440667, "46"],
    [-37.9198358, 175.4009195, "62"],
    [-37.9214928833, 175.4003147333, "82"],
    [-37.9276005833, 175.3979560333, "156"],
    [-37.9090980833, 175.47152255, "112B"],
    [-37.9100087667, 175.47027605, "121A"],
    [-37.90817245, 175.47139345, "103"],
    [-37.90884805, 175.4719748, "108A"],
    [-37.9089414167, 175.4722395833, "108B"],
    [-37.9084711833, 175.47177935, "104"],
    [-37.90863345, 175.47171425, "106"],
    [-37.9083213167, 175.47131235, "105"],
    [-37.9090004, 175.472447, "108C"],
    [-37.9028464833, 175.4753390167, "26B"],
    [-37.9078277833, 175.4723944833, "4/96"],
    [-37.90357775, 175.4740898333, "36"],
    [-37.90385065, 175.473554, "35A"],
    [-37.9035803667, 175.47369605, "35"],
    [-37.90815455, 175.4719365833, "100"],
    [-37.91190955, 175.4702316833, "138"],
    [-37.90756, 175.4722275333, "7/96"],
    [-37.9089549167, 175.47103335, "111"],
    [-37.9044076167, 175.4737216, "42"],
    [-37.9011103, 175.4747561, "13"],
    [-37.9113504333, 175.46916605, "135B"],
    [-37.90916025, 175.4717170833, "112A"],
    [-37.9104814167, 175.4713397667, "124B"],
    [-37.9113419667, 175.4696552833, "133A"],
    [-37.9116247167, 175.4707302833, "134A"],
    [-37.9118128833, 175.4706304, "134B"],
    [-37.9117777333, 175.46919275, "139A"],
    [-37.91172915, 175.4689741333, "139B"],
    [-37.9091821167, 175.47238525, "110C"],
    [-37.9112748167, 175.46989875, "131A"],
    [-37.9112112333, 175.46968315, "131B"],
    [-37.9018407333, 175.474509, "17"],
    [-37.9021059167, 175.4747859167, "18"],
    [-37.9022214333, 175.4747533667, "20"],
    [-37.9021081667, 175.4743658667, "21"],
    [-37.9024045833, 175.4746604333, "22"],
    [-37.90227905, 175.4742904, "23"],
    [-37.9025434333, 175.4745909167, "24"],
    [-37.9033884667, 175.4737883, "33"],
    [-37.9029568833, 175.4739659833, "31"],
    [-37.90244755, 175.4742011333, "25"],
    [-37.9026128, 175.4741282667, "27"],
    [-37.9027832333, 175.4740469833, "29"],
    [-37.9027372833, 175.4744949833, "30"],
    [-37.9028963667, 175.4744151167, "32"],
    [-37.9039784167, 175.4735005167, "39"],
    [-37.9041466, 175.47341055, "41"],
    [-37.9043180167, 175.4733317667, "43"],
    [-37.9044306, 175.4732717, "45"],
    [-37.9002813333, 175.4746537333, "3A"],
    [-37.9003363333, 175.4746345833, "3B"],
    [-37.9003208833, 175.4742427, "3C"],
    [-37.9004106, 175.47457215, "3D"],
    [-37.9008182333, 175.4749564333, "7"],
    [-37.9008622667, 175.4745689333, "9A"],
    [-37.9087553333, 175.47168745, "108"],
    [-37.9087847167, 175.47111335, "109"],
    [-37.9090482, 175.4718688667, "110A"],
    [-37.9089821833, 175.47162705, "110"],
    [-37.9097564, 175.47064845, "117"],
    [-37.90991065, 175.4711398333, "118"],
    [-37.9098192, 175.4703204, "119A"],
    [-37.9100781833, 175.4710667, "120"],
    [-37.9102616, 175.4713288833, "120A"],
    [-37.91019675, 175.4704249667, "121"],
    [-37.9102786333, 175.47095955, "122"],
    [-37.91061325, 175.47114525, "124A"],
    [-37.9104595333, 175.4709259167, "124"],
    [-37.9103273167, 175.4703685833, "125"],
    [-37.9009658333, 175.47489005, "9"],
    [-37.9106314167, 175.47081795, "126"],
    [-37.9105098833, 175.4702934833, "127"],
    [-37.9115283, 175.47038715, "132"],
    [-37.9114078, 175.4698388833, "133"],
    [-37.9117353833, 175.4702887167, "136"],
    [-37.91165515, 175.4697282333, "137"],
    [-37.91209905, 175.4701214833, "140"],
    [-37.91192095, 175.46961505, "141"],
    [-37.91209585, 175.4695346667, "143"],
    [-37.91223925, 175.4694837833, "145"],
    [-37.9129544, 175.46972655, "148"],
    [-37.9127850833, 175.46918905, "149"],
    [-37.9131046167, 175.4696231333, "150"],
    [-37.9129241667, 175.4691591333, "151"],
    [-37.9133420333, 175.4695050167, "152"],
    [-37.9134355667, 175.4694691333, "154"],
    [-37.9136254167, 175.4688124833, "155"],
    [-37.9135736667, 175.4693978333, "156"],
    [-37.9137485167, 175.4693549667, "158"],
    [-37.9144754, 175.46902505, "164"],
    [-37.9147488833, 175.4695174667, "166"],
    [-37.9147467167, 175.4689613833, "168"],
    [-37.9053532, 175.4735344167, "44A"],
    [-37.9052717667, 175.4733045167, "44"],
    [-37.90506265, 175.4729767833, "49"],
    [-37.9052035667, 175.4729156167, "51"],
    [-37.9053496, 175.4728617833, "53"],
    [-37.9054862667, 175.47279975, "55"],
    [-37.9071557, 175.47249445, "88"],
    [-37.9011584833, 175.47587265, "10"],
    [-37.9012260167, 175.4757750333, "12"],
    [-37.9011779333, 175.47526505, "14"],
    [-37.9024628, 175.4750374833, "22A"],
    [-37.9024647, 175.4751844167, "22B"],
    [-37.9004774333, 175.4751149333, "1"],
    [-37.9028335, 175.4750389333, "28"],
    [-37.9004664333, 175.4755579667, "2"],
    [-37.9005692, 175.4755242167, "4"],
    [-37.9006539333, 175.4750368333, "5"],
    [-37.9010841833, 175.4755968, "8A"],
    [-37.9008984167, 175.4753584833, "8"],
    [-37.9091240667, 175.4721442833, "110B"],
    [-37.9097632833, 175.47034635, "117A"],
    [-37.9082253333, 175.4719109833, "102"],
    [-37.9114097833, 175.4693441333, "135A"],
    [-37.9112057333, 175.4692141667, "135C"],
    [-37.91167365, 175.4687884833, "139D"],
    [-37.9112668833, 175.4694056333, "135"],
    [-37.9111444667, 175.4690280333, "135D"],
    [-37.9115951667, 175.4692708167, "139"],
    [-37.9115359, 175.4690900833, "139C"],
    [-37.9106014, 175.4702607333, "129"],
    [-37.9076115833, 175.4723767833, "98"],
    [-37.9075872333, 175.4722996, "8/96"],
    [-37.9076397833, 175.4724662167, "10/96"],
    [-37.9076588167, 175.4725362667, "11/96"],
    [-37.9076818333, 175.47261165, "12/96"],
    [-37.90787275, 175.4725516833, "6/96"],
    [-37.9078548167, 175.4724749, "5/96"],
    [-37.9078033833, 175.47231415, "3/96"],
    [-37.9077763833, 175.4722320833, "2/96"],
    [-37.9077493833, 175.4721500167, "1/96"],
    [-37.9027466667, 175.4750991167, "26A"],
    [-37.9013304167, 175.4746607667, "13A"],
    [-37.9012675, 175.4744082333, "13B"],
    [-37.9010857333, 175.4744788167, "13C"],
    [-37.91033795, 175.47011845, "125A"],
    [-37.90225545, 175.4739976167, "23A"],
    [-37.9099696333, 175.4705395667, "119"],
    [-37.9152684167, 175.4687266333, "176"],
    [-37.8767274167, 175.4498122333, "31"],
    [-37.8753801, 175.4141292833, "347"],
    [-37.8749301667, 175.4229940833, "269"],
    [-37.8780543667, 175.4318462667, "2/193"],
    [-37.87844965, 175.4315496667, "4/193"],
    [-37.877916, 175.4313673167, "3/193"],
    [-37.8772684667, 175.4313525833, "1/193"],
    [-37.8745261, 175.41460525, "336"],
    [-37.8730149167, 175.4139278833, "348"],
    [-37.8749023333, 175.4133807833, "357"],
    [-37.8748893, 175.4158492, "331"],
    [-37.87500415, 175.4305876333, "199"],
    [-37.8762052667, 175.4298853667, "209"],
    [-37.876837, 175.4272319333, "231"],
    [-37.8750526167, 175.4337470333, "173"],
    [-37.8750786167, 175.4326617667, "185"],
    [-37.8765961833, 175.4422767333, "1/101"],
    [-37.8765928833, 175.44146825, "2/101"],
    [-37.8766094667, 175.4450663167, "1/75"],
    [-37.8751227667, 175.4479436, "47"],
    [-37.8785082667, 175.4463698333, "59"],
    [-37.8749291833, 175.42188625, "275"],
    [-37.8750447, 175.4367026, "145"],
    [-37.8746106333, 175.4284329, "218"],
    [-37.8745961333, 175.4294403, "210"],
    [-37.8729241167, 175.4301093, "204"],
    [-37.8730751833, 175.4315361667, "192"],
    [-37.8764695333, 175.4360706167, "2/151"],
    [-37.8750668667, 175.4352073833, "161"],
    [-37.8745754667, 175.4496806333, "32"],
    [-37.87504855, 175.4370912, "141"],
    [-37.8745623, 175.4221763333, "276"],
    [-37.8745616667, 175.4217338333, "278"],
    [-37.8749560667, 175.4206555833, "291"],
    [-37.87457185, 175.42039215, "292"],
    [-37.8749318, 175.4195155667, "297"],
    [-37.8749193167, 175.4189609333, "301"],
    [-37.8745523667, 175.4178998833, "314"],
    [-37.87555895, 175.4169412167, "317"],
    [-37.8727607, 175.4172541833, "320"],
    [-37.87489075, 175.41689625, "325"],
    [-37.8762137833, 175.4211919167, "283"],
    [-37.8773094667, 175.4190741833, "295"],
    [-37.8766782167, 175.4177899333, "307"],
    [-37.87495795, 175.4292900167, "211"],
    [-37.87496815, 175.4277122333, "229"],
    [-37.87496315, 175.4270601833, "235"],
    [-37.87495715, 175.4262284667, "243"],
    [-37.87466625, 175.4340618833, "166"],
    [-37.8731281333, 175.43353715, "176"],
    [-37.8746368667, 175.43285965, "180"],
    [-37.8746353667, 175.4320823333, "188"],
    [-37.8746651833, 175.43837135, "134"],
    [-37.8746581, 175.4361343333, "152"],
    [-37.8766056667, 175.4444213667, "2/75"],
    [-37.8750381333, 175.4425046833, "95"],
    [-37.8758251333, 175.4478232833, "49"],
    [-37.87515175, 175.4469793167, "51"],
    [-37.8771227333, 175.4464864167, "57"],
    [-37.8750768, 175.445912, "61"],
    [-37.8750693833, 175.4452335333, "71"],
    [-37.8765724333, 175.4321372667, "191"],
    [-37.876819, 175.4318101833, "1/191"],
    [-37.8750694, 175.4518701667, "15"],
    [-37.8750833, 175.4512497167, "21"],
    [-37.87511365, 175.4491755667, "37"],
    [-37.8744741833, 175.4113393, "372"],
    [-37.87448925, 175.4111035167, "374"],
    [-37.8749085333, 175.4183780667, "309"],
    [-37.8748987, 175.4119560833, "371"],
    [-37.8754877, 175.4485419667, "43"],
    [-37.87489105, 175.4142969333, "1/347"],
    [-37.87509285, 175.4505922, "23"],
    [-37.8746456667, 175.4350032667, "162"],
    [-37.8817882333, 175.46555605, "1"],
    [-37.8817762333, 175.4657047, "2"],
    [-37.88177495, 175.4658300167, "3"],
    [-37.8818317167, 175.4659088333, "4"],
    [-37.8818769833, 175.4658514167, "5"],
    [-37.881892, 175.4657157833, "6"],
    [-37.8819030667, 175.4655528667, "7"],
    [-37.8249572667, 175.3822644167, "62C"],
    [-37.8241013167, 175.3830562833, "62B"],
    [-37.8235533667, 175.3836837833, "62A"],
    [-37.8232282333, 175.38113915, "42"],
    [-37.8216185167, 175.3801976167, "24"],
    [-37.8233693667, 175.3818881167, "50"],
    [-37.8238237167, 175.38163785, "48"],
    [-37.8223544167, 175.3807860167, "34"],
    [-37.8221907167, 175.38064385, "32"],
    [-37.7917540833, 175.4757575167, "369"],
    [-37.7917070167, 175.4768378667, "371"],
    [-37.7976220833, 175.4791485667, "310"],
    [-37.8026816667, 175.4738649167, "241"],
    [-37.8063079833, 175.4719216833, "198"],
    [-37.8127222, 175.46321975, "88"],
    [-37.79851905, 175.4782582, "298"],
    [-37.7982161667, 175.4784413833, "300"],
    [-37.7979628667, 175.4785954333, "304"],
    [-37.7989472167, 175.4770213333, "289"],
    [-37.8124759, 175.46149895, "66"],
    [-37.80813105, 175.4692921667, "133"],
    [-37.80903515, 175.4695616333, "164"],
    [-37.81169535, 175.4617913167, "77"],
    [-37.7931904667, 175.4771456167, "359"],
    [-37.90154435, 175.4820577833, "17A"],
    [-37.9023211333, 175.4866221333, "50"],
    [-37.9029791167, 175.4860176833, "43"],
    [-37.9018640167, 175.4839159667, "29"],
    [-37.9017065667, 175.4845584, "32"],
    [-37.9013472667, 175.4832850333, "20"],
    [-37.9022597667, 175.4852180667, "37"],
    [-37.90235635, 175.4855437333, "39"],
    [-37.9020226167, 175.48626825, "48A"],
    [-37.90219835, 175.4862075833, "48"],
    [-37.9028144833, 175.4859300667, "41A"],
    [-37.9019145833, 175.4857036333, "38"],
    [-37.9012494167, 175.4836438333, "22A"],
    [-37.90117625, 175.4832889167, "20A"],
    [-37.9013004333, 175.4831083, "18A"],
    [-37.9018345667, 175.48310725, "23A"],
    [-37.9014717833, 175.4845211, "30A"],
    [-37.9011141833, 175.4813179833, "11"],
    [-37.9012595833, 175.4829706167, "18"],
    [-37.9012063333, 175.4815285167, "13"],
    [-37.90106015, 175.48224675, "14"],
    [-37.9014018333, 175.4835019, "22"],
    [-37.90164195, 175.4831019333, "23"],
    [-37.9014562667, 175.4837066, "24"],
    [-37.9017002833, 175.48331585, "25"],
    [-37.9013501333, 175.4820586167, "17"],
    [-37.9017979167, 175.48370115, "27A"],
    [-37.9017437333, 175.4834995, "27"],
    [-37.9015959833, 175.4841416, "28"],
    [-37.9016565333, 175.4843582167, "30"],
    [-37.9019526833, 175.4841925, "31"],
    [-37.90202855, 175.4844477667, "33"],
    [-37.9008982667, 175.4817133, "8"],
    [-37.9024487833, 175.4858792167, "41"],
    [-37.9020930667, 175.4858615167, "42"],
    [-37.9025991167, 175.4863993167, "49"],
    [-37.9021011667, 175.4846921667, "35"],
    [-37.9014189333, 175.4823503167, "19"],
    [-37.90126485, 175.4817892167, "15"],
    [-37.9015360333, 175.4839226833, "26"],
    [-37.83531625, 175.4933037333, "196"],
    [-37.8352276167, 175.4927147833, "195"],
    [-37.8360773, 175.4912368, "187"],
    [-37.8346867167, 175.49328105, "201"],
    [-37.82529725, 175.5052682333, "361"],
    [-37.8370500167, 175.4896684, "163"],
    [-37.8396963333, 175.4849568, "1/133"],
    [-37.8292152667, 175.4972928333, "281"],
    [-37.8293017833, 175.4982716333, "300"],
    [-37.8282765333, 175.4989055, "307"],
    [-37.8274501333, 175.5007519833, "333"],
    [-37.8273441167, 175.5024751333, "2/336"],
    [-37.8261453167, 175.5047067667, "360"],
    [-37.8301054, 175.4958695333, "275"],
    [-37.8271283667, 175.5028555, "1/336"],
    [-37.8369560667, 175.4905711833, "172"],
    [-37.81904615, 175.5025335167, "7/369"],
    [-37.8218408167, 175.50377335, "4/369"],
    [-37.8209456333, 175.5022760833, "6/369"],
    [-37.8208349667, 175.5044007, "5/369"],
    [-37.8238658, 175.50523275, "2/369"],
    [-37.8190694, 175.5003232333, "8/369"],
    [-37.8120237667, 175.5010552833, "10/369"],
    [-37.8118820833, 175.50392555, "11/369"],
    [-37.8356394, 175.4927849, "192"],
    [-37.8452920167, 175.4770441167, "6"],
    [-37.8332265167, 175.4939223333, "232"],
    [-37.8297708, 175.4960635, "253"],
    [-37.8393579167, 175.4857046667, "2/133"],
    [-37.83878395, 175.48766725, "142"],
    [-37.8379286333, 175.4890502, "152"],
    [-37.8364941, 175.4914751, "186"],
    [-37.8248432833, 175.5066992833, "369"],
    [-37.82553745, 175.5068898833, "380"],
    [-37.83202985, 175.4941239333, "240"],
    [-37.82194035, 175.5057576833, "3/369"],
    [-37.8227608167, 175.5063209333, "1/369"],
    [-37.8141088167, 175.5037792333, "9/369"],
    [-37.8382942833, 175.48852635, "148"],
    [-37.8603913833, 175.4492696, "57"],
    [-37.8592938167, 175.42099095, "308C"],
    [-37.85984295, 175.42067725, "308B"],
    [-37.8598229167, 175.4210151667, "308A"],
    [-37.8598344333, 175.3976947833, "508"],
    [-37.8603243333, 175.4140272833, "369"],
    [-37.8603184, 175.4123881167, "385"],
    [-37.86106375, 175.4477743833, "67"],
    [-37.861365, 175.4476857667, "73"],
    [-37.8613431833, 175.4479565167, "69"],
    [-37.86191185, 175.44788405, "71"],
    [-37.8603987333, 175.4502737667, "53"],
    [-37.86045645, 175.4319935167, "209"],
    [-37.8603551333, 175.4258720333, "263"],
    [-37.8599289833, 175.4315900833, "210"],
    [-37.8604198833, 175.4334522667, "195"],
    [-37.8627496167, 175.42078385, "309B"],
    [-37.8609723167, 175.4515878667, "37"],
    [-37.8603717833, 175.4514413333, "39"],
    [-37.8609809, 175.4517044667, "35"],
    [-37.86096795, 175.45250335, "27"],
    [-37.8604741333, 175.4530975833, "17"],
    [-37.8603852667, 175.451807, "33"],
    [-37.8572038, 175.42770555, "246"],
    [-37.8604631667, 175.4363373667, "171"],
    [-37.8591713833, 175.4484903833, "62"],
    [-37.8604119667, 175.4340429333, "191"],
    [-37.8603663667, 175.4354625167, "179"],
    [-37.8603935, 175.4373993667, "161"],
    [-37.8600009, 175.44318935, "108"],
    [-37.8599224167, 175.4265426167, "256"],
    [-37.8612047333, 175.4464131333, "81B"],
    [-37.8599028667, 175.4231039167, "288"],
    [-37.8602706, 175.4220058333, "295"],
    [-37.8602638667, 175.4191497333, "323"],
    [-37.8609657667, 175.4187969, "327"],
    [-37.8602931, 175.4179491333, "329"],
    [-37.8598848667, 175.4176532167, "338"],
    [-37.8632475167, 175.4173751333, "339"],
    [-37.8599251667, 175.4255647333, "1/264"],
    [-37.8599279667, 175.4253799333, "2/264"],
    [-37.86045495, 175.4383567333, "157"],
    [-37.8604267333, 175.4421660333, "113"],
    [-37.8617114333, 175.4414719167, "125"],
    [-37.8603943167, 175.43982245, "143"],
    [-37.8604978, 175.4449393667, "89"],
    [-37.8603957167, 175.4488193667, "59"],
    [-37.8599959167, 175.4481568167, "64"],
    [-37.8603463333, 175.4481201667, "65"],
    [-37.8603207833, 175.44708855, "75"],
    [-37.8617075, 175.4464497667, "85"],
    [-37.8603354667, 175.4458761167, "87"],
    [-37.8603924833, 175.4529279333, "21"],
    [-37.8603805, 175.4522459167, "31"],
    [-37.8603894333, 175.4465241, "81"],
    [-37.8624513667, 175.4464558667, "2/85"],
    [-37.8603426, 175.42038605, "309A"],
    [-37.8597382167, 175.4030150833, "468"],
    [-37.8600008333, 175.4468853333, "78"],
    [-37.8600151833, 175.4476529333, "70"],
    [-37.8619444167, 175.4473194667, "77"],
    [-37.8604090333, 175.4206673167, "309"],
    [-37.8599482667, 175.4450833833, "90"],
    [-37.8599667333, 175.4439503167, "102"],
    [-37.8599639167, 175.4443829333, "98"],
    [-37.8604016667, 175.4435244167, "107"],
    [-37.8602872667, 175.4157777167, "357C"],
    [-37.8619551667, 175.4154903667, "357B"],
    [-37.8602759333, 175.41535695, "357"],
    [-37.8599460833, 175.4464074167, "82"],
    [-37.8585100167, 175.4461918667, "84"],
    [-37.8604238667, 175.4437588667, "105"],
    [-37.86030515, 175.4229068167, "289"],
    [-37.9165466667, 175.5400699667, "47"],
    [-37.9163835, 175.5395208667, "52"],
    [-37.9162024833, 175.5415235333, "4/35"],
    [-37.9138618, 175.5389959167, "20"],
    [-37.9147363, 175.5367299167, "4"],
    [-37.9171924833, 175.5398619667, "53"],
    [-37.9156216333, 175.5400467167, "1/35"],
    [-37.9156090167, 175.5406467667, "2/35"],
    [-37.9155483, 175.54130355, "3/35"],
    [-37.9161911333, 175.5412111333, "5/35"],
    [-37.9177019333, 175.5406090667, "57"],
    [-37.9172073167, 175.5390771667, "56"],
    [-37.8413934333, 175.3669168333, "185"],
    [-37.8417850333, 175.3689200833, "199"],
    [-37.8428339667, 175.3706989, "216"],
    [-37.8416074, 175.36479145, "164"],
    [-37.8409904167, 175.3645986833, "157"],
    [-37.84092815, 175.3644066167, "161"],
    [-37.8749487833, 175.4757354167, "4"],
    [-37.8748824667, 175.4752927333, "3"],
    [-37.8746354, 175.475246, "5"],
    [-37.8742075167, 175.4755986333, "10"],
    [-37.8743622667, 175.4759894667, "8A"],
    [-37.8744567667, 175.4756695333, "8"],
    [-37.8748683833, 175.4760352167, "4A"],
    [-37.8742254333, 175.47601205, "10A"],
    [-37.8747158167, 175.4760297167, "6A"],
    [-37.8746737833, 175.4757186333, "6"],
    [-37.9465236167, 175.3809737667, "672"],
    [-37.9005455, 175.4730509333, "22"],
    [-37.9003672167, 175.4684980833, "17"],
    [-37.9003614667, 175.4682696667, "13"],
    [-37.9009926333, 175.4714326, "18B"],
    [-37.9004931, 175.4733237333, "24"],
    [-37.90023555, 175.4663222333, "3"],
    [-37.9003731333, 175.4738848333, "30"],
    [-37.90041915, 175.4736641333, "28A"],
    [-37.9008516833, 175.47143275, "18A"],
    [-37.9009989333, 175.4716885333, "18C"],
    [-37.9011166833, 175.4715942833, "18D"],
    [-37.9013468667, 175.4716314833, "18E"],
    [-37.9013142333, 175.4713999333, "18F"],
    [-37.9007320667, 175.4678888833, "12"],
    [-37.9007490333, 175.4682728833, "14"],
    [-37.9002906, 175.4672436333, "11"],
    [-37.9005921667, 175.4728228833, "20"],
    [-37.9012265333, 175.4713549, "18G"],
    [-37.8998487333, 175.4663062167, "1"],
    [-37.9004667833, 175.4734721, "26"],
    [-37.9007287833, 175.4668388, "4"],
    [-37.9002529667, 175.4665572, "5"],
    [-37.9002680333, 175.4668009667, "7"],
    [-37.9002738833, 175.4670198667, "9"],
    [-37.90052665, 175.4737441167, "28B"],
    [-37.9202440833, 175.4647199333, "59"],
    [-37.9186491, 175.4631960333, "74"],
    [-37.9197376, 175.46404755, "63"],
    [-37.9209585333, 175.4715133667, "31"],
    [-37.92198325, 175.4719067667, "32"],
    [-37.9200168333, 175.4637374167, "64"],
    [-37.9199907667, 175.4714465333, "9"],
    [-37.91941015, 175.4649217833, "65"],
    [-37.9196411667, 175.4633694333, "66"],
    [-37.91916365, 175.4639929833, "67A"],
    [-37.9194144667, 175.4637018833, "67"],
    [-37.9193556833, 175.4631293833, "70"],
    [-37.9191286667, 175.4630976, "72"],
    [-37.9189485833, 175.4635427667, "69"],
    [-37.9201641167, 175.4662894167, "55"],
    [-37.9211940333, 175.4656174833, "56A"],
    [-37.920671, 175.4657966667, "56"],
    [-37.92006415, 175.4658042, "57A"],
    [-37.9213706, 175.4727426833, "23"],
    [-37.9214441667, 175.4732278667, "24"],
    [-37.9202821667, 175.4732763833, "18"],
    [-37.9204884667, 175.4729263, "19"],
    [-37.9211967, 175.47098555, "33"],
    [-37.92094835, 175.4706909167, "35"],
    [-37.9219078167, 175.47147535, "34"],
    [-37.9197843667, 175.46309625, "68"],
    [-37.9210935333, 175.46484215, "60A"],
    [-37.9212236167, 175.4704147167, "40"],
    [-37.9197908, 175.4659149333, "55A"],
    [-37.92033405, 175.4655102, "57"],
    [-37.9211895167, 175.46547285, "58A"],
    [-37.9207404, 175.46524515, "58"],
    [-37.91857275, 175.4635986167, "71"],
    [-37.9182674667, 175.46367495, "73"],
    [-37.9195246333, 175.4715611, "11"],
    [-37.9216761833, 175.4729861167, "26"],
    [-37.92162375, 175.4721619667, "27"],
    [-37.9218544, 175.4726169833, "28"],
    [-37.9215389333, 175.4715153167, "29"],
    [-37.9219467167, 175.4722808333, "30"],
    [-37.9193754, 175.4726740833, "12"],
    [-37.9195867667, 175.4721921667, "13"],
    [-37.9196743333, 175.4735581167, "14A"],
    [-37.91978385, 175.4729767167, "14"],
    [-37.9200549833, 175.4726106667, "15"],
    [-37.9197512333, 175.4737709, "16"],
    [-37.9204467, 175.4722458667, "17"],
    [-37.9199559, 175.4736553667, "18A"],
    [-37.9193368833, 175.4700432833, "1"],
    [-37.9218013667, 175.4711677833, "36"],
    [-37.9204076, 175.4708148667, "37"],
    [-37.9217517833, 175.4702188667, "38A"],
    [-37.9215826, 175.4708205333, "38"],
    [-37.9207000333, 175.4703961167, "39"],
    [-37.9205687167, 175.4700339833, "41"],
    [-37.9208976, 175.46987095, "42"],
    [-37.92033355, 175.4687946, "45"],
    [-37.91982325, 175.4679912667, "47A"],
    [-37.9209613833, 175.4677278167, "48A"],
    [-37.92131875, 175.4676346167, "48B"],
    [-37.9205986, 175.4680208, "48"],
    [-37.9196399667, 175.4679596667, "49B"],
    [-37.9202544833, 175.4681937167, "47"],
    [-37.9198937833, 175.4678851833, "49A"],
    [-37.9205374667, 175.46738275, "50"],
    [-37.9213241, 175.4675107, "50B"],
    [-37.9201188667, 175.4669429, "51"],
    [-37.92103205, 175.4665559333, "52A"],
    [-37.9205449167, 175.4668373833, "52"],
    [-37.9198923833, 175.46667, "53"],
    [-37.9210808167, 175.4664227833, "54A"],
    [-37.920561, 175.4662841333, "54"],
    [-37.91946705, 175.4707291667, "5"],
    [-37.9193920833, 175.47035955, "3"],
    [-37.9195288167, 175.4710633833, "7"],
    [-37.92069515, 175.4648828167, "60"],
    [-37.9209773667, 175.4675400333, "50A"],
    [-37.9201842667, 175.46752845, "49"],
    [-37.9200461167, 175.4643875333, "61"],
    [-37.9205402833, 175.4644506333, "62"],
    [-37.9196651333, 175.4646621833, "63A"],
    [-37.9211008833, 175.4733943, "22"],
    [-37.9207025167, 175.4734697333, "20"],
    [-37.9209406667, 175.47297795, "21"],
    [-37.9211156333, 175.4720907167, "25"],
    [-37.9221545333, 175.4731278833, "26A"],
    [-37.8946718167, 175.4691448667, "53"],
    [-37.8945620667, 175.46918055, "55"],
    [-37.8942623667, 175.4697152833, "52"],
    [-37.894203, 175.4688735167, "65"],
    [-37.89425415, 175.4689361333, "63"],
    [-37.89414905, 175.4688349167, "67"],
    [-37.8939181333, 175.4694227167, "64"],
    [-37.8938391333, 175.4693460667, "66"],
    [-37.8907021167, 175.4667148333, "93"],
    [-37.8906039, 175.4666683167, "95"],
    [-37.8902027167, 175.4664942833, "103"],
    [-37.8905652, 175.4673196167, "92"],
    [-37.8898694, 175.4663493333, "107"],
    [-37.8897077333, 175.4662881167, "113"],
    [-37.8897784833, 175.4663228, "111"],
    [-37.8956830333, 175.4710189333, "32"],
    [-37.8955352667, 175.4709092833, "36"],
    [-37.8954734333, 175.4708266833, "38"],
    [-37.8960418333, 175.47138995, "28"],
    [-37.8820345667, 175.46329545, "3/201"],
    [-37.8822174333, 175.46335335, "1/201"],
    [-37.8821085167, 175.4633248, "2/201"],
    [-37.8823766667, 175.4634171667, "197"],
    [-37.8841371, 175.46403415, "175A"],
    [-37.8841525333, 175.4636656, "175B"],
    [-37.8864762667, 175.4645354333, "151"],
    [-37.8863782833, 175.4644388833, "153"],
    [-37.8862153, 175.4648985833, "155"],
    [-37.8860901, 175.4648409833, "157"],
    [-37.8880628167, 175.4656834833, "133"],
    [-37.8878619333, 175.4655976667, "135"],
    [-37.8906979667, 175.4673655, "90"],
    [-37.8907991, 175.4667608667, "91"],
    [-37.8961849167, 175.4707743833, "25"],
    [-37.8836823667, 175.4638652167, "181"],
    [-37.8836385667, 175.4632253833, "183"],
    [-37.8838402, 175.4639201167, "179"],
    [-37.8982437333, 175.4734017333, "1"],
    [-37.8849776167, 175.46438955, "171"],
    [-37.8843719833, 175.4641355167, "173"],
    [-37.8839963167, 175.4632512833, "177"],
    [-37.88393085, 175.4634884, "179B"],
    [-37.8837384333, 175.4634720333, "181A"],
    [-37.8834786833, 175.4638174667, "185"],
    [-37.8834804667, 175.46322915, "187"],
    [-37.8833056667, 175.4637555833, "189"],
    [-37.88310485, 175.4633649667, "191A"],
    [-37.8831340833, 175.4636871, "191"],
    [-37.8830253167, 175.4636718333, "193"],
    [-37.8819504, 175.4632695667, "203"],
    [-37.88170725, 175.4631031, "205"],
    [-37.88149825, 175.4630156833, "207"],
    [-37.8813178333, 175.4626260667, "209A"],
    [-37.8813002167, 175.4629425167, "209"],
    [-37.8810862833, 175.4628550167, "211"],
    [-37.8884475, 175.46494685, "125A"],
    [-37.88836565, 175.4649932, "127A"],
    [-37.88680255, 175.4645032, "145"],
    [-37.8866910333, 175.4647031667, "147A"],
    [-37.8863981167, 175.4649715167, "149"],
    [-37.8859491, 175.4647828333, "159"],
    [-37.8857348333, 175.4647021333, "161"],
    [-37.8856289833, 175.4642462833, "163"],
    [-37.8854787333, 175.4646066833, "165"],
    [-37.8853169667, 175.4645344833, "167"],
    [-37.8851657167, 175.4644626667, "169"],
    [-37.89008265, 175.4664379167, "105"],
    [-37.8888476167, 175.4659953167, "117"],
    [-37.88862475, 175.4659086167, "121"],
    [-37.8884613833, 175.4658299, "123"],
    [-37.8884445167, 175.4652906, "125"],
    [-37.8883496833, 175.46527395, "127"],
    [-37.8882554833, 175.46575415, "129"],
    [-37.8881798833, 175.4652017833, "131"],
    [-37.8876298667, 175.4655107667, "137"],
    [-37.8874722667, 175.4654312667, "139"],
    [-37.8870441833, 175.4652550333, "141"],
    [-37.8868197, 175.46516795, "143"],
    [-37.8865865, 175.46503135, "147"],
    [-37.8944378167, 175.4698605333, "48"],
    [-37.8943299667, 175.4697972167, "50"],
    [-37.8946586167, 175.46927655, "51"],
    [-37.8942089833, 175.4696627, "54"],
    [-37.89410215, 175.46963495, "56"],
    [-37.8944861833, 175.4691251333, "57"],
    [-37.89410185, 175.4695671167, "58"],
    [-37.89440395, 175.4690316833, "59"],
    [-37.8940363833, 175.4695254833, "60"],
    [-37.8943071333, 175.4689793333, "61"],
    [-37.8939694333, 175.4694826, "62"],
    [-37.8937483667, 175.4692441333, "68"],
    [-37.8940153, 175.4687127667, "69"],
    [-37.8936944333, 175.4691774333, "70"],
    [-37.8939444833, 175.4686454167, "71"],
    [-37.8914311167, 175.4676565833, "78"],
    [-37.8914605833, 175.4668025833, "81"],
    [-37.8911125833, 175.467531, "82"],
    [-37.8913374667, 175.46691925, "83"],
    [-37.8909541667, 175.4674899167, "84"],
    [-37.8912424167, 175.4668760167, "85"],
    [-37.89086865, 175.4674540833, "86"],
    [-37.8911290333, 175.46682535, "87"],
    [-37.8908065333, 175.4674188167, "88"],
    [-37.8909961333, 175.4667623333, "89"],
    [-37.89043345, 175.4672657667, "98"],
    [-37.8976105333, 175.47313585, "10"],
    [-37.8975240667, 175.47213955, "17"],
    [-37.8964341, 175.4719897, "18"],
    [-37.8965768167, 175.4718193667, "20"],
    [-37.8964536167, 175.47098525, "21"],
    [-37.8965168, 175.4717821667, "22"],
    [-37.8963066833, 175.4708868167, "23"],
    [-37.8964117, 175.4716877833, "24"],
    [-37.8973729833, 175.4718744167, "19"],
    [-37.8961056167, 175.4707024167, "27"],
    [-37.89606105, 175.4706588333, "29"],
    [-37.8957499, 175.4710900333, "30"],
    [-37.8960081167, 175.4706084667, "31"],
    [-37.89595535, 175.4705515167, "33"],
    [-37.8962650667, 175.4715582333, "26"],
    [-37.8977395833, 175.4736163833, "2A"],
    [-37.8976182167, 175.4734736333, "2"],
    [-37.8950879167, 175.4697355, "49"],
    [-37.8953451167, 175.47080125, "40"],
    [-37.8952480833, 175.4706864833, "42"],
    [-37.8953311333, 175.4699905167, "43"],
    [-37.8951690167, 175.4705682833, "44"],
    [-37.8952598667, 175.4699087, "45"],
    [-37.8951447333, 175.4705209333, "46"],
    [-37.8951409333, 175.4698058667, "47"],
    [-37.8954689333, 175.4701014167, "41A"],
    [-37.8958601667, 175.4704608833, "35"],
    [-37.8957632833, 175.4703618, "37"],
    [-37.89565655, 175.4702728333, "39"],
    [-37.8955528, 175.4701858833, "41"],
    [-37.8976127167, 175.4736873167, "4A"],
    [-37.8974748, 175.4735857667, "4"],
    [-37.8973855833, 175.4735356667, "6"],
    [-37.8974473167, 175.4733615667, "8"],
    [-37.8896038, 175.4662530833, "115"],
    [-37.8938700833, 175.46857325, "73"],
    [-37.8913213333, 175.4676180667, "80"],
    [-37.89351535, 175.4690702167, "76"],
    [-37.8936501, 175.4683802833, "77"],
    [-37.8937599333, 175.4684853667, "75"],
    [-37.8935794833, 175.4691255, "72"],
    [-37.88384375, 175.4636547333, "179A"],
    [-37.8877088, 175.4661684833, "104"],
    [-37.8853223833, 175.4655525667, "128B"],
    [-37.88438085, 175.4648718667, "136C"],
    [-37.8841924667, 175.46482515, "138"],
    [-37.8840040333, 175.4647229667, "140"],
    [-37.8838259833, 175.4646471667, "142"],
    [-37.8836846833, 175.4645814167, "144"],
    [-37.8833978167, 175.4647726167, "146A"],
    [-37.88347465, 175.46450515, "146"],
    [-37.8832495667, 175.4646684333, "148B"],
    [-37.8833107333, 175.4644183167, "148A"],
    [-37.8830987333, 175.4643600833, "150"],
    [-37.88243095, 175.4641342, "152"],
    [-37.8822347333, 175.4643721667, "154A"],
    [-37.88231865, 175.4640810833, "154"],
    [-37.8820192, 175.4644994833, "156"],
    [-37.8820541833, 175.46428995, "158A"],
    [-37.8821268, 175.4640207, "158"],
    [-37.88190465, 175.4639371333, "160"],
    [-37.8817260167, 175.4638787833, "162"],
    [-37.8814407667, 175.4640942167, "164A"],
    [-37.8815740333, 175.46375875, "164"],
    [-37.8814061667, 175.4637101333, "166"],
    [-37.8812219167, 175.4636397667, "168"],
    [-37.8810714, 175.4635707167, "170"],
    [-37.8849612333, 175.4651687333, "134"],
    [-37.8867657833, 175.46587165, "116"],
    [-37.8873525667, 175.4663687, "108A"],
    [-37.8875141333, 175.46643145, "108B"],
    [-37.88740205, 175.4660429667, "108"],
    [-37.8872605, 175.46600665, "110"],
    [-37.8870516667, 175.4659278333, "114"],
    [-37.8859261833, 175.4657479333, "122A"],
    [-37.8859050667, 175.4659105167, "122B"],
    [-37.8859588, 175.4655614, "122"],
    [-37.88575615, 175.4657199833, "124A"],
    [-37.8857864167, 175.4655019333, "124"],
    [-37.8855956333, 175.46541875, "126"],
    [-37.8854599, 175.4652737833, "128"],
    [-37.8852678333, 175.46529905, "130"],
    [-37.8850946667, 175.4652269667, "132"],
    [-37.8878558833, 175.4662192833, "100"],
    [-37.88434005, 175.4648704833, "136B"],
    [-37.88430585, 175.4648585667, "136A"],
    [-37.9102085667, 175.47267125, "50B"],
    [-37.9116658, 175.4774299167, "86A"],
    [-37.91171815, 175.4771741167, "82A"],
    [-37.90942125, 175.47189105, "37"],
    [-37.91030625, 175.47526205, "63B"],
    [-37.9104127167, 175.4752166, "63A"],
    [-37.9095648833, 175.47290545, "49A"],
    [-37.9093032333, 175.4714794833, "35A"],
    [-37.90934235, 175.47164185, "35B"],
    [-37.9093857333, 175.4728978167, "47B"],
    [-37.9095356333, 175.4723232833, "43"],
    [-37.9094703333, 175.4721117667, "39"],
    [-37.9096594333, 175.4715342167, "40"],
    [-37.9080098833, 175.4672010667, "5"],
    [-37.9083293833, 175.4682696833, "13"],
    [-37.9089423167, 175.4690827667, "20"],
    [-37.9089409167, 175.4702961167, "29"],
    [-37.9081540667, 175.46658445, "2"],
    [-37.9097415167, 175.4717528833, "42"],
    [-37.9101694333, 175.4746051167, "57"],
    [-37.9080884, 175.4674672833, "7"],
    [-37.91215875, 175.4797119167, "102"],
    [-37.9118344667, 175.4799542, "103"],
    [-37.9106944, 175.4744461, "62A"],
    [-37.9113962667, 175.4772112333, "82"],
    [-37.90982995, 175.4733563, "51A"],
    [-37.9115914833, 175.4801362333, "107A"],
    [-37.9092558833, 175.4696357, "26B"],
    [-37.91002055, 175.4726635167, "50A"],
    [-37.90847515, 175.46755925, "10"],
    [-37.9082532667, 175.4680019333, "11"],
    [-37.9088822833, 175.4688571833, "18"],
    [-37.9086208167, 175.4692152333, "19"],
    [-37.9085374333, 175.4677686333, "12"],
    [-37.9086063833, 175.4679739333, "14"],
    [-37.9086596833, 175.4681819, "16"],
    [-37.9086889667, 175.4694297167, "21"],
    [-37.9089948667, 175.4692835833, "22"],
    [-37.9087513667, 175.4696475333, "23"],
    [-37.9090557667, 175.4694965167, "24"],
    [-37.9088116333, 175.4698680667, "25"],
    [-37.9091091, 175.46969345, "26"],
    [-37.907833, 175.4666559167, "1"],
    [-37.9091789833, 175.4699557667, "28"],
    [-37.9096087, 175.4713450667, "38"],
    [-37.9092433833, 175.4701392333, "30"],
    [-37.9090019833, 175.47051235, "31"],
    [-37.9093068333, 175.4703555833, "32"],
    [-37.9090940833, 175.4707707667, "33"],
    [-37.90938145, 175.4705582833, "34"],
    [-37.9094346667, 175.4707651333, "36"],
    [-37.9088761167, 175.47007805, "27"],
    [-37.9098069333, 175.4719604833, "44"],
    [-37.9098796833, 175.4721707667, "46"],
    [-37.909607, 175.4725725667, "45"],
    [-37.90920615, 175.4729688333, "47A"],
    [-37.9093402667, 175.4728171, "47"],
    [-37.9099493833, 175.4724105167, "48"],
    [-37.9096936333, 175.47284265, "49"],
    [-37.9079234833, 175.4669311833, "3"],
    [-37.9082463667, 175.4668155333, "4"],
    [-37.9097714167, 175.4731308333, "51"],
    [-37.9100506833, 175.4729631167, "52"],
    [-37.9101362833, 175.473234, "54"],
    [-37.9105130333, 175.4743347667, "60"],
    [-37.91028125, 175.4747888167, "59"],
    [-37.9105830167, 175.4745966167, "62"],
    [-37.9106531, 175.4748493333, "64"],
    [-37.90835855, 175.4671917333, "8"],
    [-37.9081653833, 175.4677261, "9"],
    [-37.9120752833, 175.4794866167, "100"],
    [-37.9117925167, 175.47970425, "101"],
    [-37.91190545, 175.4801769333, "105"],
    [-37.9122550333, 175.4799224833, "106"],
    [-37.9116940333, 175.48024145, "107"],
    [-37.9124476, 175.4801052833, "108"],
    [-37.9117246833, 175.4803671833, "109"],
    [-37.9103405167, 175.4750005667, "61"],
    [-37.9104726833, 175.4754203667, "65"],
    [-37.9107200333, 175.47506155, "66"],
    [-37.91053305, 175.4756331, "67"],
    [-37.9111229833, 175.476363, "74"],
    [-37.9114657833, 175.4764926, "76A"],
    [-37.911183, 175.4765541167, "76"],
    [-37.91150505, 175.47660575, "78A"],
    [-37.9112499833, 175.4767965667, "78"],
    [-37.9115982333, 175.4769201167, "80A"],
    [-37.9113175167, 175.4769843333, "80"],
    [-37.91152935, 175.4777795, "88"],
    [-37.9117877, 175.4784990667, "92"],
    [-37.9118644667, 175.4787878833, "94"],
    [-37.9121825833, 175.4787955833, "96A"],
    [-37.9119467333, 175.47904265, "96"],
    [-37.9119913167, 175.4792895833, "98"],
    [-37.9117365667, 175.47948695, "99"],
    [-37.9107912667, 175.4752822833, "68"],
    [-37.9108477833, 175.4754937167, "70"],
    [-37.9118233, 175.4773533, "86B"],
    [-37.9119954167, 175.47727035, "86C"],
    [-37.9115303833, 175.4774913167, "86"],
    [-37.9082149, 175.4684349833, "13A"],
    [-37.8870698333, 175.4663411167, "1-13"],
    [-37.8871554667, 175.4663601, "2-12"],
    [-37.9016082667, 175.4806621, "30"],
    [-37.9010984667, 175.4803028833, "22"],
    [-37.9012443833, 175.4808339333, "24"],
    [-37.9013056667, 175.4802206, "26"],
    [-37.90149895, 175.4805675833, "28"],
    [-37.9015629833, 175.4800562667, "32"],
    [-37.90147835, 175.4797437167, "45"],
    [-37.8996289167, 175.4806158667, "2A"],
    [-37.89956085, 175.4797871333, "11"],
    [-37.9009366167, 175.4793407667, "37"],
    [-37.9010581667, 175.4795131167, "39"],
    [-37.8992862833, 175.4802488833, "5"],
    [-37.90020145, 175.4797472, "10"],
    [-37.9003469333, 175.47964355, "12"],
    [-37.89972725, 175.47967295, "13"],
    [-37.9006396, 175.4794276, "14"],
    [-37.8998769167, 175.47947625, "15"],
    [-37.9007610667, 175.4795863833, "16"],
    [-37.9008528833, 175.47974655, "18"],
    [-37.9009693167, 175.4799194, "20"],
    [-37.90002065, 175.47947515, "17"],
    [-37.9001685333, 175.4793572, "19"],
    [-37.8993512667, 175.4806693, "1"],
    [-37.9003158833, 175.479241, "21"],
    [-37.9004667167, 175.4791244167, "23"],
    [-37.9006037, 175.4790302167, "25"],
    [-37.90070445, 175.4786061667, "27"],
    [-37.9007410667, 175.4788370167, "29"],
    [-37.9008196333, 175.4791513333, "31"],
    [-37.901124, 175.4788828667, "33"],
    [-37.90119195, 175.4790490333, "35"],
    [-37.9013381833, 175.4794026, "41"],
    [-37.8997734, 175.4805030333, "2"],
    [-37.8992978333, 175.4804472333, "3"],
    [-37.9012097667, 175.4797523667, "43"],
    [-37.8996789, 175.48033335, "4"],
    [-37.8998323667, 175.4800290167, "6"],
    [-37.8993387167, 175.4800615833, "7"],
    [-37.9000414667, 175.4798654, "8"],
    [-37.8994266333, 175.47991435, "9"],
    [-37.8172086167, 175.36975015, "17"],
    [-37.8189982167, 175.3714596333, "28C"],
    [-37.8174889333, 175.3716284333, "35"],
    [-37.8180339667, 175.3717238667, "36"],
    [-37.8172767, 175.3702897333, "25"],
    [-37.8183033167, 175.3704190333, "28A"],
    [-37.8177806167, 175.3709889833, "30"],
    [-37.8184724667, 175.3714858167, "34"],
    [-37.8172573833, 175.3723560333, "37"],
    [-37.8175974333, 175.3697317, "18"],
    [-37.8189201833, 175.3708153, "28B"],
    [-37.8170975, 175.3688759833, "7"],
    [-37.8174008333, 175.3711639167, "31"],
    [-37.8177271333, 175.3719905167, "39"],
    [-37.9105104667, 175.4696305667, "29"],
    [-37.9105738333, 175.4698784833, "33"],
    [-37.9119496333, 175.4744651, "75"],
    [-37.9124263667, 175.4747625167, "76"],
    [-37.9120037833, 175.47464375, "77A"],
    [-37.9103653167, 175.4676619667, "20"],
    [-37.9108393333, 175.4707173, "41"],
    [-37.91176765, 175.4719875333, "58A"],
    [-37.9116183, 175.4720772, "58"],
    [-37.9128712, 175.4761248167, "86"],
    [-37.9124839333, 175.47629265, "85"],
    [-37.9104650167, 175.4694600667, "27"],
    [-37.9109299, 175.4697178333, "40"],
    [-37.9109971667, 175.4699570333, "42"],
    [-37.9097695, 175.4672281333, "11"],
    [-37.9100539667, 175.4665771, "10"],
    [-37.91041835, 175.4666636, "12A"],
    [-37.9101176333, 175.4667979833, "12"],
    [-37.90983315, 175.4674340333, "13"],
    [-37.9104875, 175.4669176667, "14A"],
    [-37.9101736833, 175.4670051, "14"],
    [-37.9098833833, 175.46762845, "15"],
    [-37.9102367667, 175.4672218833, "16"],
    [-37.9099549667, 175.46780795, "17"],
    [-37.9105899, 175.46737165, "18A"],
    [-37.9102941833, 175.4674259333, "18"],
    [-37.91020335, 175.4685710333, "21"],
    [-37.9102757167, 175.4688396333, "23"],
    [-37.9105438167, 175.46821955, "22"],
    [-37.9105772667, 175.4685320333, "26"],
    [-37.9104076167, 175.4692623833, "25"],
    [-37.9094199667, 175.4660506333, "1"],
    [-37.9106404167, 175.4687469667, "28"],
    [-37.9107060667, 175.4689637167, "30"],
    [-37.9103114167, 175.4698414333, "31"],
    [-37.9110137167, 175.4690528333, "34A"],
    [-37.9107613667, 175.4691689333, "34"],
    [-37.91081495, 175.4693474, "36A"],
    [-37.9110468333, 175.46924275, "36B"],
    [-37.9108736, 175.4695344167, "38A"],
    [-37.9111242, 175.46941945, "38B"],
    [-37.9098216167, 175.4658393167, "2"],
    [-37.91088605, 175.4708887833, "43"],
    [-37.9112278167, 175.4705661167, "44"],
    [-37.9109336667, 175.47106555, "45"],
    [-37.91129165, 175.4707536333, "46"],
    [-37.9109882333, 175.4712586667, "47"],
    [-37.9113449167, 175.47095045, "48"],
    [-37.9110579667, 175.4714307833, "49"],
    [-37.9094612667, 175.4662574167, "3"],
    [-37.9114052833, 175.4711525333, "50"],
    [-37.9114515333, 175.4713499667, "52"],
    [-37.9111246333, 175.47187335, "51"],
    [-37.91170175, 175.4723085667, "60"],
    [-37.9117521667, 175.4724906333, "62"],
    [-37.91170015, 175.47359465, "63"],
    [-37.91175395, 175.4737979833, "65"],
    [-37.9120630333, 175.4735410667, "66A"],
    [-37.9122263, 175.47353625, "66B"],
    [-37.9118108167, 175.4740034667, "67"],
    [-37.9113339, 175.4743958833, "69"],
    [-37.90952435, 175.4664596667, "5"],
    [-37.90970875, 175.4670344667, "9"],
    [-37.91152875, 175.4743488, "71"],
    [-37.9123023, 175.47433295, "72"],
    [-37.9118344167, 175.4742989833, "73A"],
    [-37.9118896667, 175.4742717333, "73"],
    [-37.9123685833, 175.4745438, "74"],
    [-37.91204505, 175.4747885167, "77B"],
    [-37.9124726167, 175.4749395667, "78"],
    [-37.9120965167, 175.47493145, "79"],
    [-37.9099235167, 175.46615755, "6"],
    [-37.9099866, 175.4663651333, "8"],
    [-37.9126461, 175.4754722667, "80"],
    [-37.9123464833, 175.4758373333, "81"],
    [-37.9124222167, 175.4761109333, "83"],
    [-37.9129424833, 175.47629755, "88A"],
    [-37.91334525, 175.4762585833, "90A"],
    [-37.9134976667, 175.4761915, "90B"],
    [-37.9133118333, 175.47629305, "90"],
    [-37.9127142, 175.4769782833, "87"],
    [-37.9127630833, 175.4771701667, "89"],
    [-37.9131761, 175.47644985, "92A"],
    [-37.9131949667, 175.47653455, "92B"],
    [-37.9130077167, 175.4766852167, "94"],
    [-37.9131084667, 175.4770053833, "96"],
    [-37.9133594333, 175.4770784833, "98"],
    [-37.91309155, 175.4760073833, "86B"],
    [-37.9127336333, 175.4757125833, "82"],
    [-37.9128152667, 175.4759342833, "84"],
    [-37.9129075333, 175.4763391333, "88"],
    [-37.8906112, 175.4636290667, "8"],
    [-37.8906010667, 175.4641357833, "1A"],
    [-37.8905902667, 175.4639329, "4"],
    [-37.8905940833, 175.4640698, "2"],
    [-37.8906316167, 175.4632836667, "13"],
    [-37.8907058, 175.4633735833, "17"],
    [-37.8905923, 175.4640024833, "3"],
    [-37.8907071833, 175.4634437667, "18"],
    [-37.8906947667, 175.4635948667, "20"],
    [-37.8906874333, 175.4636836833, "21"],
    [-37.890681, 175.4637655167, "22"],
    [-37.8906765333, 175.4638413833, "23"],
    [-37.8906641, 175.4639166833, "24"],
    [-37.8906549, 175.4639912667, "25"],
    [-37.8906532333, 175.4640676833, "26"],
    [-37.8906518667, 175.46414095, "27"],
    [-37.8906011167, 175.4638605167, "5"],
    [-37.8906079667, 175.4637939167, "6"],
    [-37.8906326167, 175.4634340333, "11"],
    [-37.8906169667, 175.4635610833, "9"],
    [-37.8906290333, 175.46349725, "10"],
    [-37.8906352333, 175.4633559333, "12"],
    [-37.8906300833, 175.4632139167, "14"],
    [-37.8906897167, 175.4632274, "15"],
    [-37.8905997667, 175.46420885, "1"],
    [-37.8906515667, 175.4642292333, "28"],
    [-37.8905993833, 175.4637104667, "7"],
    [-37.8905424667, 175.4641317333, "1B"],
    [-37.8906997833, 175.4632963667, "16"],
    [-37.89069985, 175.4635183333, "19"],
    [-37.82488245, 175.3937114333, "107"],
    [-37.82511735, 175.3936415, "105"],
    [-37.8241600833, 175.3938937, "115"],
    [-37.8257229, 175.3934403167, "95"],
    [-37.8311935833, 175.39119285, "34"],
    [-37.8312837167, 175.3938057, "44"],
    [-37.8302991667, 175.3911272833, "39"],
    [-37.8298778833, 175.38838305, "33"],
    [-37.8260734, 175.3947714167, "94C"],
    [-37.8263358833, 175.3938421667, "94A"],
    [-37.8279937667, 175.394307, "72C"],
    [-37.8246244833, 175.3942836667, "110"],
    [-37.82928665, 175.3931185833, "58"],
    [-37.8239608833, 175.3939572, "117"],
    [-37.8307863167, 175.3929875333, "46B"],
    [-37.83183475, 175.3898969167, "19"],
    [-37.82823865, 175.3933544333, "72A"],
    [-37.82829215, 175.3941929833, "72B"],
    [-37.8278144167, 175.3934866833, "72D"],
    [-37.8263441833, 175.3946904167, "94B"],
    [-37.8258577167, 175.3939724833, "94D"],
    [-37.8252182667, 175.3953295167, "108"],
    [-37.8301352667, 175.3922486833, "46A"],
    [-37.8325430167, 175.3898667667, "14"],
    [-37.8327221167, 175.3897138833, "12"],
    [-37.91482215, 175.4749911167, "3"],
    [-37.9154439833, 175.4755851833, "12"],
    [-37.9151334833, 175.4758027, "13"],
    [-37.9152983167, 175.4757077333, "14"],
    [-37.9150524833, 175.4746568833, "2"],
    [-37.9147571833, 175.4747972, "1"],
    [-37.9151202833, 175.4748550667, "4"],
    [-37.9149427, 175.4758335, "11"],
    [-37.91488335, 175.4751902167, "5"],
    [-37.9149361833, 175.4753859667, "7"],
    [-37.9149649167, 175.475589, "9"],
    [-37.9153104333, 175.4754419667, "10"],
    [-37.9151775667, 175.4750489, "6"],
    [-37.91523395, 175.4752497167, "8"],
    [-37.8190687333, 175.3738382833, "23"],
    [-37.8189306833, 175.3733703333, "25"],
    [-37.8190215667, 175.37468215, "15"],
    [-37.8191251667, 175.3740887167, "21"],
    [-37.81873305, 175.3726976833, "27A-27C"],
    [-37.8806986667, 175.4693562667, "63"],
    [-37.8809032, 175.46938395, "61"],
    [-37.88419255, 175.4697289167, "25"],
    [-37.8840685833, 175.4692688833, "26A"],
    [-37.8849148667, 175.4692615167, "24"],
    [-37.8847644833, 175.4697682667, "23"],
    [-37.8813066833, 175.4696684167, "55A"],
    [-37.8841734833, 175.4692622667, "26"],
    [-37.8840862833, 175.46972585, "27"],
    [-37.883927, 175.46906515, "28A"],
    [-37.8838748833, 175.4692541667, "28"],
    [-37.8838499, 175.4696946333, "29"],
    [-37.88359805, 175.4692251167, "30"],
    [-37.8837043833, 175.4696835, "31"],
    [-37.8834259333, 175.4692035833, "32"],
    [-37.88355905, 175.4696786667, "33"],
    [-37.8832160667, 175.4691627833, "34"],
    [-37.8834721833, 175.4701433, "35"],
    [-37.8829353667, 175.4691514, "36"],
    [-37.8833598667, 175.4701280667, "37"],
    [-37.8821233833, 175.4690720167, "44"],
    [-37.8818720333, 175.4690515667, "46"],
    [-37.8816436667, 175.4690230167, "48"],
    [-37.8815636667, 175.4686263, "50"],
    [-37.8818555333, 175.4695200333, "51"],
    [-37.8812979333, 175.4689347, "52A"],
    [-37.8814706833, 175.46880395, "52"],
    [-37.8816095333, 175.46944925, "53"],
    [-37.8816625, 175.4696671833, "53A"],
    [-37.8811724833, 175.46894365, "54"],
    [-37.8833521, 175.46965845, "39"],
    [-37.882727, 175.4691108167, "40"],
    [-37.88320755, 175.4696409167, "41"],
    [-37.8830678333, 175.4696227833, "43"],
    [-37.8828830167, 175.4695893333, "45"],
    [-37.8827233167, 175.4695686167, "47"],
    [-37.88095035, 175.4689156, "56"],
    [-37.8811470667, 175.4694376833, "57"],
    [-37.8807286167, 175.4689006167, "58"],
    [-37.8809772667, 175.4695997, "59"],
    [-37.8855099667, 175.4700903333, "11A"],
    [-37.8863533667, 175.4694588667, "10"],
    [-37.8855251167, 175.46980435, "11"],
    [-37.8858918167, 175.4693764333, "12"],
    [-37.88541135, 175.46981195, "13"],
    [-37.8857694833, 175.4693831333, "14"],
    [-37.8853156333, 175.4697983, "15"],
    [-37.88556005, 175.4693647167, "16"],
    [-37.8851626, 175.4697849833, "17"],
    [-37.8853764833, 175.4693362333, "18"],
    [-37.8850294167, 175.4700537333, "19A"],
    [-37.8850045667, 175.4697427167, "19"],
    [-37.88522955, 175.4692991667, "20"],
    [-37.8869080667, 175.4699470333, "1"],
    [-37.8866734833, 175.4699262833, "3"],
    [-37.8868586667, 175.46949025, "4"],
    [-37.8866564167, 175.4694635, "6"],
    [-37.8864874833, 175.4690444333, "8A"],
    [-37.8864948, 175.4694661333, "8"],
    [-37.8857426, 175.4698434167, "9"],
    [-37.8813893667, 175.46946355, "55"],
    [-37.8757085833, 175.4720279333, "14"],
    [-37.8760134667, 175.4732799333, "4"],
    [-37.8762548333, 175.4722784667, "9"],
    [-37.87627795, 175.47290345, "5"],
    [-37.8759331333, 175.4720918833, "16"],
    [-37.8759628833, 175.47273515, "8"],
    [-37.8762970167, 175.4732576833, "3"],
    [-37.8762245833, 175.47260565, "7"],
    [-37.8760141333, 175.4735054833, "2"],
    [-37.87599385, 175.4730087667, "6"],
    [-37.8759230167, 175.4724739333, "10"],
    [-37.8762960167, 175.4734868833, "1"],
    [-37.8760504333, 175.4719608, "18"],
    [-37.8759146, 175.4722788167, "12"],
    [-37.8741210833, 175.4688841833, "4"],
    [-37.874194, 175.4684628667, "3"],
    [-37.8738320667, 175.467738, "7C"],
    [-37.8739506833, 175.4677262667, "7B"],
    [-37.8738354667, 175.4680554, "7D"],
    [-37.8739794167, 175.4680445667, "7A"],
    [-37.8738342833, 175.46848195, "9"],
    [-37.8740206, 175.4684673, "5"],
    [-37.8739604167, 175.4688864, "6"],
    [-37.8735957167, 175.4683405333, "11"],
    [-37.8734235667, 175.4681024, "13"],
    [-37.87339585, 175.4678321167, "15"],
    [-37.8733727667, 175.46763935, "17"],
    [-37.8728499833, 175.46814045, "18B"],
    [-37.8728848, 175.468283, "18A"],
    [-37.8730660667, 175.4686787667, "12B"],
    [-37.8734160167, 175.4687180167, "10"],
    [-37.87312285, 175.4687848, "12A"],
    [-37.8730669833, 175.4679829333, "20"],
    [-37.8731389833, 175.4682574833, "16"],
    [-37.8732649167, 175.4684832833, "14"],
    [-37.8732605833, 175.4675842167, "19"],
    [-37.8729366833, 175.4674852167, "24"],
    [-37.8730152333, 175.4677481333, "22"],
    [-37.87312065, 175.4675707, "21"],
    [-37.7940869167, 175.4650218, "53"],
    [-37.7987550833, 175.46275265, "10"],
    [-37.7930822167, 175.4661922833, "60"],
    [-37.9811612, 175.51623075, "170"],
    [-37.980836, 175.5157299167, "171"],
    [-37.9807136667, 175.5162809333, "172"],
    [-37.8615888667, 175.47847875, "25"],
    [-37.8612666833, 175.4791558, "31"],
    [-37.86047605, 175.48172545, "60"],
    [-37.8620611333, 175.4774431167, "13"],
    [-37.8607505167, 175.4799311167, "41"],
    [-37.8611511833, 175.4794658167, "35"],
    [-37.86108515, 175.4796282, "37"],
    [-37.8604406, 175.48091835, "55"],
    [-37.8595911333, 175.483664, "72"],
    [-37.8582950167, 175.4794636833, "1/55"],
    [-37.8599109167, 175.4805425167, "49"],
    [-37.86081285, 175.4790711333, "33"],
    [-37.9125544667, 175.4795344, "6A"],
    [-37.9129032667, 175.479114, "8"],
    [-37.9131012, 175.4790179333, "10"],
    [-37.9132466667, 175.4789829167, "11"],
    [-37.9130141, 175.4787519333, "1"],
    [-37.9128543833, 175.4788087167, "2"],
    [-37.9126783167, 175.47889955, "3"],
    [-37.9125031333, 175.47905685, "4"],
    [-37.91254025, 175.4792764833, "5"],
    [-37.9127399333, 175.4793322333, "7"],
    [-37.9130969667, 175.47952775, "9"],
    [-37.9126911167, 175.4796185, "6"],
    [-37.8188045667, 175.445279, "356B"],
    [-37.8182903167, 175.4447447333, "356A"],
    [-37.8086473833, 175.4195512167, "27"],
    [-37.8137567, 175.4426504333, "299"],
    [-37.8131862167, 175.4434878167, "297"],
    [-37.8157127333, 175.43953285, "300A"],
    [-37.8094742167, 175.4189907, "19"],
    [-37.80933355, 175.4191978667, "23"],
    [-37.8084224833, 175.4207951, "41"],
    [-37.8095742167, 175.43605105, "226"],
    [-37.81325255, 175.4410722, "291"],
    [-37.8149016667, 175.44148445, "310"],
    [-37.8155769667, 175.44213865, "316"],
    [-37.8161747167, 175.4426252167, "326A"],
    [-37.81712155, 175.4417707667, "326B"],
    [-37.8169698833, 175.4434206167, "332"],
    [-37.81770375, 175.4442239833, "346"],
    [-37.81930575, 175.4457899333, "370"],
    [-37.82310865, 175.4495740167, "422"],
    [-37.8103162667, 175.4344773833, "224B"],
    [-37.8100267333, 175.4348309167, "224A"],
    [-37.8072155167, 175.4256129167, "88B"],
    [-37.8070962167, 175.42278495, "59"],
    [-37.8044940333, 175.4270097, "105"],
    [-37.8046275667, 175.4276069, "110"],
    [-37.8047349, 175.43229485, "165"],
    [-37.8073398, 175.4232142167, "68"],
    [-37.8064126167, 175.4330381167, "188"],
    [-37.8063987833, 175.4339707667, "209"],
    [-37.8103206333, 175.4378506833, "241"],
    [-37.8117777667, 175.4393874, "269"],
    [-37.8074375833, 175.43233545, "192"],
    [-37.8099668167, 175.4365891667, "236"],
    [-37.8038524, 175.4307279167, "156"],
    [-37.808759, 175.4183171167, "17"],
    [-37.805885, 175.4246946333, "81"],
    [-37.8072272, 175.4225943333, "57"],
    [-37.8056120333, 175.4262290333, "98"],
    [-37.80400575, 175.4287991167, "122"],
    [-37.8162936333, 175.43817215, "300B"],
    [-37.80809795, 175.4212756, "49"],
    [-37.8102496667, 175.4184802, "8"],
    [-37.8057899167, 175.43198855, "174"],
    [-37.8060113, 175.4256459333, "88A"],
    [-37.8183982, 175.4416558, "336"],
    [-37.8108804, 175.4393530667, "257"],
    [-37.81106865, 175.4386178, "255"],
    [-37.816436, 175.4370654, "298"],
    [-37.8152743833, 175.4390058833, "298A"],
    [-37.8136452667, 175.44031535, "288"],
    [-37.8123581, 175.44091935, "285"],
    [-37.81283995, 175.4401099833, "283"],
    [-37.8198763333, 175.4462982, "382"],
    [-37.8164479167, 175.44390175, "331"],
    [-37.80775795, 175.4225746667, "62"],
    [-37.8039981833, 175.43163845, "161"],
    [-37.81343775, 175.4401047167, "286"],
    [-37.92047495, 175.46336425, "9"],
    [-37.9203008333, 175.4618285667, "10"],
    [-37.9198670667, 175.4617700333, "6"],
    [-37.9207259667, 175.4627925167, "18"],
    [-37.9204614, 175.4619784833, "12"],
    [-37.9205793667, 175.4621705667, "14"],
    [-37.9207471167, 175.463665, "22"],
    [-37.9208443, 175.4640230833, "24"],
    [-37.9207801667, 175.4632019667, "20"],
    [-37.919291, 175.4622796167, "1"],
    [-37.92066135, 175.4624384833, "16"],
    [-37.9203523333, 175.4637463, "11"],
    [-37.9192657167, 175.4618642833, "2"],
    [-37.9197237333, 175.4622129, "3"],
    [-37.91957955, 175.4618272333, "4"],
    [-37.9201776333, 175.4622242, "5"],
    [-37.9203935, 175.4628145667, "7"],
    [-37.9201192, 175.46174985, "8"],
    [-37.9031613333, 175.4779369333, "8"],
    [-37.90302285, 175.47799245, "9"],
    [-37.9033285333, 175.4778655833, "7"],
    [-37.90346695, 175.4777957167, "6B"],
    [-37.9031769667, 175.4783186167, "1"],
    [-37.9034699667, 175.47848295, "2A"],
    [-37.90334345, 175.4782583833, "2"],
    [-37.9035249833, 175.4781788667, "3"],
    [-37.9037982667, 175.4780497167, "4A"],
    [-37.9037089833, 175.4781017333, "4"],
    [-37.9035266667, 175.4777643667, "6A"],
    [-37.9036756833, 175.4778188333, "5"],
    [-37.9129985333, 175.4689246333, "3"],
    [-37.9132911, 175.4686436333, "4"],
    [-37.9127876667, 175.4680122167, "13"],
    [-37.9126336667, 175.46802445, "13A"],
    [-37.91304995, 175.4678746833, "10"],
    [-37.91280555, 175.4681958333, "11"],
    [-37.9127504833, 175.4677229167, "15"],
    [-37.9133710167, 175.4688942167, "2"],
    [-37.9129377, 175.4687422333, "5"],
    [-37.9128397333, 175.4683664833, "9"],
    [-37.9125584, 175.4677322333, "15A"],
    [-37.9132129833, 175.4683870333, "6"],
    [-37.9128774667, 175.4685356, "7"],
    [-37.9131322833, 175.4681105167, "8"],
    [-37.9164839667, 175.4695277167, "2/205"],
    [-37.9167949333, 175.4782119333, "287"],
    [-37.9086755, 175.4537326833, "37"],
    [-37.91527815, 175.4546945333, "2/88"],
    [-37.9142658167, 175.4551371, "1/88"],
    [-37.9145371, 175.4555229667, "88"],
    [-37.9167784167, 175.4698118167, "209"],
    [-37.91671315, 175.4695459, "207"],
    [-37.916654, 175.4692565, "203"],
    [-37.9168566667, 175.4764833167, "269"],
    [-37.9170098667, 175.4835371333, "332"],
    [-37.9109654167, 175.455206, "60"],
    [-37.9170810333, 175.4814135167, "310"],
    [-37.9168965667, 175.4758632667, "263"],
    [-37.9154102833, 175.46304445, "149"],
    [-37.9154961, 175.4634764667, "153"],
    [-37.9152487667, 175.4638892333, "157"],
    [-37.9156422333, 175.4641169833, "159"],
    [-37.9158050167, 175.4648025333, "165"],
    [-37.91375215, 175.4584178167, "106"],
    [-37.9147696833, 175.4594047833, "114"],
    [-37.91474835, 175.46019985, "121"],
    [-37.9158845167, 175.4586385833, "112"],
    [-37.9150857, 175.459884, "120"],
    [-37.9126885833, 175.4573289333, "82"],
    [-37.91648165, 175.4694261333, "1/205"],
    [-37.9168508333, 175.4701398833, "211"],
    [-37.9169940167, 175.4708593833, "219"],
    [-37.9170359, 175.4710790167, "221"],
    [-37.91708375, 175.4713339, "223"],
    [-37.9170401, 175.4721885167, "231"],
    [-37.9170336667, 175.4724657667, "233"],
    [-37.9169188667, 175.4749939667, "249"],
    [-37.9168660833, 175.4760673333, "265"],
    [-37.91686435, 175.4768689833, "271"],
    [-37.9166818667, 175.4769821, "273"],
    [-37.9168443333, 175.4772235167, "275"],
    [-37.9166369667, 175.4773580167, "277"],
    [-37.9165761667, 175.4777388, "279"],
    [-37.9168418833, 175.47757295, "281"],
    [-37.9168319167, 175.47791855, "283"],
    [-37.9165834833, 175.47804975, "285"],
    [-37.91697015, 175.4853758167, "344"],
    [-37.9180125667, 175.4811616, "316"],
    [-37.9169954833, 175.48221265, "318"],
    [-37.9157653333, 175.4543129833, "3/88"],
    [-37.9154571667, 175.4552445, "4/88"],
    [-37.8827312167, 175.4872892833, "5"],
    [-37.8831903667, 175.4877676167, "8"],
    [-37.8828024333, 175.4875113, "7"],
    [-37.8831045, 175.4875104167, "6"],
    [-37.8828241, 175.4877701, "9"],
    [-37.88302025, 175.4867592333, "2"],
    [-37.8827238667, 175.4870656, "3"],
    [-37.8832792333, 175.48802495, "10"],
    [-37.88271135, 175.4868632, "1"],
    [-37.8830189167, 175.4869722, "4"],
    [-37.8828316667, 175.4879782167, "11"],
    [-37.8831031667, 175.4879840167, "12"],
    [-37.8829747, 175.4879948833, "13"],
    [-37.88274605, 175.48484915, "21"],
    [-37.8834571667, 175.4855031833, "4"],
    [-37.8834955333, 175.4856944167, "2"],
    [-37.8838132333, 175.4854477333, "3"],
    [-37.8835369833, 175.4848281833, "11"],
    [-37.88336725, 175.48485965, "13"],
    [-37.8831959833, 175.48485645, "15"],
    [-37.8828621167, 175.48476675, "19"],
    [-37.8838400833, 175.4849657333, "7"],
    [-37.8837638167, 175.4848016167, "9"],
    [-37.8829594167, 175.4854216, "10"],
    [-37.8827830667, 175.4855451, "12"],
    [-37.88274165, 175.4853534, "14"],
    [-37.8827611667, 175.4850917, "16"],
    [-37.8830644, 175.48501895, "17"],
    [-37.8838288, 175.4856380833, "1"],
    [-37.8838275, 175.4852247167, "5"],
    [-37.883443, 175.4852514667, "6"],
    [-37.8831229667, 175.4853610833, "8"],
    [-37.8145997, 175.4058182333, "13"],
    [-37.8147182333, 175.4078123, "28"],
    [-37.81457405, 175.4067919, "23"],
    [-37.8140701667, 175.4071422833, "27"],
    [-37.8142806667, 175.4076163167, "29"],
    [-37.8149311167, 175.4068842833, "22"],
    [-37.8150038333, 175.4059631, "16"],
    [-37.7951609167, 175.3942458333, "200"],
    [-37.7911471333, 175.3929187167, "159B"],
    [-37.7905987667, 175.3938164667, "159C"],
    [-37.7912155833, 175.3932714167, "159A"],
    [-37.79397065, 175.3941075167, "190"],
    [-37.7944302667, 175.3943967333, "196"],
    [-37.7902842667, 175.3925200667, "151"],
    [-37.79289115, 175.3931896, "174"],
    [-37.7936966833, 175.3937764, "188"],
    [-37.7941318167, 175.3948274667, "191"],
    [-37.7978721333, 175.3984214333, "249"],
    [-37.7981105667, 175.39574825, "232A"],
    [-37.7938025333, 175.3924897, "178"],
    [-37.7985639333, 175.3952936333, "232B"],
    [-37.7918765, 175.3926438167, "162"],
    [-37.7908330333, 175.39227155, "154"],
    [-37.7962404, 175.3968673, "225"],
    [-37.7923051, 175.3933906333, "171A"],
    [-37.7927951833, 175.3942652333, "171B"],
    [-37.7901405833, 175.3919332833, "146"],
    [-37.7965292833, 175.396445, "226"],
    [-37.7989539333, 175.3987508667, "258"],
    [-37.7975085, 175.3942399167, "218A"],
    [-37.7982403667, 175.3938506167, "218B"],
    [-37.7947115833, 175.3953049, "203"],
    [-37.7925679167, 175.3935303833, "171C"],
    [-37.7951510667, 175.3951699667, "206"],
    [-37.7942058167, 175.39426, "192"],
    [-37.8151522, 175.3671718, "2"],
    [-37.8124476333, 175.3641774667, "38C"],
    [-37.8142324833, 175.3640258333, "36"],
    [-37.8147477833, 175.3658554333, "18"],
    [-37.8149241, 175.3663270333, "14"],
    [-37.8127630333, 175.3645959667, "38D"],
    [-37.8802473333, 175.4761364833, "161"],
    [-37.8803540333, 175.4775673167, "169A"],
    [-37.8808955167, 175.4678431, "87A"],
    [-37.8812967167, 175.45925645, "22A"],
    [-37.8801625833, 175.4788012833, "181"],
    [-37.8801798667, 175.4784953, "179"],
    [-37.8805060333, 175.4783115333, "175"],
    [-37.8802037167, 175.4779421333, "171"],
    [-37.8802002, 175.4782253667, "173"],
    [-37.88066575, 175.4696257, "105"],
    [-37.88142225, 175.4685359, "99D"],
    [-37.880149, 175.4790061333, "183"],
    [-37.8807033, 175.4684905333, "99A"],
    [-37.8811922, 175.4685214167, "99C"],
    [-37.8809802667, 175.4685055, "99B"],
    [-37.88134225, 175.4657706, "69"],
    [-37.8807472167, 175.46754285, "83"],
    [-37.8802148333, 175.4776531667, "169"],
    [-37.8802820833, 175.4763336, "163"],
    [-37.8802558333, 175.4772608667, "165"],
    [-37.8806246667, 175.4705465167, "113"],
    [-37.88113685, 175.4643511667, "53A"],
    [-37.88095905, 175.4643489, "53"],
    [-37.88154715, 175.4657577833, "67"],
    [-37.8809616167, 175.4639502667, "49"],
    [-37.8802025833, 175.48084275, "191A"],
    [-37.8806056333, 175.47098625, "117"],
    [-37.88044865, 175.47329545, "127"],
    [-37.8804726333, 175.47306075, "125"],
    [-37.8806984167, 175.4686680667, "101"],
    [-37.8805955167, 175.4711419833, "117A"],
    [-37.8806145167, 175.4707781333, "115"],
    [-37.88164575, 175.45804455, "16B"],
    [-37.88036875, 175.4755842, "153"],
    [-37.8806508333, 175.4700866667, "109"],
    [-37.8815960333, 175.4577537, "14"],
    [-37.88151485, 175.4579781667, "16A"],
    [-37.8813847833, 175.4644447333, "55"],
    [-37.8813670167, 175.4645692667, "57"],
    [-37.8809571333, 175.4641156833, "51"],
    [-37.8816293, 175.45738225, "10"],
    [-37.8818759333, 175.4575147, "12A"],
    [-37.8820464833, 175.4575854833, "12B"],
    [-37.8820319167, 175.4576747167, "12C"],
    [-37.8818586167, 175.4576652167, "12D"],
    [-37.8810945667, 175.46145875, "36"],
    [-37.8810898, 175.46167115, "38"],
    [-37.8810809667, 175.461937, "40"],
    [-37.8810701667, 175.4621895167, "42"],
    [-37.8812240833, 175.45898385, "20"],
    [-37.88121955, 175.45918975, "22"],
    [-37.8811737667, 175.45983295, "24"],
    [-37.88115855, 175.46004515, "26"],
    [-37.8811441, 175.46023075, "28"],
    [-37.8814057333, 175.4604056667, "30"],
    [-37.8811296167, 175.4604632667, "32"],
    [-37.88144325, 175.4580904667, "18"],
    [-37.88168545, 175.4564695667, "2"],
    [-37.8809346833, 175.4645998167, "59"],
    [-37.8809249833, 175.4648314, "61"],
    [-37.8810648667, 175.4624290833, "44"],
    [-37.8816609833, 175.4570327667, "8"],
    [-37.8804975333, 175.4721639167, "119"],
    [-37.8804971667, 175.4724005167, "121"],
    [-37.8806352, 175.4729319167, "123A"],
    [-37.8804951667, 175.4726299167, "123"],
    [-37.8806614, 175.4698499833, "107"],
    [-37.8806724167, 175.4731077667, "125A"],
    [-37.8808698667, 175.47335925, "129"],
    [-37.8808554167, 175.4735094333, "131"],
    [-37.8804224667, 175.4735332333, "133"],
    [-37.8804913, 175.47469655, "137B"],
    [-37.8803901, 175.4747040167, "137"],
    [-37.8803887333, 175.47486625, "139"],
    [-37.8807482167, 175.46714865, "77A"],
    [-37.8807597833, 175.4669996167, "77"],
    [-37.8807607667, 175.4673298667, "79"],
    [-37.88104675, 175.46741105, "81"],
    [-37.8812452833, 175.4676640333, "85"],
    [-37.8809039167, 175.4650308333, "63"],
    [-37.88112735, 175.4652241167, "65A"],
    [-37.8808660833, 175.4654164833, "65"],
    [-37.8811361, 175.4657563, "71"],
    [-37.8808503, 175.4658921167, "73"],
    [-37.8808297667, 175.4661495833, "75"],
    [-37.8807330167, 175.4677691667, "87"],
    [-37.8811556833, 175.46787915, "89"],
    [-37.88071555, 175.4680383167, "91A"],
    [-37.8807704167, 175.46804005, "91B"],
    [-37.88083325, 175.4680391667, "91C"],
    [-37.8809986, 175.4680511, "91"],
    [-37.8807155167, 175.46826605, "93"],
    [-37.8809702167, 175.4682232667, "95"],
    [-37.8807815333, 175.4750173333, "143"],
    [-37.8803783667, 175.4751021, "145"],
    [-37.88035755, 175.4753576667, "147"],
    [-37.8807471667, 175.47541785, "149"],
    [-37.8807513667, 175.4755767167, "151"],
    [-37.8803393, 175.4758476333, "159"],
    [-37.8802462333, 175.4774083333, "167"],
    [-37.8800620667, 175.4804408, "189"],
    [-37.8800557667, 175.48072595, "191"],
    [-37.88004135, 175.481018, "193"],
    [-37.8807389667, 175.47578795, "155"],
    [-37.88007905, 175.4799234833, "185"],
    [-37.88086485, 175.4703347667, "111A"],
    [-37.8806350333, 175.4703154167, "111"],
    [-37.8800789, 175.4801471833, "187"],
    [-37.8800045833, 175.4815507667, "197"],
    [-37.8800214333, 175.4812237167, "195"],
    [-37.8939151167, 175.4701667, "27"],
    [-37.8936762, 175.4701298, "31"],
    [-37.8924783167, 175.4700222667, "47"],
    [-37.8918865167, 175.469973, "51"],
    [-37.89367495, 175.4697996667, "24"],
    [-37.8943151667, 175.4702028667, "7"],
    [-37.8941286667, 175.4702044, "23"],
    [-37.8942378667, 175.4698431, "2"],
    [-37.8945567833, 175.47024855, "1/1-3/1"],
    [-37.8935522667, 175.4697719, "28"],
    [-37.8939433, 175.4703330667, "25"],
    [-37.8937860667, 175.4701428667, "29"],
    [-37.8935538167, 175.4701164833, "41"],
    [-37.8941460167, 175.46983875, "14"],
    [-37.8938438167, 175.46980825, "18"],
    [-37.8937419667, 175.4698073167, "22"],
    [-37.8944316, 175.4702330333, "3"],
    [-37.8943035167, 175.4704350167, "9"],
    [-37.8926233833, 175.4700377333, "43"],
    [-37.8922256167, 175.47000115, "49"],
    [-37.8917971667, 175.46961, "54"],
    [-37.8926854, 175.469645, "40"],
    [-37.8921227167, 175.4696225333, "48"],
    [-37.8939403167, 175.4698126, "16"],
    [-37.8909714667, 175.4681493667, "33"],
    [-37.89113605, 175.4681601333, "31"],
    [-37.8912736333, 175.4686223167, "26"],
    [-37.892202, 175.4686328333, "16"],
    [-37.8921055833, 175.46861625, "18"],
    [-37.8912406833, 175.4681574833, "27"],
    [-37.89073535, 175.4685119833, "32"],
    [-37.89037515, 175.4686127333, "36"],
    [-37.8907882833, 175.4681261167, "37-39"],
    [-37.8905470833, 175.46806415, "41"],
    [-37.8928384833, 175.4687398333, "4"],
    [-37.8927622667, 175.46885875, "8"],
    [-37.8926823333, 175.4687259, "10"],
    [-37.89258095, 175.4687121167, "12"],
    [-37.89248485, 175.4687019167, "14"],
    [-37.9064365333, 175.4541838333, "29"],
    [-37.9065554833, 175.4549096667, "1/35"],
    [-37.9060750333, 175.4550532833, "3/35"],
    [-37.9058351667, 175.4555274667, "5/35"],
    [-37.9055143333, 175.4559182333, "7/35"],
    [-37.9065810667, 175.4558807167, "36"],
    [-37.9065682333, 175.4553069, "37"],
    [-37.9064074667, 175.4522252167, "9"],
    [-37.9059521, 175.45592445, "2/35"],
    [-37.9108997167, 175.4805822667, "3"],
    [-37.9109122833, 175.47947205, "6A"],
    [-37.9109177167, 175.47936065, "8"],
    [-37.9111175, 175.4797094, "10"],
    [-37.9113005167, 175.4794321333, "12"],
    [-37.9111916333, 175.4793347333, "12A"],
    [-37.9112471833, 175.4797754667, "14"],
    [-37.9112473667, 175.4800788167, "11"],
    [-37.9113031333, 175.479914, "13"],
    [-37.91063835, 175.4803100333, "1"],
    [-37.9104951, 175.4800418667, "2"],
    [-37.9107454333, 175.4798887833, "4"],
    [-37.9108743667, 175.4802328833, "5"],
    [-37.9109565333, 175.4797847, "6"],
    [-37.9110407167, 175.4801576333, "7"],
    [-37.9112238167, 175.4804073167, "9"],
    [-37.921572, 175.4690554667, "8"],
    [-37.9210102667, 175.4691739667, "1"],
    [-37.9209054, 175.4687952333, "2"],
    [-37.92139265, 175.4695081333, "3"],
    [-37.9212156833, 175.4688233667, "4"],
    [-37.92161785, 175.4693603333, "5"],
    [-37.9215667, 175.4686771667, "6"],
    [-37.8971280667, 175.3833620167, "104"],
    [-37.8928069667, 175.3849023833, "58"],
    [-37.8960316833, 175.3834830167, "1/84"],
    [-37.8904228167, 175.38549425, "28"],
    [-37.8953458333, 175.3837370167, "84"],
    [-37.82145425, 175.3649986833, "7"],
    [-37.81972895, 175.3640394833, "24"],
    [-37.8211835333, 175.3645971667, "11"],
    [-37.8207776167, 175.3647366833, "14"],
    [-37.8209467167, 175.3640718167, "15"],
    [-37.8203904333, 175.3652387, "12"],
    [-37.9137399667, 175.3922778167, "2/73"],
    [-37.91124595, 175.39246205, "46"],
    [-37.9139008833, 175.3922517333, "3/73"],
    [-37.91350815, 175.39233345, "1/73"],
    [-37.9176178167, 175.4598785667, "19"],
    [-37.9184013833, 175.4603797833, "14"],
    [-37.9186543333, 175.4622474833, "6"],
    [-37.9173606667, 175.46006885, "19B"],
    [-37.9174988, 175.4603532, "19C"],
    [-37.9177378167, 175.4601680667, "19D"],
    [-37.91904695, 175.4627864167, "1"],
    [-37.91872175, 175.46300145, "2"],
    [-37.91901275, 175.46243355, "3"],
    [-37.9186912, 175.46265345, "4"],
    [-37.91856195, 175.4613744167, "10"],
    [-37.91851535, 175.4609194, "12"],
    [-37.9189516833, 175.4617426667, "5"],
    [-37.9188849, 175.4613117333, "7"],
    [-37.9186173667, 175.4618227833, "8"],
    [-37.9188575667, 175.4608533167, "9"],
    [-37.9173323833, 175.4597201333, "19A"],
    [-37.9178891, 175.4598711167, "17"],
    [-37.9180202833, 175.46025785, "16"],
    [-37.9016754833, 175.4689591, "10"],
    [-37.9008128667, 175.4686879833, "2"],
    [-37.9009759333, 175.46843985, "1"],
    [-37.9014464, 175.4685093167, "5"],
    [-37.90130095, 175.4688850167, "6"],
    [-37.9016211667, 175.4685312667, "7"],
    [-37.9014644167, 175.4690226833, "8"],
    [-37.9014864167, 175.4687479667, "9"],
    [-37.9010720333, 175.4687982333, "4"],
    [-37.9011746, 175.4685293333, "3"],
    [-37.9013743333, 175.4862629167, "3"],
    [-37.9017248, 175.48698725, "6"],
    [-37.9012848, 175.4859531833, "2"],
    [-37.9016014833, 175.4860586167, "10"],
    [-37.9014527667, 175.4865486167, "4"],
    [-37.90159855, 175.48677855, "5"],
    [-37.90183005, 175.4869517667, "7"],
    [-37.9017713833, 175.4866214167, "8"],
    [-37.9016935, 175.4863532333, "9"],
    [-37.90753, 175.46902475, "11"],
    [-37.9095893167, 175.4677886667, "39B"],
    [-37.9109792833, 175.4682655, "46A"],
    [-37.91108275, 175.4685749667, "46B"],
    [-37.91115625, 175.4686338833, "48C"],
    [-37.9110050167, 175.46807085, "48A"],
    [-37.91095895, 175.46781955, "48"],
    [-37.9108204, 175.4678798667, "46"],
    [-37.9110788833, 175.4683501, "48B"],
    [-37.9113655167, 175.4678862333, "52B"],
    [-37.9108344833, 175.4674433667, "45"],
    [-37.9080208833, 175.4692374833, "22"],
    [-37.9083263167, 175.4686353333, "27"],
    [-37.90844025, 175.4697672333, "26"],
    [-37.90818025, 175.4691643, "22A"],
    [-37.91258895, 175.4673144833, "64"],
    [-37.9123684167, 175.4671105167, "62"],
    [-37.9127896, 175.4663434833, "67"],
    [-37.91150695, 175.46757075, "54"],
    [-37.9098419667, 175.4683599167, "40"],
    [-37.91097155, 175.4673723, "47"],
    [-37.9078617667, 175.4693023667, "20"],
    [-37.9089053833, 175.4683338, "29"],
    [-37.9099875333, 175.46828695, "42"],
    [-37.9113045167, 175.4682282833, "50A"],
    [-37.9107373, 175.4665437833, "47C"],
    [-37.9108713, 175.4665006167, "49B"],
    [-37.9129575833, 175.4665350833, "69"],
    [-37.9108057333, 175.4667861, "47B"],
    [-37.9108904167, 175.4670609667, "47A"],
    [-37.9110041, 175.4668838667, "49A"],
    [-37.9111488833, 175.4673072667, "49"],
    [-37.9127369333, 175.46653495, "65"],
    [-37.91122205, 175.46770665, "52"],
    [-37.9113599, 175.467657, "52A"],
    [-37.9075002667, 175.4694598, "12"],
    [-37.9076741, 175.46939185, "14"],
    [-37.9078864833, 175.4699014333, "16"],
    [-37.9079676667, 175.46986515, "18"],
    [-37.90833225, 175.4695654167, "24"],
    [-37.9084313667, 175.4690023, "28"],
    [-37.9096631167, 175.46843925, "38"],
    [-37.9096189, 175.4680248667, "39"],
    [-37.911315, 175.4684015667, "50"],
    [-37.9073078333, 175.4691221167, "9"],
    [-37.9093386167, 175.4686052333, "34"],
    [-37.9091743667, 175.4682295833, "35"],
    [-37.90945425, 175.4681136333, "37"],
    [-37.90950645, 175.4685246333, "36"],
    [-37.9091745333, 175.4686900667, "32"],
    [-37.9127273333, 175.4669306667, "66"],
    [-37.913043, 175.4669127667, "68"],
    [-37.9113586333, 175.4672288167, "51"],
    [-37.9113531667, 175.4670099667, "51A"],
    [-37.9127951, 175.46667535, "71"],
    [-37.884095, 175.4568770667, "69A"],
    [-37.8838324333, 175.4568632333, "73A"],
    [-37.8866347667, 175.4565719833, "43"],
    [-37.8906992, 175.4569129667, "5"],
    [-37.8905596667, 175.4568912833, "7"],
    [-37.8892758333, 175.456777, "13A"],
    [-37.8901881167, 175.45687625, "1/11-11/11"],
    [-37.89070845, 175.4565194333, "1/4-3/4"],
    [-37.8902009333, 175.4563996667, "1/6-32/6"],
    [-37.8880562333, 175.4552566667, "26A"],
    [-37.8844905833, 175.4563941, "65"],
    [-37.8840861833, 175.45635875, "69"],
    [-37.8863777, 175.45685, "45A"],
    [-37.8909978167, 175.4569555833, "3"],
    [-37.8863633167, 175.4571221667, "45B"],
    [-37.8864835667, 175.4565624833, "45"],
    [-37.8881257667, 175.4569633333, "25A"],
    [-37.8905126667, 175.4574578833, "5A"],
    [-37.8907166167, 175.4575558333, "5B"],
    [-37.8866317167, 175.4572218, "41A"],
    [-37.8873822167, 175.4566324, "33"],
    [-37.8872964167, 175.4566407167, "35"],
    [-37.8866143833, 175.4569883667, "41"],
    [-37.8837334333, 175.45685885, "75A"],
    [-37.8860936, 175.4570698167, "49"],
    [-37.8855037167, 175.4564867333, "57"],
    [-37.8847617833, 175.4564164833, "59"],
    [-37.8844513167, 175.4566735333, "65A"],
    [-37.88419435, 175.45689485, "67A"],
    [-37.8842829333, 175.4563860333, "67"],
    [-37.88391675, 175.4563527, "73"],
    [-37.8837116667, 175.4563469333, "75"],
    [-37.889394, 175.4567865833, "13"],
    [-37.8890782333, 175.4567699333, "15"],
    [-37.8888433833, 175.4567615833, "17"],
    [-37.8886293333, 175.45674825, "19"],
    [-37.8884455333, 175.4567414833, "21"],
    [-37.8882809333, 175.45673085, "23"],
    [-37.8881163667, 175.456655, "25"],
    [-37.8880094667, 175.4562455667, "26"],
    [-37.89142225, 175.4569765, "1"],
    [-37.8914418, 175.4565121, "2"],
    [-37.8870694, 175.4566186333, "37"],
    [-37.8868689667, 175.45709495, "39A"],
    [-37.8868342167, 175.4565953333, "39"],
    [-37.8863517167, 175.4573732167, "45C"],
    [-37.8861983667, 175.4570712667, "47A"],
    [-37.8862286, 175.4568411833, "47B"],
    [-37.8880125833, 175.4547576833, "26B"],
    [-37.8860945833, 175.4565352167, "49A"],
    [-37.8904199167, 175.4568860167, "1/9-12/9"],
    [-37.8857833, 175.4565171833, "53"],
    [-37.8856455167, 175.45651885, "55"],
    [-37.8817373833, 175.4556858833, "72"],
    [-37.88593655, 175.45653005, "51"],
    [-37.8862765833, 175.4565127, "47"],
    [-37.8775379833, 175.4825127167, "28A"],
    [-37.87727315, 175.482376, "28"],
    [-37.87729155, 175.4821068667, "26"],
    [-37.8769019667, 175.4786293, "4C"],
    [-37.8767004333, 175.4787606, "4B"],
    [-37.8772910833, 175.4818029333, "24"],
    [-37.8771890667, 175.48153255, "22"],
    [-37.87708045, 175.4812278, "20"],
    [-37.8775351, 175.4826397667, "30A"],
    [-37.8772534167, 175.4827040167, "30"],
    [-37.877579, 175.4818970667, "24A"],
    [-37.876712, 175.4812017667, "21"],
    [-37.8773884333, 175.4832404167, "36"],
    [-37.8769804167, 175.4824093, "27"],
    [-37.8766636667, 175.482704, "31B"],
    [-37.8769937167, 175.4830107167, "31"],
    [-37.8767516667, 175.479482, "8A"],
    [-37.8769705667, 175.4818533667, "23"],
    [-37.8766017167, 175.48246365, "29A"],
    [-37.8764641833, 175.4825834, "29B"],
    [-37.8769964667, 175.4820980833, "25"],
    [-37.8769606333, 175.4826863833, "29"],
    [-37.87679475, 175.4828674667, "31A"],
    [-37.8770826, 175.4832520333, "33"],
    [-37.8772377, 175.48334835, "35"],
    [-37.8775367167, 175.48363695, "36A"],
    [-37.8775890833, 175.4831116, "34"],
    [-37.8773408667, 175.4829609, "32"],
    [-37.8762828667, 175.4801149667, "11"],
    [-37.87597055, 175.4792251167, "3"],
    [-37.8760466167, 175.4794375833, "5"],
    [-37.8761314, 175.4796617, "7"],
    [-37.8764699833, 175.48058085, "15"],
    [-37.8765455167, 175.4808159833, "17"],
    [-37.8767292667, 175.48028335, "14"],
    [-37.8765539833, 175.4798159833, "10"],
    [-37.87646245, 175.4795675, "8"],
    [-37.8763712167, 175.4793057167, "6"],
    [-37.8776228167, 175.481266, "20B"],
    [-37.8775729667, 175.482055, "26A"],
    [-37.8776195833, 175.4814085333, "22B"],
    [-37.8765414, 175.4790666667, "6A"],
    [-37.8773585333, 175.48356815, "38A"],
    [-37.8762120667, 175.4798686667, "9"],
    [-37.8766452667, 175.4800751167, "12"],
    [-37.8763675, 175.48034475, "13"],
    [-37.8766347833, 175.4810402667, "19"],
    [-37.8774052167, 175.4812147167, "20A"],
    [-37.8774057667, 175.4814070167, "22A"],
    [-37.8762723167, 175.479009, "4"],
    [-37.8761971167, 175.4787850833, "2"],
    [-37.8767849, 175.4796004667, "10A"],
    [-37.87648555, 175.47892075, "4A"],
    [-37.8767848, 175.4788595833, "6B"],
    [-37.8997092333, 175.48180175, "7"],
    [-37.8999472667, 175.4825543, "15"],
    [-37.8999358167, 175.4815958167, "4"],
    [-37.9000434833, 175.4825363833, "17"],
    [-37.9002215333, 175.4828014167, "16"],
    [-37.90002095, 175.4818578, "6"],
    [-37.9000853167, 175.48210025, "8"],
    [-37.8997820833, 175.4820087333, "9"],
    [-37.8998240167, 175.4822147833, "11"],
    [-37.8998576333, 175.48247455, "13"],
    [-37.8996422833, 175.4815878833, "5"],
    [-37.9002942833, 175.482764, "14"],
    [-37.9001676167, 175.4824792667, "12"],
    [-37.89953345, 175.4811912333, "1"],
    [-37.8997866833, 175.4810307833, "2"],
    [-37.8995802333, 175.4813792333, "3"],
    [-37.9001401333, 175.4822942333, "10"],
    [-37.8914648833, 175.4772108167, "7"],
    [-37.8919011833, 175.47723515, "1"],
    [-37.89187105, 175.47681175, "2"],
    [-37.8913584, 175.4765354167, "3/6"],
    [-37.8897734833, 175.47664395, "22"],
    [-37.8913508, 175.47668445, "1/6"],
    [-37.8915273667, 175.4762602, "12/6"],
    [-37.8916285, 175.4772315333, "5"],
    [-37.8913796, 175.4761122167, "7/6"],
    [-37.8915023833, 175.4767099333, "8/6"],
    [-37.89152, 175.4763519333, "11/6"],
    [-37.8915372, 175.4760592333, "14/6"],
    [-37.89153065, 175.4761616667, "13/6"],
    [-37.8915142333, 175.4764663667, "10/6"],
    [-37.8913717333, 175.4763199333, "5/6"],
    [-37.8905254833, 175.4766904, "14"],
    [-37.8903609333, 175.4766834833, "16"],
    [-37.88999105, 175.4766566833, "20"],
    [-37.8898741167, 175.4770700667, "21"],
    [-37.88946535, 175.4766037667, "24"],
    [-37.8890790333, 175.4764705833, "28"],
    [-37.88883405, 175.4767525667, "29"],
    [-37.8886383, 175.47663365, "31"],
    [-37.8913739667, 175.47622135, "6/6"],
    [-37.8913652833, 175.47641835, "4/6"],
    [-37.8901779667, 175.4766671167, "18"],
    [-37.8843281, 175.4794198167, "104"],
    [-37.88535045, 175.4866782167, "184"],
    [-37.8854485333, 175.4864475167, "182"],
    [-37.8867971833, 175.4705084167, "34"],
    [-37.8873998833, 175.4682775833, "20"],
    [-37.8873415667, 175.46844545, "22"],
    [-37.884267, 175.4871188333, "189"],
    [-37.8843410333, 175.4813043, "114A"],
    [-37.8836708667, 175.47833265, "90A"],
    [-37.88402285, 175.4784176667, "2/92"],
    [-37.8841246, 175.4784325, "1/92"],
    [-37.8874953667, 175.4680249333, "18"],
    [-37.8882076333, 175.4665346667, "2"],
    [-37.8847749, 175.4777212667, "89"],
    [-37.8847129167, 175.4883360167, "198"],
    [-37.8852412667, 175.4950174167, "258"],
    [-37.8851558333, 175.4809135167, "111A"],
    [-37.88425915, 175.490565, "219"],
    [-37.8843227167, 175.4792336667, "102"],
    [-37.8853703333, 175.47613215, "70"],
    [-37.8841992667, 175.4963818333, "267"],
    [-37.8839456333, 175.47862415, "96"],
    [-37.8849404833, 175.4785609167, "91B"],
    [-37.8834439167, 175.5003043667, "309"],
    [-37.8859648333, 175.4880242333, "2/194"],
    [-37.88679165, 175.4708238833, "36"],
    [-37.8846928333, 175.4966356667, "270"],
    [-37.8843265, 175.4790500333, "100"],
    [-37.8847626167, 175.48078795, "109"],
    [-37.88474565, 175.4788347167, "93"],
    [-37.8843263, 175.4786463833, "94"],
    [-37.8847555167, 175.4792519167, "95"],
    [-37.8847507833, 175.4802669333, "103"],
    [-37.8877261667, 175.4675846667, "1/14-8/14"],
    [-37.884759, 175.4805435333, "105"],
    [-37.8843192, 175.4802557667, "108"],
    [-37.8847632167, 175.4813335333, "113"],
    [-37.8880664667, 175.4668566667, "4"],
    [-37.8843192833, 175.4781745833, "88"],
    [-37.8842179667, 175.4927192667, "239"],
    [-37.8842136333, 175.4948947333, "257"],
    [-37.8841869, 175.4971351, "275"],
    [-37.8842592167, 175.487337, "191"],
    [-37.8842746, 175.4896256667, "213"],
    [-37.8842726, 175.4898100833, "1/213"],
    [-37.8846939167, 175.49589215, "264"],
    [-37.8847557667, 175.480013, "101"],
    [-37.8847654333, 175.4817589833, "117"],
    [-37.8843088167, 175.4819155, "120"],
    [-37.88495845, 175.4760208167, "74A"],
    [-37.8858546833, 175.48954395, "1/214"],
    [-37.8847226333, 175.49078585, "222"],
    [-37.8853824333, 175.4904875333, "220"],
    [-37.8851609, 175.4769312833, "75"],
    [-37.8832135333, 175.4966401667, "273"],
    [-37.8871125333, 175.4687638667, "24A"],
    [-37.8836533833, 175.49965535, "303"],
    [-37.8847623833, 175.4784197, "91"],
    [-37.8853003167, 175.4812587, "113B"],
    [-37.8839543333, 175.4780861333, "86"],
    [-37.8846811667, 175.49516135, "260"],
    [-37.8856284667, 175.4877555167, "1/194"],
    [-37.88470535, 175.4899576833, "1/218"],
    [-37.8858448, 175.4898961, "2/218"],
    [-37.8857487667, 175.4882389667, "3/194"],
    [-37.8858920833, 175.4886561833, "4/194"],
    [-37.8854131167, 175.4885925, "202"],
    [-37.8852231333, 175.48536035, "174"],
    [-37.88721395, 175.4674219167, "12A"],
    [-37.8850944, 175.4812663333, "113A"],
    [-37.8858759667, 175.4852820333, "172"],
    [-37.8843297167, 175.4777121167, "80"],
    [-37.8867259833, 175.4716590667, "42"],
    [-37.8841291333, 175.4812217833, "114"],
    [-37.8878423667, 175.46733415, "10"],
    [-37.8873731, 175.46722755, "12"],
    [-37.8873645167, 175.4677444, "16A"],
    [-37.8873792, 175.4676194833, "16B"],
    [-37.8871674667, 175.4675664, "16C"],
    [-37.8871631333, 175.4677062, "16D"],
    [-37.88761885, 175.4678307833, "16"],
    [-37.8872513, 175.4677940833, "18A"],
    [-37.8868627833, 175.4703096167, "32"],
    [-37.8866729333, 175.4725751667, "46"],
    [-37.8866649333, 175.4727545667, "48"],
    [-37.8866508833, 175.4729862833, "50"],
    [-37.8866308167, 175.4733044333, "52"],
    [-37.8866201167, 175.4735912, "54"],
    [-37.8866046, 175.4738994833, "56"],
    [-37.8867646333, 175.4710940833, "38"],
    [-37.8867434167, 175.4713738, "40"],
    [-37.8865795333, 175.471651, "42A"],
    [-37.8867192167, 175.4718726833, "44"],
    [-37.8879124167, 175.4671744, "8"],
    [-37.8847677333, 175.48104275, "111"],
    [-37.8842908, 175.4810946667, "112"],
    [-37.8847655167, 175.48152025, "115"],
    [-37.8842992333, 175.4815339, "116"],
    [-37.8843125167, 175.4817539167, "118"],
    [-37.8847685333, 175.4795402167, "97"],
    [-37.8847615667, 175.4797710333, "99"],
    [-37.8849925167, 175.48009295, "101A"],
    [-37.8850730167, 175.4803513167, "103A"],
    [-37.8850517667, 175.4806989167, "107"],
    [-37.8842659667, 175.4776982667, "80A"],
    [-37.8843255167, 175.4779083833, "82"],
    [-37.88372445, 175.4779537667, "84A"],
    [-37.88391925, 175.4779436333, "84"],
    [-37.8839372667, 175.4783140167, "90"],
    [-37.8849343833, 175.47834135, "91A"],
    [-37.8843215, 175.47842775, "92"],
    [-37.88379995, 175.4786243333, "96A"],
    [-37.8843308167, 175.47886585, "98"],
    [-37.8846524333, 175.4766493167, "76"],
    [-37.8845290833, 175.4764747667, "78A"],
    [-37.8845141833, 175.47672525, "78"],
    [-37.8847249, 175.4874558833, "192"],
    [-37.88422795, 175.4880656333, "197"],
    [-37.8842586167, 175.4888764, "205"],
    [-37.8847152, 175.4891847, "206"],
    [-37.8847452333, 175.48597775, "180"],
    [-37.8842725667, 175.4862342167, "181"],
    [-37.8842734167, 175.4864492, "183"],
    [-37.88427415, 175.4866713, "185"],
    [-37.8847306167, 175.48657095, "186"],
    [-37.88426915, 175.48689685, "187"],
    [-37.8842773667, 175.4856398, "179"],
    [-37.8852212833, 175.4924678, "236"],
    [-37.8854883167, 175.4880036333, "194"],
    [-37.8854214333, 175.48956085, "212"],
    [-37.8853153667, 175.4872245, "190"],
    [-37.8841928667, 175.4931503833, "241"],
    [-37.8844711667, 175.4984144, "290"],
    [-37.8842522667, 175.4992926333, "296"],
    [-37.88368415, 175.4993789667, "299"],
    [-37.8852287833, 175.49615515, "268"],
    [-37.8859148667, 175.4897217, "214"],
    [-37.8872887667, 175.4686820167, "24"],
    [-37.8862459167, 175.47553185, "66"],
    [-37.884721, 175.48537045, "176"],
    [-37.88427605, 175.4851847833, "175"],
    [-37.8842737833, 175.4854139833, "177"],
    [-37.88469795, 175.4945610167, "252"],
    [-37.8853844667, 175.47677695, "73"],
    [-37.8850111333, 175.4763984, "74"],
    [-37.8847382167, 175.4869962333, "188"],
    [-37.8872426333, 175.4689359833, "26"],
    [-37.8847101833, 175.4880854667, "196"],
    [-37.8850733, 175.4902483167, "218"],
    [-37.8865769333, 175.4741854167, "58"],
    [-37.8865507, 175.4747159333, "62"],
    [-37.88798625, 175.46700445, "6"],
    [-37.8865659, 175.4744709833, "60"],
    [-37.8865476667, 175.4748834667, "64"],
    [-37.8871864333, 175.4691891, "28"],
    [-37.8871582, 175.4693788167, "30"],
    [-37.8869467833, 175.4687736667, "26A"],
    [-37.8856446167, 175.4771148167, "71"],
    [-37.8851925333, 175.4762547833, "72"],
    [-37.8869292167, 175.4689437, "26B"],
    [-37.88426605, 175.48474735, "171"],
    [-37.884281, 175.4849628667, "173"],
    [-37.8847245167, 175.4848834667, "170"],
    [-37.8680607667, 175.4844529, "318"],
    [-37.86322315, 175.477174, "229"],
    [-37.86023885, 175.47171045, "177"],
    [-37.86190065, 175.4739293333, "200"],
    [-37.8673314333, 175.4835841, "306"],
    [-37.8671325167, 175.4839981167, "307"],
    [-37.8657566333, 175.4825140333, "287"],
    [-37.85661605, 175.4580103167, "35"],
    [-37.8584986667, 175.4693192667, "151"],
    [-37.86640715, 175.4833253333, "293"],
    [-37.8662972, 175.48401185, "301"],
    [-37.8615068, 175.4740312667, "197"],
    [-37.86248105, 175.4746844667, "208"],
    [-37.8654257333, 175.4789157833, "256"],
    [-37.86815405, 175.4856843833, "327"],
    [-37.8559617833, 175.4538523, "5"],
    [-37.8560217167, 175.4541485167, "7"],
    [-37.8545882, 175.4628883167, "73"],
    [-37.8623530667, 175.4756642667, "211"],
    [-37.8571193833, 175.46393905, "91"],
    [-37.8612014833, 175.47249975, "184"],
    [-37.8409288167, 175.37611985, "48"],
    [-37.8396866, 175.3762834833, "52"],
    [-37.840238, 175.3744657333, "75"],
    [-37.84304635, 175.3783802167, "24"],
    [-37.8407690333, 175.3753619333, "59"],
    [-37.8447812333, 175.3774333333, "5"],
    [-37.83956405, 175.3732069667, "82"],
    [-37.84004855, 175.3731001333, "83"],
    [-37.8401183167, 175.3739726667, "77B"],
    [-37.8406453, 175.3751587333, "63"],
    [-37.8435605667, 175.3793269333, "20"],
    [-37.8417591667, 175.3760676667, "49"],
    [-37.8413693, 175.3763867167, "46"],
    [-37.8399756833, 175.3748775, "74"],
    [-37.8421274167, 175.3758927833, "47"],
    [-37.8433708, 175.37858675, "22"],
    [-37.8410302333, 175.3737431833, "77A"],
    [-37.7912387167, 175.4809981333, "33"],
    [-37.7921037167, 175.48244855, "34"],
    [-37.7931116833, 175.4894669167, "108"],
    [-37.7922422833, 175.4888664333, "109"],
    [-37.8904655, 175.4340570833, "16"],
    [-37.8912684167, 175.4347386333, "38"],
    [-37.8918202833, 175.4356853333, "41"],
    [-37.9076504833, 175.4808292167, "2"],
    [-37.9077122167, 175.4810869667, "3"],
    [-37.9078427, 175.4811889667, "4"],
    [-37.9079905333, 175.4810739167, "5"],
    [-37.9079955, 175.4808534333, "6"],
    [-37.9078875833, 175.48062165, "7"],
    [-37.8624973167, 175.3995043333, "1302"],
    [-37.86458815, 175.3984334333, "1302B"],
    [-37.8495279667, 175.3855142, "1105"],
    [-37.8409388, 175.3715485333, "965"],
    [-37.8497607833, 175.3787181667, "1048D"],
    [-37.8474886167, 175.3815213, "1071"],
    [-37.8692470333, 175.4060449833, "1399"],
    [-37.86903025, 175.4050720333, "1410"],
    [-37.8720073, 175.4080915167, "1435"],
    [-37.8472647, 175.3801392333, "1050"],
    [-37.8484202, 175.37745075, "1048B"],
    [-37.8501358167, 175.37656745, "1048C"],
    [-37.8464420667, 175.3786923167, "1048A"],
    [-37.8636343667, 175.3989099167, "1302A"],
    [-37.86024445, 175.39640055, "1262B"],
    [-37.8455550167, 175.3768668, "1032"],
    [-37.8498453667, 175.3860935167, "1113"],
    [-37.8508258833, 175.3877938167, "1129"],
    [-37.8538246333, 175.3925789833, "1193"],
    [-37.8560212667, 175.3943255167, "1209"],
    [-37.8600963167, 175.39687755, "1262A"],
    [-37.8619671667, 175.398902, "1292"],
    [-37.8647795167, 175.4015556333, "1328A"],
    [-37.8641711, 175.40119575, "1328B"],
    [-37.8653665667, 175.4021896833, "1328"],
    [-37.8664159, 175.4057836, "1343"],
    [-37.8487010667, 175.3828026833, "1084B"],
    [-37.8487082, 175.3838392667, "1095"],
    [-37.84854995, 175.3826141833, "1084A"],
    [-37.8614933, 175.3962749667, "1262C"],
    [-37.8941389333, 175.4685426667, "1A"],
    [-37.8940808333, 175.46863395, "1C"],
    [-37.8941101167, 175.46858455, "1B"],
    [-37.8828690833, 175.4756987833, "2"],
    [-37.8829161167, 175.4758464333, "3"],
    [-37.8828703333, 175.47600365, "4"],
    [-37.8826165, 175.4759774167, "5"],
    [-37.8827374, 175.4756385167, "1"],
    [-37.8987844, 175.5778468, "196"],
    [-37.894548, 175.5752196167, "249"],
    [-37.8985254833, 175.5770166167, "3/207"],
    [-37.8979621333, 175.5725676167, "1/207"],
    [-37.9028557167, 175.5775770667, "1/159"],
    [-37.8968063833, 175.5714292167, "2/209"],
    [-37.8982935667, 175.5770144167, "4/207"],
    [-37.9069320167, 175.5687670833, "57"],
    [-37.89817425, 175.5708251167, "2/207"],
    [-37.90506995, 175.5738151167, "103"],
    [-37.9103484333, 175.57042275, "15"],
    [-37.8938830167, 175.57586675, "1/253"],
    [-37.8936416667, 175.5760817333, "2/253"],
    [-37.90255875, 175.5776407833, "2/159"],
    [-37.9004225167, 175.57797105, "178"],
    [-37.8969604, 175.5723327, "1/209"],
    [-37.8767003833, 175.4818637833, "31"],
    [-37.8757476333, 175.4817359, "21A"],
    [-37.87485205, 175.4797409167, "8"],
    [-37.87404295, 175.47989395, "5B"],
    [-37.8752598667, 175.4811949, "15A"],
    [-37.8760220833, 175.4807411167, "18A"],
    [-37.8743084667, 175.4802727, "7A"],
    [-37.8738682667, 175.4797568167, "3C"],
    [-37.8742434333, 175.47987315, "5A"],
    [-37.8759584333, 175.4806079667, "16A"],
    [-37.87510295, 175.48015575, "12"],
    [-37.8748438833, 175.48075465, "11A"],
    [-37.8763291167, 175.4819017667, "27"],
    [-37.8763574333, 175.4822859833, "29A"],
    [-37.8751449333, 175.48070945, "13"],
    [-37.8761885667, 175.4822191333, "27A"],
    [-37.8746679833, 175.4804258667, "9A"],
    [-37.87496675, 175.4808899333, "13A"],
    [-37.8757570833, 175.4808296833, "16"],
    [-37.8758986833, 175.4809562833, "18"],
    [-37.87612285, 175.4811980333, "20"],
    [-37.87624255, 175.4813098333, "22"],
    [-37.8748282667, 175.47948305, "4"],
    [-37.875127, 175.47954055, "6"],
    [-37.8765282333, 175.4819416667, "29"],
    [-37.87591735, 175.48192895, "23"],
    [-37.8759485667, 175.4815328667, "21"],
    [-37.87574945, 175.4813294167, "19"],
    [-37.8742483167, 175.4796583833, "3A"],
    [-37.8745132, 175.4795744833, "3"],
    [-37.8744832833, 175.4792603167, "1"],
    [-37.8745364667, 175.4798557, "5"],
    [-37.8746295, 175.4801628, "7"],
    [-37.8747969, 175.480295, "9"],
    [-37.8745014333, 175.48041985, "9B"],
    [-37.8740439, 175.4796883833, "3B"],
    [-37.8764163833, 175.48148435, "24"],
    [-37.8753753333, 175.4813299167, "17A"],
    [-37.8749682667, 175.4800068, "10"],
    [-37.8761475667, 175.481741, "25"],
    [-37.8755644, 175.4811591833, "17"],
    [-37.8753512333, 175.4809225, "15"],
    [-37.87494615, 175.4804919833, "11"],
    [-37.87563925, 175.4816151667, "19A"],
    [-37.8755416, 175.4806192667, "14"],
    [-37.9307413833, 175.4305783833, "8"],
    [-37.9316973167, 175.4500289833, "174"],
    [-37.9312246333, 175.4509272167, "183"],
    [-37.9317041167, 175.4519870667, "192"],
    [-37.9309645833, 175.4455487, "131"],
    [-37.9313707333, 175.4417409833, "106"],
    [-37.93144905, 175.4439987167, "124"],
    [-37.9312471833, 175.44044115, "90"],
    [-37.9310525167, 175.4572123333, "249"],
    [-37.9304025833, 175.4600948, "271"],
    [-37.9313988167, 175.4667548167, "330"],
    [-37.9317416, 175.4711342333, "370"],
    [-37.9311057, 175.4496502333, "171"],
    [-37.9307743333, 175.46711525, "333"],
    [-37.8983426, 175.4726432167, "6"],
    [-37.8982667833, 175.4723224167, "10"],
    [-37.8981903, 175.4719677667, "14"],
    [-37.8981034667, 175.4717559, "16"],
    [-37.8979483667, 175.47163995, "18"],
    [-37.8978498167, 175.4718887667, "9"],
    [-37.89804025, 175.4727496, "1"],
    [-37.8978692667, 175.4717117333, "11"],
    [-37.8982294833, 175.4721665, "12"],
    [-37.8983239333, 175.4724718833, "8"],
    [-37.89833275, 175.4728329, "4"],
    [-37.89817045, 175.4730263833, "2"],
    [-37.8979749667, 175.4721439333, "7"],
    [-37.8978645167, 175.4723602833, "5"],
    [-37.8980527833, 175.4724426, "3"],
    [-37.9118492167, 175.4777301333, "75"],
    [-37.9071599667, 175.48024025, "27A"],
    [-37.9070499833, 175.4802823167, "27"],
    [-37.9133935, 175.477312, "101"],
    [-37.9109577667, 175.4792493167, "58A"],
    [-37.9079175667, 175.4798474167, "35"],
    [-37.9057049167, 175.48129845, "18"],
    [-37.9045409833, 175.4821761, "8A"],
    [-37.9132981167, 175.47734815, "99"],
    [-37.9151731167, 175.4762851667, "115A"],
    [-37.9159149667, 175.4765031667, "128A"],
    [-37.9160620833, 175.4770954, "126"],
    [-37.91362925, 175.4775332333, "96"],
    [-37.9161206833, 175.47737745, "124"],
    [-37.9138744167, 175.4774362833, "98"],
    [-37.9159982167, 175.4768568, "126A"],
    [-37.9045271167, 175.4818595, "8"],
    [-37.9088441167, 175.4798303833, "40"],
    [-37.9080257833, 175.4798009667, "37"],
    [-37.9118080833, 175.4780394667, "73"],
    [-37.9120441667, 175.4783650167, "80"],
    [-37.9142880667, 175.4768798167, "107B"],
    [-37.9159508833, 175.4774919167, "122A"],
    [-37.9050646333, 175.4819231333, "14A"],
    [-37.9066002, 175.4808875, "28A"],
    [-37.90519225, 175.4815441667, "16"],
    [-37.91452115, 175.477165, "106"],
    [-37.90746095, 175.4804961333, "32"],
    [-37.91248555, 175.47814135, "86"],
    [-37.9158230167, 175.4760962167, "123"],
    [-37.9159919, 175.47604385, "125"],
    [-37.91623445, 175.4763621, "130"],
    [-37.90872535, 175.4791772, "41A"],
    [-37.9044587, 175.4821471167, "6A"],
    [-37.9075026667, 175.4797328167, "33A"],
    [-37.9109141167, 175.4788989667, "58"],
    [-37.9048600833, 175.4817091833, "12"],
    [-37.9156691333, 175.4761731833, "121"],
    [-37.9159156667, 175.4772401333, "120"],
    [-37.9158559667, 175.4770386667, "118"],
    [-37.9153897167, 175.4763100667, "117"],
    [-37.9155261333, 175.4762367333, "119"],
    [-37.9143680667, 175.4772159833, "104"],
    [-37.9091816833, 175.4799197, "44A"],
    [-37.9063697833, 175.4811747, "26B"],
    [-37.9055854667, 175.4813526667, "18B"],
    [-37.9140346667, 175.4774023333, "100"],
    [-37.9160233167, 175.4772866833, "122B"],
    [-37.9046896833, 175.4817846667, "10"],
    [-37.9078630333, 175.4802907167, "34"],
    [-37.9074586667, 175.4800447667, "31"],
    [-37.90766965, 175.4799655333, "33"],
    [-37.9121775667, 175.4782823667, "82"],
    [-37.91233785, 175.4782158167, "84"],
    [-37.9135061167, 175.47759595, "92"],
    [-37.9141940333, 175.4769194, "107A"],
    [-37.9047462167, 175.4820914167, "10A"],
    [-37.9071456333, 175.4806193333, "30"],
    [-37.9126591, 175.4780602, "88"],
    [-37.9043394833, 175.4819642167, "6"],
    [-37.9136969, 175.47784185, "96A"],
    [-37.9162752167, 175.4761951167, "132"],
    [-37.9120850833, 175.4778879333, "77"],
    [-37.9072933667, 175.48012235, "29"],
    [-37.9058775167, 175.4812227667, "20"],
    [-37.9060436, 175.48114975, "22"],
    [-37.90620285, 175.4810768167, "24"],
    [-37.9063685833, 175.4809921833, "26"],
    [-37.9065447667, 175.4809131167, "28"],
    [-37.91495335, 175.47652165, "111"],
    [-37.9087348, 175.4794214667, "41"],
    [-37.9089801333, 175.47978555, "42"],
    [-37.9089057333, 175.4793457667, "43"],
    [-37.9095931667, 175.4790578, "51"],
    [-37.9123723167, 175.4777452667, "81"],
    [-37.9126095167, 175.47765015, "91"],
    [-37.91277265, 175.4775717667, "93"],
    [-37.91509955, 175.4768812333, "110"],
    [-37.9152698333, 175.476794, "112"],
    [-37.9154395, 175.4767326333, "114"],
    [-37.91572125, 175.4765971833, "116"],
    [-37.9102388667, 175.47919135, "50"],
    [-37.9048902, 175.4819941833, "12A"],
    [-37.9091995333, 175.47891055, "47A"],
    [-37.9150900667, 175.4764547333, "113"],
    [-37.91524275, 175.4763963833, "115"],
    [-37.9094314833, 175.4791159333, "49"],
    [-37.9096957667, 175.4794569, "48A"],
    [-37.9091736667, 175.4796928333, "44"],
    [-37.9104137167, 175.4791214333, "52"],
    [-37.9095526333, 175.47951535, "48"],
    [-37.9092440667, 175.4791909833, "47"],
    [-37.905025, 175.4816333, "14"],
    [-37.91218695, 175.4778348667, "77A"],
    [-37.9105796, 175.4790363667, "54"],
    [-37.9142164167, 175.4773281, "102"],
    [-37.9093673833, 175.4796006833, "46"],
    [-37.9107540667, 175.4789564333, "56"],
    [-37.9090764333, 175.4792701333, "45"],
    [-37.9122119833, 175.4774975, "79"],
    [-37.9051519, 175.4770494, "5/37B"],
    [-37.9072341833, 175.4812645, "74"],
    [-37.90539015, 175.47753615, "21/37B"],
    [-37.9064404833, 175.4786360667, "52"],
    [-37.9053830667, 175.4751337333, "28"],
    [-37.9053326, 175.4740749833, "20A"],
    [-37.9055134833, 175.4740488, "20C"],
    [-37.90547225, 175.47397175, "20B"],
    [-37.9053470167, 175.4742053667, "20D"],
    [-37.9069486333, 175.4814998167, "73"],
    [-37.9051562667, 175.4778512167, "17/37B"],
    [-37.9052251333, 175.4746236833, "24"],
    [-37.9053746, 175.4777257833, "19/37B"],
    [-37.9071479667, 175.4809996833, "72"],
    [-37.9050343167, 175.47739, "24/37B"],
    [-37.9049808, 175.4775142667, "25/37B"],
    [-37.9051211333, 175.4773504667, "23/37B"],
    [-37.9068252833, 175.4810905167, "69"],
    [-37.9047089333, 175.4739594, "19"],
    [-37.9040900833, 175.4718856167, "1"],
    [-37.9048747833, 175.4744885333, "23"],
    [-37.90479065, 175.4742263667, "21"],
    [-37.905018, 175.47392355, "16"],
    [-37.9063578667, 175.4783819333, "50"],
    [-37.9049504167, 175.4747584333, "25"],
    [-37.9050288833, 175.47502195, "27"],
    [-37.9072899333, 175.48271985, "85"],
    [-37.9054541333, 175.4776966667, "20/37B"],
    [-37.90488845, 175.4772389833, "27/37B"],
    [-37.9047877333, 175.4775819667, "13/37B"],
    [-37.9049796, 175.4771942833, "28/37B"],
    [-37.9073132333, 175.4815289167, "76"],
    [-37.9050827, 175.47699535, "6/37B"],
    [-37.9061134667, 175.4770216167, "40A"],
    [-37.90611365, 175.4768269667, "38B"],
    [-37.9076197, 175.4825873167, "84"],
    [-37.9070038333, 175.4817050667, "75"],
    [-37.9047039333, 175.47730165, "11/37B"],
    [-37.9075484833, 175.4823327833, "82"],
    [-37.9054264167, 175.4753033833, "30"],
    [-37.9069885833, 175.47905425, "58"],
    [-37.906228, 175.477926, "48"],
    [-37.9058200667, 175.4765282833, "32"],
    [-37.9046413667, 175.4737464333, "17"],
    [-37.9050075333, 175.4778885167, "16/37B"],
    [-37.90499485, 175.4768944167, "7/37B"],
    [-37.9046556167, 175.4771346, "10/37B"],
    [-37.90527195, 175.47690975, "1/37B"],
    [-37.9052758833, 175.4771711833, "3/37B"],
    [-37.9052169, 175.4771015167, "4/37B"],
    [-37.90529785, 175.4770102333, "2/37B"],
    [-37.9058489333, 175.47780495, "45"],
    [-37.9048925167, 175.4769351667, "8/37B"],
    [-37.9043826, 175.4728787667, "15"],
    [-37.9049060333, 175.47352905, "12"],
    [-37.9056042667, 175.47696875, "37"],
    [-37.9049538167, 175.47372635, "14"],
    [-37.9048069667, 175.4730782, "10"],
    [-37.90405505, 175.4727157833, "11"],
    [-37.9043442, 175.4726702333, "13"],
    [-37.9039020833, 175.4723256667, "5"],
    [-37.9046807667, 175.4726619167, "6"],
    [-37.9047340667, 175.47286755, "8"],
    [-37.9050737, 175.4741203667, "18"],
    [-37.90621865, 175.47643995, "34"],
    [-37.9055253667, 175.4767246667, "35"],
    [-37.9062645167, 175.4765613333, "36"],
    [-37.9059193, 175.4768274667, "38"],
    [-37.90570735, 175.4773252333, "39"],
    [-37.9059801833, 175.4770579, "40"],
    [-37.9062604167, 175.4772333833, "42B"],
    [-37.9057853667, 175.4775903, "43"],
    [-37.9061028167, 175.4774772667, "44"],
    [-37.90589465, 175.47796755, "47"],
    [-37.9068853333, 175.48130165, "71"],
    [-37.9071345833, 175.4821319833, "79"],
    [-37.9074696333, 175.4820778, "80A"],
    [-37.90765195, 175.4820632833, "80B"],
    [-37.9071948, 175.4823366167, "81"],
    [-37.90725725, 175.4825442, "83"],
    [-37.9042386667, 175.4723893667, "7"],
    [-37.9049427667, 175.47739025, "26/37B"],
    [-37.9048325667, 175.4777169, "14/37B"],
    [-37.9048868, 175.4778717167, "15/37B"],
    [-37.9052664833, 175.4777734333, "18/37B"],
    [-37.9053551, 175.4774051333, "22/37B"],
    [-37.90398685, 175.4726027167, "9"],
    [-37.9047089333, 175.4770192, "9/37B"],
    [-37.9061652333, 175.4777069667, "46"],
    [-37.9067892667, 175.4808744667, "67"],
    [-37.9068334667, 175.47996825, "66"],
    [-37.9067120833, 175.4795692, "60"],
    [-37.9041594, 175.4721355, "3"],
    [-37.9046192333, 175.4724616667, "4"],
    [-37.9050749, 175.47524375, "29"],
    [-37.9068698, 175.4786657833, "54"],
    [-37.9057202, 175.4762706, "32B"],
    [-37.9051451333, 175.4743827, "22"],
    [-37.90625565, 175.4769934167, "40B"],
    [-37.90604295, 175.4772728667, "42A"],
    [-37.9047528, 175.4774456167, "12/37B"],
    [-37.9073914, 175.4817937167, "78"],
    [-37.9070766667, 175.4819295333, "77"],
    [-37.8755341, 175.4678237, "7"],
    [-37.87529185, 175.467879, "5"],
    [-37.8751691333, 175.4682586333, "6"],
    [-37.8759656, 175.4679058667, "13"],
    [-37.87506995, 175.4678763667, "3"],
    [-37.8749979833, 175.46825515, "4"],
    [-37.8748353667, 175.4678732833, "1"],
    [-37.8755232, 175.4682126833, "10"],
    [-37.87481615, 175.4682566167, "2"],
    [-37.8759362, 175.4677101333, "11"],
    [-37.8756999, 175.4681576833, "12"],
    [-37.87587545, 175.4680599833, "14"],
    [-37.8753491, 175.4682464333, "8"],
    [-37.8757606333, 175.46762115, "9"],
    [-37.8187813333, 175.5099677833, "62"],
    [-37.81924235, 175.5087604667, "49"],
    [-37.8177396167, 175.5119011167, "86"],
    [-37.8178875667, 175.51156545, "84"],
    [-37.8174387167, 175.51263255, "90"],
    [-37.83408825, 175.55531685, "1/1101"],
    [-37.8175450333, 175.51885165, "150"],
    [-37.8077506333, 175.541635, "400"],
    [-37.8136809, 175.5290861, "265"],
    [-37.8110874, 175.53251965, "304"],
    [-37.8095875, 175.5753655167, "2/729"],
    [-37.83343, 175.5554701333, "1101"],
    [-37.8173373833, 175.5201625167, "160"],
    [-37.80918625, 175.5753678333, "1/729"],
    [-37.8101949167, 175.5340213667, "320"],
    [-37.8114688333, 175.5313781167, "299"],
    [-37.8110666833, 175.5317111833, "301"],
    [-37.8174875833, 175.5162427833, "126"],
    [-37.8121336833, 175.5303464167, "289"],
    [-37.8180013167, 175.5178742, "2/138"],
    [-37.81761695, 175.51742335, "1/138"],
    [-37.8074874667, 175.5440482, "430"],
    [-37.80752155, 175.5425832333, "416"],
    [-37.8366309333, 175.5496806333, "1173"],
    [-37.8169579833, 175.5214218667, "179"],
    [-37.8298305, 175.5634204, "1007"],
    [-37.8149217167, 175.5283630333, "247"],
    [-37.8217308333, 175.5663090333, "910"],
    [-37.81460935, 175.5745359167, "797"],
    [-37.8234203333, 175.5658778, "924"],
    [-37.8319167167, 175.5559498, "1086"],
    [-37.8306048167, 175.5616193833, "1023"],
    [-37.81758865, 175.57007665, "851"],
    [-37.8329407, 175.55562365, "1099"],
    [-37.81693675, 175.5123568167, "95"],
    [-37.8182193, 175.5131360833, "88"],
    [-37.8130308833, 175.5297032667, "273"],
    [-37.8095776, 175.55597085, "544"],
    [-37.8072376833, 175.5452215833, "443"],
    [-37.81966705, 175.5090003167, "48"],
    [-37.8169615333, 175.5198118833, "159"],
    [-37.8169314, 175.51421915, "112"],
    [-37.8080136167, 175.5463236, "452"],
    [-37.807907, 175.5458772167, "448"],
    [-37.80796455, 175.5461119167, "450"],
    [-37.8168847833, 175.5220721833, "181"],
    [-37.8354269, 175.5522720333, "1145"],
    [-37.83545425, 175.5543820167, "1129"],
    [-37.8082469167, 175.5385727167, "376"],
    [-37.8076848, 175.5419475167, "408"],
    [-37.8162252667, 175.5265092167, "225"],
    [-37.8166361333, 175.52144, "1/179"],
    [-37.8070565833, 175.5441373667, "429"],
    [-37.8075943333, 175.5444878167, "432"],
    [-37.8221778667, 175.5667572, "911"],
    [-37.8179158667, 175.5105938667, "73"],
    [-37.807556, 175.5460459333, "447"],
    [-37.8080632333, 175.5465634, "454"],
    [-37.8070305833, 175.54991865, "483"],
    [-37.80831265, 175.5514465667, "526"],
    [-37.80744605, 175.5634000833, "603"],
    [-37.8164026833, 175.5278071167, "234"],
    [-37.80656415, 175.5705962833, "665"],
    [-37.81898205, 175.5685284167, "862"],
    [-37.8236973167, 175.56648815, "927"],
    [-37.8256295833, 175.5653636167, "965"],
    [-37.8142507167, 175.57521965, "789"],
    [-37.8094723167, 175.5346592, "349"],
    [-37.8098434333, 175.5333155167, "319"],
    [-37.8292230167, 175.5635525167, "1005"],
    [-37.8173514167, 175.5221399167, "180"],
    [-37.83840865, 175.5469221167, "1213"],
    [-37.8379536333, 175.5475567833, "1201"],
    [-37.81720545, 175.5149902333, "116"],
    [-37.8085928833, 175.5380488, "370"],
    [-37.80779995, 175.5386938833, "379"],
    [-37.8204958333, 175.50876015, "34"],
    [-37.82623815, 175.56358455, "970"],
    [-37.81448725, 175.5734910333, "804"],
    [-37.8222833167, 175.5659173667, "912"],
    [-37.8170449333, 175.5277756167, "1/232"],
    [-37.8176035333, 175.5269654167, "2/232"],
    [-37.8323760333, 175.5575159333, "1078"],
    [-37.83021075, 175.5612354667, "1024"],
    [-37.9305489, 175.5017878333, "90"],
    [-37.93116365, 175.5055481833, "122"],
    [-37.9319767167, 175.5109385, "168"],
    [-37.93029815, 175.4998441167, "72"],
    [-37.9291897167, 175.4957679, "35"],
    [-37.92986625, 175.4972463167, "50"],
    [-37.9290868833, 175.4948005167, "25"],
    [-37.9296040667, 175.4987881667, "63"],
    [-37.9309512167, 175.5043885167, "110"],
    [-37.9296868833, 175.4958722667, "38"],
    [-37.9295072167, 175.4977275833, "51"],
    [-37.9303624833, 175.5006042333, "74"],
    [-37.9319759, 175.5106025, "166"],
    [-37.9306431833, 175.5024661, "96"],
    [-37.9299079167, 175.4976426667, "52"],
    [-37.9312659333, 175.5064569833, "132"],
    [-37.93082875, 175.50372585, "106"],
    [-37.9320732833, 175.5108069, "167"],
    [-37.8443465167, 175.36530835, "32"],
    [-37.8448259333, 175.3650265167, "36"],
    [-37.8425576167, 175.3664466333, "8"],
    [-37.8925954833, 175.45710755, "3"],
    [-37.8930169167, 175.45739025, "13"],
    [-37.89310595, 175.4574966167, "17"],
    [-37.8931706667, 175.4571386, "19"],
    [-37.8930694833, 175.45792925, "15"],
    [-37.892484, 175.4570883333, "1"],
    [-37.8926542167, 175.4574440667, "5"],
    [-37.89269795, 175.4575341667, "7"],
    [-37.8926711333, 175.4579661, "9"],
    [-37.8929884833, 175.4571287, "11"],
    [-37.883121, 175.4810597, "11"],
    [-37.8827995833, 175.4808762167, "15"],
    [-37.8827993, 175.4810446833, "15A"],
    [-37.88305445, 175.4806939167, "14"],
    [-37.8832812833, 175.4806736333, "12"],
    [-37.8829723, 175.4809516, "13"],
    [-37.8836668, 175.4806524333, "8"],
    [-37.88350115, 175.4806812167, "10"],
    [-37.8838327667, 175.4806120333, "6"],
    [-37.8836368, 175.4810848667, "5"],
    [-37.8840162333, 175.4806070667, "4"],
    [-37.8841447, 175.4806001167, "2"],
    [-37.8837898, 175.4810769333, "3"],
    [-37.8834789167, 175.4810792167, "7"],
    [-37.8832999833, 175.4810661333, "9"],
    [-37.8839425333, 175.4810822667, "1"],
    [-37.8741644333, 175.466663, "1"],
    [-37.8741701833, 175.4671011667, "2"],
    [-37.8734758833, 175.4661548667, "11B"],
    [-37.8730602167, 175.4660412333, "17B"],
    [-37.8732532833, 175.4669407833, "12"],
    [-37.8736860667, 175.4670495333, "8"],
    [-37.8738914, 175.4662481167, "5B"],
    [-37.8740275667, 175.46708325, "4"],
    [-37.8728965, 175.4668399167, "16"],
    [-37.87401705, 175.4666682333, "3"],
    [-37.8740028333, 175.4662564, "5A"],
    [-37.8734885167, 175.467, "10"],
    [-37.8738630833, 175.4670664333, "6"],
    [-37.8737826, 175.4666489667, "7"],
    [-37.8735874, 175.46617485, "11A"],
    [-37.8736024167, 175.4666129, "9"],
    [-37.8730790167, 175.4668945167, "14"],
    [-37.8729272167, 175.4664146833, "19"],
    [-37.8733468333, 175.4665393167, "13"],
    [-37.8731517, 175.4664815167, "15"],
    [-37.8731441167, 175.4660683, "17A"],
    [-37.8825944667, 175.4798169833, "2"],
    [-37.8826055167, 175.4805495667, "10"],
    [-37.8825809333, 175.4800131333, "4"],
    [-37.8825441333, 175.4804278333, "8"],
    [-37.8828469, 175.4800110667, "3"],
    [-37.882842, 175.4802305333, "5"],
    [-37.8825584833, 175.4801972667, "6"],
    [-37.8828376, 175.4804269167, "7"],
    [-37.88275275, 175.4805278667, "9"],
    [-37.8828507833, 175.4798377667, "1"],
    [-37.8747543667, 175.3655736, "277"],
    [-37.8779646667, 175.3771985, "389"],
    [-37.8791017167, 175.3701385167, "1/326"],
    [-37.8809893667, 175.38422785, "458"],
    [-37.8801277667, 175.3840239333, "459"],
    [-37.8814240333, 175.3849688833, "468"],
    [-37.8806415333, 175.38358955, "452"],
    [-37.8785101, 175.3802812167, "409"],
    [-37.8796759167, 175.3830951167, "445"],
    [-37.8803115167, 175.3830208833, "446"],
    [-37.8778165333, 175.3759684833, "373"],
    [-37.88137445, 175.3862355333, "473"],
    [-37.8782752833, 175.3789725, "397"],
    [-37.8808287667, 175.3851571, "469"],
    [-37.87896095, 175.3695827167, "326"],
    [-37.8765604833, 175.3662541167, "288"],
    [-37.8818931667, 175.38581595, "474"],
    [-37.8775986, 175.3747133333, "2/359"],
    [-37.8769582833, 175.3713375, "331"],
    [-37.8843103667, 175.3914426833, "531"],
    [-37.87595675, 175.3649699833, "271"],
    [-37.8781325, 175.3739238833, "356"],
    [-37.8763472667, 175.36476045, "270"],
    [-37.87676475, 175.3676648667, "298"],
    [-37.8769505833, 175.36918955, "310"],
    [-37.8766704667, 175.36975, "313"],
    [-37.8777166, 175.3720850333, "334"],
    [-37.8773668333, 175.3733521333, "349"],
    [-37.8772966667, 175.3744940833, "1/359"],
    [-37.87831085, 175.3791264167, "399"],
    [-37.8778886833, 175.37662545, "377"],
    [-37.8784267667, 175.3770323833, "388"],
    [-37.8790059333, 175.3798270667, "408"],
    [-37.91994325, 175.4698456167, "5"],
    [-37.9200047, 175.4693797833, "6"],
    [-37.9195710333, 175.4694752833, "2"],
    [-37.9203742667, 175.4697562833, "7"],
    [-37.9196343, 175.4699295667, "3"],
    [-37.9198162, 175.4690209, "4"],
    [-37.8824037833, 175.4600990333, "5"],
    [-37.88208185, 175.4598317167, "9"],
    [-37.8826121667, 175.4600836333, "3"],
    [-37.8826033333, 175.45961605, "2"],
    [-37.8822431167, 175.4600865, "7"],
    [-37.8821465833, 175.4595746, "8"],
    [-37.8823125667, 175.45958745, "6"],
    [-37.8824702667, 175.4595934167, "4"],
    [-37.9092579167, 175.46735845, "6A"],
    [-37.9089322167, 175.4674924, "10"],
    [-37.90894585, 175.4672735167, "12"],
    [-37.9089078333, 175.46711725, "11"],
    [-37.9089631667, 175.4669939667, "9"],
    [-37.90904455, 175.4673255, "8"],
    [-37.9094559, 175.4668010167, "1"],
    [-37.9093255, 175.4673469667, "4A"],
    [-37.9093457833, 175.46717355, "4"],
    [-37.9095302167, 175.4670570667, "2"],
    [-37.9090935, 175.4664936667, "3"],
    [-37.90917125, 175.4672602333, "6"],
    [-37.90908325, 175.4669295667, "7"],
    [-37.9092908333, 175.4668895333, "5"],
    [-37.8593663833, 175.4539760167, "251"],
    [-37.8754824, 175.4604578167, "63"],
    [-37.8750289833, 175.4602931333, "67"],
    [-37.7985084167, 175.4478579333, "941"],
    [-37.842417, 175.4531796833, "443"],
    [-37.8085080333, 175.45099665, "810"],
    [-37.79048555, 175.44243815, "1063"],
    [-37.8492731667, 175.4532494833, "355"],
    [-37.8094198833, 175.4503523667, "819"],
    [-37.8728692167, 175.4594153667, "91"],
    [-37.8522977333, 175.4539347833, "344"],
    [-37.8484041333, 175.45409895, "372"],
    [-37.8479726833, 175.45304965, "387"],
    [-37.7948086, 175.4476616833, "994"],
    [-37.7914089, 175.4452872333, "1027"],
    [-37.8080105, 175.4498779333, "835"],
    [-37.8722349333, 175.4592175167, "99"],
    [-37.8091485667, 175.45085495, "821"],
    [-37.8594542833, 175.4549678833, "5/246"],
    [-37.8230668667, 175.4541309833, "660"],
    [-37.8316753333, 175.4539613167, "562"],
    [-37.8387429833, 175.4531928, "475"],
    [-37.8545740667, 175.4540875333, "294"],
    [-37.7900112167, 175.4442665, "1045"],
    [-37.8172833167, 175.4539773167, "724"],
    [-37.83503155, 175.453934, "542"],
    [-37.8607128667, 175.4548002, "2/241"],
    [-37.8380142833, 175.45391425, "490"],
    [-37.8275037167, 175.4529093833, "589"],
    [-37.8596196, 175.4542151, "249"],
    [-37.8595530167, 175.45479165, "3/246"],
    [-37.85959605, 175.45471705, "2/246"],
    [-37.8592503167, 175.4544837333, "252"],
    [-37.8713457667, 175.4587725833, "111"],
    [-37.8595053, 175.4548791833, "4/246"],
    [-37.79668195, 175.4482608333, "958"],
    [-37.8227231, 175.4540730167, "670"],
    [-37.8750904833, 175.4593735333, "71"],
    [-37.8190378833, 175.4540990167, "702"],
    [-37.86957775, 175.4580359, "129"],
    [-37.8662393833, 175.4567130667, "169"],
    [-37.8687158167, 175.4577150333, "141"],
    [-37.86791495, 175.4573792167, "151"],
    [-37.8089932167, 175.4507184167, "823"],
    [-37.8666422833, 175.4569389667, "167"],
    [-37.8738722833, 175.4598649833, "81"],
    [-37.8169442833, 175.4534629333, "727"],
    [-37.8185275, 175.4534621333, "709"],
    [-37.8059395833, 175.44899615, "859"],
    [-37.8327434833, 175.4540100333, "550"],
    [-37.8604312833, 175.4546856333, "1/241"],
    [-37.8610548833, 175.4549434167, "3/241"],
    [-37.8596720667, 175.45475175, "244"],
    [-37.8603010167, 175.4551234333, "238"],
    [-37.874473, 175.4600767667, "75"],
    [-37.8192958833, 175.4546863, "698"],
    [-37.80070935, 175.4483520333, "917"],
    [-37.8595345, 175.4546793167, "250"],
    [-37.8395576167, 175.4538942167, "470"],
    [-37.8600606333, 175.4551961167, "242"],
    [-37.8587876, 175.45357305, "261"],
    [-37.8202505167, 175.454168, "692"],
    [-37.83062305, 175.4541314, "574"],
    [-37.85965015, 175.4546251667, "1/246"],
    [-37.87094345, 175.4585491667, "115"],
    [-37.82367025, 175.4541148167, "654"],
    [-37.8761585333, 175.4607254667, "55"],
    [-37.8650849833, 175.4562546333, "183"],
    [-37.8104551333, 175.45176685, "803"],
    [-37.8601735167, 175.4545659833, "247"],
    [-37.8072936667, 175.4501624667, "842"],
    [-37.81121545, 175.4523795667, "795"],
    [-37.8082023667, 175.4500136333, "833"],
    [-37.8088097833, 175.4505667167, "825"],
    [-37.8073512333, 175.4494723833, "841"],
    [-37.8180043167, 175.45347675, "713"],
    [-37.8034810667, 175.44930745, "884A"],
    [-37.8133904167, 175.4533446667, "767"],
    [-37.7906012833, 175.4456008, "1032"],
    [-37.8036063333, 175.44934055, "884"],
    [-37.8086218, 175.4503990167, "827"],
    [-37.7990523833, 175.4480464, "931"],
    [-37.8435690667, 175.40554535, "296A"],
    [-37.84511005, 175.4057523167, "282"],
    [-37.8456481333, 175.4283544, "93"],
    [-37.8452106, 175.4213902167, "154"],
    [-37.8456685667, 175.4217703833, "151"],
    [-37.8450910333, 175.4066185167, "296B"],
    [-37.84556515, 175.3859519, "471"],
    [-37.8456769, 175.4356176167, "29"],
    [-37.8452146333, 175.4326596167, "54"],
    [-37.8456379667, 175.4318747833, "59"],
    [-37.8451947667, 175.4291500167, "82"],
    [-37.8456449667, 175.42712405, "103"],
    [-37.8452215333, 175.4202044833, "166"],
    [-37.84562355, 175.4192034833, "173"],
    [-37.84520295, 175.4171995667, "190"],
    [-37.8451047667, 175.41595175, "204"],
    [-37.84557985, 175.4160677, "201"],
    [-37.8451894667, 175.4139933167, "218"],
    [-37.8455275833, 175.4075856833, "277"],
    [-37.8455757667, 175.40668145, "281"],
    [-37.8451309667, 175.4038956667, "308"],
    [-37.8455923333, 175.40336095, "313"],
    [-37.8451457333, 175.4006193, "332"],
    [-37.8456046667, 175.3996052667, "345"],
    [-37.8450766, 175.3979973833, "362A"],
    [-37.8450326167, 175.3961487833, "376"],
    [-37.84556585, 175.3949421167, "389"],
    [-37.84503405, 175.3928639333, "406"],
    [-37.8450819, 175.3938952833, "398"],
    [-37.8449702833, 175.39000315, "430"],
    [-37.8455388, 175.3929698833, "403"],
    [-37.8455067667, 175.389923, "431"],
    [-37.8449729167, 175.38231105, "498"],
    [-37.8449880833, 175.38162075, "502"],
    [-37.8432495, 175.3824779667, "496"],
    [-37.8441658167, 175.4248163667, "122"],
    [-37.84258355, 175.3809411333, "512"],
    [-37.8451205833, 175.41321575, "228"],
    [-37.8454313833, 175.3813477333, "509"],
    [-37.8449337333, 175.3830211333, "494"],
    [-37.8456650333, 175.4344218333, "1/41"],
    [-37.8450306667, 175.3974560667, "362C"],
    [-37.8463207667, 175.4343822167, "2/42"],
    [-37.8450416833, 175.3967473667, "372"],
    [-37.8455358167, 175.4085091, "267"],
    [-37.8451470333, 175.4076077167, "276"],
    [-37.84420195, 175.39791495, "362B"],
    [-37.8452185667, 175.4259005667, "114"],
    [-37.8456212833, 175.4347298667, "39"],
    [-37.8452003167, 175.40904765, "262"],
    [-37.8451996667, 175.4122621833, "234"],
    [-37.84515415, 175.4098542167, "256"],
    [-37.8455715833, 175.4139006833, "223"],
    [-37.8455915333, 175.4136348333, "225"],
    [-37.8455279667, 175.3870696, "463"],
    [-37.8457080167, 175.4225169667, "145"],
    [-37.8450449333, 175.3784177833, "536"],
    [-37.8441582, 175.3843482, "480"],
    [-37.8441567667, 175.38280735, "494A"],
    [-37.8450534333, 175.3804865833, "516"],
    [-37.845458, 175.3819993833, "503"],
    [-37.8416720667, 175.4161419167, "202"],
    [-37.84561615, 175.4169546167, "193"],
    [-37.8456090833, 175.4248031, "127"],
    [-37.8452347167, 175.4210866, "156"],
    [-37.8452366333, 175.4236209667, "136"],
    [-37.8420864167, 175.3808174, "514"],
    [-37.9352309167, 175.4932222, "138"],
    [-37.9344554333, 175.48793725, "92"],
    [-37.93352515, 175.48479765, "59"],
    [-37.9333442833, 175.4806992167, "30"],
    [-37.9333265, 175.4832372833, "43"],
    [-37.9338463667, 175.4867482, "81"],
    [-37.9349315333, 175.4913314333, "109"],
    [-37.9335968833, 175.4853604, "63"],
    [-37.9316883, 175.48456045, "53"],
    [-37.9338528333, 175.4839506, "52"],
    [-37.8310454167, 175.5756857833, "775"],
    [-37.8312273667, 175.5775630667, "757"],
    [-37.8293654833, 175.5685721667, "851"],
    [-37.8285495833, 175.56486995, "881"],
    [-37.8309590333, 175.5733609, "801"],
    [-37.8305305333, 175.5736851833, "790"],
    [-37.8295682333, 175.56931885, "841"],
    [-37.83130275, 175.5782757167, "753"],
    [-37.8283176167, 175.5655312333, "879"],
    [-37.8540068167, 175.37670555, "34"],
    [-37.85430545, 175.3768498167, "32"],
    [-37.8549918167, 175.3798488333, "5"],
    [-37.85449605, 175.37689005, "33"],
    [-37.8547125333, 175.3802214167, "4"],
    [-37.8545867833, 175.3781517833, "28"],
    [-37.8547440667, 175.37743325, "31"],
    [-37.85420255, 175.3773112333, "30"],
    [-37.8879053333, 175.5233262333, "1/18"],
    [-37.8881771333, 175.5232950167, "2/18"],
    [-37.8834455333, 175.45836535, "92"],
    [-37.8863947167, 175.4586610667, "58B"],
    [-37.8866006667, 175.45961975, "55A"],
    [-37.8867239167, 175.4592584167, "55"],
    [-37.88667, 175.4586812, "56"],
    [-37.8817044333, 175.4588333167, "113"],
    [-37.8815483333, 175.4587898667, "115"],
    [-37.8814229167, 175.4587740833, "117"],
    [-37.8913856667, 175.4590918167, "18"],
    [-37.8915707667, 175.4591145167, "16"],
    [-37.8868740833, 175.4599066167, "53C"],
    [-37.88889255, 175.4599269833, "37B"],
    [-37.89262475, 175.4600617167, "7A"],
    [-37.8889847167, 175.4594067667, "37A"],
    [-37.8925890833, 175.4585589, "10B"],
    [-37.8824604, 175.4588691333, "105"],
    [-37.8836036333, 175.4583701, "90"],
    [-37.8908670667, 175.4585197333, "24A"],
    [-37.8826975167, 175.4583391, "98"],
    [-37.8835235167, 175.4590010333, "95"],
    [-37.8838230333, 175.4583829333, "88"],
    [-37.8845143667, 175.4579167, "80A"],
    [-37.8828394333, 175.4583557667, "96"],
    [-37.88251835, 175.4583208667, "100"],
    [-37.8926768167, 175.4583797667, "10C"],
    [-37.88716595, 175.4586927333, "50"],
    [-37.8883195667, 175.4593362333, "43"],
    [-37.8864967833, 175.4592373833, "59"],
    [-37.8871386833, 175.4592945833, "51"],
    [-37.8836205667, 175.4589701333, "91"],
    [-37.8870057667, 175.4587382167, "52"],
    [-37.8823566667, 175.4583266833, "102"],
    [-37.8867508, 175.45831015, "2/54"],
    [-37.88680585, 175.4583326167, "54B"],
    [-37.8869064, 175.4592745833, "53"],
    [-37.8836770667, 175.45788765, "90A"],
    [-37.88377685, 175.45896945, "91A"],
    [-37.8844059167, 175.4593669667, "83A"],
    [-37.8843895833, 175.4590283, "83"],
    [-37.88413765, 175.4580580833, "84A"],
    [-37.8909576167, 175.4590556833, "22"],
    [-37.8932342, 175.4592408833, "4"],
    [-37.8929272167, 175.45863745, "8B"],
    [-37.8929735167, 175.4583677333, "8C"],
    [-37.8859658167, 175.4592039, "71"],
    [-37.8881317333, 175.4593295333, "45"],
    [-37.88894835, 175.45890335, "36"],
    [-37.88873325, 175.4588844167, "38"],
    [-37.8885017167, 175.45935385, "41A"],
    [-37.8888022667, 175.4593873, "39"],
    [-37.88814385, 175.4586047333, "44A"],
    [-37.8854610167, 175.4585890667, "66"],
    [-37.89301925, 175.4597807333, "3"],
    [-37.8888152167, 175.4597877833, "37C"],
    [-37.88442445, 175.4579215333, "82A"],
    [-37.8841846833, 175.4584516, "84"],
    [-37.8858883833, 175.4596244167, "71A"],
    [-37.8911121167, 175.4596169167, "21"],
    [-37.8882564333, 175.4588584167, "42"],
    [-37.8839837, 175.4584101, "86"],
    [-37.8862705, 175.4595605667, "63"],
    [-37.8878208, 175.4588156833, "46"],
    [-37.8891674833, 175.4594178, "35"],
    [-37.8884817, 175.4588827667, "40"],
    [-37.8845497667, 175.4584736333, "80"],
    [-37.8908341667, 175.45958975, "23"],
    [-37.8926482, 175.4588475667, "10A"],
    [-37.8846152, 175.4590487333, "81"],
    [-37.8868875833, 175.4597079333, "53B"],
    [-37.8867661667, 175.4580206, "1/54"],
    [-37.8923631167, 175.4601005833, "11A"],
    [-37.8880116333, 175.4588415167, "44"],
    [-37.88179955, 175.4582856667, "108"],
    [-37.8819699667, 175.4588568833, "109"],
    [-37.8906476667, 175.4590157667, "28"],
    [-37.8846581333, 175.4584694833, "78"],
    [-37.8843345167, 175.4584402833, "82"],
    [-37.8841375167, 175.4590033, "85"],
    [-37.88394965, 175.4578898667, "86A"],
    [-37.88396905, 175.45758895, "86B"],
    [-37.8837848667, 175.4578930833, "88A"],
    [-37.8839426667, 175.4589834333, "89"],
    [-37.8923547333, 175.4596697667, "11"],
    [-37.8916483333, 175.45965705, "13"],
    [-37.89177585, 175.4591300667, "14"],
    [-37.8914522167, 175.459646, "15"],
    [-37.8912940833, 175.4596277667, "17"],
    [-37.8923723833, 175.4592214, "12"],
    [-37.8907689667, 175.4590306667, "24"],
    [-37.8904437833, 175.4595327, "25A"],
    [-37.8906071167, 175.4595718167, "25"],
    [-37.8902158167, 175.4595238167, "27"],
    [-37.8911627, 175.4590753167, "20"],
    [-37.8886534333, 175.4593824833, "41"],
    [-37.8930344167, 175.4600257833, "3A-3F"],
    [-37.8865167167, 175.4586738833, "58"],
    [-37.8863451667, 175.4592180667, "61"],
    [-37.88626165, 175.45980935, "65"],
    [-37.8862540167, 175.4586216, "60"],
    [-37.8858030167, 175.4586246, "62"],
    [-37.8856375333, 175.4586118667, "64"],
    [-37.89284255, 175.4600622333, "5A"],
    [-37.8928040667, 175.4597492333, "5"],
    [-37.8861293, 175.4592111833, "69"],
    [-37.8858680333, 175.4598526167, "71B"],
    [-37.885777, 175.4599270167, "71C"],
    [-37.8857422667, 175.4597478167, "71D"],
    [-37.88574365, 175.45918075, "73"],
    [-37.8855746833, 175.4591693833, "75"],
    [-37.8930622167, 175.4592157833, "6"],
    [-37.8925581, 175.4603171, "7B"],
    [-37.8926518167, 175.46025555, "7C"],
    [-37.8929233, 175.4588164167, "8A"],
    [-37.8928556667, 175.4592156833, "8"],
    [-37.8924033, 175.4602587333, "9"],
    [-37.8826857833, 175.4589041167, "103"],
    [-37.8868134333, 175.4586863667, "54"],
    [-37.8821768333, 175.4588641833, "107"],
    [-37.8925898333, 175.4596910333, "7"],
    [-37.8862095667, 175.46007345, "67"],
    [-37.8893183667, 175.4594386167, "33"],
    [-37.88182795, 175.4588519167, "111"],
    [-37.8853995, 175.4591325167, "77"],
    [-37.8819874833, 175.4582899, "106"],
    [-37.8868931667, 175.4594645667, "53A"],
    [-37.89067275, 175.4587377333, "28A"],
    [-37.88729905, 175.45870125, "48"],
    [-37.8872955667, 175.4593124, "49"],
    [-37.8926355167, 175.4591491667, "10"],
    [-37.8821580833, 175.45830775, "104"],
    [-37.8581124833, 175.3783852167, "535"],
    [-37.8652348667, 175.3746078, "454"],
    [-37.8528962667, 175.3764204333, "591C"],
    [-37.8658603333, 175.3777156333, "466B"],
    [-37.8561505333, 175.3796002833, "563"],
    [-37.8574877833, 175.3782657333, "557"],
    [-37.8648613667, 175.3759225833, "466A"],
    [-37.8680267, 175.3758790667, "422"],
    [-37.8679018667, 175.3731075, "420"],
    [-37.85081775, 175.3829343167, "643"],
    [-37.8671912, 175.36468055, "352"],
    [-37.86727615, 175.36543555, "360"],
    [-37.8501304, 175.3806456, "637"],
    [-37.8673357333, 175.3661331333, "366A"],
    [-37.8673979333, 175.3667809, "366B"],
    [-37.8526604333, 175.3775103333, "591B"],
    [-37.8590671, 175.3777331, "525"],
    [-37.8604441333, 175.37691195, "511A"],
    [-37.8674681167, 175.3678874333, "374"],
    [-37.8677148833, 175.3698444833, "402"],
    [-37.8666863, 175.3663322333, "365"],
    [-37.8675554, 175.3754905167, "424A"],
    [-37.8676465167, 175.37623815, "424"],
    [-37.86661535, 175.37609495, "442"],
    [-37.8598401833, 175.3771549167, "511B"],
    [-37.8661314333, 175.3647742667, "353"],
    [-37.8666274333, 175.3736697167, "434"],
    [-37.8662379333, 175.3738677667, "438"],
    [-37.8520614, 175.3823100833, "613"],
    [-37.8521965167, 175.3812996167, "607"],
    [-37.85242245, 175.3821009333, "605"],
    [-37.8520654833, 175.3761835667, "591A"],
    [-37.8547938667, 175.3751005167, "591D"],
    [-37.8600232, 175.3780412167, "516"],
    [-37.8504624833, 175.3807091333, "635B"],
    [-37.86694425, 175.3698350167, "387"],
    [-37.8512808, 175.3826955167, "635A"],
    [-37.8626598333, 175.3763083833, "480"],
    [-37.8631832667, 175.3759811, "478"],
    [-37.8597738, 175.3758612333, "511"],
    [-37.8669354833, 175.3734885833, "432"],
    [-37.8660254333, 175.3741769333, "440"],
    [-37.8677621333, 175.3708737667, "418"],
    [-37.86470325, 175.3749985333, "456"],
    [-37.8496086167, 175.3843649167, "660"],
    [-37.8533389167, 175.3814388333, "599"],
    [-37.8513108, 175.3833057167, "636"],
    [-37.8582031333, 175.3789229667, "536"],
    [-37.8049091167, 175.4582433833, "111"],
    [-37.79217, 175.4610993667, "235"],
    [-37.7912009, 175.46131515, "243"],
    [-37.8073855167, 175.4519374833, "17"],
    [-37.7901330667, 175.4618390333, "259"],
    [-37.7979543, 175.46169615, "186"],
    [-37.7953406667, 175.4605087333, "199"],
    [-37.8075016167, 175.4517328833, "15"],
    [-37.7944439333, 175.4604859167, "221"],
    [-37.8960575333, 175.47501025, "14"],
    [-37.8979342, 175.4745448, "31A"],
    [-37.8968049167, 175.47448785, "24A"],
    [-37.8974204333, 175.475026, "25"],
    [-37.8977612, 175.47473925, "29"],
    [-37.89678435, 175.4748293, "20"],
    [-37.89589205, 175.4749720833, "12"],
    [-37.8966669, 175.4743795667, "22"],
    [-37.8958911333, 175.4761947, "5"],
    [-37.8971542833, 175.4752421167, "21"],
    [-37.8960713, 175.4760678, "7"],
    [-37.8971206833, 175.47398845, "30"],
    [-37.8959413333, 175.4751180667, "10A"],
    [-37.89774365, 175.4741330667, "40"],
    [-37.8964759167, 175.4757599833, "13"],
    [-37.8956967, 175.4756972333, "6"],
    [-37.8969728167, 175.4746339333, "24"],
    [-37.8975985667, 175.4742274833, "38"],
    [-37.8964206167, 175.4764929, "9"],
    [-37.89591475, 175.4748164, "14A"],
    [-37.8963322333, 175.4747763333, "18A"],
    [-37.8962043333, 175.4746025333, "18B"],
    [-37.8969914833, 175.47434705, "26A"],
    [-37.8975744667, 175.4748792167, "27"],
    [-37.8979075667, 175.4740015333, "42"],
    [-37.89599185, 175.4754597167, "10"],
    [-37.89628205, 175.4758701, "11"],
    [-37.8966986167, 175.4755950667, "15"],
    [-37.8954172667, 175.4758408833, "2"],
    [-37.8955642833, 175.47581195, "4"],
    [-37.8957927167, 175.4756119833, "8"],
    [-37.8974439333, 175.4743467667, "36"],
    [-37.8954518167, 175.4753103, "6A"],
    [-37.89718045, 175.4745253167, "26"],
    [-37.89567315, 175.4763134667, "1"],
    [-37.8957657667, 175.4763043333, "3"],
    [-37.8965164667, 175.4750518, "18"],
    [-37.89807905, 175.47440185, "31"],
    [-37.8968958, 175.4754382833, "17"],
    [-37.89631735, 175.4752079667, "16"],
    [-37.8972125833, 175.4741699833, "34"],
    [-37.8970015667, 175.47401225, "28"],
    [-37.9133573833, 175.4717484667, "287"],
    [-37.9048133167, 175.47635, "104"],
    [-37.9049925, 175.4762745167, "106"],
    [-37.90467735, 175.4753654167, "107"],
    [-37.90048465, 175.4783948167, "58"],
    [-37.8992426833, 175.4793293167, "42"],
    [-37.9046434667, 175.4764180667, "102"],
    [-37.91292555, 175.47197745, "285"],
    [-37.9061096167, 175.4751589833, "127"],
    [-37.9059487333, 175.4760527167, "120B"],
    [-37.9058349, 175.4758649667, "120A"],
    [-37.9046025333, 175.47507605, "107A"],
    [-37.9043145167, 175.4765927167, "98"],
    [-37.9026473833, 175.4773607333, "80"],
    [-37.8985112833, 175.4791536, "37"],
    [-37.90029415, 175.4779031333, "57"],
    [-37.9157889333, 175.4706511667, "307"],
    [-37.9161504167, 175.4698894, "317"],
    [-37.9162483333, 175.47040295, "315"],
    [-37.9119694833, 175.4724158167, "273"],
    [-37.9127305, 175.4727451167, "280A"],
    [-37.910892, 175.4729321833, "257"],
    [-37.91104955, 175.4723925167, "261"],
    [-37.91155295, 175.4731748833, "260"],
    [-37.9104050667, 175.4728724167, "249"],
    [-37.91055955, 175.4730871, "251"],
    [-37.9074686167, 175.4751091833, "188"],
    [-37.9079151, 175.4751543167, "192A"],
    [-37.9060373, 175.4757691167, "136"],
    [-37.90429105, 175.4760343833, "97"],
    [-37.9123212333, 175.4728413167, "276"],
    [-37.91122575, 175.4733142333, "240"],
    [-37.9028192, 175.4767472833, "83"],
    [-37.8979333667, 175.4794421167, "31"],
    [-37.8977516, 175.4801524833, "28"],
    [-37.89934065, 175.4785610667, "47"],
    [-37.9103580667, 175.4731422667, "247"],
    [-37.9106933167, 175.4735704667, "238"],
    [-37.90118205, 175.4774954833, "65"],
    [-37.9051274833, 175.4765782667, "106A"],
    [-37.9001666333, 175.4786251833, "54"],
    [-37.8996917833, 175.4776611333, "53A"],
    [-37.9157449833, 175.4701549667, "311"],
    [-37.8998454833, 175.47809685, "53"],
    [-37.8999531167, 175.4780619, "55"],
    [-37.9123259333, 175.4731539833, "274"],
    [-37.91203635, 175.4729645833, "262"],
    [-37.9025673667, 175.4766802, "79A"],
    [-37.8995076667, 175.4784470167, "49"],
    [-37.9160592167, 175.4710586333, "316"],
    [-37.9045513333, 175.4752828833, "105"],
    [-37.901886, 175.4778055167, "74B"],
    [-37.9007665833, 175.4782302, "60"],
    [-37.9027685, 175.4767654333, "81"],
    [-37.9042667667, 175.47545395, "99"],
    [-37.90210725, 175.4776131, "76"],
    [-37.914356, 175.4712761333, "299"],
    [-37.9037502167, 175.4768480333, "94"],
    [-37.8975508667, 175.48021795, "22"],
    [-37.9126604333, 175.4720775, "281"],
    [-37.90140745, 175.4783687833, "66"],
    [-37.9008916333, 175.4774276833, "63"],
    [-37.91678785, 175.47071965, "322"],
    [-37.9088462667, 175.4738790833, "227"],
    [-37.9123182167, 175.4722337, "277"],
    [-37.90000635, 175.47873665, "52"],
    [-37.9015533, 175.47851885, "70"],
    [-37.9015025333, 175.4779211333, "72"],
    [-37.9159910833, 175.4705165167, "313"],
    [-37.9138507667, 175.4715170333, "293"],
    [-37.9090778667, 175.4737512667, "229"],
    [-37.9128195833, 175.4726191, "282"],
    [-37.9131350667, 175.4724749667, "286"],
    [-37.913967, 175.4720198833, "294"],
    [-37.9129905, 175.4725340833, "284"],
    [-37.90123535, 175.4772228667, "67"],
    [-37.9143479, 175.4719130833, "298"],
    [-37.9126444833, 175.4726878, "280"],
    [-37.9165660167, 175.4702721167, "323"],
    [-37.8989755, 175.4782464167, "45"],
    [-37.9093448667, 175.47364355, "233"],
    [-37.91447635, 175.4712330833, "301"],
    [-37.9095208333, 175.4735786833, "235"],
    [-37.9096743333, 175.4741524, "232"],
    [-37.89939865, 175.47921515, "44"],
    [-37.9151960833, 175.4709698167, "305"],
    [-37.9097280833, 175.4745849333, "228"],
    [-37.9013794667, 175.47741285, "69"],
    [-37.9162268667, 175.47098265, "318"],
    [-37.8990613333, 175.4787713333, "43"],
    [-37.89780295, 175.4806196167, "26"],
    [-37.91541455, 175.4713506833, "306"],
    [-37.9097875333, 175.4748558667, "228A"],
    [-37.9081311333, 175.4748058, "196A"],
    [-37.9150421333, 175.4709822167, "303"],
    [-37.9053254667, 175.47610225, "114"],
    [-37.9065445333, 175.4749703667, "173"],
    [-37.9098205333, 175.4741548833, "234"],
    [-37.9081538667, 175.4750639167, "196"],
    [-37.9096973, 175.4748021167, "226A"],
    [-37.9093885667, 175.4742162667, "224A"],
    [-37.9091188, 175.4743508333, "222A"],
    [-37.90953665, 175.4733968, "235A"],
    [-37.90795735, 175.4748888667, "194"],
    [-37.9014723, 175.47869265, "68"],
    [-37.9095686833, 175.4733282167, "237A"],
    [-37.9090926833, 175.47436235, "222"],
    [-37.9012697667, 175.4780105833, "64"],
    [-37.9165941667, 175.4699768667, "325"],
    [-37.8983101833, 175.4790199333, "35A"],
    [-37.8989313833, 175.4795513167, "38"],
    [-37.9020688, 175.4782522167, "74"],
    [-37.91629055, 175.4698086667, "321"],
    [-37.90362685, 175.4769062, "92"],
    [-37.8978983167, 175.480096, "30"],
    [-37.9095879, 175.4744869833, "226"],
    [-37.8988477333, 175.4788966333, "41"],
    [-37.9144792667, 175.47185395, "300"],
    [-37.90345575, 175.4769852667, "90"],
    [-37.90295525, 175.4772238333, "84"],
    [-37.9155634, 175.47150915, "308A"],
    [-37.9077980667, 175.4749606833, "192B"],
    [-37.9024718333, 175.47689145, "79"],
    [-37.9010265333, 175.4781286667, "62"],
    [-37.9051546167, 175.4761810167, "108"],
    [-37.9027743667, 175.4772973, "82"],
    [-37.9113692333, 175.4732625, "242"],
    [-37.9061175, 175.4761095667, "140"],
    [-37.9126536833, 175.4718492, "283"],
    [-37.89984655, 175.47884775, "50"],
    [-37.8996625, 175.4783593833, "51"],
    [-37.9096838, 175.4734820333, "237"],
    [-37.9163971333, 175.4703382333, "319"],
    [-37.9019659333, 175.47801565, "74C"],
    [-37.9017677, 175.4778972667, "74A"],
    [-37.9082934833, 175.4747193, "198"],
    [-37.9124935167, 175.4721662833, "279"],
    [-37.9112822667, 175.4727057, "263"],
    [-37.9088314833, 175.4744561333, "220"],
    [-37.9140193667, 175.4723065, "294A"],
    [-37.9151048833, 175.4715047667, "302"],
    [-37.9155721667, 175.4712705333, "308"],
    [-37.91564375, 175.4698925833, "309"],
    [-37.9157315333, 175.4712060333, "310"],
    [-37.9158956833, 175.4711298667, "312"],
    [-37.9044821667, 175.4765082167, "100"],
    [-37.9045073333, 175.4759204333, "101"],
    [-37.9046759167, 175.4758561667, "103"],
    [-37.8983034667, 175.4792230333, "35"],
    [-37.8987899833, 175.4796567167, "36"],
    [-37.89867985, 175.4790447, "39"],
    [-37.8990768667, 175.47943105, "40"],
    [-37.8981085333, 175.4793068333, "33"],
    [-37.89915065, 175.4781128333, "45A"],
    [-37.8995490167, 175.4791011167, "46"],
    [-37.8997315333, 175.47899365, "48"],
    [-37.900319, 175.4785061, "56"],
    [-37.9056642333, 175.4759370167, "118"],
    [-37.9063413, 175.4756213333, "150"],
    [-37.8988354833, 175.47962055, "36A"],
    [-37.9029526, 175.4760132333, "87"],
    [-37.90312265, 175.4771544, "86"],
    [-37.9034438667, 175.4764194333, "91"],
    [-37.91418395, 175.4719746167, "296"],
    [-37.9140091667, 175.4714322, "295"],
    [-37.9141795833, 175.4713487, "297"],
    [-37.9138469333, 175.4720815833, "292"],
    [-37.91351575, 175.4716747833, "289"],
    [-37.9136813667, 175.4716021833, "291"],
    [-37.9139259667, 175.4722800333, "292A"],
    [-37.9136332, 175.4722156, "290"],
    [-37.9093265, 175.4742351667, "224"],
    [-37.8977406167, 175.4806423167, "24"],
    [-37.9048411167, 175.4757695667, "109"],
    [-37.9032051, 175.4765243833, "89"],
    [-37.91528, 175.4714141667, "304"],
    [-37.9032850667, 175.4770679, "88"],
    [-37.9158238167, 175.4703065333, "313A"],
    [-37.9064744333, 175.4758051, "150A"],
    [-37.9046115, 175.4767234667, "100A"],
    [-37.9076618833, 175.4744580667, "197"],
    [-37.9076246167, 175.4750397167, "190"],
    [-37.9026504333, 175.4768196167, "79B"],
    [-37.9051801167, 175.4756040167, "115"],
    [-37.89852955, 175.47974005, "34"],
    [-37.9075004, 175.47452445, "187"],
    [-37.90501535, 175.4756865333, "111"],
    [-37.9068534667, 175.4753966333, "180"],
    [-37.9029671, 175.4766338333, "85"],
    [-37.9065173667, 175.4755659333, "158"],
    [-37.9066938833, 175.4754834833, "166"],
    [-37.9061558333, 175.4757093333, "142"],
    [-37.90567525, 175.4753235167, "119"],
    [-37.9124889333, 175.4727737833, "278"]
];
//# sourceMappingURL=10000points.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" >\r\n    <div class=\"map\" #map style=\"position:absolute ;width:100%; height:100%\"></div>\r\n    <pop-up-dialog   [PopUpOpen]=\"this.popUpOpen\" [PopUptype]=\"1\" ></pop-up-dialog>\r\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" position=\"end\" >\r\n        <p matLine >\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n\r\n                <mat-icon class=\"icon_marging_left\">more_vert</mat-icon>\r\n            </button>\r\n        </p>\r\n        <p matLine>\r\n            <mat-menu #menu=\"matMenu\">\r\n\r\n                <button mat-menu-item (click)=\"measureDistance()\">\r\n                    <span>Measure Distance</span>\r\n                </button>\r\n\r\n                <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                    <span>Change Map</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"zoomMapCenterByLatLng()\">\r\n                    <span>Center map about a selected point</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n                    <span>Lasso</span>\r\n                </button>\r\n                <hr>\r\n                <button mat-menu-item [matMenuTriggerFor]=\"menu2\">\r\n                    <span>Lasso - Options and filters</span>\r\n                    <mat-menu #menu2=\"matMenu\">\r\n\r\n                        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,6)\">\r\n                            <span>Create cluster based on selected elements</span>\r\n                        </button>\r\n\r\n                        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                            <span>Highlight</span>\r\n                        </button>\r\n \r\n                        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n                            <span>Open in a map</span>\r\n                        </button>\r\n\r\n                            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                                <span>Remove from cluster</span>\r\n                            </button>\r\n                    </mat-menu>\r\n\r\n\r\n                </button>\r\n                <hr>\r\n                <button mat-menu-item (click)=\"loadselectedfromtable()\">\r\n                    <span>load selected points</span>\r\n                </button>\r\n \r\n                <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>Add Textual Annotation</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>Delete Textual Annotation</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>Draw Silde</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>Report</span>\r\n                </button>\r\n\r\n            </mat-menu>\r\n\r\n            <span> {{clusterView}} </span>\r\n\r\n        </p>\r\n\r\n                 \r\n                    <label>Ellipse</label>\r\n                    <input type=\"checkbox\" [(ngModel)]=\"isCheckedEllipse\" (change)=\"checkValueEllipse(isCheckedEllipse)\" />\r\n                    <hr>\r\n                    <label>line</label>\r\n                    <input type=\"checkbox\" [(ngModel)]=\"isCheckedLine\" (change)=\"checkValueLine(isCheckedLine)\" />\r\n                    <hr>\r\n                    <label>polygon</label>\r\n                    <input type=\"checkbox\" [(ngModel)]=\"isCheckedPolygon\" (change)=\"checkValuePolygon(isCheckedPolygon)\" />\r\n                    <hr>\r\n                    <label>points</label>\r\n                    <input type=\"checkbox\" [(ngModel)]=\"isCheckedPoints\" (change)=\"checkValuePoints(isCheckedPoints)\" />\r\n                    <hr>\r\n                    <label>Annontation</label>\r\n                    <input type=\"checkbox\" [(ngModel)]=\"isCheckedAnnontation\" (change)=\"checkValueAnnontation(isCheckedAnnontation)\" />\r\n                    <hr>\r\n                    <div class=\"info\" #info>\r\n                        <p #latLngCurrValues class=\"latLngCurrValues\"></p>\r\n                        <p>\r\n                            Length(in meters):\r\n                            <span id=\"length\"></span>\r\n                        </p>\r\n                        <p class=\"zoom\" #zoom></p>\r\n                        <label>lat :{{latLngHeadline}}</label>\r\n\r\n\r\n                    </div>\r\n\r\n     \r\n\r\n                    <!--button (click)=\"loadselectedfromtable()\">load selected points from table</button-->\r\n                    <!--button (click)=\"restMapZoom()\">restMapZoom</button>\r\n                            <button (click)=\"addtextLayer2()\">Add text group</button>\r\n                    <!--button (click)=\"measureDistance()\">measureDistance</button-->\r\n\r\n\r\n\r\n\r\n    \r\n    </mat-drawer>\r\n\r\n    <div class=\"example-sidenav-content\" style=\"float: right;\">\r\n        <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n            <mat-icon>menu</mat-icon>\r\n\r\n        </button>\r\n    </div>\r\n\r\n</mat-drawer-container>\r\n\r\n\r\n<mat-sidenav-container>\r\n    <mat-sidenav #sidenav2>\r\n\r\n    </mat-sidenav>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map {\n  position: absolute;\n  width: 100%;\n  height: 600px;\n  margin-top: 10px; }\n\n#btnsFloats {\n  position: fixed;\n  top: 0;\n  z-index: 1000000; }\n\n.my-div-icon {\n  width: 25px;\n  height: 25px;\n  background: red;\n  border: 3px dotted black; }\n\n.custom-content svg {\n  height: 22px;\n  width: 22px;\n  padding-top: 4px;\n  position: relative; }\n\n.custom-content.active::before {\n  content: \"+\";\n  font-weight: bold;\n  color: black;\n  position: absolute;\n  text-align: center;\n  width: 20px;\n  font-size: 22px; }\n\nlabel {\n  color: white; }\n\nhr {\n  border-top: 1px solid #807d7d;\n  margin: 0; }\n\n#progress {\n  display: none;\n  position: absolute;\n  z-index: 1000;\n  left: 400px;\n  top: 300px;\n  width: 200px;\n  height: 20px;\n  margin-top: -20px;\n  margin-left: -100px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: 4px;\n  padding: 2px; }\n\n#progress-bar {\n  width: 0;\n  height: 100%;\n  background-color: #76A6FC;\n  border-radius: 4px; }\n\n.textLabelclass {\n  white-space: nowrap;\n  font-weight: 300;\n  text-shadow: 0 0 0.1em black, 0 0 0.1em black,\r 0 0 0.1em black,0 0 0.1em black,0 0 0.1em;\n  color: yellow; }\n\n.row, .container-fluid {\n  height: 100%; }\n\np {\n  color: white;\n  font-size: 8pt; }\n\n.map, body, html {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  z-index: -10; }\n\n.latlng {\n  position: fixed;\n  top: 30px;\n  right: 10px;\n  color: red;\n  z-index: 100000;\n  background: white; }\n\n.mat-drawer-container {\n  height: 100%; }\n\n.mat-drawer {\n  background-color: #193061;\n  width: 200px;\n  background: #49474a;\n  background: #290940; }\n\n.mat-button.icon_marging_left {\n  margin-left: 20px; }\n\n/deep/.mat-menu-panel {\n  max-width: 1280px; }\n\n.info {\n  width: 100%;\n  border: 1px solid white; }\n\n/deep/.cdk-overlay-pane {\n  top: 50px; }\n\n.mat-drawer-container {\n  background: #343436; }\n\n.mat-button {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_SharedServiceMapTableGraphs_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedServiceMapTableGraphs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__10000points__ = __webpack_require__("../../../../../src/app/map/10000points.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(_SharedServiceMapTableGraphs) {
        this._SharedServiceMapTableGraphs = _SharedServiceMapTableGraphs;
    }
    MapComponent.prototype.zoomMapCenterByLatLng = function () {
        this.popUpOpen = true;
        // this.mapJs.setView([32, 35], 8, { animation: true });
    };
    MapComponent.prototype.loadselectedfromtable = function () {
        this.LoadMapComponent();
        console.log(this._SharedServiceMapTableGraphs.tableToMap);
        this.LayerSelected = L.layerGroup();
        var greenIcon = L.icon({
            iconUrl: "assets/images/map/icon.png",
            //shadowUrl: 'leaf-shadow.png',
            iconSize: [38, 85],
            // shadowSize:   [50, 64], // size of the shadow
            // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            // shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        console.log(this._SharedServiceMapTableGraphs.ShapeOnMapType);
        if (this._SharedServiceMapTableGraphs.ShapeOnMapType === 'type1')
            this.makeEllipses();
        else if (this._SharedServiceMapTableGraphs.ShapeOnMapType === 'type2')
            this.printPolygon();
    };
    MapComponent.prototype.printPolygon = function () {
        this.mapJs.setView(new L.LatLng(this._SharedServiceMapTableGraphs.tableToMap[1][0], this._SharedServiceMapTableGraphs.tableToMap[1][1]), 5);
        var firstpolyline = new L.Polyline(this._SharedServiceMapTableGraphs.tableToMap, {
            color: 'red',
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        });
        this.LayerSelected.addLayer(firstpolyline).addTo(this.mapJs);
    };
    MapComponent.prototype.checkValueEllipse = function (isChecked) {
        console.log(isChecked);
        if (isChecked === true) {
            this.LoadMapComponent();
            this.addEllipselayerGroup();
            this.addTextOnEllipselayerGroup();
            //this.addEllipseTooltiplayerGroup()
        }
        else {
            this.removeLayerGroup();
        }
    };
    MapComponent.prototype.checkValuePolygon = function (isChecked) {
        console.log(isChecked);
        if (isChecked === true) {
            this.LoadMapComponent();
            this.addPolygonlayerGroup();
        }
        else {
            this.removePolygonLayerGroup();
        }
    };
    MapComponent.prototype.checkValueLine = function (isChecked) {
        console.log(isChecked);
        if (isChecked === true) {
            this.LoadMapComponent();
            this.addLineslayerGroup();
        }
        else {
            this.removeLineslayerGroup();
        }
    };
    MapComponent.prototype.checkValuePoints = function (isChecked) {
        console.log(isChecked);
        if (isChecked === true) {
            this.LoadMapComponent();
            this.addLPointslayerGroup();
        }
        else {
            this.removeLineslayerGroup();
        }
    };
    MapComponent.prototype.checkValueAnnontation = function (isChecked) {
        console.log(isChecked);
        if (isChecked === true) {
            this.LoadMapComponent();
            //this.addLPointslayerGroup();
        }
        else {
            this.annotationlayerGrouppane.style.display = 'none';
            this.mapJs.remove(this.annotationlayerGroup);
        }
    };
    MapComponent.prototype.makeEllipses = function () {
        this.mapJs.setView(new L.LatLng(this._SharedServiceMapTableGraphs.tableToMap[0].lat, this._SharedServiceMapTableGraphs.tableToMap[0].lng), 5);
        for (var i = 0; i < this._SharedServiceMapTableGraphs.tableToMap.length; i++) {
            this.LayerSelected
                .addLayer(L.ellipse([this._SharedServiceMapTableGraphs.tableToMap[i].lat,
                this._SharedServiceMapTableGraphs.tableToMap[i].lng], [this._SharedServiceMapTableGraphs.tableToMap[i].hMajor,
                this._SharedServiceMapTableGraphs.tableToMap[i].hMinor], this._SharedServiceMapTableGraphs.tableToMap[i].Angle));
        }
        this.LayerSelected.addTo(this.mapJs);
    };
    MapComponent.prototype.restMapZoom = function () {
        this.mapJs.setView([31.945775, 35.108228], 2, { animation: true });
    };
    MapComponent.prototype.LoadLasso = function () {
        var toggleLasso = document.querySelector("#toggleLasso");
        var lassoEnabled = document.querySelector("#lassoEnabled");
        var lassoResult = document.querySelector("#lassoResult");
        var lasso = L.lasso(this.mapJs);
        this.mapJs.on('lasso.finished', function (event) {
            lassoResult.innerHTML = event.layers.length + " layers:<br>" +
                event.layers.map(function (layer) { return L.Util.formatNum(layer.getLatLng().lat) + ", \n        " + L.Util.formatNum(layer.getLatLng().lng); }).join('<br>');
        });
        this.mapJs.on('lasso.enabled', function () {
            lassoEnabled.innerHTML = 'Enabled';
            lassoResult.innerHTML = '';
        });
        this.mapJs.on('lasso.disabled', function () {
            lassoEnabled.innerHTML = 'Disabled';
        });
        toggleLasso.addEventListener('click', function () {
            if (lasso.enabled()) {
                lasso.disable();
            }
            else {
                lasso.enable();
            }
        });
    };
    MapComponent.prototype.addEllipseTooltiplayerGroup = function () {
        this.mapJs.setView(new L.LatLng(__WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][0][0], __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][0][1]), 8);
        this.layerGroup = L.layerGroup().addTo(this.mapJs); // test that also layers nested in groups can be selected
        console.log(__WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */].length);
        for (var i = 0; i < 1000; i++) {
            var a = __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][i];
            var ellipse = L.ellipse([a[0], a[1]], [1146, 2200], 89).bindTooltip("A", { permanent: true, opacity: 1 }).openTooltip();
            ellipse.addTo(this.layerGroup);
        }
    };
    MapComponent.prototype.addAnnotationlayerGroup = function (lat, lng, text) {
        var createLabelIcon = function (labelClass, labelText) {
            return L.divIcon({
                className: 'textLabelclass',
                html: "<p style=\"color: yellow;  white-space:nowrap;\n        font-weight: 300;\n        text-shadow: 0 0 0.1em black, 0 0 0.1em black,\n              0 0 0.1em black,0 0 0.1em black,0 0 0.1em;\">" + labelText + '</p>'
            });
        };
        this.annotationlayerGroup = L.layerGroup({ pane: 'annotationlayerGrouppane' }).addTo(this.mapJs); // test that also layers nested in groups can be selected
        L.marker(new L.LatLng(lat, lng), { icon: createLabelIcon("textLabelclass", text) }).addTo(this.annotationlayerGroup);
    };
    MapComponent.prototype.addTextOnEllipselayerGroup = function () {
        var createLabelIcon = function (labelClass, labelText) {
            return L.divIcon({
                className: 'textLabelclass',
                html: "<p style=\"color: yellow;\n        font-weight: 300;\">" + labelText + '</p>'
            });
        };
        this.textLayerGroup = L.markerClusterGroup({ chunkedLoading: true, maxClusterRadius: 50, zoomToBoundsOnClick: true, showCoverageOnHover: true }).addTo(this.mapJs); // test that also layers nested in groups can be selected
        for (var i = 0; i < 10000; i++) {
            var a = __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][i];
            L.marker(new L.LatLng(a[0], a[1]), { icon: createLabelIcon("textLabelclass", "A") }).addTo(this.textLayerGroup);
        }
    };
    MapComponent.prototype.addEllipselayerGroup = function () {
        this.mapJs.setView(new L.LatLng(__WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][0][0], __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][0][1]), 8);
        this.layerGroup = L.markerClusterGroup({ chunkedLoading: true, maxClusterRadius: 50, zoomToBoundsOnClick: true, showCoverageOnHover: true }).bindTooltip("A").addTo(this.mapJs); // test that also layers nested in groups can be selected
        this.layerGroup.on('clusterclick', function (e) {
            console.log(e);
            document.getElementById("log").innerHTML = "cluster";
        });
        console.log(__WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */].length);
        for (var i = 0; i < 10000; i++) {
            var a = __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][i];
            var ellipse = L.ellipse([a[0], a[1]], [400, 400], 89).bindTooltip("my tooltip text");
            ellipse.addTo(this.layerGroup);
        }
    };
    MapComponent.prototype.removeLineslayerGroup = function () {
        this.LineslayerGroup.remove();
    };
    MapComponent.prototype.addLPointslayerGroup = function () {
        var greenIcon = L.icon({
            iconUrl: 'assets/images/map/marker-icon.png',
            iconSize: [38, 95],
        });
        this.mapJs.setView(new L.LatLng(__WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][0][0], __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][0][1]), 8);
        this.LineslayerGroup = L.layerGroup().addTo(this.mapJs); // test that also layers nested in groups can be selected
        console.log(__WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */].length);
        var markers = L.markerClusterGroup({ disableClusteringAtZoom: 10 });
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */].length; i++) {
            var a = __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][i];
            //var title = a[2];
            var marker = L.marker(L.latLng(a[0], a[1]));
            //marker.bindPopup(title);
            markers.addLayer(marker);
        }
        this.mapJs.addLayer(markers);
    };
    MapComponent.prototype.addLineslayerGroup = function () {
        this.mapJs.setView(new L.LatLng(__WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][0][0], __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][0][1]), 8);
        this.LineslayerGroup = L.layerGroup().addTo(this.mapJs); // test that also layers nested in groups can be selected
        console.log(__WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */].length);
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */].length; i++) {
            var firstLatLng = __WEBPACK_IMPORTED_MODULE_2__10000points__["a" /* addressPoints */][i];
            var res = L.GeometryUtil.destination(new L.latLng(firstLatLng[0], firstLatLng[1]), 180, 40000000);
            var line = new L.Polyline([
                [firstLatLng[0], firstLatLng[1]],
                [res.lat, res.lng]
            ], {
                color: 'red',
                weight: 3,
                opacity: 1,
                smoothFactor: 1
            });
            line.bindPopup('startlat: ' + firstLatLng[0] + 'startlng: ' + firstLatLng[1]);
            line.addTo(this.LineslayerGroup);
        }
    };
    MapComponent.prototype.addPolygonlayerGroup = function () {
        this.PolygonlayerGroup = L.deflate({ minSize: 20, markerCluster: true }).addTo(this.mapJs);
        var l = L.geoJson(hamburch);
        l.bindPopup('aa ');
        // this.mapJs.setView(new L.LatLng(addressPoints[0][0]
        // , addressPoints[0][1]), 8);
        console.log(l);
        this.PolygonlayerGroup.addLayer(l);
        console.log(this.PolygonlayerGroup);
    };
    MapComponent.prototype.removePolygonLayerGroup = function () {
        console.log(this.PolygonlayerGroup);
        this.PolygonlayerGroup.clusterLayer.remove();
    };
    MapComponent.prototype.addlayerGroup = function () {
        var centerLatLng = [51.5, -0.09];
        var latDelta = 0.01;
        var lngDelta = latDelta * 2;
        var startLatLng = [centerLatLng[0] - latDelta, centerLatLng[1] - lngDelta];
        this.layerGroup = L.layerGroup().addTo(this.mapJs); // test that also layers nested in groups can be selected
        //const markerClusterGroup = L.markerClusterGroup().addTo(layerGroup);
        for (var i = 0; i < 9; i++) {
            var latLng = [startLatLng[0] + Math.floor(i / 3) * latDelta, startLatLng[1] + (i % 3) * lngDelta];
            L.marker(latLng).addTo(this.layerGroup);
        }
    };
    MapComponent.prototype.removeLayerGroup = function () {
        this.layerGroup.remove();
    };
    MapComponent.prototype.loadZoomBox = function () {
        var control = L.control.zoomBox({
            addToZoomControl: true,
            modal: true,
            className: "custom-content",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g transform="translate(0,0)"><path fill="rgba(0, 0, 0, 1)" d="M138.563 16.063C83.49 42.974 41.459 86.794 16.124 138.53l59.938 29.407c18.988-38.845 50.47-71.807 91.812-92l-29.313-59.874zm234.843.156L344 76.124c38.846 18.99 71.807 50.47 92 91.813l59.875-29.313c-26.913-55.073-70.732-97.073-122.47-122.406zm62.53 327.717c-18.982 38.865-50.53 71.673-91.873 91.875l29.437 60.125c55.116-26.925 97.085-70.76 122.375-122.562l-59.938-29.438zm-359.936.125l-60 29.375c26.928 55.097 70.776 97.082 122.563 122.375l29.406-59.937C129.122 416.885 96.192 385.4 76 344.062z"></path></g></svg>'
        });
        this.mapJs.addControl(control);
    };
    MapComponent.prototype.AddAnnotation = function () {
        this.annotationlayerGrouppane = this.mapJs.createPane('annotationlayerGrouppane');
        //Right click on the map open menu
        var _map = this.mapJs;
        this.mapJs.on('contextmenu', function (e, _map) {
            var annotation = prompt("Please enter annotation", "");
            console.log(e.target.attributionControl._map);
            var createLabelIcon = function (labelClass, labelText) {
                return L.divIcon({
                    className: 'textLabelclass',
                    html: "<p style=\"color: yellow;  white-space:nowrap;\n    font-weight: 300;\n    text-shadow: 0 0 0.1em black, 0 0 0.1em black,\n          0 0 0.1em black,0 0 0.1em black,0 0 0.1em;\">" + labelText + '</p>'
                });
            };
            var deleteAnnotation = function (e) {
                console.log(e);
            };
            console.log(this.annotationlayerGroup);
            if (this.annotationlayerGroup === undefined)
                this.annotationlayerGroup = L.layerGroup().addTo(e.target.attributionControl._map); // test that also layers nested in groups can be selected
            function markerOnClick(e) {
                if (confirm("Press a button!")) {
                    console.log(e);
                    //this.annotation.
                    var leaflet_id = e.target._leaflet_id;
                    console.log(leaflet_id);
                    e.target._map.annotationlayerGroup.eachLayer(function (layer) {
                        if (layer._leaflet_id === leaflet_id) {
                            e.target._map.annotationlayerGroup.removeLayer(layer);
                        }
                    });
                }
            }
            new L.marker(new L.LatLng(e.latlng.lat, e.latlng.lng), { icon: createLabelIcon("textLabelclass", annotation) })
                .on('click', markerOnClick)
                .addTo(this.annotationlayerGroup);
        });
    };
    MapComponent.prototype.ShowZoomInInfo = function () {
        var _this = this;
        this.mapJs.on('mousemove', function (e) {
            _this.latLngCurrValues.nativeElement.innerHTML = JSON.stringify(e.latlng, null, 2);
            _this.zoomText.nativeElement.innerHTML = 'zoom : ' + _this.mapJs.getZoom();
        });
    };
    MapComponent.prototype.LoadMap = function () {
        this.LayerSelected = L.layerGroup();
        //wms layer from server
        var wmsLayer = L.tileLayer.wms('http://localhost:7777/geoserver/wms?', {
            layers: 'worldmap',
        });
        var bounds = new L.LatLngBounds(new L.LatLng(-180, -180), new L.LatLng(180, 180));
        this.mapJs = L.map(this.map.nativeElement, {
            center: [31.945775, 35.108228],
            zoom: 4,
            layers: [wmsLayer, this.LayerSelected],
            maxBounds: bounds,
            maxBoundsViscosity: 0.75,
            minZoom: 1
        });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        if (this.drawer !== undefined) {
            this.drawer.open();
        }
        if (this.mapJs !== undefined) {
            $(this.mapJs.nativeElement).height(this.chartHeight).width(this.chartWidth);
            this.mapJs.invalidateSize();
            console.log("chartWidth: " + this.chartWidth + " _chartHeight: " + this.chartHeight);
        }
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        this.LoadMap();
    };
    MapComponent.prototype.LoadMapComponent = function () {
        if (this.mapJs === undefined) {
            this.LoadMap();
            // this.AddAnnotation()
            this.showInfo();
            //liat - do load lasso
            // this.LoadLasso()
            this.loadZoomBox();
        }
    };
    MapComponent.prototype.showInfo = function () {
        this.ShowZoomInInfo();
        this.showLatLng();
    };
    MapComponent.prototype.addTextLayers = function () {
        var data_points = {
            "type": "FeatureCollection",
            "name": "test-points-short-named",
            "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            "features": [
                { "type": "Feature", "properties": { "name": "1" }, "geometry": { "type": "Point", "coordinates": [-135.02507178240552, 60.672508785052223] } },
                { "type": "Feature", "properties": { "name": "6" }, "geometry": { "type": "Point", "coordinates": [-135.02480935075292, 60.672888247036376] } },
                { "type": "Feature", "properties": { "name": "12" }, "geometry": { "type": "Point", "coordinates": [-135.02449372349508, 60.672615176262731] } },
                { "type": "Feature", "properties": { "name": "25" }, "geometry": { "type": "Point", "coordinates": [-135.0240752514004, 60.673313811878423] } }
            ]
        };
        var pointLayer = L.geoJSON(null, {
            pointToLayer: function (feature, latlng) {
                var label = String(feature.properties.name); // .bindTooltip can't use straight 'feature.properties.attribute'
                return new L.CircleMarker(latlng, {
                    radius: 1,
                }).bindTooltip(label, { permanent: true, opacity: 0.7 }).openTooltip();
            }
        });
        pointLayer.addData(data_points);
        this.mapJs.addLayer(pointLayer);
    };
    MapComponent.prototype.setLatLngString = function (e) {
        console.log(e);
        //this.latLngHeadline
    };
    MapComponent.prototype.showLatLng = function () {
        var self = this;
        this.mapJs.on('click', function (e) {
            console.log(e.latlng, this);
            // this.latLngHeadline=e.latlng.lat
            // console.log(this.latLngHeadline)
            console.log(e.target.getZoom());
            //console.log(e.target.options.zoom)
            //event.stopPropagation();
        });
    };
    MapComponent.prototype.measureDistance = function () {
        if (this.togglemeasureDistance === true) {
        }
        var _firstLatLng, _firstPoint, _secondLatLng, _secondPoint, _distance, _length, _polyline, _angle;
        // add listeners to click, for recording two points
        this.mapJs.on('click', function (e) {
            console.log(e);
            if (!_firstLatLng) {
                _firstLatLng = e.latlng;
                _firstPoint = e.layerPoint;
                L.marker(_firstLatLng).addTo(this).bindPopup('Point A<br/>' + e.latlng + '<br/>' + e.layerPoint).openPopup();
            }
            else {
                _secondLatLng = e.latlng;
                _secondPoint = e.layerPoint;
                L.marker(_secondLatLng).addTo(this).bindPopup('Point B<br/>' + e.latlng + '<br/>' + e.layerPoint).openPopup();
            }
            if (_firstLatLng && _secondLatLng) {
                // draw the line between points
                L.polyline([_firstLatLng, _secondLatLng], {
                    color: 'red'
                }).addTo(this);
                refreshDistanceAndLength(this);
            }
        });
        var _map = this.mapJs;
        this.mapJs.on('zoomend', function (_map, e) {
            console.log(_map.getZoom());
            refreshDistanceAndLength(_map);
        });
        function refreshDistanceAndLength(_map) {
            //_distance = L.GeometryUtil.distance(_map, _firstLatLng, _secondLatLng);
            _length = L.GeometryUtil.length([_firstPoint, _secondPoint]);
            _angle = L.GeometryUtil.computeAngle(_firstPoint, _secondPoint);
            document.getElementById('length').innerHTML = _length / 1000 + ' (km) angle :' + _angle;
        }
    };
    return MapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], MapComponent.prototype, "chartWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], MapComponent.prototype, "chartHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MapComponent.prototype, "map", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('lat'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], MapComponent.prototype, "lat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('lng'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], MapComponent.prototype, "lng", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('latLngCurrValues'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object)
], MapComponent.prototype, "latLngCurrValues", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('zoom'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object)
], MapComponent.prototype, "zoomText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('drawer'),
    __metadata("design:type", Object)
], MapComponent.prototype, "drawer", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_SharedServiceMapTableGraphs_service__["a" /* SharedServiceMapTableGraphs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_SharedServiceMapTableGraphs_service__["a" /* SharedServiceMapTableGraphs */]) === "function" && _f || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/pie-chart/pie-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<!--button (click)=\"SelectedPoints()\">SelectedPoints</button>\r\n<div #containerPieChart ></div-->\r\n\r\n    <mat-drawer-container class=\"example-container\">\r\n\r\n        <div class=\"example-sidenav-content\" style=\"z-index:10000;    float: right;\">\r\n          <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n            <mat-icon>menu</mat-icon>\r\n      \r\n          </button>\r\n        </div>\r\n        <div #containerPieChart ></div>\r\n        <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" position=\"end\">\r\n          <p matLine >\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      \r\n              <mat-icon class=\"icon_marging_left\">more_vert</mat-icon>\r\n            </button>\r\n          </p>\r\n          <p matLine>\r\n            <mat-menu #menu=\"matMenu\">\r\n      \r\n              <button mat-menu-item (click)=\"measureDistance()\">\r\n                <span>Measure Distance</span>\r\n              </button>\r\n      \r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                <span>Change Map</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,3)\">\r\n                <span>Center map about a selected point</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n                <span>Lasso</span>\r\n              </button>\r\n              <hr>\r\n              <button mat-menu-item [matMenuTriggerFor]=\"menu2\">\r\n                <span>Lasso - Options and filters</span>\r\n                <mat-menu #menu2=\"matMenu\">\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,6)\">\r\n                    <span>Create cluster based on selected elements</span>\r\n                  </button>\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                    <span>Highlight</span>\r\n                </button>\r\n\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n                    <span>Open in a map</span>\r\n                  </button>\r\n      \r\n\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>High-Light</span>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>Remove from cluster</span>\r\n                  </button>\r\n                </mat-menu>\r\n      \r\n      \r\n              </button>\r\n              <hr>\r\n              <button mat-menu-item (click)=\"loadselectedfromtable()\">\r\n                <span>load selected points</span>\r\n              </button>\r\n      \r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Add Textual Annotation</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Delete Textual Annotation</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Draw Silde</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Report</span>\r\n              </button>\r\n      \r\n            </mat-menu>\r\n      \r\n            <span> {{clusterView}} </span>\r\n      \r\n          </p>\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n      \r\n                <label class=\"colorWhite\">select x axis: </label>\r\n                <select #selectElemX (change)=\"Change_X_Axis(selectElemX.value)\">\r\n                  <option value=\"Catagory\">Catagory</option>\r\n                  <option value=\"Number\">Number</option>\r\n                </select>\r\n                <hr>\r\n                <button (click)=\"getNextPageFromServer()\">>></button>\r\n                <button (click)=\"getPrevPageFromServer()\">\r\n                  <<</button>\r\n                    <label class=\"colorWhite\">{{startServerPage}} - {{endServerPage}} first result</label>\r\n      \r\n              </div>\r\n      \r\n            </div>\r\n      \r\n          </div>\r\n      \r\n        </mat-drawer>\r\n      \r\n      \r\n      \r\n      </mat-drawer-container>\r\n      \r\n      \r\n      <mat-sidenav-container>\r\n        <mat-sidenav #sidenav2>\r\n      \r\n        </mat-sidenav>\r\n      </mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/pie-chart/pie-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorWhite {\n  color: white; }\n\n.mat-drawer {\n  background-color: #193061;\n  background-color: #49474a;\n  color: rgba(0, 0, 0, 0.87);\n  width: 200px;\n  background: #290940; }\n\n.icon_marging_left {\n  color: white; }\n\n.mat-button {\n  color: white; }\n\n.example-sidenav-content {\n  background: #2c2c2e; }\n\n/deep/.mat-drawer-content {\n  background: #2c2c2e;\n  overflow-x: hidden; }\n\n.mat-drawer-container {\n  background: #2c2c2e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pie-chart/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_SharedService_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_classes_GraphTheme__ = __webpack_require__("../../../../../src/app/shared/classes/GraphTheme.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PieChartComponent = (function () {
    function PieChartComponent(_SharedService) {
        this._SharedService = _SharedService;
    }
    PieChartComponent.prototype.ngOnInit = function () {
    };
    PieChartComponent.prototype.SelectedPoints = function () {
        console.log(this.chart2.getSelectedPoints());
    };
    //if chart Height or Width changes - update chart size 
    PieChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.drawer !== undefined) {
            this.drawer.open();
        }
        if (this.chart2 !== undefined) {
            this.chart2.setSize(this.chartWidth, this.chartHeight);
        }
    };
    PieChartComponent.prototype.highlightFunctionality = function () {
        var _this = this;
        this._SharedService.cartData.subscribe(function (value) {
            var self = _this;
            _this.colorData = value;
            if (_this.chart2.series[1] !== undefined) {
                _this.chart2.series[1].remove();
            }
            if (self.colorData === true) {
                console.log(_this.chart2.series[0].data[0]);
                for (var i = 0; i < 2; i++) {
                    _this.chart2.series[0].data[i].color = 'yellow';
                }
                _this.chart2.series[0].data[0].update();
            }
        });
    };
    PieChartComponent.prototype.addHighchartsTheme = function () {
        this._GraphTheme = new __WEBPACK_IMPORTED_MODULE_2__shared_classes_GraphTheme__["a" /* GraphTheme */]();
        Highcharts.theme = this._GraphTheme.addHighchartsTheme();
        Highcharts.setOptions(Highcharts.theme);
    };
    // Build the chart
    PieChartComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.addHighchartsTheme();
        this.chart2 = Highcharts.chart(this.containerPieChart.nativeElement, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                width: this.chartWidth,
                height: this.chartHeight,
                backgroundColor: 'rgba(255, 255, 255, 0.0)',
                events: {
                    click: function (event) {
                        console.log(this.chart2);
                    }
                }
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            exporting: { enabled: false },
            plotOptions: {
                allowPointSelect: true,
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                },
                theme: Highcharts.theme
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    allowPointSelect: true,
                    point: {
                        events: {
                            click: function (event) {
                                console.log(event.point);
                                // event.point.color='red';
                                self.SelectedPoints();
                            }
                        }
                    },
                    data: [{
                            name: 'Microsoft Internet Explorer',
                            y: 56.33
                        }, {
                            name: 'Chrome',
                            y: 24.03,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Firefox',
                            y: 10.38
                        }, {
                            name: 'Safari',
                            y: 4.77
                        }, {
                            name: 'Opera',
                            y: 0.91
                        }, {
                            name: 'Proprietary or Undetectable',
                            y: 0.2
                        }],
                    responsive: {
                        rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        align: 'center',
                                        verticalAlign: 'right',
                                        layout: 'horizontal'
                                    },
                                    subtitle: {
                                        text: null
                                    },
                                    credits: {
                                        enabled: false
                                    }
                                }
                            }]
                    }
                }]
        });
        this.highlightFunctionality();
    };
    return PieChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PieChartComponent.prototype, "chartWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PieChartComponent.prototype, "chartHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('containerPieChart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], PieChartComponent.prototype, "containerPieChart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('drawer'),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "drawer", void 0);
PieChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'pie-chart',
        template: __webpack_require__("../../../../../src/app/pie-chart/pie-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pie-chart/pie-chart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_SharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_SharedService_service__["a" /* SharedService */]) === "function" && _b || Object])
], PieChartComponent);

var _a, _b;
//# sourceMappingURL=pie-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/pop-up-dialog/pop-up-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-window title=\"Please Add session name\" *ngIf=\"this.PopUpOpen\" [top]=\"10\" [left]=\"100\" \r\n (close)=\"AddNewSessionDialogClose()\" [minWidth]=\"250\" [width]=\"450\" >\r\n  <form class=\"k-form\" ref=\"form\">\r\n\r\n      <label class=\"k-form-field\">\r\n          <input class=\"k-textbox\" placeholder=\"Enter Session Name\" #sessionTextBox />\r\n      </label>\r\n\r\n      <div class=\"text-right\">\r\n          <button type=\"button\" class=\"k-button grayBtn\" (click)=\"AddNewSessionDialogClose()\">Cancel</button>\r\n          <button type=\"button\" class=\"k-button k-primary grayBtn\" \r\n          (click)=\"AddNewSessionDialogSubmit(sessionTextBox,$event)\">Submit</button>\r\n      </div>\r\n  </form>\r\n</kendo-window>"

/***/ }),

/***/ "../../../../../src/app/pop-up-dialog/pop-up-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pop-up-dialog/pop-up-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpDialogComponent = (function () {
    function PopUpDialogComponent() {
    }
    PopUpDialogComponent.prototype.ngOnInit = function () {
    };
    return PopUpDialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], PopUpDialogComponent.prototype, "PopUpOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PopUpDialogComponent.prototype, "PopUptype", void 0);
PopUpDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'pop-up-dialog',
        template: __webpack_require__("../../../../../src/app/pop-up-dialog/pop-up-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pop-up-dialog/pop-up-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PopUpDialogComponent);

//# sourceMappingURL=pop-up-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--register form-->\r\n<form class=\"container\" (submit)=\"RegisterUser($event)\">\r\n  <h1 id=\"headline\">Please Register</h1>  \r\n<hr>\r\n<div class=\"form-group input\">\r\n  <input type=\"text\" class=\"form-control\" placeholder=\"Please Enter Username\">\r\n</div>\r\n\r\n<div class=\"form-group input\">\r\n  <input type=\"password\" class=\"form-control\" placeholder=\"Please Enter Password\">\r\n</div>\r\n\r\n<div class=\"form-group input\">\r\n  <input type=\"submit\" value=\"Create Acoount\" class=\"btn grayBtn\">\r\n</div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  background: linear-gradient(#4e5f74, black);\n  width: 70%;\n  height: 90%;\n  padding: 200px;\n  box-shadow: 5px 10px 8px black;\n  padding-top: 100px;\n  margin-top: 80px; }\n\nhr {\n  border-top: 1px solid black; }\n\ninput {\n  background: #151f25;\n  border: none;\n  border-radius: 25px; }\n\nlabel {\n  color: white; }\n\n#headline {\n  color: white; }\n\nhr {\n  border-top: 1px solid white;\n  margin-bottom: 40px; }\n\ninput:focus {\n  background: #411a55;\n  border: none;\n  font-weight: bold;\n  box-shadow: none;\n  box-shadow: inset -10px 10px 10px -8px rgba(0, 0, 0, 0.75);\n  color: white; }\n\n.grayBtn {\n  background: linear-gradient(#44545e, #394954);\n  border: 3px solid #333f4b;\n  color: #bababa;\n  font-weight: bold;\n  border-radius: 25px;\n  height: 32px;\n  line-height: 0.5; }\n\n.grayBtn:focus {\n  box-shadow: none; }\n\n#linkRegister {\n  color: white;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_SharedService_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_register_service__ = __webpack_require__("../../../../../src/app/shared/services/user-register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, _UserRegisterService, _SharedService) {
        this.router = router;
        this._UserRegisterService = _UserRegisterService;
        this._SharedService = _SharedService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.RegisterUser = function (e) {
        var _this = this;
        //prevent submit defult behavior 
        e.preventDefault();
        //get form data
        var userName = e.target.elements[0].value;
        var Pass = e.target.elements[1].value;
        this._UserRegisterService.RegisterUser({ USERID: 0, USERNAME: userName, USERPASSWORD: Pass })
            .subscribe(function (res) {
            //console.log(res)
            //this._SharedService.currUser.emit(res);
            _this.router.navigate(['Clusters', { UserId: res }]);
        });
        return false;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_register_service__["a" /* UserRegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_register_service__["a" /* UserRegisterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_SharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_SharedService_service__["a" /* SharedService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/report-nice-edit/report-nice-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea #text id=\"textEditor\" style=\"width: 2100px;height:500px;\">\r\n      <h1>Some Initial Content was in this textarea</h1> \r\n</textarea>\r\n<br/>\r\n<button (click)=\"saveReport()\">save report</button>\r\n<button (click)=\"loadReportFromHtml()\">load report from html</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/report-nice-edit/report-nice-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nicEdit-main {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report-nice-edit/report-nice-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportNiceEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportNiceEditComponent = (function () {
    function ReportNiceEditComponent() {
    }
    //get report from server - in html format
    ReportNiceEditComponent.prototype.loadReportFromHtml = function () {
        var nicE = new nicEditors.findEditor('textEditor');
        nicE.setContent(this.savedHtmlContent);
    };
    //save report to server - save to html and to db
    ReportNiceEditComponent.prototype.saveReport = function () {
        console.log(this.text);
        var nicE = new nicEditors.findEditor('textEditor');
        this.savedHtmlContent = nicE.getContent();
        console.log(this.savedHtmlContent);
    };
    ReportNiceEditComponent.prototype.ngOnInit = function () {
        nicEditors.allTextAreas();
        console.log($(this.text.nativeElement).html());
    };
    return ReportNiceEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('text'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ReportNiceEditComponent.prototype, "text", void 0);
ReportNiceEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'report-nice-edit',
        template: __webpack_require__("../../../../../src/app/report-nice-edit/report-nice-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report-nice-edit/report-nice-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReportNiceEditComponent);

var _a;
//# sourceMappingURL=report-nice-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/session-page/session-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contentBG\">\r\n\r\n\r\n\r\n\r\n    <div class=\"row SubTitleBlackBg\">\r\n        <h4 class=\"col-sm-8\">Select session:</h4>\r\n        <div class=\"col-sm-4\">\r\n            <input class=\"searchTextInput\" [(ngModel)]=\"searchText\" placeholder=\"enter search term here\">\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\" style=\"margin-bottom: 20px;border-bottom: 1px solid white;\">\r\n                <div class=\"col-sm-5\">\r\n                    <button kendoButton (click)=\"AddNewSessionDialogOpen()\" id=\"AddBtn\">+</button>\r\n                    <p id=\"AddTxt\">Add New Session</p>\r\n                </div>\r\n\r\n            </div>\r\n            <!--Add session name Dialog-->\r\n            <kendo-window title=\"Please Add session name\" *ngIf=\"AddNewSessionDialogOpened\" (close)=\"AddNewSessionDialogClose()\" [minWidth]=\"250\" [width]=\"450\">\r\n                <form class=\"k-form\" ref=\"form\">\r\n\r\n                    <label class=\"k-form-field\">\r\n                        <input class=\"k-textbox\" placeholder=\"Enter Session Name\" #sessionTextBox />\r\n                    </label>\r\n\r\n                    <div class=\"text-right\">\r\n                        <button type=\"button\" class=\"k-button grayBtn\" (click)=\"AddNewSessionDialogClose()\">Cancel</button>\r\n                        <button type=\"button\" class=\"k-button k-primary grayBtn\" \r\n                        (click)=\"AddNewSessionDialogSubmit(sessionTextBox,$event)\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </kendo-window>\r\n            \r\n            <!--Rename session name Dialog-->\r\n            <kendo-window title=\"Please Update session name\" *ngIf=\"RenameSessionDialogOpened\" (close)=\"RenameSessionDialogClose()\" [minWidth]=\"250\" [width]=\"450\">\r\n                <form class=\"k-form\" ref=\"form\">\r\n\r\n                    <label class=\"k-form-field\">\r\n                        <input class=\"k-textbox\" placeholder=\"Enter Session Name\" #sessionTextBox />\r\n                    </label>\r\n\r\n                    <div class=\"text-right\">\r\n                        <button type=\"button\" class=\"k-button grayBtn\" (click)=\"RenameSessionDialogClose()\">Cancel</button>\r\n                        <button type=\"button\" class=\"k-button k-primary grayBtn\" \r\n                        (click)=\"RenameSessionDialogCloseSubmit(sessionTextBox,$event,session)\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </kendo-window>\r\n\r\n            \r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-6 col-md-3  col-xl-1 col-lg-2 \" \r\n        *ngFor=\"let session of sessions |async | filter : 'session_name' : searchText  \">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"MenuBtnWhite\">\r\n                        <mat-icon>more_vert</mat-icon>\r\n                    </button>\r\n                    <mat-menu #menu=\"matMenu\">\r\n                        <button mat-menu-item class=\"MenuBtn\" (click)=\"AddClustersToSession(session)\" >\r\n                            <mat-icon>dialpad</mat-icon>\r\n                            <span>Add clusters to session</span>\r\n                        </button>\r\n                        <button mat-menu-item class=\"MenuBtn\" (click)=\"DeleteSession(session)\" >\r\n                            <mat-icon>delete</mat-icon>\r\n                            <span>delete</span>\r\n                        </button>\r\n                        <button mat-menu-item class=\"MenuBtn\" (click)=\"RenameSessionDialogOpen(session)\" >\r\n                            <mat-icon>rename</mat-icon>\r\n                            <span>rename</span>\r\n                        </button>\r\n                    </mat-menu>\r\n                </div>\r\n                <div class=\"col-sm-8\">\r\n                    <img class=\"iconSize\" #sessionImg src={{session.SessionImage}} (click)=\"StartEdit(session)\">\r\n                </div>\r\n                <div class=\"col-sm-4\"></div>\r\n                <div class=\"col-sm-8 text-center\">\r\n                    <h5 #sessionName>{{session.session_name}}</h5>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!--button mat-button matStepperNext class=\"grayBtn\">Next</button>\r\n    <button (click)=\"StartEdit()\" class=\"grayBtn\">Start Edit</button-->\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/session-page/session-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu_Color {\n  background: #151f25;\n  height: 95px; }\n\n.fillPageHight {\n  height: 100%; }\n\n.fillPageHight2 {\n  height: 100%; }\n\n.contentBG {\n  background: #303b48;\n  /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  /* For Opera 11.1 to 12.0 */\n  /* For Firefox 3.6 to 15 */\n  background: linear-gradient(#4e5f74, black);\n  /* Standard syntax (must be last) */\n  box-shadow: inset -1px 14px 10px -8px rgba(0, 0, 0, 0.75);\n  background: linear-gradient(#4e5f74, black);\n  box-shadow: inset 20px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  box-shadow: inset -13px 13px 10px -8px rgba(0, 0, 0, 0.75);\n  width: 100%; }\n\n.SideBarBG {\n  background-color: #28333c;\n  /* background: linear-gradient(to right, #3e4a59, black); */\n  box-shadow: inset -1px 14px 10px -8px rgba(0, 0, 0, 0.75); }\n\n.headline {\n  height: 45px;\n  background: black;\n  width: 100%; }\n\n.col-sm-12 {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 20px 18px 17px -8px rgba(0, 0, 0, 0.75); }\n\n.img-fluid, .img-fluid-right, .img-fluid-left {\n  max-width: 100%;\n  max-height: 100%; }\n\n.img-fluid-right {\n  float: right; }\n\n.img-fluid-left {\n  float: left; }\n\nh4 {\n  color: white;\n  margin-bottom: auto;\n  margin-top: auto; }\n\nh5, h6 {\n  color: white;\n  font-weight: lighter; }\n\n.marginBottom {\n  margin-bottom: 5%; }\n\n.text-center {\n  margin-bottom: 3%; }\n\n.PaddingTop {\n  margin-top: 5%;\n  padding-top: 5%;\n  border-top: 1px solid white; }\n\n#BtnAddNewSession {\n  background: #2aa19d;\n  border: none;\n  color: white; }\n\nh4 {\n  color: white;\n  margin-bottom: auto;\n  margin-top: auto; }\n\n.SubTitleBlackBg {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 15px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  box-shadow: inset -13px 15px 10px -8px rgba(0, 0, 0, 0.75);\n  margin-bottom: 0; }\n\n.iconSize {\n  width: 79px;\n  height: 96px;\n  margin: 0 auto;\n  cursor: pointer; }\n\nh5 {\n  color: white;\n  font-weight: lighter; }\n\n.marginBottom {\n  margin-bottom: 5%; }\n\n.text-center {\n  margin-bottom: 3%; }\n\n.mat-button, button {\n  color: white;\n  background: #61297e;\n  border-radius: 30px;\n  border: none;\n  padding: 5px; }\n\n#AddBtn {\n  color: white;\n  background: #61297e;\n  border-radius: 50px;\n  border: none;\n  padding: 5px;\n  font-size: 50px;\n  width: 50px;\n  height: 50px;\n  float: left;\n  text-align: -webkit-center;\n  /* vertical-align: middle; */\n  line-height: 0px;\n  margin: 20px; }\n\n#AddTxt {\n  line-height: 5;\n  color: white; }\n\n/deep/.mat-horizontal-stepper-header-container {\n  border-top: 1px solid #435264; }\n\n/deep/.mat-horizontal-content-container, #mat-step-content-0-0,\n.ng-trigger-stepTransition {\n  overflow-x: hidden;\n  padding: 0;\n  height: 100%; }\n\n/deep/.mat-step-header .mat-step-icon {\n  background-color: #844da1;\n  color: white; }\n\n/deep/.mat-horizontal-stepper-header-container {\n  background: #16222e;\n  color: white; }\n\n/deep/.mat-step-text-label {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  color: white; }\n\n/deep/.mat-stepper-horizontal-line {\n  border-top-width: 3px;\n  border-top-style: solid;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  height: 0;\n  margin: 0 -16px;\n  min-width: 32px;\n  color: white;\n  background: #844da1; }\n\n/deep/.mat-step-header .mat-step-icon-not-touched {\n  background-color: #7e7e7e;\n  color: white;\n  font-weight: bold; }\n\n/deep/.mat-step-header .mat-step-icon {\n  background-color: #844da1;\n  color: white;\n  font-weight: bold; }\n\n/deep/.mat-horizontal-content-container {\n  padding: 0;\n  background: black; }\n\n.mat-icon {\n  width: 10px; }\n\n.grayBtn {\n  background: linear-gradient(#44545e, #394954);\n  border: 3px solid #333f4b;\n  color: #bababa;\n  font-weight: bold;\n  border-radius: 25px;\n  width: 90px;\n  height: 32px;\n  line-height: 0.5; }\n\n.grayBtn:hover {\n  background-image: none;\n  background-color: #74448d;\n  border-color: #74448d;\n  color: white; }\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1b2139;\n  font-weight: bold;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1b2139;\n  font-weight: bold;\n  opacity: 1;\n  /* Firefox */ }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1b2139;\n  font-weight: bold;\n  opacity: 1;\n  /* Firefox */ }\n\n.searchTextInput {\n  border-radius: 25px;\n  border: none;\n  padding: 2px;\n  float: right;\n  margin-right: 10px;\n  margin-top: 10px;\n  width: 300px;\n  background: #fbfcfd; }\n\n.searchTextInput::-webkit-input-placeholder {\n  color: #61297e;\n  text-align: center; }\n\n.searchTextInput:-ms-input-placeholder {\n  color: #61297e;\n  text-align: center; }\n\n.searchTextInput::placeholder {\n  color: #61297e;\n  text-align: center; }\n\n.MenuBtn {\n  background: transparent;\n  color: black;\n  border-radius: 0; }\n\n.MenuBtnWhite {\n  background: transparent;\n  color: white;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session-page/session-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_sessions_service__ = __webpack_require__("../../../../../src/app/shared/services/sessions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_SharedService_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessionPageComponent = (function () {
    function SessionPageComponent(_SessionsService, route, router, _SharedService) {
        var _this = this;
        this._SessionsService = _SessionsService;
        this.route = route;
        this.router = router;
        this._SharedService = _SharedService;
        this.filterargs = { session_name: 'cluster1' };
        this.isLinear = false;
        this.selectedClustersName = "";
        //----------------AddNewSessionDialog---------------------//
        this.AddNewSessionDialogOpened = false;
        //----------------RenameSessionDialog---------------------//
        this.RenameSessionDialogOpened = false;
        this.self = this;
        this._SharedService.currCluster.subscribe(function (res) {
            console.log("value", res);
            _this.currUserId = res;
        });
        this.currUserId = this.route.snapshot.params['UserId'];
        //constructor call one to get getSession from db
        // _StartPageService.getSession(1);
    }
    SessionPageComponent.prototype.AddNewSessionDialogClose = function () {
        this.AddNewSessionDialogOpened = false;
    };
    SessionPageComponent.prototype.AddNewSessionDialogOpen = function () {
        this.AddNewSessionDialogOpened = true;
    };
    SessionPageComponent.prototype.AddNewSessionDialogSubmit = function (sessionTextBox, event) {
        this.AddNewSessionDialogClose();
        this.currSession = { sessionid: 0, session_name: sessionTextBox.value,
            USERID: this.currUserId, SessionImage: "" };
        this.sessions = this._SessionsService.AddSession(this.currSession);
    };
    SessionPageComponent.prototype.RenameSessionDialogClose = function () {
        this.RenameSessionDialogOpened = false;
    };
    SessionPageComponent.prototype.RenameSessionDialogOpen = function (session) {
        this.currSession = session;
        this.RenameSessionDialogOpened = true;
    };
    SessionPageComponent.prototype.RenameSessionDialogCloseSubmit = function (sessionTextBox, event) {
        this.RenameSessionDialogClose();
        this.sessions = this._SessionsService.UpdateSessionName(sessionTextBox.value, this.currSession.sessionid, this.currSession);
    };
    SessionPageComponent.prototype.AddClustersToSession = function (session) {
        this.currSession = session;
        this._SharedService.currSession.emit(this.currSession.sessionid);
        this.stepper.next();
    };
    SessionPageComponent.prototype.DeleteSession = function (session) {
        this.sessions = this._SessionsService.deleteSessionById(session.sessionid);
    };
    SessionPageComponent.prototype.ngOnInit = function () {
        //load all user sessions from db 
        this.sessions = this._SessionsService.getSessions(this.currUserId);
    };
    //StartEdit session
    SessionPageComponent.prototype.StartEdit = function (session) {
        this.currSession = session;
        this._SharedService.currSession.emit(this.currSession.sessionid);
        this.router.navigate(['dashboard', { currSession: this.currSession.sessionid }]);
    };
    return SessionPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SessionPageComponent.prototype, "stepper", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], SessionPageComponent.prototype, "sessions", void 0);
SessionPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'session-page',
        template: __webpack_require__("../../../../../src/app/session-page/session-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session-page/session-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_sessions_service__["a" /* SessionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_sessions_service__["a" /* SessionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_SharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_SharedService_service__["a" /* SharedService */]) === "function" && _e || Object])
], SessionPageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=session-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Pipes/FilterPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value || value.length == 0)
            return items;
        return items.filter(function (it) {
            return it[field].toLowerCase().indexOf(value.toLowerCase()) != -1;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

//# sourceMappingURL=FilterPipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/classes/GraphTheme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphTheme; });
var GraphTheme = (function () {
    function GraphTheme() {
    }
    GraphTheme.prototype.addHighchartsTheme = function () {
        return {
            colors: ['#d2365b', '#fe9a3c', '#007cd2', '#9cc101', '#aaeeee', '#ff0066',
                '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                        [0, '#2a2a2b'],
                        [1, '#3e3e40']
                    ]
                },
                style: {
                    fontFamily: '\'Unica One\', sans-serif'
                },
                plotBorderColor: '#606063'
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: 'white'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: 'white'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#343436'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: '#343436'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#343436'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },
            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },
            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },
            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#343436'
                },
                outlineColor: '#343436',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#343436'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },
            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#343436',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },
            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };
    };
    return GraphTheme;
}());

//# sourceMappingURL=GraphTheme.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guards/user-login-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginGuardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_login_service__ = __webpack_require__("../../../../../src/app/shared/services/user-login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserLoginGuardGuard = (function () {
    function UserLoginGuardGuard(userlogin) {
        this.userlogin = userlogin;
    }
    UserLoginGuardGuard.prototype.canActivate = function (next, state) {
        return this.userlogin.IsUserLoggedIn();
        //return true;
    };
    return UserLoginGuardGuard;
}());
UserLoginGuardGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    //guard on rout dashboard fron unregisterd users
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_login_service__["a" /* UserLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_login_service__["a" /* UserLoginService */]) === "function" && _a || Object])
], UserLoginGuardGuard);

var _a;
//# sourceMappingURL=user-login-guard.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/CListService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { kid } from "../../shared/models/kid";
//import { KidDetailes } from "../../shared/models/KidDetailes";



var CListService = (function () {
    function CListService(_httpService) {
        this._httpService = _httpService;
        this.url = 'http://localhost:63155/api/ClustersList';
    }
    //grab all Users
    CListService.prototype.getData = function () {
        // this._httpService.get('http://localhost:63155/api/ClustersList').subscribe(values => {
        //this._httpService.get('http://localhost:54008/api/values').subscribe(values => {
        /*this._httpService.get('http://localhost:60985/api/CList').subscribe(values => {
       
    console.log(values.json());
  });*/
        var _this = this;
        return this._httpService.get('assets/jsonData/CListDataApi.json')
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
        //.catch(this._errorHandler);
    };
    CListService.prototype._errorHandler = function (error) {
        console.error(error); //need instead log file with errors console.log
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || "server Error"); //throw exeption to employee list and employee details
    };
    //get a single ListItem
    CListService.prototype.getOneListItem = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('id', JSON.stringify(id));
        return this._httpService.get(this.url, {
            search: params
        })
            .subscribe(function (res) {
            alert('getOneListItem ok');
        }, function (error) {
            console.log(error.json());
        });
    };
    //putOneListItem(id: number, _kid: kid)
    CListService.prototype.putOneListItem = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = this.url + "/" + id;
        var opts = { headers: headers };
        return this._httpService
            .put(url, opts)
            .subscribe(function (data) {
            alert('putOneListItem ok ');
        }, function (error) {
            console.log(error.json());
        });
    };
    CListService.prototype.deleteListItem = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('id', JSON.stringify(id));
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        //data.append('KidName', _kid.KidName);
        data.append('id', JSON.stringify(id));
        return this._httpService.delete(this.url, { search: params })
            .subscribe(function (data) {
            alert('delete ok' + params);
        }, function (error) {
            console.log(error.json());
        });
    };
    CListService.prototype.PostKidDetails = function () {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        //data.append('KidName', _kid.KidName);
        data.append('PhoneOne', JSON.stringify(100));
        //data.append('PhoneTwo', JSON.stringify(_kid.PhoneTwo));
        this._httpService
            .post('http://localhost:63155/api/ClustersList', data)
            .subscribe(function (res) {
            alert('post ok');
        }, function (error) {
            console.log(error.json());
        });
    };
    return CListService;
}());
CListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CListService);

var _a;
//# sourceMappingURL=CListService.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/ScatterGraph.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterGraphService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { kid } from "../../shared/models/kid";
//import { KidDetailes } from "../../shared/models/KidDetailes";



var ScatterGraphService = (function () {
    function ScatterGraphService(_httpService) {
        this._httpService = _httpService;
    }
    ScatterGraphService.prototype.getPolygon = function (points) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(points);
        data.append('points', JSON.stringify(points));
        console.log(body);
        return this._httpService.post('http://localhost:60985/api/Graph/GetLassoPolygonPoints', points, options)
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    ScatterGraphService.prototype.getXYGraphByCluster_startEnd = function (start, end) {
        var data = [], n = 100000, i;
        for (i = 0; i < n; i += 1) {
            data.push([
                i,
                i
            ]);
        }
        var d = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].create(function (observer) { observer.next(data); });
        return d;
    };
    ScatterGraphService.prototype.getDataFromQueryFromClusterID = function (ClusterID) {
        var _this = this;
        return this._httpService.get('http://localhost:60985/api/Graph?ClusterId=' + ClusterID)
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    //grab all Users
    ScatterGraphService.prototype.getData = function () {
        var _this = this;
        // this._httpService.get('http://localhost:63155/api/Rentals').subscribe(res => {
        //return this._httpService.get('assets/jsonData/GraphDataApi.json')
        return this._httpService.get('http://localhost:60985/api/Graph')
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    ScatterGraphService.prototype.getYData = function () {
        var _this = this;
        // this._httpService.get('http://localhost:63155/api/Rentals').subscribe(res => {
        //return this._httpService.get('assets/jsonData/GraphDataApi.json')
        return this._httpService.get('http://localhost:60985/api/Graph?AxisToget=1')
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    ScatterGraphService.prototype._errorHandler = function (error) {
        console.error(error); //need instead log file with errors console.log
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || "server Error"); //throw exeption to employee list and employee details
    };
    return ScatterGraphService;
}());
ScatterGraphService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ScatterGraphService);

var _a;
//# sourceMappingURL=ScatterGraph.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/SharedService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.cartData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.currUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.currSession = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.currCluster = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    //@Output() currUserSessionCluster = new EventEmitter<CurrUserSessionCluster>();
    SharedService.prototype.ngOnChanges = function () {
        // console.log(this.cartData);
        // console.log("ngOnChanges()",this.currUserSessionCluster)
    };
    SharedService.prototype.setData = function (value) {
        console.log(value);
        // this.formData = value;
    };
    SharedService.prototype.getData = function () {
        console.log({ cartData: this.cartData, currUser: this.currUser,
            currSession: this.currSession, currCluster: this.currCluster });
        return { cartData: this.cartData, currUser: this.currUser,
            currSession: this.currSession, currCluster: this.currCluster };
    };
    return SharedService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SharedService.prototype, "cartData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SharedService.prototype, "currUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SharedService.prototype, "currSession", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SharedService.prototype, "currCluster", void 0);
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=SharedService.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/SharedServiceMapTableGraphs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedServiceMapTableGraphs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedServiceMapTableGraphs = (function () {
    function SharedServiceMapTableGraphs() {
        this.tableToMap = [];
        this.ShapeOnMapType = '';
        this.selectedLinesToMap = [];
        this.selectedEllipseToMap = [];
        this.selectedHypToMap = [];
    }
    // @Output() tableToMap:any[] = [];
    //@Output() currUserSessionCluster = new EventEmitter<CurrUserSessionCluster>();
    SharedServiceMapTableGraphs.prototype.ngOnChanges = function () {
        console.log("ngOnChanges()", this.tableToMap);
        // console.log("ngOnChanges()",this.currUserSessionCluster)
    };
    SharedServiceMapTableGraphs.prototype.setData = function (value) {
        // console.log(value);
        // this.tableToMap=value
        // this.formData = value;
    };
    SharedServiceMapTableGraphs.prototype.getData = function () {
        //console.log({tableToMap:this.tableToMap})
        return this.tableToMap;
    };
    return SharedServiceMapTableGraphs;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Array)
], SharedServiceMapTableGraphs.prototype, "tableToMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", String)
], SharedServiceMapTableGraphs.prototype, "ShapeOnMapType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Array)
], SharedServiceMapTableGraphs.prototype, "selectedLinesToMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Array)
], SharedServiceMapTableGraphs.prototype, "selectedEllipseToMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Array)
], SharedServiceMapTableGraphs.prototype, "selectedHypToMap", void 0);
SharedServiceMapTableGraphs = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedServiceMapTableGraphs);

//# sourceMappingURL=SharedServiceMapTableGraphs.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/clusterTable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clusterTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var clusterTable = (function (_super) {
    __extends(clusterTable, _super);
    function clusterTable(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    clusterTable.prototype.read = function () {
        var _this = this;
        console.log("read()", this.data);
        if (this.data.length) {
            console.log("read()", this.data);
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .do(function (data) {
            console.log(_this.data, data);
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    clusterTable.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    clusterTable.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        // console.log(this.data);
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    clusterTable.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        //find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.ProductID === dataItem.ProductID; });
        //revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    clusterTable.prototype.reset = function () {
        this.data = [];
    };
    clusterTable.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ""; }
        console.log("fetch", action, data);
        this.sessionId = 1;
        //return this.http        
        return this.http.get('http://localhost:60985/api/Table')
            .map(function (res) { return res; });
    };
    clusterTable.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    return clusterTable;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));
clusterTable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], clusterTable);

var _a;
//# sourceMappingURL=clusterTable.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/clusters.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClustersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { kid } from "../../shared/models/kid";
//import { KidDetailes } from "../../shared/models/KidDetailes";



var ClustersService = (function () {
    function ClustersService(_httpService) {
        this._httpService = _httpService;
    }
    ClustersService.prototype.UpdateClusterName = function (ClusterNewName, currCluster) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._httpService.put('http://localhost:60985/api/clusterWithoutParent?ClusterId=' + currCluster.CLUSTERID, JSON.stringify(ClusterNewName), options)
            .map(function (res) {
            //this.sessions.filter(person => person.sessionid == sessionId)[0].session_name=sessionNewName;
            //currSession.session_name=sessionNewName;
            // console.log(currSession)
            // return this.sessions
            //currCluster={...currCluster,CLUSTER_NAME:ClusterNewName}
            // console.log(currCluster)
            _this.ClusertsWithoutParent.filter(function (person) { return person.CLUSTERID == currCluster.CLUSTERID; })[0]
                .CLUSTER_NAME = ClusterNewName;
            //currSession.session_name=sessionNewName;
            // console.log(currSession)
            return _this.ClusertsWithoutParent;
            //return currCluster;
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    ClustersService.prototype.deleteClusterById = function (Clusterid) {
        var _this = this;
        return this._httpService.delete('http://localhost:60985/api/clusterWithoutParent?clusterId=' + Clusterid)
            .map(function (response) {
            var indexDelete = _this.ClusertsWithoutParent.findIndex(function (cluster) { return cluster.CLUSTERID == Clusterid; });
            _this.ClusertsWithoutParent.splice(indexDelete, 1);
            return _this.ClusertsWithoutParent.filter(function (cluster) { return cluster.CLUSTERID != Clusterid; });
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    /* deleteClusterById(Clusterid:number){
       return this._httpService.delete('http://localhost:60985/api/clusterWithoutParent?clusterId='+Clusterid)
       .map((response: Response) => {
         return true;})
       .catch((e: any) => Observable.throw(this._errorHandler(e)));
     }*/
    ClustersService.prototype.AddClustersParentSessionId = function (newSessionId, clusterIds) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._httpService.put('http://localhost:60985/api/clusterWithoutParent?newSessionId=' + newSessionId, JSON.stringify(clusterIds), options)
            .map(function (response) {
            // localStorage.setItem('clustersList', JSON.stringify(response)); 
            return response.json();
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    ClustersService.prototype.getClusertsWithParent = function (ParentrSessionId) {
        var _this = this;
        return this._httpService.get('https://www.cdc.gov/coronavirus/2019-ncov/map-data-cases.csv')
            .map(function (response) {
            console.log(response);
            var list = response.text.toString()
                .split('\n');
            list.forEach(function (e) {
                console.log(e);
            });
            // localStorage.setItem('clustersList', JSON.stringify(response)); 
            return response.json();
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    //ClusertsWithoutParent -> sessionId=0
    ClustersService.prototype.getClusertsWithoutParent = function () {
        var _this = this;
        return this._httpService.get('http://localhost:60985/api/clusterWithoutParent')
            .map(function (response) {
            _this.ClusertsWithoutParent = response.json();
            // localStorage.setItem('clustersList', JSON.stringify(response)); 
            return response.json();
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    ClustersService.prototype.getSessionFromLocalStorage = function (sessionId) {
        console.log('getSessionFromLocalStorage', JSON.parse(localStorage.getItem('clustersList')));
        this.userData = localStorage.getItem("clustersList");
        this.userJson = JSON.parse(this.userData);
        if (this.userJson != null) {
            this.userJson = JSON.parse(this.userData);
            this.userToken = this.userJson.token;
            //  alert(this.userToken);
            return JSON.parse(this.userJson._body);
        }
    };
    ClustersService.prototype._errorHandler = function (error) {
        console.error(error); //need instead log file with errors console.log
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || "server Error"); //throw exeption to employee list and employee details
    };
    return ClustersService;
}());
ClustersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClustersService);

var _a;
//# sourceMappingURL=clusters.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/sessions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { kid } from "../../shared/models/kid";
//import { KidDetailes } from "../../shared/models/KidDetailes";



var SessionsService = (function () {
    function SessionsService(_httpService) {
        this._httpService = _httpService;
    }
    SessionsService.prototype.UpdateSessionName = function (sessionNewName, sessionId, currSession) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._httpService.put('http://localhost:60985/api/session?SessionId=' + sessionId, JSON.stringify(sessionNewName), options)
            .map(function (res) {
            _this.sessions.filter(function (person) { return person.sessionid == sessionId; })[0].session_name = sessionNewName;
            //currSession.session_name=sessionNewName;
            // console.log(currSession)
            return _this.sessions;
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    SessionsService.prototype.getSessions = function (userId) {
        var _this = this;
        return this._httpService.get('http://localhost:60985/api/session?userid=' + userId)
            .map(function (response) {
            _this.sessions = response.json();
            // localStorage.setItem('clustersList', JSON.stringify(response)); 
            return response.json();
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    SessionsService.prototype.AddSession = function (Session) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //let body = JSON.stringify(SessionName);
        //data.append('points', JSON.stringify(SessionName));
        //console.log(body);
        return this._httpService.post('http://localhost:60985/api/session', JSON.stringify(Session), options)
            .map(function (response) {
            _this.sessions.push(response.json());
            return _this.sessions;
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    SessionsService.prototype.deleteSessionById = function (Sessionid) {
        var _this = this;
        return this._httpService.delete('http://localhost:60985/api/session?sessionId=' + Sessionid)
            .map(function (response) {
            return _this.sessions.filter(function (person) { return person.sessionid != Sessionid; });
        })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    SessionsService.prototype._errorHandler = function (error) {
        console.error(error); //need instead log file with errors console.log
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || "server Error"); //throw exeption to employee list and employee details
    };
    return SessionsService;
}());
SessionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SessionsService);

var _a;
//# sourceMappingURL=sessions.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tableservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { kid } from "../../shared/models/kid";
//import { KidDetailes } from "../../shared/models/KidDetailes";



var Tableservice = (function () {
    function Tableservice(_httpService) {
        this._httpService = _httpService;
    }
    Tableservice.prototype.filterFromServer = function (ClusterID, start, end, filters) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var Options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //let body=JSON.stringify(filters)
        data.append('filters', JSON.stringify(filters));
        return this._httpService.put('http://localhost:60985/api/Table?ClusterId=' + ClusterID +
            '&start=' + start + '&end=' + end, filters, Options)
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    Tableservice.prototype.GetTableByClusterIdStartEnd = function (ClusterID, start, end) {
        var _this = this;
        return this._httpService.get('http://localhost:60985/api/Table?ClusterId=' + ClusterID +
            '&start=' + start + '&end=' + end)
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    //grab all Users
    Tableservice.prototype.getsimpleTableData = function () {
        var _this = this;
        // this._httpService.get('http://localhost:63155/api/Rentals').subscribe(res => {
        //return this._httpService.get('assets/jsonData/TableDataApi.json')
        return this._httpService.get('http://localhost:60985/api/Table')
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
        //.catch(this._errorHandler);
    };
    //grab all Users
    Tableservice.prototype.getTableData = function (skip, take) {
        var _this = this;
        // this._httpService.get('http://localhost:63155/api/Rentals').subscribe(res => {
        //return this._httpService.get('assets/jsonData/TableDataApi.json')
        return this._httpService.get('http://localhost:60985/api/Table?start=' + skip + '&&end=' + take)
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
        //.catch(this._errorHandler);
    };
    Tableservice.prototype.getBigTableData = function () {
        var _this = this;
        return this._httpService.get('http://localhost:60985/api/Table100kData')
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    Tableservice.prototype.getReuseDataTableData = function () {
        var _this = this;
        return this._httpService.get('http://localhost:60985/api/Table')
            .map(function (response) { return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    Tableservice.prototype._errorHandler = function (error) {
        console.error(error); //need instead log file with errors console.log
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || "server Error"); //throw exeption to employee list and employee details
    };
    return Tableservice;
}());
Tableservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Tableservice);

var _a;
//# sourceMappingURL=table.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserLoginService = (function () {
    function UserLoginService(_httpService) {
        this._httpService = _httpService;
        this.isUserLogedIn = false;
    }
    UserLoginService.prototype.GetUserIdFromUserNameAndPassword = function (_user) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._httpService.post('http://localhost:60985/api/login', JSON.stringify(_user), options)
            .map(function (response) { _this.isUserLogedIn = false; return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    UserLoginService.prototype.IsUserLoggedIn = function () {
        return this.isUserLogedIn;
    };
    /* getUserLoggedIn(userName,Pass){
       //send to wcf service username and pass word to check if user exist
       return this._httpService.get('http://localhost:53817/UsersService.svc/IsUserInUsersDB?userName='
      + userName+ '&password='+Pass)
         .map((response: Response) => {
           if(response.json()===true)
           this.isUserLogedIn=true;
            return response.json();
           
           })
         .catch((e: any) => Observable.throw(this._errorHandler(e)));
     }*/
    UserLoginService.prototype._errorHandler = function (error) {
        console.error(error); //need instead log file with errors console.log
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || "server Error"); //throw exeption to employee list and employee details
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserLoginService);

var _a;
//# sourceMappingURL=user-login.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user-register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserRegisterService = (function () {
    function UserRegisterService(_httpService) {
        this._httpService = _httpService;
        this.isUserLogedIn = false;
    }
    UserRegisterService.prototype.RegisterUser = function (_user) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._httpService.post('http://localhost:60985/api/Register', JSON.stringify(_user), options)
            .map(function (response) { _this.isUserLogedIn = false; return response.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(_this._errorHandler(e)); });
    };
    UserRegisterService.prototype._errorHandler = function (error) {
        console.error(error); //console error
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || "server Error"); //throw exeption to parent component
    };
    return UserRegisterService;
}());
UserRegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserRegisterService);

var _a;
//# sourceMappingURL=user-register.service.js.map

/***/ }),

/***/ "../../../../../src/app/start-page/start-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n<div class=\"row menu_Color\">\r\n  <div class=\"col-sm-3 \">\r\n    <img src=\"assets/images/header/logo_world_2.png\" class=\"img-fluid-left\">\r\n  </div>\r\n  <div class=\"col-sm-8 \">\r\n\r\n  </div>\r\n  <div class=\"col-sm-1\">\r\n    <img  src=\"assets/images/header/logo_world_2.png\" class=\"img-fluid-right\" >\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<mat-horizontal-stepper #stepper  >\r\n  <mat-step label=\"Step 1- select session or create new session\" >\r\n    <session-page [stepper]=\"stepper\"></session-page>\r\n  </mat-step>\r\n  <mat-step label=\"Step 2- Add New Clusters to session\" >\r\n    <clusters-page></clusters-page>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/start-page/start-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu_Color {\n  background: #151f25;\n  height: 95px; }\n\n.fillPageHight {\n  height: 100%; }\n\n.fillPageHight2 {\n  height: 100%; }\n\n.contentBG {\n  background: #303b48;\n  /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  /* For Opera 11.1 to 12.0 */\n  /* For Firefox 3.6 to 15 */\n  background: linear-gradient(#4e5f74, black);\n  /* Standard syntax (must be last) */\n  box-shadow: inset -1px 14px 10px -8px rgba(0, 0, 0, 0.75);\n  background: linear-gradient(#4e5f74, black);\n  box-shadow: inset 20px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  box-shadow: inset -13px 13px 10px -8px rgba(0, 0, 0, 0.75); }\n\n.SideBarBG {\n  background-color: #28333c;\n  /* background: linear-gradient(to right, #3e4a59, black); */\n  box-shadow: inset -1px 14px 10px -8px rgba(0, 0, 0, 0.75); }\n\n.headline {\n  height: 45px;\n  background: black;\n  width: 100%; }\n\n.col-sm-12 {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 20px 18px 17px -8px rgba(0, 0, 0, 0.75); }\n\n.img-fluid, .img-fluid-right, .img-fluid-left {\n  max-width: 100%;\n  max-height: 100%; }\n\n.img-fluid-right {\n  float: right; }\n\n.img-fluid-left {\n  float: left; }\n\nh4 {\n  color: white;\n  margin-bottom: auto;\n  margin-top: auto; }\n\n.SubTitleBlackBg {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 20px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  margin-bottom: 5%;\n  background: #16222e;\n  height: 50px;\n  margin-bottom: 5%;\n  border-bottom: 1px solid white;\n  text-align: right;\n  box-shadow: inset -2px 15px 10px -8px rgba(0, 0, 0, 0.75); }\n\nh5, h6 {\n  color: white;\n  font-weight: lighter; }\n\n.marginBottom {\n  margin-bottom: 5%; }\n\n.text-center {\n  margin-bottom: 3%; }\n\n.PaddingTop {\n  margin-top: 5%;\n  padding-top: 5%;\n  border-top: 1px solid white; }\n\n#BtnAddNewSession {\n  background: #2aa19d;\n  border: none;\n  color: white; }\n\nh4 {\n  color: white;\n  margin-bottom: auto;\n  margin-top: auto; }\n\n.SubTitleBlackBg {\n  background: #16222e;\n  height: 50px;\n  box-shadow: inset 15px 18px 17px -8px rgba(0, 0, 0, 0.75);\n  box-shadow: inset -13px 15px 10px -8px rgba(0, 0, 0, 0.75);\n  margin-bottom: 5%; }\n\n.iconSize {\n  width: 79px;\n  height: 96px;\n  margin: 0 auto; }\n\nh5 {\n  color: white;\n  font-weight: lighter; }\n\n.marginBottom {\n  margin-bottom: 5%; }\n\n.text-center {\n  margin-bottom: 3%; }\n\n/deep/.k-dialog-titlebar {\n  border-color: inherit;\n  background: #1b2139; }\n\n/deep/.k-textbox {\n  border-radius: 25px; }\n\n/deep/.k-header {\n  border-color: white; }\n\n/deep/.k-window-content {\n  background: #1b2139; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start-page/start-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartPageComponent = (function () {
    function StartPageComponent() {
    }
    return StartPageComponent;
}());
StartPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'start-page',
        template: __webpack_require__("../../../../../src/app/start-page/start-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/start-page/start-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StartPageComponent);

//# sourceMappingURL=start-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-from-server/table-from-server.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  table-from-server works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/table-from-server/table-from-server.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-from-server/table-from-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFromServerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * @title Table retrieving data through HTTP
 */
var TableFromServerComponent = (function () {
    function TableFromServerComponent() {
    }
    TableFromServerComponent.prototype.ngOnInit = function () {
    };
    return TableFromServerComponent;
}());
TableFromServerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'table-from-server',
        template: __webpack_require__("../../../../../src/app/table-from-server/table-from-server.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table-from-server/table-from-server.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TableFromServerComponent);

//# sourceMappingURL=table-from-server.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-reusing-data-items/table-reusing-data-items.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container  class=\"example-container\"  >\r\n\r\n        <div class=\"example-sidenav-content\" style=\"z-index:10000; float: right;\">\r\n          <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n            <mat-icon style=\"height: 25px;\">menu</mat-icon>\r\n      \r\n          </button>\r\n        </div>\r\n       \r\n\r\n    <kendo-grid #grid  \r\n    [data]=\"gridView \"\r\n    [skip]=\"skip\"\r\n    [pageSize]=\"pageSize\"\r\n    [scrollable]=\"'virtual'\"\r\n    [rowHeight]=\"35\"\r\n    [height]=\"chartHeight\"\r\n    filterable=\"menu\" [filter]=\"state.filter\" (dataStateChange)=\"dataStateChange($event)\"\r\n    [selectable]=\"true\"\r\n\r\n    [kendoGridSelectBy]=\"mySelectionKey\"\r\n    [selectedKeys]=\"mySelection\"\r\n    (cellClick)=\"gridUserSelectionChange(grid, $event)\"\r\n    (pageChange)=\"pageChange($event)\"\r\n\r\n    [sortable]=\"{\r\n      allowUnsort: allowUnsort,\r\n      mode: multiple ? 'multiple' : 'single'\r\n      }\"\r\n    [sort]=\"sort\"\r\n    (sortChange)=\"sortChange($event)\"\r\n    >\r\n    <kendo-grid-column field=\"customer_id\"  title=\"customer_id\" [width]=\"100\"></kendo-grid-column>\r\n\r\n    <kendo-grid-column field=\"LAST_NAME\" title=\"lat\" [width]=\"100\" filter=\"numeric\" ></kendo-grid-column>\r\n    <kendo-grid-column field=\"FIRST_NAME\" title=\"lng\" [width]=\"100\" filter=\"numeric\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"street\" title=\"hMajor\"[width]=\"100\" ></kendo-grid-column>\r\n    <kendo-grid-column field=\"city\" title=\"hMinor\"[width]=\"100\" ></kendo-grid-column>\r\n    \r\n    <kendo-grid-column field=\"ttttt\"  title=\"Angle\" [width]=\"100\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"yyy\" title=\"yyy\" [width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"home_phone\" title=\"home_phone\" [width]=\"80\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"work_phone\" title=\"work_phone\"[width]=\"80\" ></kendo-grid-column>\r\n    <kendo-grid-column field=\"email\" title=\"email\" [width]=\"40\"></kendo-grid-column>\r\n    \r\n    <kendo-grid-column field=\"aaa\"  title=\"aaa\"[width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"bbb\" title=\"bbb\" [width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"ccc\" title=\"ccc\" [width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"ddd\" title=\"ddd\" [width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"fff\" title=\"fff\" [width]=\"40\"></kendo-grid-column>\r\n    \r\n    <kendo-grid-column field=\"ggg\"  title=\"ggg\" [width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"hhh\" title=\"hhh\" [width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"iii\" title=\"iii\" [width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"jjj\" title=\"jjj\" [width]=\"40\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"kkk\" title=\"kkk\" [width]=\"40\"></kendo-grid-column>\r\n    \r\n    \r\n    \r\n    <kendo-grid-excel fileName=\"Products.xlsx\"></kendo-grid-excel>\r\n    </kendo-grid>\r\n\r\n\r\n      \r\n        <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" position=\"end\">\r\n          <p matLine>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      \r\n              <mat-icon class=\"icon_marging_left\">more_vert</mat-icon>\r\n            </button>\r\n          </p>\r\n          <p matLine>\r\n            <mat-menu #menu=\"matMenu\">\r\n      \r\n              <button mat-menu-item (click)=\"measureDistance()\">\r\n                <span>Measure Distance</span>\r\n              </button>\r\n      \r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                <span>Change Map</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,3)\">\r\n                <span>Center map about a selected point</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n                <span>Lasso</span>\r\n              </button>\r\n              <hr>\r\n              <button mat-menu-item [matMenuTriggerFor]=\"menu2\">\r\n                <span>Lasso - Options and filters</span>\r\n                <mat-menu #menu2=\"matMenu\">\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,6)\">\r\n                    <span>Create cluster based on selected elements</span>\r\n                  </button>\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n                    <span>Highlight</span>\r\n                </button>\r\n\r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n                    <span>Open in a map</span>\r\n                  </button>\r\n      \r\n\r\n      \r\n                  <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                    <span>Remove from cluster</span>\r\n                  </button>\r\n                </mat-menu>\r\n      \r\n      \r\n              </button>\r\n              <hr>\r\n              <button mat-menu-item (click)=\"loadselectedfromtable()\">\r\n                <span>load selected points</span>\r\n              </button>\r\n      \r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Add Textual Annotation</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Delete Textual Annotation</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Draw Silde</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n                <span>Report</span>\r\n              </button>\r\n      \r\n            </mat-menu>\r\n      \r\n            <span> {{clusterView}} </span>\r\n      \r\n          </p>\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                  <select #selectElem (change)=\"change_table(selectElem.value)\" class=\"dropdown\">\r\n                      <option value=\"select option\">---select---</option>\r\n                      <option value=\"type1\">type1</option>\r\n                      <option value=\"type2\">type2</option>\r\n                  </select>  \r\n                  <br>\r\n                    <button (click)=\"getNextPageFromServer()\" class=\"prevNextBtn\">>></button>\r\n                    <button (click)=\"getPrevPageFromServer()\" class=\"prevNextBtn\"><<</button>\r\n                    <p>{{startServerPage}} - {{endServerPage}}</p>\r\n \r\n                    \r\n                    <button (click)=\"filterFromServer()\" data-toggle=\"tooltip\" title=\"Hooray!\"\r\n                    class=\"standardBtn\">filter from server</button>\r\n                    <button (click)=\"filterFromClient()\" class=\"standardBtn\">filter from client</button>  \r\n              </div>\r\n      \r\n            </div>\r\n      \r\n          </div>\r\n      \r\n        </mat-drawer>\r\n      \r\n      \r\n      \r\n      </mat-drawer-container>\r\n      \r\n      \r\n      <mat-sidenav-container>\r\n        <mat-sidenav #sidenav2>\r\n      \r\n        </mat-sidenav>\r\n      </mat-sidenav-container>\r\n\r\n\r\n\r\n<div >\r\n \r\n    <div class=\"row\">\r\n    \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/table-reusing-data-items/table-reusing-data-items.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#Headline {\n  color: white;\n  text-decoration: underline; }\n\n/deep/.k-grid td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\np {\n  color: white; }\n\n.mat-drawer {\n  background-color: #193061;\n  color: rgba(0, 0, 0, 0.87);\n  width: 200px;\n  background: #49474a;\n  background: #290940; }\n\n.mat-drawer-container {\n  background: #16222e; }\n\n.mat-button {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-reusing-data-items/table-reusing-data-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableReusingDataItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_table_service__ = __webpack_require__("../../../../../src/app/shared/services/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_SharedServiceMapTableGraphs_service__ = __webpack_require__("../../../../../src/app/shared/services/SharedServiceMapTableGraphs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TableReusingDataItemsComponent = (function () {
    function TableReusingDataItemsComponent(_Tableservice, renderer, _SharedServiceMapTableGraphs) {
        this._Tableservice = _Tableservice;
        this.renderer = renderer;
        this._SharedServiceMapTableGraphs = _SharedServiceMapTableGraphs;
        this.multiple = false;
        this.allowUnsort = true;
        this.sort = [{
                field: 'ProductName',
                dir: 'asc'
            }];
        this.state = {};
        this.pageSize = 50;
        this.skip = 0;
        this.startServerPage = 0;
        this.endServerPage = 10000;
        //public mySelection: number[] = [2, 4,50,60];
        this.mySelectionObject = [];
        this.mySelection = [];
        this.view = new Array(this.pageSize).fill({}).map(function (x) { return ({}); });
    }
    TableReusingDataItemsComponent.prototype.mySelectionKey = function (context) {
        //ellipse
        return context.dataItem.customer_id + ' ' + context.dataItem.LAST_NAME
            + ' ' + context.dataItem.FIRST_NAME + ' '
            + context.dataItem.street
            + ' ' + context.dataItem.city + ' ' + context.dataItem.ttttt;
    };
    TableReusingDataItemsComponent.prototype.filterFromServer = function () {
        var _this = this;
        var currFilterStateList = [];
        console.log(this.currFilterState.filter.filters);
        this._Tableservice.filterFromServer(this.CluserId, this.startServerPage, this.endServerPage, this.currFilterState.filter.filters).subscribe(function (res) {
            console.log(res);
            _this.resdata = res;
            _this.clearData();
            if (_this.resdata.length > 0)
                _this.loadData();
            _this.grid.pageChange.debounceTime(0).subscribe(function (e) { return _this.pageChange(e); });
            _this.refreshTable();
        });
    };
    TableReusingDataItemsComponent.prototype.clearData = function () {
        this.gridView = {
            data: new Array(),
            total: this.resdata.lenght
        };
    };
    TableReusingDataItemsComponent.prototype.gridUserSelectionChange = function (grid, event) {
        console.log(this.selectElement);
        console.log(this.mySelection);
        this.mySelectionObject = [];
        var res;
        this.saveToSharedService();
        console.log(this._SharedServiceMapTableGraphs.tableToMap);
    };
    TableReusingDataItemsComponent.prototype.makeEllipse = function () {
        for (var i = 0; i < this.mySelection.length; i++) {
            var tmp = this.mySelection[i].split(" ");
            this.mySelectionObject.push({ lat: parseFloat(tmp[1]), lng: parseFloat(tmp[2]),
                hMajor: parseFloat(tmp[3]), hMinor: parseFloat(tmp[4]), Angle: parseFloat(tmp[5]) });
        }
        console.log(this.mySelectionObject);
    };
    //["1 32.362719 35.01641 1146 22 89", "2 31.945775 35.108228 0.123 0.123 0.123"]
    TableReusingDataItemsComponent.prototype.makePolygon = function () {
        this.mySelectionObject = [[32.362719, 35.01641], [31.945775, 35.108228], [34.945775, 35.7],
            [32.362719, 35.01641]];
        console.log(this.mySelectionObject);
    };
    TableReusingDataItemsComponent.prototype.saveToSharedService = function () {
        console.log(this.selectElement);
        switch (this.selectElement) {
            case 'type1':
                this.makeEllipse();
                this._SharedServiceMapTableGraphs.tableToMap = this.mySelectionObject;
                this._SharedServiceMapTableGraphs.ShapeOnMapType = this.selectElement;
                console.log(this._SharedServiceMapTableGraphs.tableToMap);
                break;
            case 'type2':
                this.makePolygon();
                console.log();
                this._SharedServiceMapTableGraphs.tableToMap = this.mySelectionObject;
                this._SharedServiceMapTableGraphs.ShapeOnMapType = this.selectElement;
                break;
            case 'type3':
                this._SharedServiceMapTableGraphs.selectedHypToMap = this.mySelectionObject;
                break;
        }
    };
    TableReusingDataItemsComponent.prototype.convertToFloat = function (element, index, array) {
        return parseFloat(array[index]);
    };
    TableReusingDataItemsComponent.prototype.dataStateChange = function (state) {
        this.state = state;
        this.currFilterState = state;
        if (state.filter.filters.length === 0) {
            this.resdata = this.savedresdataBeforeFilters;
            this.updateTable();
        }
    };
    TableReusingDataItemsComponent.prototype.ngOnInit = function () {
        // $('[data-toggle="tooltip"]').tooltip();  
        console.log(this.CluserId);
        //this.loadInitData();
    };
    TableReusingDataItemsComponent.prototype.ngOnChanges = function (changes) {
        if (this.drawer !== undefined) {
            this.drawer.open();
        }
    };
    TableReusingDataItemsComponent.prototype.exportToExcel = function (grid) {
        grid.saveAsExcel();
        //grid.saveAsExcel();
    };
    TableReusingDataItemsComponent.prototype.ngAfterViewInit = function () {
    };
    TableReusingDataItemsComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        // console.log("pageChange")
        this.loadData();
    };
    // public nextButton
    /* Generating example data */
    //load_table_by_type
    TableReusingDataItemsComponent.prototype.load_table_by_type = function (type) {
        var _this = this;
        this.loading = true;
        // this._Tableservice.getReuseDataTableData()
        this._Tableservice.GetTableByClusterIdStartEnd(this.CluserId, 0, 10000)
            .subscribe(function (res) {
            console.log(res);
            _this.resdata = res;
            _this.loadData();
            _this.loading = false;
            _this.updateTable();
        });
    };
    TableReusingDataItemsComponent.prototype.change_table = function (selectElem) {
        switch (selectElem) {
            case "type1":
                this.selectElement = selectElem;
                this.load_table_by_type(0);
                break;
            case "type2":
                this.selectElement = selectElem;
                this.load_table_by_type(1);
                break;
            case "type2":
                this.selectElement = selectElem;
                this.load_table_by_type(1);
                break;
        }
    };
    TableReusingDataItemsComponent.prototype.refreshTable = function () {
        var sidebar = document.getElementById("sidebar");
        sidebar.addEventListener("click", function () {
        }, false);
        sidebar.click(); // <==================== The artificial click
        sidebar.click();
    };
    TableReusingDataItemsComponent.prototype.filterFromClient = function () {
        var _this = this;
        this.resdata = this.savedresdataBeforeFilters;
        console.log(this.currFilterState);
        if (this.currFilterState != undefined) {
            for (var n = 0; n < this.currFilterState.filter.filters.length; n++) {
                console.log(this.currFilterState.filter.filters[n].filters.length);
                if (this.currFilterState.filter.filters[n].filters.length === 2) {
                    this.twoFiltersInOneCoulumn(n);
                }
                if (this.currFilterState.filter.filters[n].filters.length === 1) {
                    this.oneFiltersInOneCoulumn(n);
                }
            }
        }
        console.log(this.resdata);
        if (this.resdata.length === 0)
            this.clearData();
        else
            this.loadData();
        this.grid.pageChange.debounceTime(0)
            .subscribe(function (e) { return _this.pageChange(e); });
        this.refreshTable();
        //this.dat
    };
    TableReusingDataItemsComponent.prototype.filterOneFromClient = function (item1, item2, operator) {
        switch (operator) {
            case "eq":
                return item1 === item2;
            case "neq":
                return item1 === item2;
            case "gt":
                return item1 > item2;
            case "gte":
                return item1 >= item2;
            case "lt":
                return item1 < item2;
            case "contains":
                return item1.includes(item2);
            case "startswith":
                return item1.startsWith(item2);
            case "endswith":
                return item1.endsWith(item2);
        }
    };
    TableReusingDataItemsComponent.prototype.oneFiltersInOneCoulumn = function (n) {
        var _this = this;
        var currFilterPair = this.currFilterState.filter.filters[n].filters;
        this.resdata = this.resdata.filter(function (item) {
            return _this.filterOneFromClient(item[currFilterPair[0].field], currFilterPair[0].value, currFilterPair[0].operator);
        });
    };
    TableReusingDataItemsComponent.prototype.twoFiltersInOneCoulumn = function (n) {
        var _this = this;
        if (this.currFilterState.filter.filters[n].logic === 'or') {
            var currFilterPair_1 = this.currFilterState.filter.filters[n].filters;
            this.resdata = this.resdata.filter(function (item) {
                return _this.filterOneFromClient(item[currFilterPair_1[0].field], currFilterPair_1[0].value, currFilterPair_1[0].operator) ||
                    _this.filterOneFromClient(item[currFilterPair_1[1].field], currFilterPair_1[1].value, currFilterPair_1[1].operator);
            });
        }
        else if (this.currFilterState.filter.filters[n].logic === 'and') {
            var currFilterPair_2 = this.currFilterState.filter.filters[n].filters;
            this.resdata = this.resdata.filter(function (item) {
                return _this.filterOneFromClient(item[currFilterPair_2[0].field], currFilterPair_2[0].value, currFilterPair_2[0].operator) &&
                    _this.filterOneFromClient(item[currFilterPair_2[1].field], currFilterPair_2[1].value, currFilterPair_2[1].operator);
            });
        }
    };
    TableReusingDataItemsComponent.prototype.getNextPageFromServer = function () {
        var _this = this;
        var self = this;
        this._Tableservice
            .GetTableByClusterIdStartEnd(this.CluserId, this.startServerPage + 10000, this.endServerPage + 10000)
            .subscribe(function (res) {
            if (res.length > 0) {
                self.startServerPage += 10000;
                self.endServerPage += 10000;
                _this.resdata = res;
                // console.log(this.resdata)
                _this.updateTable();
            }
        });
    };
    TableReusingDataItemsComponent.prototype.getPrevPageFromServer = function () {
        var _this = this;
        var self = this;
        this._Tableservice
            .GetTableByClusterIdStartEnd(this.CluserId, this.startServerPage - 10000, this.endServerPage - 10000)
            .subscribe(function (res) {
            if (res.length > 0) {
                self.startServerPage -= 10000;
                self.endServerPage -= 10000;
                _this.resdata = res;
                //console.log(this.resdata)
                _this.updateTable();
            }
        });
    };
    TableReusingDataItemsComponent.prototype.updateTable = function () {
        var _this = this;
        this.savedresdataBeforeFilters = this.resdata;
        this.loadData();
        this.grid.pageChange.debounceTime(0)
            .subscribe(function (e) { return _this.pageChange(e); });
        this.refreshTable();
    };
    TableReusingDataItemsComponent.prototype.loadData = function () {
        var _this = this;
        this.currentView = this.resdata.slice(this.skip, this.skip + this.pageSize);
        var removeCount = this.view.length - this.currentView.length;
        if (removeCount > 0) {
            this.view.splice(this.currentView.length - 1, removeCount);
        }
        this.currentView.forEach(function (item, index) {
            if (!_this.view[index]) {
                _this.view[index] = {};
            }
            Object.assign(_this.view[index], item);
        });
        console.log(this.view);
        this.gridView = {
            data: this.view,
            total: this.resdata.length
        };
    };
    return TableReusingDataItemsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('grid'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["b" /* GridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["b" /* GridComponent */]) === "function" && _a || Object)
], TableReusingDataItemsComponent.prototype, "grid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('sharableLink'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], TableReusingDataItemsComponent.prototype, "sharableLink", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('drawer'),
    __metadata("design:type", Object)
], TableReusingDataItemsComponent.prototype, "drawer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TableReusingDataItemsComponent.prototype, "chartWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TableReusingDataItemsComponent.prototype, "chartHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TableReusingDataItemsComponent.prototype, "CluserId", void 0);
TableReusingDataItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'table-reusing-data-items',
        template: __webpack_require__("../../../../../src/app/table-reusing-data-items/table-reusing-data-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table-reusing-data-items/table-reusing-data-items.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_table_service__["a" /* Tableservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_table_service__["a" /* Tableservice */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_SharedServiceMapTableGraphs_service__["a" /* SharedServiceMapTableGraphs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_SharedServiceMapTableGraphs_service__["a" /* SharedServiceMapTableGraphs */]) === "function" && _e || Object])
], TableReusingDataItemsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=table-reusing-data-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/time-angle-graph500-k/time-angle-graph500-k.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\r\n\r\n  <div class=\"example-sidenav-content\" style=\"z-index:10000;    float: right;\">\r\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n\r\n    </button>\r\n  </div>\r\n  <div #containerScatterGraph></div>\r\n\r\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" position=\"end\">\r\n    <p matLine >\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n\r\n        <mat-icon class=\"icon_marging_left\">more_vert</mat-icon>\r\n      </button>\r\n    </p>\r\n    <p matLine>\r\n      <mat-menu #menu=\"matMenu\">\r\n\r\n        <button mat-menu-item (click)=\"measureDistance()\">\r\n          <span>Measure Distance</span>\r\n        </button>\r\n\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n          <span>Change Map</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,3)\">\r\n          <span>Center map about a selected point</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n          <span>Lasso</span>\r\n        </button>\r\n        <hr>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"menu2\">\r\n          <span>Lasso - Options and filters</span>\r\n          <mat-menu #menu2=\"matMenu\">\r\n\r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,6)\">\r\n              <span>Create cluster based on selected elements</span>\r\n            </button>\r\n\r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,2)\">\r\n              <span>Highlight</span>\r\n          </button>\r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,4)\">\r\n              <span>Open in a map</span>\r\n            </button>\r\n\r\n \r\n\r\n         \r\n            <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n              <span>Remove from cluster</span>\r\n            </button>\r\n          </mat-menu>\r\n\r\n\r\n        </button>\r\n        <hr>\r\n        <button mat-menu-item (click)=\"loadselectedfromtable()\">\r\n          <span>load selected points</span>\r\n        </button>\r\n\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n          <span>Add Textual Annotation</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n          <span>Delete Textual Annotation</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n          <span>Draw Silde</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"addItemByCluserIdAndType(cluster,7)\">\r\n          <span>Report</span>\r\n        </button>\r\n\r\n      </mat-menu>\r\n\r\n      <span> {{clusterView}} </span>\r\n\r\n    </p>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <label class=\"colorWhite\">select y axis: </label>\r\n          <select #selectElemY (change)=\"Change_Y_Axis(selectElemY.value)\">\r\n            <option value=\"Number\">Number</option>\r\n            <option value=\"Catagory\">Catagory</option>\r\n\r\n          </select>\r\n\r\n          <label class=\"colorWhite\">select x axis: </label>\r\n          <select #selectElemX (change)=\"Change_X_Axis(selectElemX.value)\">\r\n            <option value=\"Date\">Date</option>\r\n            <option value=\"Catagory\">Catagory</option>\r\n            <option value=\"Number\">Number</option>\r\n          </select>\r\n          <hr>\r\n          <button (click)=\"getNextPageFromServer()\">>></button>\r\n          <button (click)=\"getPrevPageFromServer()\">\r\n            <<</button>\r\n              <label class=\"colorWhite\">{{startServerPage}} - {{endServerPage}} first result</label>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </mat-drawer>\r\n\r\n\r\n\r\n</mat-drawer-container>\r\n\r\n\r\n<mat-sidenav-container>\r\n  <mat-sidenav #sidenav2>\r\n\r\n  </mat-sidenav>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/time-angle-graph500-k/time-angle-graph500-k.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorWhite {\n  color: white; }\n\n.mat-drawer {\n  background-color: #193061;\n  background-color: #49474a;\n  color: rgba(0, 0, 0, 0.87);\n  width: 200px;\n  background: #290940; }\n\n.icon_marging_left {\n  color: white; }\n\n.mat-button {\n  color: white; }\n\n.example-sidenav-content {\n  background: #2c2c2e; }\n\n/deep/.mat-drawer-content {\n  background: #2c2c2e;\n  overflow-x: hidden; }\n\n.mat-drawer-container {\n  background: #2c2c2e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/time-angle-graph500-k/time-angle-graph500-k.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAngleGraph500KComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_ScatterGraph_service__ = __webpack_require__("../../../../../src/app/shared/services/ScatterGraph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_classes_GraphTheme__ = __webpack_require__("../../../../../src/app/shared/classes/GraphTheme.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeAngleGraph500KComponent = TimeAngleGraph500KComponent_1 = (function () {
    function TimeAngleGraph500KComponent(_ScatterGraphService) {
        this._ScatterGraphService = _ScatterGraphService;
        this.startServerPage = 0;
        this.endServerPage = 100000;
    }
    TimeAngleGraph500KComponent.prototype.ngOnInit = function () {
        console.log(this.CluserId);
        // var n = 100000;
        //this.data = this.getData(n);
    };
    TimeAngleGraph500KComponent.prototype.Change_Y_Axis = function (selectElement) {
        switch (selectElement) {
            /*case 'Date': {
                this.changeGraphYAxisDate();
                break;
            }*/
            case 'Catagory': {
                this.changeGraphAxisYCatagory();
                break;
            }
            case 'Number': {
                this.changeGraphYAxisNumber();
                break;
            }
        }
    };
    TimeAngleGraph500KComponent.prototype.getPrevPageFromServer = function () {
        var _this = this;
        var self = this;
        this._ScatterGraphService
            .getXYGraphByCluster_startEnd(this.startServerPage - 100000, this.endServerPage - 100000)
            .subscribe(function (res) {
            if (_this.startServerPage != 0) {
                _this.startServerPage -= 100000;
                _this.endServerPage -= 100000;
                _this.chart2.series[0].update({
                    data: res,
                    type: 'scatter',
                    color: 'rgb(152, 0, 67)',
                    marker: {
                        radius: 2
                    }
                });
            }
        });
    };
    TimeAngleGraph500KComponent.prototype.updateStartEndServerPage = function () {
        this.startServerPage += 100000;
        this.endServerPage += 100000;
    };
    TimeAngleGraph500KComponent.prototype.getNextPageFromServer = function () {
        var _this = this;
        var selfNext = this;
        this.startServerPage += 100000;
        this.endServerPage += 100000;
        this._ScatterGraphService
            .getXYGraphByCluster_startEnd(this.startServerPage, this.endServerPage)
            .subscribe(function (res) {
            console.log(res.length);
            if (res.length > 0) {
                // selfNext.startServerPage += 100000
                //  selfNext.endServerPage += 100000
                console.log(_this.startServerPage);
                _this.chart2.series[0].update({
                    data: res,
                    type: 'scatter',
                    color: 'rgb(152, 0, 67)',
                    marker: {
                        radius: 2
                    }
                });
            }
            else {
                _this.chart2.series[0].update({
                    name: ' no more data',
                    data: []
                });
                _this.startServerPage -= 100000;
                _this.endServerPage -= 100000;
            }
        });
    };
    TimeAngleGraph500KComponent.prototype.changeGraphYAxisDate = function () {
        var _this = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            _this.chart2.series[0].update({
                data: [1417680117775, 1417680119040]
            });
            _this.chart2.yAxis[0].update({
                type: 'datetime',
                categories: null,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%d:%m:%Y', this.value);
                    }
                },
            });
            if (_this.chart2.xAxis[0].type === 'datetime') {
                _this.handleAxis_x_Datetime(res);
            }
            _this.chart2.tooltip.update({
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.y))
                        + '  <br/>' + new Date(this.x) + ' K.';
                }
            });
        });
    };
    TimeAngleGraph500KComponent.prototype.changeGraphYAxisNumber = function () {
        var _this = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            console.log(res);
            _this.chart2.series[0].update({
                data: res,
            });
            _this.chart2.yAxis[0].update({
                type: 'linear',
                categories: null,
            });
            _this.chart2.yAxis[0].setTitle({
                text: 'New y axis title'
            });
            if (_this.chart2.xAxis[0].userOptions.type === "datetime") {
                console.log("this.chart2.xAxis[0].type==='datetime'");
                _this.handleAxis_x_Datetime(res);
                _this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.x))
                            + '  <br/>' + this.y;
                    }
                });
            }
            else
                _this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' + this.x + ' K.'
                            + '  <br/>' + this.y + ' K.';
                    }
                });
        });
    };
    TimeAngleGraph500KComponent.prototype.handleAxis_x_Datetime = function (res) {
        this.chart2.series[0].update({
            data: res,
            pointStart: Date.UTC(2012, 2, 30),
            pointInterval: 60 * 1000,
        });
    };
    TimeAngleGraph500KComponent.prototype.changeGraphAxisYCatagory = function () {
        var _this = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            TimeAngleGraph500KComponent_1.selectElementX = "Catagory";
            var arr = [];
            var i, x;
            for (var i_1 = 0; i_1 < 100000; i_1++) {
                arr.push("catagory" + i_1);
            }
            console.log(arr);
            _this.chart2.yAxis[0].update({
                type: 'category',
                categories: arr
            });
            if (_this.chart2.xAxis[0].userOptions.type === "datetime") {
                _this.handleAxis_x_Datetime(res);
            }
            else
                _this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>'
                            + this.point.series.yAxis.categories[this.y] + '<br/>' + this.x + ' K.';
                    }
                });
        });
    };
    TimeAngleGraph500KComponent.prototype.Change_X_Axis = function (selectElement) {
        switch (selectElement) {
            case 'Date': {
                this.changeGraphAxisXDate();
                break;
            }
            case 'Catagory': {
                this.changeGraphAxisXCatagory();
                break;
            }
            case 'Number': {
                this.changeGraphXAxis();
                break;
            }
        }
    };
    TimeAngleGraph500KComponent.prototype.Axis_Y_TypeTooltipFormater = function () {
        console.log(this.chart2);
        switch (this.chart2.yAxis[0].userOptions.type) {
            case "datetime": {
                this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>'
                            + this.point.series.xAxis.categories[this.key] + '<br/>'
                            + Highcharts.dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.y)) + ' K.';
                    }
                });
                break;
            }
            case "category": {
                this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>'
                            + this.point.series.xAxis.categories[this.key] + '<br/>'
                            + this.point.series.yAxis.categories[this.key] + ' K.';
                    }
                });
                break;
            }
            case "linear": {
                this.chart2.tooltip.update({
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>'
                            + this.point.series.xAxis.categories[this.key] + '<br/>'
                            + this.y + ' K.';
                    }
                });
                break;
            }
        }
    };
    TimeAngleGraph500KComponent.prototype.changeGraphAxisXCatagory = function () {
        var _this = this;
        var self = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            TimeAngleGraph500KComponent_1.selectElementX = "Number";
            var arr = [];
            var i, x;
            for (var i_2 = 0; i_2 < 100000; i_2++) {
                arr.push("catagory" + i_2);
            }
            console.log(arr);
            _this.chart2.xAxis[0].update({
                type: 'category',
                categories: arr
            });
            _this.chart2.series[0].update({
                //  data: res,
                pointStart: 0,
                pointInterval: 1
            });
            self.Axis_Y_TypeTooltipFormater();
        });
    };
    TimeAngleGraph500KComponent.prototype.changeGraphAxisXDate = function () {
        var _this = this;
        this._ScatterGraphService.getYData()
            .subscribe(function (res) {
            TimeAngleGraph500KComponent_1.selectElementX = "Date";
            _this.chart2.xAxis[0].update({
                type: 'datetime',
                categories: null,
            });
            _this.chart2.series[0].update({
                // data: res,
                pointStart: Date.UTC(2012, 2, 30),
                pointInterval: 60 * 1000,
            });
            _this.chart2.tooltip.update({
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.x))
                        + '  <br/>' + this.y + ' K.';
                }
            });
        });
    };
    TimeAngleGraph500KComponent.prototype.changeGraphXAxis = function () {
        var _this = this;
        this._ScatterGraphService.getData()
            .subscribe(function (res) {
            console.log(res);
            _this.chart2.series[0].update({
                // data: res,
                pointStart: 0,
                pointInterval: 1
            });
            _this.chart2.xAxis[0].update({
                type: 'linear',
                categories: null,
            });
            _this.chart2.xAxis[0].setTitle({
                text: 'New x axis title'
            });
            _this.chart2.tooltip.update({
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' + this.x + ' K.'
                        + '  <br/>' + this.y + ' K.';
                }
            });
        });
    };
    /*getData(n) {
      var arr = [];
      let i,x;
   
     for(let i=0;i<n;i++)
     {
      arr.push(i);
     }
     console.log(arr)
      return arr;
  }*/
    TimeAngleGraph500KComponent.prototype.ngOnChanges = function (changes) {
        if (this.drawer !== undefined) {
            this.drawer.open();
        }
        //console.log(changes);
        if (this.chart2 !== undefined) {
            this.chart2.setSize(this.chartWidth, this.chartHeight);
            //console.log("chartWidth: " + this.chartWidth + " _chartHeight: " + this.chartHeight);
        }
    };
    TimeAngleGraph500KComponent.prototype.addHighchartsTheme = function () {
        this._GraphTheme = new __WEBPACK_IMPORTED_MODULE_2__shared_classes_GraphTheme__["a" /* GraphTheme */]();
        Highcharts.theme = this._GraphTheme.addHighchartsTheme();
        Highcharts.setOptions(Highcharts.theme);
    };
    TimeAngleGraph500KComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.addHighchartsTheme();
        // this._ScatterGraphService.getYData()
        this._ScatterGraphService.getXYGraphByCluster_startEnd(0, 100000)
            .subscribe(function (res) {
            _this.chart2 = Highcharts.chart(_this.containerScatterGraph.nativeElement, {
                chart: {
                    zoomType: 'xy',
                    width: _this.chartWidth - 20,
                    height: _this.chartHeight,
                },
                boost: {},
                exporting: { enabled: false },
                title: {
                    text: 'Highcharts drawing ' + 100000 + ' points'
                },
                subtitle: {
                    text: 'Using the Boost module'
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' + Highcharts
                            .dateFormat('%e - %b - %Y %H:%M:%S', new Date(this.x)) + '  <br/>'
                            + this.y + ' .';
                    }
                },
                xAxis: {
                    minTickInterval: 1,
                },
                series: [{
                        data: res.slice(1, 20000),
                        type: 'scatter',
                        color: 'rgb(156, 193, 1)',
                        marker: {
                            radius: 2
                        },
                    },
                    {
                        data: res.slice(20000, 40000),
                        type: 'scatter',
                        color: 'rgb(0, 124, 210)',
                        marker: {
                            radius: 2
                        },
                    },
                    {
                        data: res.slice(40000, 80000),
                        type: 'scatter',
                        color: 'rgb(210, 54, 91)',
                        marker: {
                            radius: 2
                        },
                    },
                    {
                        data: res.slice(80000, res.length),
                        type: 'scatter',
                        color: 'rgb(254, 154, 60)',
                        marker: {
                            radius: 2
                        },
                    }]
            });
        });
        //this. highlightFunctionality();
    };
    return TimeAngleGraph500KComponent;
}());
TimeAngleGraph500KComponent.selectElementX = 'Date';
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TimeAngleGraph500KComponent.prototype, "chartWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TimeAngleGraph500KComponent.prototype, "chartHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TimeAngleGraph500KComponent.prototype, "CluserId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('containerScatterGraph'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], TimeAngleGraph500KComponent.prototype, "containerScatterGraph", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('drawer'),
    __metadata("design:type", Object)
], TimeAngleGraph500KComponent.prototype, "drawer", void 0);
TimeAngleGraph500KComponent = TimeAngleGraph500KComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'time-angle-graph500-k',
        template: __webpack_require__("../../../../../src/app/time-angle-graph500-k/time-angle-graph500-k.component.html"),
        styles: [__webpack_require__("../../../../../src/app/time-angle-graph500-k/time-angle-graph500-k.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services_ScatterGraph_service__["a" /* ScatterGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services_ScatterGraph_service__["a" /* ScatterGraphService */]) === "function" && _b || Object])
], TimeAngleGraph500KComponent);

var TimeAngleGraph500KComponent_1, _a, _b;
//# sourceMappingURL=time-angle-graph500-k.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/lib/gridster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridsterConfig_constant__ = __webpack_require__("../../../../../src/lib/gridsterConfig.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridsterConfig_interface__ = __webpack_require__("../../../../../src/lib/gridsterConfig.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridsterConfig_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gridsterConfig_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridsterUtils_service__ = __webpack_require__("../../../../../src/lib/gridsterUtils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gridsterEmptyCell_service__ = __webpack_require__("../../../../../src/lib/gridsterEmptyCell.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gridsterCompact_service__ = __webpack_require__("../../../../../src/lib/gridsterCompact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GridsterComponent = GridsterComponent_1 = (function () {
    function GridsterComponent(el, renderer, cdRef) {
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.el = el.nativeElement;
        this.$options = JSON.parse(JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__gridsterConfig_constant__["a" /* GridsterConfigService */]));
        this.mobile = false;
        this.curWidth = 0;
        this.curHeight = 0;
        this.grid = [];
        this.curColWidth = 0;
        this.curRowHeight = 0;
        this.dragInProgress = false;
        this.$options.draggable.stop = undefined;
        this.$options.draggable.start = undefined;
        this.$options.resizable.stop = undefined;
        this.$options.resizable.start = undefined;
        this.$options.itemChangeCallback = undefined;
        this.$options.itemResizeCallback = undefined;
        this.$options.itemInitCallback = undefined;
        this.$options.itemRemovedCallback = undefined;
        this.$options.emptyCellClickCallback = undefined;
        this.$options.emptyCellContextMenuCallback = undefined;
        this.$options.emptyCellDropCallback = undefined;
        this.$options.emptyCellDragCallback = undefined;
        this.emptyCell = new __WEBPACK_IMPORTED_MODULE_4__gridsterEmptyCell_service__["a" /* GridsterEmptyCell */](this);
        this.compact = new __WEBPACK_IMPORTED_MODULE_5__gridsterCompact_service__["a" /* GridsterCompact */](this);
    }
    GridsterComponent.checkCollisionTwoItems = function (item, item2) {
        return item.x < item2.x + item2.cols
            && item.x + item.cols > item2.x
            && item.y < item2.y + item2.rows
            && item.y + item.rows > item2.y;
    };
    GridsterComponent.prototype.ngOnInit = function () {
        this.setOptions();
        this.options.api = {
            optionsChanged: this.optionsChanged.bind(this),
            resize: this.onResize.bind(this),
            getNextPossiblePosition: this.getNextPossiblePosition.bind(this)
        };
        this.columns = this.$options.minCols;
        this.rows = this.$options.minRows;
        this.setGridSize();
        this.calculateLayoutDebounce = __WEBPACK_IMPORTED_MODULE_3__gridsterUtils_service__["a" /* GridsterUtils */].debounce(this.calculateLayout.bind(this), 5);
        this.calculateLayoutDebounce();
        if (this.options.initCallback) {
            this.options.initCallback(this);
        }
    };
    GridsterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options) {
            this.ngOnInit();
        }
    };
    GridsterComponent.prototype.resize = function () {
        var height;
        var width;
        if (this.$options.gridType === 'fit' && !this.mobile) {
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
        }
        else {
            width = this.el.clientWidth;
            height = this.el.clientHeight;
        }
        if ((width !== this.curWidth || height !== this.curHeight) && this.checkIfToResize()) {
            this.onResize();
        }
    };
    GridsterComponent.prototype.setOptions = function () {
        this.$options = __WEBPACK_IMPORTED_MODULE_3__gridsterUtils_service__["a" /* GridsterUtils */].merge(this.$options, this.options, this.$options);
        if (!this.$options.disableWindowResize && !this.windowResize) {
            this.windowResize = this.renderer.listen('window', 'resize', this.onResize.bind(this));
        }
        else if (this.$options.disableWindowResize && this.windowResize) {
            this.windowResize();
            this.windowResize = null;
        }
        this.emptyCell.updateOptions();
    };
    GridsterComponent.prototype.optionsChanged = function () {
        this.setOptions();
        var widgetsIndex = this.grid.length - 1, widget;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            widget.updateOptions();
        }
        this.calculateLayout();
    };
    GridsterComponent.prototype.ngOnDestroy = function () {
        if (this.windowResize) {
            this.windowResize();
        }
    };
    GridsterComponent.prototype.onResize = function () {
        this.setGridSize();
        this.calculateLayoutDebounce();
    };
    GridsterComponent.prototype.checkIfToResize = function () {
        var clientWidth = this.el.clientWidth;
        var offsetWidth = this.el.offsetWidth;
        var scrollWidth = this.el.scrollWidth;
        var clientHeight = this.el.clientHeight;
        var offsetHeight = this.el.offsetHeight;
        var scrollHeight = this.el.scrollHeight;
        var verticalScrollPresent = clientWidth < offsetWidth && scrollHeight > offsetHeight
            && scrollHeight - offsetHeight < offsetWidth - clientWidth;
        var horizontalScrollPresent = clientHeight < offsetHeight
            && scrollWidth > offsetWidth && scrollWidth - offsetWidth < offsetHeight - clientHeight;
        if (verticalScrollPresent) {
            return false;
        }
        return !horizontalScrollPresent;
    };
    GridsterComponent.prototype.setGridSize = function () {
        var width = this.el.clientWidth;
        var height = this.el.clientHeight;
        if (this.$options.gridType === 'fit' && !this.mobile) {
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
        }
        else {
            width = this.el.clientWidth;
            height = this.el.clientHeight;
        }
        this.curWidth = width;
        this.curHeight = height;
    };
    GridsterComponent.prototype.setGridDimensions = function () {
        this.setGridSize();
        if (!this.mobile && this.$options.mobileBreakpoint > this.curWidth) {
            this.mobile = !this.mobile;
            this.renderer.addClass(this.el, 'mobile');
        }
        else if (this.mobile && this.$options.mobileBreakpoint < this.curWidth) {
            this.mobile = !this.mobile;
            this.renderer.removeClass(this.el, 'mobile');
        }
        var rows = this.$options.minRows, columns = this.$options.minCols;
        var widgetsIndex = this.grid.length - 1;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            rows = Math.max(rows, this.grid[widgetsIndex].$item.y + this.grid[widgetsIndex].$item.rows);
            columns = Math.max(columns, this.grid[widgetsIndex].$item.x + this.grid[widgetsIndex].$item.cols);
        }
        this.columns = columns;
        this.rows = rows;
    };
    GridsterComponent.prototype.calculateLayout = function () {
        // check to compact
        this.compact.checkCompact();
        this.setGridDimensions();
        if (this.$options.outerMargin) {
            this.curColWidth = Math.floor((this.curWidth - this.$options.margin) / this.columns);
            this.curRowHeight = Math.floor((this.curHeight - this.$options.margin) / this.rows);
        }
        else {
            this.curColWidth = Math.floor((this.curWidth + this.$options.margin) / this.columns);
            this.curRowHeight = Math.floor((this.curHeight + this.$options.margin) / this.rows);
        }
        var addClass = '';
        var removeClass1 = '';
        var removeClass2 = '';
        var removeClass3 = '';
        if (this.$options.gridType === 'fit') {
            addClass = 'fit';
            removeClass1 = 'scrollVertical';
            removeClass2 = 'scrollHorizontal';
            removeClass3 = 'fixed';
        }
        else if (this.$options.gridType === 'scrollVertical') {
            this.curRowHeight = this.curColWidth;
            addClass = 'scrollVertical';
            removeClass1 = 'fit';
            removeClass2 = 'scrollHorizontal';
            removeClass3 = 'fixed';
        }
        else if (this.$options.gridType === 'scrollHorizontal') {
            this.curColWidth = this.curRowHeight;
            addClass = 'scrollHorizontal';
            removeClass1 = 'fit';
            removeClass2 = 'scrollVertical';
            removeClass3 = 'fixed';
        }
        else if (this.$options.gridType === 'fixed') {
            this.curColWidth = this.$options.fixedColWidth + this.$options.margin;
            this.curRowHeight = this.$options.fixedRowHeight + this.$options.margin;
            addClass = 'fixed';
            removeClass1 = 'fit';
            removeClass2 = 'scrollVertical';
            removeClass3 = 'scrollHorizontal';
        }
        else if (this.$options.gridType === 'verticalFixed') {
            this.curRowHeight = this.$options.fixedRowHeight + this.$options.margin;
            addClass = 'scrollVertical';
            removeClass1 = 'fit';
            removeClass2 = 'scrollHorizontal';
            removeClass3 = 'fixed';
        }
        else if (this.$options.gridType === 'horizontalFixed') {
            this.curColWidth = this.$options.fixedColWidth + this.$options.margin;
            addClass = 'scrollHorizontal';
            removeClass1 = 'fit';
            removeClass2 = 'scrollVertical';
            removeClass3 = 'fixed';
        }
        this.renderer.addClass(this.el, addClass);
        this.renderer.removeClass(this.el, removeClass1);
        this.renderer.removeClass(this.el, removeClass2);
        this.renderer.removeClass(this.el, removeClass3);
        this.gridLines.updateGrid();
        var widgetsIndex = this.grid.length - 1, widget;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            widget.setSize(false);
            widget.drag.toggle();
            widget.resize.toggle();
        }
        setTimeout(this.resize.bind(this), 100);
    };
    GridsterComponent.prototype.addItem = function (itemComponent) {
        if (itemComponent.$item.cols === undefined) {
            itemComponent.$item.cols = this.$options.defaultItemCols;
            itemComponent.item.cols = itemComponent.$item.cols;
            itemComponent.itemChanged();
        }
        if (itemComponent.$item.rows === undefined) {
            itemComponent.$item.rows = this.$options.defaultItemRows;
            itemComponent.item.rows = itemComponent.$item.rows;
            itemComponent.itemChanged();
        }
        if (itemComponent.$item.x === -1 || itemComponent.$item.y === -1) {
            this.autoPositionItem(itemComponent);
        }
        else if (this.checkCollision(itemComponent.$item)) {
            console.warn('Can\'t be placed in the bounds of the dashboard, trying to auto position!/n' +
                JSON.stringify(itemComponent.item, ['cols', 'rows', 'x', 'y']));
            this.autoPositionItem(itemComponent);
        }
        this.grid.push(itemComponent);
        this.calculateLayoutDebounce();
        if (itemComponent.$item.initCallback) {
            itemComponent.$item.initCallback(itemComponent.item, itemComponent);
        }
        if (this.$options.itemInitCallback) {
            this.$options.itemInitCallback(itemComponent.item, itemComponent);
        }
    };
    GridsterComponent.prototype.removeItem = function (itemComponent) {
        this.grid.splice(this.grid.indexOf(itemComponent), 1);
        this.calculateLayoutDebounce();
        if (this.$options.itemRemovedCallback) {
            this.$options.itemRemovedCallback(itemComponent.item, itemComponent);
        }
    };
    GridsterComponent.prototype.checkCollision = function (item) {
        return this.checkGridCollision(item) || this.findItemWithItem(item);
    };
    GridsterComponent.prototype.checkGridCollision = function (item) {
        var noNegativePosition = item.y > -1 && item.x > -1;
        var maxGridCols = item.cols + item.x <= this.$options.maxCols;
        var maxGridRows = item.rows + item.y <= this.$options.maxRows;
        var maxItemCols = item.maxItemCols === undefined ? this.$options.maxItemCols : item.maxItemCols;
        var minItemCols = item.minItemCols === undefined ? this.$options.minItemCols : item.minItemCols;
        var maxItemRows = item.maxItemRows === undefined ? this.$options.maxItemRows : item.maxItemRows;
        var minItemRows = item.minItemRows === undefined ? this.$options.minItemRows : item.minItemRows;
        var inColsLimits = item.cols <= maxItemCols && item.cols >= minItemCols;
        var inRowsLimits = item.rows <= maxItemRows && item.rows >= minItemRows;
        var minAreaLimit = item.minItemArea === undefined ? this.$options.minItemArea : item.minItemArea;
        var maxAreaLimit = item.maxItemArea === undefined ? this.$options.maxItemArea : item.maxItemArea;
        var area = item.cols * item.rows;
        var inMinArea = minAreaLimit <= area;
        var inMaxArea = maxAreaLimit >= area;
        return !(noNegativePosition && maxGridCols && maxGridRows && inColsLimits && inRowsLimits && inMinArea && inMaxArea);
    };
    GridsterComponent.prototype.findItemWithItem = function (item) {
        var widgetsIndex = this.grid.length - 1, widget;
        for (; widgetsIndex > -1; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            if (widget.$item !== item && GridsterComponent_1.checkCollisionTwoItems(widget.$item, item)) {
                return widget;
            }
        }
        return false;
    };
    GridsterComponent.prototype.findItemsWithItem = function (item) {
        var a = [];
        var widgetsIndex = this.grid.length - 1, widget;
        for (; widgetsIndex > -1; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            if (widget.$item !== item && GridsterComponent_1.checkCollisionTwoItems(widget.$item, item)) {
                a.push(widget);
            }
        }
        return a;
    };
    GridsterComponent.prototype.autoPositionItem = function (itemComponent) {
        if (this.getNextPossiblePosition(itemComponent.$item)) {
            itemComponent.item.x = itemComponent.$item.x;
            itemComponent.item.y = itemComponent.$item.y;
            itemComponent.itemChanged();
        }
        else {
            itemComponent.notPlaced = true;
            console.warn('Can\'t be placed in the bounds of the dashboard!/n' +
                JSON.stringify(itemComponent.item, ['cols', 'rows', 'x', 'y']));
        }
    };
    GridsterComponent.prototype.getNextPossiblePosition = function (newItem) {
        if (newItem.cols === -1) {
            newItem.cols = this.$options.defaultItemCols;
        }
        if (newItem.rows === -1) {
            newItem.rows = this.$options.defaultItemRows;
        }
        this.setGridDimensions();
        var rowsIndex = 0, colsIndex;
        for (; rowsIndex < this.rows; rowsIndex++) {
            newItem.y = rowsIndex;
            colsIndex = 0;
            for (; colsIndex < this.columns; colsIndex++) {
                newItem.x = colsIndex;
                if (!this.checkCollision(newItem)) {
                    return true;
                }
            }
        }
        var canAddToRows = this.$options.maxRows >= this.rows + newItem.rows;
        var canAddToColumns = this.$options.maxCols >= this.columns + newItem.cols;
        var addToRows = this.rows <= this.columns && canAddToRows;
        if (!addToRows && canAddToColumns) {
            newItem.x = this.columns;
            newItem.y = 0;
            return true;
        }
        else if (canAddToRows) {
            newItem.y = this.rows;
            newItem.x = 0;
            return true;
        }
        return false;
    };
    GridsterComponent.prototype.pixelsToPosition = function (x, y, roundingMethod) {
        return [this.pixelsToPositionX(x, roundingMethod), this.pixelsToPositionY(y, roundingMethod)];
    };
    GridsterComponent.prototype.pixelsToPositionX = function (x, roundingMethod) {
        return Math.max(roundingMethod(x / this.curColWidth), 0);
    };
    GridsterComponent.prototype.pixelsToPositionY = function (y, roundingMethod) {
        return Math.max(roundingMethod(y / this.curRowHeight), 0);
    };
    GridsterComponent.prototype.positionXToPixels = function (x) {
        return x * this.curColWidth;
    };
    GridsterComponent.prototype.positionYToPixels = function (y) {
        return y * this.curRowHeight;
    };
    return GridsterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__gridsterConfig_interface__["GridsterConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gridsterConfig_interface__["GridsterConfig"]) === "function" && _a || Object)
], GridsterComponent.prototype, "options", void 0);
GridsterComponent = GridsterComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gridster',
        template: __webpack_require__("../../../../../src/lib/gridster.html"),
        styles: [__webpack_require__("../../../../../src/lib/gridster.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object])
], GridsterComponent);

var GridsterComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=gridster.component.js.map

/***/ }),

/***/ "../../../../../src/lib/gridster.html":
/***/ (function(module, exports) {

module.exports = "<gridster-grid class=\"gridster-grid\"></gridster-grid>\r\n<ng-content></ng-content>\r\n<gridster-preview class=\"gridster-preview\"></gridster-preview>\r\n"

/***/ }),

/***/ "../../../../../src/lib/gridster.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridsterItem_component__ = __webpack_require__("../../../../../src/lib/gridsterItem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gridsterPreview_component__ = __webpack_require__("../../../../../src/lib/gridsterPreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gridsterGrid_component__ = __webpack_require__("../../../../../src/lib/gridsterGrid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import {GridsterEmptyCell} from './gridsterEmptyCell.service';
var GridsterModule = (function () {
    function GridsterModule() {
    }
    return GridsterModule;
}());
GridsterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__gridster_component__["a" /* GridsterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__gridsterItem_component__["a" /* GridsterItemComponent */],
            __WEBPACK_IMPORTED_MODULE_5__gridsterGrid_component__["a" /* GridsterGridComponent */],
            __WEBPACK_IMPORTED_MODULE_4__gridsterPreview_component__["a" /* GridsterPreviewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__gridster_component__["a" /* GridsterComponent */], __WEBPACK_IMPORTED_MODULE_3__gridsterItem_component__["a" /* GridsterItemComponent */]],
        providers: [],
        bootstrap: []
    })
], GridsterModule);

//# sourceMappingURL=gridster.module.js.map

/***/ }),

/***/ "../../../../../src/lib/gridster.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 auto;\n          flex: 1 auto;\n  background: grey;\n  width: 100%;\n  height: 100%; }\n\n:host(.fit) {\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n:host(.scrollVertical) {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host(.scrollHorizontal) {\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n:host(.fixed) {\n  overflow: auto; }\n\n:host(.mobile) {\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: block; }\n\n:host(.mobile) ::ng-deep gridster-item {\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/lib/gridsterCompact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterCompact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridsterCompact = (function () {
    function GridsterCompact(gridster) {
        this.gridster = gridster;
    }
    GridsterCompact.prototype.checkCompact = function () {
        if (this.gridster.$options.compactType !== 'none') {
            if (this.gridster.$options.compactType === 'compactUp') {
                this.checkCompactUp();
            }
            else if (this.gridster.$options.compactType === 'compactLeft') {
                this.checkCompactLeft();
            }
            else if (this.gridster.$options.compactType === 'compactUp&Left') {
                this.checkCompactUp();
                this.checkCompactLeft();
            }
            else if (this.gridster.$options.compactType === 'compactLeft&Up') {
                this.checkCompactLeft();
                this.checkCompactUp();
            }
        }
    };
    GridsterCompact.prototype.checkCompactUp = function () {
        var widgetMovedUp = false, widget, moved;
        var l = this.gridster.grid.length;
        for (var i = 0; i < l; i++) {
            widget = this.gridster.grid[i];
            if (widget.$item.compactEnabled === false) {
                continue;
            }
            moved = this.moveUpTillCollision(widget);
            if (moved) {
                widgetMovedUp = true;
                widget.item.y = widget.$item.y;
                widget.itemChanged();
            }
        }
        if (widgetMovedUp) {
            this.checkCompactUp();
        }
        return widgetMovedUp;
    };
    GridsterCompact.prototype.moveUpTillCollision = function (itemComponent) {
        itemComponent.$item.y -= 1;
        if (this.gridster.checkCollision(itemComponent.$item)) {
            itemComponent.$item.y += 1;
            return false;
        }
        else {
            this.moveUpTillCollision(itemComponent);
            return true;
        }
    };
    GridsterCompact.prototype.checkCompactLeft = function () {
        var widgetMovedUp = false, widget, moved;
        var l = this.gridster.grid.length;
        for (var i = 0; i < l; i++) {
            widget = this.gridster.grid[i];
            if (widget.$item.compactEnabled === false) {
                continue;
            }
            moved = this.moveLeftTillCollision(widget);
            if (moved) {
                widgetMovedUp = true;
                widget.item.x = widget.$item.x;
                widget.itemChanged();
            }
        }
        if (widgetMovedUp) {
            this.checkCompactLeft();
        }
        return widgetMovedUp;
    };
    GridsterCompact.prototype.moveLeftTillCollision = function (itemComponent) {
        itemComponent.$item.x -= 1;
        if (this.gridster.checkCollision(itemComponent.$item)) {
            itemComponent.$item.x += 1;
            return false;
        }
        else {
            this.moveLeftTillCollision(itemComponent);
            return true;
        }
    };
    return GridsterCompact;
}());
GridsterCompact = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gridster_component__["a" /* GridsterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridster_component__["a" /* GridsterComponent */]) === "function" && _a || Object])
], GridsterCompact);

var _a;
//# sourceMappingURL=gridsterCompact.service.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterConfig.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterConfigService; });
var GridsterConfigService = {
    gridType: 'fit',
    // 'scrollVertical' will fit on width and height of the items will be the same as the width
    // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
    // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
    // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
    // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
    fixedColWidth: 250,
    fixedRowHeight: 250,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    compactType: 'none',
    mobileBreakpoint: 640,
    minCols: 1,
    maxCols: 100,
    minRows: 1,
    maxRows: 100,
    defaultItemCols: 1,
    defaultItemRows: 1,
    maxItemCols: 50,
    maxItemRows: 50,
    minItemCols: 1,
    minItemRows: 1,
    minItemArea: 1,
    maxItemArea: 2500,
    margin: 10,
    outerMargin: true,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    initCallback: undefined,
    itemChangeCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemResizeCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemInitCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    itemRemovedCallback: undefined,
    // Arguments: gridsterItem, gridsterItemComponent
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    emptyCellClickCallback: undefined,
    emptyCellContextMenuCallback: undefined,
    emptyCellDropCallback: undefined,
    emptyCellDragCallback: undefined,
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
    draggable: {
        delayStart: 0,
        enabled: false,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: undefined,
        start: undefined // callback when dragging an item starts.
        // Arguments: item, gridsterItem, event
    },
    resizable: {
        delayStart: 0,
        enabled: false,
        handles: {
            s: true,
            e: true,
            n: true,
            w: true,
            se: true,
            ne: true,
            sw: true,
            nw: true
        },
        stop: undefined,
        start: undefined // callback when resizing an item starts.
        // Arguments: item, gridsterItem, event
    },
    swap: true,
    pushItems: false,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: { north: true, east: true, south: true, west: true },
    pushResizeItems: false,
    displayGrid: 'onDrag&Resize',
    disableWindowResize: false // disable the window on resize listener. This will stop grid to recalculate on window resize.
};
//# sourceMappingURL=gridsterConfig.constant.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterConfig.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gridsterConfig.interface.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterDraggable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterDraggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridsterSwap_service__ = __webpack_require__("../../../../../src/lib/gridsterSwap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridsterScroll_service__ = __webpack_require__("../../../../../src/lib/gridsterScroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridsterItem_component__ = __webpack_require__("../../../../../src/lib/gridsterItem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gridsterPush_service__ = __webpack_require__("../../../../../src/lib/gridsterPush.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gridsterUtils_service__ = __webpack_require__("../../../../../src/lib/gridsterUtils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GridsterDraggable = (function () {
    function GridsterDraggable(gridsterItem, gridster) {
        this.gridsterItem = gridsterItem;
        this.gridster = gridster;
        this.lastMouse = {
            clientX: 0,
            clientY: 0
        };
        this.path = [];
    }
    GridsterDraggable.prototype.dragStart = function (e) {
        switch (e.which) {
            case 1:
                // left mouse button
                break;
            case 2:
            case 3:
                // right or middle mouse button
                return;
        }
        if (this.gridster.$options.draggable.start) {
            this.gridster.$options.draggable.start(this.gridsterItem.item, this.gridsterItem, e);
        }
        e.stopPropagation();
        e.preventDefault();
        this.dragFunction = this.dragMove.bind(this);
        this.dragStopFunction = this.dragStop.bind(this);
        this.mousemove = this.gridsterItem.renderer.listen('document', 'mousemove', this.dragFunction);
        this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStopFunction);
        this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStopFunction);
        this.touchmove = this.gridster.renderer.listen(this.gridster.el, 'touchmove', this.dragFunction);
        this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStopFunction);
        this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStopFunction);
        this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-moving');
        this.margin = this.gridster.$options.margin;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.left = this.gridsterItem.left;
        this.top = this.gridsterItem.top;
        this.width = this.gridsterItem.width;
        this.height = this.gridsterItem.height;
        this.diffLeft = e.clientX + this.offsetLeft - this.margin - this.left;
        this.diffTop = e.clientY + this.offsetTop - this.margin - this.top;
        this.gridster.movingItem = this.gridsterItem.$item;
        this.gridster.previewStyle();
        this.push = new __WEBPACK_IMPORTED_MODULE_5__gridsterPush_service__["a" /* GridsterPush */](this.gridsterItem);
        this.swap = new __WEBPACK_IMPORTED_MODULE_1__gridsterSwap_service__["a" /* GridsterSwap */](this.gridsterItem);
        this.gridster.dragInProgress = true;
        this.gridster.gridLines.updateGrid();
        this.path.push({ x: this.gridsterItem.item.x || 0, y: this.gridsterItem.item.y || 0 });
    };
    GridsterDraggable.prototype.dragMove = function (e) {
        e.stopPropagation();
        e.preventDefault();
        __WEBPACK_IMPORTED_MODULE_6__gridsterUtils_service__["a" /* GridsterUtils */].checkTouchEvent(e);
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        Object(__WEBPACK_IMPORTED_MODULE_2__gridsterScroll_service__["b" /* scroll */])(this.gridsterItem, e, this.lastMouse, this.calculateItemPositionFromMousePosition.bind(this));
        this.calculateItemPositionFromMousePosition(e);
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.gridster.gridLines.updateGrid();
    };
    GridsterDraggable.prototype.calculateItemPositionFromMousePosition = function (e) {
        this.left = e.clientX + this.offsetLeft - this.margin - this.diffLeft;
        this.top = e.clientY + this.offsetTop - this.margin - this.diffTop;
        this.calculateItemPosition();
    };
    GridsterDraggable.prototype.dragStop = function (e) {
        e.stopPropagation();
        e.preventDefault();
        Object(__WEBPACK_IMPORTED_MODULE_2__gridsterScroll_service__["a" /* cancelScroll */])();
        this.cancelOnBlur();
        this.mousemove();
        this.mouseup();
        this.touchmove();
        this.touchend();
        this.touchcancel();
        this.gridsterItem.renderer.removeClass(this.gridsterItem.el, 'gridster-item-moving');
        this.gridster.dragInProgress = false;
        this.gridster.gridLines.updateGrid();
        this.path = [];
        if (this.gridster.$options.draggable.stop) {
            Promise.resolve(this.gridster.$options.draggable.stop(this.gridsterItem.item, this.gridsterItem, e))
                .then(this.makeDrag.bind(this), this.cancelDrag.bind(this));
        }
        else {
            this.makeDrag();
        }
        setTimeout(function () {
            this.gridster.movingItem = null;
            this.gridster.previewStyle();
        }.bind(this));
    };
    GridsterDraggable.prototype.cancelDrag = function () {
        this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
        this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
        this.gridsterItem.setSize(true);
        this.push.restoreItems();
        this.swap.restoreSwapItem();
    };
    GridsterDraggable.prototype.makeDrag = function () {
        this.gridsterItem.setSize(true);
        this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
        this.push.setPushedItems();
        this.swap.setSwapItem();
    };
    GridsterDraggable.prototype.calculateItemPosition = function () {
        this.positionX = this.gridster.pixelsToPositionX(this.left, Math.round);
        this.positionY = this.gridster.pixelsToPositionY(this.top, Math.round);
        this.positionXBackup = this.gridsterItem.$item.x;
        this.positionYBackup = this.gridsterItem.$item.y;
        this.gridsterItem.$item.x = this.positionX;
        if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
            this.gridsterItem.$item.x = this.positionXBackup;
        }
        else {
            this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'left', this.left + 'px');
        }
        this.gridsterItem.$item.y = this.positionY;
        if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
            this.gridsterItem.$item.y = this.positionYBackup;
        }
        else {
            this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'top', this.top + 'px');
        }
        if (this.positionXBackup !== this.gridsterItem.$item.x || this.positionYBackup !== this.gridsterItem.$item.y) {
            var lastPosition = this.path[this.path.length - 1];
            var direction = '';
            if (lastPosition.x < this.gridsterItem.$item.x) {
                direction = this.push.fromWest;
            }
            else if (lastPosition.x > this.gridsterItem.$item.x) {
                direction = this.push.fromEast;
            }
            else if (lastPosition.y < this.gridsterItem.$item.y) {
                direction = this.push.fromNorth;
            }
            else if (lastPosition.y > this.gridsterItem.$item.y) {
                direction = this.push.fromSouth;
            }
            this.push.pushItems(direction, this.gridster.$options.disablePushOnDrag);
            this.swap.swapItems();
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.x = this.positionXBackup;
                this.gridsterItem.$item.y = this.positionYBackup;
            }
            else {
                this.path.push({ x: this.gridsterItem.$item.x, y: this.gridsterItem.$item.y });
                this.gridster.previewStyle();
            }
            this.push.checkPushBack();
        }
    };
    GridsterDraggable.prototype.toggle = function () {
        var enableDrag = this.gridsterItem.canBeDragged();
        if (!this.enabled && enableDrag) {
            this.enabled = !this.enabled;
            this.dragStartFunction = this.dragStartDelay.bind(this);
            this.mousedown = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'mousedown', this.dragStartFunction);
            this.touchstart = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'touchstart', this.dragStartFunction);
        }
        else if (this.enabled && !enableDrag) {
            this.enabled = !this.enabled;
            this.mousedown();
            this.touchstart();
        }
    };
    GridsterDraggable.prototype.dragStartDelay = function (e) {
        var _this = this;
        if (e.target.classList.contains('gridster-item-resizable-handler')) {
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_6__gridsterUtils_service__["a" /* GridsterUtils */].checkContentClassForEvent(this.gridster, e)) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_6__gridsterUtils_service__["a" /* GridsterUtils */].checkTouchEvent(e);
        if (!this.gridster.$options.draggable.delayStart) {
            this.dragStart(e);
            return;
        }
        var timeout = setTimeout(function () {
            _this.dragStart(e);
            cancelDrag();
        }, this.gridster.$options.draggable.delayStart);
        var cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
        var cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
        var cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
        var cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
        var cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
        function cancelMove(eventMove) {
            __WEBPACK_IMPORTED_MODULE_6__gridsterUtils_service__["a" /* GridsterUtils */].checkTouchEvent(eventMove);
            if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
                cancelDrag();
            }
        }
        function cancelDrag() {
            clearTimeout(timeout);
            cancelOnBlur();
            cancelMouse();
            cancelTouchMove();
            cancelTouchEnd();
            cancelTouchCancel();
        }
    };
    return GridsterDraggable;
}());
GridsterDraggable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__gridsterItem_component__["a" /* GridsterItemComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__gridsterItem_component__["a" /* GridsterItemComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__gridster_component__["a" /* GridsterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__gridster_component__["a" /* GridsterComponent */]) === "function" && _b || Object])
], GridsterDraggable);

var _a, _b;
//# sourceMappingURL=gridsterDraggable.service.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterEmptyCell.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterEmptyCell; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridsterUtils_service__ = __webpack_require__("../../../../../src/lib/gridsterUtils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridsterEmptyCell = (function () {
    function GridsterEmptyCell(gridster) {
        this.gridster = gridster;
    }
    GridsterEmptyCell.prototype.updateOptions = function () {
        if (this.gridster.$options.enableEmptyCellClick && !this.emptyCellClick && this.gridster.$options.emptyCellClickCallback) {
            this.emptyCellClick = this.gridster.renderer.listen(this.gridster.el, 'click', this.emptyCellClickCb.bind(this));
            this.emptyCellClickTouch = this.gridster.renderer.listen(this.gridster.el, 'touchend', this.emptyCellClickCb.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellClick && this.emptyCellClick && this.emptyCellClickTouch) {
            this.emptyCellClick();
            this.emptyCellClickTouch();
            this.emptyCellClick = null;
            this.emptyCellClickTouch = null;
        }
        if (this.gridster.$options.enableEmptyCellContextMenu && !this.emptyCellContextMenu &&
            this.gridster.$options.emptyCellContextMenuCallback) {
            this.emptyCellContextMenu = this.gridster.renderer.listen(this.gridster.el, 'contextmenu', this.emptyCellContextMenuCb.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellContextMenu && this.emptyCellContextMenu) {
            this.emptyCellContextMenu();
            this.emptyCellContextMenu = null;
        }
        if (this.gridster.$options.enableEmptyCellDrop && !this.emptyCellDrop && this.gridster.$options.emptyCellDropCallback) {
            this.emptyCellDrop = this.gridster.renderer.listen(this.gridster.el, 'drop', this.emptyCellDragDrop.bind(this));
            this.emptyCellMove = this.gridster.renderer.listen(this.gridster.el, 'dragover', this.emptyCellDragOver.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellDrop && this.emptyCellDrop && this.emptyCellMove) {
            this.emptyCellDrop();
            this.emptyCellMove();
            this.emptyCellMove = null;
            this.emptyCellDrop = null;
        }
        if (this.gridster.$options.enableEmptyCellDrag && !this.emptyCellDrag && this.gridster.$options.emptyCellDragCallback) {
            this.emptyCellDrag = this.gridster.renderer.listen(this.gridster.el, 'mousedown', this.emptyCellMouseDown.bind(this));
            this.emptyCellDragTouch = this.gridster.renderer.listen(this.gridster.el, 'touchstart', this.emptyCellMouseDown.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellDrag && this.emptyCellDrag && this.emptyCellDragTouch) {
            this.emptyCellDrag();
            this.emptyCellDragTouch();
            this.emptyCellDrag = null;
            this.emptyCellDragTouch = null;
        }
    };
    GridsterEmptyCell.prototype.emptyCellClickCb = function (e) {
        if (this.gridster.movingItem || __WEBPACK_IMPORTED_MODULE_2__gridsterUtils_service__["a" /* GridsterUtils */].checkContentClassForEvent(this.gridster, e)) {
            return;
        }
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        this.gridster.$options.emptyCellClickCallback(e, item);
        this.gridster.cdRef.markForCheck();
    };
    GridsterEmptyCell.prototype.emptyCellContextMenuCb = function (e) {
        if (this.gridster.movingItem || __WEBPACK_IMPORTED_MODULE_2__gridsterUtils_service__["a" /* GridsterUtils */].checkContentClassForEvent(this.gridster, e)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        this.gridster.$options.emptyCellContextMenuCallback(e, item);
        this.gridster.cdRef.markForCheck();
    };
    GridsterEmptyCell.prototype.emptyCellDragDrop = function (e) {
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        this.gridster.$options.emptyCellDropCallback(e, item);
        this.gridster.cdRef.markForCheck();
    };
    GridsterEmptyCell.prototype.emptyCellDragOver = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.getValidItemFromEvent(e)) {
            e.dataTransfer.dropEffect = 'move';
        }
        else {
            e.dataTransfer.dropEffect = 'none';
        }
    };
    GridsterEmptyCell.prototype.emptyCellMouseDown = function (e) {
        if (__WEBPACK_IMPORTED_MODULE_2__gridsterUtils_service__["a" /* GridsterUtils */].checkContentClassForEvent(this.gridster, e)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        this.initialItem = item;
        this.gridster.movingItem = item;
        this.gridster.previewStyle();
        this.emptyCellMMove = this.gridster.renderer.listen('window', 'mousemove', this.emptyCellMouseMove.bind(this));
        this.emptyCellMMoveTouch = this.gridster.renderer.listen('window', 'touchmove', this.emptyCellMouseMove.bind(this));
        this.emptyCellUp = this.gridster.renderer.listen('window', 'mouseup', this.emptyCellMouseUp.bind(this));
        this.emptyCellUpTouch = this.gridster.renderer.listen('window', 'touchend', this.emptyCellMouseUp.bind(this));
    };
    GridsterEmptyCell.prototype.emptyCellMouseMove = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var item = this.getValidItemFromEvent(e, this.initialItem);
        if (!item) {
            return;
        }
        this.gridster.movingItem = item;
        this.gridster.previewStyle();
    };
    GridsterEmptyCell.prototype.emptyCellMouseUp = function (e) {
        this.emptyCellMMove();
        this.emptyCellMMoveTouch();
        this.emptyCellUp();
        this.emptyCellUpTouch();
        var item = this.getValidItemFromEvent(e, this.initialItem);
        if (item) {
            this.gridster.movingItem = item;
        }
        this.gridster.$options.emptyCellDragCallback(e, this.gridster.movingItem);
        setTimeout(function () {
            this.initialItem = null;
            this.gridster.movingItem = null;
            this.gridster.previewStyle();
        }.bind(this));
        this.gridster.cdRef.markForCheck();
    };
    GridsterEmptyCell.prototype.getValidItemFromEvent = function (e, oldItem) {
        e.preventDefault();
        e.stopPropagation();
        __WEBPACK_IMPORTED_MODULE_2__gridsterUtils_service__["a" /* GridsterUtils */].checkTouchEvent(e);
        var rect = this.gridster.el.getBoundingClientRect();
        var x = e.clientX + this.gridster.el.scrollLeft - rect.left;
        var y = e.clientY + this.gridster.el.scrollTop - rect.top;
        var item = {
            x: this.gridster.pixelsToPositionX(x, Math.floor),
            y: this.gridster.pixelsToPositionY(y, Math.floor),
            cols: this.gridster.$options.defaultItemCols,
            rows: this.gridster.$options.defaultItemRows
        };
        if (oldItem) {
            item.cols = Math.min(Math.abs(oldItem.x - item.x) + 1, this.gridster.$options.emptyCellDragMaxCols);
            item.rows = Math.min(Math.abs(oldItem.y - item.y) + 1, this.gridster.$options.emptyCellDragMaxRows);
            if (oldItem.x < item.x) {
                item.x = oldItem.x;
            }
            else if (oldItem.x - item.x > this.gridster.$options.emptyCellDragMaxCols - 1) {
                item.x = this.gridster.movingItem.x;
            }
            if (oldItem.y < item.y) {
                item.y = oldItem.y;
            }
            else if (oldItem.y - item.y > this.gridster.$options.emptyCellDragMaxRows - 1) {
                item.y = this.gridster.movingItem.y;
            }
        }
        if (this.gridster.checkCollision(item)) {
            return;
        }
        return item;
    };
    return GridsterEmptyCell;
}());
GridsterEmptyCell = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gridster_component__["a" /* GridsterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridster_component__["a" /* GridsterComponent */]) === "function" && _a || Object])
], GridsterEmptyCell);

var _a;
//# sourceMappingURL=gridsterEmptyCell.service.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterGrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GridsterGridComponent = (function () {
    function GridsterGridComponent(el, gridster, renderer, cdRef) {
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.el = el.nativeElement;
        this.gridster = gridster;
        this.gridster.gridLines = this;
        this.columns = [];
        this.rows = [];
        this.height = 0;
        this.width = 0;
        this.columnsHeight = 0;
        this.rowsWidth = 0;
    }
    GridsterGridComponent.prototype.updateGrid = function () {
        if (this.gridster.$options.displayGrid === 'always' && !this.gridster.mobile) {
            this.renderer.setStyle(this.el, 'display', 'block');
        }
        else if (this.gridster.$options.displayGrid === 'onDrag&Resize' && this.gridster.dragInProgress) {
            this.renderer.setStyle(this.el, 'display', 'block');
        }
        else if (this.gridster.$options.displayGrid === 'none' || !this.gridster.dragInProgress || this.gridster.mobile) {
            this.renderer.setStyle(this.el, 'display', 'none');
        }
        this.gridster.setGridDimensions();
        this.margin = this.gridster.$options.margin;
        this.height = this.gridster.curRowHeight - this.margin;
        this.width = this.gridster.curColWidth - this.margin;
        this.columns.length = Math.max(this.gridster.columns, Math.floor(this.gridster.curWidth / this.gridster.curColWidth)) || 0;
        this.rows.length = Math.max(this.gridster.rows, Math.floor(this.gridster.curHeight / this.gridster.curRowHeight)) || 0;
        this.columnsHeight = this.gridster.curRowHeight * this.rows.length;
        this.rowsWidth = this.gridster.curColWidth * this.columns.length;
        this.cdRef.markForCheck();
    };
    return GridsterGridComponent;
}());
GridsterGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gridster-grid',
        template: __webpack_require__("../../../../../src/lib/gridsterGrid.html"),
        styles: [__webpack_require__("../../../../../src/lib/gridsterGrid.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__gridster_component__["a" /* GridsterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridster_component__["a" /* GridsterComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object])
], GridsterGridComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gridsterGrid.component.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterGrid.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\" [style.height.px]=\"columnsHeight\">\r\n  <div class=\"column\" *ngFor=\"let column of columns; let isFirst = first;\" [style.min-width.px]=\"width\"\r\n       [style.margin-left.px]=\"isFirst && !gridster.$options.outerMargin ? 0 : margin\"></div>\r\n</div>\r\n<div class=\"rows\" [style.width.px]=\"rowsWidth\">\r\n  <div class=\"row\" *ngFor=\"let row of rows; let isFirst = first;\" [style.height.px]=\"height\"\r\n       [style.margin-top.px]=\"isFirst && !gridster.$options.outerMargin ? 0 : margin\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/lib/gridsterGrid.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: none;\n  position: absolute; }\n\n.rows, .columns {\n  position: absolute; }\n\n.columns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.column, .row {\n  transition: .3s;\n  box-sizing: border-box; }\n\n.column {\n  height: 100%;\n  border-left: 1px solid white;\n  border-right: 1px solid white; }\n\n.row {\n  width: 100%;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/lib/gridsterItem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridsterItem_interface__ = __webpack_require__("../../../../../src/lib/gridsterItem.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridsterItem_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gridsterItem_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridsterDraggable_service__ = __webpack_require__("../../../../../src/lib/gridsterDraggable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gridsterResizable_service__ = __webpack_require__("../../../../../src/lib/gridsterResizable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gridsterUtils_service__ = __webpack_require__("../../../../../src/lib/gridsterUtils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var GridsterItemComponent = (function () {
    function GridsterItemComponent(el, gridster, renderer) {
        this.renderer = renderer;
        this.itemChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.itemResize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.el = el.nativeElement;
        this.$item = {
            cols: -1,
            rows: -1,
            x: -1,
            y: -1,
        };
        this.gridster = gridster;
        this.drag = new __WEBPACK_IMPORTED_MODULE_3__gridsterDraggable_service__["a" /* GridsterDraggable */](this, gridster);
        this.resize = new __WEBPACK_IMPORTED_MODULE_4__gridsterResizable_service__["a" /* GridsterResizable */](this, gridster);
    }
    GridsterItemComponent.prototype.ngOnInit = function () {
        this.updateOptions();
        this.gridster.addItem(this);
    };
    GridsterItemComponent.prototype.updateOptions = function () {
        this.$item = __WEBPACK_IMPORTED_MODULE_5__gridsterUtils_service__["a" /* GridsterUtils */].merge(this.$item, this.item, {
            cols: undefined,
            rows: undefined,
            x: undefined,
            y: undefined,
            initCallback: undefined,
            dragEnabled: undefined,
            resizeEnabled: undefined,
            compactEnabled: undefined,
            maxItemRows: undefined,
            minItemRows: undefined,
            maxItemCols: undefined,
            minItemCols: undefined,
            maxItemArea: undefined,
            minItemArea: undefined,
        });
    };
    GridsterItemComponent.prototype.ngOnDestroy = function () {
        this.gridster.removeItem(this);
    };
    GridsterItemComponent.prototype.setSize = function (noCheck) {
        if (this.gridster.mobile) {
            this.top = 0;
            this.left = 0;
            if (this.gridster.$options.keepFixedWidthInMobile) {
                this.width = this.$item.cols * this.gridster.$options.fixedColWidth;
            }
            else {
                this.width = this.gridster.curWidth - (this.gridster.$options.outerMargin ? 2 * this.gridster.$options.margin : 0);
            }
            if (this.gridster.$options.keepFixedHeightInMobile) {
                this.height = this.$item.rows * this.gridster.$options.fixedRowHeight;
            }
            else {
                this.height = this.width / 2;
            }
        }
        else {
            this.top = this.$item.y * this.gridster.curRowHeight;
            this.left = this.$item.x * this.gridster.curColWidth;
            this.width = this.$item.cols * this.gridster.curColWidth - this.gridster.$options.margin;
            this.height = this.$item.rows * this.gridster.curRowHeight - this.gridster.$options.margin;
        }
        if (!noCheck && this.top === this.itemTop && this.left === this.itemLeft &&
            this.width === this.itemWidth && this.height === this.itemHeight) {
            return;
        }
        if (this.gridster.$options.outerMargin) {
            this.itemMargin = this.gridster.$options.margin;
        }
        else {
            this.itemMargin = 0;
        }
        this.renderer.setStyle(this.el, 'display', this.notPlaced ? 'none' : 'block');
        this.renderer.setStyle(this.el, 'top', this.top + 'px');
        this.renderer.setStyle(this.el, 'left', this.left + 'px');
        this.renderer.setStyle(this.el, 'width', this.width + 'px');
        this.renderer.setStyle(this.el, 'height', this.height + 'px');
        this.renderer.setStyle(this.el, 'margin', this.itemMargin + 'px');
        if (this.width !== this.itemWidth || this.height !== this.itemHeight) {
            this.itemResize.emit(this.item);
            if (this.gridster.$options.itemResizeCallback) {
                this.gridster.$options.itemResizeCallback(this.item, this);
            }
        }
        this.itemTop = this.top;
        this.itemLeft = this.left;
        this.itemWidth = this.width;
        this.itemHeight = this.height;
    };
    GridsterItemComponent.prototype.itemChanged = function () {
        this.itemChange.emit(this.item);
        if (this.gridster.$options.itemChangeCallback) {
            this.gridster.$options.itemChangeCallback(this.item, this);
        }
    };
    GridsterItemComponent.prototype.checkItemChanges = function (newValue, oldValue) {
        if (newValue.rows === oldValue.rows && newValue.cols === oldValue.cols && newValue.x === oldValue.x && newValue.y === oldValue.y) {
            return;
        }
        if (this.gridster.checkCollision(this.$item)) {
            this.$item.x = oldValue.x || 0;
            this.$item.y = oldValue.y || 0;
            this.$item.cols = oldValue.cols || 1;
            this.$item.rows = oldValue.rows || 1;
        }
        else {
            this.item.cols = this.$item.cols;
            this.item.rows = this.$item.rows;
            this.item.x = this.$item.x;
            this.item.y = this.$item.y;
            this.gridster.calculateLayout();
            this.itemChanged();
        }
    };
    GridsterItemComponent.prototype.canBeDragged = function () {
        return !this.gridster.mobile &&
            (this.$item.dragEnabled === undefined ? this.gridster.$options.draggable.enabled : this.$item.dragEnabled);
    };
    GridsterItemComponent.prototype.canBeResized = function () {
        return !this.gridster.mobile &&
            (this.$item.resizeEnabled === undefined ? this.gridster.$options.resizable.enabled : this.$item.resizeEnabled);
    };
    return GridsterItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gridsterItem_interface__["GridsterItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridsterItem_interface__["GridsterItem"]) === "function" && _a || Object)
], GridsterItemComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], GridsterItemComponent.prototype, "itemChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], GridsterItemComponent.prototype, "itemResize", void 0);
GridsterItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gridster-item',
        template: __webpack_require__("../../../../../src/lib/gridsterItem.html"),
        styles: [__webpack_require__("../../../../../src/lib/gridsterItem.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__gridster_component__["a" /* GridsterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gridster_component__["a" /* GridsterComponent */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _f || Object])
], GridsterItemComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=gridsterItem.component.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterItem.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     [hidden]=\"!gridster.$options.resizable.handles.s || !resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-s\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     [hidden]=\"!gridster.$options.resizable.handles.e || !resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-e\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     [hidden]=\"!gridster.$options.resizable.handles.n || !resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-n\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     [hidden]=\"!gridster.$options.resizable.handles.w || !resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-w\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     [hidden]=\"!gridster.$options.resizable.handles.se || !resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-se\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     [hidden]=\"!gridster.$options.resizable.handles.ne || !resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-ne\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     [hidden]=\"!gridster.$options.resizable.handles.sw || !resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-sw\"></div>\r\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\r\n     [hidden]=\"!gridster.$options.resizable.handles.nw || !resize.resizeEnabled\"\r\n     class=\"gridster-item-resizable-handler handle-nw\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/lib/gridsterItem.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gridsterItem.interface.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterItem.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  z-index: 1;\n  position: absolute;\n  overflow: hidden;\n  transition: .3s;\n  display: none;\n  background: white; }\n\n:host(.gridster-item-moving) {\n  cursor: move; }\n\n:host(.gridster-item-resizing), :host(.gridster-item-moving) {\n  transition: 0s;\n  z-index: 2;\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n.gridster-item-resizable-handler {\n  position: absolute;\n  z-index: 2; }\n\n.gridster-item-resizable-handler.handle-n {\n  cursor: n-resize;\n  height: 10px;\n  right: 0;\n  top: 0;\n  left: 0; }\n\n.gridster-item-resizable-handler.handle-e {\n  cursor: e-resize;\n  width: 10px;\n  bottom: 0;\n  right: 0;\n  top: 0; }\n\n.gridster-item-resizable-handler.handle-s {\n  cursor: s-resize;\n  height: 10px;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.gridster-item-resizable-handler.handle-w {\n  cursor: w-resize;\n  width: 10px;\n  left: 0;\n  top: 0;\n  bottom: 0; }\n\n.gridster-item-resizable-handler.handle-ne {\n  cursor: ne-resize;\n  width: 10px;\n  height: 10px;\n  right: 0;\n  top: 0; }\n\n.gridster-item-resizable-handler.handle-nw {\n  cursor: nw-resize;\n  width: 10px;\n  height: 10px;\n  left: 0;\n  top: 0; }\n\n.gridster-item-resizable-handler.handle-se {\n  cursor: se-resize;\n  width: 0;\n  height: 0;\n  right: 0;\n  bottom: 0;\n  border-style: solid;\n  border-width: 0 0 10px 10px;\n  border-color: transparent; }\n\n.gridster-item-resizable-handler.handle-sw {\n  cursor: sw-resize;\n  width: 10px;\n  height: 10px;\n  left: 0;\n  bottom: 0; }\n\n:host ::ng-deep .gridster-item-content {\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto; }\n\n:host(:hover) .gridster-item-resizable-handler.handle-se {\n  border-color: transparent transparent #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/lib/gridsterPreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GridsterPreviewComponent = (function () {
    function GridsterPreviewComponent(el, gridster, renderer) {
        this.renderer = renderer;
        this.el = el.nativeElement;
        this.gridster = gridster;
        this.gridster.previewStyle = this.previewStyle.bind(this);
    }
    GridsterPreviewComponent.prototype.previewStyle = function () {
        if (!this.gridster.movingItem) {
            this.renderer.setStyle(this.el, 'display', 'none');
        }
        else {
            var margin = 0;
            var curRowHeight = this.gridster.curRowHeight;
            var curColWidth = this.gridster.curColWidth;
            if (this.gridster.$options.outerMargin) {
                margin = this.gridster.$options.margin;
            }
            this.renderer.setStyle(this.el, 'display', 'block');
            this.renderer.setStyle(this.el, 'height', (this.gridster.movingItem.rows * curRowHeight - margin) + 'px');
            this.renderer.setStyle(this.el, 'width', (this.gridster.movingItem.cols * curColWidth - margin) + 'px');
            this.renderer.setStyle(this.el, 'top', (this.gridster.movingItem.y * curRowHeight + margin) + 'px');
            this.renderer.setStyle(this.el, 'left', (this.gridster.movingItem.x * curColWidth + margin) + 'px');
            this.renderer.setStyle(this.el, 'marginBottom', margin + 'px');
        }
    };
    return GridsterPreviewComponent;
}());
GridsterPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gridster-preview',
        template: '',
        styles: [__webpack_require__("../../../../../src/lib/gridsterPreview.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__gridster_component__["a" /* GridsterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridster_component__["a" /* GridsterComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object])
], GridsterPreviewComponent);

var _a, _b, _c;
//# sourceMappingURL=gridsterPreview.component.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterPreview.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: rgba(0, 0, 0, 0.15);\n  position: absolute; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/lib/gridsterPush.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterPush; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__ = __webpack_require__("../../../../../src/lib/gridsterItem.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridsterPush = (function () {
    function GridsterPush(gridsterItem) {
        this.pushedItems = [];
        this.pushedItemsTemp = [];
        this.pushedItemsTempInit = [];
        this.pushedItemsPath = [];
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
        this.tryPattern = {
            fromEast: [this.tryWest, this.trySouth, this.tryNorth, this.tryEast],
            fromWest: [this.tryEast, this.trySouth, this.tryNorth, this.tryWest],
            fromNorth: [this.trySouth, this.tryEast, this.tryWest, this.tryNorth],
            fromSouth: [this.tryNorth, this.tryEast, this.tryWest, this.trySouth]
        };
        this.fromSouth = 'fromSouth';
        this.fromNorth = 'fromNorth';
        this.fromEast = 'fromEast';
        this.fromWest = 'fromWest';
    }
    GridsterPush.prototype.pushItems = function (direction, disable) {
        if (this.gridster.$options.pushItems && !disable) {
            this.count = 0;
            if (!this.push(this.gridsterItem, direction)) {
                var i = this.pushedItemsTemp.length - 1;
                for (; i > -1; i--) {
                    this.removeFromTempPushed(this.pushedItemsTemp[i]);
                }
            }
            this.pushedItemsTemp = [];
        }
    };
    GridsterPush.prototype.restoreItems = function () {
        var i = 0;
        var l = this.pushedItems.length;
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.$item.x = pushedItem.item.x || 0;
            pushedItem.$item.y = pushedItem.item.y || 0;
            pushedItem.setSize(true);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    GridsterPush.prototype.setPushedItems = function () {
        var i = 0;
        var l = this.pushedItems.length;
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    GridsterPush.prototype.checkPushBack = function () {
        var i = this.pushedItems.length - 1;
        var change = false;
        for (; i > -1; i--) {
            if (this.checkPushedItem(this.pushedItems[i], i)) {
                change = true;
            }
        }
        if (change) {
            this.checkPushBack();
        }
    };
    GridsterPush.prototype.push = function (gridsterItem, direction) {
        if (this.count > 3000) {
            return false;
        }
        else {
            this.count++;
        }
        if (this.gridster.checkGridCollision(gridsterItem.$item)) {
            return false;
        }
        var a = this.gridster.findItemsWithItem(gridsterItem.$item);
        var i = a.length - 1, itemColision;
        var makePush = true;
        for (; i > -1; i--) {
            itemColision = a[i];
            if (itemColision === this.gridsterItem) {
                makePush = false;
                break;
            }
            if (!itemColision.canBeDragged()) {
                makePush = false;
                break;
            }
            if (this.tryPattern[direction][0].call(this, itemColision, gridsterItem)) {
            }
            else if (this.tryPattern[direction][1].call(this, itemColision, gridsterItem)) {
            }
            else if (this.tryPattern[direction][2].call(this, itemColision, gridsterItem)) {
            }
            else if (this.tryPattern[direction][3].call(this, itemColision, gridsterItem)) {
            }
            else {
                makePush = false;
                break;
            }
        }
        return makePush;
    };
    GridsterPush.prototype.trySouth = function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.south) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        var backUpY = gridsterItemCollide.$item.y;
        gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
        if (this.push(gridsterItemCollide, this.fromNorth)) {
            gridsterItemCollide.setSize(true);
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            gridsterItemCollide.$item.y = backUpY;
        }
        return false;
    };
    GridsterPush.prototype.tryNorth = function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.north) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        var backUpY = gridsterItemCollide.$item.y;
        gridsterItemCollide.$item.y = gridsterItem.$item.y - gridsterItemCollide.$item.rows;
        if (this.push(gridsterItemCollide, this.fromSouth)) {
            gridsterItemCollide.setSize(true);
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            gridsterItemCollide.$item.y = backUpY;
        }
        return false;
    };
    GridsterPush.prototype.tryEast = function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.east) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        var backUpX = gridsterItemCollide.$item.x;
        gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
        if (this.push(gridsterItemCollide, this.fromWest)) {
            gridsterItemCollide.setSize(true);
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            gridsterItemCollide.$item.x = backUpX;
        }
        return false;
    };
    GridsterPush.prototype.tryWest = function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.west) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        var backUpX = gridsterItemCollide.$item.x;
        gridsterItemCollide.$item.x = gridsterItem.$item.x - gridsterItemCollide.$item.cols;
        if (this.push(gridsterItemCollide, this.fromEast)) {
            gridsterItemCollide.setSize(true);
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            gridsterItemCollide.$item.x = backUpX;
        }
        return false;
    };
    GridsterPush.prototype.addToTempPushed = function (gridsterItem) {
        if (this.checkInTempPushed(gridsterItem)) {
            return;
        }
        var l = this.pushedItemsTemp.push(gridsterItem);
        this.pushedItemsTempInit[l - 1] = { x: gridsterItem.$item.x, y: gridsterItem.$item.y };
    };
    GridsterPush.prototype.removeFromTempPushed = function (gridsterItem) {
        var i = this.pushedItemsTemp.indexOf(gridsterItem);
        this.pushedItemsTemp.splice(i, 1);
        var initPosition = this.pushedItemsTempInit[i];
        gridsterItem.$item.x = initPosition.x;
        gridsterItem.$item.y = initPosition.y;
        gridsterItem.setSize(true);
        this.pushedItemsTempInit.splice(i, 1);
    };
    GridsterPush.prototype.checkInTempPushed = function (gridsterItem) {
        return this.pushedItemsTemp.indexOf(gridsterItem) > -1;
    };
    GridsterPush.prototype.addToPushed = function (gridsterItem) {
        if (this.pushedItems.indexOf(gridsterItem) < 0) {
            this.pushedItems.push(gridsterItem);
            this.pushedItemsPath.push([{ x: gridsterItem.item.x || 0, y: gridsterItem.item.y || 0 },
                { x: gridsterItem.$item.x, y: gridsterItem.$item.y }]);
        }
        else {
            var i = this.pushedItems.indexOf(gridsterItem);
            this.pushedItemsPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
        }
    };
    GridsterPush.prototype.removeFromPushed = function (i) {
        if (i > -1) {
            this.pushedItems.splice(i, 1);
            this.pushedItemsPath.splice(i, 1);
        }
    };
    GridsterPush.prototype.checkPushedItem = function (pushedItem, i) {
        var path = this.pushedItemsPath[i];
        var j = path.length - 2;
        var lastPosition, x, y;
        var change = false;
        for (; j > -1; j--) {
            lastPosition = path[j];
            x = pushedItem.$item.x;
            y = pushedItem.$item.y;
            pushedItem.$item.x = lastPosition.x;
            pushedItem.$item.y = lastPosition.y;
            if (!this.gridster.findItemWithItem(pushedItem.$item)) {
                pushedItem.setSize(true);
                path.splice(j + 1, path.length - j - 1);
                change = true;
            }
            else {
                pushedItem.$item.x = x;
                pushedItem.$item.y = y;
            }
        }
        if (path.length < 2) {
            this.removeFromPushed(i);
        }
        return change;
    };
    return GridsterPush;
}());
GridsterPush = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__["a" /* GridsterItemComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__["a" /* GridsterItemComponent */]) === "function" && _a || Object])
], GridsterPush);

var _a;
//# sourceMappingURL=gridsterPush.service.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterPushResize.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterPushResize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__ = __webpack_require__("../../../../../src/lib/gridsterItem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridsterPushResize = (function () {
    function GridsterPushResize(gridsterItem) {
        this.pushedItems = [];
        this.pushedItemsPath = [];
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
        this.tryPattern = {
            fromEast: this.tryWest,
            fromWest: this.tryEast,
            fromNorth: this.trySouth,
            fromSouth: this.tryNorth
        };
        this.fromSouth = 'fromSouth';
        this.fromNorth = 'fromNorth';
        this.fromEast = 'fromEast';
        this.fromWest = 'fromWest';
    }
    GridsterPushResize.prototype.pushItems = function (direction) {
        if (this.gridster.$options.pushResizeItems) {
            this.push(this.gridsterItem, direction);
        }
    };
    GridsterPushResize.prototype.restoreItems = function () {
        var i = 0;
        var l = this.pushedItems.length;
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.$item.x = pushedItem.item.x || 0;
            pushedItem.$item.y = pushedItem.item.y || 0;
            pushedItem.$item.cols = pushedItem.item.cols || 1;
            pushedItem.$item.row = pushedItem.item.row || 1;
            pushedItem.setSize(true);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    GridsterPushResize.prototype.setPushedItems = function () {
        var i = 0;
        var l = this.pushedItems.length;
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    GridsterPushResize.prototype.checkPushBack = function () {
        var i = this.pushedItems.length - 1;
        var change = false;
        for (; i > -1; i--) {
            if (this.checkPushedItem(this.pushedItems[i], i)) {
                change = true;
            }
        }
        if (change) {
            this.checkPushBack();
        }
    };
    GridsterPushResize.prototype.push = function (gridsterItem, direction) {
        var gridsterItemCollision = this.gridster.checkCollision(gridsterItem.$item);
        if (gridsterItemCollision && gridsterItemCollision !== true &&
            gridsterItemCollision !== this.gridsterItem && gridsterItemCollision.canBeResized()) {
            if (this.tryPattern[direction].call(this, gridsterItemCollision, gridsterItem, direction)) {
                return true;
            }
        }
        else if (gridsterItemCollision === false) {
            return true;
        }
        return false;
    };
    GridsterPushResize.prototype.trySouth = function (gridsterItemCollide, gridsterItem, direction) {
        var backUpY = gridsterItemCollide.$item.y;
        var backUpRows = gridsterItemCollide.$item.rows;
        gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
        gridsterItemCollide.$item.rows = backUpRows + backUpY - gridsterItemCollide.$item.y;
        if (!__WEBPACK_IMPORTED_MODULE_2__gridster_component__["a" /* GridsterComponent */].checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize(true);
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.y = backUpY;
            gridsterItemCollide.$item.rows = backUpRows;
        }
        return false;
    };
    GridsterPushResize.prototype.tryNorth = function (gridsterItemCollide, gridsterItem, direction) {
        var backUpRows = gridsterItemCollide.$item.rows;
        gridsterItemCollide.$item.rows = gridsterItem.$item.y - gridsterItemCollide.$item.y;
        if (!__WEBPACK_IMPORTED_MODULE_2__gridster_component__["a" /* GridsterComponent */].checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize(true);
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.rows = backUpRows;
        }
        return false;
    };
    GridsterPushResize.prototype.tryEast = function (gridsterItemCollide, gridsterItem, direction) {
        var backUpX = gridsterItemCollide.$item.x;
        var backUpCols = gridsterItemCollide.$item.cols;
        gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
        gridsterItemCollide.$item.cols = backUpCols + backUpX - gridsterItemCollide.$item.x;
        if (!__WEBPACK_IMPORTED_MODULE_2__gridster_component__["a" /* GridsterComponent */].checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize(true);
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.x = backUpX;
            gridsterItemCollide.$item.cols = backUpCols;
        }
        return false;
    };
    GridsterPushResize.prototype.tryWest = function (gridsterItemCollide, gridsterItem, direction) {
        var backUpCols = gridsterItemCollide.$item.cols;
        gridsterItemCollide.$item.cols = gridsterItem.$item.x - gridsterItemCollide.$item.x;
        if (!__WEBPACK_IMPORTED_MODULE_2__gridster_component__["a" /* GridsterComponent */].checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize(true);
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.cols = backUpCols;
        }
        return false;
    };
    GridsterPushResize.prototype.addToPushed = function (gridsterItem) {
        if (this.pushedItems.indexOf(gridsterItem) < 0) {
            this.pushedItems.push(gridsterItem);
            this.pushedItemsPath.push([
                {
                    x: gridsterItem.item.x || 0,
                    y: gridsterItem.item.y || 0,
                    cols: gridsterItem.item.cols || 0,
                    rows: gridsterItem.item.rows || 0
                },
                {
                    x: gridsterItem.$item.x,
                    y: gridsterItem.$item.y,
                    cols: gridsterItem.$item.cols,
                    rows: gridsterItem.$item.rows
                }
            ]);
        }
        else {
            var i = this.pushedItems.indexOf(gridsterItem);
            this.pushedItemsPath[i].push({
                x: gridsterItem.$item.x,
                y: gridsterItem.$item.y,
                cols: gridsterItem.$item.cols,
                rows: gridsterItem.$item.rows
            });
        }
    };
    GridsterPushResize.prototype.removeFromPushed = function (i) {
        if (i > -1) {
            this.pushedItems.splice(i, 1);
            this.pushedItemsPath.splice(i, 1);
        }
    };
    GridsterPushResize.prototype.checkPushedItem = function (pushedItem, i) {
        var path = this.pushedItemsPath[i];
        var j = path.length - 2;
        var lastPosition, x, y, cols, rows;
        for (; j > -1; j--) {
            lastPosition = path[j];
            x = pushedItem.$item.x;
            y = pushedItem.$item.y;
            cols = pushedItem.$item.cols;
            rows = pushedItem.$item.rows;
            pushedItem.$item.x = lastPosition.x;
            pushedItem.$item.y = lastPosition.y;
            pushedItem.$item.cols = lastPosition.cols;
            pushedItem.$item.rows = lastPosition.rows;
            if (!this.gridster.findItemWithItem(pushedItem.$item)) {
                pushedItem.setSize(true);
                path.splice(j + 1, path.length - 1 - j);
            }
            else {
                pushedItem.$item.x = x;
                pushedItem.$item.y = y;
                pushedItem.$item.cols = cols;
                pushedItem.$item.rows = rows;
            }
        }
        if (path.length < 2) {
            this.removeFromPushed(i);
            return true;
        }
        return false;
    };
    return GridsterPushResize;
}());
GridsterPushResize = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__["a" /* GridsterItemComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__["a" /* GridsterItemComponent */]) === "function" && _a || Object])
], GridsterPushResize);

var _a;
//# sourceMappingURL=gridsterPushResize.service.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterResizable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterResizable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__ = __webpack_require__("../../../../../src/lib/gridsterItem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridsterScroll_service__ = __webpack_require__("../../../../../src/lib/gridsterScroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridsterPush_service__ = __webpack_require__("../../../../../src/lib/gridsterPush.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gridster_component__ = __webpack_require__("../../../../../src/lib/gridster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gridsterUtils_service__ = __webpack_require__("../../../../../src/lib/gridsterUtils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gridsterPushResize_service__ = __webpack_require__("../../../../../src/lib/gridsterPushResize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GridsterResizable = (function () {
    function GridsterResizable(gridsterItem, gridster) {
        this.gridsterItem = gridsterItem;
        this.gridster = gridster;
        this.lastMouse = {
            clientX: 0,
            clientY: 0
        };
        this.itemBackup = [0, 0, 0, 0];
        this.resizeEventScrollType = { w: false, e: false, n: false, s: false };
    }
    GridsterResizable.prototype.dragStart = function (e) {
        switch (e.which) {
            case 1:
                // left mouse button
                break;
            case 2:
            case 3:
                // right or middle mouse button
                return;
        }
        if (this.gridster.$options.resizable.start) {
            this.gridster.$options.resizable.start(this.gridsterItem.item, this.gridsterItem, e);
        }
        e.stopPropagation();
        e.preventDefault();
        this.dragFunction = this.dragMove.bind(this);
        this.dragStopFunction = this.dragStop.bind(this);
        this.mousemove = this.gridsterItem.renderer.listen('document', 'mousemove', this.dragFunction);
        this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStopFunction);
        this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStopFunction);
        this.touchmove = this.gridster.renderer.listen(this.gridster.el, 'touchmove', this.dragFunction);
        this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStopFunction);
        this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStopFunction);
        this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-resizing');
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.left = this.gridsterItem.left;
        this.top = this.gridsterItem.top;
        this.width = this.gridsterItem.width;
        this.height = this.gridsterItem.height;
        this.bottom = this.gridsterItem.top + this.gridsterItem.height;
        this.right = this.gridsterItem.left + this.gridsterItem.width;
        this.margin = this.gridster.$options.margin;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.diffLeft = e.clientX + this.offsetLeft - this.margin - this.left;
        this.diffRight = e.clientX + this.offsetLeft - this.margin - this.right;
        this.diffTop = e.clientY + this.offsetTop - this.margin - this.top;
        this.diffBottom = e.clientY + this.offsetTop - this.margin - this.bottom;
        this.minHeight = this.gridster.positionYToPixels(this.gridsterItem.$item.minItemRows || this.gridster.$options.minItemRows)
            - this.margin;
        this.minWidth = this.gridster.positionXToPixels(this.gridsterItem.$item.minItemCols || this.gridster.$options.minItemCols)
            - this.margin;
        this.gridster.movingItem = this.gridsterItem.$item;
        this.gridster.previewStyle();
        this.push = new __WEBPACK_IMPORTED_MODULE_3__gridsterPush_service__["a" /* GridsterPush */](this.gridsterItem);
        this.pushResize = new __WEBPACK_IMPORTED_MODULE_6__gridsterPushResize_service__["a" /* GridsterPushResize */](this.gridsterItem);
        this.gridster.dragInProgress = true;
        this.gridster.gridLines.updateGrid();
        if (e.target.classList.contains('handle-n')) {
            this.resizeEventScrollType.n = true;
            this.directionFunction = this.handleN.bind(this);
        }
        else if (e.target.classList.contains('handle-w')) {
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleW.bind(this);
        }
        else if (e.target.classList.contains('handle-s')) {
            this.resizeEventScrollType.s = true;
            this.directionFunction = this.handleS.bind(this);
        }
        else if (e.target.classList.contains('handle-e')) {
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleE.bind(this);
        }
        else if (e.target.classList.contains('handle-nw')) {
            this.resizeEventScrollType.n = true;
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleNW.bind(this);
        }
        else if (e.target.classList.contains('handle-ne')) {
            this.resizeEventScrollType.n = true;
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleNE.bind(this);
        }
        else if (e.target.classList.contains('handle-sw')) {
            this.resizeEventScrollType.s = true;
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleSW.bind(this);
        }
        else if (e.target.classList.contains('handle-se')) {
            this.resizeEventScrollType.s = true;
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleSE.bind(this);
        }
    };
    GridsterResizable.prototype.dragMove = function (e) {
        e.stopPropagation();
        e.preventDefault();
        __WEBPACK_IMPORTED_MODULE_5__gridsterUtils_service__["a" /* GridsterUtils */].checkTouchEvent(e);
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        Object(__WEBPACK_IMPORTED_MODULE_2__gridsterScroll_service__["b" /* scroll */])(this.gridsterItem, e, this.lastMouse, this.directionFunction, true, this.resizeEventScrollType);
        this.directionFunction(e);
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.gridster.gridLines.updateGrid();
    };
    GridsterResizable.prototype.dragStop = function (e) {
        e.stopPropagation();
        e.preventDefault();
        Object(__WEBPACK_IMPORTED_MODULE_2__gridsterScroll_service__["a" /* cancelScroll */])();
        this.mousemove();
        this.mouseup();
        this.cancelOnBlur();
        this.touchmove();
        this.touchend();
        this.touchcancel();
        this.gridsterItem.renderer.removeClass(this.gridsterItem.el, 'gridster-item-resizing');
        this.gridster.dragInProgress = false;
        this.gridster.gridLines.updateGrid();
        if (this.gridster.$options.resizable.stop) {
            Promise.resolve(this.gridster.$options.resizable.stop(this.gridsterItem.item, this.gridsterItem, e))
                .then(this.makeResize.bind(this), this.cancelResize.bind(this));
        }
        else {
            this.makeResize();
        }
        setTimeout(function () {
            this.gridster.movingItem = null;
            this.gridster.previewStyle();
        }.bind(this));
    };
    GridsterResizable.prototype.cancelResize = function () {
        this.gridsterItem.$item.cols = this.gridsterItem.item.cols || 1;
        this.gridsterItem.$item.rows = this.gridsterItem.item.rows || 1;
        this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
        this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
        this.gridsterItem.setSize(true);
        this.push.restoreItems();
        this.pushResize.restoreItems();
    };
    GridsterResizable.prototype.makeResize = function () {
        this.gridsterItem.setSize(true);
        this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
        this.push.setPushedItems();
        this.pushResize.setPushedItems();
    };
    GridsterResizable.prototype.handleN = function (e) {
        this.top = e.clientY + this.offsetTop - this.margin - this.diffTop;
        this.height = this.bottom - this.top;
        if (this.minHeight > this.height) {
            this.height = this.minHeight;
            this.top = this.bottom - this.minHeight;
        }
        this.newPosition = this.gridster.pixelsToPositionY(this.top, Math.floor);
        if (this.gridsterItem.$item.y !== this.newPosition) {
            this.itemBackup[1] = this.gridsterItem.$item.y;
            this.itemBackup[3] = this.gridsterItem.$item.rows;
            this.gridsterItem.$item.rows += this.gridsterItem.$item.y - this.newPosition;
            this.gridsterItem.$item.y = this.newPosition;
            this.pushResize.pushItems(this.pushResize.fromSouth);
            this.push.pushItems(this.push.fromSouth, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.y = this.itemBackup[1];
                this.gridsterItem.$item.rows = this.itemBackup[3];
                this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'top', this.gridster.positionYToPixels(this.gridsterItem.$item.y) + 'px');
                this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'height', this.gridster.positionYToPixels(this.gridsterItem.$item.rows)
                    - this.gridster.$options.margin + 'px');
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'top', this.top + 'px');
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'height', this.height + 'px');
    };
    GridsterResizable.prototype.handleW = function (e) {
        this.left = e.clientX + this.offsetLeft - this.margin - this.diffLeft;
        this.width = this.right - this.left;
        if (this.minWidth > this.width) {
            this.width = this.minWidth;
            this.left = this.right - this.minWidth;
        }
        this.newPosition = this.gridster.pixelsToPositionX(this.left, Math.floor);
        if (this.gridsterItem.$item.x !== this.newPosition) {
            this.itemBackup[0] = this.gridsterItem.$item.x;
            this.itemBackup[2] = this.gridsterItem.$item.cols;
            this.gridsterItem.$item.cols += this.gridsterItem.$item.x - this.newPosition;
            this.gridsterItem.$item.x = this.newPosition;
            this.pushResize.pushItems(this.pushResize.fromEast);
            this.push.pushItems(this.push.fromEast, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.x = this.itemBackup[0];
                this.gridsterItem.$item.cols = this.itemBackup[2];
                this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'left', this.gridster.positionXToPixels(this.gridsterItem.$item.x) + 'px');
                this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'width', this.gridster.positionXToPixels(this.gridsterItem.$item.cols)
                    - this.gridster.$options.margin + 'px');
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'left', this.left + 'px');
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'width', this.width + 'px');
    };
    GridsterResizable.prototype.handleS = function (e) {
        this.height = e.clientY + this.offsetTop - this.margin - this.diffBottom - this.top;
        if (this.minHeight > this.height) {
            this.height = this.minHeight;
        }
        this.bottom = this.top + this.height;
        this.newPosition = this.gridster.pixelsToPositionY(this.bottom, Math.ceil);
        if ((this.gridsterItem.$item.y + this.gridsterItem.$item.rows) !== this.newPosition) {
            this.itemBackup[3] = this.gridsterItem.$item.rows;
            this.gridsterItem.$item.rows = this.newPosition - this.gridsterItem.$item.y;
            this.pushResize.pushItems(this.pushResize.fromNorth);
            this.push.pushItems(this.push.fromNorth, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.rows = this.itemBackup[3];
                this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'height', this.gridster.positionYToPixels(this.gridsterItem.$item.rows)
                    - this.gridster.$options.margin + 'px');
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'height', this.height + 'px');
    };
    GridsterResizable.prototype.handleE = function (e) {
        this.width = e.clientX + this.offsetLeft - this.margin - this.diffRight - this.left;
        if (this.minWidth > this.width) {
            this.width = this.minWidth;
        }
        this.right = this.left + this.width;
        this.newPosition = this.gridster.pixelsToPositionX(this.right, Math.ceil);
        if ((this.gridsterItem.$item.x + this.gridsterItem.$item.cols) !== this.newPosition) {
            this.itemBackup[2] = this.gridsterItem.$item.cols;
            this.gridsterItem.$item.cols = this.newPosition - this.gridsterItem.$item.x;
            this.pushResize.pushItems(this.pushResize.fromWest);
            this.push.pushItems(this.push.fromWest, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.cols = this.itemBackup[2];
                this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'width', this.gridster.positionXToPixels(this.gridsterItem.$item.cols)
                    - this.gridster.$options.margin + 'px');
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'width', this.width + 'px');
    };
    GridsterResizable.prototype.handleNW = function (e) {
        this.handleN(e);
        this.handleW(e);
    };
    GridsterResizable.prototype.handleNE = function (e) {
        this.handleN(e);
        this.handleE(e);
    };
    GridsterResizable.prototype.handleSW = function (e) {
        this.handleS(e);
        this.handleW(e);
    };
    GridsterResizable.prototype.handleSE = function (e) {
        this.handleS(e);
        this.handleE(e);
    };
    GridsterResizable.prototype.toggle = function () {
        this.resizeEnabled = this.gridsterItem.canBeResized();
    };
    GridsterResizable.prototype.dragStartDelay = function (e) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__gridsterUtils_service__["a" /* GridsterUtils */].checkTouchEvent(e);
        if (!this.gridster.$options.resizable.delayStart) {
            this.dragStart(e);
            return;
        }
        var timeout = setTimeout(function () {
            _this.dragStart(e);
            cancelDrag();
        }, this.gridster.$options.resizable.delayStart);
        var cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
        var cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
        var cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
        var cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
        var cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
        function cancelMove(eventMove) {
            __WEBPACK_IMPORTED_MODULE_5__gridsterUtils_service__["a" /* GridsterUtils */].checkTouchEvent(eventMove);
            if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
                cancelDrag();
            }
        }
        function cancelDrag() {
            clearTimeout(timeout);
            cancelOnBlur();
            cancelMouse();
            cancelTouchMove();
            cancelTouchEnd();
            cancelTouchCancel();
        }
    };
    return GridsterResizable;
}());
GridsterResizable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__["a" /* GridsterItemComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__["a" /* GridsterItemComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__gridster_component__["a" /* GridsterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__gridster_component__["a" /* GridsterComponent */]) === "function" && _b || Object])
], GridsterResizable);

var _a, _b;
//# sourceMappingURL=gridsterResizable.service.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterScroll.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = scroll;
/* harmony export (immutable) */ __webpack_exports__["a"] = cancelScroll;
var scrollSensitivity;
var scrollSpeed;
var intervalDuration = 50;
var gridsterElement;
var resizeEvent;
var resizeEventType;
var intervalE;
var intervalW;
var intervalN;
var intervalS;
function scroll(gridsterItem, e, lastMouse, calculateItemPosition, resize, resizeEventScrollType) {
    scrollSensitivity = gridsterItem.gridster.$options.scrollSensitivity;
    scrollSpeed = gridsterItem.gridster.$options.scrollSpeed;
    gridsterElement = gridsterItem.gridster.el;
    resizeEvent = resize;
    resizeEventType = resizeEventScrollType;
    var offsetWidth = gridsterElement.offsetWidth;
    var offsetHeight = gridsterElement.offsetHeight;
    var offsetLeft = gridsterElement.scrollLeft;
    var offsetTop = gridsterElement.scrollTop;
    var elemTopOffset = gridsterItem.el.offsetTop - offsetTop;
    var elemBottomOffset = offsetHeight + offsetTop - gridsterItem.el.offsetTop - gridsterItem.el.offsetHeight;
    if (lastMouse.clientY < e.clientY && elemBottomOffset < scrollSensitivity) {
        cancelN();
        if ((resizeEvent && resizeEventType && !resizeEventType.s) || intervalS) {
            return;
        }
        intervalS = startVertical(1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientY > e.clientY && offsetTop > 0 && elemTopOffset < scrollSensitivity) {
        cancelS();
        if ((resizeEvent && resizeEventType && !resizeEventType.n) || intervalN) {
            return;
        }
        intervalN = startVertical(-1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientY !== e.clientY) {
        cancelVertical();
    }
    var elemRightOffset = offsetLeft + offsetWidth - gridsterItem.el.offsetLeft - gridsterItem.el.offsetWidth;
    var elemLeftOffset = gridsterItem.el.offsetLeft - offsetLeft;
    if (lastMouse.clientX < e.clientX && elemRightOffset <= scrollSensitivity) {
        cancelW();
        if ((resizeEvent && resizeEventType && !resizeEventType.e) || intervalE) {
            return;
        }
        intervalE = startHorizontal(1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientX > e.clientX && offsetLeft > 0 && elemLeftOffset < scrollSensitivity) {
        cancelE();
        if ((resizeEvent && resizeEventType && !resizeEventType.w) || intervalW) {
            return;
        }
        intervalW = startHorizontal(-1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientX !== e.clientX) {
        cancelHorizontal();
    }
}
function startVertical(sign, calculateItemPosition, lastMouse) {
    var clientY = lastMouse.clientY;
    return setInterval(function () {
        if (!gridsterElement || sign === -1 && gridsterElement.scrollTop - scrollSpeed < 0) {
            cancelVertical();
        }
        gridsterElement.scrollTop += sign * scrollSpeed;
        clientY += sign * scrollSpeed;
        calculateItemPosition({ clientX: lastMouse.clientX, clientY: clientY });
    }.bind(this), intervalDuration);
}
function startHorizontal(sign, calculateItemPosition, lastMouse) {
    var clientX = lastMouse.clientX;
    return setInterval(function () {
        if (!gridsterElement || sign === -1 && gridsterElement.scrollLeft - scrollSpeed < 0) {
            cancelHorizontal();
        }
        gridsterElement.scrollLeft += sign * scrollSpeed;
        clientX += sign * scrollSpeed;
        calculateItemPosition({ clientX: clientX, clientY: lastMouse.clientY });
    }.bind(this), intervalDuration);
}
function cancelScroll() {
    cancelHorizontal();
    cancelVertical();
    gridsterElement = undefined;
}
function cancelHorizontal() {
    cancelE();
    cancelW();
}
function cancelVertical() {
    cancelN();
    cancelS();
}
function cancelE() {
    if (intervalE) {
        clearInterval(intervalE);
        intervalE = 0;
    }
}
function cancelW() {
    if (intervalW) {
        clearInterval(intervalW);
        intervalW = 0;
    }
}
function cancelS() {
    if (intervalS) {
        clearInterval(intervalS);
        intervalS = 0;
    }
}
function cancelN() {
    if (intervalN) {
        clearInterval(intervalN);
        intervalN = 0;
    }
}
//# sourceMappingURL=gridsterScroll.service.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterSwap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterSwap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__ = __webpack_require__("../../../../../src/lib/gridsterItem.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridsterSwap = (function () {
    function GridsterSwap(gridsterItem) {
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
    }
    GridsterSwap.prototype.swapItems = function () {
        if (this.gridster.$options.swap) {
            this.checkSwapBack();
            this.checkSwap(this.gridsterItem);
        }
    };
    GridsterSwap.prototype.checkSwapBack = function () {
        if (this.swapedItem) {
            var x = this.swapedItem.$item.x;
            var y = this.swapedItem.$item.y;
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            if (this.gridster.checkCollision(this.swapedItem.$item)) {
                this.swapedItem.$item.x = x;
                this.swapedItem.$item.y = y;
            }
            else {
                this.swapedItem.setSize(true);
                this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
                this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
                this.swapedItem = undefined;
            }
        }
    };
    GridsterSwap.prototype.restoreSwapItem = function () {
        if (this.swapedItem) {
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            this.swapedItem.setSize(true);
            this.swapedItem = undefined;
        }
    };
    GridsterSwap.prototype.setSwapItem = function () {
        if (this.swapedItem) {
            this.swapedItem.checkItemChanges(this.swapedItem.$item, this.swapedItem.item);
            this.swapedItem = undefined;
        }
    };
    GridsterSwap.prototype.checkSwap = function (pushedBy) {
        var gridsterItemCollision = this.gridster.checkCollision(pushedBy.$item);
        if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
            var gridsterItemCollide = gridsterItemCollision;
            var copyCollisionX = gridsterItemCollide.$item.x;
            var copyCollisionY = gridsterItemCollide.$item.y;
            var copyX = pushedBy.$item.x;
            var copyY = pushedBy.$item.y;
            gridsterItemCollide.$item.x = pushedBy.item.x || 0;
            gridsterItemCollide.$item.y = pushedBy.item.y || 0;
            pushedBy.$item.x = gridsterItemCollide.item.x || 0;
            pushedBy.$item.y = gridsterItemCollide.item.y || 0;
            if (this.gridster.checkCollision(gridsterItemCollide.$item) || this.gridster.checkCollision(pushedBy.$item)) {
                pushedBy.$item.x = copyX;
                pushedBy.$item.y = copyY;
                gridsterItemCollide.$item.x = copyCollisionX;
                gridsterItemCollide.$item.y = copyCollisionY;
            }
            else {
                gridsterItemCollide.setSize(true);
                this.swapedItem = gridsterItemCollide;
            }
        }
    };
    return GridsterSwap;
}());
GridsterSwap = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__["a" /* GridsterItemComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gridsterItem_component__["a" /* GridsterItemComponent */]) === "function" && _a || Object])
], GridsterSwap);

var _a;
//# sourceMappingURL=gridsterSwap.service.js.map

/***/ }),

/***/ "../../../../../src/lib/gridsterUtils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridsterUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridsterUtils = GridsterUtils_1 = (function () {
    function GridsterUtils() {
    }
    GridsterUtils.merge = function (obj1, obj2, properties) {
        for (var p in obj2) {
            if (obj2.hasOwnProperty(p) && properties.hasOwnProperty(p)) {
                if (typeof obj2[p] === 'object') {
                    obj1[p] = GridsterUtils_1.merge(obj1[p], obj2[p], properties[p]);
                }
                else {
                    obj1[p] = obj2[p];
                }
            }
        }
        return obj1;
    };
    GridsterUtils.debounce = function (func, wait) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    GridsterUtils.checkTouchEvent = function (e) {
        if (e.clientX === undefined && e.touches) {
            if (e.touches && e.touches.length) {
                e.clientX = e.touches[0].clientX;
                e.clientY = e.touches[0].clientY;
            }
            else if (e.changedTouches && e.changedTouches.length) {
                e.clientX = e.changedTouches[0].clientX;
                e.clientY = e.changedTouches[0].clientY;
            }
        }
    };
    GridsterUtils.checkContentClassForEvent = function (gridster, e) {
        if (gridster.$options.draggable.ignoreContent) {
            if (!GridsterUtils_1.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass)) {
                return true;
            }
        }
        else {
            if (GridsterUtils_1.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)) {
                return true;
            }
        }
        return false;
    };
    GridsterUtils.checkContentClass = function (target, current, contentClass) {
        if (target === current) {
            return false;
        }
        if (target.classList && target.classList.contains(contentClass)) {
            return true;
        }
        else {
            return GridsterUtils_1.checkContentClass(target.parentNode, current, contentClass);
        }
    };
    return GridsterUtils;
}());
GridsterUtils = GridsterUtils_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GridsterUtils);

var GridsterUtils_1;
//# sourceMappingURL=gridsterUtils.service.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




//$.trumbowyg.svgPath = 'dist/icons.svg';
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map