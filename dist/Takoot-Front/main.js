(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Project 2, Takoot -->\r\n<navbar></navbar>\r\n\r\n\r\n\r\n<div id = \"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Takoot-Front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");

















var ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_11__["GamesComponent"] },
    { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_11__["GamesComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_12__["QuestionsComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(ROUTES),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    // creating a private constructor, http, of type HttpClient
    function AuthService(http) {
        this.http = http;
        // defining these properties/fields as private and final
        this._isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.hasToken());
        this.isAuthenticated$ = this._isAuthenticated.asObservable();
        console.log('AuthService constructed!');
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        // getter for isAuthenticated
        get: function () {
            return this._isAuthenticated.getValue();
        },
        // setter for isAuthenticated
        set: function (value) {
            this._isAuthenticated.next(value);
        },
        enumerable: true,
        configurable: true
    });
    // creating authenticate method that takes in credentials
    AuthService.prototype.authenticate = function (credentials) {
        var _this = this;
        this.logout(); // resetting the credentials by loging out the current user, whoever that may be
        console.log("Attempting to login in user: " + credentials.username);
        var credentialsJson = JSON.stringify(credentials); //stringify the credentials so make them readable JSON format
        // posting/sending an HttpResponse back with the endpoint, and credentials
        // empty strings represent the jwt and user
        // MAKE NOTE, AUTH REPRESENTS THE END POINT... CHECK WITH BACKEND
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + 'auth', credentialsJson, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            localStorage.setItem('', resp.headers.get('Authorization'));
            localStorage.setItem('', JSON.stringify(resp.body));
            _this.isAuthenticated = true;
        })).subscribe();
    };
    // logout method will remove the JWT's from the associated user in local storage
    AuthService.prototype.logout = function () {
        if (localStorage.getItem('') || localStorage.getItem('')) {
            console.log('Logging out current user');
            localStorage.removeItem('');
            localStorage.removeItem('');
        }
        this.isAuthenticated = false;
    };
    AuthService.prototype.hasToken = function () {
        return !!localStorage.getItem('rbs-jwt');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #games-jumbo {\r\n    background-color: hotpink;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjZ2FtZXMtanVtYm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- BootStrap here, for a list/section of cards -->\r\n\r\n<div id = \"games-jumbo\" class=\"jumbotron\">\r\n  <h1 class=\"display-4\">Takoot Games</h1>\r\n  <p class=\"lead\">Add a blurb about playing games! </p>\r\n  <hr class=\"my-4\">\r\n  <p>Below is a list of games....... blah blah blah.. </p>\r\n  <!-- <p class=\"lead\">\r\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n  </p> -->\r\n\r\n\r\n<!-- add card groups -->\r\n\r\n<!-- on this view, when the user clicks a button on the card, it should take them to the quiz component-->\r\n\r\n<div class=\"card-deck\">\r\n  <div class=\"card text-white bg-dark mb-3\">\r\n    <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Card title</h5>\r\n      <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n      <a routerLink=\"/quiz\" class=\"btn\" style=\"background-color:blueviolet; color:white\">Play Game</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"card text-white bg-dark mb-3\">\r\n    <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Card title</h5>\r\n      <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n      <a routerLink=\"/quiz\" class=\"btn\" style=\"background-color:blueviolet; color:white\">Play Game</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"card text-white bg-dark mb-3\">\r\n    <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Card title</h5>\r\n      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n      <a routerLink=\"/quiz\" class=\"btn\" style=\"background-color:blueviolet; color:white\">Play Game</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</div> <!-- div for the jumbotron-->\r\n"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n    background-image: linear-gradient(to right,#668cff , #38c974);\r\n  }\r\n\r\n  \r\n\r\n  /*\r\n  \r\n  body {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n\r\n  #login-btn {\r\n      background-color: hotpink;\r\n  }\r\n  \r\n  .login-form {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n  }\r\n  \r\n  .login-form .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .login-form .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  \r\n  .login-form input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .login-form input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  } */\r\n\r\n  \r\n\r\n  ::-moz-selection {\r\n    background-color: #b5e2e7;\r\n  }\r\n\r\n  \r\n\r\n  ::selection {\r\n    background-color: #b5e2e7;\r\n  }\r\n\r\n  \r\n\r\n  ::-moz-selection {\r\n    background-color: #8ac7d8;\r\n  }\r\n\r\n  \r\n\r\n  body {\r\n    background: #3CC;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  \r\n\r\n  .container {\r\n    display: flex;\r\n    height: 100%;\r\n  }\r\n\r\n  \r\n\r\n  #logbox {\r\n    padding: 10px;\r\n    margin: 50px auto;\r\n    margin-left: 70%;\r\n    width: 340px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\r\n    text-align: center;\r\n    justify-content: center;\r\n    \r\n  }\r\n\r\n  \r\n\r\n  h1 {\r\n    text-align: center;\r\n    font-size: 175%;\r\n    color: #757575;\r\n    font-weight: 300;\r\n  }\r\n\r\n  \r\n\r\n  h1, input {\r\n    font-family: \"Open Sans\", Helvetica, sans-serif;\r\n  }\r\n\r\n  \r\n\r\n  .input {\r\n    width: 75%;\r\n    height: 50px;\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n    padding: 0 15px;\r\n    border: none;\r\n    border-bottom: 2px solid #ebebeb;\r\n  }\r\n\r\n  \r\n\r\n  .input:focus {\r\n    outline: none;\r\n    border-bottom-color: #3CC !important;\r\n  }\r\n\r\n  \r\n\r\n  .input:hover {\r\n    border-bottom-color: #dcdcdc;\r\n  }\r\n\r\n  \r\n\r\n  .input:invalid {\r\n    box-shadow: none;\r\n  }\r\n\r\n  \r\n\r\n  .pass:-webkit-autofill {\r\n    -webkit-box-shadow: 0 0 0 1000px white inset;\r\n  }\r\n\r\n  \r\n\r\n  .inputButton {\r\n    position: relative;\r\n    width: 85%;\r\n    height: 50px;\r\n    display: block;\r\n    margin: 30px auto 30px;\r\n    color: white;\r\n    background-color: #3CC;\r\n    border: none;\r\n    box-shadow: 0 5px 0 #2CADAD;\r\n  }\r\n\r\n  \r\n\r\n  .inputButton:hover {\r\n    top: 2px;\r\n    box-shadow: 0 3px 0 #2CADAD;\r\n  }\r\n\r\n  \r\n\r\n  .inputButton:active {\r\n    top: 5px;\r\n    box-shadow: none;\r\n  }\r\n\r\n  \r\n\r\n  .inputButton:focus {\r\n    outline: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw2REFBNkQ7RUFDL0Q7Ozs7RUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThDRzs7OztFQUtIO0lBQ0UseUJBQXlCO0VBQzNCOzs7O0VBRkE7SUFDRSx5QkFBeUI7RUFDM0I7Ozs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7OztFQUVBO0lBQ0UsZ0JBQWdCO0lBRWhCLGFBQWE7SUFFYixtQkFBbUI7RUFDckI7Ozs7RUFFQTtJQUVFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7Ozs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFHdEIseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQix1QkFBdUI7O0VBRXpCOzs7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7Ozs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7OztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0NBQWdDO0VBQ2xDOzs7O0VBQ0E7SUFDRSxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDOzs7O0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7Ozs7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7OztFQUVBO0lBQ0UsNENBQTRDO0VBQzlDOzs7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUdaLDJCQUEyQjtFQUM3Qjs7OztFQUNBO0lBQ0UsUUFBUTtJQUdSLDJCQUEyQjtFQUM3Qjs7OztFQUNBO0lBQ0UsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjs7OztFQUNBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCM2NjhjZmYgLCAjMzhjOTc0KTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAvKlxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcblxyXG5cclxuICAjbG9naW4tYnRuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9ICovXHJcblxyXG5cclxuXHJcblxyXG4gIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWUyZTc7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhYzdkODtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0NDO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ2JveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3NSU7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTVweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIH1cclxuICAuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzQ0MgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmlucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkY2RjZGM7XHJcbiAgfVxyXG4gIC5pbnB1dDppbnZhbGlkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXNzOi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggd2hpdGUgaW5zZXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dEJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMCAjMkNBREFEO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAwICMyQ0FEQUQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAwICMyQ0FEQUQ7XHJcbiAgfVxyXG4gIC5pbnB1dEJ1dHRvbjpob3ZlciB7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMCAjMkNBREFEO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCAwICMyQ0FEQUQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwICMyQ0FEQUQ7XHJcbiAgfVxyXG4gIC5pbnB1dEJ1dHRvbjphY3RpdmUge1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuaW5wdXRCdXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login Component! Yay! Woo! Hooray! -->\r\n<!-- \r\n<div class=\"login-form\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\">Log In</h1>\r\n  <label for=\"username-cred\" class=\"sr-only\">Username</label>\r\n  <input #username type=\"text\" class=\"form-control\" placeholder=\"Username\" required autofocus>\r\n  \r\n  <label for=\"password-cred\" class=\"sr-only\">Password</label>\r\n  <input #password type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n  \r\n  <button id = \"login-btn\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"login(username.value, password.value)\">Log in</button>\r\n  <br>\r\n  <div *ngIf=\"credentialsInvalid\" class=\"alert alert-danger text-center\" id=\"alert-msg\" role=\"alert\">\r\n      Invalid Credentials!\r\n  </div>\r\n  <p class=\"mt-5 mb-3 text-muted\">&copy; Takoot! 2017-2019</p>\r\n</div> -->\r\n\r\n\r\n<div class=\"col-md-6\">\r\n  <div id=\"logbox\">\r\n    <form id=\"login\" action=\"/\">\r\n      <h1>user login</h1>\r\n      <!-- <input #username type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n      <input #password type=\"password\" class=\"form-control\" placeholder=\"Password\"> -->\r\n      <input #username name=\"user[username]\" type=\"text\" placeholder=\"enter your username\" class=\"input pass\"/> \r\n      <input #password name=\"user[password]\" type=\"password\" placeholder=\"enter your password\" required=\"required\" class=\"input pass\"/>\r\n      <input (click)=\"login(username.value, password.value)\" type=\"submit\" value=\"Let's play some games!\" class=\"inputButton\"/>\r\n      <br>\r\n      <div *ngIf=\"credentialsInvalid\" class=\"alert alert-danger text-center\" id=\"alert-msg\" role=\"alert\">\r\n        Invalid Credentials!\r\n    </div>\r\n    <br>\r\n      <div class=\"text-center\">\r\n          <a routerLink=\"/register\" id=\"\">not registered?</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n  add in toggle tips for each input field\r\n\r\n  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">\r\n  Tooltip on top\r\n-->\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _models_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/credentials */ "./src/app/models/credentials.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // calling the method isAuthenticated$ from the auth service
        this.isAuthenticated$ = this.authService.isAuthenticated$;
        // creating variable, credentialsIsInvalid of type boolean
        this.credentialsInvalid = false;
        console.log('LoginComponent constructed!');
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        // credentials is a new Credentials class/object that takes in username and password
        this.credentials = new _models_credentials__WEBPACK_IMPORTED_MODULE_4__["Credentials"](username, password);
        // use authservice's method to authenticate the credentials we just passed
        this.authService.authenticate(this.credentials);
        // subscribing because it is an observable, it continuously returns objects
        this.isAuthenticated$.subscribe(function (isAuth) {
            if (isAuth) {
                _this.credentialsInvalid = false;
                _this.router.navigate(['services']);
            }
        }, function (err) {
            _this.credentialsInvalid = true;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/credentials.ts":
/*!***************************************!*\
  !*** ./src/app/models/credentials.ts ***!
  \***************************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
// this file represents the Credentials Class
// the Credentials class is associated with the AuthService and the LoginComponent.ts
var Credentials = /** @class */ (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand, #nav-item {\r\n    color:white;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCwgI25hdi1pdGVtIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This is the NavBar! Yay! Hooray! -->\r\n\r\n\r\n\r\n  <nav id = \"navbar-main\" class=\"navbar navbar-expand-md navbar-light fixed-top\" style=\"background-color:blueviolet\">\r\n    <a class=\"navbar-brand\" href=\"#\">Takoot</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link active\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/games\">Games</a>\r\n        <a class=\"nav-item nav-link justify-content-end\" routerLink=\"/login\">Login</a>\r\n        <a class=\"nav-item nav-link justify-content-end\" routerLink=\"/register\">SignUp</a>\r\n      </div>\r\n    </div>\r\n   </nav>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  questions works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent() {
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Lol, so the quiz should go here. Ideally it will link to the actual quiz that the user clicks....\r\n</p>\r\n\r\n<!-- add a button, \"end quiz\" that will take the user back to the games-->\r\n"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n  }\r\n  \r\n  /* body {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n  #register-btn {\r\n      background-color: hotpink;\r\n  }\r\n  \r\n  .register-form {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n  }\r\n  \r\n  .register-form .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .register-form .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  \r\n  .register-form input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .register-form input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  } */\r\n  \r\n  ::-moz-selection {\r\n    background-color: #b5e2e7;\r\n  }\r\n  \r\n  ::selection {\r\n    background-color: #b5e2e7;\r\n  }\r\n  \r\n  ::-moz-selection {\r\n    background-color: #8ac7d8;\r\n  }\r\n  \r\n  body {\r\n    background: #3CC;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .container {\r\n    display: flex;\r\n    height: 100%;\r\n  }\r\n  \r\n  #logbox {\r\n    padding: 10px;\r\n    margin: 50px auto;\r\n    margin-left: 70%;\r\n    width: 340px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\r\n    text-align: center;\r\n    justify-content: center;\r\n    \r\n  }\r\n  \r\n  h1 {\r\n    text-align: center;\r\n    font-size: 175%;\r\n    color: #757575;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  h1, input {\r\n    font-family: \"Open Sans\", Helvetica, sans-serif;\r\n  }\r\n  \r\n  .input {\r\n    width: 75%;\r\n    height: 50px;\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n    padding: 0 15px;\r\n    border: none;\r\n    border-bottom: 2px solid #ebebeb;\r\n  }\r\n  \r\n  .input:focus {\r\n    outline: none;\r\n    border-bottom-color: #3CC !important;\r\n  }\r\n  \r\n  .input:hover {\r\n    border-bottom-color: #dcdcdc;\r\n  }\r\n  \r\n  .input:invalid {\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .pass:-webkit-autofill {\r\n    -webkit-box-shadow: 0 0 0 1000px white inset;\r\n  }\r\n  \r\n  .inputButton {\r\n    position: relative;\r\n    width: 85%;\r\n    height: 50px;\r\n    display: block;\r\n    margin: 30px auto 30px;\r\n    color: white;\r\n    background-color: #3CC;\r\n    border: none;\r\n    box-shadow: 0 5px 0 #2CADAD;\r\n  }\r\n  \r\n  .inputButton:hover {\r\n    top: 2px;\r\n    box-shadow: 0 3px 0 #2CADAD;\r\n  }\r\n  \r\n  .inputButton:active {\r\n    top: 5px;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .inputButton:focus {\r\n    outline: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJDRzs7RUFHSDtJQUNFLHlCQUF5QjtFQUMzQjs7RUFGQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUVoQixhQUFhO0lBRWIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBRUUsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFHdEIseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQix1QkFBdUI7O0VBRXpCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0NBQWdDO0VBQ2xDOztFQUNBO0lBQ0UsYUFBYTtJQUNiLG9DQUFvQztFQUN0Qzs7RUFDQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBR1osMkJBQTJCO0VBQzdCOztFQUNBO0lBQ0UsUUFBUTtJQUdSLDJCQUEyQjtFQUM3Qjs7RUFDQTtJQUNFLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGJvZHkge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcblxyXG4gICNyZWdpc3Rlci1idG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gIH1cclxuICBcclxuICAucmVnaXN0ZXItZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucmVnaXN0ZXItZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAucmVnaXN0ZXItZm9ybSAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWdpc3Rlci1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWdpc3Rlci1mb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH0gKi9cclxuXHJcblxyXG4gIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWUyZTc7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhYzdkODtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0NDO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ2JveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3NSU7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTVweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIH1cclxuICAuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzQ0MgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmlucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkY2RjZGM7XHJcbiAgfVxyXG4gIC5pbnB1dDppbnZhbGlkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXNzOi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggd2hpdGUgaW5zZXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dEJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMCAjMkNBREFEO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAwICMyQ0FEQUQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAwICMyQ0FEQUQ7XHJcbiAgfVxyXG4gIC5pbnB1dEJ1dHRvbjpob3ZlciB7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMCAjMkNBREFEO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCAwICMyQ0FEQUQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwICMyQ0FEQUQ7XHJcbiAgfVxyXG4gIC5pbnB1dEJ1dHRvbjphY3RpdmUge1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuaW5wdXRCdXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- RegisterComponent! Yay! Woo! Hooray! -->\r\n\r\n\r\n<!-- <div class=\"register-form\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\"> Sign Up with Takoot!</h1>\r\n\r\n  <label for=\"fn-cred\" class=\"sr-only\">First Name</label>\r\n  <input #fn type=\"text\" class=\"form-control\" placeholder=\"First Name\" required autofocus>\r\n  \r\n  <label for=\"ln-cred\" class=\"sr-only\">Last Name</label>\r\n  <input #ln type=\"text\" class=\"form-control\" placeholder=\"Last Name\" required autofocus>\r\n  \r\n  <label for=\"email-cred\" class=\"sr-only\">Email</label>\r\n  <input #email type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus>\r\n  \r\n  <label for=\"username-cred\" class=\"sr-only\">Username</label>\r\n  <input #username type=\"text\" class=\"form-control\" placeholder=\"Username\" required autofocus>\r\n  \r\n  <label for=\"password-cred\" class=\"sr-only\">Password</label>\r\n  <input #password type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n  \r\n  <button id = \"register-btn\" class=\"btn btn-lg btn-primary btn-block\">Sign Up</button>\r\n  <br> -->\r\n  <!-- <div *ngIf=\"credentialsInvalid\" class=\"alert alert-danger text-center\" id=\"alert-msg\" role=\"alert\">\r\n      Invalid Credentials!\r\n  </div> -->\r\n  <!-- <p class=\"mt-5 mb-3 text-muted\">&copy; Takoot! 2017-2019</p>\r\n</div> -->\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"col-md-6\">\r\n  <div id=\"logbox\">\r\n    <form id=\"signup\" action=\"/\">\r\n      <h1>Create An Account</h1>\r\n      <input #fn name=\"user[fn]\" type=\"text\" placeholder=\"What's your first name?\" autofocus=\"autofocus\" required=\"required\" class=\"input pass\"/>\r\n      <input #ln name=\"user[ln]\" type=\"text\" placeholder=\"What's your last name?\" autofocus=\"autofocus\" required=\"required\" class=\"input pass\"/>\r\n      <input #username name=\"user[username]\" type=\"text\" placeholder=\"What's your username?\" pattern=\"^[\\w]{3,16}$\" autofocus=\"autofocus\" required=\"required\" class=\"input pass\"/>\r\n      <input #password name=\"user[password]\" type=\"password\" placeholder=\"Choose a password\" required=\"required\" class=\"input pass\"/>\r\n      <input #confirm name=\"user[password2]\" type=\"password\" placeholder=\"Confirm password\" required=\"required\" class=\"input pass\"/>\r\n      <input #email name=\"user[email]\" type=\"email\" placeholder=\"Email address\" class=\"input pass\"/>\r\n      <input type=\"submit\" value=\"Sign me up!\" class=\"inputButton\"/>\r\n      <div class=\"text-center\">\r\n          already have an account? <a routerLink=\"/login\" id=\"login_id\">login</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/token.interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/*
    You may be asking, what is a Token Interceptor?

    Well let me tell ya!

    It is an HTTP Interceptor that attaches JWT tokens to requests to the backend API
    within an Authorization HTTP header.

    Basically, intercepts an HttpRequest or HttpResponse and handles them.

 */



// specifying this as able to be injected into other objects
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
        console.log('TokenInterceptor constructed');
    }
    // intercepts takes in two parameters: (1) the outgoing request to handle, HttpRequest
    // and (2) the next interceptor in the chain
    TokenInterceptor.prototype.intercept = function (request, next) {
        console.log('HTTP request intercepted!');
        // let token equal the jwt item from storage
        var token = window.localStorage.getItem('rbs-jwt');
        // if the user hits our endpoint and the token is true, attach the JWT
        if (request.url.indexOf(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL) >= 0 && token) {
            console.log('Attaching JWT to Authorization header...');
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            console.log('JWT attached!');
        }
        console.log('Sending HTTP request to HttpHandler');
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'http://localhost:8080/Takoot-Back/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maraz\Documents\Revature\Project-2-Takoot\Takoot-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map