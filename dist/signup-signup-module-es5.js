function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./src/app/user/signup/signup-form/signup-form.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user/signup/signup-form/signup-form.component.ts ***!
    \******************************************************************/

  /*! exports provided: SignupFormComponent */

  /***/
  function srcAppUserSignupSignupFormSignupFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function () {
      return SignupFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupFormComponent_div_4_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "firstname is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_4_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "The username must contain at least the @ character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupFormComponent_div_4_p_1_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SignupFormComponent_div_4_p_2_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.firstname.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.firstname.errors.pattern);
      }
    }

    function SignupFormComponent_div_7_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "lastname is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_7_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "The lastname must contain at least the @ character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupFormComponent_div_7_p_1_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SignupFormComponent_div_7_p_2_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.lastname.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.lastname.errors.pattern);
      }
    }

    function SignupFormComponent_div_11_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_11_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "The username address must contain at least the @ character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupFormComponent_div_11_p_1_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SignupFormComponent_div_11_p_2_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.username.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.username.errors.pattern);
      }
    }

    function SignupFormComponent_div_14_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_14_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "The email address must contain at least the @ character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupFormComponent_div_14_p_1_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SignupFormComponent_div_14_p_2_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.email.errors.pattern);
      }
    }

    function SignupFormComponent_div_18_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_18_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Password must be 5 characters long, we need another ", ctx_r27.password.errors.minlength.requiredLength - ctx_r27.password.errors.minlength.actualLength, " characters ");
      }
    }

    function SignupFormComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupFormComponent_div_18_p_1_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SignupFormComponent_div_18_p_2_Template, 2, 1, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.password.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.password.errors.minlength);
      }
    }

    function SignupFormComponent_div_21_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function SignupFormComponent_div_21_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Confirm Password must be 5 characters long, we need another ", ctx_r29.cpassword.errors.minlength.requiredLength - ctx_r29.cpassword.errors.minlength.actualLength, " characters ");
      }
    }

    function SignupFormComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SignupFormComponent_div_21_p_1_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SignupFormComponent_div_21_p_2_Template, 2, 1, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r17.cpassword.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r17.cpassword.errors.minlength);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "has-danger": a0,
        "has-success": a1
      };
    };

    var SignupFormComponent =
    /*#__PURE__*/
    function () {
      function SignupFormComponent() {
        _classCallCheck(this, SignupFormComponent);
      }

      _createClass(SignupFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createFormControls();
          this.createForm();
        }
      }, {
        key: "createFormControls",
        value: function createFormControls() {
          this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[^ @]*@[^ @]*")]);
          this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]);
          this.cpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]);
          this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            cpassword: this.cpassword,
            username: this.username,
            mobile: this.mobile
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log('you submitted value: ', this.signupForm.value);
          var formData = this.signupForm["controls"];
          formData['firstname'].markAsTouched();
          formData['lastname'].markAsTouched();
          formData['username'].markAsTouched();
          formData['email'].markAsTouched();
          formData['password'].markAsTouched();
          formData['cpassword'].markAsTouched();
        }
      }]);

      return SignupFormComponent;
    }();

    SignupFormComponent.??fac = function SignupFormComponent_Factory(t) {
      return new (t || SignupFormComponent)();
    };

    SignupFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SignupFormComponent,
      selectors: [["signup-form"]],
      decls: 33,
      vars: 31,
      consts: [["novalidate", "", 3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-6", 3, "ngClass"], ["type", "text", "id", "firstname", "placeholder", "firstname", "formControlName", "firstname", "required", "", 1, "fadeIn"], ["class", "form-control-feedback", 4, "ngIf"], ["type", "text", "id", "lastname", "placeholder", "lastname", "formControlName", "lastname", "required", "", 1, "fadeIn"], ["type", "text", "id", "username", "placeholder", "username", "formControlName", "username", "required", "", 1, "fadeIn"], ["type", "text", "id", "login", "placeholder", "email", "formControlName", "email", "required", "", 1, "fadeIn"], ["type", "password", "name", "password", "id", "password", "placeholder", "password", "formControlName", "password", "required", "", 1, "fadeIn"], ["type", "password", "name", "cpassword", "id", "cpassword", "placeholder", "Confirm password", "formControlName", "cpassword", "required", "", 1, "fadeIn"], [1, "form-group", "col-md-6"], ["type", "number", "name", "mobile", "id", "mobile", "placeholder", "mobile - (Optional)", "formControlName", "mobile", 1, "fadeIn"], ["id", "sex", 1, "fadeIn"], ["selected", ""], [1, "form-control-feedback"], [4, "ngIf"]],
      template: function SignupFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SignupFormComponent_div_4_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, SignupFormComponent_div_7_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, SignupFormComponent_div_11_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, SignupFormComponent_div_14_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, SignupFormComponent_div_18_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, SignupFormComponent_div_21_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Choose you sex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.signupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](13, _c0, ctx.firstname.invalid && (ctx.firstname.dirty || ctx.firstname.touched), ctx.firstname.valid && (ctx.firstname.dirty || ctx.firstname.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.firstname.errors && (ctx.firstname.dirty || ctx.firstname.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](16, _c0, ctx.lastname.invalid && (ctx.lastname.dirty || ctx.lastname.touched), ctx.lastname.valid && (ctx.lastname.dirty || ctx.lastname.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.lastname.errors && (ctx.lastname.dirty || ctx.lastname.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](19, _c0, ctx.username.invalid && (ctx.username.dirty || ctx.username.touched), ctx.username.valid && (ctx.username.dirty || ctx.username.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.username.errors && (ctx.username.dirty || ctx.username.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](22, _c0, ctx.email.invalid && (ctx.email.dirty || ctx.email.touched), ctx.email.valid && (ctx.email.dirty || ctx.email.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.email.errors && (ctx.email.dirty || ctx.email.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](25, _c0, ctx.password.invalid && (ctx.password.dirty || ctx.password.touched), ctx.password.valid && (ctx.password.dirty || ctx.password.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.password.errors && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](28, _c0, ctx.cpassword.invalid && (ctx.cpassword.dirty || ctx.cpassword.touched), ctx.cpassword.valid && (ctx.cpassword.dirty || ctx.cpassword.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cpassword.errors && (ctx.cpassword.dirty || ctx.cpassword.touched));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdXNlci9zaWdudXAvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'signup-form',
          templateUrl: './signup-form.component.html',
          styleUrls: ['./signup-form.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/signup/signup-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/user/signup/signup-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: SignupRoutingModule */

  /***/
  function srcAppUserSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function () {
      return SignupRoutingModule;
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


    var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signup.component */
    "./src/app/user/signup/signup.component.ts");

    var routes = [{
      path: '',
      component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }];

    var SignupRoutingModule = function SignupRoutingModule() {
      _classCallCheck(this, SignupRoutingModule);
    };

    SignupRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: SignupRoutingModule
    });
    SignupRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function SignupRoutingModule_Factory(t) {
        return new (t || SignupRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SignupRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupRoutingModule, [{
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
  "./src/app/user/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/toastr-message.service */
    "./src/app/shared/services/toastr-message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup-form/signup-form.component */
    "./src/app/user/signup/signup-form/signup-form.component.ts"); //import { Routes, RouterModule } from '@angular/router'; 


    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(_authService, _router, _toastrMessageService) {
        _classCallCheck(this, SignupComponent);

        this._authService = _authService;
        this._router = _router;
        this._toastrMessageService = _toastrMessageService;
      }

      _createClass(SignupComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.model = this.signupFormData.signupForm;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.signupFormData.onSubmit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signup",
        value: function signup() {
          var _this = this;

          if (!this.model.valid) {
            this.onSubmit();
            console.log("Form is invalid!");
            return;
          }

          var data = this.model["controls"];
          var body = {
            firstname: data.firstname.value,
            lastname: data.lastname.value,
            username: data.username.value,
            email: data.email.value,
            password: data.password.value,
            mobile: data.mobile.value || null
          };

          this._authService.signupUser(body).subscribe(function (data) {
            if (data.response === 'success') {
              _this._toastrMessageService.typeSuccess(data.response_message);

              _this._router.navigate(['/user/login']);
            }
          }, function (error) {
            _this._toastrMessageService.typeError(error.error.response_message || error.status_text);

            _this._router.navigate(['/user/signup']);
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.??fac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__["ToastrMessageService"]));
    };

    SignupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      viewQuery: function SignupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_4__["SignupFormComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.signupFormData = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__["ToastrMessageService"]])],
      decls: 28,
      vars: 0,
      consts: [["id", "testimonial", 1, "testimonial", "py-5", "fadeInDown"], ["id", "signupContent", 1, "container"], [1, "row"], [1, "col-md-4", "py-5", "bg-primary", "text-white", "text-center"], [1, "card-body"], ["src", "http://www.ansonika.com/mavia/img/registration_bg.svg", 2, "width", "30%"], [1, "py-3"], ["routerLink", "/user/login", 1, "underlineHover"], [1, "col-md-8", "py-5", "border"], [1, "pb-4"], [1, "form-row"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "invalidCheck2", "required", "", 1, "fadeIn"], ["for", "invalidCheck2", 1, "form-check-label"], ["type", "submit", "value", "Signup", 1, "button", 3, "click"], ["routerLink", "/login", 1, "button"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Please fill all the mandatory fields ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Already have an account? Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Please fill with your details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "signup-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "By clicking Submit, you agree to our Terms & Conditions, Visitor Agreement and Privacy Policy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_input_click_24_listener($event) {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_4__["SignupFormComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css'],
          providers: [_shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__["ToastrMessageService"]]
        }]
      }], function () {
        return [{
          type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_services_toastr_message_service__WEBPACK_IMPORTED_MODULE_2__["ToastrMessageService"]
        }];
      }, {
        signupFormData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_4__["SignupFormComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/signup/signup.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/user/signup/signup.module.ts ***!
    \**********************************************/

  /*! exports provided: SignupModule */

  /***/
  function srcAppUserSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupModule", function () {
      return SignupModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/user/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-form/signup-form.component */
    "./src/app/user/signup/signup-form/signup-form.component.ts");

    var SignupModule = function SignupModule() {
      _classCallCheck(this, SignupModule);
    };

    SignupModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: SignupModule
    });
    SignupModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function SignupModule_Factory(t) {
        return new (t || SignupModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SignupModule, {
        declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_5__["SignupFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_5__["SignupFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map