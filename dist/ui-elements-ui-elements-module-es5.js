function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-elements-ui-elements-module"], {
  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js ***!
    \***************************************************************************************/

  /*! exports provided: AlertComponent, AlertModule, AlertConfig */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__AlertFesm2015NgxBootstrapAlertJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return AlertModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertConfig", function () {
      return AlertConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          return ctx_r2.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    }

    function AlertComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("alert alert-" + ctx_r0.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.classes);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dismissible);
      }
    }

    var _c0 = ["*"];

    var AlertConfig = function AlertConfig() {
      _classCallCheck(this, AlertConfig);

      /**
       * default alert type
       */
      this.type = 'warning';
      /**
       * is alerts are dismissible by default
       */

      this.dismissible = false;
      /**
       * default time before alert will dismiss
       */

      this.dismissOnTimeout = undefined;
    };

    AlertConfig.ɵfac = function AlertConfig_Factory(t) {
      return new (t || AlertConfig)();
    };

    AlertConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AlertConfig,
      factory: AlertConfig.ɵfac
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var AlertComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _config
       * @param {?} changeDetection
       */
      function AlertComponent(_config, changeDetection) {
        var _this = this;

        _classCallCheck(this, AlertComponent);

        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */

        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */

        this.dismissible = false;
        /**
         * Is alert visible
         */

        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */

        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */

        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
          _this.classes = _this.dismissible ? 'alert-dismissible' : '';

          _this.changeDetection.markForCheck();
        });
      }
      /**
       * @return {?}
       */


      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () {
              return _this2.close();
            }, parseInt(
            /** @type {?} */
            this.dismissOnTimeout, 10));
          }
        } // todo: animation ` If the .fade and .in classes are present on the element,
        // the alert will fade out before it is removed`

        /**
         * Closes an alert by removing it from the DOM.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (!this.isOpen) {
            return;
          }

          this.onClose.emit(this);
          this.isOpen = false;
          this.changeDetection.markForCheck();
          this.onClosed.emit(this);
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](AlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["alert"], ["bs-alert"]],
      inputs: {
        type: "type",
        dismissible: "dismissible",
        isOpen: "isOpen",
        dismissOnTimeout: "dismissOnTimeout"
      },
      outputs: {
        onClose: "onClose",
        onClosed: "onClosed"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    AlertComponent.ctorParameters = function () {
      return [{
        type: AlertConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    AlertComponent.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dismissible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dismissOnTimeout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      onClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      onClosed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AlertComponent.prototype, "dismissible", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AlertConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'alert,bs-alert',
          template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: AlertConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dismissible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dismissOnTimeout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AlertModule =
    /*#__PURE__*/
    function () {
      function AlertModule() {
        _classCallCheck(this, AlertModule);
      }

      _createClass(AlertModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: AlertModule,
            providers: [AlertConfig]
          };
        }
      }]);

      return AlertModule;
    }();

    AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AlertModule
    });
    AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AlertModule_Factory(t) {
        return new (t || AlertModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlertModule, {
        declarations: function declarations() {
          return [AlertComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [AlertComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [AlertComponent],
          exports: [AlertComponent],
          entryComponents: [AlertComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-alert.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
    \*************************************************************************************************************/

  /*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__ComponentLoaderFesm2015NgxBootstrapComponentLoaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsComponentRef", function () {
      return BsComponentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLoader", function () {
      return ComponentLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function () {
      return ComponentLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentRef", function () {
      return ContentRef;
    });
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var BsComponentRef = function BsComponentRef() {
      _classCallCheck(this, BsComponentRef);
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */


    var ContentRef =
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(
    /* tslint:disable-next-line: no-any */
    nodes, viewRef,
    /* tslint:disable-next-line: no-any */
    componentRef) {
      _classCallCheck(this, ContentRef);

      this.nodes = nodes;
      this.viewRef = viewRef;
      this.componentRef = componentRef;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var ComponentLoader =
    /*#__PURE__*/
    function () {
      /**
       * Do not use this directly, it should be instanced via
       * `ComponentLoadFactory.attach`
       * \@internal
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _injector
       * @param {?} _componentFactoryResolver
       * @param {?} _ngZone
       * @param {?} _applicationRef
       * @param {?} _posService
       */
      // tslint:disable-next-line
      function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        _classCallCheck(this, ComponentLoader);

        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/

        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
      }
      /**
       * @return {?}
       */


      _createClass(ComponentLoader, [{
        key: "attach",

        /**
         * @param {?} compType
         * @return {?}
         */
        value: function attach(compType) {
          this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
          return this;
        } // todo: add behaviour: to target element, `body`, custom element

        /**
         * @param {?=} container
         * @return {?}
         */

      }, {
        key: "to",
        value: function to(container) {
          this.container = container || this.container;
          return this;
        }
        /**
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "position",
        value: function position(opts) {
          this.attachment = opts.attachment || this.attachment;
          this._elementRef =
          /** @type {?} */
          opts.target || this._elementRef;
          return this;
        }
        /**
         * @param {?} provider
         * @return {?}
         */

      }, {
        key: "provide",
        value: function provide(provider) {
          this._providers.push(provider);

          return this;
        } // todo: appendChild to element or document.querySelector(this.container)

        /**
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._subscribePositioning();

          this._innerComponent = null;

          if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            /** @type {?} */

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
              providers: this._providers,
              parent: this._injector
            });

            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);

            this._applicationRef.attachView(this._componentRef.hostView); // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);


            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);

            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
              this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }

            if (this.container === 'body' && typeof document !== 'undefined') {
              document.querySelector(
              /** @type {?} */
              this.container).appendChild(this._componentRef.location.nativeElement);
            }

            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
              this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            } // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy


            if (this._contentRef.componentRef) {
              this._innerComponent = this._contentRef.componentRef.instance;

              this._contentRef.componentRef.changeDetectorRef.markForCheck();

              this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }

            this._componentRef.changeDetectorRef.markForCheck();

            this._componentRef.changeDetectorRef.detectChanges();

            this.onShown.emit(this._componentRef.instance);
          }

          this._registerOutsideClick();

          return this._componentRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (!this._componentRef) {
            return this;
          }

          this._posService.deletePositionElement(this._componentRef.location);

          this.onBeforeHide.emit(this._componentRef.instance);
          /** @type {?} */

          var componentEl = this._componentRef.location.nativeElement;
          componentEl.parentNode.removeChild(componentEl);

          if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
          }

          this._componentRef.destroy();

          if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
          }

          if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
          }

          this._contentRef = null;
          this._componentRef = null;

          this._removeGlobalListener();

          this.onHidden.emit();
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isShown) {
            this.hide();
            return;
          }

          this.show();
        }
        /**
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.isShown) {
            this.hide();
          }

          this._unsubscribePositioning();

          if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
          }
        }
        /**
         * @param {?} listenOpts
         * @return {?}
         */

      }, {
        key: "listen",
        value: function listen(listenOpts) {
          var _this3 = this;

          this.triggers = listenOpts.triggers || this.triggers;
          this._listenOpts.outsideClick = listenOpts.outsideClick;
          this._listenOpts.outsideEsc = listenOpts.outsideEsc;
          listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
          /** @type {?} */

          var hide = this._listenOpts.hide = function () {
            return listenOpts.hide ? listenOpts.hide() : void _this3.hide();
          };
          /** @type {?} */


          var show = this._listenOpts.show = function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this3.show(registerHide);
            registerHide();
          };
          /** @type {?} */


          var toggle = function toggle(registerHide) {
            _this3.isShown ? hide() : show(registerHide);
          };

          this._unregisterListenersFn = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
          });
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalListener) {
            this._globalListener();

            this._globalListener = null;
          }
        }
        /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */

      }, {
        key: "attachInline",
        value: function attachInline(vRef,
        /* tslint:disable-next-line: no-any*/
        template) {
          this._inlineViewRef = vRef.createEmbeddedView(template);
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_registerOutsideClick",
        value: function _registerOutsideClick() {
          var _this4 = this;

          if (!this._componentRef || !this._componentRef.location) {
            return;
          } // why: should run after first event bubble


          if (this._listenOpts.outsideClick) {
            /** @type {?} */
            var target = this._componentRef.location.nativeElement;
            setTimeout(function () {
              _this4._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__["registerOutsideClick"])(_this4._renderer, {
                targets: [target, _this4._elementRef.nativeElement],
                outsideClick: _this4._listenOpts.outsideClick,
                hide: function hide() {
                  return _this4._listenOpts.hide();
                }
              });
            });
          }

          if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            var _target = this._componentRef.location.nativeElement;
            this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__["registerEscClick"])(this._renderer, {
              targets: [_target, this._elementRef.nativeElement],
              outsideEsc: this._listenOpts.outsideEsc,
              hide: function hide() {
                return _this4._listenOpts.hide();
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getInnerComponent",
        value: function getInnerComponent() {
          return this._innerComponent;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribePositioning",
        value: function _subscribePositioning() {
          var _this5 = this;

          if (this._zoneSubscription || !this.attachment) {
            return;
          }

          this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
            if (!_this5._componentRef) {
              return;
            }

            _this5._posService.position({
              element: _this5._componentRef.location,
              target: _this5._elementRef,
              attachment: _this5.attachment,
              appendToBody: _this5.container === 'body'
            });
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribePositioning",
        value: function _unsubscribePositioning() {
          if (!this._zoneSubscription) {
            return;
          }

          this._zoneSubscription.unsubscribe();

          this._zoneSubscription = null;
        }
        /**
         * @private
         * @param {?} content
         * @param {?=} context
         * @param {?=} initialState
         * @return {?}
         */

      }, {
        key: "_getContentRef",
        value: function _getContentRef(
        /* tslint:disable-next-line: no-any*/
        content,
        /* tslint:disable-next-line: no-any*/
        context,
        /* tslint:disable-next-line: no-any*/
        initialState) {
          if (!content) {
            return new ContentRef([]);
          }

          if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            if (this._viewContainerRef) {
              /** @type {?} */
              var _viewRef = this._viewContainerRef.createEmbeddedView(content, context);

              _viewRef.markForCheck();

              return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */


            var viewRef = content.createEmbeddedView({});

            this._applicationRef.attachView(viewRef);

            return new ContentRef([viewRef.rootNodes], viewRef);
          }

          if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */


            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
              providers: this._providers,
              parent: this._injector
            });
            /** @type {?} */


            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);

            this._applicationRef.attachView(componentRef.hostView);

            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
          }

          return new ContentRef([[this._renderer.createText("".concat(content))]]);
        }
      }, {
        key: "isShown",
        get: function get() {
          if (this._isHiding) {
            return false;
          }

          return !!this._componentRef;
        }
      }]);

      return ComponentLoader;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ComponentLoaderFactory =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _ngZone
       * @param {?} _injector
       * @param {?} _posService
       * @param {?} _applicationRef
       */
      function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        _classCallCheck(this, ComponentLoaderFactory);

        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
      }
      /**
       *
       * @template T
       * @param {?} _elementRef
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @return {?}
       */


      _createClass(ComponentLoaderFactory, [{
        key: "createLoader",
        value: function createLoader(_elementRef, _viewContainerRef, _renderer) {
          return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
        }
      }]);

      return ComponentLoaderFactory;
    }();

    ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) {
      return new (t || ComponentLoaderFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]));
    };

    ComponentLoaderFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ComponentLoaderFactory,
      factory: ComponentLoaderFactory.ɵfac
    });
    /** @nocollapse */

    ComponentLoaderFactory.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ComponentLoaderFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-component-loader.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js ***!
    \*********************************************************************************************/

  /*! exports provided: BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, BsDropdownModule */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__DropdownFesm2015NgxBootstrapDropdownJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function () {
      return BsDropdownDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function () {
      return BsDropdownMenuDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function () {
      return BsDropdownToggleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function () {
      return BsDropdownContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDropdownState", function () {
      return BsDropdownState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function () {
      return BsDropdownConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function () {
      return BsDropdownModule;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/component-loader */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default dropdown configuration
     */


    var _c0 = ["*"];

    var BsDropdownConfig = function BsDropdownConfig() {
      _classCallCheck(this, BsDropdownConfig);

      /**
       * default dropdown auto closing behavior
       */
      this.autoClose = true;
      /**
       * default dropdown auto closing behavior
       */

      this.insideClick = false;
    };

    BsDropdownConfig.ɵfac = function BsDropdownConfig_Factory(t) {
      return new (t || BsDropdownConfig)();
    };

    BsDropdownConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BsDropdownConfig,
      factory: BsDropdownConfig.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BsDropdownConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDropdownState = function BsDropdownState() {
      var _this6 = this;

      _classCallCheck(this, BsDropdownState);

      this.direction = 'down';
      this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.dropdownMenu = new Promise(function (resolve) {
        _this6.resolveDropdownMenu = resolve;
      });
    };

    BsDropdownState.ɵfac = function BsDropdownState_Factory(t) {
      return new (t || BsDropdownState)();
    };

    BsDropdownState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BsDropdownState,
      factory: BsDropdownState.ɵfac
    });
    /** @nocollapse */

    BsDropdownState.ctorParameters = function () {
      return [];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BsDropdownState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDropdownContainerComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _state
       * @param {?} cd
       * @param {?} _renderer
       * @param {?} _element
       */
      function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this7 = this;

        _classCallCheck(this, BsDropdownContainerComponent);

        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
          _this7.isOpen = value;
          /** @type {?} */

          var dropdown = _this7._element.nativeElement.querySelector('.dropdown-menu');

          if (dropdown && !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            _this7._renderer.addClass(dropdown, 'show');

            if (dropdown.classList.contains('dropdown-menu-right')) {
              _this7._renderer.setStyle(dropdown, 'left', 'auto');

              _this7._renderer.setStyle(dropdown, 'right', '0');
            }

            if (_this7.direction === 'up') {
              _this7._renderer.setStyle(dropdown, 'top', 'auto');

              _this7._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
            }
          }

          _this7.cd.markForCheck();

          _this7.cd.detectChanges();
        });
      }
      /**
       * @return {?}
       */


      _createClass(BsDropdownContainerComponent, [{
        key: "_contains",

        /**
         * \@internal
         * @param {?} el
         * @return {?}
         */
        value: function _contains(el) {
          return this._element.nativeElement.contains(el);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subscription.unsubscribe();
        }
      }, {
        key: "direction",
        get: function get() {
          return this._state.direction;
        }
      }]);

      return BsDropdownContainerComponent;
    }();

    BsDropdownContainerComponent.ɵfac = function BsDropdownContainerComponent_Factory(t) {
      return new (t || BsDropdownContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
    };

    BsDropdownContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BsDropdownContainerComponent,
      selectors: [["bs-dropdown-container"]],
      hostAttrs: [2, "display", "block", "position", "absolute"],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 8,
      template: function BsDropdownContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dropup", ctx.direction === "up")("dropdown", ctx.direction === "down")("show", ctx.isOpen)("open", ctx.isOpen);
        }
      },
      directives: function directives() {
        return [BsDropdownDirective];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    BsDropdownContainerComponent.ctorParameters = function () {
      return [{
        type: BsDropdownState
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BsDropdownContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'bs-dropdown-container',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          host: {
            style: 'display:block;position: absolute;'
          },
          template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
        }]
      }], function () {
        return [{
          type: BsDropdownState
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDropdownDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} _viewContainerRef
       * @param {?} _cis
       * @param {?} _config
       * @param {?} _state
       */
      function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        _classCallCheck(this, BsDropdownDirective);

        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state; // todo: move to component loader

        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false; // set initial dropdown state from config

        this._state.autoClose = this._config.autoClose;
        this._state.insideClick = this._config.insideClick; // create dropdown component loader

        this._dropdown = this._cis.createLoader(this._elementRef, this._viewContainerRef, this._renderer).provide({
          provide: BsDropdownState,
          useValue: this._state
        });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
      }
      /**
       * Indicates that dropdown will be closed on item or document click,
       * and after pressing ESC
       * @param {?} value
       * @return {?}
       */


      _createClass(BsDropdownDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this8 = this;

          // fix: seems there are an issue with `routerLinkActive`
          // which result in duplicated call ngOnInit without call to ngOnDestroy
          // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
          if (this._isInited) {
            return;
          }

          this._isInited = true; // attach DOM listeners

          this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function show() {
              return _this8.show();
            }
          }); // toggle visibility on toggle element click


          this._subscriptions.push(this._state.toggleClick.subscribe(function (value) {
            return _this8.toggle(value);
          })); // hide dropdown if set disabled while opened


          this._subscriptions.push(this._state.isDisabledChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (value) {
            return value;
          })).subscribe(function (value) {
            return _this8.hide();
          }));
        }
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this9 = this;

          if (this.isOpen || this.isDisabled) {
            return;
          }

          if (this._showInline) {
            if (!this._inlinedMenu) {
              this._state.dropdownMenu.then(function (dropdownMenu) {
                _this9._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);

                _this9._inlinedMenu = _this9._dropdown._inlineViewRef;

                _this9.addBs4Polyfills();
              }) // swallow errors
              .catch();
            }

            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);

            this._state.isOpenChange.emit(true);

            return;
          }

          this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened

            /** @type {?} */
            var _dropup = _this9.dropup || typeof _this9.dropup !== 'undefined' && _this9.dropup;

            _this9._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */

            var _placement = _this9.placement || (_dropup ? 'top left' : 'bottom left'); // show dropdown


            _this9._dropdown.attach(BsDropdownContainerComponent).to(_this9.container).position({
              attachment: _placement
            }).show({
              content: dropdownMenu.templateRef,
              placement: _placement
            });

            _this9._state.isOpenChange.emit(true);
          }) // swallow error
          .catch();
        }
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (!this.isOpen) {
            return;
          }

          if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
          } else {
            this._dropdown.hide();
          }

          this._state.isOpenChange.emit(false);
        }
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
         * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          if (this.isOpen || !value) {
            return this.hide();
          }

          return this.show();
        }
        /**
         * \@internal
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_contains",
        value: function _contains(event) {
          return this._elementRef.nativeElement.contains(event.target) || this._dropdown.instance && this._dropdown.instance._contains(event.target);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // clean up subscriptions and destroy dropdown
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._subscriptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var sub = _step.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this._dropdown.dispose();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "addBs4Polyfills",
        value: function addBs4Polyfills() {
          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "addShowClass",
        value: function addShowClass() {
          if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "removeShowClass",
        value: function removeShowClass() {
          if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkRightAlignment",
        value: function checkRightAlignment() {
          if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            /** @type {?} */
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');

            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');

            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "addDropupStyles",
        value: function addDropupStyles() {
          if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');

            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');

            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "removeDropupStyles",
        value: function removeDropupStyles() {
          if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');

            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');

            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
          }
        }
      }, {
        key: "autoClose",
        set: function set(value) {
          this._state.autoClose = value;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._state.autoClose;
        }
        /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "insideClick",
        set: function set(value) {
          this._state.insideClick = value;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._state.insideClick;
        }
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isDisabled",
        set: function set(value) {
          this._isDisabled = value;

          this._state.isDisabledChange.emit(value);

          if (value) {
            this.hide();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._isDisabled;
        }
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */

      }, {
        key: "isOpen",
        get: function get() {
          if (this._showInline) {
            return this._isInlineOpen;
          }

          return this._dropdown.isShown;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value) {
            this.show();
          } else {
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isBs4",
        get: function get() {
          return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_showInline",
        get: function get() {
          return !this.container;
        }
      }]);

      return BsDropdownDirective;
    }();

    BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(t) {
      return new (t || BsDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](BsDropdownConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](BsDropdownState));
    };

    BsDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: BsDropdownDirective,
      selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]],
      hostVars: 6,
      hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dropup", ctx.dropup)("open", ctx.isOpen)("show", ctx.isOpen && ctx.isBs4);
        }
      },
      inputs: {
        autoClose: "autoClose",
        insideClick: "insideClick",
        isDisabled: "isDisabled",
        isOpen: "isOpen",
        placement: "placement",
        triggers: "triggers",
        container: "container",
        dropup: "dropup"
      },
      outputs: {
        onShown: "onShown",
        onHidden: "onHidden",
        isOpenChange: "isOpenChange"
      },
      exportAs: ["bs-dropdown"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([BsDropdownState])]
    });
    /** @nocollapse */

    BsDropdownDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
      }, {
        type: BsDropdownConfig
      }, {
        type: BsDropdownState
      }];
    };

    BsDropdownDirective.propDecorators = {
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      triggers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      dropup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      autoClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      insideClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isOpenChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      onShown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      onHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BsDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[bsDropdown],[dropdown]',
          exportAs: 'bs-dropdown',
          providers: [BsDropdownState],
          host: {
            '[class.dropup]': 'dropup',
            '[class.open]': 'isOpen',
            '[class.show]': 'isOpen && isBs4'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
        }, {
          type: BsDropdownConfig
        }, {
          type: BsDropdownState
        }];
      }, {
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        isOpenChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        autoClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        insideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dropup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDropdownMenuDirective = // tslint:disable:no-any

    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
      _classCallCheck(this, BsDropdownMenuDirective);

      _state.resolveDropdownMenu({
        templateRef: _templateRef,
        viewContainer: _viewContainer
      });
    };

    BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) {
      return new (t || BsDropdownMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]));
    };

    BsDropdownMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: BsDropdownMenuDirective,
      selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]],
      exportAs: ["bs-dropdown-menu"]
    });
    /** @nocollapse */

    BsDropdownMenuDirective.ctorParameters = function () {
      return [{
        type: BsDropdownState
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BsDropdownMenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[bsDropdownMenu],[dropdownMenu]',
          exportAs: 'bs-dropdown-menu'
        }]
      }], function () {
        return [{
          type: BsDropdownState
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDropdownToggleDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dropdown
       * @param {?} _element
       * @param {?} _renderer
       * @param {?} _state
       */
      function BsDropdownToggleDirective(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
        var _this10 = this;

        _classCallCheck(this, BsDropdownToggleDirective);

        this._changeDetectorRef = _changeDetectorRef;
        this._dropdown = _dropdown;
        this._element = _element;
        this._renderer = _renderer;
        this._state = _state;
        this.isDisabled = null;
        this._subscriptions = []; // sync is open value with state

        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) {
          _this10.isOpen = value;

          if (value) {
            _this10._documentClickListener = _this10._renderer.listen('document', 'click', function (event) {
              if (_this10._state.autoClose && event.button !== 2 && !_this10._element.nativeElement.contains(event.target) && !(_this10._state.insideClick && _this10._dropdown._contains(event))) {
                _this10._state.toggleClick.emit(false);

                _this10._changeDetectorRef.detectChanges();
              }
            });
            _this10._escKeyUpListener = _this10._renderer.listen(_this10._element.nativeElement, 'keyup.esc', function () {
              if (_this10._state.autoClose) {
                _this10._state.toggleClick.emit(false);

                _this10._changeDetectorRef.detectChanges();
              }
            });
          } else {
            _this10._documentClickListener();

            _this10._escKeyUpListener();
          }
        })); // populate disabled state


        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) {
          return _this10.isDisabled = value || null;
        }));
      }
      /**
       * @return {?}
       */


      _createClass(BsDropdownToggleDirective, [{
        key: "onClick",
        value: function onClick() {
          if (this.isDisabled) {
            return;
          }

          this._state.toggleClick.emit(true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this._subscriptions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var sub = _step2.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }]);

      return BsDropdownToggleDirective;
    }();

    BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) {
      return new (t || BsDropdownToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](BsDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](BsDropdownState));
    };

    BsDropdownToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: BsDropdownToggleDirective,
      selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]],
      hostVars: 3,
      hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BsDropdownToggleDirective_click_HostBindingHandler($event) {
            return ctx.onClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-haspopup", true)("disabled", ctx.isDisabled)("aria-expanded", ctx.isOpen);
        }
      },
      exportAs: ["bs-dropdown-toggle"]
    });
    /** @nocollapse */

    BsDropdownToggleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: BsDropdownDirective
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: BsDropdownState
      }];
    };

    BsDropdownToggleDirective.propDecorators = {
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
        args: ['attr.disabled']
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
        args: ['attr.aria-expanded']
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
        args: ['click', []]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BsDropdownToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[bsDropdownToggle],[dropdownToggle]',
          exportAs: 'bs-dropdown-toggle',
          host: {
            '[attr.aria-haspopup]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: BsDropdownDirective
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: BsDropdownState
        }];
      }, {
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['attr.disabled']
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['attr.aria-expanded']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['click', []]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDropdownModule =
    /*#__PURE__*/
    function () {
      function BsDropdownModule() {
        _classCallCheck(this, BsDropdownModule);
      }

      _createClass(BsDropdownModule, null, [{
        key: "forRoot",
        // tslint:disable-next-line:no-any

        /**
         * @param {?=} config
         * @return {?}
         */
        value: function forRoot(config) {
          return {
            ngModule: BsDropdownModule,
            providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"], BsDropdownState, {
              provide: BsDropdownConfig,
              useValue: config ? config : {
                autoClose: true,
                insideClick: false
              }
            }]
          };
        }
      }]);

      return BsDropdownModule;
    }();

    BsDropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BsDropdownModule
    });
    BsDropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function BsDropdownModule_Factory(t) {
        return new (t || BsDropdownModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BsDropdownModule, {
        declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
        exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BsDropdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
          exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective],
          entryComponents: [BsDropdownContainerComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-dropdown.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
    \*************************************************************************************************/

  /*! exports provided: PagerComponent, PaginationComponent, PaginationModule, PaginationConfig, ɵa, ɵb */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__PaginationFesm2015NgxBootstrapPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagerComponent", function () {
      return PagerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
      return PaginationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
      return PaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationConfig", function () {
      return PaginationConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return PAGER_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return PAGINATION_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Provides default values for Pagination and pager components
     */


    var _c0 = function _c0(a0, a1) {
      return {
        "pull-right": a0,
        "float-right": a1
      };
    };

    function PaginationComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r16.selectPage(1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r11.noPrevious() || ctx_r11.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r11.getText("first"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function PaginationComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r18.selectPage(ctx_r18.page - 1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r12.noPrevious() || ctx_r12.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r12.getText("previous"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function PaginationComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

          var pg_r20 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r21.selectPage(pg_r20.number, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pg_r20 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", pg_r20.active)("disabled", ctx_r13.disabled && !pg_r20.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", pg_r20.text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function PaginationComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r23.selectPage(ctx_r23.page + 1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r14.noNext() || ctx_r14.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r14.getText("next"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function PaginationComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r25.selectPage(ctx_r25.totalPages, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r15.noNext() || ctx_r15.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r15.getText("last"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    var PaginationConfig = function PaginationConfig() {
      _classCallCheck(this, PaginationConfig);

      this.main = {
        maxSize: void 0,
        itemsPerPage: 10,
        boundaryLinks: false,
        directionLinks: true,
        firstText: 'First',
        previousText: 'Previous',
        nextText: 'Next',
        lastText: 'Last',
        pageBtnClass: '',
        rotate: true
      };
      this.pager = {
        itemsPerPage: 15,
        previousText: '« Previous',
        nextText: 'Next »',
        pageBtnClass: '',
        align: true
      };
    };

    PaginationConfig.ɵfac = function PaginationConfig_Factory(t) {
      return new (t || PaginationConfig)();
    };

    PaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PaginationConfig,
      factory: PaginationConfig.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var PAGER_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
        return PagerComponent;
      }),
      multi: true
    };

    var PagerComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       * @param {?} paginationConfig
       * @param {?} changeDetection
       */
      function PagerComponent(elementRef, paginationConfig, changeDetection) {
        _classCallCheck(this, PagerComponent);

        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */

        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */

        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;

        if (!this.config) {
          this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
      }
      /**
       * maximum number of items per page. If value less than 1 will display all items on one page
       * @return {?}
       */


      _createClass(PagerComponent, [{
        key: "configureOptions",

        /**
         * @param {?} config
         * @return {?}
         */
        value: function configureOptions(config) {
          this.config = Object.assign({}, config);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
          } // watch for maxSize


          this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
          this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
          this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
          this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
          this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

          this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
          this.totalPages = this.calculateTotalPages(); // this class

          this.pages = this.getPages(this.page, this.totalPages);
          this.inited = true;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.page = value;
          this.pages = this.getPages(this.page, this.totalPages);
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getText",
        value: function getText(key) {
          // tslint:disable-next-line:no-any
          return (
            /** @type {?} */
            this["".concat(key, "Text")] ||
            /** @type {?} */
            this.config["".concat(key, "Text")]
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "noPrevious",
        value: function noPrevious() {
          return this.page === 1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "noNext",
        value: function noNext() {
          return this.page === this.totalPages;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} page
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "selectPage",
        value: function selectPage(page, event) {
          if (event) {
            event.preventDefault();
          }

          if (!this.disabled) {
            if (event && event.target) {
              // tslint:disable-next-line:no-any

              /** @type {?} */
              var target = event.target;
              target.blur();
            }

            this.writeValue(page);
            this.onChange(this.page);
          }
        } // Create page object used in template

        /**
         * @protected
         * @param {?} num
         * @param {?} text
         * @param {?} active
         * @return {?}
         */

      }, {
        key: "makePage",
        value: function makePage(num, text, active) {
          return {
            text: text,
            number: num,
            active: active
          };
        }
        /**
         * @protected
         * @param {?} currentPage
         * @param {?} totalPages
         * @return {?}
         */

      }, {
        key: "getPages",
        value: function getPages(currentPage, totalPages) {
          /** @type {?} */
          var pages = []; // Default page limits

          /** @type {?} */

          var startPage = 1;
          /** @type {?} */

          var endPage = totalPages;
          /** @type {?} */

          var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

          if (isMaxSized) {
            if (this.rotate) {
              // Current page is displayed in the middle of the visible ones
              startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
              endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - this.maxSize + 1;
              }
            } else {
              // Visible pages are paginated with maxSize
              startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

              endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
          } // Add page number links


          for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
          } // Add links to move between page sets


          if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
              /** @type {?} */
              var previousPageSet = this.makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }

            if (endPage < totalPages) {
              /** @type {?} */
              var nextPageSet = this.makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
          }

          return pages;
        } // base class

        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "calculateTotalPages",
        value: function calculateTotalPages() {
          /** @type {?} */
          var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
          return Math.max(totalPages || 0, 1);
        }
      }, {
        key: "itemsPerPage",
        get: function get() {
          return this._itemsPerPage;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._itemsPerPage = v;
          this.totalPages = this.calculateTotalPages();
        }
        /**
         * total number of items in all pages
         * @return {?}
         */

      }, {
        key: "totalItems",
        get: function get() {
          return this._totalItems;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._totalItems = v;
          this.totalPages = this.calculateTotalPages();
        }
        /**
         * @return {?}
         */

      }, {
        key: "totalPages",
        get: function get() {
          return this._totalPages;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._totalPages = v;
          this.numPages.emit(v);

          if (this.inited) {
            this.selectPage(this.page);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "page",
        set: function set(value) {
          /** @type {?} */
          var _previous = this._page;
          this._page = value > this.totalPages ? this.totalPages : value || 1;
          this.changeDetection.markForCheck();

          if (_previous === this._page || typeof _previous === 'undefined') {
            return;
          }

          this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
          });
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._page;
        }
      }]);

      return PagerComponent;
    }();

    PagerComponent.ɵfac = function PagerComponent_Factory(t) {
      return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
    };

    PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PagerComponent,
      selectors: [["pager"]],
      inputs: {
        itemsPerPage: "itemsPerPage",
        totalItems: "totalItems",
        maxSize: "maxSize",
        rotate: "rotate",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        pageBtnClass: "pageBtnClass",
        align: "align",
        firstText: "firstText",
        previousText: "previousText",
        nextText: "nextText",
        lastText: "lastText",
        disabled: "disabled"
      },
      outputs: {
        numPages: "numPages",
        pageChanged: "pageChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])],
      decls: 7,
      vars: 24,
      consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]],
      template: function PagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) {
            return ctx.selectPage(ctx.page - 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) {
            return ctx.selectPage(ctx.page + 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.pageBtnClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getText("previous"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.pageBtnClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](21, _c0, ctx.align, ctx.align));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getText("next"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });
    /** @nocollapse */

    PagerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: PaginationConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    PagerComponent.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      maxSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      boundaryLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      directionLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      firstText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      previousText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nextText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      lastText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      rotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      pageBtnClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      numPages: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      pageChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      itemsPerPage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      totalItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'pager',
          template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
          providers: [PAGER_CONTROL_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      }, {
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var PAGINATION_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
        return PaginationComponent;
      }),
      multi: true
    };

    var PaginationComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       * @param {?} paginationConfig
       * @param {?} changeDetection
       */
      function PaginationComponent(elementRef, paginationConfig, changeDetection) {
        _classCallCheck(this, PaginationComponent);

        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */

        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */

        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;

        if (!this.config) {
          this.configureOptions(paginationConfig.main);
        }
      }
      /**
       * maximum number of items per page. If value less than 1 will display all items on one page
       * @return {?}
       */


      _createClass(PaginationComponent, [{
        key: "configureOptions",

        /**
         * @param {?} config
         * @return {?}
         */
        value: function configureOptions(config) {
          this.config = Object.assign({}, config);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
          } // watch for maxSize


          this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
          this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
          this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
          this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
          this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

          this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
          this.totalPages = this.calculateTotalPages(); // this class

          this.pages = this.getPages(this.page, this.totalPages);
          this.inited = true;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.page = value;
          this.pages = this.getPages(this.page, this.totalPages);
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getText",
        value: function getText(key) {
          // tslint:disable-next-line:no-any
          return (
            /** @type {?} */
            this["".concat(key, "Text")] ||
            /** @type {?} */
            this.config["".concat(key, "Text")]
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "noPrevious",
        value: function noPrevious() {
          return this.page === 1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "noNext",
        value: function noNext() {
          return this.page === this.totalPages;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} page
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "selectPage",
        value: function selectPage(page, event) {
          if (event) {
            event.preventDefault();
          }

          if (!this.disabled) {
            if (event && event.target) {
              // tslint:disable-next-line:no-any

              /** @type {?} */
              var target = event.target;
              target.blur();
            }

            this.writeValue(page);
            this.onChange(this.page);
          }
        } // Create page object used in template

        /**
         * @protected
         * @param {?} num
         * @param {?} text
         * @param {?} active
         * @return {?}
         */

      }, {
        key: "makePage",
        value: function makePage(num, text, active) {
          return {
            text: text,
            number: num,
            active: active
          };
        }
        /**
         * @protected
         * @param {?} currentPage
         * @param {?} totalPages
         * @return {?}
         */

      }, {
        key: "getPages",
        value: function getPages(currentPage, totalPages) {
          /** @type {?} */
          var pages = []; // Default page limits

          /** @type {?} */

          var startPage = 1;
          /** @type {?} */

          var endPage = totalPages;
          /** @type {?} */

          var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

          if (isMaxSized) {
            if (this.rotate) {
              // Current page is displayed in the middle of the visible ones
              startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
              endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - this.maxSize + 1;
              }
            } else {
              // Visible pages are paginated with maxSize
              startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

              endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
          } // Add page number links


          for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
          } // Add links to move between page sets


          if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
              /** @type {?} */
              var previousPageSet = this.makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }

            if (endPage < totalPages) {
              /** @type {?} */
              var nextPageSet = this.makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
          }

          return pages;
        } // base class

        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "calculateTotalPages",
        value: function calculateTotalPages() {
          /** @type {?} */
          var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
          return Math.max(totalPages || 0, 1);
        }
      }, {
        key: "itemsPerPage",
        get: function get() {
          return this._itemsPerPage;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._itemsPerPage = v;
          this.totalPages = this.calculateTotalPages();
        }
        /**
         * total number of items in all pages
         * @return {?}
         */

      }, {
        key: "totalItems",
        get: function get() {
          return this._totalItems;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._totalItems = v;
          this.totalPages = this.calculateTotalPages();
        }
        /**
         * @return {?}
         */

      }, {
        key: "totalPages",
        get: function get() {
          return this._totalPages;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._totalPages = v;
          this.numPages.emit(v);

          if (this.inited) {
            this.selectPage(this.page);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "page",
        set: function set(value) {
          /** @type {?} */
          var _previous = this._page;
          this._page = value > this.totalPages ? this.totalPages : value || 1;
          this.changeDetection.markForCheck();

          if (_previous === this._page || typeof _previous === 'undefined') {
            return;
          }

          this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
          });
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._page;
        }
      }]);

      return PaginationComponent;
    }();

    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
      return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
    };

    PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PaginationComponent,
      selectors: [["pagination"]],
      inputs: {
        itemsPerPage: "itemsPerPage",
        totalItems: "totalItems",
        maxSize: "maxSize",
        rotate: "rotate",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        pageBtnClass: "pageBtnClass",
        align: "align",
        firstText: "firstText",
        previousText: "previousText",
        nextText: "nextText",
        lastText: "lastText",
        disabled: "disabled"
      },
      outputs: {
        numPages: "numPages",
        pageChanged: "pageChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])],
      decls: 6,
      vars: 6,
      consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "innerHTML", "click"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 2, 3, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 2, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 2, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 2, 3, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 2, 3, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.directionLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.directionLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /** @nocollapse */

    PaginationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: PaginationConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    PaginationComponent.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      maxSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      boundaryLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      directionLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      firstText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      previousText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nextText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      lastText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      rotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      pageBtnClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      numPages: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      pageChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      itemsPerPage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      totalItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'pagination',
          template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
          providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      }, {
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PaginationModule =
    /*#__PURE__*/
    function () {
      function PaginationModule() {
        _classCallCheck(this, PaginationModule);
      }

      _createClass(PaginationModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: PaginationModule,
            providers: [PaginationConfig]
          };
        }
      }]);

      return PaginationModule;
    }();

    PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PaginationModule
    });
    PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function PaginationModule_Factory(t) {
        return new (t || PaginationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaginationModule, {
        declarations: function declarations() {
          return [PagerComponent, PaginationComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [PagerComponent, PaginationComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [PagerComponent, PaginationComponent],
          exports: [PagerComponent, PaginationComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-pagination.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
    \***************************************************************************************************/

  /*! exports provided: positionElements, Positioning, PositioningService */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__PositioningFesm2015NgxBootstrapPositioningJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return positionElements;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Positioning", function () {
      return Positioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositioningService", function () {
      return PositioningService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get CSS computed property of the given element
     * @param {?} element
     * @param {?=} property
     * @return {?}
     */


    function getStyleComputedProperty(element, property) {
      if (element.nodeType !== 1) {
        return [];
      } // NOTE: 1 DOM access here

      /** @type {?} */


      var window = element.ownerDocument.defaultView;
      /** @type {?} */

      var css = window.getComputedStyle(element, null);
      return property ? css[
      /** @type {?} */
      property] : css;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns the parentNode or the host of the element
     * @param {?} element
     * @return {?}
     */


    function getParentNode(element) {
      if (element.nodeName === 'HTML') {
        return element;
      }

      return element.parentNode || element.host;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getScrollParent(element) {
      // Return body, `getScroll` will take care to get the correct `scrollTop` from it
      if (!element) {
        return document.body;
      }

      switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
          return element.ownerDocument.body;

        case '#document':
          return element.body;

        default:
      } // Firefox want us to check `-x` and `-y` variations as well


      var _getStyleComputedProp = getStyleComputedProperty(element),
          overflow = _getStyleComputedProp.overflow,
          overflowX = _getStyleComputedProp.overflowX,
          overflowY = _getStyleComputedProp.overflowY;

      if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
      }

      return getScrollParent(getParentNode(element));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var isIE11 = isBrowser && !!(
    /** @type {?} */
    window.MSInputMethodContext &&
    /** @type {?} */
    document.documentMode);
    /** @type {?} */

    var isIE10 = isBrowser && !!(
    /** @type {?} */
    window.MSInputMethodContext && /MSIE 10/.test(
    /** @type {?} */
    navigator.userAgent));
    /**
     * @param {?=} version
     * @return {?}
     */

    function isIE(version) {
      if (version === 11) {
        return isIE11;
      }

      if (version === 10) {
        return isIE10;
      }

      return isIE11 || isIE10;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getOffsetParent(element) {
      if (!element) {
        return document.documentElement;
      }
      /** @type {?} */


      var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

      /** @type {?} */

      var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

      /** @type {?} */

      var sibling;

      while (offsetParent === noOffsetParent && element.nextElementSibling && element.nodeName !== 'BODY') {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
      }
      /** @type {?} */


      var nodeName = offsetParent && offsetParent.nodeName;

      if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
      } // .offsetParent will return the closest TH, TD or TABLE in case
      // no offsetParent is present, I hate this job...


      if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
      }

      return offsetParent;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function isOffsetContainer(element) {
      var nodeName = element.nodeName;

      if (nodeName === 'BODY') {
        return false;
      }

      return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @param {?} node
     * @return {?}
     */


    function getRoot(node) {
      if (node.parentNode !== null) {
        return getRoot(node.parentNode);
      }

      return node;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element1
     * @param {?} element2
     * @return {?}
     */


    function findCommonOffsetParent(element1, element2) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
      } // Here we make sure to give as "start" the element that comes first in the DOM

      /* tslint:disable-next-line: no-bitwise */

      /** @type {?} */


      var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
      /** @type {?} */

      var start = order ? element1 : element2;
      /** @type {?} */

      var end = order ? element2 : element1; // Get common ancestor container

      /** @type {?} */

      var range = document.createRange();
      range.setStart(start, 0);
      range.setEnd(end, 0);
      var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

      if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
          return commonAncestorContainer;
        }

        return getOffsetParent(commonAncestorContainer);
      } // one of the nodes is inside shadowDOM, find which one

      /** @type {?} */


      var element1root = getRoot(element1);

      if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
      } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to detect borders of a given element
     */

    /**
     * @param {?} styles
     * @param {?} axis
     * @return {?}
     */


    function getBordersSize(styles, axis) {
      /** @type {?} */
      var sideA = axis === 'x' ? 'Left' : 'Top';
      /** @type {?} */

      var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
      return parseFloat(styles[
      /** @type {?} */
      "border".concat(sideA, "Width")]) + parseFloat(styles[
      /** @type {?} */
      "border".concat(sideB, "Width")]);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} axis
     * @param {?} body
     * @param {?} html
     * @param {?} computedStyle
     * @return {?}
     */


    function getSize(axis, body, html, computedStyle) {
      return Math.max(
      /** @type {?} */
      body["offset".concat(axis)],
      /** @type {?} */
      body["scroll".concat(axis)],
      /** @type {?} */
      html["client".concat(axis)],
      /** @type {?} */
      html["offset".concat(axis)],
      /** @type {?} */
      html["scroll".concat(axis)], isIE(10) ? parseInt(
      /** @type {?} */
      html["offset".concat(axis)], 10) + parseInt(computedStyle[
      /** @type {?} */
      "margin".concat(axis === 'Height' ? 'Top' : 'Left')], 10) + parseInt(computedStyle[
      /** @type {?} */
      "margin".concat(axis === 'Height' ? 'Bottom' : 'Right')], 10) : 0);
    }
    /**
     * @param {?} document
     * @return {?}
     */


    function getWindowSizes(document) {
      /** @type {?} */
      var body = document.body;
      /** @type {?} */

      var html = document.documentElement;
      /** @type {?} */

      var computedStyle = isIE(10) && getComputedStyle(html);
      return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @param {?} element
     * @param {?=} side
     * @return {?}
     */


    function getScroll(element) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

      /** @type {?} */
      var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
      /** @type {?} */

      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        /** @type {?} */
        var html = element.ownerDocument.documentElement;
        /** @type {?} */

        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
      }

      return element[upperSide];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} offsets
     * @return {?}
     */


    function getClientRect(offsets) {
      return Object.assign({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getBoundingClientRect(element) {
      /** @type {?} */
      var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
      // considered in DOM in some circumstances...
      // This isn't reproducible in IE10 compatibility mode of IE11

      try {
        if (isIE(10)) {
          rect = element.getBoundingClientRect();
          /** @type {?} */

          var scrollTop = getScroll(element, 'top');
          /** @type {?} */

          var scrollLeft = getScroll(element, 'left');
          rect.top += scrollTop;
          rect.left += scrollLeft;
          rect.bottom += scrollTop;
          rect.right += scrollLeft;
        } else {
          rect = element.getBoundingClientRect();
        }
      } catch (e) {
        return undefined;
      }
      /** @type {?} */


      var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      }; // subtract scrollbar size from sizes

      /** @type {?} */

      var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
      /** @type {?} */

      var width = sizes.width || element.clientWidth || result.right - result.left;
      /** @type {?} */

      var height = sizes.height || element.clientHeight || result.bottom - result.top;
      /** @type {?} */

      var horizScrollbar = element.offsetWidth - width;
      /** @type {?} */

      var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
      // we make this check conditional for performance reasons

      if (horizScrollbar || vertScrollbar) {
        /** @type {?} */
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
      }

      return getClientRect(result);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} rect
     * @param {?} element
     * @param {?=} subtract
     * @return {?}
     */


    function includeScroll(rect, element) {
      var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var scrollTop = getScroll(element, 'top');
      /** @type {?} */

      var scrollLeft = getScroll(element, 'left');
      /** @type {?} */

      var modifier = subtract ? -1 : 1;
      rect.top += scrollTop * modifier;
      rect.bottom += scrollTop * modifier;
      rect.left += scrollLeft * modifier;
      rect.right += scrollLeft * modifier;
      return rect;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} children
     * @param {?} parent
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getOffsetRectRelativeToArbitraryNode(children, parent) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var isIE10 = isIE(10);
      /** @type {?} */

      var isHTML = parent.nodeName === 'HTML';
      /** @type {?} */

      var childrenRect = getBoundingClientRect(children);
      /** @type {?} */

      var parentRect = getBoundingClientRect(parent);
      /** @type {?} */

      var scrollParent = getScrollParent(children);
      /** @type {?} */

      var styles = getStyleComputedProperty(parent);
      /** @type {?} */

      var borderTopWidth = parseFloat(styles.borderTopWidth);
      /** @type {?} */

      var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

      if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
      }
      /** @type {?} */


      var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
      });
      offsets.marginTop = 0;
      offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
      // we do this only on HTML because it's the only element that behaves
      // differently when margins are applied to it. The margins are included in
      // the box of the documentElement, in the other cases not.

      if (!isIE10 && isHTML) {
        /** @type {?} */
        var marginTop = parseFloat(styles.marginTop);
        /** @type {?} */

        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
      }

      if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
      }

      return offsets;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @param {?=} excludeScroll
     * @return {?}
     */


    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
      var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /** @type {?} */
      var html = element.ownerDocument.documentElement;
      /** @type {?} */

      var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
      /** @type {?} */

      var width = Math.max(html.clientWidth, window.innerWidth || 0);
      /** @type {?} */

      var height = Math.max(html.clientHeight, window.innerHeight || 0);
      /** @type {?} */

      var scrollTop = !excludeScroll ? getScroll(html) : 0;
      /** @type {?} */

      var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
      /** @type {?} */

      var offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width: width,
        height: height
      };
      return getClientRect(offset);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function isFixed(element) {
      /** @type {?} */
      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
      }

      if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
      }

      return isFixed(getParentNode(element));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @return {?}
     */


    function getFixedPositionOffsetParent(element) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
      }
      /** @type {?} */


      var el = element.parentElement;

      while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
      }

      return el || document.documentElement;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} padding
     * @param {?=} boundariesElement
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getBoundaries(target, host) {
      var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var boundariesElement = arguments.length > 3 ? arguments[3] : undefined;
      var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // NOTE: 1 DOM access here
      // NOTE: 1 DOM access here

      /** @type {?} */
      var boundaries = {
        top: 0,
        left: 0
      };
      /** @type {?} */

      var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host); // Handle viewport case

      if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
      } else {
        // Handle other cases based on DOM element used as boundaries

        /** @type {?} */
        var boundariesNode;

        if (boundariesElement === 'scrollParent') {
          boundariesNode = getScrollParent(getParentNode(host));

          if (boundariesNode.nodeName === 'BODY') {
            boundariesNode = target.ownerDocument.documentElement;
          }
        } else if (boundariesElement === 'window') {
          boundariesNode = target.ownerDocument.documentElement;
        } else {
          boundariesNode = boundariesElement;
        }
        /** @type {?} */


        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
          var _getWindowSizes = getWindowSizes(target.ownerDocument),
              height = _getWindowSizes.height,
              width = _getWindowSizes.width;

          boundaries.top += offsets.top - offsets.marginTop;
          boundaries.bottom = Number(height) + Number(offsets.top);
          boundaries.left += offsets.left - offsets.marginLeft;
          boundaries.right = Number(width) + Number(offsets.left);
        } else {
          // for all the other DOM elements, this one is good
          boundaries = offsets;
        }
      } // Add paddings


      boundaries.left += padding;
      boundaries.top += padding;
      boundaries.right -= padding;
      boundaries.bottom -= padding;
      return boundaries;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} __0
     * @return {?}
     */


    function getArea(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return width * height;
    }
    /**
     * @param {?} placement
     * @param {?} refRect
     * @param {?} target
     * @param {?} host
     * @param {?=} allowedPositions
     * @param {?=} boundariesElement
     * @param {?=} padding
     * @return {?}
     */


    function computeAutoPlacement(placement, refRect, target, host) {
      var allowedPositions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['top', 'left', 'bottom', 'right'];
      var boundariesElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'viewport';
      var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

      if (placement.indexOf('auto') === -1) {
        return placement;
      }
      /** @type {?} */


      var boundaries = getBoundaries(target, host, padding, boundariesElement);
      /** @type {?} */

      var rects = {
        top: {
          width: boundaries.width,
          height: refRect.top - boundaries.top
        },
        right: {
          width: boundaries.right - refRect.right,
          height: boundaries.height
        },
        bottom: {
          width: boundaries.width,
          height: boundaries.bottom - refRect.bottom
        },
        left: {
          width: refRect.left - boundaries.left,
          height: boundaries.height
        }
      };
      /** @type {?} */

      var sortedAreas = Object.keys(rects).map(function (key) {
        return Object.assign({
          key: key
        }, rects[key], {
          area: getArea(rects[key])
        });
      }).sort(function (a, b) {
        return b.area - a.area;
      });
      /** @type {?} */

      var filteredAreas = sortedAreas.filter(function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width >= target.clientWidth && height >= target.clientHeight;
      });
      filteredAreas = allowedPositions.reduce(function (obj, key) {
        return Object.assign({}, obj, _defineProperty({}, key, filteredAreas[key]));
      }, {});
      /** @type {?} */

      var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
      /** @type {?} */

      var variation = placement.split(' ')[1];
      target.className = target.className.replace(/auto/g, computedPlacement);
      return computedPlacement + (variation ? "-".concat(variation) : '');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function getOffsets(data) {
      return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor(data.offsets.target.left),
        top: Math.round(data.offsets.target.top),
        bottom: Math.round(data.offsets.target.bottom),
        right: Math.floor(data.offsets.target.right)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the opposite placement of the given one
     * @param {?} placement
     * @return {?}
     */


    function getOppositePlacement(placement) {
      /** @type {?} */
      var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
      };
      return placement.replace(/left|right|bottom|top/g, function (matched) {
        return (
          /** @type {?} */
          hash[matched]
        );
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the opposite placement variation of the given one
     * @param {?} variation
     * @return {?}
     */


    function getOppositeVariation(variation) {
      if (variation === 'right') {
        return 'left';
      } else if (variation === 'left') {
        return 'right';
      }

      return variation;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @param {?} element
     * @return {?}
     */


    function getOuterSizes(element) {
      /** @type {?} */
      var window = element.ownerDocument.defaultView;
      /** @type {?} */

      var styles = window.getComputedStyle(element);
      /** @type {?} */

      var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
      /** @type {?} */

      var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
      return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} fixedPosition
     * @return {?}
     */


    function getReferenceOffsets(target, host) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      /** @type {?} */
      var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
      return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} target
     * @param {?} hostOffsets
     * @param {?} position
     * @return {?}
     */


    function getTargetOffsets(target, hostOffsets, position) {
      /** @type {?} */
      var placement = position.split(' ')[0]; // Get target node sizes

      /** @type {?} */

      var targetRect = getOuterSizes(target); // Add position, width and height to our offsets object

      /** @type {?} */

      var targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
      }; // depending by the target placement we have to compute its offsets slightly differently

      /** @type {?} */

      var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
      /** @type {?} */

      var mainSide = isHoriz ? 'top' : 'left';
      /** @type {?} */

      var secondarySide = isHoriz ? 'left' : 'top';
      /** @type {?} */

      var measurement = isHoriz ? 'height' : 'width';
      /** @type {?} */

      var secondaryMeasurement = !isHoriz ? 'height' : 'width';

      /** @type {?} */
      targetOffsets[mainSide] = hostOffsets[mainSide] + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;

      /** @type {?} */
      targetOffsets[secondarySide] = placement === secondarySide ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement] :
      /** @type {?} */
      hostOffsets[getOppositePlacement(secondarySide)];
      return targetOffsets;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper used to know if the given modifier is enabled.
     * @param {?} options
     * @param {?} modifierName
     * @return {?}
     */


    function isModifierEnabled(options, modifierName) {
      return options && options.modifiers && options.modifiers[modifierName] && options.modifiers[modifierName].enabled;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tells if a given input is a number
     * @param {?} n
     * @return {?}
     */


    function isNumeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @param {?=} renderer
     * @return {?}
     */


    function setAllStyles$$1(data, renderer) {
      /** @type {?} */
      var target = data.instance.target;
      /** @type {?} */

      var offsets = getOffsets(data);
      setStyles(target, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: "translate3d(".concat(offsets.left, "px, ").concat(offsets.top, "px, 0px)")
      }, renderer);

      if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
      }

      if (data.placementAuto) {
        if (renderer) {
          renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, "bs-popover-".concat(data.placement)));
          renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(data.placement)));
          renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, "s".concat(data.placement)));

          if (target.className.match(/popover/g)) {
            renderer.addClass(target, 'popover-auto');
          }

          if (target.className.match(/tooltip/g)) {
            renderer.addClass(target, 'tooltip-auto');
          }
        } else {
          target.className = target.className.replace(/bs-popover-auto/g, "bs-popover-".concat(data.placement));
          target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(data.placement));
          target.className = target.className.replace(/\sauto/g, "s".concat(data.placement));

          if (target.className.match(/popover/g)) {
            target.classList.add('popover-auto');
          }

          if (target.className.match(/tooltip/g)) {
            target.classList.add('tooltip-auto');
          }
        }
      }

      if (renderer) {
        renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, "".concat(data.placement)));
      } else {
        target.className = target.className.replace(/left|right|top|bottom/g, "".concat(data.placement));
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} element
     * @param {?} styles
     * @param {?=} renderer
     * @return {?}
     */


    function setStyles(element, styles, renderer) {
      Object.keys(styles).forEach(function (prop) {
        /** @type {?} */
        var unit = ''; // add unit if the value is numeric and is one of the following

        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
          unit = 'px';
        }

        if (renderer) {
          renderer.setStyle(element, prop, "".concat(String(styles[prop])).concat(unit));
          return;
        }

        element.style[prop] = String(styles[prop]) + unit;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function arrow(data) {
      var _data$offsets$arrow;

      /** @type {?} */
      var targetOffsets = data.offsets.target; // if arrowElement is a string, suppose it's a CSS selector

      /** @type {?} */

      var arrowElement = data.instance.target.querySelector('.arrow'); // if arrowElement is not found, don't run the modifier

      if (!arrowElement) {
        return data;
      }
      /** @type {?} */


      var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
      /** @type {?} */

      var len = isVertical ? 'height' : 'width';
      /** @type {?} */

      var sideCapitalized = isVertical ? 'Top' : 'Left';
      /** @type {?} */

      var side = sideCapitalized.toLowerCase();
      /** @type {?} */

      var altSide = isVertical ? 'left' : 'top';
      /** @type {?} */

      var opSide = isVertical ? 'bottom' : 'right';
      /** @type {?} */

      var arrowElementSize = getOuterSizes(arrowElement)[len]; // top/left side

      if (data.offsets.host[opSide] - arrowElementSize <
      /** @type {?} */
      targetOffsets[side]) {
        /** @type {?} */
        targetOffsets[side] -=
        /** @type {?} */
        targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
      } // bottom/right side


      if (Number(
      /** @type {?} */
      data.offsets.host[side]) + Number(arrowElementSize) >
      /** @type {?} */
      targetOffsets[opSide]) {
        /** @type {?} */
        targetOffsets[side] += Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(arrowElementSize) - Number(
        /** @type {?} */
        targetOffsets[opSide]);
      }

      targetOffsets = getClientRect(targetOffsets); // compute center of the target

      /** @type {?} */

      var center = Number(
      /** @type {?} */
      data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2); // Compute the sideValue using the updated target offsets
      // take target margin in account because we don't have this info available

      /** @type {?} */

      var css = getStyleComputedProperty(data.instance.target);
      /** @type {?} */

      var targetMarginSide = parseFloat(css["margin".concat(sideCapitalized)]);
      /** @type {?} */

      var targetBorderSide = parseFloat(css["border".concat(sideCapitalized, "Width")]);
      /** @type {?} */

      var sideValue = center -
      /** @type {?} */
      targetOffsets[side] - targetMarginSide - targetBorderSide; // prevent arrowElement from being placed not contiguously to its target

      sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
      data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
      data.instance.arrow = arrowElement;
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function flip(data) {
      data.offsets.target = getClientRect(data.offsets.target);

      if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
      }
      /** @type {?} */


      var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
      'viewport', false // positionFixed
      );
      /** @type {?} */

      var placement = data.placement.split(' ')[0];
      /** @type {?} */

      var variation = data.placement.split(' ')[1] || '';
      /** @type {?} */

      var offsetsHost = data.offsets.host;
      /** @type {?} */

      var target = data.instance.target;
      /** @type {?} */

      var host = data.instance.host;
      /** @type {?} */

      var adaptivePosition = variation ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom']) : computeAutoPlacement('auto', offsetsHost, target, host);
      /** @type {?} */

      var flipOrder = [placement, adaptivePosition];
      /* tslint:disable-next-line: cyclomatic-complexity */

      flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
          return data;
        }

        placement = data.placement.split(' ')[0]; // using floor because the host offsets may contain decimals we are not going to consider here

        /** @type {?} */

        var overlapsRef = placement === 'left' && Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left) || placement === 'right' && Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right) || placement === 'top' && Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top) || placement === 'bottom' && Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom);
        /** @type {?} */

        var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */

        var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */

        var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */

        var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */

        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

        /** @type {?} */

        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */

        var flippedVariation = isVertical && variation === 'left' && overflowsLeft || isVertical && variation === 'right' && overflowsRight || !isVertical && variation === 'left' && overflowsTop || !isVertical && variation === 'right' && overflowsBottom;

        if (overlapsRef || overflowsBoundaries || flippedVariation) {
          if (overlapsRef || overflowsBoundaries) {
            placement = flipOrder[index + 1];
          }

          if (flippedVariation) {
            variation = getOppositeVariation(variation);
          }

          data.placement = placement + (variation ? " ".concat(variation) : '');
          data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
      });
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} targetElement
     * @param {?} hostElement
     * @param {?} position
     * @param {?} options
     * @return {?}
     */


    function initData(targetElement, hostElement, position, options) {
      /** @type {?} */
      var hostElPosition = getReferenceOffsets(targetElement, hostElement);
      /** @type {?} */

      var placementAuto = !!position.match(/auto/g); // support old placements 'auto left|right|top|bottom'

      /** @type {?} */

      var placement = !!position.match(/auto\s(left|right|top|bottom)/g) ? position.split(' ')[1] || '' : position;
      /** @type {?} */

      var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
      placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
      return {
        options: options,
        instance: {
          target: targetElement,
          host: hostElement,
          arrow: null
        },
        offsets: {
          target: targetOffset,
          host: hostElPosition,
          arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function preventOverflow(data) {
      // NOTE: DOM access here
      // resets the targetOffsets's position so that the document size can be calculated excluding
      // the size of the targetOffsets element itself

      /** @type {?} */
      var transformProp = 'transform';
      /** @type {?} */

      var targetStyles = data.instance.target.style; // assignment to help minification

      var top = targetStyles.top,
          left = targetStyles.left,
          transform = targetStyles[transformProp];
      targetStyles.top = '';
      targetStyles.left = '';
      targetStyles[transformProp] = '';
      /** @type {?} */

      var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
      'scrollParent', false // positionFixed
      ); // NOTE: DOM access here
      // restores the original style properties after the offsets have been computed

      targetStyles.top = top;
      targetStyles.left = left;
      targetStyles[transformProp] = transform;
      /** @type {?} */

      var order = ['left', 'right', 'top', 'bottom'];
      /** @type {?} */

      var check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary: function primary(placement) {
          /** @type {?} */
          var value =
          /** @type {?} */
          data.offsets.target[placement];

          if (
          /** @type {?} */
          data.offsets.target[placement] < boundaries[placement] && !false // options.escapeWithReference
          ) {
              value = Math.max(
              /** @type {?} */
              data.offsets.target[placement], boundaries[placement]);
            }

          return _defineProperty({}, placement, value);
        },

        /**
         * @param {?} placement
         * @return {?}
         */
        secondary: function secondary(placement) {
          /** @type {?} */
          var mainSide = placement === 'right' ? 'left' : 'top';
          /** @type {?} */

          var value = data.offsets.target[mainSide];

          if (
          /** @type {?} */
          data.offsets.target[placement] > boundaries[placement] && !false // escapeWithReference
          ) {
              value = Math.min(data.offsets.target[mainSide], boundaries[placement] - (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }

          return _defineProperty({}, mainSide, value);
        }
      };
      /** @type {?} */

      var side;
      order.forEach(function (placement) {
        side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        data.offsets.target = Object.assign({}, data.offsets.target,
        /** @type {?} */
        check[side](placement));
      });
      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} data
     * @return {?}
     */


    function shift(data) {
      /** @type {?} */
      var placement = data.placement;
      /** @type {?} */

      var basePlacement = placement.split(' ')[0];
      /** @type {?} */

      var shiftvariation = placement.split(' ')[1];

      if (shiftvariation) {
        var _data$offsets = data.offsets,
            host = _data$offsets.host,
            target = _data$offsets.target;
        /** @type {?} */

        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */

        var side = isVertical ? 'left' : 'top';
        /** @type {?} */

        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */

        var shiftOffsets = {
          left: _defineProperty({}, side, host[side]),
          right: _defineProperty({}, side, host[side] + host[measurement] - host[measurement])
        };
        data.offsets.target = Object.assign({}, target,
        /** @type {?} */
        shiftOffsets[shiftvariation]);
      }

      return data;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Positioning =
    /*#__PURE__*/
    function () {
      function Positioning() {
        _classCallCheck(this, Positioning);
      }

      _createClass(Positioning, [{
        key: "position",

        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */
        value: function position(hostElement, targetElement) {
          var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.offset(hostElement, targetElement, false);
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */

      }, {
        key: "offset",
        value: function offset(hostElement, targetElement) {
          var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return getReferenceOffsets(targetElement, hostElement);
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} position
         * @param {?=} appendToBody
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "positionElements",
        value: function positionElements(hostElement, targetElement, position, appendToBody, options) {
          /** @type {?} */
          var chainOfModifiers = [flip, shift, preventOverflow, arrow];
          return chainOfModifiers.reduce(function (modifiedData, modifier) {
            return modifier(modifiedData);
          }, initData(targetElement, hostElement, position, options));
        }
      }]);

      return Positioning;
    }();
    /** @type {?} */


    var positionService = new Positioning();
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @param {?=} options
     * @param {?=} renderer
     * @return {?}
     */

    function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
      /** @type {?} */
      var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
      setAllStyles$$1(data, renderer);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PositioningService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} rendererFactory
       * @param {?} platformId
       */
      function PositioningService(rendererFactory, platformId) {
        var _this11 = this;

        _classCallCheck(this, PositioningService);

        this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.positionElements = new Map();

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), this.update$$).subscribe(function () {
            _this11.positionElements.forEach(function (positionElement) {
              positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this11.options, rendererFactory.createRenderer(null, null));
            });
          });
        }
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(PositioningService, [{
        key: "position",
        value: function position(options) {
          this.addPositionElement(options);
          this.update$$.next();
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "addPositionElement",
        value: function addPositionElement(options) {
          this.positionElements.set(_getHtmlElement(options.element), options);
        }
        /**
         * @param {?} elRef
         * @return {?}
         */

      }, {
        key: "deletePositionElement",
        value: function deletePositionElement(elRef) {
          this.positionElements.delete(_getHtmlElement(elRef));
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          this.options = options;
        }
      }]);

      return PositioningService;
    }();

    PositioningService.ɵfac = function PositioningService_Factory(t) {
      return new (t || PositioningService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    PositioningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PositioningService,
      factory: PositioningService.ɵfac
    });
    /** @nocollapse */

    PositioningService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: Number,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositioningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: Number,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /**
     * @param {?} element
     * @return {?}
     */


    function _getHtmlElement(element) {
      // it means that we got a selector
      if (typeof element === 'string') {
        return document.querySelector(element);
      }

      if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
        return element.nativeElement;
      }

      return element;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-positioning.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js ***!
    \*************************************************************************************/

  /*! exports provided: NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__TabsFesm2015NgxBootstrapTabsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function () {
      return NgTranscludeDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabDirective", function () {
      return TabDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function () {
      return TabHeadingDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsetComponent", function () {
      return TabsetComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsetConfig", function () {
      return TabsetConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
      return TabsModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function TabsetComponent_li_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var tabz_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          $event.preventDefault();
          return ctx_r7.removeTab(tabz_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u274C");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["nav-item", a1];
    };

    function TabsetComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsetComponent_li_1_Template_a_click_1_listener($event) {
          var tabz_r5 = ctx.$implicit;
          return tabz_r5.active = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tabz_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", tabz_r5.active)("disabled", tabz_r5.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, tabz_r5.customClass || ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", tabz_r5.active)("disabled", tabz_r5.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", tabz_r5.id ? tabz_r5.id + "-link" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTransclude", tabz_r5.headingRef);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tabz_r5.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tabz_r5.removable);
      }
    }

    var _c1 = ["*"];

    var NgTranscludeDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} viewRef
       */
      function NgTranscludeDirective(viewRef) {
        _classCallCheck(this, NgTranscludeDirective);

        this.viewRef = viewRef;
      }
      /**
       * @param {?} templateRef
       * @return {?}
       */


      _createClass(NgTranscludeDirective, [{
        key: "ngTransclude",
        set: function set(templateRef) {
          this._ngTransclude = templateRef;

          if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
          }
        }
        /* tslint:disable-next-line:no-any */

        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._ngTransclude;
        }
      }]);

      return NgTranscludeDirective;
    }();

    NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(t) {
      return new (t || NgTranscludeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]));
    };

    NgTranscludeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: NgTranscludeDirective,
      selectors: [["", "ngTransclude", ""]],
      inputs: {
        ngTransclude: "ngTransclude"
      }
    });
    /** @nocollapse */

    NgTranscludeDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    NgTranscludeDirective.propDecorators = {
      ngTransclude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTranscludeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngTransclude]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }];
      }, {
        ngTransclude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TabsetConfig = function TabsetConfig() {
      _classCallCheck(this, TabsetConfig);

      /**
       * provides default navigation context class: 'tabs' or 'pills'
       */
      this.type = 'tabs';
    };

    TabsetConfig.ɵfac = function TabsetConfig_Factory(t) {
      return new (t || TabsetConfig)();
    };

    TabsetConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TabsetConfig,
      factory: TabsetConfig.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsetConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // todo: add active event to tab
    // todo: fix? mixing static and dynamic tabs position tabs in order of creation


    var TabsetComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       * @param {?} renderer
       */
      function TabsetComponent(config, renderer) {
        _classCallCheck(this, TabsetComponent);

        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
      }
      /**
       * if true tabs will be placed vertically
       * @return {?}
       */


      _createClass(TabsetComponent, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.isDestroyed = true;
        }
        /**
         * @param {?} tab
         * @return {?}
         */

      }, {
        key: "addTab",
        value: function addTab(tab) {
          this.tabs.push(tab);
          tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
        }
        /**
         * @param {?} tab
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "removeTab",
        value: function removeTab(tab) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            reselect: true,
            emit: true
          };

          /** @type {?} */
          var index = this.tabs.indexOf(tab);

          if (index === -1 || this.isDestroyed) {
            return;
          } // Select a new tab if the tab to be removed is selected and not destroyed


          if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
          }

          if (options.emit) {
            tab.removed.emit(tab);
          }

          this.tabs.splice(index, 1);

          if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
          }
        }
        /**
         * @protected
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "getClosestTabIndex",
        value: function getClosestTabIndex(index) {
          /** @type {?} */
          var tabsLength = this.tabs.length;

          if (!tabsLength) {
            return -1;
          }

          for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */

            var nextIndex = index + step;

            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
              return prevIndex;
            }

            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
              return nextIndex;
            }
          }

          return -1;
        }
        /**
         * @protected
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "hasAvailableTabs",
        value: function hasAvailableTabs(index) {
          /** @type {?} */
          var tabsLength = this.tabs.length;

          if (!tabsLength) {
            return false;
          }

          for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
              return true;
            }
          }

          return false;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "setClassMap",
        value: function setClassMap() {
          this.classMap = _defineProperty({
            'nav-stacked': this.vertical,
            'flex-column': this.vertical,
            'nav-justified': this.justified
          }, "nav-".concat(this.type), true);
        }
      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = value;
          this.setClassMap();
        }
        /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */

      }, {
        key: "justified",
        get: function get() {
          return this._justified;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._justified = value;
          this.setClassMap();
        }
        /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */

      }, {
        key: "type",
        get: function get() {
          return this._type;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._type = value;
          this.setClassMap();
        }
      }]);

      return TabsetComponent;
    }();

    TabsetComponent.ɵfac = function TabsetComponent_Factory(t) {
      return new (t || TabsetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TabsetConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    TabsetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TabsetComponent,
      selectors: [["tabset"]],
      hostVars: 2,
      hostBindings: function TabsetComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-container", ctx.clazz);
        }
      },
      inputs: {
        vertical: "vertical",
        justified: "justified",
        type: "type"
      },
      ngContentSelectors: _c1,
      decls: 4,
      vars: 2,
      consts: [[1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]],
      template: function TabsetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsetComponent_Template_ul_click_0_listener($event) {
            return $event.preventDefault();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabsetComponent_li_1_Template, 5, 15, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], NgTranscludeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]],
      encapsulation: 2
    });
    /** @nocollapse */

    TabsetComponent.ctorParameters = function () {
      return [{
        type: TabsetConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    TabsetComponent.propDecorators = {
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      justified: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clazz: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
        args: ['class.tab-container']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'tabset',
          template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n  <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n"
        }]
      }], function () {
        return [{
          type: TabsetConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, {
        clazz: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.tab-container']
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        justified: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TabDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} tabset
       * @param {?} elementRef
       * @param {?} renderer
       */
      function TabDirective(tabset, elementRef, renderer) {
        _classCallCheck(this, TabDirective);

        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */

        this.selectTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */

        this.deselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */

        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
      }
      /**
       * if set, will be added to the tab's class attribute. Multiple classes are supported.
       * @return {?}
       */


      _createClass(TabDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.removable = this.removable;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tabset.removeTab(this, {
            reselect: false,
            emit: false
          });
        }
      }, {
        key: "customClass",
        get: function get() {
          return this._customClass;
        }
        /**
         * @param {?} customClass
         * @return {?}
         */
        ,
        set: function set(customClass) {
          var _this12 = this;

          if (this.customClass) {
            this.customClass.split(' ').forEach(function (cssClass) {
              _this12.renderer.removeClass(_this12.elementRef.nativeElement, cssClass);
            });
          }

          this._customClass = customClass ? customClass.trim() : null;

          if (this.customClass) {
            this.customClass.split(' ').forEach(function (cssClass) {
              _this12.renderer.addClass(_this12.elementRef.nativeElement, cssClass);
            });
          }
        }
        /**
         * tab active state toggle
         * @return {?}
         */

      }, {
        key: "active",
        get: function get() {
          return this._active;
        }
        /**
         * @param {?} active
         * @return {?}
         */
        ,
        set: function set(active) {
          var _this13 = this;

          if (this._active === active) {
            return;
          }

          if (this.disabled && active || !active) {
            if (this._active && !active) {
              this.deselect.emit(this);
              this._active = active;
            }

            return;
          }

          this._active = active;
          this.selectTab.emit(this);
          this.tabset.tabs.forEach(function (tab) {
            if (tab !== _this13) {
              tab.active = false;
            }
          });
        }
      }]);

      return TabDirective;
    }();

    TabDirective.ɵfac = function TabDirective_Factory(t) {
      return new (t || TabDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TabsetComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    TabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: TabDirective,
      selectors: [["tab"], ["", "tab", ""]],
      hostVars: 5,
      hostBindings: function TabDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-pane", ctx.addClass)("active", ctx.active);
        }
      },
      inputs: {
        customClass: "customClass",
        active: "active",
        removable: "removable",
        heading: "heading",
        id: "id",
        disabled: "disabled"
      },
      outputs: {
        selectTab: "selectTab",
        deselect: "deselect",
        removed: "removed"
      }
    });
    /** @nocollapse */

    TabDirective.ctorParameters = function () {
      return [{
        type: TabsetComponent
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    TabDirective.propDecorators = {
      heading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
        args: ['attr.id']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      removable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
        args: ['class.active']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      selectTab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      deselect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      removed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      addClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
        args: ['class.tab-pane']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'tab, [tab]'
        }]
      }], function () {
        return [{
          type: TabsetComponent
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, {
        selectTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        deselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.tab-pane']
        }],
        customClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.id']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Should be used to mark <ng-template> element as a template for tab heading
     */


    var TabHeadingDirective =
    /* tslint:disable-next-line:no-any */

    /**
     * @param {?} templateRef
     * @param {?} tab
     */
    function TabHeadingDirective(templateRef, tab) {
      _classCallCheck(this, TabHeadingDirective);

      tab.headingRef = templateRef;
    };

    TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) {
      return new (t || TabHeadingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TabDirective));
    };

    TabHeadingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: TabHeadingDirective,
      selectors: [["", "tabHeading", ""]]
    });
    /** @nocollapse */

    TabHeadingDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: TabDirective
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabHeadingDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[tabHeading]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: TabDirective
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TabsModule =
    /*#__PURE__*/
    function () {
      function TabsModule() {
        _classCallCheck(this, TabsModule);
      }

      _createClass(TabsModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
          };
        }
      }]);

      return TabsModule;
    }();

    TabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TabsModule
    });
    TabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TabsModule_Factory(t) {
        return new (t || TabsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsModule, {
        declarations: function declarations() {
          return [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
        },
        exports: function exports() {
          return [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
          exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-tabs.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js ***!
    \***************************************************************************************/

  /*! exports provided: isBs3, LinkedList, listenToTriggersV2, registerOutsideClick, registerEscClick, OnChange, setTheme, Trigger, Utils, window, document, warnOnce, parseTriggers, listenToTriggers */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__UtilsFesm2015NgxBootstrapUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isBs3", function () {
      return isBs3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkedList", function () {
      return LinkedList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function () {
      return listenToTriggersV2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function () {
      return registerOutsideClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerEscClick", function () {
      return registerEscClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnChange", function () {
      return OnChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setTheme", function () {
      return setTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Trigger", function () {
      return Trigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "window", function () {
      return win;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "document", function () {
      return document$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "warnOnce", function () {
      return warnOnce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseTriggers", function () {
      return parseTriggers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listenToTriggers", function () {
      return listenToTriggers;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */


    var Trigger =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} open
       * @param {?=} close
       */
      function Trigger(open, close) {
        _classCallCheck(this, Trigger);

        this.open = open;
        this.close = close || open;
      }
      /**
       * @return {?}
       */


      _createClass(Trigger, [{
        key: "isManual",
        value: function isManual() {
          return this.open === 'manual' || this.close === 'manual';
        }
      }]);

      return Trigger;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_ALIASES = {
      hover: ['mouseover', 'mouseout'],
      focus: ['focusin', 'focusout']
    };
    /* tslint:disable-next-line: no-any */

    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */

    function parseTriggers(triggers) {
      var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ALIASES;

      /** @type {?} */
      var trimmedTriggers = (triggers || '').trim();

      if (trimmedTriggers.length === 0) {
        return [];
      }
      /** @type {?} */


      var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) {
        return trigger.split(':');
      }).map(function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
      });
      /** @type {?} */

      var manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
      });

      if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
      }

      if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
      }

      return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} target
     * @param {?} triggers
     * @param {?} showFn
     * @param {?} hideFn
     * @param {?} toggleFn
     * @return {?}
     */


    function listenToTriggers(renderer,
    /* tslint:disable-next-line: no-any */
    target, triggers, showFn, hideFn, toggleFn) {
      /** @type {?} */
      var parsedTriggers = parseTriggers(triggers);
      /* tslint:disable-next-line: no-any */

      /** @type {?} */

      var listeners = [];

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
      }

      parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
          listeners.push(renderer.listen(target, trigger.open, toggleFn));
          return;
        }

        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
      });
      return function () {
        listeners.forEach(function (unsubscribeFn) {
          return unsubscribeFn();
        });
      };
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function listenToTriggersV2(renderer, options) {
      /** @type {?} */
      var parsedTriggers = parseTriggers(options.triggers);
      /** @type {?} */

      var target = options.target; // do nothing

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
      } // all listeners

      /* tslint:disable-next-line: no-any */

      /** @type {?} */


      var listeners = []; // lazy listeners registration

      /** @type {?} */

      var _registerHide = [];
      /** @type {?} */

      var registerHide = function registerHide() {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) {
          return listeners.push(fn());
        }); // register hide events only once


        _registerHide.length = 0;
      }; // register open\close\toggle listeners


      parsedTriggers.forEach(function (trigger) {
        /** @type {?} */
        var useToggle = trigger.open === trigger.close;
        /** @type {?} */

        var showFn = useToggle ? options.toggle : options.show;

        if (!useToggle) {
          _registerHide.push(function () {
            return renderer.listen(target, trigger.close, options.hide);
          });
        }

        listeners.push(renderer.listen(target, trigger.open, function () {
          return showFn(registerHide);
        }));
      });
      return function () {
        listeners.forEach(function (unsubscribeFn) {
          return unsubscribeFn();
        });
      };
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function registerOutsideClick(renderer, options) {
      if (!options.outsideClick) {
        return Function.prototype;
      }
      /* tslint:disable-next-line: no-any */


      return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
          return undefined;
        }

        if (options.targets && options.targets.some(function (target) {
          return target.contains(event.target);
        })) {
          return undefined;
        }

        options.hide();
      });
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */


    function registerEscClick(renderer, options) {
      if (!options.outsideEsc) {
        return Function.prototype;
      }

      return renderer.listen('document', 'keyup.esc', function (event) {
        if (options.target && options.target.contains(event.target)) {
          return undefined;
        }

        if (options.targets && options.targets.some(function (target) {
          return target.contains(event.target);
        })) {
          return undefined;
        }

        options.hide();
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * JS version of browser APIs. This library can only run in the browser.
     * @type {?}
     */


    var win = typeof window !== 'undefined' && window ||
    /** @type {?} */
    {};
    /** @type {?} */

    var document$1 = win.document;
    /** @type {?} */

    var location = win.location;
    /** @type {?} */

    var gc = win.gc ? function () {
      return win.gc();
    } : function () {
      return null;
    };
    /** @type {?} */

    var performance = win.performance ? win.performance : null;
    /** @type {?} */

    var Event = win.Event;
    /** @type {?} */

    var MouseEvent = win.MouseEvent;
    /** @type {?} */

    var KeyboardEvent = win.KeyboardEvent;
    /** @type {?} */

    var EventTarget = win.EventTarget;
    /** @type {?} */

    var History = win.History;
    /** @type {?} */

    var Location = win.Location;
    /** @type {?} */

    var EventListener = win.EventListener;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var guessedVersion;
    /**
     * @return {?}
     */

    function _guessBsVersion() {
      if (typeof document === 'undefined') {
        return null;
      }
      /** @type {?} */


      var spanEl = document.createElement('span');
      spanEl.innerText = 'test bs version';
      document.body.appendChild(spanEl);
      spanEl.classList.add('d-none');
      /** @type {?} */

      var rect = spanEl.getBoundingClientRect();
      document.body.removeChild(spanEl);

      if (!rect) {
        return 'bs3';
      }

      return rect.top === 0 ? 'bs4' : 'bs3';
    }
    /**
     * @param {?} theme
     * @return {?}
     */


    function setTheme(theme) {
      guessedVersion = theme;
    } // todo: in ngx-bootstrap, bs4 will became a default one

    /**
     * @return {?}
     */


    function isBs3() {
      if (typeof win === 'undefined') {
        return true;
      }

      if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
          return guessedVersion === 'bs3';
        }

        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
      }

      return win.__theme !== 'bs4';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var LinkedList =
    /*#__PURE__*/
    function () {
      function LinkedList() {
        _classCallCheck(this, LinkedList);

        this.length = 0;
        this.asArray = []; // Array methods overriding END
      }
      /**
       * @param {?} position
       * @return {?}
       */


      _createClass(LinkedList, [{
        key: "get",
        value: function get(position) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
          }
          /** @type {?} */


          var current = this.head;

          for (var index = 0; index < position; index++) {
            current = current.next;
          }

          return current.value;
        }
        /**
         * @param {?} value
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(value) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;

          if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
          }
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */


          var node = {
            value: value,
            next: undefined,
            previous: undefined
          };

          if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
          } else {
            if (position === 0) {
              // first node
              node.next = this.head;
              this.head.previous = node;
              this.head = node;
            } else if (position === this.length) {
              // last node
              this.tail.next = node;
              node.previous = this.tail;
              this.tail = node;
            } else {
              // node in middle

              /** @type {?} */
              var currentPreviousNode = this.getNode(position - 1);
              /** @type {?} */

              var currentNextNode = currentPreviousNode.next;
              currentPreviousNode.next = node;
              currentNextNode.previous = node;
              node.previous = currentPreviousNode;
              node.next = currentNextNode;
            }
          }

          this.length++;
          this.createInternalArrayRepresentation();
        }
        /**
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }

          if (position === 0) {
            // first node
            this.head = this.head.next;

            if (this.head) {
              // there is no second node
              this.head.previous = undefined;
            } else {
              // there is no second node
              this.tail = undefined;
            }
          } else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
          } else {
            // middle node

            /** @type {?} */
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
          }

          this.length--;
          this.createInternalArrayRepresentation();
        }
        /**
         * @param {?} position
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "set",
        value: function set(position, value) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }
          /** @type {?} */


          var node = this.getNode(position);
          node.value = value;
          this.createInternalArrayRepresentation();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toArray",
        value: function toArray() {
          return this.asArray;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "findAll",
        value: function findAll(fn) {
          /** @type {?} */
          var current = this.head;
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */

          var result = [];

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result.push({
                index: index,
                value: current.value
              });
            }

            current = current.next;
          }

          return result;
        } // Array methods overriding start

        /**
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "push",
        value: function push() {
          var _this14 = this;

          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }

          /* tslint:disable-next-line: no-any*/
          args.forEach(function (arg) {
            _this14.add(arg);
          });
          return this.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "pop",
        value: function pop() {
          if (this.length === 0) {
            return undefined;
          }
          /** @type {?} */


          var last = this.tail;
          this.remove(this.length - 1);
          return last.value;
        }
        /**
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "unshift",
        value: function unshift() {
          var _this15 = this;

          for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
            args[_key3] = arguments[_key3];
          }

          args.reverse();
          /* tslint:disable-next-line: no-any*/

          args.forEach(function (arg) {
            _this15.add(arg, 0);
          });
          return this.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0) {
            return undefined;
          }
          /** @type {?} */


          var lastItem = this.head.value;
          this.remove();
          return lastItem;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          /** @type {?} */
          var current = this.head;

          for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "indexOf",
        value: function indexOf(value) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var position = 0;

          for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
              position = index;
              break;
            }

            current = current.next;
          }

          return position;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "some",
        value: function some(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result = false;

          while (current && !result) {
            if (fn(current.value)) {
              result = true;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "every",
        value: function every(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result = true;

          while (current && result) {
            if (!fn(current.value)) {
              result = false;
            }

            current = current.next;
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          return '[Linked List]';
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "find",
        value: function find(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result;

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result = current.value;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "findIndex",
        value: function findIndex(fn) {
          /** @type {?} */
          var current = this.head;
          /** @type {?} */

          var result;

          for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
              result = index;
              break;
            }

            current = current.next;
          }

          return result;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @protected
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "getNode",
        value: function getNode(position) {
          if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
          }
          /** @type {?} */


          var current = this.head;

          for (var index = 0; index < position; index++) {
            current = current.next;
          }

          return current;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "createInternalArrayRepresentation",
        value: function createInternalArrayRepresentation() {
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */
          var outArray = [];
          /** @type {?} */

          var current = this.head;

          while (current) {
            outArray.push(current.value);
            current = current.next;
          }

          this.asArray = outArray;
        }
      }]);

      return LinkedList;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*tslint:disable:no-invalid-this */

    /* tslint:disable-next-line: no-any */

    /**
     * @param {?=} defaultValue
     * @return {?}
     */


    function OnChange(defaultValue) {
      /** @type {?} */
      var sufix = 'Change';
      /* tslint:disable-next-line: no-any */

      return function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        var _key = " __".concat(propertyKey, "Value");

        Object.defineProperty(target, propertyKey, {
          /* tslint:disable-next-line: no-any */

          /**
           * @return {?}
           */
          get: function get() {
            return this[_key];
          },

          /* tslint:disable-next-line: no-any */

          /**
           * @param {?} value
           * @return {?}
           */
          set: function set(value) {
            /** @type {?} */
            var prevValue = this[_key];
            this[_key] = value;

            if (prevValue !== value && this[propertyKey + sufix]) {
              this[propertyKey + sufix].emit(value);
            }
          }
        });
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Utils =
    /*#__PURE__*/
    function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "reflow",

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} element
         * @return {?}
         */
        value: function reflow(element) {
          /* tslint:disable-next-line: no-any */
          (function (bs) {
            return bs;
          })(element.offsetHeight);
        } // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} elem
         * @return {?}
         */

      }, {
        key: "getStyles",
        value: function getStyles(elem) {
          // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
          // IE throws on elements created in popups
          // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"

          /** @type {?} */
          var view = elem.ownerDocument.defaultView;

          if (!view || !view.opener) {
            view = win;
          }

          return view.getComputedStyle(elem);
        }
      }]);

      return Utils;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _messagesHash = {};
    /** @type {?} */

    var _hideMsg = typeof console === 'undefined' || !('warn' in console);
    /**
     * @param {?} msg
     * @return {?}
     */


    function warnOnce(msg) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
      }

      _messagesHash[msg] = true;
      /*tslint:disable-next-line*/

      console.warn(msg);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-utils.js.map

    /***/

  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/ui-elements-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/ui-elements/ui-elements-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UiElementsRoutingModule */

  /***/
  function srcAppPagesUiElementsUiElementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsRoutingModule", function () {
      return UiElementsRoutingModule;
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


    var _ui_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ui-elements.component */
    "./src/app/pages/ui-elements/ui-elements.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _ui_elements_component__WEBPACK_IMPORTED_MODULE_2__["UiElementsComponent"]
    }];

    var UiElementsRoutingModule = function UiElementsRoutingModule() {
      _classCallCheck(this, UiElementsRoutingModule);
    };

    UiElementsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UiElementsRoutingModule
    });
    UiElementsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UiElementsRoutingModule_Factory(t) {
        return new (t || UiElementsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiElementsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiElementsRoutingModule, [{
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
  "./src/app/pages/ui-elements/ui-elements.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/ui-elements/ui-elements.component.ts ***!
    \************************************************************/

  /*! exports provided: UiElementsComponent */

  /***/
  function srcAppPagesUiElementsUiElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsComponent", function () {
      return UiElementsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");

    function UiElementsComponent_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Alert! ");
      }
    }

    function UiElementsComponent_ul_167_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Another action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Something else here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Separated link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UiElementsComponent_ul_171_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Another action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Something else here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Separated link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UiElementsComponent_ul_175_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Another action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Something else here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Separated link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UiElementsComponent_ul_179_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Another action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Something else here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Separated link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UiElementsComponent_ul_183_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Another action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Something else here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Separated link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UiElementsComponent =
    /*#__PURE__*/
    function () {
      function UiElementsComponent() {
        _classCallCheck(this, UiElementsComponent);

        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
        this.alerts = [{
          type: 'success',
          msg: "You successfully read this important alert message."
        }, {
          type: 'info',
          msg: "This alert needs your attention, but it's not super important."
        }, {
          type: 'danger',
          msg: "Better check yourself, you're not looking too good."
        }];
      }

      _createClass(UiElementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiElementsComponent;
    }();

    UiElementsComponent.ɵfac = function UiElementsComponent_Factory(t) {
      return new (t || UiElementsComponent)();
    };

    UiElementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UiElementsComponent,
      selectors: [["app-ui-elements"]],
      decls: 184,
      vars: 3,
      consts: [["id", "page-wrapper", 1, ""], [1, "container-fluid"], [1, "row", "row-stat"], [1, "col-sm-6"], [1, "panel", "panel-default"], [1, "panel-heading", "panel-heading-divider"], [1, "panel-subtitle"], [1, "panel-body"], [1, "xs-mt-10", "xs-mb-10"], ["heading", "Static title"], [1, "xs-mt-40", "xs-mb-10"], ["heading", "Static Title 1"], ["heading", "Static Title 2"], ["tabHeading", ""], [1, "xs-mb-50", "xs-mt-40"], [3, "totalItems"], [1, "xs-mb-50"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 1, "pagination-sm", 3, "boundaryLinks", "totalItems"], ["type", "success", "dismissible", "true"], [1, "icon", "mdi", "mdi-check"], ["type", "primary", "dismissible", "true"], [1, "icon", "mdi", "mdi-information-outline"], ["type", "warning", "dismissible", "true"], [1, "icon", "mdi", "mdi-alert"], ["type", "danger", "dismissible", "true"], [1, "icon", "mdi", "mdi-close-circle"], ["type", "success", "dismissible", "true", 1, "alert-contrast"], ["type", "primary", "dismissible", "true", 1, "alert-contrast"], ["type", "warning", "dismissible", "true", 1, "alert-contrast"], ["type", "danger", "dismissible", "true", 1, "alert-contrast"], [1, "panel-body", "text-center"], [1, "btn", "btn-space", "btn-default"], [1, "btn", "btn-space", "btn-primary"], [1, "btn", "btn-space", "btn-danger"], [1, "btn", "btn-space", "btn-warning"], [1, "btn", "btn-space", "btn-success"], [1, "icon", "icon-left", "mdi", "mdi-earth"], [1, "icon", "icon-left", "mdi", "mdi-cloud"], [1, "icon", "icon-left", "mdi", "mdi-alert-circle"], [1, "icon", "icon-left", "mdi", "mdi-alert"], [1, "icon", "icon-left", "mdi", "mdi-check"], [1, "col-sm-12"], [1, "xs-mt-20", "xs-mb-30"], ["dropdown", "", 1, "btn-group"], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "dropdown-toggle"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-default", "dropdown-toggle"], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-danger", "dropdown-toggle"], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-warning", "dropdown-toggle"], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-success", "dropdown-toggle"], [1, "glyphicon", "glyphicon-bell"], ["role", "menu", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]],
      template: function UiElementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "These are the ngx-bootstrap tabs using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "<tabset></tabset> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Static content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Static content 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Static content 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UiElementsComponent_ng_template_28_Template, 2, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "I've got an HTML heading, and a select callback. Pretty cool!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Pagination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "These are the ngx-bootstrap tabs using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "<pagination></pagination> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "pagination", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "pagination", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Default Alerts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "These are the default bootstrap alerts style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "alert", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Good!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " You're looking good. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "alert", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Info!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " If you would like to inform something to the user ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "alert", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Warning!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " When something is about to go wrong ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "alert", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Danger!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Something completely wrong. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Contrasts Alerts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Alerts with icon contrast background");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "alert", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Good!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " You're looking good. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "alert", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Info!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " If you would like to inform something to the user ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "alert", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Warning!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " When something is about to go wrong ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "alert", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Danger!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Something completely wrong. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Default Buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "These are the default bootstrap button style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Buttons with icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "These are the customised buttons with icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Buttons with dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "These are the customised buttons with dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Primary dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, UiElementsComponent_ul_167_Template, 14, 0, "ul", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Default dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, UiElementsComponent_ul_171_Template, 14, 0, "ul", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Danger dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, UiElementsComponent_ul_175_Template, 14, 0, "ul", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Warning dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, UiElementsComponent_ul_179_Template, 14, 0, "ul", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Success dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](183, UiElementsComponent_ul_183_Template, 14, 0, "ul", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx.totalItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.totalItems);
        }
      },
      directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__["TabDirective"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__["TabHeadingDirective"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownMenuDirective"]],
      styles: ["button.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    left: -10px;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy91aS1lbGVtZW50cy91aS1lbGVtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwL3BhZ2VzL3VpLWVsZW1lbnRzL3VpLWVsZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLypCdXR0b24qL1xuXG5idXR0b24uYnRuIC5pY29uIHtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiElementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ui-elements',
          templateUrl: './ui-elements.component.html',
          styleUrls: ['./ui-elements.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/ui-elements.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/ui-elements/ui-elements.module.ts ***!
    \*********************************************************/

  /*! exports provided: UiElementsModule */

  /***/
  function srcAppPagesUiElementsUiElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsModule", function () {
      return UiElementsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ui_elements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ui-elements.component */
    "./src/app/pages/ui-elements/ui-elements.component.ts");
    /* harmony import */


    var _ui_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ui-elements-routing.module */
    "./src/app/pages/ui-elements/ui-elements-routing.module.ts");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var UiElementsModule = function UiElementsModule() {
      _classCallCheck(this, UiElementsModule);
    };

    UiElementsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UiElementsModule
    });
    UiElementsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UiElementsModule_Factory(t) {
        return new (t || UiElementsModule)();
      },
      providers: [],
      imports: [[_ui_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["UiElementsRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiElementsModule, {
        declarations: [_ui_elements_component__WEBPACK_IMPORTED_MODULE_1__["UiElementsComponent"]],
        imports: [_ui_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["UiElementsRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiElementsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_ui_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["UiElementsRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot()],
          declarations: [_ui_elements_component__WEBPACK_IMPORTED_MODULE_1__["UiElementsComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ui-elements-ui-elements-module-es5.js.map