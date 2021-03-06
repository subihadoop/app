function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"], {
  /***/
  "./src/app/pages/page-not-found/page-not-found-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/page-not-found/page-not-found-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundRoutingModule */

  /***/
  function srcAppPagesPageNotFoundPageNotFoundRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function () {
      return PageNotFoundRoutingModule;
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


    var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-not-found.component */
    "./src/app/pages/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }];

    var PageNotFoundRoutingModule = function PageNotFoundRoutingModule() {
      _classCallCheck(this, PageNotFoundRoutingModule);
    };

    PageNotFoundRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PageNotFoundRoutingModule
    });
    PageNotFoundRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PageNotFoundRoutingModule_Factory(t) {
        return new (t || PageNotFoundRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PageNotFoundRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageNotFoundRoutingModule, [{
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
  "./src/app/pages/page-not-found/page-not-found.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
    \******************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPagesPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.??fac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "page-not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pages-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
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


    var _page_not_found_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-not-found/page-not-found-routing.module */
    "./src/app/pages/page-not-found/page-not-found-routing.module.ts");
    /* harmony import */


    var _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./template/left-nav-template.component */
    "./src/app/pages/template/left-nav-template.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'pages',
      pathMatch: 'full'
    }, {
      path: '',
      component: _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_3__["LeftNavTemplateComponent"],
      data: {
        title: 'Angular Admin Template'
      },
      children: [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-dashboard-module */
          [__webpack_require__.e("default~dashboard-dashboard-module~ui-elements-ui-elements-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        },
        data: {
          title: 'Dashboard Page'
        }
      }, {
        path: 'ui-elements',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | ui-elements-ui-elements-module */
          [__webpack_require__.e("default~dashboard-dashboard-module~ui-elements-ui-elements-module"), __webpack_require__.e("ui-elements-ui-elements-module")]).then(__webpack_require__.bind(null,
          /*! ./ui-elements/ui-elements.module */
          "./src/app/pages/ui-elements/ui-elements.module.ts")).then(function (m) {
            return m.UiElementsModule;
          });
        },
        data: {
          title: 'UI Elements'
        }
      }, {
        path: 'forms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forms-forms-module */
          "forms-forms-module").then(__webpack_require__.bind(null,
          /*! ./forms/forms.module */
          "./src/app/pages/forms/forms.module.ts")).then(function (m) {
            return m.FormsModule;
          });
        },
        data: {
          title: 'Form Page'
        }
      }, {
        path: 'tables',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tables-tables-module */
          "tables-tables-module").then(__webpack_require__.bind(null,
          /*! ./tables/tables.module */
          "./src/app/pages/tables/tables.module.ts")).then(function (m) {
            return m.TablesModule;
          });
        }
      }]
    }, {
      path: 'tables',
      component: _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_3__["LeftNavTemplateComponent"],
      data: {
        title: 'Tables'
      },
      children: [{
        path: 'tables',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tables-tables-module */
          "tables-tables-module").then(__webpack_require__.bind(null,
          /*! ./tables/tables.module */
          "./src/app/pages/tables/tables.module.ts")).then(function (m) {
            return m.TablesModule;
          });
        }
      }]
    }, {
      path: '',
      component: _page_not_found_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundRoutingModule"]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PagesRoutingModule
    });
    PagesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PagesRoutingModule_Factory(t) {
        return new (t || PagesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PagesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagesRoutingModule, [{
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
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/pages/pages-routing.module.ts");
    /* harmony import */


    var app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/app.component */
    "./src/app/app.component.ts");

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PagesModule
    });
    PagesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PagesModule, {
        declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-pages-module-es5.js.map