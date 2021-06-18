function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/services/toastr-message.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/toastr-message.service.ts ***!
    \***********************************************************/

  /*! exports provided: ToastrMessageService */

  /***/
  function srcAppSharedServicesToastrMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastrMessageService", function () {
      return ToastrMessageService;
    });
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToastrMessageService =
    /*#__PURE__*/
    function () {
      function ToastrMessageService(_toastrService) {
        _classCallCheck(this, ToastrMessageService);

        this._toastrService = _toastrService;
      } // Success Type


      _createClass(ToastrMessageService, [{
        key: "typeSuccess",
        value: function typeSuccess(message) {
          this._toastrService.success(message, 'Success!');
        } // Error Type

      }, {
        key: "typeError",
        value: function typeError(message) {
          this._toastrService.error(message, 'Error!');
        } //Dismiss toastr on Click

      }, {
        key: "dismissToastOnClick",
        value: function dismissToastOnClick(val1, val2) {
          this._toastrService.info(val1, val2);
        } // Remove current toasts using animation

      }, {
        key: "clearToast",
        value: function clearToast() {
          this._toastrService.clear();
        }
      }]);

      return ToastrMessageService;
    }();

    ToastrMessageService.ɵfac = function ToastrMessageService_Factory(t) {
      return new (t || ToastrMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]));
    };

    ToastrMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToastrMessageService,
      factory: ToastrMessageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastrMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map