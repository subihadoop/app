(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/toastr-message.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/toastr-message.service.ts ***!
  \***********************************************************/
/*! exports provided: ToastrMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrMessageService", function() { return ToastrMessageService; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class ToastrMessageService {
    constructor(_toastrService) {
        this._toastrService = _toastrService;
    }
    // Success Type
    typeSuccess(message) {
        this._toastrService.success(message, 'Success!');
    }
    // Error Type
    typeError(message) {
        this._toastrService.error(message, 'Error!');
    }
    //Dismiss toastr on Click
    dismissToastOnClick(val1, val2) {
        this._toastrService.info(val1, val2);
    }
    // Remove current toasts using animation
    clearToast() {
        this._toastrService.clear();
    }
}
ToastrMessageService.ɵfac = function ToastrMessageService_Factory(t) { return new (t || ToastrMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"])); };
ToastrMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastrMessageService, factory: ToastrMessageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastrMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map