webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(http, storage, navCtrl, navParams) {
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.forms = 'login';
    };
    LoginPage.prototype.register = function (opts) {
        if (opts.password == opts.password2) {
            // test this first!!
            // const url = '/authenticate/register';
            // const headers = new HttpHeaders({'username': opts.username,'password':opts.password})
            // this.http.post(url,opts,{headers:headers})
            // .subscribe((response: any)=>{
            //   if(response.success ==true){
            //     alert('user is registered!')
            //     this.storage.set('token', response.data);
            //   }
            // })
            this.goBack();
        }
        else {
            // Implement message box here
        }
    };
    LoginPage.prototype.login = function (opts) {
        this.storage.set('token', 'Esteban');
        // test this first!!
        // const url = '/authenticate';
        // const headers = new HttpHeaders({'username': opts.username,'password':opts.password})
        // this.http.post(url,opts,{headers:headers})
        // .subscribe((response: any)=>{
        //   if(response.success ==true){
        //     alert('user is registered!')
        //     this.storage.set('token', response.data);
        //   }
        // })
        this.goBack();
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/BanditoMac/Projects/6500finals/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="goBack()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding>\n    <ion-segment [(ngModel)]="forms">\n      <ion-segment-button value="login">\n        Login\n      </ion-segment-button>\n      <ion-segment-button value="register">\n        Register\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="forms">\n    <ion-grid fixed>\n      <form *ngSwitchCase="\'login\'" #loginForm="ngForm" (ngSubmit)="login({\n    username: username.value,\n    password: password.value\n  })">\n        <ion-list>\n          <ion-item>\n            <ion-label>UserName</ion-label>\n            <ion-input #username type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input #password type="password"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button type="submit">Login</button>\n      </form>\n\n      <form *ngSwitchCase="\'register\'" #registerForm="ngForm" (ngSubmit)="register({\n        username: username.value,\n        password: password.value,\n        password2: password2.value\n      })">\n        <ion-list>\n          <ion-item>\n            <ion-label>UserName</ion-label>\n            <ion-input #username type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input #password type="password"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input #password2 type="password" placeholder="Please write same password as above"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button type="submit">Register</button>\n      </form>\n    </ion-grid>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/BanditoMac/Projects/6500finals/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(228);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(profile, storage, navCtrl, navParams) {
        this.profile = profile;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserProfilePage.prototype.ngOnInit = function () {
        this.username = 'Esteban';
        this.ccType = 'visa';
    };
    UserProfilePage.prototype.updateProfile = function (opts) {
        var _this = this;
        var profile = __assign({}, opts, { username: this.username, creditCard: {
                number: opts.creditCard.number,
                type: this.ccType
            } });
        if (opts) {
            this.profile.putProfile(profile)
                .subscribe(function (response) {
                alert(response.data);
                _this.navCtrl.pop();
            });
        }
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-userprofile',template:/*ion-inline-start:"/Users/BanditoMac/Projects/6500finals/src/pages/userprofile/userprofile.html"*/'<!--\n  Generated template for the UserprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{username}}\'s Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #profileForm="ngForm" (ngSubmit)="updateProfile({\n    firstName: firstName.value,\n    middleName: middleName.value,\n    lastName: lastName.value,\n    address: address.value,\n    state: state.value,\n    city: city.value,\n    country: country.value,\n    zip: zip.value,\n    phone: phone.value,\n    creditCard: { \n      number: number.value\n    }\n  })">\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input placeholder="{{username}}" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input #firstName type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Middle Name</ion-label>\n      <ion-input #middleName type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input #lastName type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Address</ion-label>\n      <ion-input #address type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>State</ion-label>\n      <ion-input #state type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>City</ion-label>\n      <ion-input #city type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Country</ion-label>\n      <ion-input #country type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Zip Code</ion-label>\n      <ion-input #zip type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Phone Number</ion-label>\n      <ion-input #phone type="text"></ion-input>\n    </ion-item>\n    <h2>Credit Card Info</h2>\n    <ion-item>\n      <ion-label>CC Number</ion-label>\n      <ion-input #number value="1234432112344321" placeholder="1234432112344321" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <h2>CC Type</h2>\n      <ion-select [(ngModel)]="ccType" [ngModelOptions]="{standalone:true}" placeholder="Visa">\n        <ion-option value="visa">Visa</ion-option>\n        <ion-option value="mastercard">MasterCard</ion-option>\n        <ion-option value="debit">Debit</ion-option>\n        <ion-option value="discover">Discover</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button type="submit">Update profile</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/BanditoMac/Projects/6500finals/src/pages/userprofile/userprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=userprofile.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userprofile__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userprofile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userprofile__["a" /* UserProfilePage */]),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=userprofile.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buy/buy.module": [
		185
	],
	"../pages/employee/employee.module": [
		186
	],
	"../pages/login/login.module": [
		187
	],
	"../pages/userprofile/userprofile.module": [
		140
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageModule", function() { return BuyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyPageModule = /** @class */ (function () {
    function BuyPageModule() {
    }
    BuyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */]),
            ],
        })
    ], BuyPageModule);
    return BuyPageModule;
}());

//# sourceMappingURL=buy.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function() { return EmployeePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmployeePageModule = /** @class */ (function () {
    function EmployeePageModule() {
    }
    EmployeePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* EmployeePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__employee__["a" /* EmployeePage */]),
            ],
        })
    ], EmployeePageModule);
    return EmployeePageModule;
}());

//# sourceMappingURL=employee.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.storage.get('token').then(function (token) {
            if (token) {
                _this.token = token;
            }
        });
    }
    ProfileProvider.prototype.putProfile = function (opts) {
        var url = "/profile";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': this.token
        });
        var httpOptions = {
            headers: headers
        };
        return this.http.put(url, opts, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(3), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    ProfileProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw__["_throw"])('Something bad happened; please try again later.');
    };
    ;
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buy_buy__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_employee__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userprofile_userprofile__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_catalog_catalog__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var HomePage = /** @class */ (function () {
    function HomePage(catalog, storage, navCtrl, modalCtrl) {
        this.catalog = catalog;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.products = [];
        this.username = '';
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.getProducts();
        this.checkIfLogin();
    };
    HomePage.prototype.login = function () {
        var _this = this;
        var loginModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        loginModal.onWillDismiss(function () { return _this.checkIfLogin(); });
        loginModal.present();
    };
    HomePage.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.catalog.getProducts()
                    .subscribe(function (response) {
                    if (response.success) {
                        _this.products = response.data;
                    }
                    else {
                        console.error(response.error);
                        //here goes a way to handle the error.
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.checkIfLogin = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val) {
                _this.userLogin = true;
                _this.userType = 'employee';
                _this.username = val;
            }
        });
    };
    HomePage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__userprofile_userprofile__["a" /* UserProfilePage */]);
    };
    HomePage.prototype.goToEmployee = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__employee_employee__["a" /* EmployeePage */]);
    };
    HomePage.prototype.buy = function (product) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__buy_buy__["a" /* BuyPage */], { product: product, username: this.username })
            .present();
    };
    HomePage.prototype.logout = function () {
        this.storage.remove('token');
        this.userLogin = false;
        this.userType = null;
        this.username = null;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/BanditoMac/Projects/6500finals/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      6500 Finals\n    </ion-title>\n    <ion-buttons end>\n      <button *ngIf="userType == \'employee\'" ion-button (click)="goToEmployee()">\n        Employee\n      </button>\n      <button *ngIf="!userLogin" ion-button (click)="login()">\n        Login\n      </button>\n      <button *ngIf="userLogin" ion-button (click)="goToProfile()">\n        {{username}}\n      </button>\n      <button *ngIf="userLogin" ion-button (click)="logout()">\n        Logout\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let product of products">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>\n              <img src="{{product.src}}" />\n          </ion-col>\n          <ion-col>\n              <h2>\n                  {{product.title}}\n                </h2>\n                <p>\n                  {{product.description}}\n                </p>\n                <p>\n                  Only for ${{product.price}}\n                </p>\n                <button ion-button  (click)="buy(product)">\n                  Buy {{product.title}}\n                </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/BanditoMac/Projects/6500finals/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_catalog_catalog__["a" /* CatalogProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_throw__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CatalogoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CatalogProvider = /** @class */ (function () {
    function CatalogProvider(http) {
        this.http = http;
    }
    CatalogProvider.prototype.getProducts = function () {
        var url = "/catalog";
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["retry"])(3), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    CatalogProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_throw__["_throw"])('Something bad happened; please try again later.');
    };
    ;
    CatalogProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CatalogProvider);
    return CatalogProvider;
}());

//# sourceMappingURL=catalog.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_userprofile_userprofile_module__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_buy_buy_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_buy_buy__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_employee_employee_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_employee_employee__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_userprofile_userprofile__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_catalog_catalog__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_profile_profile__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_employee_employee_module__["EmployeePageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_userprofile_userprofile_module__["UserProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_buy_buy_module__["BuyPageModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buy/buy.module#BuyPageModule', name: 'BuyPage', segment: 'buy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/employee.module#EmployeePageModule', name: 'EmployeePage', segment: 'employee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_buy_buy__["a" /* BuyPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_employee_employee__["a" /* EmployeePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_userprofile_userprofile__["a" /* UserProfilePage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_catalog_catalog__["a" /* CatalogProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_profile_profile__["a" /* ProfileProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyPage = /** @class */ (function () {
    function BuyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuyPage.prototype.ngOnInit = function () {
        this.product = this.navParams.get('product');
        this.username = this.navParams.get('username');
        this.getUserFromDB(this.username);
    };
    BuyPage.prototype.getUserFromDB = function (username) {
        this.userProfile = USER;
    };
    BuyPage.prototype.orderProduct = function () {
        alert(this.userProfile.firstName + " ordered " + this.product.title);
        this.navCtrl.pop();
    };
    ;
    BuyPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BuyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy',template:/*ion-inline-start:"/Users/BanditoMac/Projects/6500finals/src/pages/buy/buy.html"*/'<!--\n  Generated template for the BuyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{product.title}}</ion-title>\n    <ion-buttons start>\n        <button ion-button (click)="goBack()"><ion-icon name="close"></ion-icon></button>\n      </ion-buttons>  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <h1>Shipping Address</h1>\n    <ion-item>\n      <p>{{userProfile.name}}</p>\n      <p>{{userProfile.shippingAddress}}</p>\n      <p>{{userProfile.city}}, {{userProfile.state}}, {{userProfile.country}} {{userProfile.zip}}</p>\n    </ion-item>\n    <h1>Payment Method</h1>\n    <ion-item>\n      <p>{{userProfile.creditCard.type}} ending in {{userProfile.creditCard.number}}</p>\n    </ion-item>\n    <h1>Review items and Shipping</h1>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{product.src}}">\n      </ion-avatar>\n      <p>{{product.title}}</p>\n      <p>{{product.description}}</p>\n      <p>${{product.price}}</p>\n    </ion-item>\n  </ion-list>\n  <button ion-button (click)="orderProduct()">Place your order</button>\n  <button ion-button color="danger" (click)="goBack()">Cancel Order</button>\n</ion-content>'/*ion-inline-end:"/Users/BanditoMac/Projects/6500finals/src/pages/buy/buy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BuyPage);
    return BuyPage;
}());

var USER = {
    username: 'stefanos',
    firstName: 'Esteban',
    middleName: 'Andres',
    lastName: 'Morales',
    address: 'Calle 123',
    city: 'ciudad321',
    state: 'PR',
    country: 'United States',
    zip: '123321',
    phone: '123456789',
    creditCard: {
        number: 6879,
        type: 'VISA'
    }
};
//# sourceMappingURL=buy.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeePage = /** @class */ (function () {
    function EmployeePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmployeePage.prototype.ngOnInit = function () {
        this.orders = [];
        this.orderProductsInfo = [];
        this.order = { id: null, productIds: [], date: null, username: null, status: null, shipping: null, total: null, zip: null };
        this.today = new Date().toString().slice(0, 15);
        this.analyze();
    };
    EmployeePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getAllOrders()
            .then(function (orders) { return _this.orders = orders; });
    };
    EmployeePage.prototype.getAllOrders = function () {
        return Promise.resolve(ORDERS);
    };
    EmployeePage.prototype.insertProduct = function (opts) {
        alert('Product was created in DB.');
    };
    EmployeePage.prototype.analyze = function () {
        this.mostSalesYear = null;
        this.mostSoldProduct = null;
        this.topClient = null;
        this.mostExpensiveToShip = [];
        this.getTopOrdersByTotal();
        this.getTopSoldArticle();
        this.getMostOrdersByZip();
        this.getMostOrdersByClient();
    };
    EmployeePage.prototype.getMostOrdersByClient = function () {
        var clients = this.getAllClientsWithOrdersFromDB();
        this.topClient = this.getMostRepeatedClient(clients);
    };
    EmployeePage.prototype.getMostRepeatedClient = function (clients) {
        var temp = '';
        var tempCounter = 0;
        for (var _i = 0, clients_1 = clients; _i < clients_1.length; _i++) {
            var client = clients_1[_i];
            var counter = 0;
            for (var _a = 0, clients_2 = clients; _a < clients_2.length; _a++) {
                var client2 = clients_2[_a];
                if (client == client2) {
                    counter++;
                }
            }
            if (temp == '' && tempCounter == 0) {
                temp = client;
                tempCounter = counter;
            }
            else {
                if (temp != client && tempCounter < counter) {
                    temp = client;
                    tempCounter = counter;
                }
            }
        }
        var clientName = temp;
        return clientName;
    };
    EmployeePage.prototype.getAllClientsWithOrdersFromDB = function () {
        var clients = [];
        for (var _i = 0, ORDERS_1 = ORDERS; _i < ORDERS_1.length; _i++) {
            var order = ORDERS_1[_i];
            clients = clients.concat([order.username]);
        }
        return clients;
    };
    EmployeePage.prototype.getMostOrdersByZip = function () {
        var zips = this.getAllOrdersZipFromDB();
        this.topClient = this.getMostRepeatedZip(zips);
    };
    EmployeePage.prototype.getMostRepeatedZip = function (zips) {
        var temp = '';
        var tempCounter = 0;
        for (var _i = 0, zips_1 = zips; _i < zips_1.length; _i++) {
            var zip = zips_1[_i];
            var counter = 0;
            for (var _a = 0, zips_2 = zips; _a < zips_2.length; _a++) {
                var zip2 = zips_2[_a];
                if (zip == zip2) {
                    counter++;
                }
            }
            if (temp == '' && tempCounter == 0) {
                temp = zip;
                tempCounter = counter;
            }
            else {
                if (temp != zip && tempCounter < counter) {
                    temp = zip;
                    tempCounter = counter;
                }
            }
        }
        var zipCode = temp;
        return zipCode;
    };
    EmployeePage.prototype.getAllOrdersZipFromDB = function () {
        var zips = [];
        for (var _i = 0, ORDERS_2 = ORDERS; _i < ORDERS_2.length; _i++) {
            var order = ORDERS_2[_i];
            zips = zips.concat([order.zip]);
        }
        return zips;
    };
    EmployeePage.prototype.getTopSoldArticle = function () {
        var year = new Date().getFullYear();
        var productIds = this.getAllOrdersProductIdsFromDB(year);
        this.mostSoldProduct = this.getMostRepeatedId(productIds);
    };
    EmployeePage.prototype.getMostRepeatedId = function (productIds) {
        var temp = '';
        var tempCounter = 0;
        for (var _i = 0, productIds_1 = productIds; _i < productIds_1.length; _i++) {
            var id = productIds_1[_i];
            var counter = 0;
            for (var _a = 0, productIds_2 = productIds; _a < productIds_2.length; _a++) {
                var id2 = productIds_2[_a];
                if (id == id2) {
                    counter++;
                }
            }
            if (temp == '' && tempCounter == 0) {
                temp = id;
                tempCounter = counter;
            }
            else {
                if (temp != id && tempCounter < counter) {
                    temp = id;
                    tempCounter = counter;
                }
            }
        }
        var productTitle = this.getProductInfoFromDB(temp);
        return productTitle;
    };
    EmployeePage.prototype.getProductInfoFromDB = function (id) {
        var product = PRODUCTS.find(function (product) { return id == product.id; });
        return product.title;
    };
    EmployeePage.prototype.getAllOrdersProductIdsFromDB = function (year) {
        var myProductsIds = [];
        for (var _i = 0, ORDERS_3 = ORDERS; _i < ORDERS_3.length; _i++) {
            var order = ORDERS_3[_i];
            for (var _a = 0, _b = order.productIds; _a < _b.length; _a++) {
                var productIds = _b[_a];
                myProductsIds = myProductsIds.concat([productIds.id]);
            }
        }
        return myProductsIds;
    };
    ;
    EmployeePage.prototype.getTopOrdersByTotal = function () {
        var mostSales = {
            2018: {
                sales: 0
            }, 2017: {
                sales: 0
            }, 2016: {
                sales: 0
            }
        };
        for (var _i = 0, ORDERS_4 = ORDERS; _i < ORDERS_4.length; _i++) {
            var order = ORDERS_4[_i];
            mostSales[order.date.getFullYear()].sales += order.total;
        }
        this.mostSalesYear = this.sortSales(mostSales);
    };
    EmployeePage.prototype.sortSales = function (sales) {
        var temp = null;
        for (var prop in sales) {
            if (sales.hasOwnProperty(prop)) {
                var element = sales[prop];
                if (temp == null) {
                    temp = prop;
                }
                else {
                    if (element > temp) {
                        temp = prop;
                    }
                }
            }
        }
        return temp;
    };
    EmployeePage.prototype.searchOrders = function (event) {
        this.orders = [];
        var value = event.target.value;
        this.getOrdersId(value);
        //this.orders = this.getOrdersId(value);
    };
    EmployeePage.prototype.getOrdersId = function (value) {
        for (var _i = 0, ORDERS_5 = ORDERS; _i < ORDERS_5.length; _i++) {
            var order = ORDERS_5[_i];
            if (value == order.id || value == order.username) {
                this.orders = this.orders.concat([order]);
            }
        }
    };
    EmployeePage.prototype.getOrderInfo = function (order) {
        this.orderProductsInfo = [];
        this.getOrderInfoFromDB(order);
        this.getOrderProductsInfoFromDB(this.order.productIds);
    };
    EmployeePage.prototype.getOrderProductsInfoFromDB = function (productIds) {
        var _loop_1 = function (productId) {
            var myProduct = PRODUCTS.find(function (product) { return productId.id == product.id; });
            if (myProduct) {
                this_1.orderProductsInfo = this_1.orderProductsInfo.concat([myProduct]);
            }
        };
        var this_1 = this;
        for (var _i = 0, productIds_3 = productIds; _i < productIds_3.length; _i++) {
            var productId = productIds_3[_i];
            _loop_1(productId);
        }
    };
    EmployeePage.prototype.getOrderInfoFromDB = function (opts) {
        for (var _i = 0, ORDERS_6 = ORDERS; _i < ORDERS_6.length; _i++) {
            var order = ORDERS_6[_i];
            if (order.id == opts.id || order.username == opts.username) {
                this.order = __assign({}, this.order, order);
            }
        }
    };
    EmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee',template:/*ion-inline-start:"/Users/BanditoMac/Projects/6500finals/src/pages/employee/employee.html"*/'<!--\n  Generated template for the EmployeePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Employee</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-searchbar placeholder="Search by username or order id" debounce="1500" (ionInput)="searchOrders($event)"></ion-searchbar>\n        <ion-list>\n          <ion-item *ngFor="let order of orders" (click)="getOrderInfo(order)">\n            {{order.id}}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n        <div>\n          Order: {{order.id}}\n        </div>\n        <div>\n          Date: {{order.date}}\n        </div>\n        <div>\n          User: {{order.username}}\n        </div>\n        <div>\n          Shipping Costs: {{order.shipping}}\n        </div>\n        <div>\n          Total: {{order.total}}\n        </div>\n        <div>\n          Status: {{order.status}}\n        </div>\n        <ion-list *ngFor="let product of orderProductsInfo">\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{product.src}}">\n            </ion-avatar>\n            <p>{{product.id}}</p>\n            <p>{{product.title}}</p>\n            <p>{{product.description}}</p>\n            <p>${{product.price}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n        <div>\n          <p>Year with most sales is: {{mostSalesYear}}</p>\n          <p>Most sold product up to {{today}} is\n            <span>{{mostSoldProduct}}</span>\n          </p>\n          <p>Most sold product up to {{today}} is in Zip Code\n            <span>{{ordersByZip}}</span>\n          </p>\n          <p>Client with more buys up to {{today}} is\n            <span>{{topClient}}</span>\n          </p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-5>\n        <form #employeeForm="ngForm" (ngSubmit)="insertProduct({\n          id:id.value,\n          title:title.value,\n          image:image.value,\n          shipping:shipping.value,\n          description:description.value,\n          price:price.value\n        })">\n          <ion-item>\n            <ion-label>Id</ion-label>\n            <ion-input #id type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Title</ion-label>\n            <ion-input #title type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Image</ion-label>\n            <ion-input #image type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Shipping</ion-label>\n            <ion-input #shipping type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Description</ion-label>\n            <ion-input #description type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Price</ion-label>\n            <ion-input #price type="text"></ion-input>\n          </ion-item>\n          <button ion-button type="submit">Create Product</button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/BanditoMac/Projects/6500finals/src/pages/employee/employee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EmployeePage);
    return EmployeePage;
}());

var ORDERS = [{
        id: 'x1',
        productIds: [{ id: 'z3498' }, { id: 'z089' }],
        date: new Date(2017, 10, 26),
        username: 'yanny',
        status: 'Shipped',
        shipping: 8.13,
        total: 40.99,
        zip: '00714'
    }, {
        id: 'x2',
        productIds: [{ id: 'z2314' }, { id: 'z43' }, { id: 'z2' }],
        date: new Date(2018, 3, 4),
        username: 'elijah',
        status: 'Received',
        shipping: 13.58,
        total: 55.99,
        zip: '00956'
    }, {
        id: 'x3',
        productIds: [{ id: 'z089' }, { id: 'z345' }, { id: 'z2' }],
        date: new Date(2018, 5, 6),
        username: 'garfiu',
        status: 'Returned',
        shipping: 45.38,
        total: 35.89,
        zip: '00662'
    }, {
        id: 'x4',
        productIds: [{ id: 'z2314' }, { id: 'z3498' }, { id: 'z43' }],
        date: new Date(2016, 9, 8),
        username: 'yanny',
        status: 'Shipped',
        shipping: 50.36,
        total: 89.20,
        zip: '00714'
    }];
var PRODUCTS = [{
        id: 'z3498',
        title: 'Hawaiian Shirt',
        description: 'Hawaiian shirt for adults',
        src: 'assets/custom/shirt.jpg',
        price: 9.99
    },
    {
        id: 'z089',
        title: 'Polo Shirt',
        description: 'Polo shirt for adults',
        src: 'assets/custom/polo.jpg',
        price: 19.99
    },
    {
        id: 'z2314',
        title: 'Carpet styled pants',
        description: 'Office pants for adult females',
        src: 'assets/custom/pants.jpg',
        price: 39.99
    },
    {
        id: 'z9876',
        title: 'Khakhi Pants',
        description: 'Office pants for adult males',
        src: 'assets/custom/pants2.jpg',
        price: 22.99
    },
    {
        id: 'z345',
        title: 'Office comfy shoes',
        description: 'Shoes made for the office woman!',
        src: 'assets/custom/shoes.jpg',
        price: 63.99
    },
    {
        id: 'z43',
        title: 'Tennis shoes',
        description: 'Shoes for running',
        src: 'assets/custom/shoes2.jpg',
        price: 78.99
    },
    {
        id: 'z2',
        title: 'Dress shoes',
        description: 'Leather and handmade',
        src: 'assets/custom/shoes3.jpg',
        price: 41.99
    }];
//# sourceMappingURL=employee.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.js.map