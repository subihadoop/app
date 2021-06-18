function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/auth/auth-guard.service */
    "./src/app/shared/auth/auth-guard.service.ts");

    var routes = [{
      path: 'pages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pages-module */
        "pages-pages-module").then(__webpack_require__.bind(null,
        /*! ./pages/pages.module */
        "./src/app/pages/pages.module.ts")).then(function (m) {
          return m.PagesModule;
        });
      },
      data: {
        title: 'Main page'
      },
      canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-user-module */
        "user-user-module").then(__webpack_require__.bind(null,
        /*! ./user/user.module */
        "./src/app/user/user.module.ts")).then(function (m) {
          return m.UserModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(titleService, router, activatedRoute) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.titleService = titleService;
        this.title = 'app works!';
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            var title = _this.getTitle(router.routerState, router.routerState.root).join(' | ');

            titleService.setTitle(title);
          }
        });
      }

      _createClass(AppComponent, [{
        key: "getTitle",
        value: function getTitle(state, parent) {
          var data = [];

          if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
          }

          if (state && parent) {
            data.push.apply(data, _toConsumableArray(this.getTitle(state, state.firstChild(parent))));
          }

          return data;
        }
      }, {
        key: "setTitle",
        value: function setTitle(newTitle) {
          this.titleService.setTitle(newTitle);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/services/http.service */
    "./src/app/shared/services/http.service.ts");
    /* harmony import */


    var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/auth/auth-guard.service */
    "./src/app/shared/auth/auth-guard.service.ts");
    /* harmony import */


    var _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/services/token-interceptor.service */
    "./src/app/shared/services/token-interceptor.service.ts");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _pages_template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/template/left-nav-template.component */
    "./src/app/pages/template/left-nav-template.component.ts");
    /* harmony import */


    var _pages_template_blank_template_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/template/blank-template.component */
    "./src/app/pages/template/blank-template.component.ts");
    /* harmony import */


    var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/navigation/navigation.component */
    "./src/app/shared/navigation/navigation.component.ts");
    /* harmony import */


    var app_pages_components_add_report_add_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! app/pages/components/add-report/add-report.component */
    "./src/app/pages/components/add-report/add-report.component.ts");
    /* harmony import */


    var app_pages_components_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! app/pages/components/report-details/report-details.component */
    "./src/app/pages/components/report-details/report-details.component.ts");
    /* harmony import */


    var app_pages_components_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! app/pages/components/report-list/report-list.component */
    "./src/app/pages/components/report-list/report-list.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"], _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"] //UiElementsModule,
      // UserModule
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_pages_pages_component__WEBPACK_IMPORTED_MODULE_14__["PagesComponent"], _pages_template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_17__["LeftNavTemplateComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _pages_template_blank_template_component__WEBPACK_IMPORTED_MODULE_18__["BlankTemplateComponent"], _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_19__["NavigationComponent"], app_pages_components_add_report_add_report_component__WEBPACK_IMPORTED_MODULE_20__["AddreportComponent"], app_pages_components_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_21__["reportDetailsComponent"], app_pages_components_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_22__["reportsListComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"], // ToastrModule added
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"] //UiElementsModule,
        // UserModule
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_pages_pages_component__WEBPACK_IMPORTED_MODULE_14__["PagesComponent"], _pages_template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_17__["LeftNavTemplateComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _pages_template_blank_template_component__WEBPACK_IMPORTED_MODULE_18__["BlankTemplateComponent"], _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_19__["NavigationComponent"], app_pages_components_add_report_add_report_component__WEBPACK_IMPORTED_MODULE_20__["AddreportComponent"], app_pages_components_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_21__["reportDetailsComponent"], app_pages_components_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_22__["reportsListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"] //UiElementsModule,
          // UserModule
          ],
          providers: [_shared_services_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"], _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/components/add-report/add-report.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/components/add-report/add-report.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddreportComponent */

  /***/
  function srcAppPagesComponentsAddReportAddReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddreportComponent", function () {
      return AddreportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/report.service */
    "./src/app/shared/services/report.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AddreportComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddreportComponent_div_1_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.report.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddreportComponent_div_1_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.report.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddreportComponent_div_1_Template_button_click_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.savereport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.report.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.report.description);
      }
    }

    function AddreportComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You submitted successfully!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddreportComponent_div_2_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.newreport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddreportComponent =
    /*#__PURE__*/
    function () {
      function AddreportComponent(reportservice) {
        _classCallCheck(this, AddreportComponent);

        this.reportservice = reportservice;
        this.report = {
          title: '',
          description: '',
          published: false
        };
        this.submitted = false;
      }

      _createClass(AddreportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "savereport",
        value: function savereport() {
          var _this2 = this;

          var data = {
            title: this.report.title,
            description: this.report.description
          };
          this.reportservice.create(data).subscribe(function (response) {
            console.log(response);
            _this2.submitted = true;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "newreport",
        value: function newreport() {
          this.submitted = false;
          this.report = {
            title: '',
            description: '',
            published: false
          };
        }
      }]);

      return AddreportComponent;
    }();

    AddreportComponent.ɵfac = function AddreportComponent_Factory(t) {
      return new (t || AddreportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["reportservice"]));
    };

    AddreportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddreportComponent,
      selectors: [["app-add-report"]],
      decls: 3,
      vars: 2,
      consts: [[1, "submit-form"], [4, "ngIf"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "required", "", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["id", "description", "required", "", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"]],
      template: function AddreportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddreportComponent_div_1_Template, 11, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddreportComponent_div_2_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".submit-form[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jb21wb25lbnRzL2FkZC1yZXBvcnQvYWRkLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAvcGFnZXMvY29tcG9uZW50cy9hZGQtcmVwb3J0L2FkZC1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXQtZm9ybSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddreportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-report',
          templateUrl: './add-report.component.html',
          styleUrls: ['./add-report.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["reportservice"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/components/report-details/report-details.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/components/report-details/report-details.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: reportDetailsComponent */

  /***/
  function srcAppPagesComponentsReportDetailsReportDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reportDetailsComponent", function () {
      return reportDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/report.service */
    "./src/app/shared/services/report.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function reportDetailsComponent_div_0_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function reportDetailsComponent_div_0_button_17_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r42.updatePublished(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " UnPublish ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function reportDetailsComponent_div_0_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function reportDetailsComponent_div_0_button_18_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.updatePublished(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Publish ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function reportDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "report");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function reportDetailsComponent_div_0_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.currentreport.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function reportDetailsComponent_div_0_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.currentreport.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, reportDetailsComponent_div_0_button_17_Template, 2, 0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, reportDetailsComponent_div_0_button_18_Template, 2, 0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function reportDetailsComponent_div_0_Template_button_click_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.deletereport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function reportDetailsComponent_div_0_Template_button_click_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.updatereport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Update ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.currentreport.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.currentreport.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r38.currentreport.published ? "Published" : "Pending", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.currentreport.published);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r38.currentreport.published);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.message);
      }
    }

    function reportDetailsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cannot access this report...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var reportDetailsComponent =
    /*#__PURE__*/
    function () {
      function reportDetailsComponent(reportservice, route, router) {
        _classCallCheck(this, reportDetailsComponent);

        this.reportservice = reportservice;
        this.route = route;
        this.router = router;
        this.currentreport = null;
        this.message = '';
      }

      _createClass(reportDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = '';
          this.getreport(this.route.snapshot.paramMap.get('id'));
        }
      }, {
        key: "getreport",
        value: function getreport(id) {
          var _this3 = this;

          this.reportservice.get(id).subscribe(function (data) {
            _this3.currentreport = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updatePublished",
        value: function updatePublished(status) {
          var _this4 = this;

          var data = {
            title: this.currentreport.title,
            description: this.currentreport.description,
            published: status
          };
          this.reportservice.update(this.currentreport.id, data).subscribe(function (response) {
            _this4.currentreport.published = status;
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updatereport",
        value: function updatereport() {
          var _this5 = this;

          this.reportservice.update(this.currentreport.id, this.currentreport).subscribe(function (response) {
            console.log(response);
            _this5.message = 'The report was updated successfully!';
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "deletereport",
        value: function deletereport() {
          var _this6 = this;

          this.reportservice.delete(this.currentreport.id).subscribe(function (response) {
            console.log(response);

            _this6.router.navigate(['/report']);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return reportDetailsComponent;
    }();

    reportDetailsComponent.ɵfac = function reportDetailsComponent_Factory(t) {
      return new (t || reportDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["reportservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    reportDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: reportDetailsComponent,
      selectors: [["app-report-details"]],
      decls: 2,
      vars: 2,
      consts: [["class", "edit-form", 4, "ngIf"], [4, "ngIf"], [1, "edit-form"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["type", "text", "id", "description", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "badge badge-primary mr-2", 3, "click", 4, "ngIf"], [1, "badge", "badge-danger", "mr-2", 3, "click"], ["type", "submit", 1, "badge", "badge-success", 3, "click"], [1, "badge", "badge-primary", "mr-2", 3, "click"]],
      template: function reportDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, reportDetailsComponent_div_0_Template, 25, 6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, reportDetailsComponent_div_1_Template, 4, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentreport);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentreport);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".edit-form[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jb21wb25lbnRzL3JlcG9ydC1kZXRhaWxzL3JlcG9ydC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcC9wYWdlcy9jb21wb25lbnRzL3JlcG9ydC1kZXRhaWxzL3JlcG9ydC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1mb3JtIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](reportDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-report-details',
          templateUrl: './report-details.component.html',
          styleUrls: ['./report-details.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["reportservice"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/components/report-list/report-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/components/report-list/report-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: reportsListComponent */

  /***/
  function srcAppPagesComponentsReportListReportListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reportsListComponent", function () {
      return reportsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/report.service */
    "./src/app/shared/services/report.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function reportsListComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function reportsListComponent_li_11_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var report_r54 = ctx.$implicit;
          var i_r55 = ctx.index;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.setActivereport(report_r54, i_r55);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var report_r54 = ctx.$implicit;
        var i_r55 = ctx.index;

        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r55 == ctx_r51.currentIndex);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r54.title, " ");
      }
    }

    function reportsListComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "report");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.currentreport.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.currentreport.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.currentreport.published ? "Published" : "Pending", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/reports/", ctx_r52.currentreport.id, "");
      }
    }

    function reportsListComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please click on a report...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var reportsListComponent =
    /*#__PURE__*/
    function () {
      function reportsListComponent(reportservice) {
        _classCallCheck(this, reportsListComponent);

        this.reportservice = reportservice;
        this.currentreport = null;
        this.currentIndex = -1;
        this.title = '';
      }

      _createClass(reportsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.retrievereports();
        }
      }, {
        key: "retrievereports",
        value: function retrievereports() {
          var _this7 = this;

          this.reportservice.getAll().subscribe(function (data) {
            _this7.reports = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          this.retrievereports();
          this.currentreport = null;
          this.currentIndex = -1;
        }
      }, {
        key: "setActivereport",
        value: function setActivereport(report, index) {
          this.currentreport = report;
          this.currentIndex = index;
        }
      }, {
        key: "removeAllreports",
        value: function removeAllreports() {
          var _this8 = this;

          this.reportservice.deleteAll().subscribe(function (response) {
            console.log(response);

            _this8.refreshList();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "searchTitle",
        value: function searchTitle() {
          var _this9 = this;

          this.reportservice.findByTitle(this.title).subscribe(function (data) {
            _this9.reports = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return reportsListComponent;
    }();

    reportsListComponent.ɵfac = function reportsListComponent_Factory(t) {
      return new (t || reportsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["reportservice"]));
    };

    reportsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: reportsListComponent,
      selectors: [["app-reports-list"]],
      decls: 17,
      vars: 4,
      consts: [[1, "list", "row"], [1, "col-md-8"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search by title", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "col-md-6"], [1, "list-group"], ["class", "list-group-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "m-3", "btn", "btn-sm", "btn-danger", 3, "click"], [4, "ngIf"], [1, "list-group-item", 3, "click"], [1, "badge", "badge-warning", 3, "routerLink"]],
      template: function reportsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function reportsListComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function reportsListComponent_Template_button_click_5_listener($event) {
            return ctx.searchTitle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "reports List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, reportsListComponent_li_11_Template, 2, 3, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function reportsListComponent_Template_button_click_12_listener($event) {
            return ctx.removeAllreports();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Remove All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, reportsListComponent_div_15_Template, 20, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, reportsListComponent_div_16_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reports);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentreport);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentreport);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".list[_ngcontent-%COMP%] {\n  text-align: left;\n  max-width: 750px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jb21wb25lbnRzL3JlcG9ydC1saXN0L3JlcG9ydC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAvcGFnZXMvY29tcG9uZW50cy9yZXBvcnQtbGlzdC9yZXBvcnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](reportsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reports-list',
          templateUrl: './report-list.component.html',
          styleUrls: ['./report-list.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["reportservice"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var PagesComponent =
    /*#__PURE__*/
    function () {
      function PagesComponent() {
        _classCallCheck(this, PagesComponent);
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagesComponent;
    }();

    PagesComponent.ɵfac = function PagesComponent_Factory(t) {
      return new (t || PagesComponent)();
    };

    PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagesComponent,
      selectors: [["app-pages"]],
      decls: 3,
      vars: 0,
      template: function PagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pages',
          templateUrl: './pages.component.html',
          styleUrls: ['./pages.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/template/blank-template.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/template/blank-template.component.ts ***!
    \************************************************************/

  /*! exports provided: BlankTemplateComponent */

  /***/
  function srcAppPagesTemplateBlankTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankTemplateComponent", function () {
      return BlankTemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BlankTemplateComponent =
    /*#__PURE__*/
    function () {
      function BlankTemplateComponent() {
        _classCallCheck(this, BlankTemplateComponent);
      }

      _createClass(BlankTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlankTemplateComponent;
    }();

    BlankTemplateComponent.ɵfac = function BlankTemplateComponent_Factory(t) {
      return new (t || BlankTemplateComponent)();
    };

    BlankTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlankTemplateComponent,
      selectors: [["app-blank-template"]],
      decls: 2,
      vars: 0,
      template: function BlankTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blank-template',
          templateUrl: './blank-template.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/template/left-nav-template.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/template/left-nav-template.component.ts ***!
    \***************************************************************/

  /*! exports provided: LeftNavTemplateComponent */

  /***/
  function srcAppPagesTemplateLeftNavTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftNavTemplateComponent", function () {
      return LeftNavTemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/navigation/navigation.component */
    "./src/app/shared/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LeftNavTemplateComponent =
    /*#__PURE__*/
    function () {
      function LeftNavTemplateComponent() {
        _classCallCheck(this, LeftNavTemplateComponent);
      }

      _createClass(LeftNavTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeftNavTemplateComponent;
    }();

    LeftNavTemplateComponent.ɵfac = function LeftNavTemplateComponent_Factory(t) {
      return new (t || LeftNavTemplateComponent)();
    };

    LeftNavTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeftNavTemplateComponent,
      selectors: [["app-left-nav-template"]],
      decls: 3,
      vars: 0,
      template: function LeftNavTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftNavTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-left-nav-template',
          templateUrl: './left-nav-template.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/auth/auth-guard.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/auth/auth-guard.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppSharedAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth/auth.service.ts");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(authService) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return this.authService.isAuthenticated();
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/auth/auth.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/auth/auth.service.ts ***!
    \*********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/http.service */
    "./src/app/shared/services/http.service.ts"); //const transactions = require('../../../reports');


    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(_http, _router, _httpService) {
        _classCallCheck(this, AuthService);

        this._http = _http;
        this._router = _router;
        this._httpService = _httpService;
      }

      _createClass(AuthService, [{
        key: "signupUser",
        value: function signupUser(body) {
          return this._httpService.post('/signup', body);
        }
      }, {
        key: "signinUser",
        value: function signinUser(username, password) {
          var body = {
            'username': username,
            'password': password
          };
          return this._httpService.post('/login', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            if (data.response === 'success') {
              if (data && data.data) {
                localStorage.setItem('token', data.data);
              }

              return data;
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Internal server error');
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var isLoggedIn = localStorage.getItem('token');
          return isLoggedIn ? true : false;
        }
      }, {
        key: "logout",
        value: function logout() {
          if (this.isLoggedIn()) {
            localStorage.removeItem('token');
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Authorization', 'bearer ' + this.getToken()).set('Content-Type', 'application/json')
            }; // return this._http.get(
            //     this.serverBase + '/auth/logout',
            //     options
            // ).map(response => {
            //     if (response) {
            //         return response;
            //     }
            // }).catch(this._errorHandler);
          }

          localStorage.removeItem('token');
          this.token = null;
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          var userToken = this.getToken();

          if (userToken) {
            var payload = userToken.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload;
          }

          return null;
        }
      }, {
        key: "getRole",
        value: function getRole() {
          var userInfo = this.getUserInfo();

          if (userInfo) {
            return userInfo['role'] || '';
          } else {
            return null;
          }
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "getRprt",
        value: function getRprt() {
          var userToken = this.getToken();

          if (userToken) {
            var payload = userToken.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload;
          }

          return null;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          if (localStorage.getItem('token')) {
            return true;
          }

          this._router.navigate(['/user/login']);

          return false;
        }
      }, {
        key: "_errorHandler",
        value: function _errorHandler(error) {
          console.log(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Internal server error');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 7,
      vars: 0,
      consts: [[1, "navbar", "navbar-dark", "bg-dark", "mt-5", "fixed-bottom"], [1, "navbar-expand", "m-auto", "navbar-text"], [1, "fa", "fa-heart"], ["href", "https://www.linkedin.com/in/rhtvma/"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Made with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AcrobatGoat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fa-heart[_ngcontent-%COMP%] {\n    color: hotpink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJhcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1oZWFydCB7XG4gICAgY29sb3I6IGhvdHBpbms7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(_authService, _router) {
        _classCallCheck(this, HeaderComponent);

        this._authService = _authService;
        this._router = _router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userName();
        }
      }, {
        key: "userName",
        value: function userName() {
          var userName = this._authService.getUserInfo();

          return userName['first_name'];
        }
      }, {
        key: "logout",
        value: function logout() {
          this._authService.logout();

          this._router.navigate(['/user/login']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 35,
      vars: 1,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/home", 1, "navbar-brand"], [1, "navbar-expand", "mr-auto"], [1, "navbar-nav"], ["routerLink", "/pages/home", 1, "nav-item", "nav-link", "active"], ["routerLink", "/pages/report", 1, "nav-item", "nav-link"], ["routerLink", "/pages/about", 1, "nav-item", "nav-link"], ["routerLink", "/pages/contact", 1, "nav-item", "nav-link"], [1, "navbar-expand", "ml-auto", "navbar-nav"], ["href", "https://github.com/rhtvma", "target", "_blank", 1, "nav-item", "nav-link"], [1, "fa", "fa-github"], ["href", "https://twitter.com/rhtvma", "target", "_blank", 1, "nav-item", "nav-link"], [1, "fa", "fa-twitter"], [1, "pull-right"], [1, "nav", "pull-right"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], ["href", "/help/support"], [1, "icon-envelope"], [1, "divider"], [3, "click"], [1, "icon-off"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ETT--ETL Testing Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Resource&TaskManagement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "b", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Contact Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener($event) {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx.userName(), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".headerwrapper[_ngcontent-%COMP%] {\n  background-color: #1f6b9e;\n  min-height: 60px;\n  width: 100%;\n  z-index: 1000;\n}\n.headerwrapper[_ngcontent-%COMP%]:after {\n  clear: both;\n  display: block;\n  content: \"\";\n}\n.header-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.header-right[_ngcontent-%COMP%] {\n  float: right;\n}\na.btn.btn-social-icon.btn-github[_ngcontent-%COMP%] {\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1YmkvRmluYWxfdmVyc2lvbl9hbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJhcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsdUNBQUE7QUFDQSx1Q0FBQTtBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRko7QURHSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0RSO0FESUE7RUFDSSxXQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6ImFwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKioqKioqKioqKiAzLiBIRUFERVIgU1RZTEVTICoqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5oZWFkZXJ3cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY2YjllO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICB9XG59XG4uaGVhZGVyLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbmEuYnRuLmJ0bi1zb2NpYWwtaWNvbi5idG4tZ2l0aHViIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIG1hcmdpbjogMTBweDtcbn0iLCIvKioqKioqKioqKiAzLiBIRUFERVIgU1RZTEVTICoqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uaGVhZGVyd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjZiOWU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLmhlYWRlcndyYXBwZXI6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5oZWFkZXItbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5hLmJ0bi5idG4tc29jaWFsLWljb24uYnRuLWdpdGh1YiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/navigation/navigation.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/navigation/navigation.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppSharedNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["dashboard"];
    };

    var _c1 = function _c1() {
      return ["active"];
    };

    var _c2 = function _c2() {
      return ["ui-elements"];
    };

    var _c3 = function _c3() {
      return ["forms"];
    };

    var _c4 = function _c4() {
      return ["tables"];
    };

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 36,
      vars: 16,
      consts: [[1, "sidebar", "hidden-sm-down"], ["id", "side-menu", 1, "nav", "in"], [1, "sidebar-search", "hidden-sm", "hidden-md", "hidden-lg"], [1, "input-group", "custom-search-form"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default"], [1, "fa", "fa-search"], [1, "user-pro"], ["href", "#", 1, "text-center"], [1, "profile-img"], ["src", "assets/images/profile.jpg"], [1, "text-center"], [1, "waves-effect", 3, "routerLink", "routerLinkActive"], [1, "fa", "fa-home"], [1, "hide-menu"], [3, "routerLink", "routerLinkActive"], [1, "fa", "fa-edit"], [1, "fa", "fa-bars"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Subir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Senior Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "UI Elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc2hhcmVkL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/http.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/http.service.ts ***!
    \*************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppSharedServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(_http, _spinner) {
        _classCallCheck(this, HttpService);

        this._http = _http;
        this._spinner = _spinner;
        this.serverBase = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBase;
      }

      _createClass(HttpService, [{
        key: "get",
        value: function get(url) {
          this._spinner.show();

          return this._http.get(this.serverBase + url, {});
        }
      }, {
        key: "post",
        value: function post(url, data) {
          this._spinner.show();

          var apiEndpoint = "".concat(this.serverBase).concat(url);
          console.log("Reaching endpoint: ".concat(apiEndpoint));
          return this._http.post(apiEndpoint, data, {});
        }
      }, {
        key: "put",
        value: function put(url, data) {
          this._spinner.show();

          var apiEndpoint = "".concat(this.serverBase).concat(url);
          console.log("Reaching endpoint: ".concat(apiEndpoint));
          return this._http.put(apiEndpoint, data, {});
        }
      }, {
        key: "delete",
        value: function _delete(url, id) {
          this._spinner.show(); // let token = localStorage.getItem('token');
          // const headers = new HttpHeaders()
          //     .set('Authorization', 'bearer ' + token)
          //     .set('Content-Type', 'application/json');


          var apiEndpoint = "".concat(this.serverBase).concat(url);
          console.log("Reaching endpoint: ".concat(apiEndpoint));
          var options = {// headers: headers
          };
          return this._http.delete(apiEndpoint + "/" + id, options);
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/report.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/report.service.ts ***!
    \***************************************************/

  /*! exports provided: reportservice */

  /***/
  function srcAppSharedServicesReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reportservice", function () {
      return reportservice;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var baseUrl = 'http://localhost:3001/api/reports';

    var reportservice =
    /*#__PURE__*/
    function () {
      function reportservice(http) {
        _classCallCheck(this, reportservice);

        this.http = http;
      }

      _createClass(reportservice, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(baseUrl);
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.get("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.http.post(baseUrl, data);
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return this.http.put("".concat(baseUrl, "/").concat(id), data);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.http.delete(baseUrl);
        }
      }, {
        key: "findByTitle",
        value: function findByTitle(title) {
          return this.http.get("".concat(baseUrl, "?title=").concat(title));
        }
      }]);

      return reportservice;
    }();

    reportservice.ɵfac = function reportservice_Factory(t) {
      return new (t || reportservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    reportservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: reportservice,
      factory: reportservice.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](reportservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/token-interceptor.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/token-interceptor.service.ts ***!
    \**************************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppSharedServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // To make Intercepter Work We need to Import the HttpClientModule into our application in app


    var TokenInterceptorService =
    /*#__PURE__*/
    function () {
      function TokenInterceptorService() {
        _classCallCheck(this, TokenInterceptorService);
      } //function which will be called for all http calls


      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          //how to update the request Parameters
          var token = localStorage.getItem('token');
          var updatedRequest = request.clone({
            headers: request.headers.set('Authorization', 'bearer ' + token).set('Content-Type', 'application/json')
          }); //logging the updated Parameters to browser's console

          console.log("Before making api call : ", updatedRequest);
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
            //logging the http response to browser's console in case of a success
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
              console.log("api call success :", event);
            }
          }, function (error) {
            //logging the http response to browser's console in case of a failuer
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
              console.log("api call error :", event);
            }
          }));
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
      return new (t || TokenInterceptorService)();
    };

    TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptorService,
      factory: TokenInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      serverBase: "http://localhost:3001",
      inSecureApi: "/api",
      secureApi: "/auth",
      endpoints: {
        users: "/getAllUsers",
        admin: "/admin",
        pager: "/pager"
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/subi/Final_version_angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map