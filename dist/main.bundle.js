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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    XBotCore\n  </h1>\n</div>\n<app-canvas></app-canvas>\n<app-plotter></app-plotter>\n<app-plugin-list></app-plugin-list>\n<!--<app-slider-control></app-slider-control>-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_robot_state_service__ = __webpack_require__("../../../../../src/app/services/robot-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_app_error_handler__ = __webpack_require__("../../../../../src/app/common/app-error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plugin_list_plugin_list_component__ = __webpack_require__("../../../../../src/app/plugin-list/plugin-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__slider_control_slider_control_component__ = __webpack_require__("../../../../../src/app/slider-control/slider-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__canvas_canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__plotter_plotter_component__ = __webpack_require__("../../../../../src/app/plotter/plotter.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__plugin_list_plugin_list_component__["a" /* PluginListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__slider_control_slider_control_component__["a" /* SliderControlComponent */],
            __WEBPACK_IMPORTED_MODULE_11__canvas_canvas_component__["a" /* CanvasComponent */],
            __WEBPACK_IMPORTED_MODULE_12__plotter_plotter_component__["a" /* PlotterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_0__services_robot_state_service__["a" /* RobotStateService */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["c" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5__common_app_error_handler__["a" /* AppErrorHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div #container></div>\n<div *ngIf=\"isJoint;else sensor\">\n    <li > \n        <p>ID: {{robotState.id}}  Name: {{robotState.name}}</p>\n        <p>Motor Position: {{robotState.motorPos}} <button type=\"button\" (click)=\"addPlot(robotState.id,'motorPos',robotState.name)\">Plot</button>\n             Link Position: {{robotState.linkPos}} <button type=\"button\" (click)=\"addPlot(robotState.id,'linkPos',robotState.name)\">Plot</button></p> \n        <p>Motor Velocity: {{robotState.motorVel}} <button type=\"button\" (click)=\"addPlot(robotState.id,'motorVel',robotState.name)\">Plot</button>\n             Link Velocity: {{robotState.linkVel}} <button type=\"button\" (click)=\"addPlot(robotState.id,'linkVel',robotState.name)\">Plot</button></p>\n        <p>Stiffness: {{robotState.stiff}} <button type=\"button\" (click)=\"addPlot(robotState.id,'stiff',robotState.name)\">Plot</button>\n             Damping: {{robotState.damp}} <button type=\"button\" (click)=\"addPlot(robotState.id,'damp',robotState.name)\">Plot</button></p>\n        <p>Torque: {{robotState.effort}} <button type=\"button\" (click)=\"addPlot(robotState.id,'effort',robotState.name)\">Plot</button> \n            Fault: {{robotState.fault}} <button type=\"button\" (click)=\"addPlot(robotState.id,'fault',robotState.name)\">Plot</button></p>\n        <p>Temperature: {{robotState.temp}} <button type=\"button\" (click)=\"addPlot(robotState.id,'temp',robotState.name)\">Plot</button> \n            Aux: {{robotState.aux}} <button type=\"button\" (click)=\"addPlot(robotState.id,'aux',robotState.name)\">Plot</button></p>\n    </li>\n</div>\n<ng-template #sensor>\n    <li > \n        <p>ID: {{robotSensorState.id}}  Name: {{robotSensorState.name}}</p>\n        <p>Force: x:{{robotSensorState.forcex}} <button type=\"button\" (click)=\"addPlot(robotSensorState.id,'forcex',robotSensorState.name)\">Plot</button> \n            y:{{robotSensorState.forcey}} <button type=\"button\" (click)=\"addPlot(robotSensorState.id,'forcey',robotSensorState.name)\">Plot</button>\n            z:{{robotSensorState.forcez}} <button type=\"button\" (click)=\"addPlot(robotSensorState.id,'forcez',robotSensorState.name)\">Plot</button>\n        </p>\n        <p>Torque: x:{{robotSensorState.torquex}} <button type=\"button\" (click)=\"addPlot(robotSensorState.id,'torquex',robotSensorState.name)\">Plot</button>\n            y:{{robotSensorState.torquey}} <button type=\"button\" (click)=\"addPlot(robotSensorState.id,'torquey',robotSensorState.name)\">Plot</button>\n            z:{{robotSensorState.torquez}} <button type=\"button\" (click)=\"addPlot(robotSensorState.id,'torquez',robotSensorState.name)\">Plot</button>      \n        </p>\n    </li>\n</ng-template>\n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_not_foud_error__ = __webpack_require__("../../../../../src/app/common/not-foud-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_robot_state_service__ = __webpack_require__("../../../../../src/app/services/robot-state.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrbitControls = __webpack_require__("../../../../three-orbit-controls/index.js")(__WEBPACK_IMPORTED_MODULE_1_three__);
//import * as STLLoader from 'three-stl-loader';
var STLLoader = __webpack_require__("../../../../three-stl-loader/index.js")(__WEBPACK_IMPORTED_MODULE_1_three__);
//declare var ColladaLoader : any;
//var ColladaLoader = require('three-collada-loader')(THREE);
//import {ColladaLoader} from "three";
///var coll_loader = new ColladaLoader();
var loader = new STLLoader();

var CanvasComponent = (function () {
    function CanvasComponent(http, robotService) {
        var _this = this;
        this.title = 'app';
        this.linkmap = new Map();
        this.jointmap = new Map();
        this.order = 'XYZ';
        this.isJoint = true;
        this.robotState = {
            name: "",
            id: 0,
            motorPos: 0,
            linkPos: 0,
            motorVel: 0,
            linkVel: 0,
            temp: 0,
            effort: 0,
            stiff: 0,
            damp: 0,
            fault: 0,
            aux: 0
        };
        this.robotSensorState = {
            name: "",
            id: 0,
            forcex: 0,
            forcey: 0,
            forcez: 0,
            torquex: 0,
            torquey: 0,
            torquez: 0,
        };
        console.log(__WEBPACK_IMPORTED_MODULE_1_three__);
        this.isModelLoaded = true;
        this.service = new __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]("/model", http);
        this.robotService = robotService;
        this.robot = new Map();
        this.robotSensor = new Map();
        this.robotService.currentmsg.subscribe(function (msg) {
            _this.robot = msg["robot"];
            _this.robotSensor = msg["sensor"];
            if (_this.robot != null) {
                var item = _this.robot.get(_this.selectJoint);
                if (item != null)
                    _this.robotState = item;
            }
            if (_this.robotSensor != null && _this.selectedObject != null) {
                var userdata = _this.selectedObject.userData;
                if (userdata != null) {
                    var sensor = userdata["name"];
                    var items = _this.robotSensor.get(sensor);
                    if (items != null)
                        _this.robotSensorState = items;
                }
            }
        });
    }
    CanvasComponent.prototype.createNodeLink = function (pos, rot_axis, angle, scale) {
        var tmp = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"]();
        tmp.position.set(pos[0], pos[1], pos[2]);
        if (rot_axis != null) {
            tmp.setRotationFromAxisAngle(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](rot_axis[0], rot_axis[1], rot_axis[2]), angle);
        }
        if (scale != null)
            tmp.scale.set(1, 1, 1);
        return tmp;
    };
    CanvasComponent.prototype.createNodeJoint = function (pos, rot_axis, angle) {
        var tmp = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
        tmp.position.set(pos[0], pos[1], pos[2]);
        if (rot_axis != null) {
            tmp.setRotationFromAxisAngle(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](rot_axis[0], rot_axis[1], rot_axis[2]), angle);
        }
        return tmp;
    };
    CanvasComponent.prototype.parseJoints = function (joints) {
        for (var _i = 0, joints_1 = joints; _i < joints_1.length; _i++) {
            var joint = joints_1[_i];
            var name = joint["Name"];
            var child = joint["Child"];
            var parent = joint["Parent"];
            var pos = joint["Pos"];
            if (pos == null)
                pos = [0, 0, 0];
            var rot = joint["Rot"];
            var axis;
            var angle;
            if (rot != null) {
                axis = rot["Axis"];
                angle = rot["Angle"];
            }
            else {
                axis = null;
                angle = null;
            }
            var raxis = joint["Axis"];
            var nodel1 = this.createNodeJoint(pos, axis, angle);
            nodel1.userData = { "axis": raxis, "name": name };
            var clink = this.linkmap.get(child);
            var plink = this.linkmap.get(parent);
            nodel1.add(clink);
            plink.add(nodel1);
            this.jointmap.set(name, nodel1);
        }
    };
    CanvasComponent.prototype.parseLinks = function (links) {
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var link = links_1[_i];
            var name = link["Name"];
            var pos = link["Pos"];
            if (pos == null)
                pos = [0, 0, 0];
            var rot = link["Rot"];
            var axis;
            var angle;
            if (rot != null) {
                axis = rot["Axis"];
                angle = rot["Angle"];
            }
            else {
                axis = null;
                angle = null;
            }
            var mesh = link["Mesh"];
            var material = link["Material"];
            var scale = link["Scale"];
            var nodel = this.createNodeLink(pos, axis, angle, scale);
            if (mesh != null)
                nodel.userData = { "mesh": mesh, "scale": scale, "load": false };
            this.linkmap.set(name, nodel);
            var sensor = link["Sensor"];
            if (sensor != null) {
                var marker = this.addSensorMarker([0, 0, 0], 0.08);
                nodel.geometry = marker.geometry;
                nodel.material = marker.material;
                nodel.userData = { "name": name };
            }
        }
    };
    CanvasComponent.prototype.getData = function () {
        var _this = this;
        this.service.get("/model")
            .subscribe(function (response) {
            var root = response["Model"];
            var joints = root["Joint"];
            var links = root["Link"];
            _this.parseLinks(links);
            _this.parseJoints(joints);
            var root_link = root["Root_Link"];
            var root_joint = root["Root_Joint"];
            var link = _this.linkmap.get(root_link);
            var joint = _this.jointmap.get(root_joint);
            link.rotation.set(-Math.PI / 2, 0, 0);
            link.add(joint);
            _this.scene.add(link);
            //load meshes
            _this.linkmap.forEach(function (value, key) {
                if (value.userData != null) {
                    var mesh = value.userData["mesh"];
                    if (mesh != null) {
                        var ext = mesh.substr(mesh.length - 3);
                        if (ext != null)
                            if (ext.toUpperCase() == "STL") {
                                mesh = mesh.substr(10);
                                mesh = "/robots/" + mesh;
                                loader.load(mesh, function (geometry, id) {
                                    if (id === void 0) { id = key; }
                                    _this.loadMesh(geometry, id);
                                });
                            }
                    }
                }
            });
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_4__common_not_foud_error__["a" /* NotFoundError */]) {
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
    CanvasComponent.prototype.ngOnInit = function () {
        this.container = this.elementRef.nativeElement;
        //console.log(this.container);
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"]();
        this.init();
        this.getData();
    };
    CanvasComponent.prototype.addVectorMarker = function () {
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x0000ff });
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 10, 0));
        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
        return line;
    };
    CanvasComponent.prototype.addSensorMarker = function (pos, size) {
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](size, size, size);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00ff00 });
        var cube = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        cube.position.set(pos[0], pos[1], pos[2]);
        return cube;
    };
    CanvasComponent.prototype.addPlot = function (id, topic, name) {
        this.robotService.addPlot(id, topic, name);
    };
    CanvasComponent.prototype.setVelRef = function (param) {
        this.vval = param;
        //this.selectedObject.rotateOnAxis(new THREE.Vector3(0,0,1),param);
        /*var userdata = this.selectedObject.parent.userData;
        if (userdata != null){
           var axis = userdata["axis"];
           //this.selectedObject.setRotationFromAxisAngle(new THREE.Vector3(axis[0],axis[1],axis[2]),param);
        }*/
        this.isModelLoaded = true;
    };
    CanvasComponent.prototype.loadMesh = function (geometry, id) {
        var material;
        //console.log("ID "+id);
        if (geometry.hasColors) {
            material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ opacity: geometry.alpha, vertexColors: __WEBPACK_IMPORTED_MODULE_1_three__["VertexColors"] });
        }
        else {
            material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xAAAAAA, specular: 0x111111, shininess: 200 });
        }
        //geometry.computeFaceNormals();
        var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        material.side = __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"];
        //THREE.EventDispatcher.call( mesh );
        //mesh.addEventListener('click', function(event) {alert("GOT THE EVENT");});
        //mesh.dispatchEvent({type:'click'});
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        var my = this.linkmap.get(id);
        my.geometry = mesh.geometry;
        var scale = my.userData["scale"];
        if (scale != null)
            my.geometry.scale(scale[0], scale[1], scale[2]);
        my.material = mesh.material;
        geometry.computeFaceNormals();
        geometry.computeVertexNormals();
        my.userData["load"] = true;
    };
    CanvasComponent.prototype.init = function () {
        var screen = {
            width: 500,
            height: 400
        }, view = {
            angle: 45,
            aspect: screen.width / screen.height,
            near: 0.1,
            far: 1000
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](view.angle, view.aspect, view.near, view.far);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0x72645b);
        this.scene.add(this.camera);
        //this.scene.add(new THREE.AxisHelper(20));
        // lights
        var light = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 0.8);
        this.camera.add(light);
        this.camera.position.set(1, 0.5, 2);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        //this.camera.up.set(0,0,1);
        this.scene.add(new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0x222222));
        this.renderer.setSize(screen.width, screen.height);
        this.container.appendChild(this.renderer.domElement);
        this.render();
    };
    CanvasComponent.prototype.checkIntersection = function (event) {
        var rect = this.renderer.domElement.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        //console.log(this.mouse.x + "" +this.mouse.y);
        if (event.which === 1)
            this.CheckIntersection();
    };
    CanvasComponent.prototype.render = function () {
        var self = this;
        (function render() {
            requestAnimationFrame(render);
            self.renderer.render(self.scene, self.camera);
        }());
    };
    CanvasComponent.prototype.CheckIntersection = function () {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children, true);
        //console.log(this.scene.children);
        if (intersects.length > 0) {
            if (this.selectedObject != null) {
                this.selectedObject.material = this.selectMaterial;
            }
            this.selectedObject = intersects[0].object;
            this.selectMaterial = this.selectedObject.material;
            this.selectedObject.material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xFFFF, specular: 0x111111, shininess: 200 });
            //console.log(this.selectedObject);
            var userdata = this.selectedObject.parent.userData;
            if (userdata != null) {
                if (this.jointmap.get(userdata["name"]) != null)
                    this.isJoint = true;
                this.selectJoint = userdata["name"];
            }
            var userdata = this.selectedObject.userData;
            if (userdata != null) {
                if (this.robotSensor.get(userdata["name"]) != null)
                    this.isJoint = false;
            }
        }
    };
    return CanvasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */]) === "function" && _a || Object)
], CanvasComponent.prototype, "elementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('document:mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CanvasComponent.prototype, "checkIntersection", null);
CanvasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-canvas',
        template: __webpack_require__("../../../../../src/app/canvas/canvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/canvas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_robot_state_service__["a" /* RobotStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_robot_state_service__["a" /* RobotStateService */]) === "function" && _c || Object])
], CanvasComponent);

var _a, _b, _c;
//# sourceMappingURL=canvas.component.js.map

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

/***/ "../../../../../src/app/plotter/plotter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plotter/plotter.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas id=\"myChart\" width=\"400\" height=\"400\"></canvas>\n<p>\n<button type=\"button\" (click)=\"clearData()\">Clear Data</button> \n<button type=\"button\" (click)=\"freeze()\">Freeze</button> \n<input [type]=\"type\" #Vel name=\"range\" step=\"0.1\" (change)=\"setScale(Vel.value)\" > \n</p>\n"

/***/ }),

/***/ "../../../../../src/app/plotter/plotter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_robot_state_service__ = __webpack_require__("../../../../../src/app/services/robot-state.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WS_URL;
var PlotterComponent = (function () {
    function PlotterComponent(robotService) {
        var _this = this;
        this.chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(201, 203, 207)'
        };
        this.robotService = robotService;
        this.isfrozen = false;
        this.samples = 500;
        this.data = {
            labels: [],
            datasets: []
        };
        this.map = new Map();
        setInterval(function () {
            if (_this.isfrozen)
                return;
            if (_this.data.labels.length > _this.samples)
                _this.data.labels.splice(0, 1);
            for (var _i = 0, _a = _this.data.datasets; _i < _a.length; _i++) {
                var d = _a[_i];
                if (d.data.length > _this.samples)
                    d.data.splice(0, 1);
            }
        }, 10);
    }
    PlotterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvas = document.getElementById('myChart');
        this.ctx = this.canvas.getContext('2d');
        this.myChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__(this.ctx, {
            type: 'line',
            data: this.data,
            options: {
                responsive: false,
                steppedLine: true,
                //cubicInterpolationMode: "",
                title: {
                    display: true,
                    text: 'Plotter'
                },
                tooltips: {
                    enabled: false,
                    mode: 'index',
                    intersect: false,
                },
                /*hover: {
                    mode: 'nearest',
                    intersect: true
                },*/
                scales: {
                    xAxes: [{
                            display: false,
                            scaleLabel: {
                                display: true,
                            }
                        }],
                    yAxes: [{
                            beginAtZero: true,
                            display: true,
                            ticks: {
                                stepSize: 0.5
                            },
                            scaleLabel: {
                                display: true,
                            }
                        }]
                }
            }
        });
        this.robotService.currentPlotAddDatamsg.subscribe(function (msg) {
            if (msg == null)
                return;
            if (_this.isfrozen)
                return;
            _this.data.labels.push(new Date().getTime());
            for (var _i = 0, msg_1 = msg; _i < msg_1.length; _i++) {
                var pdata = msg_1[_i];
                var name = pdata["name"];
                if (name == null)
                    return;
                var i = _this.map.get(name);
                var value = pdata["value"];
                value = Math.round(value * 100) / 100;
                //console.log("ACCESS TO pos "+ i +" value "+value);
                _this.addDataToDataset(_this.data.datasets[i], value);
            }
        });
        this.robotService.currentPlotAddmsg.subscribe(function (msg) {
            if (msg == null)
                return;
            var topic = msg["topic"];
            if (topic == null)
                return;
            var id = msg["id"];
            var name = msg["name"];
            _this.addDataset(name + "/" + topic);
            var i = _this.data.datasets.length - 1;
            _this.map.set(id, i);
            //console.log("ADD plot at "+ "pos "+i+" name "+name);
        });
    };
    PlotterComponent.prototype.setScale = function (val) {
        this.myChart.options.scales.yAxes[0].ticks.stepSize = val;
    };
    PlotterComponent.prototype.freeze = function () {
        this.isfrozen = !this.isfrozen;
        this.myChart.options.tooltips.enabled = this.isfrozen;
    };
    PlotterComponent.prototype.clearData = function () {
        this.data.labels = [];
        this.data.datasets = [];
        this.robotService.clearPlot();
        this.myChart.update();
    };
    PlotterComponent.prototype.addDataset = function (label) {
        var ol = Object.keys(this.chartColors);
        var colorName = ol[this.data.datasets.length % ol.length];
        var data = {
            label: label,
            backgroundColor: this.chartColors[colorName],
            borderColor: this.chartColors[colorName],
            pointStyle: 'line',
            data: [],
            fill: false
        };
        this.data.labels = [];
        for (var _i = 0, _a = this.data.datasets; _i < _a.length; _i++) {
            var d = _a[_i];
            d.data = [];
        }
        this.data.datasets.push(data);
        this.myChart.update();
    };
    PlotterComponent.prototype.addDataToDataset = function (dataset, value) {
        dataset.data.push(value);
        //console.log("label "+ dataset.label+ " "+dataset.data.length);
        this.myChart.update();
    };
    return PlotterComponent;
}());
PlotterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-plotter',
        template: __webpack_require__("../../../../../src/app/plotter/plotter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plotter/plotter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_robot_state_service__["a" /* RobotStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_robot_state_service__["a" /* RobotStateService */]) === "function" && _a || Object])
], PlotterComponent);

var _a;
//# sourceMappingURL=plotter.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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



//import { Http, RequestOptions, Headers } from '@angular/http';





var HttpService = (function () {
    function HttpService(url, http) {
        this.url = url;
        this.http = http;
    }
    HttpService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    HttpService.prototype.get = function (url) {
        return this.http.get(url);
    };
    HttpService.prototype.create = function (resource) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers});
        return this.http.post(this.url, JSON.stringify(resource)); //,options);
    };
    HttpService.prototype.post = function (url, resource) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers});
        return this.http.post(url, JSON.stringify(resource)); //,options);
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
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/robot-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobotStateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RobotStateService = (function () {
    function RobotStateService(wsService) {
        var _this = this;
        this.wsService = wsService;
        this.parsedMsg = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.currentmsg = this.parsedMsg.asObservable();
        this.plotMap = new Map();
        this.plotArray = new Array();
        this.plotAddMsg = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.currentPlotAddmsg = this.plotAddMsg.asObservable();
        this.plotAddDataMsg = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.currentPlotAddDatamsg = this.plotAddDataMsg.asObservable();
        this.robot = new Map();
        this.robotSensor = new Map();
        var ip = window.location.origin;
        ip = ip.substr(7);
        var WS_URL = "ws://" + ip + "/websocket";
        this.wsService.connect(WS_URL);
        this.wsService.messages.subscribe(function (msg) {
            _this.parseMsg(msg);
            _this.sendMsg();
        });
    }
    RobotStateService.prototype.publishMsg = function (msg) {
        this.parsedMsg.next(msg);
    };
    RobotStateService.prototype.parseMsg = function (msg) {
        var robot = msg["Robot"];
        if (robot != null) {
            var nameList = robot["joint_name"];
            var ids = robot["joint_id"];
            var motors = robot["motor_position"];
            var links = robot["link_position"];
            var motorsv = robot["motor_velocity"];
            var linksv = robot["link_velocity"];
            var temps = robot["temperature"];
            var efforts = robot["effort"];
            var stiffs = robot["stiffness"];
            var damps = robot["damping"];
            var faults = robot["fault"];
            var auxs = robot["aux"];
            for (var i = 0; i < nameList.length; i++) {
                var obj = {
                    name: nameList[i],
                    id: ids[i],
                    motorPos: motors[i],
                    linkPos: links[i],
                    motorVel: motorsv[i],
                    linkVel: linksv[i],
                    temp: temps[i],
                    effort: efforts[i],
                    stiff: stiffs[i],
                    damp: damps[i],
                    fault: faults[i],
                    aux: auxs[i]
                };
                this.robot.set(nameList[i], obj);
                var keys = Object.keys(obj);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    var topic = this.plotMap.get(ids[i] + "/" + key);
                    if (topic != null) {
                        var pobj = { "name": ids[i] + "/" + key, "value": obj[topic] };
                        this.plotArray.push(pobj);
                    }
                }
                //var plotId = ids[i] +"/"+ 
                //this.plotMap.get()
                //push to vector
                //publish out
                //this.plotAddDataMsg.next(obj);
                /*var angle = motorList[i];
                var joint = this.jointmap.get(nameList[i]);
                var userdata = joint.userData;
                if (userdata != null){
                  var axis = userdata["axis"];
                  var isloaded = joint.children[0].userData["load"];
                  if (isloaded && axis != null){
                    // console.log("SET ROT "+nameList[i]+ " axis "+ axis+ " angle "+angle);
                    //joint.setRotationFromAxisAngle(new THREE.Vector3(axis[0],axis[1],axis[2]),angle);
                    //joint.rotateOnAxis(new THREE.Vector3(axis[0],axis[1],axis[2]),angle);
                  }
                }*/
            }
        }
        var sensors = msg["Sensors"];
        if (sensors != null) {
            var nameList = sensors["ft_name"];
            var ids = sensors["ft_id"];
            var forces = sensors["force"];
            var torques = sensors["torque"];
            var forcesv = [0, 0, 0];
            var torquesv = [0, 0, 0];
            for (var i = 0; i < nameList.length; i++) {
                if (forces != null)
                    forcesv = forces[i]["Vector"];
                if (forces != null)
                    torquesv = torques[i]["Vector"];
                var objs = {
                    name: nameList[i],
                    id: ids[i],
                    forcex: forcesv[0],
                    forcey: forcesv[1],
                    forcez: forcesv[2],
                    torquex: torquesv[0],
                    torquey: torquesv[1],
                    torquez: torquesv[2]
                };
                this.robotSensor.set(nameList[i], objs);
                var keys = Object.keys(objs);
                for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
                    var key = keys_2[_a];
                    var topic = this.plotMap.get(ids[i] + "/" + key);
                    if (topic != null) {
                        var pobj = { "name": ids[i] + "/" + key, "value": objs[topic] };
                        this.plotArray.push(pobj);
                    }
                }
            }
        }
        this.publishMsg({ "robot": this.robot, "sensor": this.robotSensor });
        if (this.plotArray.length != 0) {
            this.plotAddDataMsg.next(this.plotArray);
            this.plotArray = [];
        }
    };
    RobotStateService.prototype.sendMsg = function () {
        this.wsService.messages.next({ "msg": "Send" });
    };
    RobotStateService.prototype.addPlot = function (id, topic, name) {
        if (this.plotMap.get(id + "/" + topic) != null)
            return;
        var obj = { "topic": topic, "id": id + "/" + topic, "name": name };
        this.plotMap.set(id + "/" + topic, topic);
        this.plotAddMsg.next(obj);
    };
    RobotStateService.prototype.clearPlot = function () {
        this.plotMap.clear();
        this.plotArray = [];
    };
    return RobotStateService;
}());
RobotStateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__websocket_service__["a" /* WebsocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__websocket_service__["a" /* WebsocketService */]) === "function" && _a || Object])
], RobotStateService);

var _a;
//# sourceMappingURL=robot-state.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connectInternal = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log("Successfully connected: " + url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"].create(observer, observable);
    };
    WebsocketService.prototype.connect = function (url) {
        this.messages = this
            .connectInternal(url)
            .map(function (response) {
            var data = JSON.parse(response.data);
            return data;
        });
    };
    return WebsocketService;
}());
WebsocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsocketService);

//# sourceMappingURL=websocket.service.js.map

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

module.exports = "<p>\n  slider-control  <button type=\"button\" (click)=\"onMaster()\">Set Web Master</button> \n <button type=\"button\" (click)=\"type='range'\">R</button><button type=\"button\" (click)=\"type='number'\">N</button> \n</p>\n<li *ngFor=\"let item of chains; let i=index\"> {{item.Chain}}\n  \n  {{item.Val.Name}} {{item.Val.Id}} <p>PositionRef</p><input [type]=\"type\" #Input name=\"range\" [(ngModel)]=\"chains[i].Val.PRef\" min={{item.Val.Llimit}}  max={{item.Val.Ulimit}} step=\"0.1\" (change)=\"setPosRef(Input.value)\" > {{item.Val.PRef}}\n  \n  <p>VelocityRef</p><input [type]=\"type\" #Vel name=\"range\" [(ngModel)]=\"chains[i].Val.VRef\"  step=\"0.1\" (change)=\"setVelRef(Vel.value)\" > {{item.Val.VRef}}\n  <p>EffortRef</p><input [type]=\"type\" #Eff name=\"range\" [(ngModel)]=\"chains[i].Val.ERef\" step=\"0.1\" (change)=\"setEffortRef(Eff.value)\" > {{item.Val.ERef}}\n  <p>Stiffness</p><input [type]=\"type\" #Stiff name=\"range\" [(ngModel)]=\"chains[i].Val.SVal\" min=0.0  max=10000.0  step=\"0.1\" (change)=\"setStiffRef(Stiff.value)\" > {{item.Val.SVal}}\n  <p>Damping</p><input [type]=\"type\" #Damp name=\"range\" [(ngModel)]=\"chains[i].Val.DVal\" min=0.0  max=10000.0 step=\"0.1\" (change)=\"setDampRef(Damp.value)\" > {{item.Val.DVal}}\n  <button type=\"button\" (click)=\"setPosRef(Input.value); setVelRef(Vel.value); setEffortRef(Eff.value); setStiffRef(Stiff.value); setDampRef(Damp.value); sendVal(item.Val.Id)\">SEND</button>\n</li>\n\n "

/***/ }),

/***/ "../../../../../src/app/slider-control/slider-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_not_foud_error__ = __webpack_require__("../../../../../src/app/common/not-foud-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
        this.posref = [];
        this.velref = [];
        this.effref = [];
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
                            VVal: u["Vval"], EVal: u["Eval"], SVal: u["Sval"], DVal: u["Dval"], PRef: u["pos_ref"],
                            VRef: u["vel_ref"], ERef: u["eff_ref"], Llimit: u["Llimit"], Ulimit: u["Ulimit"] } });
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
            for (var _m = 0, _o = response["pos_ref"]; _m < _o.length; _m++) {
                var o = _o[_m];
                _this.posref.push(o);
            }
            for (var _p = 0, _q = response["vel_ref"]; _p < _q.length; _p++) {
                var o = _q[_p];
                _this.velref.push(o);
            }
            for (var _r = 0, _s = response["eff_ref"]; _r < _s.length; _r++) {
                var o = _s[_r];
                _this.effref.push(o);
            }
            for (var _t = 0, _u = _this.chains; _t < _u.length; _t++) {
                var entry = _u[_t];
                for (var i in _this.jval) {
                    if (entry.Val.Id == _this.jid[i]) {
                        entry.Val.JVal = _this.jval[i];
                        entry.Val.VVal = _this.vvval[i];
                        entry.Val.EVal = _this.evval[i];
                        entry.Val.SVal = _this.svval[i];
                        entry.Val.DVal = _this.dvval[i];
                        entry.Val.PRef = _this.posref[i];
                        entry.Val.VRef = _this.velref[i];
                        entry.Val.ERef = _this.effref[i];
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map