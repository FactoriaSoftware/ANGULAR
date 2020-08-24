function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
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

    var routes = [];

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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'BPUS';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
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
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/pages.module */
    "./src/app/pages/pages.module.ts");
    /* harmony import */


    var _services_service_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/service.module */
    "./src/app/services/service.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login/login.component */
    "./src/app/login/login/login.component.ts");
    /* harmony import */


    var _login_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/requisitos/requisitos.component */
    "./src/app/login/requisitos/requisitos.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/proyectoGrado/subir-archivo.service */
    "./src/app/services/proyectoGrado/subir-archivo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Modulos
    // Componentes
    // Forms
    // Rutas


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_12__["SubirArchivoService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _app_routes__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTES"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _services_service_module__WEBPACK_IMPORTED_MODULE_4__["ServiceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _login_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_8__["RequisitosComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _services_service_module__WEBPACK_IMPORTED_MODULE_4__["ServiceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _login_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_8__["RequisitosComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _app_routes__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTES"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _services_service_module__WEBPACK_IMPORTED_MODULE_4__["ServiceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
          providers: [_services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_12__["SubirArchivoService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: APP_ROUTES */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function () {
      return APP_ROUTES;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login/login/login.component */
    "./src/app/login/login/login.component.ts");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _login_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/requisitos/requisitos.component */
    "./src/app/login/requisitos/requisitos.component.ts"); // Rutas principales de la aplicación


    var appRoutes = [{
      path: 'login',
      component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
      data: {
        titulo: 'login'
      }
    }, {
      path: 'requisitos',
      component: _login_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_3__["RequisitosComponent"],
      data: {
        titulo: 'requisitos'
      }
    }, {
      path: '',
      component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]
    }];

    var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
      useHash: true
    });
    /***/

  },

  /***/
  "./src/app/config/config.ts":
  /*!**********************************!*\
    !*** ./src/app/config/config.ts ***!
    \**********************************/

  /*! exports provided: URL_SERVICES */

  /***/
  function srcAppConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_SERVICES", function () {
      return URL_SERVICES;
    }); // Exportamos la url que vamos a utlizar para accder al servidor


    var URL_SERVICES = 'http://localhost:3000';
    /***/
  },

  /***/
  "./src/app/login/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/login/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_usuario_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/usuario.model */
    "./src/app/models/usuario.model.ts");
    /* harmony import */


    var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      // Inyectamos el servicio del login, y el Router
      function LoginComponent(__loginService, router) {
        _classCallCheck(this, LoginComponent);

        this.__loginService = __loginService;
        this.router = router; // la variable recordar pertenece al check "recordarme", por defecto será falso

        this.recordar = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins(); // Siempre cuando se cargue el login, va a activar la función

          this.logout();
        } // Se crea la función que se activará cuando se presione el botón de iniciar sesión

      }, {
        key: "ingresar",
        value: function ingresar(form) {
          var _this = this;

          // Se crea una variable de tipo Usuario
          var usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_1__["Usuario"](form.value.usuario, form.value.contrasena); // Llamamos a la función login del servicio Login y le pasamos el usuario y la variable recordar

          this.__loginService.login(usuario, this.recordar).subscribe(function (resp) {
            // Si se inicia un estudiante...
            if (localStorage.getItem('estudiante')) {
              if (JSON.parse(localStorage.getItem('estudiante')).modalidad) {
                _this.__loginService.dejaPasarModalidades();

                _this.router.navigate(['/panel-principal']);
              } else {
                _this.router.navigate(['/requisitos']);
              }
            } else {
              _this.router.navigate(['/panel-principal']);
            }
          });
        } // Función para eliminar los datos de sesión

      }, {
        key: "logout",
        value: function logout() {
          // Asignamos a la variable global usuario, el usuario que obtenemos del localStorage
          this.usuario = localStorage.getItem('usuario') || ''; // Si existe ese usuario

          if (this.usuario.length > 0) {
            this.recordar = true;
          } // Se eliminan los datos de inicio de sesión


          localStorage.removeItem('token');
          localStorage.removeItem('id'); // Si es estudiante, se elimina el campo estudiante, si no...

          if (localStorage.getItem('estudiante')) {
            localStorage.removeItem('estudiante');
          } else {
            localStorage.removeItem('administrativo');
          } // En resumen, si el check está activado, sólo deja el dato del usuario "recordado"

        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 43,
      vars: 2,
      consts: [["id", "wrapper", 1, "login-register", "login-sidebar", 2, "background-image", "url(../assets/images/background/USCO-Huila.jpg )"], [1, "login-box", "card"], [1, "card-body"], ["ngNativeValidate", "", "id", "loginform", 1, "form-horizontal", "floating-labels", 3, "ngSubmit"], ["f", "ngForm"], ["href", "https://www.usco.edu.co/es/", 1, "text-center", "db"], ["src", "../assets/images/logos/logo-vertical-usco.png", "alt", "Home"], [1, "textTitle"], ["id", "textoLog"], [1, "form-group", "m-t-40"], [1, "col-xs-12"], ["name", "usuario", "id", "inputUsuario", "type", "text", "required", "", 1, "form-control", "floating-labels", 3, "ngModel", "ngModelChange"], [1, "bar"], ["for", "inputUsuario"], [1, "form-group"], ["ngModel", "", "name", "contrasena", "id", "inputContra", "type", "password", "required", "", 1, "form-control"], ["for", "inputContra"], [1, "form-group", "row"], [1, "col-md-12"], [1, "checkbox", "checkbox-primary", "pull-left", "p-t-0"], ["name", "recordar", "id", "checkbox-signup", "type", "checkbox", 1, "filled-in", "chk-col-red", 3, "ngModel", "ngModelChange"], ["for", "checkbox-signup"], ["href", "https://www.usco.edu.co/cambio_clave/ ", "id", "to-recover ", 1, "text-dark", "pull-right"], [1, "fa", "fa-lock", "m-r-5"], [1, "form-group", "text-center", "m-t-20"], ["id", "btnLogin", "type", "submit ", 1, "btn", "btn-md", "btn-block", "text-uppercase"], [1, "fa", "fa-arrow-right"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.ingresar(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "INSCRIPCI\xD3N DE MODALIDAD DE GRADO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FACULTAD DE INGENIER\xCDA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.usuario = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.recordar = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Recordarme ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Olvid\xE9 Mi Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "INGRESAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\xA0 \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recordar);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]],
      styles: [".login-register[_ngcontent-%COMP%] {\n    background-size: 1000px 650px;\n    background-repeat: no-repeat;\n    height: 100%;\n    width: 100%;\n    padding: 10% 0;\n    position: fixed;\n}\n\n.login-box[_ngcontent-%COMP%] {\n    width: 400px;\n    margin: 0 auto;\n}\n\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0px;\n    right: 0px;\n}\n\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 30px;\n}\n\n#recoverform[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.login-sidebar[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin-top: 0px;\n}\n\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    right: 0px;\n    position: absolute;\n    height: 100%;\n}\n\n#textoLog[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: bold;\n    color: #ffffff;\n    font-size: 13px;\n    line-height: 8px;\n}\n\n.textTitle[_ngcontent-%COMP%] {\n    background-color: #8F141B;\n    height: 85px;\n    width: 400px;\n    margin-left: -20px;\n    padding-top: 30px;\n    align-items: center;\n}\n\n#btnLogin[_ngcontent-%COMP%] {\n    background-color: #8F141B;\n    border-color: #8F141B;\n    color: #ffffff;\n}\n\n#checkbox-signup[_ngcontent-%COMP%] {\n    background-color: #8F141B;\n}\n\n\n\n@media only screen and (max-width: 479px) {\n    .login-box[_ngcontent-%COMP%] {\n        width: 411px;\n        position: relative;\n        margin: 0 auto;\n    }\n    .textTitle[_ngcontent-%COMP%] {\n        background-color: #8F141B;\n        height: 85px;\n        width: 412px;\n        margin-left: -20px;\n        padding-top: 30px;\n        align-items: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLGVBQWU7O0FBRWY7SUFDSTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcmVnaXN0ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDY1MHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwJSAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmxvZ2luLWJveCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW4tYm94IC5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xufVxuXG4ubG9naW4tYm94IC5zb2NpYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNyZWNvdmVyZm9ybSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxvZ2luLXNpZGViYXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5sb2dpbi1zaWRlYmFyIC5sb2dpbi1ib3gge1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI3RleHRvTG9nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA4cHg7XG59XG5cbi50ZXh0VGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RjE0MUI7XG4gICAgaGVpZ2h0OiA4NXB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2J0bkxvZ2luIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEYxNDFCO1xuICAgIGJvcmRlci1jb2xvcjogIzhGMTQxQjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI2NoZWNrYm94LXNpZ251cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhGMTQxQjtcbn1cblxuXG4vKiBSRVNQT05TSVZFICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgICAubG9naW4tYm94IHtcbiAgICAgICAgd2lkdGg6IDQxMXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAudGV4dFRpdGxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhGMTQxQjtcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xuICAgICAgICB3aWR0aDogNDEycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/requisitos/requisitos.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/login/requisitos/requisitos.component.ts ***!
    \**********************************************************/

  /*! exports provided: RequisitosComponent */

  /***/
  function srcAppLoginRequisitosRequisitosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequisitosComponent", function () {
      return RequisitosComponent;
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


    var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service.index */
    "./src/app/services/service.index.ts");

    var RequisitosComponent = /*#__PURE__*/function () {
      // Inyectamos todos los servicios que necesitamos
      function RequisitosComponent(router, _requisitosService, _programaService, _loginService, _modalidadesService) {
        _classCallCheck(this, RequisitosComponent);

        this.router = router;
        this._requisitosService = _requisitosService;
        this._programaService = _programaService;
        this._loginService = _loginService;
        this._modalidadesService = _modalidadesService; // Se capturan los elementos html que van a cambiar

        this.icon = document.getElementsByClassName('fa');
        this.btnContinuar = document.getElementsByClassName('btn');
      }

      _createClass(RequisitosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins(); // Se llama la función confirmarRequisitos y se le pasa los elementos capturados

          this._programaService.getPrograma();

          this._requisitosService.confirmarRequisitos(this.btnContinuar, this.icon); // Cargamos el porcentaje de los créditos cumplidos por el estudiante.


          this._modalidadesService.calcularPorcentaje();

          this.getInfoEstudiante();
        } // Función que se llama cuando se da click en el botón "continuar"

      }, {
        key: "continuar",
        value: function continuar() {
          this._loginService.dejaPasarModalidades();
        } // Asignamos a la variable global "info" la información del estudiante

      }, {
        key: "getInfoEstudiante",
        value: function getInfoEstudiante() {
          this.info = JSON.parse(localStorage.getItem('estudiante'));
        }
      }]);

      return RequisitosComponent;
    }();

    RequisitosComponent.ɵfac = function RequisitosComponent_Factory(t) {
      return new (t || RequisitosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["RequisitosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["ProgramaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["ModalidadService"]));
    };

    RequisitosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequisitosComponent,
      selectors: [["app-requisitos"]],
      decls: 39,
      vars: 2,
      consts: [[1, "login-register", 2, "background-color", "#5C0E12"], [1, "requisitos-box"], [1, "text-center"], ["src", "assets/images/logos/logo-horizontal.png", "alt", ""], [1, "text-uppercase"], [1, "font-weight-bold"], [2, "color", "#8F141B"], [1, "list-box"], [1, "fa"], [1, "botones-aceptar"], ["routerLink", "/login", "id", "btnRegresar", "type", "submit", 1, "btn", "btn-info", "btn-md", "text-uppercase"], [1, "fa", "fa-arrow-left"], ["routerLink", "/modalidades", "type", "submit", "disabled", "", 1, "btn", "btn-info", "btn-md", "text-uppercase", 3, "click"], [1, "fa", "fa-arrow-right"]],
      template: function RequisitosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Requisitos M\xEDnimos para Solicitud de Modalidad de Grado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tener m\xEDnimo el 50% de los cr\xE9ditos aprobados \xA0 \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Haber aprobado el curso de Modalidad de grado \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xA0 \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Regresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xA0 \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequisitosComponent_Template_button_click_32_listener() {
            return ctx.continuar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Continuar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\xA0 \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.info.nombres, " ", ctx.info.apellidos, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".login-register[_ngcontent-%COMP%] {\n    background-size: 1000px 650px;\n    background-repeat: no-repeat;\n    height: 100%;\n    width: 100%;\n    padding: 10% 0;\n    position: fixed;\n}\n\n.requisitos-box[_ngcontent-%COMP%] {\n    width: 650px;\n    margin: 0 auto;\n    margin-top: -45px;\n    border-radius: 10px;\n    background-color: #ffffff;\n    align-items: center;\n}\n\n.list-box[_ngcontent-%COMP%] {\n    margin-left: 80px;\n}\n\n.list-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.botones-aceptar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #8F141B;\n    border-color: #8F141B;\n}\n\n#icon-check[_ngcontent-%COMP%] {\n    color: green;\n}\n\n#icon-mal[_ngcontent-%COMP%] {\n    color: #8F141B;\n}\n\n\n\n@media only screen and (max-width: 479px) {\n    .requisitos-box[_ngcontent-%COMP%] {\n        width: 400px;\n        position: relative;\n        margin: 0 auto;\n        margin-top: 85px;\n    }\n    .botones-aceptar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        margin-top: 10px;\n    }\n    #btnRegresar[_ngcontent-%COMP%] {\n        margin-left: 17px;\n        width: 238px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVxdWlzaXRvcy9yZXF1aXNpdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQSxlQUFlOztBQUVmO0lBQ0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3JlcXVpc2l0b3MvcmVxdWlzaXRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXJlZ2lzdGVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCA2NTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMCUgMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5yZXF1aXNpdG9zLWJveCB7XG4gICAgd2lkdGg6IDY1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGlzdC1ib3gge1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuXG4ubGlzdC1ib3ggbGkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJvdG9uZXMtYWNlcHRhciBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RjE0MUI7XG4gICAgYm9yZGVyLWNvbG9yOiAjOEYxNDFCO1xufVxuXG4jaWNvbi1jaGVjayB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4jaWNvbi1tYWwge1xuICAgIGNvbG9yOiAjOEYxNDFCO1xufVxuXG5cbi8qIFJlc3BvbnNpdmUgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgIC5yZXF1aXNpdG9zLWJveCB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogODVweDtcbiAgICB9XG4gICAgLmJvdG9uZXMtYWNlcHRhciBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAjYnRuUmVncmVzYXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTdweDtcbiAgICAgICAgd2lkdGg6IDIzOHB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequisitosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-requisitos',
          templateUrl: './requisitos.component.html',
          styleUrls: ['./requisitos.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["RequisitosService"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["ProgramaService"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_2__["ModalidadService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/solicitud.ts":
  /*!*************************************!*\
    !*** ./src/app/models/solicitud.ts ***!
    \*************************************/

  /*! exports provided: Solicitud */

  /***/
  function srcAppModelsSolicitudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Solicitud", function () {
      return Solicitud;
    });

    var Solicitud = // Modelo de solicitud
    function Solicitud(nombreEst2, codigoEst2, identificacionEst2, programaEst2, correoEst2, nombreEst3, codigoEst3, identificacionEst3, programaEst3, correoEst3, titulo_proyecto, linea_investigacion, director_proyecto, formulacion_problema, alcance_limitaciones, metodologia, anteproyecto, proyecto, documento_final, notas, estado) {
      _classCallCheck(this, Solicitud);

      this.nombreEst2 = nombreEst2;
      this.codigoEst2 = codigoEst2;
      this.identificacionEst2 = identificacionEst2;
      this.programaEst2 = programaEst2;
      this.correoEst2 = correoEst2;
      this.nombreEst3 = nombreEst3;
      this.codigoEst3 = codigoEst3;
      this.identificacionEst3 = identificacionEst3;
      this.programaEst3 = programaEst3;
      this.correoEst3 = correoEst3;
      this.titulo_proyecto = titulo_proyecto;
      this.linea_investigacion = linea_investigacion;
      this.director_proyecto = director_proyecto;
      this.formulacion_problema = formulacion_problema;
      this.alcance_limitaciones = alcance_limitaciones;
      this.metodologia = metodologia;
      this.anteproyecto = anteproyecto;
      this.proyecto = proyecto;
      this.documento_final = documento_final;
      this.notas = notas;
      this.estado = estado;
    };
    /***/

  },

  /***/
  "./src/app/models/usuario.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/usuario.model.ts ***!
    \*****************************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppModelsUsuarioModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });

    var Usuario = // Modelo de Usuario
    function Usuario(usuario, contrasena) {
      _classCallCheck(this, Usuario);

      this.usuario = usuario;
      this.contrasena = contrasena;
    };
    /***/

  },

  /***/
  "./src/app/pages/modalidades/modalidades.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/modalidades/modalidades.component.ts ***!
    \************************************************************/

  /*! exports provided: ModalidadesComponent */

  /***/
  function srcAppPagesModalidadesModalidadesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalidadesComponent", function () {
      return ModalidadesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ModalidadesComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Requisitos:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Haber aprobado el curso de Modalidad de grado. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hacer Solicitud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var modalidad_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](modalidad_r1.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cumplir m\xE1s del ", modalidad_r1.porcentaje_creditos * 100, "% de los cr\xE9ditos totales. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", modalidad_r1.url);
      }
    }

    var ModalidadesComponent = /*#__PURE__*/function () {
      // Inyectamos los servicios
      function ModalidadesComponent(_requisitoService, _modalidadesService, _programaService) {
        _classCallCheck(this, ModalidadesComponent);

        this._requisitoService = _requisitoService;
        this._modalidadesService = _modalidadesService;
        this._programaService = _programaService;
        this.modalidades = []; // Lista que almacenará la información de las modalidades
        // Obtenemos los elementos que vamos a desactivar si el estudiante no cumple con el porcentaje

        this.btnSeleccionar = document.getElementsByClassName('btn');
        this.cardHeader = document.getElementsByClassName('card-header');
      }

      _createClass(ModalidadesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins(); // Pasamos el porcentaje calculado en el servicio de la modalidad al la variable "porcentajeAprobado"

          this.porcentajeAprobado = this._modalidadesService.porcentaje; // Obtenemos la información del estudiante y se la pasamos a la variable info

          var estudiante = JSON.parse(localStorage.getItem('estudiante'));
          this.info = estudiante;
          this.getModalidades(); // Enviamos los elemntos que queremos al servicio de la modalidad

          this._modalidadesService.seleccionarModalidad(this.btnSeleccionar, this.cardHeader);
        } // Función que nos permite obtener la información de las modalidades

      }, {
        key: "getModalidades",
        value: function getModalidades() {
          var _this2 = this;

          this._modalidadesService.getModalidades().subscribe(function (resp) {
            _this2.modalidades = resp.modalidades;
          });
        }
      }]);

      return ModalidadesComponent;
    }();

    ModalidadesComponent.ɵfac = function ModalidadesComponent_Factory(t) {
      return new (t || ModalidadesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["RequisitosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ModalidadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]));
    };

    ModalidadesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalidadesComponent,
      selectors: [["app-modalidades"]],
      decls: 22,
      vars: 4,
      consts: [[1, "login-register", 2, "background-color", "#5C0E12"], [1, "requisitos-box"], ["routerLink", "/login", "id", "btnRegresar", "type", "submit", 1, "text-uppercase"], [1, "fa", "fa-times"], [1, "contenido"], [1, "text-center"], ["src", "assets/images/logos/logo-horizontal.png", "alt", ""], [1, "text-uppercase", "text-center"], [1, "font-weight-bold"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card-info", "border", "border-secondary", "rounded"], [1, "card-header", "text-uppercase", 2, "background-color", "#8F141B", "color", "#ffffff"], [1, "card-body", 2, "border-color", "#8F141B"], [1, "card-title"], [1, "text-left"], [1, "btnSolicitud"], ["disabled", "", 1, "btn", "btn-sm", 3, "routerLink"], [1, "fa", "fa-clipboard"]],
      template: function ModalidadesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "salir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ModalidadesComponent_div_21_Template, 22, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenido(a) ", ctx.info.nombres, ", por favor selecciona tu modalidad de Grado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Recuerda que has cumplido con el ", ctx.porcentajeAprobado, "% (", ctx.info.creditos_aprobados, ") de los cr\xE9ditos totales de tu carrera. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modalidades);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".login-register[_ngcontent-%COMP%] {\n    background-size: 1000px 650px;\n    background-repeat: no-repeat;\n    height: 100%;\n    width: 100%;\n    padding: 10% 0;\n    position: fixed;\n}\n\n.requisitos-box[_ngcontent-%COMP%] {\n    width: 1180px;\n    height: 560px;\n    margin: 0 auto;\n    margin-top: -110px;\n    border-radius: 10px;\n    background-color: #ffffff;\n    padding: 0px 40px 0px 40px;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: #8F141B;\n}\n\n.contenido[_ngcontent-%COMP%] {\n    margin-top: -10px;\n}\n\n.list-box[_ngcontent-%COMP%] {\n    margin-left: 0px;\n}\n\n.list-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.btnRegresar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #8F141B;\n    border-color: #8F141B;\n    color: #ffffff;\n}\n\n.btnSolicitud[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #8F141B;\n    border-color: #8F141B;\n    color: #ffffff;\n}\n\n\n\n@media only screen and (max-width: 479px) {\n    .login-register[_ngcontent-%COMP%] {\n        background-size: 1000px 650px;\n        height: 100%;\n        width: 100%;\n        padding: 10% 0;\n        position: relative;\n    }\n    .requisitos-box[_ngcontent-%COMP%] {\n        width: 400px;\n        position: relative;\n        height: auto;\n        margin: 0 auto;\n        margin-top: 35px;\n        padding-bottom: 15px;\n    }\n    img[_ngcontent-%COMP%] {\n        margin-top: 30px;\n    }\n    .botones-aceptar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        margin-top: 10px;\n    }\n    #btnRegresar[_ngcontent-%COMP%] {\n        margin-left: 17px;\n        width: 238px;\n    }\n    img[_ngcontent-%COMP%] {\n        margin-left: -20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWxpZGFkZXMvbW9kYWxpZGFkZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBR0EsZUFBZTs7QUFFZjtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCLFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osY0FBYztRQUNkLGdCQUFnQjtRQUNoQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RhbGlkYWRlcy9tb2RhbGlkYWRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXJlZ2lzdGVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCA2NTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMCUgMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5yZXF1aXNpdG9zLWJveCB7XG4gICAgd2lkdGg6IDExODBweDtcbiAgICBoZWlnaHQ6IDU2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IC0xMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMHB4IDQwcHggMHB4IDQwcHg7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiAjOEYxNDFCO1xufVxuXG4uY29udGVuaWRvIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmxpc3QtYm94IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ubGlzdC1ib3ggdWwgbGkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0blJlZ3Jlc2FyIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhGMTQxQjtcbiAgICBib3JkZXItY29sb3I6ICM4RjE0MUI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG5Tb2xpY2l0dWQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEYxNDFCO1xuICAgIGJvcmRlci1jb2xvcjogIzhGMTQxQjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuXG4vKiBSZXNwb25zaXZlICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgICAubG9naW4tcmVnaXN0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCA2NTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTAlIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnJlcXVpc2l0b3MtYm94IHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgICAuYm90b25lcy1hY2VwdGFyIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgICNidG5SZWdyZXNhciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgICAgICB3aWR0aDogMjM4cHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalidadesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modalidades',
          templateUrl: './modalidades.component.html',
          styleUrls: ['./modalidades.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["RequisitosService"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ModalidadService"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]
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


    var _services_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/breadcrumbs/breadcrumbs.component */
    "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PagesComponent = /*#__PURE__*/function () {
      // No estoy muy seguro si se usa, pero lo dejo por si acaso :v
      function PagesComponent(_loginService, _programaService) {
        _classCallCheck(this, PagesComponent);

        this._loginService = _loginService;
        this._programaService = _programaService;
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins();
        }
      }]);

      return PagesComponent;
    }();

    PagesComponent.ɵfac = function PagesComponent_Factory(t) {
      return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]));
    };

    PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagesComponent,
      selectors: [["app-pages"]],
      decls: 7,
      vars: 0,
      consts: [["id", "main-wrapper"], [1, "page-wrapper"], [1, "container-fluid"]],
      template: function PagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-breadcrumbs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pages',
          templateUrl: './pages.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _services_service_index__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _services_service_index__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]
        }];
      }, null);
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


    var _panel_principal_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./panel-principal/main/main.component */
    "./src/app/pages/panel-principal/main/main.component.ts");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _panel_principal_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./panel-principal/perfil/perfil.component */
    "./src/app/pages/panel-principal/perfil/perfil.component.ts");
    /* harmony import */


    var _solicitudes_pasantia_pasantia_pasantia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./solicitudes/pasantia/pasantia/pasantia.component */
    "./src/app/pages/solicitudes/pasantia/pasantia/pasantia.component.ts");
    /* harmony import */


    var _solicitudes_semillero_semillero_semillero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./solicitudes/semillero/semillero/semillero.component */
    "./src/app/pages/solicitudes/semillero/semillero/semillero.component.ts");
    /* harmony import */


    var _modalidades_modalidades_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modalidades/modalidades.component */
    "./src/app/pages/modalidades/modalidades.component.ts");
    /* harmony import */


    var _pages_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages.routes */
    "./src/app/pages/pages.routes.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./solicitudes/proyecto/formulario-inscripcion/formulario-inscripcion.component */
    "./src/app/pages/solicitudes/proyecto/formulario-inscripcion/formulario-inscripcion.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_seguimiento_modalidad_seguimiento_modalidad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./solicitudes/proyecto/seguimiento-modalidad/seguimiento-modalidad.component */
    "./src/app/pages/solicitudes/proyecto/seguimiento-modalidad/seguimiento-modalidad.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_anteproyecto_anteproyecto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./solicitudes/proyecto/anteproyecto/anteproyecto.component */
    "./src/app/pages/solicitudes/proyecto/anteproyecto/anteproyecto.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./solicitudes/proyecto/proyecto/proyecto.component */
    "./src/app/pages/solicitudes/proyecto/proyecto/proyecto.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_doc_final_doc_final_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./solicitudes/proyecto/doc-final/doc-final.component */
    "./src/app/pages/solicitudes/proyecto/doc-final/doc-final.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _solicitudes_proyecto_sustentacion_sustentacion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./solicitudes/proyecto/sustentacion/sustentacion.component */
    "./src/app/pages/solicitudes/proyecto/sustentacion/sustentacion.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Componentes
    // Rutas de pages
    // Pipes


    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _pages_routes__WEBPACK_IMPORTED_MODULE_9__["PAGES_ROUTES"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
        declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _panel_principal_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _panel_principal_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"], _solicitudes_pasantia_pasantia_pasantia_component__WEBPACK_IMPORTED_MODULE_6__["PasantiaComponent"], _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_12__["FormularioInscripcionComponent"], _solicitudes_semillero_semillero_semillero_component__WEBPACK_IMPORTED_MODULE_7__["SemilleroComponent"], _modalidades_modalidades_component__WEBPACK_IMPORTED_MODULE_8__["ModalidadesComponent"], _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_12__["FormularioInscripcionComponent"], _solicitudes_proyecto_seguimiento_modalidad_seguimiento_modalidad_component__WEBPACK_IMPORTED_MODULE_13__["SeguimientoModalidadComponent"], _solicitudes_proyecto_anteproyecto_anteproyecto_component__WEBPACK_IMPORTED_MODULE_14__["AnteproyectoComponent"], _solicitudes_proyecto_proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_15__["ProyectoComponent"], _solicitudes_proyecto_doc_final_doc_final_component__WEBPACK_IMPORTED_MODULE_16__["DocFinalComponent"], _solicitudes_proyecto_sustentacion_sustentacion_component__WEBPACK_IMPORTED_MODULE_18__["SustentacionComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _panel_principal_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _panel_principal_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"], _solicitudes_pasantia_pasantia_pasantia_component__WEBPACK_IMPORTED_MODULE_6__["PasantiaComponent"], _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_12__["FormularioInscripcionComponent"], _solicitudes_semillero_semillero_semillero_component__WEBPACK_IMPORTED_MODULE_7__["SemilleroComponent"], _modalidades_modalidades_component__WEBPACK_IMPORTED_MODULE_8__["ModalidadesComponent"], _solicitudes_proyecto_proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_15__["ProyectoComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _panel_principal_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _panel_principal_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"], _solicitudes_pasantia_pasantia_pasantia_component__WEBPACK_IMPORTED_MODULE_6__["PasantiaComponent"], _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_12__["FormularioInscripcionComponent"], _solicitudes_semillero_semillero_semillero_component__WEBPACK_IMPORTED_MODULE_7__["SemilleroComponent"], _modalidades_modalidades_component__WEBPACK_IMPORTED_MODULE_8__["ModalidadesComponent"], _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_12__["FormularioInscripcionComponent"], _solicitudes_proyecto_seguimiento_modalidad_seguimiento_modalidad_component__WEBPACK_IMPORTED_MODULE_13__["SeguimientoModalidadComponent"], _solicitudes_proyecto_anteproyecto_anteproyecto_component__WEBPACK_IMPORTED_MODULE_14__["AnteproyectoComponent"], _solicitudes_proyecto_proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_15__["ProyectoComponent"], _solicitudes_proyecto_doc_final_doc_final_component__WEBPACK_IMPORTED_MODULE_16__["DocFinalComponent"], _solicitudes_proyecto_sustentacion_sustentacion_component__WEBPACK_IMPORTED_MODULE_18__["SustentacionComponent"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _panel_principal_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _panel_principal_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"], _solicitudes_pasantia_pasantia_pasantia_component__WEBPACK_IMPORTED_MODULE_6__["PasantiaComponent"], _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_12__["FormularioInscripcionComponent"], _solicitudes_semillero_semillero_semillero_component__WEBPACK_IMPORTED_MODULE_7__["SemilleroComponent"], _modalidades_modalidades_component__WEBPACK_IMPORTED_MODULE_8__["ModalidadesComponent"], _solicitudes_proyecto_proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_15__["ProyectoComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _pages_routes__WEBPACK_IMPORTED_MODULE_9__["PAGES_ROUTES"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.routes.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.routes.ts ***!
    \***************************************/

  /*! exports provided: PAGES_ROUTES */

  /***/
  function srcAppPagesPagesRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function () {
      return PAGES_ROUTES;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _panel_principal_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./panel-principal/main/main.component */
    "./src/app/pages/panel-principal/main/main.component.ts");
    /* harmony import */


    var _services_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _panel_principal_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./panel-principal/perfil/perfil.component */
    "./src/app/pages/panel-principal/perfil/perfil.component.ts");
    /* harmony import */


    var _solicitudes_pasantia_pasantia_pasantia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./solicitudes/pasantia/pasantia/pasantia.component */
    "./src/app/pages/solicitudes/pasantia/pasantia/pasantia.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./solicitudes/proyecto/formulario-inscripcion/formulario-inscripcion.component */
    "./src/app/pages/solicitudes/proyecto/formulario-inscripcion/formulario-inscripcion.component.ts");
    /* harmony import */


    var _solicitudes_semillero_semillero_semillero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./solicitudes/semillero/semillero/semillero.component */
    "./src/app/pages/solicitudes/semillero/semillero/semillero.component.ts");
    /* harmony import */


    var _modalidades_modalidades_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modalidades/modalidades.component */
    "./src/app/pages/modalidades/modalidades.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_seguimiento_modalidad_seguimiento_modalidad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./solicitudes/proyecto/seguimiento-modalidad/seguimiento-modalidad.component */
    "./src/app/pages/solicitudes/proyecto/seguimiento-modalidad/seguimiento-modalidad.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_anteproyecto_anteproyecto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./solicitudes/proyecto/anteproyecto/anteproyecto.component */
    "./src/app/pages/solicitudes/proyecto/anteproyecto/anteproyecto.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./solicitudes/proyecto/proyecto/proyecto.component */
    "./src/app/pages/solicitudes/proyecto/proyecto/proyecto.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_doc_final_doc_final_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./solicitudes/proyecto/doc-final/doc-final.component */
    "./src/app/pages/solicitudes/proyecto/doc-final/doc-final.component.ts");
    /* harmony import */


    var _solicitudes_proyecto_sustentacion_sustentacion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./solicitudes/proyecto/sustentacion/sustentacion.component */
    "./src/app/pages/solicitudes/proyecto/sustentacion/sustentacion.component.ts");

    var pagesRoutes = [{
      path: 'modalidades',
      component: _modalidades_modalidades_component__WEBPACK_IMPORTED_MODULE_8__["ModalidadesComponent"],
      data: {
        titulo: 'Modalidades Disponibles'
      },
      canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
    }, {
      path: 'solicitud-pasantia-supervisada',
      component: _solicitudes_pasantia_pasantia_pasantia_component__WEBPACK_IMPORTED_MODULE_5__["PasantiaComponent"],
      data: {
        titulo: 'Solicitud Pasantía'
      },
      canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
    }, {
      path: 'solicitud-semillero-de-investigacion',
      component: _solicitudes_semillero_semillero_semillero_component__WEBPACK_IMPORTED_MODULE_7__["SemilleroComponent"],
      data: {
        titulo: 'Solicitud Semillero'
      },
      canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
    }, {
      path: 'solicitud-proyecto-de-grado',
      component: _solicitudes_proyecto_formulario_inscripcion_formulario_inscripcion_component__WEBPACK_IMPORTED_MODULE_6__["FormularioInscripcionComponent"],
      data: {
        titulo: 'Solicitud Proyecto'
      },
      canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
    }, {
      path: '',
      component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
      canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]],
      children: [{
        path: 'panel-principal',
        component: _panel_principal_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        data: {
          titulo: 'Panel Principal'
        }
      }, {
        path: 'perfil',
        component: _panel_principal_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__["PerfilComponent"],
        data: {
          titulo: 'Perfil de Usuario'
        }
      }, {
        path: 'seguimiento-proyecto-de-grado',
        component: _solicitudes_proyecto_seguimiento_modalidad_seguimiento_modalidad_component__WEBPACK_IMPORTED_MODULE_9__["SeguimientoModalidadComponent"],
        data: {
          titulo: 'Seguimiento Proyecto'
        },
        canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
      }, {
        path: 'anteproyecto',
        component: _solicitudes_proyecto_anteproyecto_anteproyecto_component__WEBPACK_IMPORTED_MODULE_10__["AnteproyectoComponent"],
        data: {
          titulo: 'anteproyecto'
        },
        canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
      }, {
        path: 'proyecto',
        component: _solicitudes_proyecto_proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_11__["ProyectoComponent"],
        data: {
          titulo: 'proyecto'
        },
        canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
      }, {
        path: 'documento-final',
        component: _solicitudes_proyecto_doc_final_doc_final_component__WEBPACK_IMPORTED_MODULE_12__["DocFinalComponent"],
        data: {
          titulo: 'anteproyecto'
        },
        canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
      }, {
        path: 'sustentacion',
        component: _solicitudes_proyecto_sustentacion_sustentacion_component__WEBPACK_IMPORTED_MODULE_13__["SustentacionComponent"],
        data: {
          titulo: 'sustentacion'
        },
        canActivate: [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"]]
      }, {
        path: '',
        redirectTo: '/panel-principal',
        pathMatch: 'full'
      }]
    }];

    var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(pagesRoutes, {
      useHash: true
    });
    /***/

  },

  /***/
  "./src/app/pages/panel-principal/main/main.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/panel-principal/main/main.component.ts ***!
    \**************************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppPagesPanelPrincipalMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Obtenemos la información del estudiante y se la pasamos a la variable info
          var estudiante = JSON.parse(localStorage.getItem('estudiante'));
          this.info = estudiante;
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 13,
      vars: 2,
      consts: [[1, "text-center"], ["src", "assets/images/logos/logo-horizontal.png", "alt", ""]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "M\xF3dulo de inscripci\xF3n de modalidad de grado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Facultad de Ingenier\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("BIENVENIDO (A) ", ctx.info.nombres, " ", ctx.info.apellidos, "");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/panel-principal/perfil/perfil.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/panel-principal/perfil/perfil.component.ts ***!
    \******************************************************************/

  /*! exports provided: PerfilComponent */

  /***/
  function srcAppPagesPanelPrincipalPerfilPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilComponent", function () {
      return PerfilComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../pipes/imagen.pipe */
    "./src/app/pipes/imagen.pipe.ts");

    function PerfilComponent_div_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "C\xF3digo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.info.codigo);
      }
    }

    function PerfilComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cr\xE9ditos Aprobados");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.info.creditos_aprobados);
      }
    }

    var PerfilComponent = /*#__PURE__*/function () {
      // Inyectamos el servicio
      function PerfilComponent(_programaService) {
        _classCallCheck(this, PerfilComponent);

        this._programaService = _programaService;
      }

      _createClass(PerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins();
          this.setInfo();
          this.getPrograma();
        } // Obtenos el programa y se lo pasamos a la variable global

      }, {
        key: "getPrograma",
        value: function getPrograma() {
          var _this3 = this;

          this._programaService.getPrograma().subscribe(function (resp) {
            var infoPrograma = resp['programa'];
            _this3.programa = infoPrograma.nombre;
          });
        } // Función que pasamos el la información del estudiante y el tipo de usuario

      }, {
        key: "setInfo",
        value: function setInfo() {
          // Obtenemos información del estudiante y el administrativo
          var estudiante = localStorage.getItem('estudiante');
          var administrativo = localStorage.getItem('administrativo'); // Si existe el estudiante...

          if (estudiante) {
            this.tipoUsuario = 'estudiante';
            this.info = JSON.parse(estudiante);
          } else {
            this.tipoUsuario = 'administrativo';
            this.info = JSON.parse(administrativo);
          }
        }
      }]);

      return PerfilComponent;
    }();

    PerfilComponent.ɵfac = function PerfilComponent_Factory(t) {
      return new (t || PerfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]));
    };

    PerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerfilComponent,
      selectors: [["app-perfil"]],
      decls: 71,
      vars: 13,
      consts: [[1, "row"], [1, "col-5"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "text-center"], ["height", "130px", "width", "110px", "alt", "user", 1, "img-rounded", 3, "src"], ["te", "", 1, "row", "p-t-20", 2, "padding-left", "15px"], [1, "col-lg-12"], [1, "form-group"], ["for", "exampleInputuname"], [1, "input-group"], [1, "input-group-addon"], [1, "fa", "fa-user"], ["type", "text", "id", "exampleInputuname", 1, "form-control", 3, "value"], ["te", "", 1, "row", "p-t-0", 2, "padding-left", "15px"], [1, "col-md-6"], [1, "fa", "fa-id-card-o"], [1, "fa", "fa-phone"], [1, "col-7"], [1, "row", "p-t-0", 2, "padding-left", "15px"], [1, "fa", "fa", "fa-user-circle-o"], [1, "fa", "fa-book"], ["class", "col-md-6", 4, "ngIf"], [1, "col-lg-7"], [1, "mdi", "mdi-email"], [1, "fa", "fa-drivers-license"], [1, "fa", "fa-check-square-o"]],
      template: function PerfilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Informaci\xF3n Personal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nombre Completo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tel\xE9fono");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Informaci\xF3n Acad\xE9mica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Programa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, PerfilComponent_div_60_Template, 8, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PerfilComponent_div_61_Template, 8, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Correo Institucional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 14);

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, ctx.info.imagen, ctx.tipoUsuario), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("value", "", ctx.info.nombres, " ", ctx.info.apellidos, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.identificacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.telefono);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.rol);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.programa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.codigo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.creditos_aprobados);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.correo);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagenPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhbmVsLXByaW5jaXBhbC9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perfil',
          templateUrl: './perfil.component.html',
          styleUrls: ['./perfil.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitudes/pasantia/pasantia/pasantia.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/solicitudes/pasantia/pasantia/pasantia.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PasantiaComponent */

  /***/
  function srcAppPagesSolicitudesPasantiaPasantiaPasantiaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasantiaComponent", function () {
      return PasantiaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PasantiaComponent = /*#__PURE__*/function () {
      function PasantiaComponent() {
        _classCallCheck(this, PasantiaComponent);
      }

      _createClass(PasantiaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PasantiaComponent;
    }();

    PasantiaComponent.ɵfac = function PasantiaComponent_Factory(t) {
      return new (t || PasantiaComponent)();
    };

    PasantiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PasantiaComponent,
      selectors: [["app-pasantia"]],
      decls: 2,
      vars: 0,
      template: function PasantiaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pasantia works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGVzL3Bhc2FudGlhL3Bhc2FudGlhL3Bhc2FudGlhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasantiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pasantia',
          templateUrl: './pasantia.component.html',
          styleUrls: ['./pasantia.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitudes/proyecto/anteproyecto/anteproyecto.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/solicitudes/proyecto/anteproyecto/anteproyecto.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AnteproyectoComponent */

  /***/
  function srcAppPagesSolicitudesProyectoAnteproyectoAnteproyectoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnteproyectoComponent", function () {
      return AnteproyectoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/proyectoGrado/subir-archivo.service */
    "./src/app/services/proyectoGrado/subir-archivo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AnteproyectoComponent_label_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click aqu\xED para subir el Anteproyecto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AnteproyectoComponent_label_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nombreArchivo);
      }
    }

    var AnteproyectoComponent = /*#__PURE__*/function () {
      function AnteproyectoComponent(subirArchivoservice) {
        _classCallCheck(this, AnteproyectoComponent);

        this.subirArchivoservice = subirArchivoservice;
        this.MAX_SIZE_FILE = 25000000;
        this.anteproyecto = new FormData();
      }

      _createClass(AnteproyectoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Obtenemos la información del estudiante y se la pasamos a la variable info
          var estudiante = JSON.parse(localStorage.getItem('estudiante'));
          this.info = estudiante;
        }
      }, {
        key: "getFile",
        value: function getFile(file) {
          if (file.size > this.MAX_SIZE_FILE) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Lo Sentimos',
              html: "<p><b>".concat(file.name, "</b>, supera las 25 MB</p>"),
              icon: 'error',
              confirmButtonText: 'Ok',
              showCancelButton: false,
              confirmButtonColor: '#60D89C'
            }).then(function () {
              location.reload();
            });
          } else {
            this.nombreArchivo = file.name;
            var anteproyecto = file;
            this.anteproyecto.append('anteproyecto', anteproyecto, anteproyecto.name);
          }
        }
      }, {
        key: "enviarpdf",
        value: function enviarpdf() {
          var _this4 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "\xBFSeguro de subir este archivo? ",
            text: this.nombreArchivo,
            icon: 'warning',
            cancelButtonText: 'NO',
            confirmButtonText: 'SI',
            showCancelButton: true,
            confirmButtonColor: '#60D89C',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              var idEstudiante = JSON.parse(localStorage.getItem('estudiante'))._id; // call service


              _this4.subirArchivoservice.uploadFile(idEstudiante, _this4.anteproyecto).subscribe();
            }
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(e) {
          this.uploadedFiles = e.target.files;
        }
      }]);

      return AnteproyectoComponent;
    }();

    AnteproyectoComponent.ɵfac = function AnteproyectoComponent_Factory(t) {
      return new (t || AnteproyectoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__["SubirArchivoService"]));
    };

    AnteproyectoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnteproyectoComponent,
      selectors: [["app-anteproyecto"]],
      decls: 49,
      vars: 3,
      consts: [["id", "main-wrapper"], [1, "container"], ["id", "titulo"], ["id", "titulo-proyecto"], ["id", "Descripcion"], ["id", "descripcion"], ["id", "apa"], ["id", "btn_subir", 1, "row", "text-xl-center"], [1, "col-lg-6"], ["for", "imagen2", "class", "labels custom-file-upload", 4, "ngIf"], ["for", "imagen2", "class", "labels custom-file-upload text-center", 4, "ngIf"], ["name", "imagen2", "id", "imagen2", "type", "file", "accept", "application/pdf", 1, "imagenes-secundarias", 3, "change"], [1, "btn-btnSuccess", 2, "width", "50%", 3, "click"], [1, "container-fluid"], ["for", "imagen2", 1, "labels", "custom-file-upload"], ["for", "imagen2", 1, "labels", "custom-file-upload", "text-center"]],
      template: function AnteproyectoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ANTEPROYECTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TITULO:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DESCRIPCI\xD3N:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " El documento debe tener los siguientes aspectos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Integrantes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Linea de Investigaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Titulo (Debe contener m\xE1ximo 20 palabras)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Introducci\xF3n (Debe contener m\xE1ximo 2 hojas)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Justificaci\xF3n (Debe contener m\xE1ximo 1 hoja)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Problema (Debe contener m\xE1ximo 1 hoja)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Objetivos generales y especifico (Debe contener m\xE1ximo 1 hoja)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Estado del arte (Debe contener m\xE1ximo 3 hojas)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Referencias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TODO EL DOCUMENTO DEBE PRESENTARSE CON LAS NORMAS APA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AnteproyectoComponent_label_36_Template, 2, 0, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AnteproyectoComponent_label_37_Template, 2, 1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Recuerda que debe ser un archivo PDF, de tama\xF1o menor a 25MB.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AnteproyectoComponent_Template_input_change_42_listener($event) {
            return ctx.getFile($event.target.files[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnteproyectoComponent_Template_button_click_45_listener() {
            return ctx.enviarpdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Enviar documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.info.modalidad.titulo_proyecto, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombreArchivo == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombreArchivo != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["#titulo[_ngcontent-%COMP%] {\r\n    padding-top: 2%;\r\n    font-family: \"Open Sans\";\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n#descripcion[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n}\r\n\r\n#apa[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#iconfile[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.imagenes-secundarias[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n#btn_subir[_ngcontent-%COMP%] {\r\n    padding: 60px 12px;\r\n    padding-left: 35%;\r\n    padding-right: auto;\r\n}\r\n\r\n.btn-btnSuccess[_ngcontent-%COMP%] {\r\n    background-color: #8F141B;\r\n    border-color: #8F141B;\r\n    color: rgb(243, 242, 220);\r\n    border-radius: 5px;\r\n}\r\n\r\n#Descripcion[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\r\n\r\n.swal-overlay[_ngcontent-%COMP%] {\r\n    background-color: rgba(43, 165, 137, 0.45);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZXMvcHJveWVjdG8vYW50ZXByb3llY3RvL2FudGVwcm95ZWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFDRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGVzL3Byb3llY3RvL2FudGVwcm95ZWN0by9hbnRlcHJveWVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXR1bG8ge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jZGVzY3JpcGNpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4jYXBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jaWNvbmZpbGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZW5lcy1zZWN1bmRhcmlhcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYnRuX3N1YmlyIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1idG5TdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RjE0MUI7XHJcbiAgICBib3JkZXItY29sb3I6ICM4RjE0MUI7XHJcbiAgICBjb2xvcjogcmdiKDI0MywgMjQyLCAyMjApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jRGVzY3JpcGNpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zd2FsLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgMTY1LCAxMzcsIDAuNDUpO1xyXG59XHJcblxyXG5cclxuLypsYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiAzODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RjE0MUI7XHJcbiAgICBib3JkZXItY29sb3I6ICM4RjE0MUI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbn1cclxuXHJcbiNuMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI24yIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFwiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxufVxyXG5cclxuI24zIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn0qLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnteproyectoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-anteproyecto',
          templateUrl: './anteproyecto.component.html',
          styleUrls: ['./anteproyecto.component.css']
        }]
      }], function () {
        return [{
          type: _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__["SubirArchivoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitudes/proyecto/doc-final/doc-final.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/solicitudes/proyecto/doc-final/doc-final.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DocFinalComponent */

  /***/
  function srcAppPagesSolicitudesProyectoDocFinalDocFinalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocFinalComponent", function () {
      return DocFinalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/proyectoGrado/subir-archivo.service */
    "./src/app/services/proyectoGrado/subir-archivo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DocFinalComponent_label_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click aqu\xED para subir el Anteproyecto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocFinalComponent_label_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nombreArchivo);
      }
    }

    var DocFinalComponent = /*#__PURE__*/function () {
      function DocFinalComponent(subirArchivoservice) {
        _classCallCheck(this, DocFinalComponent);

        this.subirArchivoservice = subirArchivoservice;
        this.MAX_SIZE_FILE = 25000000;
        this.anteproyecto = new FormData();
      }

      _createClass(DocFinalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Obtenemos la información del estudiante y se la pasamos a la variable info
          var estudiante = JSON.parse(localStorage.getItem('estudiante'));
          this.info = estudiante;
        }
      }, {
        key: "getFile",
        value: function getFile(file) {
          if (file.size > this.MAX_SIZE_FILE) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Lo Sentimos',
              html: "<p><b>".concat(file.name, "</b>, supera las 25 MB</p>"),
              icon: 'error',
              confirmButtonText: 'Ok',
              showCancelButton: false,
              confirmButtonColor: '#60D89C'
            }).then(function () {
              location.reload();
            });
          } else {
            this.nombreArchivo = file.name;
            var anteproyecto = file;
            this.anteproyecto.append('anteproyecto', anteproyecto, anteproyecto.name);
          }
        }
      }, {
        key: "enviarpdf",
        value: function enviarpdf() {
          var _this5 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "\xBFSeguro de subir este archivo? ",
            text: this.nombreArchivo,
            icon: 'warning',
            cancelButtonText: 'NO',
            confirmButtonText: 'SI',
            showCancelButton: true,
            confirmButtonColor: '#60D89C',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              var idEstudiante = JSON.parse(localStorage.getItem('estudiante'))._id; // call service


              _this5.subirArchivoservice.uploadFile(idEstudiante, _this5.anteproyecto).subscribe();
            }
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(e) {
          this.uploadedFiles = e.target.files;
        }
      }]);

      return DocFinalComponent;
    }();

    DocFinalComponent.ɵfac = function DocFinalComponent_Factory(t) {
      return new (t || DocFinalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__["SubirArchivoService"]));
    };

    DocFinalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocFinalComponent,
      selectors: [["app-doc-final"]],
      decls: 27,
      vars: 3,
      consts: [["id", "main-wrapper"], [1, "container"], ["id", "titulo"], ["id", "titulo-proyecto"], ["id", "Descripcion"], ["id", "btn_subir", 1, "row", "text-xl-center"], [1, "col-lg-6"], ["for", "imagen2", "class", "labels custom-file-upload", 4, "ngIf"], ["for", "imagen2", "class", "labels custom-file-upload text-center", 4, "ngIf"], ["name", "imagen2", "id", "imagen2", "type", "file", "accept", "application/pdf", 1, "imagenes-secundarias", 3, "change"], [1, "btn-btnSuccess", 2, "width", "50%", 3, "click"], [1, "container-fluid"], ["for", "imagen2", 1, "labels", "custom-file-upload"], ["for", "imagen2", 1, "labels", "custom-file-upload", "text-center"]],
      template: function DocFinalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DOCUMENTO FINAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TITULO:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DESCRIPCI\xD3N:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " El documento debe tener los siguientes aspectos: Contenido, proponentes, titulo, area o linea de investigacion, antecedentes y justificacion, formulacion del problema , objetivos generales y especificos, alcance y limitaciones, metodologia, secuencia y actividades que se desarrollaran, cronograma, analisis y dise\xF1o , implementacion , resultados, conclusiones y recomendaciones ,recursos costos y fuentes de financiacion , Bibliografia basica, anexos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DocFinalComponent_label_14_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DocFinalComponent_label_15_Template, 2, 1, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Recuerda que debe ser un archivo PDF, de tama\xF1o menor a 25MB.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocFinalComponent_Template_input_change_20_listener($event) {
            return ctx.getFile($event.target.files[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocFinalComponent_Template_button_click_23_listener() {
            return ctx.enviarpdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Enviar documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.info.modalidad.titulo_proyecto, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombreArchivo == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombreArchivo != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["#titulo[_ngcontent-%COMP%] {\r\n    padding-top: 2%;\r\n    font-family: \"Open Sans\";\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 20px;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#iconfile[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.imagenes-secundarias[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n#btn_subir[_ngcontent-%COMP%] {\r\n    padding: 60px 12px;\r\n    padding-left: 35%;\r\n    padding-right: auto;\r\n}\r\n\r\n.btn-btnSuccess[_ngcontent-%COMP%] {\r\n    background-color: #8F141B;\r\n    border-color: #8F141B;\r\n    color: rgb(243, 242, 220);\r\n    border-radius: 5px;\r\n}\r\n\r\n#Descripcion[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 760px), (min-width: 768px) and (max-width: 1024px) {\r\n    #btn_subir[_ngcontent-%COMP%] {\r\n        padding: 60px 12px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZXMvcHJveWVjdG8vZG9jLWZpbmFsL2RvYy1maW5hbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFDRTs7QUFFRjtJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb2xpY2l0dWRlcy9wcm95ZWN0by9kb2MtZmluYWwvZG9jLWZpbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxvIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2ljb25maWxlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2VuZXMtc2VjdW5kYXJpYXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2J0bl9zdWJpciB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tYnRuU3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEYxNDFCO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOEYxNDFCO1xyXG4gICAgY29sb3I6IHJnYigyNDMsIDI0MiwgMjIwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuI0Rlc2NyaXBjaW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLypsYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiAzODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RjE0MUI7XHJcbiAgICBib3JkZXItY29sb3I6ICM4RjE0MUI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbn1cclxuXHJcbiNuMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI24yIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFwiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxufVxyXG5cclxuI24zIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksXHJcbihtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAjYnRuX3N1YmlyIHtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDEycHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocFinalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doc-final',
          templateUrl: './doc-final.component.html',
          styleUrls: ['./doc-final.component.css']
        }]
      }], function () {
        return [{
          type: _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__["SubirArchivoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitudes/proyecto/formulario-inscripcion/formulario-inscripcion.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/solicitudes/proyecto/formulario-inscripcion/formulario-inscripcion.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: FormularioInscripcionComponent */

  /***/
  function srcAppPagesSolicitudesProyectoFormularioInscripcionFormularioInscripcionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormularioInscripcionComponent", function () {
      return FormularioInscripcionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _models_solicitud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../models/solicitud */
    "./src/app/models/solicitud.ts");
    /* harmony import */


    var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FormularioInscripcionComponent = /*#__PURE__*/function () {
      function FormularioInscripcionComponent(_loginService, _programaService, router, _solicitudService) {
        _classCallCheck(this, FormularioInscripcionComponent);

        this._loginService = _loginService;
        this._programaService = _programaService;
        this.router = router;
        this._solicitudService = _solicitudService;
      }

      _createClass(FormularioInscripcionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins();
          this.getPrograma();
          this.setInfo();
        } // Obtenemos el programa y lo pasamos a la variable Programa

      }, {
        key: "getPrograma",
        value: function getPrograma() {
          var _this6 = this;

          this._programaService.getPrograma().subscribe(function (resp) {
            var infoPrograma = resp['programa'];
            console.log(infoPrograma);
            _this6.programa = infoPrograma.nombre;
          });
        } // "Ponemos" el restod e información a las variables globales

      }, {
        key: "setInfo",
        value: function setInfo() {
          var estudiante = localStorage.getItem('estudiante');
          var administrativo = localStorage.getItem('administrativo');

          if (estudiante) {
            this.tipoUsuario = 'estudiante';
            this.info = JSON.parse(estudiante);
          } else {
            this.tipoUsuario = 'administrativo';
            this.info = JSON.parse(administrativo);
          }
        }
      }, {
        key: "postSolicitud",
        value: function postSolicitud(form) {
          var _this7 = this;

          var idEstudiante = localStorage.getItem("id");
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: '¿hacer solicitud ?',
            text: "proceso de solicitud para proyecto de grado ",
            icon: 'warning',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si',
            //background: '#8F141B',
            showCancelButton: true,
            confirmButtonColor: '#60D89C',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              var solicitud = new _models_solicitud__WEBPACK_IMPORTED_MODULE_2__["Solicitud"](form.value.nombreEst2, form.value.codigoEst2, form.value.identificacionEst2, form.value.programaEst2, form.value.correoEst2, form.value.nombreEst3, form.value.codigoEst3, form.value.identificacionEst3, form.value.programaEst3, form.value.correoEst3, form.value.tituloProyecto, form.value.lineaInvestigacion, form.value.directorProyecto, form.value.problema, form.value.alcance, form.value.metodologia);

              _this7._solicitudService.postSolicitud(solicitud, idEstudiante).subscribe();
            }
          });
        }
      }, {
        key: "active",
        value: function active() {
          this.mostrardatos = true;
        }
      }, {
        key: "inactive",
        value: function inactive() {
          this.mostrardatos = false;
        } // Función que direcciona cuando se da click en "perfil"

      }, {
        key: "irPerfil",
        value: function irPerfil() {
          this.router.navigate(['/perfil']);
        }
      }]);

      return FormularioInscripcionComponent;
    }();

    FormularioInscripcionComponent.ɵfac = function FormularioInscripcionComponent_Factory(t) {
      return new (t || FormularioInscripcionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_3__["ProgramaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_3__["ProyectoGradoService"]));
    };

    FormularioInscripcionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormularioInscripcionComponent,
      selectors: [["app-formulario-inscripcion"]],
      decls: 179,
      vars: 6,
      consts: [["id", "main-wrapper"], [1, "page-wrapper"], ["id", "titulo"], ["ngNativeValidate", "", "id", "loginform", 1, "form-horizontal", 3, "ngSubmit"], ["f", "ngForm"], ["id", "datos", 1, "form-group", "row"], ["id", "datospersonales1", 1, "form-group", "row"], [1, "col-sm"], ["id", "staticnombre", "type", "text", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["id", "codigo1"], ["id", "staticodigo", "type", "text", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["id", "identificacion", "type", "text", "disabled", "", 1, "form-control", "form-control-sm", "w-100", 3, "value"], ["id", "datospersonales2", 1, "form-group", "row"], ["id", "staticprograma", "type", "text", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["id", "correo"], ["id", "staticcorreo", "type", "text", "disabled", "", 1, "form-control", "form-control-sm", "ml-1", 3, "value"], ["id", "Mostrar_integrante2", 1, "form-group", "row"], ["id", "estudiante2"], ["ngModel", "", "name", "nombreEst2", "id", "staticnombre", "type", "text", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "codigoEst2", "id", "staticodigo", "type", "text", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "identificacionEst2", "id", "identificacion", "type", "text", 1, "form-control", "form-control-sm", "w-100"], ["ngModel", "", "name", "programaEst2", "id", "staticprograma", "type", "text", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "correoEst2", "id", "staticcorreo", "type", "text", 1, "form-control", "form-control-sm", "ml-1"], ["id", "Mostrar_integrante3", 1, "form-group", "row"], ["ngModel", "", "name", "nombreEst3", "id", "staticnombre", "type", "text", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "codigoEst3", "id", "staticodigo", "type", "text", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "identificacionEst3", "id", "identificacion", "type", "text", 1, "form-control", "form-control-sm", "w-100"], ["ngModel", "", "name", "programaEst3", "id", "staticprograma", "type", "text", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "correoEst3", "id", "staticcorreo", "type", "text", 1, "form-control", "form-control-sm", "ml-1"], ["id", "datosproyecto", 1, "form-group", "row"], [1, "form-group", "col-md-2"], [1, "form-group", "col-md-10"], ["ngModel", "", "name", "tituloProyecto", "type", "text", "id", "tituloProyecto", "placeholder", "t\xEDtulo del proyecto", "required", "", 1, "form-control"], ["id", "datosproyecto", 1, "form-row"], ["ngModel", "", "name", "lineaInvestigacion", "id", "inputState ", "required", "", 1, "form-control"], ["value", "INGENIER\xCDA DE SOFTWARE", "selected", ""], ["ngModel", "", "name", "directorProyecto", "id", "inputState", "required", "", 1, "form-control"], ["value", "JHON JAIRO TRUJILLO", "selected", ""], [1, "align-self-center", "text-center", "m-5"], [1, "m-5"], ["for", "formGroupExampleInput "], ["ngModel", "", "name", "problema", "id", "exampleFormControlTextarea1", "rows", "3", "placeholder", "ESCRIBE UNA BREVE INTRODUCCION SOBRE LA FORMULACI\xD3N DEL PROBLEMA", "required", "", 1, "form-control"], ["for", "formGroupExampleInput2 "], ["ngModel", "", "name", "alcance", "id", "exampleFormControlTextarea1", "rows", "3", "placeholder", "ESCRIBE UNA BREVE INTRODUCCION SOBRE EL ALCANCE Y LIMITACIONES", "required", "", 1, "form-control"], ["ngModel", "", "name", "metodologia", "id", "exampleFormControlTextarea1", "rows", "3", "placeholder", "ESCRIBE UNA BREVE INTRODUCCION SOBRE LA METODOLOG\xD3IA DEL PROBLEMA", "required", "", 1, "form-control"], [1, "col", "v-center"], ["id", "btnenviar", 1, "btn", "btn-danger", "d-block", "mx-auto"], [1, "footer"], [1, "centro", "txtcenter"], [1, "figure"], ["src", "https://www.usco.edu.co/imagen-institucional/logo/universidad-surcolombiana.png", "alt", "Universidad Surcolombian", "title", "Universidad Surcolombian"], [1, "container-fluid"]],
      template: function FormularioInscripcionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " FORMULARIO DE INSCRIPCI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormularioInscripcionComponent_Template_form_ngSubmit_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx.postSolicitud(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre completo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "C\xF3digo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Programa acad\xE9mico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Correo electr\xF3nico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "estudiante 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Nombre completo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "C\xF3digo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Programa acad\xE9mico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Correo electr\xF3nico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "estudiante 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Nombre completo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "C\xF3digo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Programa acad\xE9mico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Correo electr\xF3nico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " --> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "TITULO DEL PROYECTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "LINEA DE INVESTIGACI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "INGENIER\xCDA DE SOFTWARE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "INTERNET DE LAS COSAS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "INTELIGENCIA ARTIFICIAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "SOLICITUD DIRECTOR DE PROYECTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "JHON JAIRO TRUJILLO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "FERNANDO ROJAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "EURIPIDES TRIANA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "JUAN CASTRO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "FORMULACION DEL PROBLEMA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "textarea", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "ALCANCE Y LIMITACIONES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "textarea", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "METODOLOGIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "textarea", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " ENVIAR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "footer", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "article", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "figure", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Instituci\xF3n de Educaci\xF3n Superior sujeta a inspecci\xF3n y vigilancia del Ministerio de Educaci\xF3n Nacional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "NIT: 891180084-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Horario de atenci\xF3n al p\xFAblico:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Lunes a viernes de 8:00 a.m. a 12:00 m. y de 2:00 p.m. a 6:00 p.m.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " L\xEDnea Gratuita Nacional: 018000 968722");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Notificaciones Judiciales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, ": notificacionesjudiciales@usco.edu.co");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("value", "", ctx.info.nombres, " ", ctx.info.apellidos, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.codigo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.identificacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.programa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.correo);
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]],
      styles: ["#titulo[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n#aggIntegrantes[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n}\r\n\r\n#datos[_ngcontent-%COMP%] {\r\n    padding-top: 2%;\r\n    margin-left: 70px;\r\n    margin-right: 70px;\r\n    border: rgb(210, 210, 210) 2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\n#Mostrar_integrante2[_ngcontent-%COMP%] {\r\n    padding-top: 2%;\r\n    margin-left: 70px;\r\n    margin-right: 70px;\r\n    border: rgb(210, 210, 210) 2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\n#Mostrar_integrante3[_ngcontent-%COMP%] {\r\n    padding-top: 2%;\r\n    margin-left: 70px;\r\n    margin-right: 70px;\r\n    border: rgb(210, 210, 210) 2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\n#datospersonales1[_ngcontent-%COMP%] {\r\n    padding: -5%;\r\n    margin-left: 2%;\r\n    margin-right: 2%;\r\n}\r\n\r\n#datospersonales2[_ngcontent-%COMP%] {\r\n    padding-top: 2%;\r\n    margin-left: 2%;\r\n    margin-right: 2%;\r\n}\r\n\r\n#estudiante2[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-family: \"Open Sans\";\r\n    font-size: 18px;\r\n    font-weight: 100;\r\n}\r\n\r\n#datosproyecto[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n    margin-right: 70px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 21px;\r\n    font-weight: 100;\r\n}\r\n\r\n#staticnombre[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    margin-left: 25px;\r\n}\r\n\r\n#codigo[_ngcontent-%COMP%] {\r\n    margin-left: -90px;\r\n}\r\n\r\n#codigo1[_ngcontent-%COMP%] {\r\n    margin-left: 65px;\r\n    font-family: \"Open Sans\";\r\n    font-size: 21px;\r\n    font-weight: 100;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    align-content: center;\r\n}\r\n\r\n#btn_search[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n}\r\n\r\n#identificacion[_ngcontent-%COMP%] {\r\n    width: 21%;\r\n}\r\n\r\n#programa[_ngcontent-%COMP%] {\r\n    width: 150%;\r\n}\r\n\r\n#staticnombre[_ngcontent-%COMP%] {\r\n    width: 130%;\r\n    margin-left: 2px;\r\n}\r\n\r\n#staticnombre2[_ngcontent-%COMP%] {\r\n    width: 5%;\r\n}\r\n\r\n#staticcorreo[_ngcontent-%COMP%] {\r\n    width: 150%;\r\n}\r\n\r\n#staticprograma[_ngcontent-%COMP%] {\r\n    width: 150%;\r\n    margin-left: -2px;\r\n}\r\n\r\n#correo[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n}\r\n\r\n#btnenviar[_ngcontent-%COMP%] {\r\n    background-color: #8F141B;\r\n    border-color: #8F141B;\r\n    color: #ffffff;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    margin-top: 30;\r\n    width: 95%;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 760px), (min-width: 768px) and (max-width: 1024px) {\r\n    #identificacion[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-left: -10px;\r\n    }\r\n    #staticnombre[_ngcontent-%COMP%] {\r\n        margin-left: -10px;\r\n    }\r\n    #staticnombre2[_ngcontent-%COMP%] {\r\n        width: 5%;\r\n    }\r\n    #staticnombre[_ngcontent-%COMP%] {\r\n        width: 105%;\r\n    }\r\n    #staticcorreo[_ngcontent-%COMP%] {\r\n        width: 85%;\r\n    }\r\n    #staticprograma[_ngcontent-%COMP%] {\r\n        width: 107%;\r\n        margin-left: -10px;\r\n    }\r\n    #staticintegrante[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZXMvcHJveWVjdG8vZm9ybXVsYXJpby1pbnNjcmlwY2lvbi9mb3JtdWxhcmlvLWluc2NyaXBjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUVJO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGVzL3Byb3llY3RvL2Zvcm11bGFyaW8taW5zY3JpcGNpb24vZm9ybXVsYXJpby1pbnNjcmlwY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdHVsbyB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYWdnSW50ZWdyYW50ZXMge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuXHJcbiNkYXRvcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICAgIGJvcmRlcjogcmdiKDIxMCwgMjEwLCAyMTApIDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNNb3N0cmFyX2ludGVncmFudGUyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyOiByZ2IoMjEwLCAyMTAsIDIxMCkgMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI01vc3RyYXJfaW50ZWdyYW50ZTMge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXI6IHJnYigyMTAsIDIxMCwgMjEwKSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jZGF0b3NwZXJzb25hbGVzMSB7XHJcbiAgICBwYWRkaW5nOiAtNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4jZGF0b3NwZXJzb25hbGVzMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4jZXN0dWRpYW50ZTIge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuI2RhdG9zcHJveWVjdG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuI3N0YXRpY25vbWJyZSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuI2NvZGlnbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbn1cclxuXHJcbiNjb2RpZ28xIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNidG5fc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI2lkZW50aWZpY2FjaW9uIHtcclxuICAgIHdpZHRoOiAyMSU7XHJcbn1cclxuXHJcbiNwcm9ncmFtYSB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxufVxyXG5cclxuI3N0YXRpY25vbWJyZSB7XHJcbiAgICB3aWR0aDogMTMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbiNzdGF0aWNub21icmUyIHtcclxuICAgIHdpZHRoOiA1JTtcclxufVxyXG5cclxuI3N0YXRpY2NvcnJlbyB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxufVxyXG5cclxuI3N0YXRpY3Byb2dyYW1hIHtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbn1cclxuXHJcbiNjb3JyZW8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuI2J0bmVudmlhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEYxNDFCO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOEYxNDFCO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwO1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksXHJcbihtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAjaWRlbnRpZmljYWNpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgICNzdGF0aWNub21icmUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgICNzdGF0aWNub21icmUyIHtcclxuICAgICAgICB3aWR0aDogNSU7XHJcbiAgICB9XHJcbiAgICAjc3RhdGljbm9tYnJlIHtcclxuICAgICAgICB3aWR0aDogMTA1JTtcclxuICAgIH1cclxuICAgICNzdGF0aWNjb3JyZW8ge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbiAgICAjc3RhdGljcHJvZ3JhbWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDclO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgICNzdGF0aWNpbnRlZ3JhbnRlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormularioInscripcionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-formulario-inscripcion',
          templateUrl: './formulario-inscripcion.component.html',
          styleUrls: ['./formulario-inscripcion.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_3__["ProgramaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_3__["ProyectoGradoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitudes/proyecto/proyecto/proyecto.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/solicitudes/proyecto/proyecto/proyecto.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProyectoComponent */

  /***/
  function srcAppPagesSolicitudesProyectoProyectoProyectoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProyectoComponent", function () {
      return ProyectoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/proyectoGrado/subir-archivo.service */
    "./src/app/services/proyectoGrado/subir-archivo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProyectoComponent_label_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click aqu\xED para subir el Anteproyecto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProyectoComponent_label_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nombreArchivo);
      }
    }

    var ProyectoComponent = /*#__PURE__*/function () {
      function ProyectoComponent(subirArchivoservice) {
        _classCallCheck(this, ProyectoComponent);

        this.subirArchivoservice = subirArchivoservice;
        this.MAX_SIZE_FILE = 25000000;
        this.anteproyecto = new FormData();
      }

      _createClass(ProyectoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Obtenemos la información del estudiante y se la pasamos a la variable info
          var estudiante = JSON.parse(localStorage.getItem('estudiante'));
          this.info = estudiante;
        }
      }, {
        key: "getFile",
        value: function getFile(file) {
          if (file.size > this.MAX_SIZE_FILE) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Lo Sentimos',
              html: "<p><b>".concat(file.name, "</b>, supera las 25 MB</p>"),
              icon: 'error',
              confirmButtonText: 'Ok',
              showCancelButton: false,
              confirmButtonColor: '#60D89C'
            }).then(function () {
              location.reload();
            });
          } else {
            this.nombreArchivo = file.name;
            var anteproyecto = file;
            this.anteproyecto.append('anteproyecto', anteproyecto, anteproyecto.name);
          }
        }
      }, {
        key: "enviarpdf",
        value: function enviarpdf() {
          var _this8 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "\xBFSeguro de subir este archivo? ",
            text: this.nombreArchivo,
            icon: 'warning',
            cancelButtonText: 'NO',
            confirmButtonText: 'SI',
            showCancelButton: true,
            confirmButtonColor: '#60D89C',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              var idEstudiante = JSON.parse(localStorage.getItem('estudiante'))._id; // call service


              _this8.subirArchivoservice.uploadFile(idEstudiante, _this8.anteproyecto).subscribe();
            }
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(e) {
          this.uploadedFiles = e.target.files;
        }
      }]);

      return ProyectoComponent;
    }();

    ProyectoComponent.ɵfac = function ProyectoComponent_Factory(t) {
      return new (t || ProyectoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__["SubirArchivoService"]));
    };

    ProyectoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProyectoComponent,
      selectors: [["app-proyecto"]],
      decls: 55,
      vars: 3,
      consts: [["id", "main-wrapper"], [1, "container"], ["id", "titulo"], ["id", "titulo-proyecto"], ["id", "Descripcion"], ["id", "descripcion"], ["id", "btn_subir", 1, "row", "text-xl-center"], [1, "col-lg-6"], ["for", "imagen2", "class", "labels custom-file-upload", 4, "ngIf"], ["for", "imagen2", "class", "labels custom-file-upload text-center", 4, "ngIf"], ["name", "imagen2", "id", "imagen2", "type", "file", "accept", "application/pdf", 1, "imagenes-secundarias", 3, "change"], [1, "btn-btnSuccess", 2, "width", "50%", 3, "click"], [1, "container-fluid"], ["for", "imagen2", 1, "labels", "custom-file-upload"], ["for", "imagen2", 1, "labels", "custom-file-upload", "text-center"]],
      template: function ProyectoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROYECTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TITULO:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DESCRIPCI\xD3N:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " El documento debe tener los siguientes aspectos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Contenido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " proponentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "titulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " area o linea de investigacion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " antecedentes y justificacion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " formulacion del problema ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " objetivos generales y especificos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " alcance y limitaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " metodologia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " secuencia y actividades que se desarrollaran");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " cronograma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " recursos costos y fuentes de financiacion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Bibliografia basica. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProyectoComponent_label_42_Template, 2, 0, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProyectoComponent_label_43_Template, 2, 1, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Recuerda que debe ser un archivo PDF, de tama\xF1o menor a 25MB.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProyectoComponent_Template_input_change_48_listener($event) {
            return ctx.getFile($event.target.files[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProyectoComponent_Template_button_click_51_listener() {
            return ctx.enviarpdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Enviar documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.info.modalidad.titulo_proyecto, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombreArchivo == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombreArchivo != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["#titulo[_ngcontent-%COMP%] {\r\n    padding-top: 2%;\r\n    font-family: \"Open Sans\";\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n#descripcion[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n}\r\n\r\n#apa[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#iconfile[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.imagenes-secundarias[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n#btn_subir[_ngcontent-%COMP%] {\r\n    padding: 60px 12px;\r\n    padding-left: 35%;\r\n    padding-right: auto;\r\n}\r\n\r\n.btn-btnSuccess[_ngcontent-%COMP%] {\r\n    background-color: #8F141B;\r\n    border-color: #8F141B;\r\n    color: rgb(243, 242, 220);\r\n    border-radius: 5px;\r\n}\r\n\r\n#Descripcion[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZXMvcHJveWVjdG8vcHJveWVjdG8vcHJveWVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQ0UiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb2xpY2l0dWRlcy9wcm95ZWN0by9wcm95ZWN0by9wcm95ZWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdHVsbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNkZXNjcmlwY2lvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNhcGEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNpY29uZmlsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlbmVzLXNlY3VuZGFyaWFzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNidG5fc3ViaXIge1xyXG4gICAgcGFkZGluZzogNjBweCAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLWJ0blN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhGMTQxQjtcclxuICAgIGJvcmRlci1jb2xvcjogIzhGMTQxQjtcclxuICAgIGNvbG9yOiByZ2IoMjQzLCAyNDIsIDIyMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNEZXNjcmlwY2lvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbi8qbGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEYxNDFCO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOEYxNDFCO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG59XHJcblxyXG4jbjEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbiNuMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbn1cclxuXHJcbiNuMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59Ki8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-proyecto',
          templateUrl: './proyecto.component.html',
          styleUrls: ['./proyecto.component.css']
        }]
      }], function () {
        return [{
          type: _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__["SubirArchivoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitudes/proyecto/seguimiento-modalidad/seguimiento-modalidad.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/solicitudes/proyecto/seguimiento-modalidad/seguimiento-modalidad.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: SeguimientoModalidadComponent */

  /***/
  function srcAppPagesSolicitudesProyectoSeguimientoModalidadSeguimientoModalidadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeguimientoModalidadComponent", function () {
      return SeguimientoModalidadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_proyectoGrado_proyecto_grado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/proyectoGrado/proyecto-grado.service */
    "./src/app/services/proyectoGrado/proyecto-grado.service.ts");
    /* harmony import */


    var _services_document_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/document/document.service */
    "./src/app/services/document/document.service.ts");

    var SeguimientoModalidadComponent = /*#__PURE__*/function () {
      function SeguimientoModalidadComponent(proyectoGradoService, _documentService) {
        _classCallCheck(this, SeguimientoModalidadComponent);

        this.proyectoGradoService = proyectoGradoService;
        this._documentService = _documentService;
      }

      _createClass(SeguimientoModalidadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins();
          /*this.getFormulario();
          
              }
          // Obtenemos el programa y lo pasamos a la variable Programa
          /*getFormulario() {
          // this._documentService.getFormulario().subscribe((resp) => {
            let infoDocument = resp['document'];
            console.log(infoDocument);
            this.document = infoDocument.titulo_proyecto;
          });*/
          // Obtenemos la información del estudiante y se la pasamos a la variable info

          var estudiante = JSON.parse(localStorage.getItem('estudiante'));
          this.info = estudiante;
        }
      }]);

      return SeguimientoModalidadComponent;
    }();

    SeguimientoModalidadComponent.ɵfac = function SeguimientoModalidadComponent_Factory(t) {
      return new (t || SeguimientoModalidadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proyectoGrado_proyecto_grado_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoGradoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_document_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]));
    };

    SeguimientoModalidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SeguimientoModalidadComponent,
      selectors: [["app-seguimiento-modalidad"]],
      decls: 104,
      vars: 20,
      consts: [["id", "main-wrapper"], ["id", "container", 1, "container"], ["id", "titulo"], [1, "card"], ["id", "tutulo-tutor", 1, "container", "text-center", "d-flex", "justify-content-center"], [1, "d-flex"], ["id", "static", "type", "text", "disabled", "", 1, "sinborde", 3, "value"], ["id", "descripcion", 1, "card", "w-75"], [1, "card-body"], ["te", "", 1, "row", "p-t-20", 2, "padding-left", "15px"], [1, "col-lg-12"], [1, "form-group"], ["for", "exampleInputuname"], [1, "input-group"], [1, "input-group-addon"], [1, "fa", "fa-user"], ["type", "text", "id", "exampleInputuname", "disabled", "", 1, "form-control", 3, "value"], ["te", "", 1, "row", "p-t-0", 2, "padding-left", "15px"], [1, "col-md-6"], ["id", "icon", "src", "assets/svg/science.svg"], ["type", "text", "id", "exampleInputuname", 1, "form-control", 3, "value"], ["id", "icon", "src", "assets/svg/calendar.svg"], [1, "width200"], ["id", "fase"]],
      template: function SeguimientoModalidadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " PROYECTO DE GRADO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Titulo del proyecto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tutor Asignado:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "nombre de integrantes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "linea de investigaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "fecha de aprobaci\xF3n de inscripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " SEGUIMIENTO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Fase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Aprobado por");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Formulario Inscripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Anteproyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Documento final");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", " \xA0  ", ctx.info.modalidad.titulo_proyecto, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "\xA0 ", ctx.info.modalidad.director_proyecto, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("value", "", ctx.info.nombres, "  ", ctx.info.apellidos, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.modalidad.nombreEst2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.modalidad.nombreEst3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.modalidad.linea_investigacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.info.modalidad.fecha);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.estado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.fecha);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.director_proyecto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.estado_anteproyecto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.fechaAnte);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.director_proyectoAnte);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.estadoProy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.fechaProy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.director_proyectoProy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.estadoDoc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.fechaDoc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.modalidad.director_proyectoDoc);
        }
      },
      styles: ["#titulo[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 32px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n#descripcion[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-left: 12.5%;\r\n    border: transparent;\r\n    font-family: \"Open Sans\";\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: 700;\r\n    line-height: 26.4px;\r\n    padding-top: -50%;\r\n    padding-bottom: -50%;\r\n}\r\n\r\n#Descripcion[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 2%;\r\n    font-family: \"Open Sans\";\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: 700;\r\n    line-height: 26.4px\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    text-align: justify;\r\n    font-size: 20px;\r\n    line-height: 27px;\r\n    \r\n}\r\n\r\n#static[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    align-items: center;\r\n    padding-bottom: 20px;\r\n    font-family: \"Open Sans\";\r\n    font-size: 20px;\r\n}\r\n\r\n#tutulo-tutor[_ngcontent-%COMP%] {\r\n    padding-top: 5%;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n    width: 95%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    border: #999 1px solid;\r\n    border-radius: 10px;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\n    padding-right: 10%;\r\n}\r\n\r\nb[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-family: \"Open Sans\";\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    line-height: 26.4px\r\n}\r\n\r\n.sinborde[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border: 0;\r\n    display: inline;\r\n    align-items: top;\r\n    padding-top: 0px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    border: 1px solid #999;\r\n    text-align: center;\r\n    border-collapse: collapse;\r\n    margin: 0 auto;\r\n    caption-side: top;\r\n    font-family: \"Open Sans\";\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n}\r\n\r\n#fase[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\ncaption[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    padding: 0.3%;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border-right: 1px solid #999;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #999;\r\n}\r\n\r\ntfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 0;\r\n    text-align: center;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    margin: 20;\r\n    padding: 100px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    margin: 0 0 10px 0\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0 0 10px 0\r\n}\r\n\r\n@media only screen and (max-width: 760px), (min-width: 768px) and (max-width: 1024px) {\r\n    table.width200[_ngcontent-%COMP%], .width200[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .width200[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .width200[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .width200[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .width200[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    table[_ngcontent-%COMP%] {\r\n        font-size: 19px;\r\n    }\r\n    #fase[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n    .width200[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: -9999px;\r\n        left: -9999px;\r\n    }\r\n    .width200[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n        border: 1px solid #ccc;\r\n    }\r\n    .width200[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        border: none;\r\n        border-bottom: 1px solid #ccc;\r\n        position: relative;\r\n        padding-left: 50%;\r\n        text-align: left\r\n    }\r\n    .width200[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\r\n        position: absolute;\r\n        top: 6px;\r\n        left: 6px;\r\n        width: 45%;\r\n        padding-right: 10px;\r\n        white-space: nowrap;\r\n    }\r\n    .width200[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(1):before {\r\n        content: \"Fase\";\r\n    }\r\n    .width200[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2):before {\r\n        content: \"N\xB0 Radicado\";\r\n    }\r\n    .width200[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(3):before {\r\n        content: \"Estado\";\r\n    }\r\n    .width200[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(4):before {\r\n        content: \"Fecha\";\r\n    }\r\n    .descarto[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZXMvcHJveWVjdG8vc2VndWltaWVudG8tbW9kYWxpZGFkL3NlZ3VpbWllbnRvLW1vZGFsaWRhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCOztLQUVDO0FBQ0w7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFFSTs7Ozs7O1FBTUksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCO0lBQ0o7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb2xpY2l0dWRlcy9wcm95ZWN0by9zZWd1aW1pZW50by1tb2RhbGlkYWQvc2VndWltaWVudG8tbW9kYWxpZGFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNkZXNjcmlwY2lvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIuNSU7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjYuNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IC01MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLTUwJTtcclxufVxyXG5cclxuI0Rlc2NyaXBjaW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjYuNHB4XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAvKm1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIG1hcmdpbi1yaWdodDogOCU7XHJcbiAgICAqL1xyXG59XHJcblxyXG4jc3RhdGljIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiN0dXR1bG8tdHV0b3Ige1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6ICM5OTkgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbmIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2LjRweFxyXG59XHJcblxyXG4uc2luYm9yZGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY2FwdGlvbi1zaWRlOiB0b3A7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG59XHJcblxyXG4jZmFzZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuY2FwdGlvbixcclxudGQsXHJcbnRoIHtcclxuICAgIHBhZGRpbmc6IDAuMyU7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50aCxcclxudGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcclxufVxyXG5cclxudGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XHJcbn1cclxuXHJcbnRmb290IHRoLFxyXG50Zm9vdCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMjA7XHJcbiAgICBwYWRkaW5nOiAxMDBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwXHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxyXG4obWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgdGFibGUud2lkdGgyMDAsXHJcbiAgICAud2lkdGgyMDAgdGhlYWQsXHJcbiAgICAud2lkdGgyMDAgdGJvZHksXHJcbiAgICAud2lkdGgyMDAgdGgsXHJcbiAgICAud2lkdGgyMDAgdGQsXHJcbiAgICAud2lkdGgyMDAgdHIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuICAgICNmYXNlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAud2lkdGgyMDAgdGhlYWQgdHIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC05OTk5cHg7XHJcbiAgICAgICAgbGVmdDogLTk5OTlweDtcclxuICAgIH1cclxuICAgIC53aWR0aDIwMCB0ciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIC53aWR0aDIwMCB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbiAgICB9XHJcbiAgICAud2lkdGgyMDAgdGQ6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLndpZHRoMjAwIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJGYXNlXCI7XHJcbiAgICB9XHJcbiAgICAud2lkdGgyMDAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIk7CsCBSYWRpY2Fkb1wiO1xyXG4gICAgfVxyXG4gICAgLndpZHRoMjAwIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJFc3RhZG9cIjtcclxuICAgIH1cclxuICAgIC53aWR0aDIwMCB0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiRmVjaGFcIjtcclxuICAgIH1cclxuICAgIC5kZXNjYXJ0byB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeguimientoModalidadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-seguimiento-modalidad',
          templateUrl: './seguimiento-modalidad.component.html',
          styleUrls: ['./seguimiento-modalidad.component.css']
        }]
      }], function () {
        return [{
          type: _services_proyectoGrado_proyecto_grado_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoGradoService"]
        }, {
          type: _services_document_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitudes/proyecto/sustentacion/sustentacion.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/solicitudes/proyecto/sustentacion/sustentacion.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: SustentacionComponent */

  /***/
  function srcAppPagesSolicitudesProyectoSustentacionSustentacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SustentacionComponent", function () {
      return SustentacionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/proyectoGrado/subir-archivo.service */
    "./src/app/services/proyectoGrado/subir-archivo.service.ts");

    var SustentacionComponent = /*#__PURE__*/function () {
      function SustentacionComponent(subirArchivoservice) {
        _classCallCheck(this, SustentacionComponent);

        this.subirArchivoservice = subirArchivoservice;
        this.MAX_SIZE_FILE = 25000000;
        this.anteproyecto = new FormData();
      }

      _createClass(SustentacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Obtenemos la información del estudiante y se la pasamos a la variable info
          var estudiante = JSON.parse(localStorage.getItem('estudiante'));
          this.info = estudiante;
        }
      }, {
        key: "getFile",
        value: function getFile(file) {
          if (file.size > this.MAX_SIZE_FILE) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Lo Sentimos',
              html: "<p><b>".concat(file.name, "</b>, supera las 25 MB</p>"),
              icon: 'error',
              confirmButtonText: 'Ok',
              showCancelButton: false,
              confirmButtonColor: '#60D89C'
            }).then(function () {
              location.reload();
            });
          } else {
            this.nombreArchivo = file.name;
            var anteproyecto = file;
            this.anteproyecto.append('anteproyecto', anteproyecto, anteproyecto.name);
          }
        }
      }, {
        key: "enviarpdf",
        value: function enviarpdf() {
          var _this9 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: "\xBFSeguro de subir este archivo? ",
            text: this.nombreArchivo,
            icon: 'warning',
            cancelButtonText: 'NO',
            confirmButtonText: 'SI',
            showCancelButton: true,
            confirmButtonColor: '#60D89C',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              var idEstudiante = JSON.parse(localStorage.getItem('estudiante'))._id; // call service


              _this9.subirArchivoservice.uploadFile(idEstudiante, _this9.anteproyecto).subscribe();
            }
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(e) {
          this.uploadedFiles = e.target.files;
        }
      }]);

      return SustentacionComponent;
    }();

    SustentacionComponent.ɵfac = function SustentacionComponent_Factory(t) {
      return new (t || SustentacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__["SubirArchivoService"]));
    };

    SustentacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SustentacionComponent,
      selectors: [["app-sustentacion"]],
      decls: 32,
      vars: 0,
      consts: [["id", "main-wrapper"], [1, "container"], ["id", "titulo"], ["id", "sustInfo"], ["id", "descripcion"], ["src", "assets/svg/calendar-b.svg"], ["src", "assets/svg/clock-b.svg"], ["src", "assets/svg/ubicacion-b.svg"], ["src", "assets/svg/jurado-b.svg"], ["id", "jurados"], ["src", "assets/svg/fiber-b.svg"], [1, "container-fluid"]],
      template: function SustentacionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SUSTENTACI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A continuaci\xF3n encontrara la informaci\xF3n detallada de la sustentaci\xF3n de su proyecto de grado:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Fecha :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hora :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lugar : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Jurado asignado :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " jurado 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " jurado 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " jurado 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#titulo[_ngcontent-%COMP%] {\r\n    padding-top: 2%;\r\n    font-family: \"Open Sans\";\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 20px;\r\n    \r\n}\r\n\r\n#jurados[_ngcontent-%COMP%] {\r\n    padding-left: 20%;\r\n}\r\n\r\n#descripcion[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\";\r\n    font-size: 16px;\r\n    line-height: 50px;\r\n}\r\n\r\n#apa[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#iconfile[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.imagenes-secundarias[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n#btn_subir[_ngcontent-%COMP%] {\r\n    padding: 60px 12px;\r\n    padding-left: 35%;\r\n    padding-right: auto;\r\n}\r\n\r\n.btn-btnSuccess[_ngcontent-%COMP%] {\r\n    background-color: #8F141B;\r\n    border-color: #8F141B;\r\n    color: rgb(243, 242, 220);\r\n    border-radius: 5px;\r\n}\r\n\r\n#Descripcion[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZXMvcHJveWVjdG8vc3VzdGVudGFjaW9uL3N1c3RlbnRhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFDRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGVzL3Byb3llY3RvL3N1c3RlbnRhY2lvbi9zdXN0ZW50YWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXR1bG8ge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC8qZm9udC13ZWlnaHQ6IGJvbGQ7Ki9cclxufVxyXG5cclxuI2p1cmFkb3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbiNkZXNjcmlwY2lvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbiNhcGEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNpY29uZmlsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlbmVzLXNlY3VuZGFyaWFzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNidG5fc3ViaXIge1xyXG4gICAgcGFkZGluZzogNjBweCAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLWJ0blN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhGMTQxQjtcclxuICAgIGJvcmRlci1jb2xvcjogIzhGMTQxQjtcclxuICAgIGNvbG9yOiByZ2IoMjQzLCAyNDIsIDIyMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNEZXNjcmlwY2lvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbi8qbGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEYxNDFCO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOEYxNDFCO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG59XHJcblxyXG4jbjEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbiNuMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbn1cclxuXHJcbiNuMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59Ki8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SustentacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sustentacion',
          templateUrl: './sustentacion.component.html',
          styleUrls: ['./sustentacion.component.css']
        }]
      }], function () {
        return [{
          type: _services_proyectoGrado_subir_archivo_service__WEBPACK_IMPORTED_MODULE_2__["SubirArchivoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitudes/semillero/semillero/semillero.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/solicitudes/semillero/semillero/semillero.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SemilleroComponent */

  /***/
  function srcAppPagesSolicitudesSemilleroSemilleroSemilleroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SemilleroComponent", function () {
      return SemilleroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SemilleroComponent = /*#__PURE__*/function () {
      function SemilleroComponent() {
        _classCallCheck(this, SemilleroComponent);
      }

      _createClass(SemilleroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SemilleroComponent;
    }();

    SemilleroComponent.ɵfac = function SemilleroComponent_Factory(t) {
      return new (t || SemilleroComponent)();
    };

    SemilleroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SemilleroComponent,
      selectors: [["app-semillero"]],
      decls: 2,
      vars: 0,
      template: function SemilleroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "semillero works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGVzL3NlbWlsbGVyby9zZW1pbGxlcm8vc2VtaWxsZXJvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SemilleroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-semillero',
          templateUrl: './semillero.component.html',
          styleUrls: ['./semillero.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/imagen.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/imagen.pipe.ts ***!
    \**************************************/

  /*! exports provided: ImagenPipe */

  /***/
  function srcAppPipesImagenPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagenPipe", function () {
      return ImagenPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");

    var ImagenPipe = /*#__PURE__*/function () {
      function ImagenPipe() {
        _classCallCheck(this, ImagenPipe);
      }

      _createClass(ImagenPipe, [{
        key: "transform",
        // Función para obtener la imagen de los usuarios
        value: function transform(img, tipoUsuario) {
          // Accedemos a la ruta de la imagen
          var url = _config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"] + '/imagen'; // Si no existe la imagen...

          if (!img) {
            return url + '/estudiante/NotFound';
          } // Switch para validar el tipo de usuario, y acceder a la url específica


          switch (tipoUsuario) {
            case 'estudiante':
              url += '/estudiantes/' + img;
              break;

            case 'administrativo':
              url += '/administrativos/' + img;
              break;
          }

          return url;
        }
      }]);

      return ImagenPipe;
    }();

    ImagenPipe.ɵfac = function ImagenPipe_Factory(t) {
      return new (t || ImagenPipe)();
    };

    ImagenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "imagen",
      type: ImagenPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'imagen'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _imagen_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./imagen.pipe */
    "./src/app/pipes/imagen.pipe.ts"); // Lo importamos donde se van a a utilizar (PagesModule y SharedModule)


    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_1__["ImagenPipe"]],
        exports: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_1__["ImagenPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_1__["ImagenPipe"]],
          imports: [],
          exports: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_1__["ImagenPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/document/document.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/document/document.service.ts ***!
    \*******************************************************/

  /*! exports provided: DocumentService */

  /***/
  function srcAppServicesDocumentDocumentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
      return DocumentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DocumentService = /*#__PURE__*/function () {
      function DocumentService(http) {
        _classCallCheck(this, DocumentService);

        this.http = http;
      } // Función para obtener el programa que corresponde el estudiante


      _createClass(DocumentService, [{
        key: "getFormulario",
        value: function getFormulario() {
          // Si es estudiante...
          if (localStorage.getItem('estudiante')) {
            this.formulario = JSON.parse(localStorage.getItem('estudiante'));
          } else {
            this.formulario = JSON.parse(localStorage.getItem('administrativo'));
          } // Obtenemos el id del programa que corresponde al usuario


          var idModalidad = this.formulario.proyectogrado._id; // Se obtiene del backend

          var url = src_app_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"] + '/formulario/' + idModalidad;
          return this.http.get(url);
        }
      }]);

      return DocumentService;
    }();

    DocumentService.ɵfac = function DocumentService_Factory(t) {
      return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DocumentService,
      factory: DocumentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/guards/login-guard.guard.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/guards/login-guard.guard.ts ***!
    \******************************************************/

  /*! exports provided: LoginGuardGuard */

  /***/
  function srcAppServicesGuardsLoginGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function () {
      return LoginGuardGuard;
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


    var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/login/login.service */
    "./src/app/services/login/login.service.ts");

    var LoginGuardGuard = /*#__PURE__*/function () {
      function LoginGuardGuard(router, _loginService) {
        _classCallCheck(this, LoginGuardGuard);

        this.router = router;
        this._loginService = _loginService;
      } // Lo ponemos en el path que queremos proteger
      // En este caso requisitos(app.routes) y panel-principal(pages.routes)


      _createClass(LoginGuardGuard, [{
        key: "canActivate",
        value: function canActivate() {
          // Si está logueado, retorne true (lo deja pasar)
          if (this._loginService.logueado()) {
            return true;
          } else {
            // Si no, lo devuelve al login
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return LoginGuardGuard;
    }();

    LoginGuardGuard.ɵfac = function LoginGuardGuard_Factory(t) {
      return new (t || LoginGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]));
    };

    LoginGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginGuardGuard,
      factory: LoginGuardGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/login/login.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/login/login.service.ts ***!
    \*************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(router, http) {
        _classCallCheck(this, LoginService);

        this.router = router;
        this.http = http;
      } // Esta función nos va a servir para cuando el estudiante está en la página de requisitos
      // y si intenta entrar al panel principal, no lo deje. Ya que la ruta va a estar protegida
      // por el loginGuard que confirma si está el token en el local storage --> Al hacer click
      // En el botón continuar, se llama esta finción y se guarda el token en el local storage


      _createClass(LoginService, [{
        key: "dejaPasarModalidades",
        value: function dejaPasarModalidades() {
          localStorage.setItem('token', this.token);
        } // Devuelve una bandera (true/false) confirmando si el usuario está logueado (tiene el token
        // en el local storage)

      }, {
        key: "logueado",
        value: function logueado() {
          this.token = localStorage.getItem("token");
          return this.token ? true : false;
        } // Redirije a la pagina del login

      }, {
        key: "logOut",
        value: function logOut() {
          this.router.navigate(['/login']);
        } // En esta función se llama al servicio del login del backend
        // Recibe un usuario de tipo Usuario (Modelo), y una bandera que nos indica que el check de
        // recordarme está activado

      }, {
        key: "login",
        value: function login(usuario) {
          var _this10 = this;

          var recordar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          // Definimos la url del servicio que queremos llamar
          var url = _config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"] + '/login'; // Enviamos los datos. Es un observable, entonces tendrá una respuesta

          return this.http.post(url, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            if (resp['estudiante']) {
              // Si el check está activado, se guarda el usuario en el localStorage
              if (recordar === true) {
                localStorage.setItem('usuario', resp.estudiante.usuario);
              } else {
                localStorage.removeItem('usuario');
              } // Guardamos toda la info del estudiante y el id


              localStorage.setItem('estudiante', JSON.stringify(resp.estudiante));
              localStorage.setItem('id', resp.estudiante._id); // Se le asigna el token de la respuesta a la variable token

              _this10.token = resp.token; // Es el mismo procedimiento anterior(Administrativo)
            } else {
              // Si el check está activado, se guarda el usuario en el localStorage
              if (recordar === true) {
                localStorage.setItem('usuario', resp.administrativo.usuario);
              } else {
                localStorage.removeItem('usuario');
              } // Se guarde la info del administrativo, el id y el token al local sotrage
              // NOTA: Como nos podemos dar cuenta, aquí no se asigna el token del admin a la variable
              // token, esto debido a que el administrativo no va a pasar por la página de requisitos
              // y necesita el token a penas se loguee en el local storae


              localStorage.setItem('administrativo', JSON.stringify(resp.administrativo));
              localStorage.setItem('id', resp.administrativo._id);
              localStorage.setItem('token', resp.token);
            }

            return true;
          }), // Si existen errores (status code de la petición), los capturamos y los ponemos en un
          // sweetalert
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: '¡Error!',
              text: err.error.mensaje,
              icon: 'error',
              confirmButtonColor: '#8F141B'
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/modalidad/modalidad.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/modalidad/modalidad.service.ts ***!
    \*********************************************************/

  /*! exports provided: ModalidadService */

  /***/
  function srcAppServicesModalidadModalidadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalidadService", function () {
      return ModalidadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _programa_programa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../programa/programa.service */
    "./src/app/services/programa/programa.service.ts"); //import { Modalidad } from 'src/app/models/modalidad.model';


    var ModalidadService = /*#__PURE__*/function () {
      // Inyectamos el módulo de Http y el servicio del programa
      function ModalidadService(http, _programaService) {
        _classCallCheck(this, ModalidadService);

        this.http = http;
        this._programaService = _programaService;
      } // Calculamos el porcentaje y se lo pasamos a la variable global


      _createClass(ModalidadService, [{
        key: "calcularPorcentaje",
        value: function calcularPorcentaje() {
          var _this11 = this;

          this._programaService.getPrograma().subscribe(function (resp) {
            var infoEstudiante = JSON.parse(localStorage.getItem('estudiante'));
            var credAprob = infoEstudiante.creditos_aprobados;
            var programa = resp.programa;
            var creditosTotales = programa.creditos_totales;
            var porcent = credAprob * 100 / creditosTotales;
            _this11.porcentaje = porcent.toFixed(1);
            return _this11.porcentaje;
          });
        } // Función para habilitar el botón de seleccionar modalidad, recibe el array de los botones y las cardheader

      }, {
        key: "seleccionarModalidad",
        value: function seleccionarModalidad(btnSelec, cardHeader) {
          var _this12 = this;

          // Recibimos las modalidades y se crea un array de las modalidades
          this.getModalidades().subscribe(function (resp) {
            var modalidades = resp.modalidades; // Se recorren las modalidades

            var _iterator = _createForOfIteratorHelper(modalidades.entries()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _slicedToArray(_step.value, 2),
                    i = _step$value[0],
                    modalidad = _step$value[1];

                // Obtenemos los nombres y porcentaje de cada modalidad
                var nombre = modalidad.nombre.toUpperCase();
                var porcentajeMod = modalidad.porcentaje_creditos * 100; // Recorremos el array de los cardHeader

                var _iterator2 = _createForOfIteratorHelper(cardHeader),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var card = _step2.value;
                    // Obtenemos el título de la card
                    var titulo = card.innerText; // Si el titulo de la card coincide con el nombre de la modalidad

                    if (titulo == nombre) {
                      // Si el porcentaje del estudiante es mayor al porcentaje de la modaidad
                      if (_this12.porcentaje > porcentajeMod) {
                        // Activa el el botón el la card correspondiente
                        btnSelec[i].disabled = false;
                      }
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        } // Obtenemos las modalidades del backend

      }, {
        key: "getModalidades",
        value: function getModalidades() {
          var token = localStorage.getItem('token');
          var url = _config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"] + '/modalidades?token=' + token;
          return this.http.get(url);
        }
      }]);

      return ModalidadService;
    }();

    ModalidadService.ɵfac = function ModalidadService_Factory(t) {
      return new (t || ModalidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_programa_programa_service__WEBPACK_IMPORTED_MODULE_3__["ProgramaService"]));
    };

    ModalidadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalidadService,
      factory: ModalidadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalidadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _programa_programa_service__WEBPACK_IMPORTED_MODULE_3__["ProgramaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/programa/programa.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/programa/programa.service.ts ***!
    \*******************************************************/

  /*! exports provided: ProgramaService */

  /***/
  function srcAppServicesProgramaProgramaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramaService", function () {
      return ProgramaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProgramaService = /*#__PURE__*/function () {
      function ProgramaService(http) {
        _classCallCheck(this, ProgramaService);

        this.http = http;
      } // Función para obtener el programa que corresponde el estudiante


      _createClass(ProgramaService, [{
        key: "getPrograma",
        value: function getPrograma() {
          // Si es estudiante...
          if (localStorage.getItem('estudiante')) {
            this.usuario = JSON.parse(localStorage.getItem('estudiante'));
          } else {
            this.usuario = JSON.parse(localStorage.getItem('administrativo'));
          } // Obtenemos el id del programa que corresponde al usuario


          var idPrograma = this.usuario.programa._id; // Se obtiene del backend

          var url = _config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"] + '/programa/' + idPrograma;
          return this.http.get(url);
        }
      }]);

      return ProgramaService;
    }();

    ProgramaService.ɵfac = function ProgramaService_Factory(t) {
      return new (t || ProgramaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProgramaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProgramaService,
      factory: ProgramaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/proyectoGrado/proyecto-grado.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/services/proyectoGrado/proyecto-grado.service.ts ***!
    \******************************************************************/

  /*! exports provided: ProyectoGradoService */

  /***/
  function srcAppServicesProyectoGradoProyectoGradoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProyectoGradoService", function () {
      return ProyectoGradoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/operators/catchError */
    "./node_modules/rxjs/internal/operators/catchError.js");
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/internal/observable/throwError */
    "./node_modules/rxjs/internal/observable/throwError.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProyectoGradoService = /*#__PURE__*/function () {
      function ProyectoGradoService(http, router) {
        _classCallCheck(this, ProyectoGradoService);

        this.http = http;
        this.router = router;
      }

      _createClass(ProyectoGradoService, [{
        key: "postSolicitud",
        value: function postSolicitud(solicitud, id_Estudiante) {
          var _this13 = this;

          var token = localStorage.getItem("token");
          var url = "".concat(src_app_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"], "/proyectogrado/").concat(id_Estudiante, "?token=").concat(token);
          return this.http.post(url, solicitud).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            if (resp.ok == true) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: '¡Bien Hecho!',
                text: 'espera a que acepten tu solicitud',
                html: "Su solicitud fue exitosa, el radicado de su solicitud es: <b> ".concat(resp.solicitudGuardada._id, "</b>. <br> <center> Por favor vuelva a Iniciar Sesi\xF3n </center>"),
                icon: 'success'
              }).then(function () {
                _this13.router.navigate(['/login']);
              });
            }

            return true;
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: '¡Error!',
              text: err.error.mensaje,
              icon: 'error'
            });
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
          }));
        }
      }, {
        key: "getSolicitud",
        value: function getSolicitud(solicitud, id_Estudiante) {
          var _this14 = this;

          var token = localStorage.getItem("token");
          var url = "".concat(src_app_config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICES"], "/proyectogrado/").concat(id_Estudiante, "?token=").concat(token);
          return this.http.post(url, solicitud).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            if (resp.ok == true) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: '¡integrante agredado correctamente!',
                text: '',
                html: "Su solicitud fue exitosa, el radicado de su solicitud es: <b> ".concat(resp.solicitudGuardada._id, "</b>. <br> <center> Por favor vuelva a Iniciar Sesi\xF3n </center>"),
                icon: 'success'
              }).then(function () {
                _this14.router.navigate(['/login']);
              });
            }

            return true;
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: '¡No se pudo agregar el integrante!',
              text: err.error.mensaje,
              icon: 'error'
            });
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
          }));
        }
      }]);

      return ProyectoGradoService;
    }();

    ProyectoGradoService.ɵfac = function ProyectoGradoService_Factory(t) {
      return new (t || ProyectoGradoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    ProyectoGradoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProyectoGradoService,
      factory: ProyectoGradoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectoGradoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/proyectoGrado/subir-archivo.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/proyectoGrado/subir-archivo.service.ts ***!
    \*****************************************************************/

  /*! exports provided: SubirArchivoService */

  /***/
  function srcAppServicesProyectoGradoSubirArchivoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubirArchivoService", function () {
      return SubirArchivoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/operators/catchError */
    "./node_modules/rxjs/internal/operators/catchError.js");
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/observable/throwError */
    "./node_modules/rxjs/internal/observable/throwError.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SubirArchivoService = /*#__PURE__*/function () {
      function SubirArchivoService(http, router) {
        _classCallCheck(this, SubirArchivoService);

        this.http = http;
        this.router = router;
      }

      _createClass(SubirArchivoService, [{
        key: "uploadFile",
        value: function uploadFile(idEstudiante, anteproyecto) {
          var _this15 = this;

          var token = localStorage.getItem('token');
          var urlApi = "http://localhost:3000/uploadFile/".concat(idEstudiante, "?token=").concat(token);
          return this.http.put(urlApi, anteproyecto).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            if (resp.ok == true) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: '¡Bien Hecho!',
                text: "Se ha enviado correctamente el documento",
                icon: 'success'
              }).then(function () {
                _this15.router.navigate(['/mi-modalidad']);
              });
            }

            return true;
          }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: '¡Error!',
              text: err.error.mensaje,
              icon: 'error'
            });
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }]);

      return SubirArchivoService;
    }();

    SubirArchivoService.ɵfac = function SubirArchivoService_Factory(t) {
      return new (t || SubirArchivoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    SubirArchivoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SubirArchivoService,
      factory: SubirArchivoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubirArchivoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/requisitos/requisitos.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/requisitos/requisitos.service.ts ***!
    \***********************************************************/

  /*! exports provided: RequisitosService */

  /***/
  function srcAppServicesRequisitosRequisitosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequisitosService", function () {
      return RequisitosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _programa_programa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../programa/programa.service */
    "./src/app/services/programa/programa.service.ts");

    var RequisitosService = /*#__PURE__*/function () {
      function RequisitosService(_programaService) {
        _classCallCheck(this, RequisitosService);

        this._programaService = _programaService;
        this.bien = 'fa-check';
        this.mal = 'fa-times';
      } // Creamos una función que calcula el 50% de los cŕeditos totales de la carrera


      _createClass(RequisitosService, [{
        key: "calculoPorcentaje",
        value: function calculoPorcentaje(creditos) {
          return creditos * 0.5;
        } // Hacemos la función que se encarga de confirmar los requisitos para cada uno de los programas

      }, {
        key: "confirmarRequisitos",
        value: function confirmarRequisitos(btnContinuar, icon) {
          var _this16 = this;

          // Obtenemos la info de cada programa del estudiante
          this._programaService.getPrograma().subscribe(function (resp) {
            _this16.programa = resp.programa; // Tomamos del localStorage y lo separamos en variables

            _this16.estudiante = JSON.parse(localStorage.getItem('estudiante'));
            _this16.creditosAprob = _this16.estudiante['creditos_aprobados'];
            _this16.modGrado = _this16.estudiante['modGrado']; // Seleccionamos el elemento html que necesitamos

            btnContinuar = btnContinuar[1];
            var iconCred = icon[0];
            var iconMod = icon[1]; // Se calcula el 50% de los créditos de cada programa

            var porcentaje = _this16.calculoPorcentaje(_this16.programa.creditos_totales); //Si supera ese 50%...


            if (_this16.creditosAprob > porcentaje) {
              // Indicamos qué icono se quiere (check)
              iconCred.classList.add(_this16.bien); // Se le asigna un id, para que el archivo css le cambie el estilo(verde)

              iconCred.setAttribute('id', "icon-check"); // Si no supera...
            } else {
              // Indicamos qué icono se quiere (X)
              iconCred.classList.add(_this16.mal); // Se le asigna un id, para que el archivo css le cambie el estilo(rojo)

              iconCred.setAttribute('id', "icon-mal");
            } // Se repite el procedimiento anterior, pero en este caso con la modGrado


            if (_this16.modGrado > 3) {
              iconMod.classList.add(_this16.bien);
              iconMod.setAttribute('id', "icon-check");
            } else {
              iconMod.classList.add(_this16.mal);
              iconMod.setAttribute('id', "icon-mal");
            } // Si cumple ambos requisitos...


            if (_this16.modGrado > 3 && _this16.creditosAprob > porcentaje) {
              // Habilita el botón para dejarlo continuar
              btnContinuar.disabled = false;
            }
          });
        }
      }]);

      return RequisitosService;
    }();

    RequisitosService.ɵfac = function RequisitosService_Factory(t) {
      return new (t || RequisitosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_programa_programa_service__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]));
    };

    RequisitosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RequisitosService,
      factory: RequisitosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequisitosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _programa_programa_service__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/service.index.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/service.index.ts ***!
    \*******************************************/

  /*! exports provided: ProyectoGradoService, ModalidadService, ProgramaService, LoginGuardGuard, RequisitosService, LoginService, SidebarService, SharedService */

  /***/
  function srcAppServicesServiceIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _proyectoGrado_proyecto_grado_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./proyectoGrado/proyecto-grado.service */
    "./src/app/services/proyectoGrado/proyecto-grado.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProyectoGradoService", function () {
      return _proyectoGrado_proyecto_grado_service__WEBPACK_IMPORTED_MODULE_0__["ProyectoGradoService"];
    });
    /* harmony import */


    var _modalidad_modalidad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modalidad/modalidad.service */
    "./src/app/services/modalidad/modalidad.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalidadService", function () {
      return _modalidad_modalidad_service__WEBPACK_IMPORTED_MODULE_1__["ModalidadService"];
    });
    /* harmony import */


    var _programa_programa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./programa/programa.service */
    "./src/app/services/programa/programa.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgramaService", function () {
      return _programa_programa_service__WEBPACK_IMPORTED_MODULE_2__["ProgramaService"];
    });
    /* harmony import */


    var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/login-guard.guard */
    "./src/app/services/guards/login-guard.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function () {
      return _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"];
    });
    /* harmony import */


    var _requisitos_requisitos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./requisitos/requisitos.service */
    "./src/app/services/requisitos/requisitos.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RequisitosService", function () {
      return _requisitos_requisitos_service__WEBPACK_IMPORTED_MODULE_4__["RequisitosService"];
    });
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.service */
    "./src/app/services/login/login.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"];
    });
    /* harmony import */


    var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sidebar/sidebar.service */
    "./src/app/services/sidebar/sidebar.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
      return _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"];
    });
    /* harmony import */


    var _shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/shared.service */
    "./src/app/services/shared/shared.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return _shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"];
    });
    /***/

  },

  /***/
  "./src/app/services/service.module.ts":
  /*!********************************************!*\
    !*** ./src/app/services/service.module.ts ***!
    \********************************************/

  /*! exports provided: ServiceModule */

  /***/
  function srcAppServicesServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
      return ServiceModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service.index */
    "./src/app/services/service.index.ts");

    var ServiceModule = function ServiceModule() {
      _classCallCheck(this, ServiceModule);
    };

    ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServiceModule
    });
    ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServiceModule_Factory(t) {
        return new (t || ServiceModule)();
      },
      providers: [_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["SidebarService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["RequisitosService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"], _service_index__WEBPACK_IMPORTED_MODULE_3__["ProgramaService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["ModalidadService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["ProyectoGradoService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [_service_index__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["SidebarService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["RequisitosService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"], _service_index__WEBPACK_IMPORTED_MODULE_3__["ProgramaService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["ModalidadService"], _service_index__WEBPACK_IMPORTED_MODULE_3__["ProyectoGradoService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/shared/shared.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/shared/shared.service.ts ***!
    \***************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppServicesSharedSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SharedService = function SharedService() {
      _classCallCheck(this, SharedService);
    };

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)();
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
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
  "./src/app/services/sidebar/sidebar.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/sidebar/sidebar.service.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarService */

  /***/
  function srcAppServicesSidebarSidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
      return SidebarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidebarService =
    /*
    menu: any[] = [
      {
        titulo: 'Formulario Inscripción ',
        icono: 'assets/svg/find_in_page.svg',
        url: '/solicitud-proyecto-de-grado'
        
      },
     // {
     //   titulo: 'Fase de modalidad',
     //   submenu: [
     //     {icono: 'assets/svg/sync-b.svg',titulo:'Anteproyecto', url: '/anteproyecto'},
     //     {icono: 'assets/svg/sync-b.svg',titulo:'Anteproyecto', url: '/proyecto'},
     //     {icono: 'assets/svg/sync-b.svg',titulo:'Anteproyecto', url: '/Documento Final'}
     //   ]
       
        
      //},
      {
        titulo: 'Seguimiento modalidad ',
        icono: 'assets/svg/find_in_page.svg',
        url: '/seguimiento-proyecto-de-grado'
        
      }
    ]
    */
    function SidebarService() {
      _classCallCheck(this, SidebarService);
    };

    SidebarService.ɵfac = function SidebarService_Factory(t) {
      return new (t || SidebarService)();
    };

    SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SidebarService,
      factory: SidebarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
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
  "./src/app/shared/breadcrumbs/breadcrumbs.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.ts ***!
    \*************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcAppSharedBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var BreadcrumbsComponent = /*#__PURE__*/function () {
      function BreadcrumbsComponent(router, title, meta) {
        var _this17 = this;

        _classCallCheck(this, BreadcrumbsComponent);

        this.router = router;
        this.title = title;
        this.meta = meta; // Nos subscribimos al observable y le asignamos el titulo a la variable global

        this.getDataRoutes().subscribe(function (data) {
          _this17.titulo = data.titulo;

          _this17.title.setTitle('BPUS - ' + _this17.titulo);

          var metaTag = {
            name: 'description',
            content: _this17.titulo
          };

          _this17.meta.updateTag(metaTag);
        });
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Obtenemos la información de las rutas definiada en "pages.routes.ts"

      }, {
        key: "getDataRoutes",
        value: function getDataRoutes() {
          return this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (evento) {
            return evento instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (evento) {
            return evento.snapshot.firstChild === null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (evento) {
            return evento.snapshot.data;
          }));
        }
      }]);

      return BreadcrumbsComponent;
    }();

    BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
      return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]));
    };

    BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbsComponent,
      selectors: [["app-breadcrumbs"]],
      decls: 13,
      vars: 2,
      consts: [[1, "row", "page-titles"], [1, "col-md-5", "align-self-center"], [1, "text-themecolor"], [1, "col-md-7", "align-self-center"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/panel-principal"], [1, "breadcrumb-item", "active"]],
      template: function BreadcrumbsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "P\xE1ginas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumbs',
          templateUrl: './breadcrumbs.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/imagen.pipe */
    "./src/app/pipes/imagen.pipe.ts");

    function NavbarComponent_li_105_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \xA0Mi solicitud");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      // Inyectamos el loginService para hacer el logOut directamente en el html
      function NavbarComponent(_loginService, _programaService, router) {
        _classCallCheck(this, NavbarComponent);

        this._loginService = _loginService;
        this._programaService = _programaService;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          init_plugins();
          this.getPrograma();
          this.setInfo();
        } // Obtenemos el programa y lo pasamos a la variable Programa

      }, {
        key: "getPrograma",
        value: function getPrograma() {
          var _this18 = this;

          this._programaService.getPrograma().subscribe(function (resp) {
            var infoPrograma = resp['programa'];
            console.log(infoPrograma);
            _this18.programa = infoPrograma.nombre;
          });
        } // "Ponemos" el restod e información a las variables globales

      }, {
        key: "setInfo",
        value: function setInfo() {
          var estudiante = localStorage.getItem('estudiante');
          var administrativo = localStorage.getItem('administrativo');

          if (estudiante) {
            this.tipoUsuario = 'estudiante';
            this.info = JSON.parse(estudiante);
          } else {
            this.tipoUsuario = 'administrativo';
            this.info = JSON.parse(administrativo);
          }
        } // Función que direcciona cuando se da click en "perfil"

      }, {
        key: "irPerfil",
        value: function irPerfil() {
          this.router.navigate(['/perfil']);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 115,
      vars: 13,
      consts: [[1, "topbar"], [1, "navbar", "top-navbar", "navbar-expand-md", "navbar-light"], [1, "navbar-header"], ["href", "index.html", 1, "navbar-brand"], ["src", "assets/images/logos/logosolo-01.png", "height", "58px", "alt", "homepage", 1, "light-logo"], ["src", "assets/images/logos/logoletra-01.png", "height", "28px", "alt", "homepage", 1, "light-logo"], [1, "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", "nav-toggler", "hidden-md-up", "waves-effect", "waves-dark"], [1, "ti-menu"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "hidden-sm-down", "waves-effect", "waves-dark"], [1, "navbar-nav", "my-lg-0"], [1, "nav-item", "dropdown"], ["href", "", "id", "2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], [1, "mdi", "mdi-email"], [1, "notify"], [1, "heartbit"], [1, "point"], ["aria-labelledby", "2", 1, "dropdown-menu", "mailbox", "dropdown-menu-right", "animated", "fadeIn"], [1, "drop-title"], [1, "message-center"], ["href", "#"], [1, "user-img"], ["src", "../assets/images/users/1.jpg", "alt", "user", 1, "img-circle"], [1, "profile-status", "online", "pull-right"], [1, "mail-contnet"], [1, "mail-desc"], [1, "time"], ["src", "../assets/images/users/2.jpg", "alt", "user", 1, "img-circle"], [1, "profile-status", "busy", "pull-right"], ["src", "../assets/images/users/3.jpg", "alt", "user", 1, "img-circle"], [1, "profile-status", "away", "pull-right"], ["src", "../assets/images/users/4.jpg", "alt", "user", 1, "img-circle"], [1, "profile-status", "offline", "pull-right"], ["href", "javascript:void(0);", 1, "nav-link", "text-center"], [1, "fa", "fa-angle-right"], ["href", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], ["height", "45", "alt", "user", 1, "profile-pic", 3, "src"], [1, "dropdown-menu", "dropdown-menu-right", "animated", "fadeIn"], [1, "dropdown-user"], [1, "text-center"], [1, "dw-user-box"], [1, "u-img"], ["alt", "user", 3, "src"], [1, "u-text"], [1, "text-active"], ["role", "separator", 1, "divider"], [1, "pointer", 3, "click"], [1, "fa", "fa-id-card"], [4, "ngIf"], [1, "fa", "fa-bell"], [1, "fa", "fa-power-off"], ["routerLink", "/seguimiento-proyecto-de-grado"], [1, "fa", "fa-clipboard"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "You have 4 new messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pavan kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Just see the my admin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "9:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sonu Nigam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "I've sung a song! See you at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "9:10 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Arijit Sinh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "I am a singer!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "9:08 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Pavan kumar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Just see the my admin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "9:02 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "See all e-Mails");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "li", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_102_listener() {
            return ctx.irPerfil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \xA0 Ver Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, NavbarComponent_li_105_Template, 4, 0, "li", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " \xA0Notificaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "li", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_112_listener() {
            return ctx._loginService.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \xA0 Cerrar Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 7, ctx.info.imagen, ctx.tipoUsuario), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](91, 10, ctx.info.imagen, ctx.tipoUsuario), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.info.nombres, " ", ctx.info.apellidos, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.programa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.correo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tipoUsuario == "estudiante");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_4__["ImagenPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["ProgramaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./breadcrumbs/breadcrumbs.component */
    "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Pipes


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]],
      imports: [[_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]],
        imports: [_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]],
          providers: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]],
          exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/service.index */
    "./src/app/services/service.index.ts");
    /* harmony import */


    var _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/sidebar/sidebar.service */
    "./src/app/services/sidebar/sidebar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SidebarComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Formulario de Inscripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Formulario de Inscripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Formulario de Inscripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Formulario de Inscripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Formulario de Inscripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Seguimiento de la modalidad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Anteproyecto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Anteproyecto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Anteproyecto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Proyecto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Proyecto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Proyecto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documento Final ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documento Final ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documento Final ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documento Final ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documento Final ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_li_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documento Final ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SidebarComponent = /*#__PURE__*/function () {
      // Inyectamos el loginService para hacer el logOut directamente en el html
      function SidebarComponent(_loginService, SidebarService) {
        _classCallCheck(this, SidebarComponent);

        this._loginService = _loginService;
        this.SidebarService = SidebarService;
        /*this.menuItems = SidebarService.menu;
        console.log(this.menuItems);
        */
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.EstadoPreInsc = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado;
          this.EstadoAnte = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado_anteproyecto;
          this.EstadoProy = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado_proyecto;
          this.EstadoDoc = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado_documento_final;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 28,
      vars: 18,
      consts: [[1, "left-sidebar"], [1, "scroll-sidebar"], [1, "sidebar-nav"], ["id", "sidebarnav"], [4, "ngIf"], ["class", "user-profile", 4, "ngIf"], [1, "user-profile"], ["href", "#", "aria-expanded", "true", 1, "has-arrow", "waves-effect", "waves-dark"], ["src", "assets/svg/toc.svg"], [1, "hide-menu"], ["aria-expanded", "false", 1, "collapse"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "isDisabled"], ["src", "assets/svg/article.svg"], ["routerLink", "/solicitud-proyecto-de-grado", "routerLinkActive", "active", 1, "isDisabled"], ["routerLink", "/seguimiento-proyecto-de-grado", "routerLinkActive", "active", 1, "waves-effect", "waves-dark"], ["src", "assets/svg/library.svg"], ["routerLink", "/anteproyecto", "routerLinkActive", "active", 1, "waves-effect", "waves-dark"], ["routerLink", "/proyecto", "routerLinkActive", "active", 1, "isDisabled"], ["routerLink", "/documento-final", "routerLinkActive", "active", 1, "isDisabled"], ["src", "assets/svg/streetview.svg"], ["routerLink", "/sustentacion", "routerLinkActive", "active", 1, "waves-effect", "waves-dark"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_4_Template, 5, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_5_Template, 5, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_6_Template, 5, 0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_li_7_Template, 5, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_li_8_Template, 5, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidebarComponent_li_9_Template, 5, 0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fases de la modalidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SidebarComponent_li_16_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SidebarComponent_li_17_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SidebarComponent_li_18_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidebarComponent_li_19_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidebarComponent_li_20_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SidebarComponent_li_21_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SidebarComponent_li_22_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SidebarComponent_li_23_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SidebarComponent_li_24_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SidebarComponent_li_25_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SidebarComponent_li_26_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SidebarComponent_li_27_Template, 4, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Rechazada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Enviada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Aprobada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Rechazada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Enviada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Aprobada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Rechazada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Enviada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Aprobada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Rechazada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Enviada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Aprobada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Rechazada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Enviada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoPreInsc === "Aprobada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoDoc === "Rechazada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoDoc === "Enviada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EstadoDoc === "Aprobada");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
      styles: ["img[_ngcontent-%COMP%] {\r\n    margin-right: 3%;\r\n    display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]
        }];
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\Users\Diego Cumbe\Documents\2020-1\proyecto-bpus\ANGULAR-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map