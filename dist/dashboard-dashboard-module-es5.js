function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
      data: {
        title: 'Dashboard Component'
      }
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/bar-chart/bar-chart.component */
    "./src/app/shared/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/line-chart/line-chart.component */
    "./src/app/shared/line-chart/line-chart.component.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(_authService, _router) {
        _classCallCheck(this, DashboardComponent);

        this._authService = _authService;
        this._router = _router;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userName();
          this.allRprt();
        }
      }, {
        key: "userName",
        value: function userName() {
          var userName = this._authService.getUserInfo();

          return userName['first_name'];
        }
      }, {
        key: "allRprt",
        value: function allRprt() {
          var allRprt = this._authService.getRprt();

          return allRprt['job_id'];
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.??fac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 76,
      vars: 1,
      consts: [["id", "page-wrapper", 1, ""], [1, "container-fluid"], [1, "row", "row-stat"], [1, "col-lg-4"], [1, "panel", "panel-light", "noborder"], [1, "panel-heading", "noborder"], [1, "panel-icon"], [1, "fa", "fa-dollar"], [1, "media-body"], [1, "md-title", "nomargin"], [1, "mt5"], [1, "clearfix", "mt20"], [1, "pull-left"], [1, "nomargin"], [1, "pull-right"], [1, "col-lg-4", "col-md-6"], [1, "panel", "panel-dark", "noborder"], [1, "fa", "fa-users"], [1, "panel", "panel-darkest", "noborder"], [1, "fa", "fa-pencil"], [1, "row"], [1, "col-md-12", "col-lg-6"], [1, "white-box"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Today's Jobs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Yesterday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "This Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Job in Progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Yesterday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "This Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Failed job");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Yesterday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "350");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "This Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "app-bar-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "app-line-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.userName());
        }
      },
      directives: [_shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__["BarChartComponent"], _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/bar-chart/bar-chart.component */
    "./src/app/shared/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/line-chart/line-chart.component */
    "./src/app/shared/line-chart/line-chart.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      providers: [_shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"], _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"]],
      imports: [[_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"], _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"]],
        imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]],
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"], _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"]],
          providers: [_shared_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"], _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/bar-chart/bar-chart.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/bar-chart/bar-chart.component.ts ***!
    \*********************************************************/

  /*! exports provided: BarChartComponent */

  /***/
  function srcAppSharedBarChartBarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
      return BarChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var BarChartComponent =
    /*#__PURE__*/
    function () {
      function BarChartComponent() {
        _classCallCheck(this, BarChartComponent);

        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.barChartLabels = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"];
        this.barChartType = "bar";
        this.barChartLegend = true;
        this.barChartData = [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: "Series A"
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: "Series B"
        }];
      } // events


      _createClass(BarChartComponent, [{
        key: "chartClicked",
        value: function chartClicked(e) {
          console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {
          console.log(e);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BarChartComponent;
    }();

    BarChartComponent.??fac = function BarChartComponent_Factory(t) {
      return new (t || BarChartComponent)();
    };

    BarChartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BarChartComponent,
      selectors: [["app-bar-chart"]],
      decls: 5,
      vars: 5,
      consts: [[2, "display", "block"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType", "chartHover", "chartClick"]],
      template: function BarChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "canvas", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function BarChartComponent_Template_canvas_chartHover_2_listener($event) {
            return ctx.chartHovered($event);
          })("chartClick", function BarChartComponent_Template_canvas_chartClick_2_listener($event) {
            return ctx.chartClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc2hhcmVkL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-bar-chart",
          templateUrl: "./bar-chart.component.html",
          styleUrls: ["./bar-chart.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/line-chart/line-chart.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/line-chart/line-chart.component.ts ***!
    \***********************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppSharedLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var LineChartComponent =
    /*#__PURE__*/
    function () {
      function LineChartComponent() {
        _classCallCheck(this, LineChartComponent);

        // lineChart
        this.lineChartData = [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A'
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B'
        }, {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C'
        }];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }, {
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        }, {
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
      }

      _createClass(LineChartComponent, [{
        key: "randomize",
        value: function randomize() {
          var _lineChartData = new Array(this.lineChartData.length);

          for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {
              data: new Array(this.lineChartData[i].data.length),
              label: this.lineChartData[i].label
            };

            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
              _lineChartData[i].data[j] = Math.floor(Math.random() * 100 + 1);
            }
          }

          this.lineChartData = _lineChartData;
        } // events

      }, {
        key: "chartClicked",
        value: function chartClicked(e) {
          console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {
          console.log(e);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LineChartComponent;
    }();

    LineChartComponent.??fac = function LineChartComponent_Factory(t) {
      return new (t || LineChartComponent)();
    };

    LineChartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LineChartComponent,
      selectors: [["app-line-chart"]],
      decls: 6,
      vars: 6,
      consts: [[2, "display", "block"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "btn", "btn-primary", 3, "click"]],
      template: function LineChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "canvas", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chartHover", function LineChartComponent_Template_canvas_chartHover_1_listener($event) {
            return ctx.chartHovered($event);
          })("chartClick", function LineChartComponent_Template_canvas_chartClick_1_listener($event) {
            return ctx.chartClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LineChartComponent_Template_button_click_4_listener($event) {
            return ctx.randomize();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Randomize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc2hhcmVkL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line-chart',
          templateUrl: './line-chart.component.html',
          styleUrls: ['./line-chart.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map