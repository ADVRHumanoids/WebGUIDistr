webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    XBotCore\n  </h1>\n</div>\n<div #container></div>\n <app-plugin-list></app-plugin-list>\n <app-slider-control></app-slider-control>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        console.log(__WEBPACK_IMPORTED_MODULE_1_three__);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.container = this.elementRef.nativeElement;
        console.log(this.container);
        this.init();
    };
    AppComponent.prototype.init = function () {
        var screen = {
            width: 400,
            height: 300
        }, view = {
            angle: 45,
            aspect: screen.width / screen.height,
            near: 0.1,
            far: 1000
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](view.angle, view.aspect, view.near, view.far);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        this.scene.add(this.camera);
        this.scene.add(new __WEBPACK_IMPORTED_MODULE_1_three__["AxisHelper"](20));
        this.camera.position.set(10, 10, 10);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.renderer.setSize(screen.width, screen.height);
        this.container.appendChild(this.renderer.domElement);
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](5, 5, 5), material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0xFFFFFF, wireframe: true });
        this.cube = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        this.cube.position.set(-50, -50, -50);
        this.scene.add(this.cube);
        this.render();
    };
    AppComponent.prototype.render = function () {
        var self = this;
        (function render() {
            requestAnimationFrame(render);
            self.renderer.render(self.scene, self.camera);
            self.animate();
        }());
    };
    AppComponent.prototype.animate = function () {
        this.cube.rotateX(0.1);
        this.cube.rotateY(0.1);
        this.cube.position.addScalar(0.2);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "elementRef", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_app_error_handler__ = __webpack_require__("../../../../../src/app/common/app-error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugin_list_plugin_list_component__ = __webpack_require__("../../../../../src/app/plugin-list/plugin-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slider_control_slider_control_component__ = __webpack_require__("../../../../../src/app/slider-control/slider-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__plugin_list_plugin_list_component__["a" /* PluginListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__slider_control_slider_control_component__["a" /* SliderControlComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__services_http_service__["a" /* HttpService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__common_app_error_handler__["a" /* AppErrorHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/app-error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
var AppErrorHandler = (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('error');
        console.log(error);
    };
    return AppErrorHandler;
}());

//# sourceMappingURL=app-error-handler.js.map

/***/ }),

/***/ "../../../../../src/app/common/app-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
var AppError = (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());

//# sourceMappingURL=app-error.js.map

/***/ }),

/***/ "../../../../../src/app/common/not-foud-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("../../../../../src/app/common/app-error.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));

//# sourceMappingURL=not-foud-error.js.map

/***/ }),

/***/ "../../../../../src/app/plugin-list/plugin-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plugin-list/plugin-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  plugin-list\n</p>\n<li *ngFor=\"let item of plugins\"> {{item.Name}} {{item.Status}}\n    <button type=\"button\" (click)=\"onStart(item.Name)\">Start</button> \n    <button type=\"button\" (click)=\"onStop(item.Name)\">Stop</button> \n     <input type=\"text\"  #cmd>\n     <button type=\"button\" (click)=\"onCmd(item.Name, cmd.value)\">Cmd</button> \n  </li>\n"

/***/ }),

/***/ "../../../../../src/app/plugin-list/plugin-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_not_foud_error__ = __webpack_require__("../../../../../src/app/common/not-foud-error.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PluginListComponent = (function () {
    function PluginListComponent(http) {
        this.plugins = [];
        this.service = new __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]("/plugins", http);
    }
    PluginListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (response) {
            console.log(response);
            for (var _i = 0, _a = response["Plugins"]; _i < _a.length; _i++) {
                var o = _a[_i];
                _this.plugins.push({ Name: o["Name"], Status: o["Status"] });
            }
        }, function (error) {
            //rimovo dal vettore
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_not_foud_error__["a" /* NotFoundError */]) {
                //expected error
                //deleted
                //this.form.setErrors(error.json());
            }
            else {
                //unexpected error
                throw error;
            }
        });
    };
    PluginListComponent.prototype.onStart = function (param) {
        for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o.Name == param)
                o.Status = "RUNNING";
        }
        console.log(param);
        this.service.get("/switch?" + param + "_switch=start")
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            //rimovo dal vettore
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_not_foud_error__["a" /* NotFoundError */]) {
                //expected error
                //deleted
                //this.form.setErrors(error.json());
            }
            else {
                //unexpected error
                throw error;
            }
        });
    };
    PluginListComponent.prototype.onStop = function (param) {
        for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o.Name == param)
                o.Status = "STOPPED";
        }
        console.log(param);
        this.service.get("/switch?" + param + "_switch=stop")
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            //rimovo dal vettore
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_not_foud_error__["a" /* NotFoundError */]) {
                //expected error
                //deleted
                //this.form.setErrors(error.json());
            }
            else {
                //unexpected error
                throw error;
            }
        });
    };
    PluginListComponent.prototype.onCmd = function (param, cmd) {
        console.log(cmd);
        this.service.post("/cmd", { "Name": param + "_cmd", "cmd": cmd })
            .subscribe(function (response) {
        }, function (error) {
            //rimovo dal vettore
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_not_foud_error__["a" /* NotFoundError */]) {
                //expected error
                //deleted
                //this.form.setErrors(error.json());
            }
            else {
                //unexpected error
                throw error;
            }
        });
    };
    return PluginListComponent;
}());
PluginListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-plugin-list',
        template: __webpack_require__("../../../../../src/app/plugin-list/plugin-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plugin-list/plugin-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PluginListComponent);

var _a;
//# sourceMappingURL=plugin-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_foud_error__ = __webpack_require__("../../../../../src/app/common/not-foud-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_app_error__ = __webpack_require__("../../../../../src/app/common/app-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpService = (function () {
    function HttpService(url, http) {
        this.url = url;
        this.http = http;
    }
    HttpService.prototype.getAll = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        ;
    };
    HttpService.prototype.get = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        ;
    };
    HttpService.prototype.create = function (resource) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url, JSON.stringify(resource), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.post = function (url, resource) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, JSON.stringify(resource), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.updatePost = function (resource) {
        //we put in the post only the property that we want modify, so 
        //we send less data to the server
        /*this.http.patch(this.url+'/'+post.id,JSON.stringify({myprop: true}))
        .subscribe(response => {
    
        })*/
        //or the complete object
        return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource));
    };
    HttpService.prototype.deletePost = function (post) {
        return this.http.delete(this.url + '/' + post.id);
        //delete from array using indexof(posts)
    };
    HttpService.prototype.handleError = function (error) {
        if (error.status === 404)
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_1__common_not_foud_error__["a" /* NotFoundError */]());
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_2__common_app_error__["a" /* AppError */](error));
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/slider-control/slider-control.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slider-control/slider-control.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  slider-control  <button type=\"button\" (click)=\"onMaster()\">Set Web Master</button> \n <button type=\"button\" (click)=\"type='range'\">R</button><button type=\"button\" (click)=\"type='number'\">N</button> \n</p>\n<li *ngFor=\"let item of chains; let i=index\"> {{item.Chain}}\n  \n  {{item.Val.Name}} {{item.Val.Id}} <p>PositionRef</p><input [type]=\"type\" #Input name=\"range\" [(ngModel)]=\"chains[i].Val.JVal\" min={{item.Val.Llimit}}  max={{item.Val.Ulimit}} step=\"0.1\" (change)=\"setPosRef(Input.value)\" > {{item.Val.JVal}}\n  \n  <p>VelocityRef</p><input [type]=\"type\" #Vel name=\"range\" [(ngModel)]=\"chains[i].Val.VVal\"  step=\"0.1\" (change)=\"setVelRef(Vel.value)\" > {{item.Val.VVal}}\n  <p>EffortRef</p><input [type]=\"type\" #Eff name=\"range\" [(ngModel)]=\"chains[i].Val.EVal\" step=\"0.1\" (change)=\"setEffortRef(Eff.value)\" > {{item.Val.EVal}}\n  <p>Stiffness</p><input [type]=\"type\" #Stiff name=\"range\" [(ngModel)]=\"chains[i].Val.SVal\" min=0.0  max=10000.0  step=\"0.1\" (change)=\"setStiffRef(Stiff.value)\" > {{item.Val.SVal}}\n  <p>Damping</p><input [type]=\"type\" #Damp name=\"range\" [(ngModel)]=\"chains[i].Val.DVal\" min=0.0  max=10000.0 step=\"0.1\" (change)=\"setDampRef(Damp.value)\" > {{item.Val.DVal}}\n  <button type=\"button\" (click)=\"setPosRef(Input.value); setVelRef(Vel.value); setEffortRef(Eff.value); setStiffRef(Stiff.value); setDampRef(Damp.value); sendVal(item.Val.Id)\">SEND</button>\n</li>\n\n "

/***/ }),

/***/ "../../../../../src/app/slider-control/slider-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_not_foud_error__ = __webpack_require__("../../../../../src/app/common/not-foud-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SliderControlComponent = (function () {
    function SliderControlComponent(http) {
        this.type = "range";
        this.chains = [];
        this.jid = [];
        this.jval = [];
        this.evval = [];
        this.vvval = [];
        this.svval = [];
        this.dvval = [];
        this.pval = 0.0;
        this.vval = 0.0;
        this.eval = 0.0;
        this.sval = 0.0;
        this.dval = 0.0;
        this.service = new __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]("/singlejoint", http);
    }
    SliderControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.get("/chains")
            .subscribe(function (response) {
            for (var _i = 0, _a = response["Chains"]; _i < _a.length; _i++) {
                var o = _a[_i];
                var p = o["Val"];
                var chna = o["Chain"];
                for (var _b = 0, p_1 = p; _b < p_1.length; _b++) {
                    var u = p_1[_b];
                    _this.chains.push({ Chain: chna, Val: { Name: u["Name"], Id: u["ID"], JVal: u["Lval"],
                            VVal: u["Vval"], EVal: u["Eval"], SVal: u["Sval"], DVal: u["Dval"],
                            Llimit: u["Llimit"], Ulimit: u["Ulimit"] } });
                }
            }
        }, function (error) {
            //rimovo dal vettore
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__common_not_foud_error__["a" /* NotFoundError */]) {
                //expected error
                //deleted
                //this.form.setErrors(error.json());
            }
            else {
                //unexpected error
                throw error;
            }
        });
    };
    SliderControlComponent.prototype.setPosRef = function (param) {
        this.pval = param;
    };
    SliderControlComponent.prototype.setVelRef = function (param) {
        this.vval = param;
    };
    SliderControlComponent.prototype.setEffortRef = function (param) {
        this.eval = param;
    };
    SliderControlComponent.prototype.setStiffRef = function (param) {
        this.sval = param;
    };
    SliderControlComponent.prototype.setDampRef = function (param) {
        this.dval = param;
    };
    SliderControlComponent.prototype.sendVal = function (id) {
        //{"joint":[{"id": 15, "val": 0},{"id": 16, "val": 0}]}
        this.service.create({ "joint": [{ "id": Number(id), "pos": Number(this.pval),
                    "vel": Number(this.vval), "eff": Number(this.eval), "stiff": Number(this.sval),
                    "damp": Number(this.dval) }] })
            .subscribe(function (response) {
        }, function (error) {
            //rimovo dal vettore
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__common_not_foud_error__["a" /* NotFoundError */]) {
                //expected error
                //deleted
                //this.form.setErrors(error.json());
            }
            else {
                //unexpected error
                throw error;
            }
        });
    };
    SliderControlComponent.prototype.onMaster = function () {
        var _this = this;
        this.service.get("/master?web")
            .subscribe(function (response) {
        }, function (error) {
            //rimovo dal vettore
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__common_not_foud_error__["a" /* NotFoundError */]) {
                //expected error
                //deleted
                //this.form.setErrors(error.json());
            }
            else {
                //unexpected error
                throw error;
            }
        });
        this.service.get("/state")
            .subscribe(function (response) {
            for (var _i = 0, _a = response["joint_id"]; _i < _a.length; _i++) {
                var o = _a[_i];
                _this.jid.push(o);
            }
            for (var _b = 0, _c = response["link_position"]; _b < _c.length; _b++) {
                var o = _c[_b];
                _this.jval.push(o);
            }
            for (var _d = 0, _e = response["effort"]; _d < _e.length; _d++) {
                var o = _e[_d];
                _this.evval.push(o);
            }
            for (var _f = 0, _g = response["link_velocity"]; _f < _g.length; _f++) {
                var o = _g[_f];
                _this.vvval.push(o);
            }
            for (var _h = 0, _j = response["stiffness"]; _h < _j.length; _h++) {
                var o = _j[_h];
                _this.svval.push(o);
            }
            for (var _k = 0, _l = response["damping"]; _k < _l.length; _k++) {
                var o = _l[_k];
                _this.dvval.push(o);
            }
            for (var _m = 0, _o = _this.chains; _m < _o.length; _m++) {
                var entry = _o[_m];
                for (var i in _this.jval) {
                    if (entry.Val.Id == _this.jid[i]) {
                        entry.Val.JVal = _this.jval[i];
                        entry.Val.VVal = _this.vvval[i];
                        entry.Val.EVal = _this.evval[i];
                        entry.Val.SVal = _this.svval[i];
                        entry.Val.DVal = _this.dvval[i];
                    }
                }
            }
        }, function (error) {
            //rimovo dal vettore
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__common_not_foud_error__["a" /* NotFoundError */]) {
                //expected error
                //deleted
                //this.form.setErrors(error.json());
            }
            else {
                //unexpected error
                throw error;
            }
        });
    };
    return SliderControlComponent;
}());
SliderControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_5" /* Component */])({
        selector: 'app-slider-control',
        template: __webpack_require__("../../../../../src/app/slider-control/slider-control.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slider-control/slider-control.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SliderControlComponent);

var _a;
//# sourceMappingURL=slider-control.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map