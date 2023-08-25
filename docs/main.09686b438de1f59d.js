"use strict";
(self["webpackChunkHomeDashboard"] = self["webpackChunkHomeDashboard"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 4763);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guard/auth.guard */ 5240);
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/list/list.component */ 50);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);








const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'forgot-password',
  component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent
}, {
  path: 'dashboard',
  component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
  canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: 'list',
  component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__.ListComponent,
  canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}];
let AppRoutingModule = /*#__PURE__*/(() => {
  var _class;
  class AppRoutingModule {}
  _class = AppRoutingModule;
  _class.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: _class
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
  return AppRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation.component */ 3719);



let AppComponent = /*#__PURE__*/(() => {
  var _class;
  class AppComponent {
    constructor() {
      this.button_id = "test_id";
      this.title = 'HomeDashboard';
    }
  }
  _class = AppComponent;
  _class.ɵfac = function AppComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent],
    styles: ["[_nghost-%COMP%] {\n  margin: 0 15%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nmain[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem;\n  position: relative;\n  background: var(--clr-background);\n  color: var(--clr-text);\n}\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n}"]
  });
  return AppComponent;
})();

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/navigation.component */ 3719);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 4763);
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.development */ 1261);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/auth */ 948);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat */ 2011);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2962);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5689);
/* harmony import */ var _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/functions */ 2228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 6920);
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/list/list.component */ 50);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4650);



















let AppModule = /*#__PURE__*/(() => {
  var _class;
  class AppModule {}
  _class = AppModule;
  _class.ɵfac = function AppModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: _class,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__.AngularFireModule.initializeApp(src_environments_environment_development__WEBPACK_IMPORTED_MODULE_7__.environment.firebase), _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__.AngularFirestoreModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_15__.AngularFireStorageModule, _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_16__.AngularFireFunctionsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule]
  });
  return AppModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent, _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__.ForgotPasswordComponent, _pages_list_list_component__WEBPACK_IMPORTED_MODULE_8__.ListComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__.AngularFirestoreModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_15__.AngularFireStorageModule, _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_16__.AngularFireFunctionsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 3719:
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/auth.service */ 629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 6920);






function NavigationComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavigationComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let NavigationComponent = /*#__PURE__*/(() => {
  var _class;
  class NavigationComponent {
    constructor(authService, router) {
      this.authService = authService;
      this.router = router;
      this.faHouse = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHouse;
      this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser;
    }
    userAction() {
      if (this.authService.isLoggedIn) {
        this.authService.signOut();
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
  _class = NavigationComponent;
  _class.ɵfac = function NavigationComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-navigation"]],
    decls: 21,
    vars: 4,
    consts: [[1, "home"], ["size", "xl", 3, "icon"], ["routerLink", "/dashboard"], [1, "right-menu"], ["routerLink", "list"], [1, "user--wrapper", 3, "click"], ["size", "lg", 1, "user--icon", 3, "icon"], ["class", "user--logout", 4, "ngIf"], [1, "user--logout"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav")(1, "ul")(2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ul")(8, "li")(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Einkauf");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rezepte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kategorien");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_17_listener() {
          return ctx.userAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NavigationComponent_span_19_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NavigationComponent_span_20_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faHouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
    styles: ["nav[_ngcontent-%COMP%] {\n  background-color: var(--clr-background);\n  height: 80px;\n  width: 100%;\n  padding: 16px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  box-sizing: border-box;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  gap: 32px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--clr-text);\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.home[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nnav[_ngcontent-%COMP%]   .right-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n  margin-left: auto;\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: var(--clr-primary);\n  color: var(--clr-text);\n  position: relative;\n  overflow: hidden;\n  margin-left: 48px;\n  display: flex;\n  align-items: center;\n  --anim-time: 0.5s;\n  transition: width var(--anim-time), border-radius var(--anim-time), margin-left var(--anim-time);\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%]   .user--logout[_ngcontent-%COMP%] {\n  opacity: 0;\n  font-size: 14px;\n  word-wrap: break-word;\n  position: absolute;\n  left: 40px;\n  transition: opacity var(--anim-time);\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%]   .user--icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%]:hover {\n  border-radius: 8px;\n  width: 96px;\n  margin-left: 0;\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%]:hover   .user--logout[_ngcontent-%COMP%] {\n  opacity: 1;\n}"]
  });
  return NavigationComponent;
})();

/***/ }),

/***/ 4789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

let DashboardComponent = /*#__PURE__*/(() => {
  var _class;
  class DashboardComponent {}
  _class = DashboardComponent;
  _class.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-dashboard"]],
    decls: 2,
    vars: 0,
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
  });
  return DashboardComponent;
})();

/***/ }),

/***/ 4763:
/*!********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6895);





function ForgotPasswordComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nur freigegebene EMail-Adressen sind m\u00F6glich.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "EMail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4)(6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_ng_container_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.send());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "EMail senden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.email);
  }
}
function ForgotPasswordComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Die EMail wurde versendet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Bitte schau in deinem Postfach nach!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let ForgotPasswordComponent = /*#__PURE__*/(() => {
  var _class;
  class ForgotPasswordComponent {
    constructor(authService) {
      this.authService = authService;
      this.emailSent = false;
      this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]
      });
    }
    send() {
      if (this.email.valid) {
        this.authService.forgotPassword(this.email.value);
        this.emailSent = true;
      }
    }
  }
  _class = ForgotPasswordComponent;
  _class.ɵfac = function ForgotPasswordComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-forgot-password"]],
    decls: 6,
    vars: 2,
    consts: [[1, "forgot-password-wrapper"], [4, "ngIf", "ngIfElse"], ["sentelse", ""], ["for", "input_email"], ["id", "input_email", "placeholder", "EMail", "type", "text", 1, "email", 3, "formControl"], [1, "send-button", 3, "click"]],
    template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Passwort zur\u00FCcksetzen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ForgotPasswordComponent_ng_container_3_Template, 9, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ForgotPasswordComponent_ng_template_4_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.emailSent)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
    styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.forgot-password-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--clr-primary);\n  border-radius: 8px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n  min-width: 400px;\n  max-width: 500px;\n  max-height: 800px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 16px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 4px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: var(--clr-accent);\n  border: none;\n  border-radius: 4px;\n  color: black;\n  font-size: 16px;\n  font-family: \"roboto\";\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}"]
  });
  return ForgotPasswordComponent;
})();

/***/ }),

/***/ 50:
/*!**********************************************!*\
  !*** ./src/app/pages/list/list.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

let ListComponent = /*#__PURE__*/(() => {
  var _class;
  class ListComponent {}
  _class = ListComponent;
  _class.ɵfac = function ListComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-list"]],
    decls: 2,
    vars: 0,
    template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
  });
  return ListComponent;
})();

/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);





let LoginComponent = /*#__PURE__*/(() => {
  var _class;
  class LoginComponent {
    constructor(router, authService) {
      this.router = router;
      this.authService = authService;
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    }
    ngOnInit() {
      this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
      });
    }
    login() {
      if (this.loginForm?.valid) {
        console.log("Trying to log in...");
        this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password);
      }
    }
  }
  _class = LoginComponent;
  _class.ɵfac = function LoginComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-login"]],
    decls: 14,
    vars: 1,
    consts: [[1, "login-wrapper", 3, "formGroup"], ["for", "input_email"], ["id", "input_email", "placeholder", "EMail", "formControlName", "email", "type", "text", 1, "email"], ["for", "input_password"], ["id", "input_password", "placeholder", "Passwort", "formControlName", "password", "type", "password", 1, "password"], ["routerLink", "/forgot-password"], [1, "login-button", 3, "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Passwort");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Passwort vergessen?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--clr-primary);\n  border-radius: 8px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n  min-width: 300px;\n  max-width: 500px;\n  max-height: 800px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.login-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 16px;\n}\n.login-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 4px;\n}\n.login-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 16px;\n  margin-left: auto;\n}\n.login-wrapper[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: var(--clr-accent);\n  border: none;\n  border-radius: 4px;\n  color: black;\n  font-size: 16px;\n  font-family: \"roboto\";\n}\n.login-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}"]
  });
  return LoginComponent;
})();

/***/ }),

/***/ 5240:
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);



let AuthGuard = /*#__PURE__*/(() => {
  var _class;
  class AuthGuard {
    constructor(authService, router) {
      this.authService = authService;
      this.router = router;
    }
    canActivate(route, state) {
      if (!this.authService.isLoggedIn) {
        this.router.navigate(['']);
      }
      return true;
    }
  }
  _class = AuthGuard;
  _class.ɵfac = function AuthGuard_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return AuthGuard;
})();

/***/ }),

/***/ 629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 948);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2962);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4793);





let AuthService = /*#__PURE__*/(() => {
  var _class;
  class AuthService {
    constructor(afAuth, afs, ngZone, router) {
      this.afAuth = afAuth;
      this.afs = afs;
      this.ngZone = ngZone;
      this.router = router;
      this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
      if (localStorage.getItem('user')) {
        this.userData.next(JSON.parse(localStorage.getItem('user')));
      }
      // Saving user data in localstorage when logged in and setting up null when logged out
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userData.next(user);
          localStorage.setItem('user', JSON.stringify(this.userData.value));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user'));
        }
      });
    }
    get isLoggedIn() {
      const user = JSON.parse(localStorage.getItem('user'));
      return user !== null;
    }
    setUserData(user) {
      const userRef = this.afs.doc(`users/${user.uid}`);
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      };
      return userRef.set(userData, {
        merge: true
      });
    }
    signIn(email, password) {
      return this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      }).catch(error => {
        console.error(error.message);
      });
    }
    signOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.userData.next(null);
        this.router.navigate(['login']);
      });
    }
    forgotPassword(passwordResetEmail) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {
        console.log("Password reset Mail sent");
      }).catch(error => {
        console.error(error.message);
      });
    }
  }
  _class = AuthService;
  _class.ɵfac = function AuthService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return AuthService;
})();

/***/ }),

/***/ 1261:
/*!*****************************************************!*\
  !*** ./src/environments/environment.development.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  firebase: {
    apiKey: "AIzaSyAXv3iGcMyBib0qJB_cSrCp4sE3IoE_O84",
    authDomain: "homedashboard-forster.firebaseapp.com",
    projectId: "homedashboard-forster",
    storageBucket: "homedashboard-forster.appspot.com",
    messagingSenderId: "897903658846",
    appId: "1:897903658846:web:998ea40cbbfa0f7fe5f1cf",
    measurementId: "G-8JJHB4B5MS"
  }
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);