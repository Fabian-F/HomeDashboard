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
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/list/list.component */ 50);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth-guard */ 7311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);








const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__.redirectUnauthorizedTo)(['login']);
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__.redirectLoggedInTo)(['dashboard']);
const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedInToHome
  }
}, {
  path: 'forgot-password',
  component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent
}, {
  path: 'dashboard',
  component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  }
}, {
  path: 'list',
  component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
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
    styles: ["[_nghost-%COMP%] {\n  margin: 0 15%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nmain[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem;\n  position: relative;\n  background: var(--clr-background);\n  color: var(--clr-text);\n}\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n}\n\n@media (max-width: 1100px) {\n  [_nghost-%COMP%] {\n    margin: 0 10%;\n  }\n}\n@media (max-width: 800px) {\n  [_nghost-%COMP%] {\n    margin: 0 32px;\n  }\n}\n@media (max-width: 400px) {\n  [_nghost-%COMP%] {\n    margin: 0;\n  }\n}"]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/navigation.component */ 3719);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 4763);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.development */ 1261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 6920);
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/list/list.component */ 50);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/storage.service */ 1303);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/app */ 3692);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ 7158);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ 7554);
/* harmony import */ var _pages_dashboard_week_day_week_day_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/dashboard/week-day/week-day.component */ 3365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4650);





















let AppModule = /*#__PURE__*/(() => {
  var _class;
  class AppModule {}
  _class = AppModule;
  _class.ɵfac = function AppModule_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: _class,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  _class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService, _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule, (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.initializeApp)(src_environments_environment_development__WEBPACK_IMPORTED_MODULE_7__.environment.firebase)), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.getAuth)()), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getFirestore)())]
  });
  return AppModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordComponent, _pages_list_list_component__WEBPACK_IMPORTED_MODULE_8__.ListComponent, _pages_dashboard_week_day_week_day_component__WEBPACK_IMPORTED_MODULE_10__.WeekDayComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.FirestoreModule]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 6920);







const _c0 = ["linkMenu"];
function NavigationComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavigationComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
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
      this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faBars;
      this.linkMenuCheckboxValue = false;
      this.router.events.subscribe(() => {
        this.linkMenuCheckboxValue = false;
      });
    }
    clickout(event) {
      if (!this.linkMenu) return;
      if (!this.linkMenu.nativeElement.contains(event.target)) {
        this.linkMenuCheckboxValue = false;
      }
    }
    userAction() {
      if (this.authService.isLoggedIn) {
        this.authService.logout();
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
    viewQuery: function NavigationComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.linkMenu = _t.first);
      }
    },
    hostBindings: function NavigationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_click_HostBindingHandler($event) {
          return ctx.clickout($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
      }
    },
    decls: 27,
    vars: 6,
    consts: [[1, "home"], ["size", "xl", 3, "icon"], ["routerLink", "/dashboard"], [1, "right-menu"], [1, "link-menu"], ["linkMenu", ""], [1, "link-menu--icon"], ["for", "link-menu--checkbox"], ["size", "lg", 3, "icon"], ["id", "link-menu--checkbox", "type", "checkbox", 2, "display", "none", 3, "ngModel", "ngModelChange"], ["routerLink", "list"], [1, "user--wrapper", 3, "click"], ["size", "lg", 1, "user--icon", 3, "icon"], ["class", "user--logout", 4, "ngIf"], [1, "user--logout"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav")(1, "ul")(2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "div", 4, 5)(9, "div", 6)(10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NavigationComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.linkMenuCheckboxValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul")(14, "li")(15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Einkauf");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Rezepte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Einstellungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_23_listener() {
          return ctx.userAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, NavigationComponent_span_25_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, NavigationComponent_span_26_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faHouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faBars);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.linkMenuCheckboxValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent],
    styles: ["nav[_ngcontent-%COMP%] {\n  background-color: var(--clr-background);\n  height: 80px;\n  width: 100%;\n  padding: 16px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  box-sizing: border-box;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  gap: 32px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--clr-text);\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.home[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nnav[_ngcontent-%COMP%]   .right-menu[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n  margin-left: auto;\n}\nnav[_ngcontent-%COMP%]   .link-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .link-menu[_ngcontent-%COMP%]   .link-menu--icon[_ngcontent-%COMP%] {\n  display: none;\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: var(--clr-primary);\n  color: var(--clr-text);\n  position: relative;\n  overflow: hidden;\n  margin-left: 48px;\n  display: flex;\n  align-items: center;\n  --anim-time: 0.5s;\n  transition: width var(--anim-time), border-radius var(--anim-time), margin-left var(--anim-time);\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%]   .user--logout[_ngcontent-%COMP%] {\n  opacity: 0;\n  font-size: 14px;\n  word-wrap: break-word;\n  position: absolute;\n  left: 40px;\n  transition: opacity var(--anim-time);\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%]   .user--icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%]:hover {\n  border-radius: 8px;\n  width: 96px;\n  margin-left: 0;\n}\nnav[_ngcontent-%COMP%]   .user--wrapper[_ngcontent-%COMP%]:hover   .user--logout[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n@media (max-width: 650px) {\n  .user--wrapper[_ngcontent-%COMP%] {\n    border-radius: 8px !important;\n    width: 96px !important;\n    margin-left: 0 !important;\n  }\n  .user--wrapper[_ngcontent-%COMP%]   .user--logout[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n  }\n  .link-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: hidden;\n    background-color: var(--clr-primary);\n    width: 48px;\n    height: 48px;\n    right: 112px;\n    border-radius: 50%;\n    z-index: 2;\n    transition: all 0.3s;\n  }\n  .link-menu--icon[_ngcontent-%COMP%] {\n    display: block !important;\n    color: var(--clr-text);\n    position: absolute;\n    right: 15.25px;\n    top: 14px;\n  }\n  .link-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50px;\n    left: 8px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .link-menu[_ngcontent-%COMP%]:has(#link-menu--checkbox:checked) {\n    width: 128px;\n    height: 156px;\n    border-radius: 16px;\n  }\n}"]
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
/* harmony import */ var _week_day_week_day_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./week-day/week-day.component */ 3365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);




function DashboardComponent_week_day_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "week-day", 4);
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("weekday", value_r1)("recipe", "Test-" + value_r1);
  }
}
let DashboardComponent = /*#__PURE__*/(() => {
  var _class;
  class DashboardComponent {
    constructor() {
      this.WeekDay = _week_day_week_day_component__WEBPACK_IMPORTED_MODULE_0__.WeekDay;
      this.WeekDayValues = Object.values(_week_day_week_day_component__WEBPACK_IMPORTED_MODULE_0__.WeekDay);
      this.dragging = undefined;
    }
    dragStart(event, item) {
      this.dragging = item;
    }
    dragEnd() {
      this.dragging = undefined;
    }
    drop(event) {}
  }
  _class = DashboardComponent;
  _class.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-dashboard"]],
    decls: 7,
    vars: 1,
    consts: [[2, "color", "red"], [1, "weekplan"], [1, "weekplan--calendar"], ["link", "https://www.chefkoch.de/rezepte/2683021420902347/Pikante-Pfannkuchen-mit-Schinken-und-Kaese.html", 3, "weekday", "recipe", 4, "ngFor", "ngForOf"], ["link", "https://www.chefkoch.de/rezepte/2683021420902347/Pikante-Pfannkuchen-mit-Schinken-und-Kaese.html", 3, "weekday", "recipe"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Baustelle!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Wochenplan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashboardComponent_week_day_6_Template, 1, 2, "week-day", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.WeekDayValues);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _week_day_week_day_component__WEBPACK_IMPORTED_MODULE_0__.WeekDayComponent],
    styles: [".weekplan--calendar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 32px;\n}\n\n@media (max-width: 1000px) {\n  .weekplan--calendar[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}"]
  });
  return DashboardComponent;
})();

/***/ }),

/***/ 3365:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/week-day/week-day.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekDay": () => (/* binding */ WeekDay),
/* harmony export */   "WeekDayComponent": () => (/* binding */ WeekDayComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 6920);




function WeekDayComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.linkDomain);
  }
}
const _c0 = function (a0, a1) {
  return {
    "done": a0,
    "active": a1
  };
};
var WeekDay = /*#__PURE__*/(() => {
  (function (WeekDay) {
    WeekDay["Montag"] = "Montag";
    WeekDay["Dienstag"] = "Dienstag";
    WeekDay["Mittwoch"] = "Mittwoch";
    WeekDay["Donnerstag"] = "Donnerstag";
    WeekDay["Freitag"] = "Freitag";
    WeekDay["Samstag"] = "Samstag";
    WeekDay["Sonntag"] = "Sonntag";
  })(WeekDay || (WeekDay = {}));
  return WeekDay;
})();
let WeekDayComponent = /*#__PURE__*/(() => {
  var _class;
  class WeekDayComponent {
    constructor() {
      this._done = false;
      this._link = null;
      this.isTouchMove = false;
      this.linkDomain = null;
      this.activeStyle = false;
      this.faCalendarMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCalendarMinus;
      this.faCalendarPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCalendarPlus;
      this.faLink = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faLink;
      this.weekday = WeekDay.Montag;
      this.recipe = 'Leer';
    }
    set link(value) {
      if (!value) {
        this._link = null;
        this.linkDomain = null;
        return;
      }
      this.linkDomain = this.extractDomain(value);
      if (this.linkDomain) {
        this._link = value;
      }
    }
    get link() {
      return this._link;
    }
    get done() {
      return this._done;
    }
    set done(value) {
      this._done = this.coerceBooleanProperty(value);
    }
    onClick() {
      this.done = !this.done;
    }
    onMouseDown(event) {
      console.log("mousedown");
      //if (event.cancelable) event.preventDefault();
      if (event.target instanceof HTMLAnchorElement) return;
      this.mouseDownTime = Date.now();
      this.isTouchMove = false;
      setTimeout(() => {
        if (!this.isTouchMove && this.mouseDownTime) this.activeStyle = true;
      }, 50);
    }
    onTouchMove(event) {
      this.isTouchMove = true;
      this.activeStyle = false;
    }
    onMouseUp(event) {
      if (this.isTouchMove) return;
      if (event.cancelable) event.preventDefault();
      this.activeStyle = false;
      const mouseUpTime = Date.now();
      const timeDiff = mouseUpTime - this.mouseDownTime;
      this.mouseDownTime = undefined;
      if (timeDiff > 200) {
        if (this.link) {
          window.open(this.link, "_blank");
        }
      } else {
        this.onClick();
      }
    }
    extractDomain(link) {
      try {
        const url = new URL(link);
        let domain = url.hostname;
        if (domain.startsWith("www.")) {
          domain = domain.slice(4);
        }
        return domain;
      } catch (error) {
        return null;
      }
    }
    coerceBooleanProperty(value) {
      return value != null && `${value}` !== 'false';
    }
  }
  _class = WeekDayComponent;
  _class.ɵfac = function WeekDayComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["week-day"]],
    hostBindings: function WeekDayComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchmove", function WeekDayComponent_touchmove_HostBindingHandler() {
          return ctx.onTouchMove();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
      }
    },
    inputs: {
      weekday: "weekday",
      recipe: "recipe",
      link: "link",
      done: "done"
    },
    decls: 9,
    vars: 8,
    consts: [[1, "weekday", 3, "ngClass", "mousedown", "mouseup", "touchstart", "touchend"], [1, "weekday--day"], ["size", "lg", 1, "weekday--icon", 3, "icon"], [1, "weekday--day-text"], [1, "weekday--recipe"], [1, "weekday--recipe-text"], ["class", "weekday--link", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "weekday--link", 3, "href"], ["size", "lg", 1, "weekday--link-icon", 3, "icon"], [1, "weekday--link-text"]],
    template: function WeekDayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function WeekDayComponent_Template_div_mousedown_0_listener($event) {
          return ctx.onMouseDown($event);
        })("mouseup", function WeekDayComponent_Template_div_mouseup_0_listener($event) {
          return ctx.onMouseUp($event);
        })("touchstart", function WeekDayComponent_Template_div_touchstart_0_listener($event) {
          return ctx.onMouseDown($event);
        })("touchend", function WeekDayComponent_Template_div_touchend_0_listener($event) {
          return ctx.onMouseUp($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WeekDayComponent_a_8_Template, 4, 3, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.done, ctx.activeStyle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.done ? ctx.faCalendarMinus : ctx.faCalendarPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.weekday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.linkDomain !== null);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
    styles: [".weekday[_ngcontent-%COMP%] {\n  --size: 156px;\n  --lineWidth: 10px;\n  border: 1px solid var(--clr-text);\n  width: var(--size);\n  height: var(--size);\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  margin: 1px;\n  background-color: var(--clr-secondary);\n  z-index: 1;\n  position: relative;\n}\n.weekday[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.weekday--day[_ngcontent-%COMP%] {\n  height: 30%;\n  border-bottom: 1px solid var(--clr-text);\n  position: relative;\n}\n.weekday--recipe[_ngcontent-%COMP%] {\n  height: 40%;\n}\n.weekday--recipe-text[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n.weekday--link[_ngcontent-%COMP%] {\n  height: 30%;\n  border: none;\n}\n.weekday--link-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.weekday--icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: calc(50% - 10px);\n}\n.weekday.done[_ngcontent-%COMP%] {\n  border: 2px solid var(--clr-red);\n  margin: 0;\n}\n.weekday.done[_ngcontent-%COMP%]   .weekday--day[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--clr-red);\n}\n.weekday.done[_ngcontent-%COMP%]   .weekday--recipe[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.weekday.done[_ngcontent-%COMP%]   .weekday--icon[_ngcontent-%COMP%] {\n  color: var(--clr-red);\n}\n.weekday.done[_ngcontent-%COMP%]::before, .weekday.done[_ngcontent-%COMP%]::after {\n  background-color: var(--clr-red);\n}\n.weekday.active[_ngcontent-%COMP%] {\n  border: 2px solid var(--clr-primary);\n  margin: 0;\n}\n.weekday.active[_ngcontent-%COMP%]   .weekday--day[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--clr-primary);\n}\n.weekday.active[_ngcontent-%COMP%]   .weekday--icon[_ngcontent-%COMP%] {\n  color: var(--clr-primary);\n}\n.weekday.active[_ngcontent-%COMP%]::before, .weekday.active[_ngcontent-%COMP%]::after {\n  background-color: var(--clr-primary);\n}\n.weekday[_ngcontent-%COMP%]::before {\n  content: \" \";\n  display: block;\n  width: 5px;\n  height: var(--lineWidth);\n  background-color: var(--clr-text);\n  position: absolute;\n  left: 25%;\n  top: calc(0px - var(--lineWidth));\n  z-index: 0;\n}\n.weekday[_ngcontent-%COMP%]::after {\n  content: \" \";\n  display: block;\n  width: 5px;\n  height: var(--lineWidth);\n  background-color: var(--clr-text);\n  position: absolute;\n  left: 75%;\n  top: calc(0px - var(--lineWidth));\n  z-index: 0;\n}\n\n@media (max-width: 400px) {\n  .weekday[_ngcontent-%COMP%] {\n    --size: 128px;\n  }\n  .weekday--icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .weekday--link[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-style: italic;\n    pointer-events: none;\n  }\n  .weekday--link-icon[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}"]
  });
  return WeekDayComponent;
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
/* harmony import */ var D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2687);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 7554);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 6920);









const _c0 = ["numInput"];
function ListComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Kategorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ListComponent_tr_20_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.type == null ? null : item_r11.type.category);
  }
}
function ListComponent_tr_20_fa_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 42);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r13.faCircleCheck);
  }
}
function ListComponent_tr_20_fa_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 43);
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r14.faCircleXmark);
  }
}
function ListComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ListComponent_tr_20_td_5_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ListComponent_tr_20_fa_icon_7_Template, 1, 1, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ListComponent_tr_20_fa_icon_8_Template, 1, 1, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 37)(10, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "fa-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_tr_20_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.deleteItem(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "fa-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r11.num, " ", item_r11.type == null ? null : item_r11.type.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11.type == null ? null : item_r11.type.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.showLessDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r11.onSale);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r11.onSale);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faPenToSquare);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faTrash);
  }
}
function ListComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r2.showLessDetails ? "4" : "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faSpinner)("spin", true);
  }
}
function ListComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r3.showLessDetails ? "4" : "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.allListItems.length > 0 ? "Suche fehlgeschlagen." : "Die Liste ist leer.", " ");
  }
}
function ListComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", unit_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](unit_r18.name);
  }
}
function ListComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "option", 46);
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r19.name);
  }
}
function ListComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r20.name);
  }
}
function ListComponent_fa_icon_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 42);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r8.faCircleCheck);
  }
}
function ListComponent_fa_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 43);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r9.faCircleXmark);
  }
}
let ListComponent = /*#__PURE__*/(() => {
  var _class;
  class ListComponent {
    constructor(storageService) {
      var _this = this;
      this.storageService = storageService;
      this.faPenToSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPenToSquare;
      this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrash;
      this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSpinner;
      this.faCartPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCartPlus;
      this.faCircleXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircleXmark;
      this.faCircleCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircleCheck;
      this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
      this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPrint;
      this.allListItems = [];
      this.listItems = [];
      this.itemDefs = [];
      this.categories = [];
      this.units = [];
      this.loading = false;
      this.lockUnitAndCategory = false;
      this.searchValue = '';
      this.subscriptions = [];
      this.addFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
        numControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1),
        unitControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
        typeControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
        categoryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
        onSaleControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false)
      });
      this.showLessDetails = false;
      this.subscriptions.push(this.storageService.listItems.subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (aListItems) {
          _this.loading = true;
          _this.allListItems = yield _this.populateListItems(aListItems);
          _this.listItems = yield _this.populateListItems(aListItems);
          _this.loading = false;
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      this.subscriptions.push(this.storageService.itemDefs.subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (aItemDefs) {
          _this.itemDefs = yield _this.populateItems(aItemDefs);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()));
      this.subscriptions.push(this.storageService.categories.subscribe(categories => {
        this.categories = categories.sort((a, b) => a.sortIndex - b.sortIndex);
        if (!this.addFormGroup.controls['categoryControl'].value) {
          this.addFormGroup.controls['categoryControl'].patchValue(this.categories[0].name);
        }
      }));
      this.subscriptions.push(this.storageService.units.subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (aUnits) {
          _this.units = aUnits;
          if (!_this.addFormGroup.controls['unitControl'].value) {
            _this.addFormGroup.controls['unitControl'].patchValue(_this.units.find(unit => unit.name === "Stück")?.name ?? _this.units[0].name);
          }
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()));
      this.onResize();
    }
    ngOnDestroy() {
      this.subscriptions.forEach(sub => sub.unsubscribe());
      this.subscriptions = [];
    }
    onResize() {
      this.showLessDetails = window.innerWidth < 800;
    }
    onInput(event) {
      const input = event.target;
      const value = input.value;
      const selectedItem = this.itemDefs.find(item => item.name === value);
      this.lockFormElements(!!selectedItem);
    }
    onSearch(event) {
      if (!event) {
        this.searchValue = '';
      }
      if (this.searchValue) {
        this.listItems = this.allListItems.filter(listItem => {
          return listItem.type?.name?.toLowerCase().includes(this.searchValue.toLowerCase());
        });
      } else {
        this.listItems = this.allListItems;
      }
    }
    addItem() {
      // Figure out if the item already exists and the user wants to update the number of items
      const existingListItem = this.listItems.find(listItem => {
        return listItem.type.name?.toLowerCase() === this.addFormGroup.controls['typeControl'].value.toLowerCase();
      });
      const newListItem = {
        num: this.addFormGroup.controls['numControl'].value,
        type: {
          name: this.addFormGroup.controls['typeControl'].value,
          category: this.addFormGroup.controls['categoryControl'].value,
          unit: this.addFormGroup.controls['unitControl'].value
        },
        onSale: this.addFormGroup.controls['onSaleControl'].value
      };
      if (existingListItem) {
        newListItem.num += existingListItem.num;
        this.storageService.updateItemNum(newListItem);
      } else {
        this.storageService.addItem(newListItem, !this.lockUnitAndCategory);
      }
      // Reset forms
      this.resetForm(newListItem.num, newListItem.type.unit, newListItem.type.category, newListItem.onSale);
    }
    deleteItem(listItem) {
      this.storageService.deleteItem(listItem);
    }
    resetForm(num = 1, unit = this.units.find(unit => unit.name === 'Stück') ?? this.units[0].name, category = this.categories[0].name, onSale = false) {
      this.lockFormElements(false);
      this.addFormGroup.reset({
        numControl: num,
        unitControl: unit,
        typeControl: '',
        categoryControl: category,
        onSaleControl: onSale
      });
      this.numInput?.nativeElement.select();
    }
    lockFormElements(lock) {
      this.lockUnitAndCategory = lock;
      this.setDisabled(this.addFormGroup.controls['unitControl'], this.lockUnitAndCategory);
      this.setDisabled(this.addFormGroup.controls['categoryControl'], this.lockUnitAndCategory);
    }
    populateListItems(aListItems) {
      return (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return Promise.all(aListItems.map( /*#__PURE__*/function () {
          var _ref4 = (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item) {
            const num = item.num;
            const onSale = item.onSale;
            const atype = item.type;
            let type = undefined;
            if (atype) {
              const typeData = (yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(atype)).data();
              if (typeData) {
                const name = typeData.name;
                const aCategory = typeData.category;
                const aUnit = typeData.unit;
                let category = undefined;
                let unit = undefined;
                if (aCategory) {
                  category = (yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(aCategory)).data()?.name;
                }
                if (aUnit) {
                  unit = (yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(aUnit)).data()?.name;
                }
                type = {
                  name: name,
                  category: category,
                  unit: unit
                };
              }
            }
            return {
              type: type,
              num: num,
              onSale: onSale
            };
          });
          return function (_x4) {
            return _ref4.apply(this, arguments);
          };
        }()));
      })();
    }
    populateItems(aItemDefs) {
      return (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return Promise.all(aItemDefs.map( /*#__PURE__*/function () {
          var _ref5 = (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (aItemDef) {
            const name = aItemDef.name;
            let category = undefined;
            let unit = undefined;
            const aCategory = aItemDef.category;
            if (aCategory) {
              category = (yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(aCategory)).data()?.name;
            }
            const aUnit = aItemDef.unit;
            if (aUnit) {
              unit = (yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(aUnit)).data()?.name;
            }
            return {
              name: name,
              category: category,
              unit: unit
            };
          });
          return function (_x5) {
            return _ref5.apply(this, arguments);
          };
        }()));
      })();
    }
    populateNamed(aNamed) {
      return (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return Promise.all(aNamed.map( /*#__PURE__*/function () {
          var _ref6 = (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (aNamed) {
            return aNamed?.name ?? '';
          });
          return function (_x6) {
            return _ref6.apply(this, arguments);
          };
        }()));
      })();
    }
    print() {
      let {
        printContent,
        numOfLines
      } = this.generatePrintListHTML();
      /* let printContent = '';
      let numOfLines = 61;
      for(let i = 1; i < numOfLines+1; i++) {
        printContent += `<div class="line"><span>${i}</span></div>`;
      } */
      const minRows = 1; // Doesnt work right now
      const linesPerColumn = 30;
      const numberOfColumns = Math.max(minRows, Math.ceil(numOfLines / linesPerColumn));
      console.log(numberOfColumns);
      const popup = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      if (!popup) return;
      popup.document.open();
      popup.document.write(`
      <html>
        <head>
          <style>
            @media print {
              @page {
                height: 148mm;
                width: 210mm;
                margin: 0mm !important;
              }

              body {
                display: grid;
                grid-auto-flow: column;
                grid-template-rows: repeat(30, 1fr);
                column-gap: 10px;
              }

              .category {
                font-weight: 600;
              }

            }
          </style>
        </head>
        <body onload="window.print();">
          ${printContent}
        </body>
      </html>`);
      popup.document.close();
    }
    generatePrintListHTML() {
      let htmlTagList = [];
      let numOfLines = 0;
      this.categories.sort((a, b) => a.sortIndex - b.sortIndex).forEach(category => {
        const categoryHtmlTags = [];
        const itemsInCategory = this.allListItems.filter(item => item.type.category?.toLowerCase() === category.name.toLowerCase());
        if (itemsInCategory.length) {
          categoryHtmlTags.push(`<span class="category">${category.name}:</span>`);
          itemsInCategory.forEach(item => {
            let currItem = `${item.num}`;
            currItem += `${this.units.find(unit => unit.name === item.type?.unit)?.abbreviation ?? 'x'}`;
            currItem += ` ${item.type?.name}`;
            currItem = '<span>' + currItem + '</span>';
            categoryHtmlTags.push(currItem);
          });
          htmlTagList.push(categoryHtmlTags.join(''));
          numOfLines += categoryHtmlTags.length * 2 - 1;
        }
      });
      return {
        printContent: htmlTagList.join('<span></span>'),
        numOfLines: numOfLines
      };
    }
    setDisabled(control, disabled) {
      if (disabled) {
        control.disable();
      } else {
        control.enable();
      }
    }
  }
  _class = ListComponent;
  _class.ɵfac = function ListComponent_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService));
  };
  _class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _class,
    selectors: [["app-list"]],
    viewQuery: function ListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.numInput = _t.first);
      }
    },
    hostBindings: function ListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function ListComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    decls: 41,
    vars: 16,
    consts: [[1, "list-wrapper"], [1, "table-controls"], ["placeholder", "Suche", "type", "text", 3, "ngModel", "ngModelChange", "input"], [1, "input-button", 3, "click"], ["size", "2x", 3, "icon"], [1, "print-button", 3, "click"], ["size", "lg", 3, "icon"], [1, "list-table--wrapper"], [1, "list-table"], ["id", "table-header--unit"], ["id", "table-header--name"], ["id", "table-header--category", 4, "ngIf"], ["id", "table-header--onsale"], ["id", "table-header--controls"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "list-controls--wrapper", 3, "formGroup"], ["type", "number", "placeholder", "#", "formControlName", "numControl", 1, "list-controls-num"], ["numInput", ""], ["formControlName", "unitControl", 1, "list-controls-unit"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "list", "itemList", "formControlName", "typeControl", "placeholder", "Name", 1, "list-controls-type", 3, "input"], ["id", "itemList"], ["formControlName", "categoryControl", 1, "list-controls-category"], ["tabindex", "0", 1, "list-controls-sale", 3, "keydown.enter"], ["for", "onsale-checkbox"], ["class", "green-text", "size", "lg", 3, "icon", 4, "ngIf"], ["class", "red-text", "size", "lg", 3, "icon", 4, "ngIf"], ["id", "onsale-checkbox", "type", "checkbox", "formControlName", "onSaleControl", 2, "display", "none"], ["onSaleCheckbox", ""], [1, "list-controls-button", 3, "click"], [3, "icon", "spin"], ["id", "table-header--category"], ["id", "table-cell--unit"], ["id", "table-cell--name"], ["id", "table-cell--category", 4, "ngIf"], ["id", "table-cell--onsale", 1, "list-table-cell--checkbox"], ["id", "table-cell--controls", 1, "list-table-cell--controls"], [1, "list-table--button"], [3, "icon"], [1, "list-table--button", 3, "click"], ["id", "table-cell--category"], ["size", "lg", 1, "green-text", 3, "icon"], ["size", "lg", 1, "red-text", 3, "icon"], [2, "text-align", "center"], ["size", "2x", 3, "icon", "spin"], [3, "value"]],
    template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.searchValue = $event;
        })("input", function ListComponent_Template_input_input_3_listener($event) {
          return ctx.onSearch($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_Template_button_click_4_listener() {
          ctx.searchValue = "";
          return ctx.onSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_Template_button_click_6_listener() {
          return ctx.print();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "table", 8)(10, "thead")(11, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Anzahl");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ListComponent_th_15_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Aktionen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ListComponent_tr_20_Template, 14, 8, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ListComponent_tr_21_Template, 3, 3, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ListComponent_tr_22_Template, 3, 2, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ListComponent_option_27_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ListComponent_Template_input_input_28_listener($event) {
          return ctx.onInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "datalist", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ListComponent_option_30_Template, 1, 1, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ListComponent_option_32_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function ListComponent_Template_div_keydown_enter_33_listener() {
          return ctx.addFormGroup.controls["onSaleControl"].patchValue(!ctx.addFormGroup.controls["onSaleControl"].value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ListComponent_fa_icon_35_Template, 1, 1, "fa-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ListComponent_fa_icon_36_Template, 1, 1, "fa-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListComponent_Template_button_click_39_listener() {
          return ctx.addItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "fa-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faPrint);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showLessDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.showLessDetails ? "+" : "Angebot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading && ctx.listItems.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.listItems.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.itemDefs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.addFormGroup.controls["onSaleControl"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.addFormGroup.controls["onSaleControl"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.loading ? ctx.faSpinner : ctx.faCartPlus)("spin", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent],
    styles: [".list-wrapper[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.list-wrapper[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  height: 38px;\n}\n.list-wrapper[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 150px;\n  font-size: 16px;\n  padding: 0 8px;\n  background-color: var(--clr-secondary);\n  color: var(--clr-text);\n  box-sizing: border-box;\n  border: 1px solid var(--clr-text);\n  border-right: none;\n  border-radius: 8px 0 0 8px;\n}\n.list-wrapper[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .input-button[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background-color: var(--clr-secondary);\n  border: none;\n  color: var(--clr-text);\n  border: 1px solid var(--clr-text);\n  border-left: none;\n  border-radius: 0 8px 8px 0;\n}\n.list-wrapper[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]   .print-button[_ngcontent-%COMP%] {\n  background-color: var(--clr-secondary);\n  border: 1px solid var(--clr-text);\n  border-radius: 8px;\n  height: 38px;\n  width: 42px;\n  box-sizing: border-box;\n  color: var(--clr-text);\n  margin-left: auto;\n}\n.list-wrapper[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%]:has(input:focus-visible)   .input-button[_ngcontent-%COMP%] {\n  outline: -webkit-focus-ring-color auto 1px;\n}\n\n.list-table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n}\n.list-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--clr-text);\n}\n.list-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid var(--clr-text);\n  border-right: 1px solid var(--clr-text);\n}\n.list-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th#table-header--unit[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.list-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th#table-header--name[_ngcontent-%COMP%] {\n  width: auto;\n}\n.list-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th#table-header--category[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.list-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th#table-header--onsale[_ngcontent-%COMP%] {\n  width: 10%;\n  text-align: center;\n}\n.list-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th#table-header--controls[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.list-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid var(--clr-text);\n  border-right: 1px solid var(--clr-text);\n}\n.list-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  border-right: none;\n}\n.list-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.list-table--wrapper[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid var(--clr-text);\n  border-radius: 8px;\n}\n.list-table--wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.list-table--wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0);\n}\n.list-table--wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--clr-primary);\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.list-table--wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--clr-accent);\n}\n.list-table--button[_ngcontent-%COMP%] {\n  color: var(--clr-text);\n  background-color: var(--clr-primary);\n  border: none;\n  border-radius: 4px;\n  width: 32px;\n  height: 24px;\n}\n.list-table--button[_ngcontent-%COMP%]:hover {\n  background-color: var(--clr-accent);\n}\n.list-table--button[_ngcontent-%COMP%]:active {\n  color: black;\n}\n.list-table-cell--controls[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.list-table-cell--controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.list-table-cell--controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n.list-table-cell--checkbox[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.list-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.list-controls--wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 16px;\n  gap: 0;\n}\n.list-controls--wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  border: 1px solid var(--clr-text);\n  border-right: none;\n}\n.list-controls--wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  border: 1px solid var(--clr-text);\n}\n.list-controls--wrapper.ng-untouched[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.list-controls-num[_ngcontent-%COMP%], .list-controls-unit[_ngcontent-%COMP%], .list-controls-type[_ngcontent-%COMP%], .list-controls-category[_ngcontent-%COMP%], .list-controls-sale[_ngcontent-%COMP%], .list-controls-button[_ngcontent-%COMP%] {\n  height: 42px;\n  font-size: 16px;\n  padding: 0 8px;\n  margin: 0;\n  background-color: var(--clr-primary);\n  color: var(--clr-text);\n  box-sizing: border-box;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.list-controls-num[_ngcontent-%COMP%] {\n  width: 60px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.list-controls-num[_ngcontent-%COMP%]::placeholder {\n  color: var(--clr-accent);\n}\n.list-controls-unit[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.list-controls-type[_ngcontent-%COMP%]::placeholder {\n  color: var(--clr-accent);\n}\n.list-controls-sale[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.list-controls-button[_ngcontent-%COMP%] {\n  width: 64px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n@media (max-width: 650px) {\n  .list-table--wrapper[_ngcontent-%COMP%] {\n    max-height: 55vh !important;\n  }\n  .list-controls--wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .list-controls--wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    border: 1px solid var(--clr-text);\n    border-right: none;\n    border-bottom: none;\n  }\n  .list-controls-num[_ngcontent-%COMP%] {\n    width: 50%;\n    border-bottom-left-radius: 0;\n  }\n  .list-controls-unit[_ngcontent-%COMP%] {\n    width: 50%;\n    border-top-right-radius: 8px;\n    border-right: 1px solid var(--clr-text) !important;\n  }\n  .list-controls-type[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: 1px solid var(--clr-text) !important;\n  }\n  .list-controls-category[_ngcontent-%COMP%] {\n    width: 40%;\n    border-bottom-left-radius: 8px;\n    border-bottom: 1px solid var(--clr-text) !important;\n  }\n  .list-controls-sale[_ngcontent-%COMP%] {\n    width: 20%;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid var(--clr-text) !important;\n  }\n  .list-controls-button[_ngcontent-%COMP%] {\n    width: 40%;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 8px;\n  }\n}"]
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
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password).then(() => {
          this.router.navigate(['/dashboard']);
        });
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

/***/ 629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth */ 7158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);




let AuthService = /*#__PURE__*/(() => {
  var _class;
  class AuthService {
    constructor(auth, router) {
      this.auth = auth;
      this.router = router;
      this.currentUser = null;
      this.userSubscription = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.authState)(auth).subscribe(aUser => {
        this.currentUser = aUser;
        if (aUser === null) {
          this.router.navigate(['login']);
        }
      });
    }
    ngOnDestroy() {
      this.userSubscription.unsubscribe();
    }
    login(email, password) {
      return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(this.auth, email, password);
    }
    logout() {
      return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(this.auth);
    }
    forgotPassword(email) {
      return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.sendPasswordResetEmail)(this.auth, email);
    }
    get isLoggedIn() {
      return this.currentUser !== null;
    }
  }
  _class = AuthService;
  _class.ɵfac = function AuthService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return AuthService;
})();

/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 7554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);




let StorageService = /*#__PURE__*/(() => {
  var _class;
  class StorageService {
    constructor(firestore) {
      this.firestore = firestore;
      const listItemsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'listItems');
      this.listItems = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(listItemsCollection);
      const itemDefsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'itemDefs');
      this.itemDefs = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(itemDefsCollection);
      const categoriesCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'categories');
      this.categories = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(categoriesCollection);
      const unitCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'units');
      this.units = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(unitCollection);
    }
    addItem(listItem, newItemDef) {
      var _this = this;
      return (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const itemDefsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this.firestore, 'itemDefs');
        let itemDefRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(itemDefsCollection, listItem.type.name.toLowerCase());
        if (newItemDef) {
          const categoriesCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this.firestore, 'categories');
          const unitCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this.firestore, 'units');
          const aItemDef = {
            name: _this.capitalizeFirstLetter(listItem.type.name),
            category: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(categoriesCollection, listItem.type.category?.toLowerCase()),
            unit: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(unitCollection, listItem.type.unit?.toLowerCase())
          };
          itemDefRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(itemDefsCollection, listItem.type.name.toLowerCase());
          (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(itemDefRef, aItemDef);
        }
        const listItemsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this.firestore, 'listItems');
        const aListItem = {
          num: listItem.num,
          onSale: listItem.onSale,
          type: itemDefRef
        };
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(listItemsCollection, aListItem);
      })();
    }
    updateItemNum(listItem) {
      var _this2 = this;
      return (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const listItemsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this2.firestore, 'listItems');
        const itemDefsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this2.firestore, 'itemDefs');
        const itemDefRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(itemDefsCollection, listItem.type.name.toLowerCase());
        const listItemRefQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(listItemsCollection, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("type", "==", itemDefRef));
        const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(listItemRefQuery);
        if (querySnapshot.size > 1) {
          console.error("Found duplicate Entries. Updating every entry...");
        }
        querySnapshot.forEach(queryDoc => {
          const listItemRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(listItemsCollection, queryDoc.id);
          console.log("Updating num of: ", listItemRef);
          (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(listItemRef, {
            num: listItem.num
          });
        });
      })();
    }
    deleteItem(listItem) {
      var _this3 = this;
      return (0,D_Dev_AngularProjects_HomeDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const listItemsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this3.firestore, 'listItems');
        const itemDefsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this3.firestore, 'itemDefs');
        const itemDefRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(itemDefsCollection, listItem.type.name.toLowerCase());
        const listItemRefQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(listItemsCollection, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("type", "==", itemDefRef));
        const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(listItemRefQuery);
        if (querySnapshot.size > 1) {
          console.error("Found duplicate Entries. Deleting every entry...");
        }
        querySnapshot.forEach(queryDoc => {
          const listItemRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(listItemsCollection, queryDoc.id);
          console.log("Deleting: ", listItemRef);
          (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(listItemRef);
        });
      })();
    }
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
  _class = StorageService;
  _class.ɵfac = function StorageService_Factory(t) {
    return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore));
  };
  _class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _class,
    factory: _class.ɵfac,
    providedIn: 'root'
  });
  return StorageService;
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