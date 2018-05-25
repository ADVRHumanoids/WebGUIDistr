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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    XBotCore\n  </h1>\n</div>\n<app-canvas></app-canvas>\n<app-plugin-list></app-plugin-list>\n<!--<app-slider-control></app-slider-control>-->\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_app_error_handler__ = __webpack_require__("../../../../../src/app/common/app-error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plugin_list_plugin_list_component__ = __webpack_require__("../../../../../src/app/plugin-list/plugin-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_control_slider_control_component__ = __webpack_require__("../../../../../src/app/slider-control/slider-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__canvas_canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__plugin_list_plugin_list_component__["a" /* PluginListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__slider_control_slider_control_component__["a" /* SliderControlComponent */],
            __WEBPACK_IMPORTED_MODULE_10__canvas_canvas_component__["a" /* CanvasComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4__common_app_error_handler__["a" /* AppErrorHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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

module.exports = "<div #container></div>\n<div *ngIf=\"isJoint;else sensor\">\n    <li > \n        <p>ID: {{robotState.id}}  Name: {{robotState.name}}</p>\n        <p>Motor Position: {{robotState.motorPos}}  Link Position: {{robotState.linkPos}}</p>\n        <p>Motor Velocity: {{robotState.motorVel}}  Link Velocity: {{robotState.linkVel}}</p>\n        <p>Stiffness: {{robotState.stiff}}  Damping: {{robotState.damp}}</p>\n        <p>Torque: {{robotState.effort}}  Fault: {{robotState.fault}}</p>\n        <p>Temperature: {{robotState.temp}}  Aux: {{robotState.aux}}</p>\n    </li>\n</div>\n<ng-template #sensor>\n    <li > \n        <p>ID: {{robotSensorState.id}}  Name: {{robotSensorState.name}}</p>\n        <p>Force: {{robotSensorState.force}}</p>\n        <p>Torque: {{robotSensorState.torque}}</p>\n    </li>\n</ng-template>\n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_not_foud_error__ = __webpack_require__("../../../../../src/app/common/not-foud-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
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

var WS_URL;
var CanvasComponent = (function () {
    function CanvasComponent(http, wsService) {
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
            force: [0, 0, 0],
            torque: [0, 0, 0]
        };
        console.log(__WEBPACK_IMPORTED_MODULE_1_three__);
        this.isModelLoaded = true;
        var ip = window.location.origin;
        ip = ip.substr(7);
        WS_URL = "ws://" + ip + "/websocket";
        this.service = new __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]("/model", http);
        this.wsService = wsService;
        this.robot = new Map();
        this.robotSensor = new Map();
        this.wsService.connect(WS_URL);
        this.wsService.messages.subscribe(function (msg) {
            _this.parseMsg(msg);
            var item = _this.robot.get(_this.selectJoint);
            if (item != null)
                _this.robotState = item;
            if (_this.selectedObject != null) {
                var userdata = _this.selectedObject.userData;
                if (userdata != null) {
                    var sensor = userdata["name"];
                    var items = _this.robotSensor.get(sensor);
                    if (items != null)
                        _this.robotSensorState = items;
                }
            }
            _this.sendMsg();
        });
    }
    CanvasComponent.prototype.parseMsg = function (msg) {
        if (this.isModelLoaded) {
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
                    this.robot.set(nameList[i], {
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
                    });
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
                    this.robotSensor.set(nameList[i], {
                        name: nameList[i],
                        id: ids[i],
                        force: forcesv,
                        torque: torquesv
                    });
                }
            }
        }
    };
    CanvasComponent.prototype.sendMsg = function () {
        this.wsService.messages.next({ "msg": "Send" });
    };
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
                        var tmp = mesh.substr(mesh.length - 3);
                        if (tmp.toUpperCase() == "STL") {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], CanvasComponent.prototype, "elementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('document:mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CanvasComponent.prototype, "checkIntersection", null);
CanvasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-canvas',
        template: __webpack_require__("../../../../../src/app/canvas/canvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/canvas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_websocket_service__["a" /* WebsocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_websocket_service__["a" /* WebsocketService */]) === "function" && _c || Object])
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_7" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_7" /* Component */])({
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