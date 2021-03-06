function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"], {
  /***/
  "./src/app/pages/forms/forms-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/forms/forms-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FormsRoutingModule */

  /***/
  function srcAppPagesFormsFormsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function () {
      return FormsRoutingModule;
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


    var _forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./forms.component */
    "./src/app/pages/forms/forms.component.ts");

    var routes = [{
      path: '',
      component: _forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"]
    }];

    var FormsRoutingModule = function FormsRoutingModule() {
      _classCallCheck(this, FormsRoutingModule);
    };

    FormsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: FormsRoutingModule
    });
    FormsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function FormsRoutingModule_Factory(t) {
        return new (t || FormsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FormsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormsRoutingModule, [{
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
  "./src/app/pages/forms/forms.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/forms/forms.component.ts ***!
    \************************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppPagesFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormsComponent =
    /*#__PURE__*/
    function () {
      function FormsComponent() {
        _classCallCheck(this, FormsComponent);
      }

      _createClass(FormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormsComponent;
    }();

    FormsComponent.??fac = function FormsComponent_Factory(t) {
      return new (t || FormsComponent)();
    };

    FormsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FormsComponent,
      selectors: [["app-forms"]],
      decls: 293,
      vars: 0,
      consts: [["id", "page-wrapper", 1, ""], [1, "container-fluid"], [1, "row", "row-stat"], [1, "col-sm-12"], [1, "panel", "panel-default"], [1, "panel-heading", "panel-heading-divider"], [1, "panel-subtitle"], [1, "panel-body"], [1, "xs-mt-10", "xs-mb-10"], [1, "row"], [1, "col-md-8"], [1, "form-horizontal"], [1, "form-group"], ["for", "form-control-1", 1, "col-sm-3", "control-label"], [1, "col-sm-9"], ["id", "form-control-1", "type", "text", 1, "form-control"], ["for", "form-control-2", 1, "col-sm-3", "control-label"], ["id", "form-control-2", "type", "text", 1, "form-control", "input-pill"], ["for", "form-control-4", 1, "col-sm-3", "control-label"], ["id", "form-control-4", "type", "password", "value", "password", 1, "form-control"], ["for", "form-control-5", 1, "col-sm-3", "control-label"], ["id", "form-control-5", "type", "email", "placeholder", "Placeholder input text", 1, "form-control"], ["for", "form-control-6", 1, "col-sm-3", "control-label"], ["id", "form-control-6", "type", "text", "placeholder", "Disabled input text", "disabled", "disabled", 1, "form-control"], ["for", "form-control-7", 1, "col-sm-3", "control-label"], ["id", "form-control-7", "type", "email", "value", "Read only input text", "readonly", "readonly", 1, "form-control"], [1, "col-sm-3", "control-label"], [1, "form-control-static"], ["for", "form-control-8", 1, "col-sm-3", "control-label"], ["id", "form-control-8", "rows", "3", 1, "form-control"], ["for", "form-control-9", 1, "col-sm-3", "control-label"], ["id", "form-control-9", 1, "form-control"], ["value", "corporate"], ["value", "creative"], ["value", "ecommerce"], ["value", "mobile"], ["value", "retail"], ["value", "technology"], ["value", "wedding"], ["for", "form-control-10", 1, "col-sm-3", "control-label"], ["id", "form-control-10", "multiple", "multiple", 1, "form-control"], ["value", "c-plus-plus"], ["value", "css"], ["value", "java"], ["value", "javascript"], ["value", "php"], ["value", "python"], ["value", "ruby"], ["for", "form-control-11", 1, "col-sm-3", "control-label"], ["id", "form-control-11", "type", "file", "accept", "image/*", "multiple", "multiple"], [1, "help-block"], [1, "checkbox"], ["type", "checkbox", "name", "signed", "checked", "checked"], [1, "radio"], ["type", "radio", "name", "period", "value", "day"], ["type", "radio", "name", "period", "value", "week", "checked", "checked"], ["type", "radio", "name", "period", "value", "month"], ["for", "form-control-21", 1, "col-sm-3", "control-label"], ["id", "form-control-21", 1, "custom-select"], ["value", "", "selected", "selected"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["for", "form-control-22", 1, "col-sm-3", "control-label"], [1, "input-group"], ["type", "text", "placeholder", "Choose file...", 1, "form-control"], [1, "input-group-btn"], [1, "btn", "btn-primary", "file-upload-btn"], ["type", "file", "name", "file", 1, "file-upload-input"], [1, "icon", "mdi", "mdi-upload"], [1, "custom-controls-stacked"], [1, "custom-control", "custom-control-default", "custom-checkbox"], ["type", "checkbox", "name", "custom", "checked", "checked", 1, "custom-control-input"], [1, "custom-control-indicator"], [1, "custom-control-label"], [1, "custom-control", "custom-control-primary", "custom-checkbox", "active"], [1, "custom-control", "custom-control-success", "custom-checkbox"], [1, "custom-control", "custom-control-info", "custom-checkbox"], [1, "custom-control", "custom-control-warning", "custom-checkbox"], [1, "custom-control", "custom-control-danger", "custom-checkbox"], [1, "custom-control", "custom-control-success", "custom-checkbox", "has-success"], ["type", "checkbox", "name", "validation", 1, "custom-control-input"], [1, "custom-control", "custom-control-warning", "custom-checkbox", "has-warning"], [1, "custom-control", "custom-control-danger", "custom-checkbox", "has-error"], [1, "switches-stacked"], [1, "switch"], ["type", "checkbox", "name", "switches", 1, "s-input"], [1, "s-content"], [1, "s-track"], [1, "s-handle"], [1, "switch", "switch-primary"], ["type", "checkbox", "name", "switches", "checked", "checked", 1, "s-input"], [1, "switch", "switch-success"], [1, "switch", "switch-info"], [1, "switch", "switch-warning"], [1, "switch", "switch-danger"], [1, "custom-control", "custom-control-primary", "custom-radio"], ["type", "radio", "name", "period", "value", "day", 1, "custom-control-input"], ["type", "radio", "name", "period", "value", "week", "checked", "checked", 1, "custom-control-input"], ["type", "radio", "name", "period", "value", "month", 1, "custom-control-input"]],
      template: function FormsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Basic Form Elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "These are the basic form elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Text input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Rounded text input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Password input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Placeholder Input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Disabled Input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Read only input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Static input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "email@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "textarea", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Corporate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Creative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "eCommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Retail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Wedding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Multiple select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "C++");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "PHP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Ruby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "File input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Unlimited number of files can be uploaded to this field. Allowed types: png gif jpg jpeg. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Checkboxes and radios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " Keep me signed in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Day ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " Week ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Custom form element ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Custom form elements with overriding styles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Custom select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Day of the week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Monday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Tuesday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Wednesday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Thursday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Friday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Saturday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Sunday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Custom file inputs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Click the button next to the input field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Custom checkboxes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "label", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](191, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "label", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "label", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "label", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](207, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "label", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Custom checkboxes validation states");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](222, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](223, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "With success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "label", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](227, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](228, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "With warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "label", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](232, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](233, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "With error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "Switches");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "label", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](243, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](245, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](246, "span", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "label", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](248, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](251, "span", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](253, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "span", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](261, "span", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "label", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](266, "span", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "label", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](268, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](271, "span", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "Custom radios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](279, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Day");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](284, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](285, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](289, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forms',
          templateUrl: './forms.component.html',
          styleUrls: ['./forms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/forms/forms.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/forms/forms.module.ts ***!
    \*********************************************/

  /*! exports provided: FormsModule */

  /***/
  function srcAppPagesFormsFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
      return FormsModule;
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


    var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./forms-routing.module */
    "./src/app/pages/forms/forms-routing.module.ts");
    /* harmony import */


    var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forms.component */
    "./src/app/pages/forms/forms.component.ts");

    var FormsModule = function FormsModule() {
      _classCallCheck(this, FormsModule);
    };

    FormsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: FormsModule
    });
    FormsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function FormsModule_Factory(t) {
        return new (t || FormsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FormsModule, {
        declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=forms-forms-module-es5.js.map