(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./node_modules/@agm/core/core.module.js":
/*!***********************************************!*\
  !*** ./node_modules/@agm/core/core.module.js ***!
  \***********************************************/
/*! exports provided: coreDirectives, AgmCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectives", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _agm_core_directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core/directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
















/**
 * @internal
 */
function coreDirectives() {
    return [
        _directives_map__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _directives_marker__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"], _directives_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"], _directives_circle__WEBPACK_IMPORTED_MODULE_2__["AgmCircle"], _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__["AgmRectangle"],
        _directives_polygon__WEBPACK_IMPORTED_MODULE_6__["AgmPolygon"], _directives_polyline__WEBPACK_IMPORTED_MODULE_7__["AgmPolyline"], _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__["AgmPolylinePoint"], _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__["AgmKmlLayer"],
        _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__["AgmDataLayer"], _agm_core_directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__["AgmFitBounds"]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = /** @class */ (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    /**
       * Please use this method when you register the module at the root level.
       */
    AgmCoreModule.forRoot = /**
       * Please use this method when you register the module at the root level.
       */
    function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__["BROWSER_GLOBALS_PROVIDERS"].concat([
                { provide: _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], useClass: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LazyMapsAPILoader"] },
                { provide: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LAZY_MAPS_API_CONFIG"], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    AgmCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
    ];
    return AgmCoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives.js":
/*!**********************************************!*\
  !*** ./node_modules/@agm/core/directives.js ***!
  \**********************************************/
/*! exports provided: AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives_map__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives_circle__WEBPACK_IMPORTED_MODULE_1__["AgmCircle"]; });

/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__["AgmRectangle"]; });

/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives_info_window__WEBPACK_IMPORTED_MODULE_3__["AgmInfoWindow"]; });

/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__["AgmKmlLayer"]; });

/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__["AgmDataLayer"]; });

/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives_marker__WEBPACK_IMPORTED_MODULE_6__["AgmMarker"]; });

/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives_polygon__WEBPACK_IMPORTED_MODULE_7__["AgmPolygon"]; });

/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives_polyline__WEBPACK_IMPORTED_MODULE_8__["AgmPolyline"]; });

/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives_polyline_point__WEBPACK_IMPORTED_MODULE_9__["AgmPolylinePoint"]; });

/* harmony import */ var _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["AgmFitBounds"]; });












//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/circle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/circle.js ***!
  \*****************************************************/
/*! exports provided: AgmCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");


var AgmCircle = /** @class */ (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Circle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this circle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this circle by dragging the control points shown at
           * the center and around the circumference of the circle. Defaults to false.
           */
        this.editable = false;
        /**
           * The radius in meters on the Earth's surface.
           */
        this.radius = 0;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this circle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the circle's center is changed.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the circle.
           */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the circle.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the circle.
           */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the circle.
           */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the circle.
           */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on circle mouseout.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on circle mouseover.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the circle.
           */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the circle's radius is changed.
           */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the circle is right-clicked on.
           */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    /**
       * Gets the LatLngBounds of this Circle.
       */
    AgmCircle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Circle.
       */
    function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    AgmCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex', 'clickable'
    ];
    AgmCircle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-circle'
                },] },
    ];
    /** @nocollapse */
    AgmCircle.ctorParameters = function () { return [
        { type: _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"], },
    ]; };
    AgmCircle.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['circleDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "drag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "radiusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmCircle;
}());

//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/data-layer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/data-layer.js ***!
  \*********************************************************/
/*! exports provided: AgmDataLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = /** @class */ (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * The geoJson to be displayed
           */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.toString = /** @internal */
    function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = /** @internal */
    function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    AgmDataLayer._dataOptionsAttributes = ['style'];
    AgmDataLayer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-data-layer'
                },] },
    ];
    /** @nocollapse */
    AgmDataLayer.ctorParameters = function () { return [
        { type: _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"], },
    ]; };
    AgmDataLayer.propDecorators = {
        "layerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "geoJson": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AgmDataLayer;
}());

//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/fit-bounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/fit-bounds.js ***!
  \*********************************************************/
/*! exports provided: AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
var AgmFitBounds = /** @class */ (function () {
    function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
           * If the value is true, the element gets added to the bounds of the map.
           * Default: true.
           */
        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnChanges = /**
       * @internal
       */
    function (changes) {
        this._updateBounds();
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnInit = /**
       * @internal
       */
    function () {
        var _this = this;
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lng;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
            .subscribe(function (details) { return _this._updateBounds(details); });
    };
    AgmFitBounds.prototype._updateBounds = function (newFitBoundsDetails) {
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
        else {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnDestroy = /**
       * @internal
       */
    function () {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    AgmFitBounds.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[agmFitBounds]'
                },] },
    ];
    /** @nocollapse */
    AgmFitBounds.ctorParameters = function () { return [
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] },] },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsService"], },
    ]; };
    AgmFitBounds.propDecorators = {
        "agmFitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AgmFitBounds;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.js ***!
  \**********************************************************/
/*! exports provided: AgmInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */
        this.isOpen = false;
        /**
           * Emits an event when the info window is closed.
           */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    /**
       * Opens the info window.
       */
    AgmInfoWindow.prototype.open = /**
       * Opens the info window.
       */
    function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    /**
       * Closes the info window.
       */
    AgmInfoWindow.prototype.close = /**
       * Closes the info window.
       */
    function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.toString = /** @internal */
    function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = /** @internal */
    function () { this._infoWindowManager.deleteInfoWindow(this); };
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    AgmInfoWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-info-window',
                    template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmInfoWindow.ctorParameters = function () { return [
        { type: _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    AgmInfoWindow.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableAutoPan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "infoWindowClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmInfoWindow;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/kml-layer.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/kml-layer.js ***!
  \********************************************************/
/*! exports provided: AgmKmlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");


var layerId = 0;
var AgmKmlLayer = /** @class */ (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * If true, the layer receives mouse events. Default value is true.
           */
        this.clickable = true;
        /**
           * By default, the input map is centered and zoomed to the bounding box of the contents of the
           * layer.
           * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
           * were never set.
           */
        this.preserveViewport = false;
        /**
           * Whether to render the screen overlays. Default true.
           */
        this.screenOverlays = true;
        /**
           * Suppress the rendering of info windows when layer features are clicked.
           */
        this.suppressInfoWindows = false;
        /**
           * The URL of the KML document to display.
           */
        this.url = null;
        /**
           * The z-index of the layer.
           */
        this.zIndex = null;
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the KML layers default viewport has changed.
           */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the KML layer has finished loading.
           * At this point it is safe to read the status property to determine if the layer loaded
           * successfully.
           */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.toString = /** @internal */
    function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
    AgmKmlLayer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-kml-layer'
                },] },
    ];
    /** @nocollapse */
    AgmKmlLayer.ctorParameters = function () { return [
        { type: _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"], },
    ]; };
    AgmKmlLayer.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "preserveViewport": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "screenOverlays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "suppressInfoWindows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "url": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "layerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "defaultViewportChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "statusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmKmlLayer;
}());

//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && google && google.maps) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                        _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                        _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/marker.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/marker.js ***!
  \*****************************************************/
/*! exports provided: AgmMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-window */ "./node_modules/@agm/core/directives/info-window.js");





var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = /** @class */ (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
           * If true, the marker can be dragged. Default value is false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If true, the marker is visible
           */
        this.visible = true;
        /**
           * Whether to automatically open the child info window when the marker is clicked.
           */
        this.openInfoWindow = true;
        /**
           * The marker's opacity between 0.0 and 1.0.
           */
        this.opacity = 1;
        /**
           * All markers are displayed on the map in order of their zIndex, with higher values displaying in
           * front of markers with lower values. By default, markers are displayed according to their
           * vertical position on screen, with lower markers appearing in front of markers further up the
           * screen.
           */
        this.zIndex = 1;
        /**
           * If true, the marker can be clicked. Default value is true.
           */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
           * This event emitter gets emitted when the user clicks on the marker.
           */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user rightclicks on the marker.
           */
        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the marker.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user mouses over the marker.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user mouses outside the marker.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * @internal
           */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = /* @internal */
    function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmMarker.prototype.getFitBoundsDetails$ = /**
       * @internal
       */
    function () {
        return this._fitBoundsDetails$.asObservable();
    };
    AgmMarker.prototype._updateFitBoundsDetails = function () {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(_this);
        });
        this._observableSubscriptions.push(cs);
        var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.toString = /** @internal */
    function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = /** @internal */
    function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmMarker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-marker',
                    providers: [
                        { provide: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__["FitBoundsAccessor"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AgmMarker; }) }
                    ],
                    inputs: [
                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                        'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'
                    ],
                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
                },] },
    ];
    /** @nocollapse */
    AgmMarker.ctorParameters = function () { return [
        { type: _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    AgmMarker.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerDraggable',] },],
        "iconUrl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openInfoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "opacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerClickable',] },],
        "markerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "markerRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "infoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"],] },],
    };
    return AgmMarker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polygon.js":
/*!******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polygon.js ***!
  \******************************************************/
/*! exports provided: AgmPolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = /** @class */ (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
           * Indicates whether this Polygon handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic
           * property defines the mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control
           * points shown at the vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will
           * follow the curvature of the Earth. When false, edges of the polygon are
           * rendered as straight lines in screen space. Note that the shape of a
           * geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * The ordered sequence of coordinates that designates a closed loop.
           * Unlike polylines, a polygon may consist of one or more paths.
           *  As a result, the paths property may specify one or more arrays of
           * LatLng coordinates. Paths are closed automatically; do not repeat the
           * first vertex of the path as the last vertex. Simple polygons may be
           * defined using a single array of LatLngs. More complex polygons may
           * specify an array of arrays. Any simple arrays are converted into Arrays.
           * Inserting or removing LatLngs from the Array will automatically update
           * the polygon on the map.
           */
        this.paths = [];
        /**
           * This event is fired when the DOM click event is fired on the Polygon.
           */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polygon.
           */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polygon.
           */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polygon.
           */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polygon.
           */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polygon.
           */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polygon.
           */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseout.
           */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseover.
           */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polygon
           */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This even is fired when the Polygon is right-clicked on.
           */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = /** @internal */
    function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolygon._polygonOptionsAttributes = [
        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
        'editable', 'visible'
    ];
    AgmPolygon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-polygon'
                },] },
    ];
    /** @nocollapse */
    AgmPolygon.ctorParameters = function () { return [
        { type: _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"], },
    ]; };
    AgmPolygon.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polyDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "paths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "polyClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmPolygon;
}());

//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline-point.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline-point.js ***!
  \*************************************************************/
/*! exports provided: AgmPolylinePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = /** @class */ (function () {
    function AgmPolylinePoint() {
        /**
           * This event emitter gets emitted when the position of the point changed.
           */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    AgmPolylinePoint.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'agm-polyline-point' },] },
    ];
    /** @nocollapse */
    AgmPolylinePoint.ctorParameters = function () { return []; };
    AgmPolylinePoint.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "positionChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmPolylinePoint;
}());

//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline.js ***!
  \*******************************************************/
/*! exports provided: AgmPolyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _polyline_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = /** @class */ (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
           * Indicates whether this Polyline handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic property defines the
           * mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control points shown at the
           * vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
           * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
           * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * Whether this polyline is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the DOM click event is fired on the Polyline.
           */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polyline.
           */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polyline.
           */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polyline.
           */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polyline.
           */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polyline.
           */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polyline.
           */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseout.
           */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseover.
           */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polyline
           */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This even is fired when the Polyline is right-clicked on.
           */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = /** @internal */
    function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype._getPoints = /** @internal */
    function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    AgmPolyline.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-polyline'
                },] },
    ];
    /** @nocollapse */
    AgmPolyline.ctorParameters = function () { return [
        { type: _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"], },
    ]; };
    AgmPolyline.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polylineDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lineClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "points": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_polyline_point__WEBPACK_IMPORTED_MODULE_2__["AgmPolylinePoint"],] },],
    };
    return AgmPolyline;
}());

//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/rectangle.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/rectangle.js ***!
  \********************************************************/
/*! exports provided: AgmRectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");


var AgmRectangle = /** @class */ (function () {
    function AgmRectangle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Rectangle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this rectangle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this rectangle by dragging the control points shown at
           * the center and around the circumference of the rectangle. Defaults to false.
           */
        this.editable = false;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this rectangle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the rectangle's is changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the rectangle.
           */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the rectangle.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the rectangle.
           */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the rectangle.
           */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the rectangle.
           */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseout.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseover.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the rectangle.
           */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the rectangle is right-clicked on.
           */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        this._updateRectangleOptionsChanges(changes);
    };
    AgmRectangle.prototype._updateRectangleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmRectangle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmRectangle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager
                .createEventObservable(eventName, _this)
                .subscribe(function (value) {
                switch (eventName) {
                    case 'bounds_changed':
                        _this._manager.getBounds(_this).then(function (bounds) {
                            return eventEmitter.emit({
                                north: bounds.getNorthEast().lat(),
                                east: bounds.getNorthEast().lng(),
                                south: bounds.getSouthWest().lat(),
                                west: bounds.getSouthWest().lng()
                            });
                        });
                        break;
                    default:
                        eventEmitter.emit({
                            coords: { lat: value.latLng.lat(), lng: value.latLng.lng() }
                        });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
        });
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    };
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    /**
       * Gets the LatLngBounds of this Rectangle.
       */
    AgmRectangle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Rectangle.
       */
    function () {
        return this._manager.getBounds(this);
    };
    AgmRectangle._mapOptions = [
        'fillColor',
        'fillOpacity',
        'strokeColor',
        'strokeOpacity',
        'strokePosition',
        'strokeWeight',
        'visible',
        'zIndex',
        'clickable'
    ];
    AgmRectangle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-rectangle'
                },] },
    ];
    /** @nocollapse */
    AgmRectangle.ctorParameters = function () { return [
        { type: _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"], },
    ]; };
    AgmRectangle.propDecorators = {
        "north": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "east": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "south": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "west": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['rectangleDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "drag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmRectangle;
}());

//# sourceMappingURL=rectangle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/index.js":
/*!*****************************************!*\
  !*** ./node_modules/@agm/core/index.js ***!
  \*****************************************/
/*! exports provided: AgmCoreModule, AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds, GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/@agm/core/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmCircle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmRectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmInfoWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmKmlLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmDataLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolyline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolylinePoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmFitBounds"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./node_modules/@agm/core/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MarkerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LazyMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["NoOpMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.module */ "./node_modules/@agm/core/core.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services.js":
/*!********************************************!*\
  !*** ./node_modules/@agm/core/services.js ***!
  \********************************************/
/*! exports provided: GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsAPIWrapper"]; });

/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__["RectangleManager"]; });

/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__["InfoWindowManager"]; });

/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"]; });

/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__["PolygonManager"]; });

/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__["PolylineManager"]; });

/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__["KmlLayerManager"]; });

/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__["DataLayerManager"]; });

/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LazyMapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/noop-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["NoOpMapsAPILoader"]; });

/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__["FitBoundsAccessor"]; });














//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = /** @class */ (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this.callbackName = "agmLazyMapsAPILoader";
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
        var _this = this;
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                resolve();
            };
            scriptElem.onerror = function (error) {
                reject(error);
            };
        });
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LazyMapsAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_MAPS_API_CONFIG,] },] },
        { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["WindowRef"], },
        { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["DocumentRef"], },
    ]; };
    return LazyMapsAPILoader;
}(_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]));

//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: NoOpMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var /**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
NoOpMapsAPILoader = /** @class */ (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/utils/browser-globals.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/utils/browser-globals.js ***!
  \*********************************************************/
/*! exports provided: WindowRef, DocumentRef, BROWSER_GLOBALS_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRef", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_GLOBALS_PROVIDERS", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/leaflet/dist/leaflet.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/leaflet/dist/leaflet.css ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer {\r\n\tmax-width: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\r\n\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n\r\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n\r\n.leaflet-overlay-pane { z-index: 400; }\r\n\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n\r\n.leaflet-marker-pane  { z-index: 600; }\r\n\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\ttransition: opacity 0.2s linear;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\ttransition:         -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\ttransition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\t}\r\n\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n/* general typography */\r\n\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers.png');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers-2x.png');\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url('marker-icon.png');\r\n\t}\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n/* Tooltip */\r\n\r\n/* Base styles for the element that has a tooltip */\r\n\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9sZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9COztBQUVwQjs7Ozs7Ozs7OztDQVVDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOOztBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNEOzs7Q0FHQyx5QkFBeUI7SUFDdEIsc0JBQXNCO1NBQ2pCLHFCQUFpQjtLQUFqQixpQkFBaUI7R0FDdkIsdUJBQXVCO0NBQ3pCOztBQUNELG1GQUFtRjs7QUFDbkY7Q0FDQywwQ0FBMEM7Q0FDMUM7O0FBQ0QscUVBQXFFOztBQUNyRTtDQUNDLGFBQWE7Q0FDYixjQUFjO0NBQ2QsNkJBQTZCO0NBQzdCOztBQUNEOztDQUVDLGNBQWM7Q0FDZDs7QUFDRCxnR0FBZ0c7O0FBQ2hHLHFGQUFxRjs7QUFDckY7Ozs7O0NBS0MsMEJBQTBCO0NBQzFCOztBQUVEO0NBRUMseUJBQXlCO0NBQ3pCOztBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCOztBQUNEO0NBRUMsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msd0NBQXdDO0FBQ3pDOztBQUNBO0NBQ0Msb0RBQW9EO0FBQ3JEOztBQUNBO0NBQ0MsdUJBQWU7U0FBZixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsbUJBQW1CO0NBQ25COztBQUNEO0NBQ0MsUUFBUTtDQUNSLFNBQVM7Q0FFSixzQkFBc0I7Q0FDM0IsWUFBWTtDQUNaOztBQUNELHVFQUF1RTs7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7O0FBRUQsd0JBQXdCLFlBQVksRUFBRTs7QUFFdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsMEJBQTBCLFlBQVksRUFBRTs7QUFDeEMsd0JBQXdCLFlBQVksRUFBRTs7QUFFdEMsMkJBQTJCLFlBQVksRUFBRTs7QUFDekMsMkJBQTJCLFlBQVksRUFBRTs7QUFFekM7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYOztBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEI7O0FBR0Qsd0JBQXdCOztBQUV4QjtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osOEJBQThCLEVBQUUsOEJBQThCO0NBQzlELG9CQUFvQjtDQUNwQjs7QUFDRDs7Q0FFQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQjs7QUFDRDtDQUNDLE1BQU07Q0FDTjs7QUFDRDtDQUNDLFFBQVE7Q0FDUjs7QUFDRDtDQUNDLFNBQVM7Q0FDVDs7QUFDRDtDQUNDLE9BQU87Q0FDUDs7QUFDRDtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1g7O0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7O0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEI7O0FBR0QsNkJBQTZCOztBQUU3QjtDQUNDLG9CQUFvQjtDQUNwQjs7QUFDRDtDQUNDLFVBQVU7Q0FJRiwrQkFBK0I7Q0FDdkM7O0FBQ0Q7Q0FDQyxVQUFVO0NBQ1Y7O0FBQ0Q7Q0FDQyw2QkFBNkI7U0FFckIscUJBQXFCO0NBQzdCOztBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCOztBQUNEO0NBSVMsb0VBQTREO0NBQTVELDREQUE0RDtDQUE1RCw4R0FBNEQ7Q0FDcEU7O0FBQ0Q7O0NBS1MsZ0JBQWdCO0NBQ3hCOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCOztBQUdELFlBQVk7O0FBRVo7Q0FDQyxlQUFlO0NBQ2Y7O0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCOztBQUNEOztDQUVDLGlCQUFpQjtDQUNqQjs7QUFDRDs7Q0FFQyxZQUFZO0NBQ1o7O0FBQ0Q7OztDQUdDLFlBQVk7Q0FDWix3QkFBd0I7Q0FDeEIsd0JBQXdCO0NBQ3hCOztBQUVELG9DQUFvQzs7QUFDcEM7Ozs7O0NBS0Msb0JBQW9CO0NBQ3BCOztBQUVEOzs7Q0FHQyw4QkFBOEIsRUFBRSw4QkFBOEI7Q0FDOUQsb0JBQW9CO0NBQ3BCOztBQUVELGtCQUFrQjs7QUFFbEI7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWOztBQUNEO0NBQ0MsY0FBYztDQUNkOztBQUNEO0NBQ0MseUJBQXlCO0NBQ3pCOztBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlDQUFpQztDQUNqQzs7QUFHRCx1QkFBdUI7O0FBQ3ZCO0NBQ0MsNkRBQTZEO0NBQzdEOztBQUdELDJCQUEyQjs7QUFFM0I7Q0FDQyxzQ0FBc0M7Q0FDdEMsa0JBQWtCO0NBQ2xCOztBQUNEOztDQUVDLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaOztBQUNEOztDQUVDLDRCQUE0QjtDQUM1Qiw0QkFBNEI7Q0FDNUIsY0FBYztDQUNkOztBQUNEO0NBQ0MseUJBQXlCO0NBQ3pCOztBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1Qjs7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QiwrQkFBK0I7Q0FDL0IsbUJBQW1CO0NBQ25COztBQUNEO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjs7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUI7O0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUIsK0JBQStCO0NBQy9COztBQUVELGlCQUFpQjs7QUFFakI7O0NBRUMsbURBQW1EO0NBQ25ELGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFHRCxtQkFBbUI7O0FBRW5CO0NBQ0MscUNBQXFDO0NBQ3JDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEI7O0FBQ0Q7Q0FDQyxtQ0FBd0M7Q0FDeEMsV0FBVztDQUNYLFlBQVk7Q0FDWjs7QUFDRDtDQUNDLHNDQUEyQztDQUMzQywwQkFBMEI7Q0FDMUI7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaOztBQUNEOztDQUVDLGFBQWE7Q0FDYjs7QUFDRDtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEI7O0FBQ0Q7Q0FDQyx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1I7O0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7O0FBQ0Q7Q0FDQyxTQUFTO0NBQ1QsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFFRCxzQkFBc0I7O0FBQ3RCO0NBQ0Msd0NBQTZDO0NBQzdDOztBQUdELG1DQUFtQzs7QUFFbkM7Q0FDQyxnQkFBZ0I7Q0FDaEIsb0NBQW9DO0NBQ3BDLFNBQVM7Q0FDVDs7QUFDRDs7Q0FFQyxjQUFjO0NBQ2QsV0FBVztDQUNYOztBQUNEO0NBQ0MscUJBQXFCO0NBQ3JCOztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCOztBQUNEOztDQUVDLGVBQWU7Q0FDZjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjs7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUVYLHNCQUFzQjs7Q0FFM0IsZ0JBQWdCO0NBQ2hCLG9DQUFvQztDQUNwQzs7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCOztBQUVEOzs7Q0FHQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7O0NBRUMsaUNBQWlDO0NBQ2pDLDRCQUE0QjtDQUM1Qjs7QUFHRCxVQUFVOztBQUVWO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQjs7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEI7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7O0NBRVosb0JBQW9COztDQUVwQixnQ0FBZ0M7U0FJeEIsd0JBQXdCO0NBQ2hDOztBQUNEOztDQUVDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsc0NBQXNDO0NBQ3RDOztBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixRQUFRO0NBQ1Isb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWiwyQ0FBMkM7Q0FDM0MsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCOztBQUNEO0NBQ0MsV0FBVztDQUNYOztBQUNEO0NBQ0MsY0FBYztDQUNkLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyxPQUFPO0NBQ1A7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsY0FBYzs7Q0FFZCx1SEFBdUg7Q0FDdkgsaUhBQWlIO0NBQ2pIOztBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEOzs7O0NBSUMsc0JBQXNCO0NBQ3RCOztBQUdELGFBQWE7O0FBRWI7Q0FDQyxnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCOztBQUdELFlBQVk7O0FBQ1osbURBQW1EOztBQUNuRDtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQzs7QUFDRDtDQUNDLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEI7O0FBQ0Q7Ozs7Q0FJQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsV0FBVztDQUNYOztBQUVELGVBQWU7O0FBRWY7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBOztDQUVDLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQyxTQUFTO0NBQ1Qsb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0Qjs7QUFDRDtDQUNDLE1BQU07Q0FDTixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTs7Q0FFQyxRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsUUFBUTtDQUNSLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkI7O0FBQ0Q7Q0FDQyxPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QiIsImZpbGUiOiJub2RlX21vZHVsZXMvbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcmVxdWlyZWQgc3R5bGVzICovXHJcblxyXG4ubGVhZmxldC1wYW5lLFxyXG4ubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyxcclxuLmxlYWZsZXQtdGlsZS1jb250YWluZXIsXHJcbi5sZWFmbGV0LXBhbmUgPiBzdmcsXHJcbi5sZWFmbGV0LXBhbmUgPiBjYW52YXMsXHJcbi5sZWFmbGV0LXpvb20tYm94LFxyXG4ubGVhZmxldC1pbWFnZS1sYXllcixcclxuLmxlYWZsZXQtbGF5ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcbi5sZWFmbGV0LXRpbGUsXHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93IHtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG5cdH1cclxuLyogU2FmYXJpIHJlbmRlcnMgbm9uLXJldGluYSB0aWxlIG9uIHJldGluYSBiZXR0ZXIgd2l0aCB0aGlzLCBidXQgQ2hyb21lIGlzIHdvcnNlICovXHJcbi5sZWFmbGV0LXNhZmFyaSAubGVhZmxldC10aWxlIHtcclxuXHRpbWFnZS1yZW5kZXJpbmc6IC13ZWJraXQtb3B0aW1pemUtY29udHJhc3Q7XHJcblx0fVxyXG4vKiBoYWNrIHRoYXQgcHJldmVudHMgaHcgbGF5ZXJzIFwic3RyZXRjaGluZ1wiIHdoZW4gbG9hZGluZyBuZXcgdGlsZXMgKi9cclxuLmxlYWZsZXQtc2FmYXJpIC5sZWFmbGV0LXRpbGUtY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTYwMHB4O1xyXG5cdGhlaWdodDogMTYwMHB4O1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG5cdH1cclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3cge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuLyogLmxlYWZsZXQtY29udGFpbmVyIHN2ZzogcmVzZXQgc3ZnIG1heC13aWR0aCBkZWNsZXJhdGlvbiBzaGlwcGVkIGluIEpvb21sYSEgKGpvb21sYS5vcmcpIDMueCAqL1xyXG4vKiAubGVhZmxldC1jb250YWluZXIgaW1nOiBtYXAgaXMgYnJva2VuIGluIEZGIGlmIHlvdSBoYXZlIG1heC13aWR0aDogMTAwJSBvbiB0aWxlcyAqL1xyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHN2ZyxcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LW1hcmtlci1wYW5lIGltZyxcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LXNoYWRvdy1wYW5lIGltZyxcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LXRpbGUtcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciBpbWcubGVhZmxldC1pbWFnZS1sYXllciB7XHJcblx0bWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XHJcblx0dG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lci5sZWFmbGV0LXRvdWNoLWRyYWcge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIubGVhZmxldC10b3VjaC1kcmFnLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHR0b3VjaC1hY3Rpb246IG5vbmU7XHJcbn1cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoNTEsIDE4MSwgMjI5LCAwLjQpO1xyXG59XHJcbi5sZWFmbGV0LXRpbGUge1xyXG5cdGZpbHRlcjogaW5oZXJpdDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLWxvYWRlZCB7XHJcblx0dmlzaWJpbGl0eTogaW5oZXJpdDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYm94IHtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR6LWluZGV4OiA4MDA7XHJcblx0fVxyXG4vKiB3b3JrYXJvdW5kIGZvciBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODgzMTkgKi9cclxuLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHN2ZyB7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1wYW5lICAgICAgICAgeyB6LWluZGV4OiA0MDA7IH1cclxuXHJcbi5sZWFmbGV0LXRpbGUtcGFuZSAgICB7IHotaW5kZXg6IDIwMDsgfVxyXG4ubGVhZmxldC1vdmVybGF5LXBhbmUgeyB6LWluZGV4OiA0MDA7IH1cclxuLmxlYWZsZXQtc2hhZG93LXBhbmUgIHsgei1pbmRleDogNTAwOyB9XHJcbi5sZWFmbGV0LW1hcmtlci1wYW5lICB7IHotaW5kZXg6IDYwMDsgfVxyXG4ubGVhZmxldC10b29sdGlwLXBhbmUgICB7IHotaW5kZXg6IDY1MDsgfVxyXG4ubGVhZmxldC1wb3B1cC1wYW5lICAgeyB6LWluZGV4OiA3MDA7IH1cclxuXHJcbi5sZWFmbGV0LW1hcC1wYW5lIGNhbnZhcyB7IHotaW5kZXg6IDEwMDsgfVxyXG4ubGVhZmxldC1tYXAtcGFuZSBzdmcgICAgeyB6LWluZGV4OiAyMDA7IH1cclxuXHJcbi5sZWFmbGV0LXZtbC1zaGFwZSB7XHJcblx0d2lkdGg6IDFweDtcclxuXHRoZWlnaHQ6IDFweDtcclxuXHR9XHJcbi5sdm1sIHtcclxuXHRiZWhhdmlvcjogdXJsKCNkZWZhdWx0I1ZNTCk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR9XHJcblxyXG5cclxuLyogY29udHJvbCBwb3NpdGlvbmluZyAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDgwMDtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCxcclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTAwMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCB7XHJcblx0dG9wOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRib3R0b206IDA7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IHtcclxuXHRsZWZ0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG4ubGVhZmxldC1yaWdodCAubGVhZmxldC1jb250cm9sIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0fVxyXG4ubGVhZmxldC10b3AgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJpZ2h0IC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHR9XHJcblxyXG5cclxuLyogem9vbSBhbmQgZmFkZSBhbmltYXRpb25zICovXHJcblxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtdGlsZSB7XHJcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHQgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdH1cclxuLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LW1hcC1wYW5lIC5sZWFmbGV0LXBvcHVwIHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0ICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0ICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7XHJcblx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246ICAgIC1tb3otdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHQgICAgIC1vLXRyYW5zaXRpb246ICAgICAgLW8tdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHQgICAgICAgIHRyYW5zaXRpb246ICAgICAgICAgdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1wYW4tYW5pbSAubGVhZmxldC10aWxlIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcblx0ICAgLW1vei10cmFuc2l0aW9uOiBub25lO1xyXG5cdCAgICAgLW8tdHJhbnNpdGlvbjogbm9uZTtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20taGlkZSB7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHJcblxyXG4vKiBjdXJzb3JzICovXHJcblxyXG4ubGVhZmxldC1pbnRlcmFjdGl2ZSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuLmxlYWZsZXQtZ3JhYiB7XHJcblx0Y3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcblx0Y3Vyc29yOiAgICAtbW96LWdyYWI7XHJcblx0fVxyXG4ubGVhZmxldC1jcm9zc2hhaXIsXHJcbi5sZWFmbGV0LWNyb3NzaGFpciAubGVhZmxldC1pbnRlcmFjdGl2ZSB7XHJcblx0Y3Vyc29yOiBjcm9zc2hhaXI7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1wYW5lLFxyXG4ubGVhZmxldC1jb250cm9sIHtcclxuXHRjdXJzb3I6IGF1dG87XHJcblx0fVxyXG4ubGVhZmxldC1kcmFnZ2luZyAubGVhZmxldC1ncmFiLFxyXG4ubGVhZmxldC1kcmFnZ2luZyAubGVhZmxldC1ncmFiIC5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1kcmFnZ2luZyAubGVhZmxldC1tYXJrZXItZHJhZ2dhYmxlIHtcclxuXHRjdXJzb3I6IG1vdmU7XHJcblx0Y3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG5cdGN1cnNvcjogICAgLW1vei1ncmFiYmluZztcclxuXHR9XHJcblxyXG4vKiBtYXJrZXIgJiBvdmVybGF5cyBpbnRlcmFjdGl2aXR5ICovXHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93LFxyXG4ubGVhZmxldC1pbWFnZS1sYXllcixcclxuLmxlYWZsZXQtcGFuZSA+IHN2ZyBwYXRoLFxyXG4ubGVhZmxldC10aWxlLWNvbnRhaW5lciB7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtbWFya2VyLWljb24ubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtaW1hZ2UtbGF5ZXIubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtcGFuZSA+IHN2ZyBwYXRoLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlUGFpbnRlZDsgLyogSUUgOS0xMCBkb2Vzbid0IGhhdmUgYXV0byAqL1xyXG5cdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cdH1cclxuXHJcbi8qIHZpc3VhbCB0d2Vha3MgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZDogI2RkZDtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEge1xyXG5cdGNvbG9yOiAjMDA3OEE4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEubGVhZmxldC1hY3RpdmUge1xyXG5cdG91dGxpbmU6IDJweCBzb2xpZCBvcmFuZ2U7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWJveCB7XHJcblx0Ym9yZGVyOiAycHggZG90dGVkICMzOGY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG5cdH1cclxuXHJcblxyXG4vKiBnZW5lcmFsIHR5cG9ncmFwaHkgKi9cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHRmb250OiAxMnB4LzEuNSBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cclxuXHJcbi8qIGdlbmVyYWwgdG9vbGJhciBzdHlsZXMgKi9cclxuXHJcbi5sZWFmbGV0LWJhciB7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsMC42NSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGEsXHJcbi5sZWFmbGV0LWJhciBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cdHdpZHRoOiAyNnB4O1xyXG5cdGhlaWdodDogMjZweDtcclxuXHRsaW5lLWhlaWdodDogMjZweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhLFxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGE6Zmlyc3QtY2hpbGQge1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGE6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhLmxlYWZsZXQtZGlzYWJsZWQge1xyXG5cdGN1cnNvcjogZGVmYXVsdDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG5cdGNvbG9yOiAjYmJiO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciBhIHtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIgYTpmaXJzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIgYTpsYXN0LWNoaWxkIHtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcclxuXHR9XHJcblxyXG4vKiB6b29tIGNvbnRyb2wgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRyb2wtem9vbS1pbixcclxuLmxlYWZsZXQtY29udHJvbC16b29tLW91dCB7XHJcblx0Zm9udDogYm9sZCAxOHB4ICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG5cdHRleHQtaW5kZW50OiAxcHg7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC16b29tLWluLCAubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLXpvb20tb3V0ICB7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdH1cclxuXHJcblxyXG4vKiBsYXllcnMgY29udHJvbCAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbGF5ZXJzLnBuZyk7XHJcblx0d2lkdGg6IDM2cHg7XHJcblx0aGVpZ2h0OiAzNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtcmV0aW5hIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9sYXllcnMtMngucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDI2cHggMjZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0d2lkdGg6IDQ0cHg7XHJcblx0aGVpZ2h0OiA0NHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMgLmxlYWZsZXQtY29udHJvbC1sYXllcnMtbGlzdCxcclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtZXhwYW5kZWQgLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtZXhwYW5kZWQgLmxlYWZsZXQtY29udHJvbC1sYXllcnMtbGlzdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtZXhwYW5kZWQge1xyXG5cdHBhZGRpbmc6IDZweCAxMHB4IDZweCA2cHg7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXNjcm9sbGJhciB7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zZWxlY3RvciB7XHJcblx0bWFyZ2luLXRvcDogMnB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDFweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIGxhYmVsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXNlcGFyYXRvciB7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG5cdG1hcmdpbjogNXB4IC0xMHB4IDVweCAtNnB4O1xyXG5cdH1cclxuXHJcbi8qIERlZmF1bHQgaWNvbiBVUkxzICovXHJcbi5sZWFmbGV0LWRlZmF1bHQtaWNvbi1wYXRoIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL21hcmtlci1pY29uLnBuZyk7XHJcblx0fVxyXG5cclxuXHJcbi8qIGF0dHJpYnV0aW9uIGFuZCBzY2FsZSBjb250cm9scyAqL1xyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24ge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG5cdG1hcmdpbjogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24sXHJcbi5sZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZSB7XHJcblx0cGFkZGluZzogMCA1cHg7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIGEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbixcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LWNvbnRyb2wtc2NhbGUge1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHR9XHJcbi5sZWFmbGV0LWxlZnQgLmxlYWZsZXQtY29udHJvbC1zY2FsZSB7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSAubGVhZmxldC1jb250cm9sLXNjYWxlIHtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmUge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICM3Nzc7XHJcblx0Ym9yZGVyLXRvcDogbm9uZTtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG5cdHBhZGRpbmc6IDJweCA1cHggMXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmU6bm90KDpmaXJzdC1jaGlsZCkge1xyXG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCAjNzc3O1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0bWFyZ2luLXRvcDogLTJweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZTpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzc3NztcclxuXHR9XHJcblxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uLFxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWxheWVycyxcclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciB7XHJcblx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xyXG5cdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblx0fVxyXG5cclxuXHJcbi8qIHBvcHVwICovXHJcblxyXG4ubGVhZmxldC1wb3B1cCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVyIHtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudCB7XHJcblx0bWFyZ2luOiAxM3B4IDE5cHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQgcCB7XHJcblx0bWFyZ2luOiAxOHB4IDA7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC10aXAtY29udGFpbmVyIHtcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogLTIwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0d2lkdGg6IDE3cHg7XHJcblx0aGVpZ2h0OiAxN3B4O1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHJcblx0bWFyZ2luOiAtMTBweCBhdXRvIDA7XHJcblxyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdCAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdCAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdCAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdCAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVyLFxyXG4ubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGJveC1zaGFkb3c6IDAgM3B4IDE0cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0cGFkZGluZzogNHB4IDRweCAwIDA7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMThweDtcclxuXHRoZWlnaHQ6IDE0cHg7XHJcblx0Zm9udDogMTZweC8xNHB4IFRhaG9tYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogI2MzYzNjMztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgYS5sZWFmbGV0LXBvcHVwLWNsb3NlLWJ1dHRvbjpob3ZlciB7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1zY3JvbGxlZCB7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVyIHtcclxuXHR6b29tOiAxO1xyXG5cdH1cclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHR3aWR0aDogMjRweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHJcblx0LW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT0wLjcwNzEwNjc4LCBNMTI9MC43MDcxMDY3OCwgTTIxPS0wLjcwNzEwNjc4LCBNMjI9MC43MDcxMDY3OClcIjtcclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5NYXRyaXgoTTExPTAuNzA3MTA2NzgsIE0xMj0wLjcwNzEwNjc4LCBNMjE9LTAuNzA3MTA2NzgsIE0yMj0wLjcwNzEwNjc4KTtcclxuXHR9XHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLXRpcC1jb250YWluZXIge1xyXG5cdG1hcmdpbi10b3A6IC0xcHg7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtY29udHJvbC16b29tLFxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1jb250cm9sLWxheWVycyxcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVyLFxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcblx0fVxyXG5cclxuXHJcbi8qIGRpdiBpY29uICovXHJcblxyXG4ubGVhZmxldC1kaXYtaWNvbiB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG5cdH1cclxuXHJcblxyXG4vKiBUb29sdGlwICovXHJcbi8qIEJhc2Ugc3R5bGVzIGZvciB0aGUgZWxlbWVudCB0aGF0IGhhcyBhIHRvb2x0aXAgKi9cclxuLmxlYWZsZXQtdG9vbHRpcCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBhZGRpbmc6IDZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGNvbG9yOiAjMjIyO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC5sZWFmbGV0LWNsaWNrYWJsZSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC10b3A6YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbTpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtbGVmdDpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQ6YmVmb3JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHR9XHJcblxyXG4vKiBEaXJlY3Rpb25zICovXHJcblxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbSB7XHJcblx0bWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wIHtcclxuXHRtYXJnaW4tdG9wOiAtNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tOmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC10b3A6YmVmb3JlIHtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IC02cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLXRvcDpiZWZvcmUge1xyXG5cdGJvdHRvbTogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAtMTJweDtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b206YmVmb3JlIHtcclxuXHR0b3A6IDA7XHJcblx0bWFyZ2luLXRvcDogLTEycHg7XHJcblx0bWFyZ2luLWxlZnQ6IC02cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtbGVmdCB7XHJcblx0bWFyZ2luLWxlZnQ6IC02cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodCB7XHJcblx0bWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0OmJlZm9yZSB7XHJcblx0dG9wOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogLTZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtbGVmdDpiZWZvcmUge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdG1hcmdpbi1yaWdodDogLTEycHg7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0OmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxuXHRtYXJnaW4tbGVmdDogLTEycHg7XHJcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./leaflet.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/leaflet/dist/leaflet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/maps/search-map/map/map.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/maps/search-map/map/map.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"latitude\"\n         [longitude]=\"longitude\"\n         [scrollwheel]=\"false\"\n         [zoom]=\"zoom\">\n  <agm-marker [latitude]=\"latitude\"\n              [longitude]=\"longitude\"></agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/maps/search-map/search-map.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/maps/search-map/search-map.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Google Maps with search</nb-card-header>\n  <nb-card-body>\n    <ngx-search (positionChanged)=\"updateLocation($event)\"></ngx-search>\n    <ngx-map [searchedLocation]=\"searchedLocation\"></ngx-map>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/maps/search-map/search/search.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/maps/search-map/search/search.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\"\n         class=\"form-control search-location\" #search>\n</div>\n"

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/leaflet/dist/leaflet.css":
/*!***************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/leaflet/dist/leaflet.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../style-loader!../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/app/pages/maps/bubble/bubble-map.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/maps/bubble/bubble-map.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n  Declare variables before making them global.\n  dart-sass doesn't allow to declare variable with !global.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-card-body {\n  padding-top: 1.25rem; }\n.nb-theme-default :host .echarts {\n  width: 100%;\n  height: 36.5625rem; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-dark :host nb-card-body {\n  padding-top: 1.25rem; }\n.nb-theme-dark :host .echarts {\n  width: 100%;\n  height: 36.5625rem; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-card-body {\n  padding-top: 1.25rem; }\n.nb-theme-cosmic :host .echarts {\n  width: 100%;\n  height: 36.5625rem; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host nb-card-body {\n  padding-top: 1.25rem; }\n.nb-theme-corporate :host .echarts {\n  width: 100%;\n  height: 36.5625rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwcy9idWJibGUvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXF90aGVtaW5nLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvYnViYmxlL2J1YmJsZS1tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvYnViYmxlL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvYnViYmxlL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvYnViYmxlL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfdmFyaWFudHMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9idWJibGUvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX21hcHBpbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9idWJibGUvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXHRoZW1pbmdcXF9yZWdpc3Rlci5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL2J1YmJsZS9DOlxcVXNlcnNcXEZlUmFuXFxTb3VyY2VcXFJlcG9zXFxDU2hhcnBcXFNtYXJ0SG9tZVxcVUkvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcY29yZVxcdGhlbWluZ1xcX2luc3RhbGwuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9idWJibGUvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXHRoZW1pbmdcXF9nZXQtdmFsdWUuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9idWJibGUvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9idWJibGUvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2Rhcmsuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9idWJibGUvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2Nvc21pYy5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL2J1YmJsZS9DOlxcVXNlcnNcXEZlUmFuXFxTb3VyY2VcXFJlcG9zXFxDU2hhcnBcXFNtYXJ0SG9tZVxcVUkvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfY29ycG9yYXRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvYnViYmxlL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9zcmNcXGFwcFxccGFnZXNcXG1hcHNcXGJ1YmJsZVxcYnViYmxlLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9idWJibGUvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL3NyY1xcYXBwXFxAdGhlbWVcXHN0eWxlc1xcdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUNJRTtBREVGOzs7RUNFRTtBQ1JGOzs7O0VEYUU7QUMrSUY7Ozs7RUQxSUU7QUNvS0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RoREM7QUV0SUQ7Ozs7RUYySUU7QUczSUY7Ozs7RUhnSkU7QUloSkY7Ozs7RUpxSkU7QUtuSkY7Ozs7RUx3SkU7QU0xSkY7Ozs7RU4rSkU7QU8vSkY7Ozs7RVBvS0U7QVFwS0Y7Ozs7RVJ5S0U7QUV6S0Y7Ozs7RUY4S0U7QUM5S0Y7Ozs7RURtTEU7QUN2QkY7Ozs7RUQ0QkU7QUNGRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRHNIQztBUzVTRDs7OztFVGlURTtBRWpURjs7OztFRnNURTtBQ3RURjs7OztFRDJURTtBQy9KRjs7OztFRG9LRTtBQzFJRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDhQQztBUXBiRDs7OztFUnliRTtBRXpiRjs7OztFRjhiRTtBQzliRjs7OztFRG1jRTtBQ3ZTRjs7OztFRDRTRTtBQ2xSRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRHNZQztBVTVqQkQ7Ozs7RVZpa0JFO0FFamtCRjs7OztFRnNrQkU7QUN0a0JGOzs7O0VEMmtCRTtBQy9hRjs7OztFRG9iRTtBQzFaRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDhnQkM7QVNwc0JEOzs7O0VUeXNCRTtBRXpzQkY7Ozs7RUY4c0JFO0FDOXNCRjs7OztFRG10QkU7QUN2akJGOzs7O0VENGpCRTtBQ2xpQkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RzcEJDO0FRNTBCRDs7OztFUmkxQkU7QUVqMUJGOzs7O0VGczFCRTtBQ3QxQkY7Ozs7RUQyMUJFO0FDL3JCRjs7OztFRG9zQkU7QUMxcUJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEOHhCQztBV3A5QkQ7Ozs7RVh5OUJFO0FFejlCRjs7OztFRjg5QkU7QUM5OUJGOzs7O0VEbStCRTtBQ3YwQkY7Ozs7RUQ0MEJFO0FDbHpCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRHM2QkM7QVE1bENEOzs7O0VSaW1DRTtBRWptQ0Y7Ozs7RUZzbUNFO0FDdG1DRjs7OztFRDJtQ0U7QUMvOEJGOzs7O0VEbzlCRTtBQzE3QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0Q4aUNDO0FNenBDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLTjZxQ0M7QVlwdkNIO0VBQ0Usb0JBQW9CLEVBQUE7QUFHdEI7RUFDRSxXQUFXO0VBQ1gsa0JDRzJCLEVBQUE7QVA4RDNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tOd3NDQztBWS93Q0g7RUFDRSxvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLFdBQVc7RUFDWCxrQkNrRTJCLEVBQUE7QVBEM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S05tdUNDO0FZMXlDSDtFQUNFLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UsV0FBVztFQUNYLGtCQ3dCMkIsRUFBQTtBUHlDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S044dkNDO0FZcjBDSDtFQUNFLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UsV0FBVztFQUNYLGtCQzZDMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcHMvYnViYmxlL2J1YmJsZS1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8qXG4gIERlY2xhcmUgdmFyaWFibGVzIGJlZm9yZSBtYWtpbmcgdGhlbSBnbG9iYWwuXG4gIGRhcnQtc2FzcyBkb2Vzbid0IGFsbG93IHRvIGRlY2xhcmUgdmFyaWFibGUgd2l0aCAhZ2xvYmFsLlxuICovXG4kbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllczogZmFsc2UgIWRlZmF1bHQ7XG4kbmItZW5hYmxlZC10aGVtZXM6ICgpO1xuJG5iLXRoZW1lczogKCk7XG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiBudWxsO1xuJG5iLXRoZW1lLW5hbWU6ICdkZWZhdWx0JztcbiRuYi10aGVtZTogKCk7XG4kbmItcHJvY2Vzc2VkLXRoZW1lOiAoKTtcbiRuYi10aGVtZS1leHBvcnQtbW9kZTogZmFsc2UgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCk7XG5cbi8vIHB1YmxpYyB2YXJpYWJsZXNcbiRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzOiBmYWxzZSAhZ2xvYmFsICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lczogKCkgIWdsb2JhbDtcblxuLy8gcHJpdmF0ZSB2YXJpYWJsZXNcbiRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdsYXp5LXByb2Nlc3MnICFnbG9iYWw7XG4kbmItdGhlbWUtbmFtZTogbnVsbCAhZ2xvYmFsO1xuJG5iLXRoZW1lOiAoKSAhZ2xvYmFsO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi10aGVtZS1leHBvcnQtbW9kZTogZmFsc2UgIWdsb2JhbCAhZGVmYXVsdDtcbiRuYi10aGVtZXMtZXhwb3J0OiAoKSAhZ2xvYmFsO1xuXG5AaW1wb3J0ICdjb3JlL21peGlucyc7XG5AaW1wb3J0ICdjb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICdjb3JlL3ZhcmlhbnRzJztcbkBpbXBvcnQgJ2NvcmUvdGhlbWluZy9yZWdpc3Rlcic7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvaW5zdGFsbCc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvZ2V0LXZhbHVlJztcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qXG4gIERlY2xhcmUgdmFyaWFibGVzIGJlZm9yZSBtYWtpbmcgdGhlbSBnbG9iYWwuXG4gIGRhcnQtc2FzcyBkb2Vzbid0IGFsbG93IHRvIGRlY2xhcmUgdmFyaWFibGUgd2l0aCAhZ2xvYmFsLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4ubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1jYXJkLWJvZHkge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTsgfVxuXG4ubmItdGhlbWUtZGVmYXVsdCA6aG9zdCAuZWNoYXJ0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2LjU2MjVyZW07IH1cblxuLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWRhcmsgOmhvc3QgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07IH1cblxuLm5iLXRoZW1lLWRhcmsgOmhvc3QgLmVjaGFydHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNi41NjI1cmVtOyB9XG5cbi8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07IH1cblxuLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAuZWNoYXJ0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2LjU2MjVyZW07IH1cblxuLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1jYXJkLWJvZHkge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTsgfVxuXG4ubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5lY2hhcnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzYuNTYyNXJlbTsgfVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItc2Nyb2xsYmFycygkZmcsICRiZywgJHNpemUsICRib3JkZXItcmFkaXVzOiAkc2l6ZSAvIDIpIHtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICB9XG5cbiAgLy8gVE9ETzogcmVtb3ZlXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZnO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiZztcbn1cblxuQG1peGluIG5iLWhlYWRpbmdzKCRmcm9tOiAxLCAkdG86IDYpIHtcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcbiAgICBoI3skaX0ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LXN0YXR1c2VzKCkge1xuICBAcmV0dXJuICdwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbyc7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtc2l6ZXMoKSB7XG4gIEByZXR1cm4gJ3RpbnknLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2dpYW50Jztcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaGFwZXMoKSB7XG4gIEByZXR1cm4gJ3JlY3RhbmdsZScsICdzZW1pLXJvdW5kJywgJ3JvdW5kJztcbn1cblxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZXZhLW1hcHBpbmc6IChcblxuICAvKiBDb21wb25lbnRzIG1hcHBpbmdzIC0gbWFwcyB0aGVtZSB2YXJpYWJsZXMgb250byBjb21wb25lbnQgdmFyaWFibGVzICovXG5cbiAgbGluay10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGxpbmstdGV4dC1mb2N1cy1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICBsaW5rLXRleHQtaG92ZXItY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICBjYXJkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2FyZC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjYXJkLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNhcmQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNhcmQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLFxuICBjYXJkLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FyZC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjYXJkLXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgY2FyZC1zaGFkb3c6IHNoYWRvdyxcbiAgY2FyZC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjYXJkLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGNhcmQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBjYXJkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhcmQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuXG4gIGNhcmQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBjYXJkLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBoZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBoZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaGVhZGVyLWhlaWdodDogNC43NXJlbSxcbiAgaGVhZGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGhlYWRlci1zaGFkb3c6IHNoYWRvdyxcblxuICBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBmb290ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBmb290ZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgZm9vdGVyLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGZvb3Rlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBmb290ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgbGF5b3V0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxheW91dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgbGF5b3V0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxheW91dC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGF5b3V0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtbWluLWhlaWdodDogMTAwdmgsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiA5MDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1pbi13aWR0aDogMzAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGg6IDE5MjBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcbiAgbGF5b3V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgbGF5b3V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNpZGViYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2lkZWJhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc2lkZWJhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzaWRlYmFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzaWRlYmFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWhlaWdodDogMTAwdmgsXG4gIHNpZGViYXItd2lkdGg6IDE2cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNXJlbSxcbiAgc2lkZWJhci1wYWRkaW5nOiAxLjI1cmVtLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1mb290ZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItc2hhZG93OiBzaGFkb3csXG4gIHNpZGViYXItbWVudS1pdGVtLWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzaWRlYmFyLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBtZW51LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBtZW51LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBtZW51LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgbWVudS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG5cbiAgbWVudS1ncm91cC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1pdGVtLWhvdmVyLWN1cnNvcjogcG9pbnRlcixcbiAgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuXG4gIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG4gIG1lbnUtaXRlbS1pY29uLXdpZHRoOiAxLjVyZW0sXG5cbiAgbWVudS1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIG1lbnUtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBtZW51LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS1zdWJtZW51LW1hcmdpbjogMCxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAgMS4yNXJlbSxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IG1lbnUtaXRlbS1wYWRkaW5nLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICB0YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFic2V0LXRhYi1hY3RpdmUtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICB0YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgdGFic2V0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHRhYnNldC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICB0YWJzZXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICB0YWJzZXQtY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LWNvbnRlbnQtcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRhYnNldC1jb250ZW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICB0YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICByb3V0ZS10YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHJvdXRlLXRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICB1c2VyLXBpY3R1cmUtYm94LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB1c2VyLXBpY3R1cmUtYm94LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHVzZXItaW5pdGlhbHMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdXNlci1uYW1lLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItbmFtZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1uYW1lLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLXRpdGxlLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuNXJlbSxcbiAgdXNlci1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHVzZXItcm91bmQtYm9yZGVyLXJhZGl1czogNTAlLFxuXG4gIHVzZXItdGlueS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHVzZXItdGlueS13aWR0aDogMS4yNXJlbSxcbiAgdXNlci10aW55LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG5cbiAgdXNlci1zbWFsbC1oZWlnaHQ6IDEuNXJlbSxcbiAgdXNlci1zbWFsbC13aWR0aDogMS41cmVtLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci1zbWFsbC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0td2lkdGg6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLWxhcmdlLWhlaWdodDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS13aWR0aDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItZ2lhbnQtaGVpZ2h0OiA0cmVtLFxuICB1c2VyLWdpYW50LXdpZHRoOiA0cmVtLFxuICB1c2VyLWdpYW50LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBwb3BvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHBvcG92ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHBvcG92ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgcG9wb3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgcG9wb3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuICBwb3BvdmVyLWFycm93LXNpemU6IDAuNjg3NXJlbSxcbiAgcG9wb3Zlci1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgY29udGV4dC1tZW51LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAwLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY29udGV4dC1tZW51LW1pbi13aWR0aDogMTByZW0sXG4gIGNvbnRleHQtbWVudS1tYXgtd2lkdGg6IDE1cmVtLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBzaGFkb3csXG5cbiAgYWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYWN0aW9ucy1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBhY3Rpb25zLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGFjdGlvbnMtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgYWN0aW9ucy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGFjdGlvbnMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYWN0aW9ucy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYWN0aW9ucy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgYWN0aW9ucy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBhY3Rpb25zLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYWN0aW9ucy10aW55LWhlaWdodDogMXJlbSxcbiAgYWN0aW9ucy10aW55LWljb24taGVpZ2h0OiBhY3Rpb25zLXRpbnktaGVpZ2h0LFxuICBhY3Rpb25zLXRpbnktcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBhY3Rpb25zLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICBhY3Rpb25zLXNtYWxsLWljb24taGVpZ2h0OiBhY3Rpb25zLXNtYWxsLWhlaWdodCxcbiAgYWN0aW9ucy1zbWFsbC1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1tZWRpdW0taGVpZ2h0OiAyLjI1cmVtLFxuICBhY3Rpb25zLW1lZGl1bS1pY29uLWhlaWdodDogYWN0aW9ucy1tZWRpdW0taGVpZ2h0LFxuICBhY3Rpb25zLW1lZGl1bS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBhY3Rpb25zLWxhcmdlLWhlaWdodDogMy41cmVtLFxuICBhY3Rpb25zLWxhcmdlLWljb24taGVpZ2h0OiBhY3Rpb25zLWxhcmdlLWhlaWdodCxcbiAgYWN0aW9ucy1sYXJnZS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIGFjdGlvbnMtZ2lhbnQtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtZ2lhbnQtaGVpZ2h0LFxuICBhY3Rpb25zLWdpYW50LXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuXG4gIHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlYXJjaC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzZWFyY2gtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgc2VhcmNoLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNlYXJjaC1leHRyYS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlYXJjaC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWFyY2gtdGV4dC1mb250LWZhbWlseTogdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHksXG4gIHNlYXJjaC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplLFxuICBzZWFyY2gtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodCxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VhcmNoLWluZm8tdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC1pbmZvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItZmc6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmc6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcblxuICBzbWFydC10YWJsZS1iZy1ldmVuOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNtYXJ0LXRhYmxlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW0sXG4gIHNtYXJ0LXRhYmxlLXNlcGFyYXRvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICBzbWFydC10YWJsZS1hY3Rpb24tYWRkLWVkaXQtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1hY3Rpb24tY2FuY2VsLWRlbGV0ZS1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcblxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3IsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtZmFtaWx5OiBidXR0b24tdGV4dC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtc2l6ZTogYnV0dG9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWxpbmUtaGVpZ2h0OiBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHRyYW5zcGFyZW50LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3IsXG5cbiAgdG9hc3RyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHRvYXN0ci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRvYXN0ci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB0b2FzdHItcGFkZGluZzogMXJlbSxcbiAgdG9hc3RyLXNoYWRvdzogc2hhZG93LFxuXG4gIHRvYXN0ci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2FzdHItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuXG4gIHRvYXN0ci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvYXN0ci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuXG4gIHRvYXN0ci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvYXN0ci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuXG4gIHRvYXN0ci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvYXN0ci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24taW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuXG4gIHRvYXN0ci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvYXN0ci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuXG4gIHRvYXN0ci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1ob3Zlci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtaG92ZXItZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuXG4gIGJ1dHRvbi1jdXJzb3I6IHBvaW50ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBidXR0b24tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgYnV0dG9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBidXR0b24tdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJ1dHRvbi1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgYnV0dG9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBidXR0b24tdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYnV0dG9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG4gIGJ1dHRvbi1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodCxcblxuICBidXR0b24tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJ1dHRvbi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGJ1dHRvbi1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZmlsbGVkLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZmlsbGVkLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLW91dGxpbmUtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tb3V0bGluZS10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWhvdmVyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWZvY3VzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8taG92ZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctZm9jdXMtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1ob3Zlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1hY3RpdmUtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWZvY3VzLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWZvY3VzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItaG92ZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1naG9zdC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWdob3N0LXNtYWxsLXBhZGRpbmc6IDAuNDM3NXJlbSAwLjg3NXJlbSxcbiAgYnV0dG9uLWdob3N0LW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMS4zNzVyZW0sXG5cbiAgYnV0dG9uLWdob3N0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1hY3RpdmUtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tZm9jdXMtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8taG92ZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWhvdmVyLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWFjdGl2ZS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1mb2N1cy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWhvdmVyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWhlcm8tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWhlcm8tYm9yZGVyLXdpZHRoOiAwLFxuICBidXR0b24taGVyby10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1oZXJvLXRpbnktcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbSxcbiAgYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIGJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW0sXG4gIGJ1dHRvbi1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIGJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDFyZW0gMS41cmVtLFxuXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby10ZXh0LXNoYWRvdzogc2hhZG93LFxuICBidXR0b24taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYmV2ZWwtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWdsb3ctY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24taGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTMwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1zdWNjZXNzLWJldmVsLWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1nbG93LWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8taW5mby1iZXZlbC1jb2xvcjogY29sb3ItaW5mby02MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZ2xvdy1jb2xvcjogY29sb3ItaW5mby03MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBidXR0b24taGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8taW5mby1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby02MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYmV2ZWwtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWdsb3ctY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24taGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy03MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTMwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1iZXZlbC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWdsb3ctY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCxcbiAgaW5wdXQtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgaW5wdXQtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgaW5wdXQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgaW5wdXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcblxuICBpbnB1dC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGlucHV0LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcblxuICBpbnB1dC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaW5wdXQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuXG4gIGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcblxuICBpbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBpbnB1dC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgaW5wdXQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG5cbiAgaW5wdXQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaW5wdXQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuXG4gIGlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGlucHV0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcblxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBpbnB1dC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBpbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXRpbnktcGFkZGluZzogMC4xODc1cmVtIDEuMTI1cmVtLFxuICBpbnB1dC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxLjEyNXJlbSxcbiAgaW5wdXQtc21hbGwtbWF4LXdpZHRoOiAyMHJlbSxcblxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxLjEyNXJlbSxcbiAgaW5wdXQtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgaW5wdXQtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgaW5wdXQtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMTI1cmVtLFxuICBpbnB1dC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIGNoZWNrYm94LWhlaWdodDogMS4xMjVyZW0sXG4gIGNoZWNrYm94LXdpZHRoOiAxLjEyNXJlbSxcbiAgY2hlY2tib3gtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci01LFxuICBjaGVja2JveC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjaGVja2JveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogM3B4LFxuICBjaGVja2JveC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBjaGVja2JveC1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBjaGVja2JveC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIGNoZWNrYm94LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBjaGVja2JveC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcblxuICBjaGVja2JveC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGNoZWNrYm94LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGNoZWNrYm94LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGVja2JveC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC1wcmltYXJ5LTcwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcblxuICBjaGVja2JveC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC1zdWNjZXNzLTcwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcblxuICBjaGVja2JveC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby03MDAsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC1pbmZvLTcwMCxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcblxuICBjaGVja2JveC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy03MDAsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC13YXJuaW5nLTcwMCxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTcwMCxcblxuICBjaGVja2JveC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC1kYW5nZXItNzAwLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG5cbiAgYmFkZ2UtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYmFkZ2UtdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGJhZGdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSxcbiAgYmFkZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJhZGdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGJhZGdlLXBhZGRpbmc6IDAuMjVyZW0gMC40cmVtLFxuXG4gIGJhZGdlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBiYWRnZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zLFxuICBwcm9ncmVzcy1iYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgcHJvZ3Jlc3MtYmFyLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1zbWFsbC1oZWlnaHQ6IDEuMjVyZW0sXG4gIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS1oZWlnaHQ6IDEuNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtaGVpZ2h0OiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBwcm9ncmVzcy1iYXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1pbmZvLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgYWxlcnQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBhbGVydC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhbGVydC1ib3R0b20tbWFyZ2luOiAxLjVyZW0sXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGFsZXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFsZXJ0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhbGVydC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFsZXJ0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGFsZXJ0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgYWxlcnQtY2xvc2FibGUtc3RhcnQtcGFkZGluZzogM3JlbSxcblxuICBhbGVydC10aW55LWhlaWdodDogNC41cmVtLFxuICBhbGVydC1zbWFsbC1oZWlnaHQ6IDUuNzVyZW0sXG4gIGFsZXJ0LW1lZGl1bS1oZWlnaHQ6IDdyZW0sXG4gIGFsZXJ0LW1lZGl1bS1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1sYXJnZS1oZWlnaHQ6IDguMjVyZW0sXG4gIGFsZXJ0LWdpYW50LWhlaWdodDogOS41cmVtLFxuXG4gIGFsZXJ0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBhbGVydC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGFsZXJ0LWFjY2VudC1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuXG4gIGFsZXJ0LW91dGxpbmUtd2lkdGg6IDFweCxcbiAgYWxlcnQtb3V0bGluZS1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LW91dGxpbmUtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1vdXRsaW5lLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtb3V0bGluZS13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LW91dGxpbmUtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcblxuICBjaGF0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2hhdC1ib3JkZXI6IG5vbmUsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2hhdC1zaGFkb3c6IHNoYWRvdyxcbiAgY2hhdC1wYWRkaW5nOiAxcmVtIDEuMjVyZW0sXG4gIGNoYXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBjaGFydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNoYXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGNoYXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgY2hhdC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBjaGF0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBjaGF0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIGNoYXQtaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2hhdC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBjaGF0LXRpbnktaGVpZ2h0OiAxMy41cmVtLFxuICBjaGF0LXNtYWxsLWhlaWdodDogMjFyZW0sXG4gIGNoYXQtbWVkaXVtLWhlaWdodDogMjguNXJlbSxcbiAgY2hhdC1sYXJnZS1oZWlnaHQ6IDM2cmVtLFxuICBjaGF0LWdpYW50LWhlaWdodDogNDMuNXJlbSxcblxuICBjaGF0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGF0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGF0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGF0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGF0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hhdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGNoYXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2hhdC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBjaGF0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgY2hhdC1tZXNzYWdlLWJhY2tncm91bmQ6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hhdC1tZXNzYWdlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtNTAwLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWZpbGUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM3LCAyNDAsIDI0NSwgMC41KSwgLy8gY29sb3ItYmFzaWMtMjAwIHdpdGggMC41IG9wYWNpdHlcbiAgc3Bpbm5lci1jaXJjbGUtZmlsbGVkLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNwaW5uZXItY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgc3Bpbm5lci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzcGlubmVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzcGlubmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNwaW5uZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNwaW5uZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHNwaW5uZXItaW5mby1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNwaW5uZXItaW5mby1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHNwaW5uZXItZGFuZ2VyLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItaGVpZ2h0LXRpbnk6IDEuNXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtc21hbGw6IDEuNzVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LW1lZGl1bTogMnJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtbGFyZ2U6IDIuMjVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LWdpYW50OiAyLjVyZW0sXG5cbiAgc3RlcHBlci1zdGVwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHN0ZXBwZXItc3RlcC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgc3RlcHBlci1zdGVwLWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG5cbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItcmFkaXVzOiA1MCUsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aDogMnJlbSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc3RlcHBlci1jb25uZWN0b3ItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzdGVwcGVyLWNvbm5lY3Rvci1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzdGVwcGVyLWhvcml6b250YWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcbiAgc3RlcHBlci12ZXJ0aWNhbC1jb25uZWN0b3ItbWFyZ2luOiAxcmVtLFxuXG4gIHN0ZXBwZXItc3RlcC1jb250ZW50LXBhZGRpbmc6IDEuMjVyZW0sXG5cbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGFjY29yZGlvbi1wYWRkaW5nOiAxLjI1cmVtLFxuICBhY2NvcmRpb24tc2hhZG93OiBzaGFkb3csXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBsaXN0LWl0ZW0tZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgbGlzdC1pdGVtLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcbiAgbGlzdC1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxpc3QtaXRlbS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGxpc3QtaXRlbS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGlzdC1pdGVtLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGlzdC1pdGVtLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci13aWR0aDogMTkuMjVyZW0sXG4gIGNhbGVuZGFyLWJvZHktaGVpZ2h0OiAyNS42MjVyZW0sXG4gIGNhbGVuZGFyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNhbGVuZGFyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWhlYWRpbmctNi1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIGNhbGVuZGFyLWhlYWRlci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWhlYWRlci1zdWItdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLWJ1dHRvbi13aWR0aDogMTByZW0sXG5cbiAgY2FsZW5kYXItY2VsbC1pbmFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWluLXJhbmdlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMjAwLFxuICBjYWxlbmRhci1jZWxsLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgY2FsZW5kYXItY2VsbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2Vla2RheS1iYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS1ob2xpZGF5LXRleHQtY29sb3I6IGNhbGVuZGFyLXdlZWtkYXktdGV4dC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtd2lkdGgsXG5cbiAgY2FsZW5kYXItd2Vla251bWJlci1iYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1oZWlnaHQ6IGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXdpZHRoOiBjYWxlbmRhci13ZWVrZGF5LXdpZHRoLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyMS44NzVyZW0sXG4gIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yODgpLFxuXG4gIHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zLFxuICB0b29sdGlwLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYm9yZGVyLXN0eWxlOiBkYXNoZWQsXG4gIHRvb2x0aXAtYm9yZGVyLXdpZHRoOiAwLFxuICB0b29sdGlwLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvb2x0aXAtcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHRvb2x0aXAtdGV4dC1jb2xvcjogdGV4dC1hbHRlcm5hdGUtY29sb3IsXG4gIHRvb2x0aXAtdGV4dC1mb250LWZhbWlseTogdGV4dC1jYXB0aW9uLTItZm9udC1mYW1pbHksXG4gIHRvb2x0aXAtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgdG9vbHRpcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgdG9vbHRpcC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgdG9vbHRpcC1tYXgtd2lkdGg6IDE2cmVtLFxuXG4gIHRvb2x0aXAtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvb2x0aXAtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvb2x0aXAtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvb2x0aXAtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvb2x0aXAtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b29sdGlwLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG5cbiAgc2VsZWN0LWN1cnNvcjogcG9pbnRlcixcbiAgc2VsZWN0LWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcbiAgc2VsZWN0LW1pbi13aWR0aDogMTNyZW0sXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtbWF4LWhlaWdodDogMjByZW0sXG4gIHNlbGVjdC1vcHRpb25zLWxpc3Qtc2hhZG93OiBzaGFkb3csXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1ib3JkZXItd2lkdGg6IDAsXG4gIHNlbGVjdC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBzZWxlY3Qtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcblxuICBzZWxlY3QtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgc2VsZWN0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcblxuICBzZWxlY3Qtb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW9wdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW9wdGlvbi1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHNlbGVjdC1vcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3B0aW9uLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgc2VsZWN0LW9wdGlvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vcHRpb24taG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tMi1mb250LXNpemUsXG4gIHNlbGVjdC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtdGlueS1tYXgtd2lkdGg6IDIwcmVtLFxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LWxhcmdlLW1heC13aWR0aDogMzByZW0sXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBzZWxlY3QtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIHNlbGVjdC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgc2VsZWN0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgc2VsZWN0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aDogMXB4LFxuICBzZWxlY3Qtb3V0bGluZS1pY29uLWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxLjEyNXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDEuMTI1cmVtLFxuICBzZWxlY3Qtb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDEuMTI1cmVtLFxuICBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjEyNXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG5cbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kaXNhYmxlZCxcblxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLFxuXG4gIHNlbGVjdC1vcHRpb24tb3V0bGluZS10aW55LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXRpbnktcGFkZGluZyxcbiAgc2VsZWN0LW9wdGlvbi1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXNtYWxsLXBhZGRpbmcsXG4gIHNlbGVjdC1vcHRpb24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmcsXG4gIHNlbGVjdC1vcHRpb24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nLFxuICBzZWxlY3Qtb3B0aW9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZyxcblxuICBzZWxlY3Qtb3Blbi1vdXRsaW5lLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vcGVuLW91dGxpbmUtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItc3R5bGU6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZSxcbiAgc2VsZWN0LW91dGxpbmUtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGgsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcblxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLW91dGxpbmUtdGlueS1zdGFydC1wYWRkaW5nOiAxLjI1cmVtLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLW91dGxpbmUtc21hbGwtc3RhcnQtcGFkZGluZzogMS43NXJlbSxcbiAgc2VsZWN0LWdyb3VwLW9wdGlvbi1vdXRsaW5lLW1lZGl1bS1zdGFydC1wYWRkaW5nOiAyLjI1cmVtLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLW91dGxpbmUtbGFyZ2Utc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgc2VsZWN0LWdyb3VwLW9wdGlvbi1vdXRsaW5lLWdpYW50LXN0YXJ0LXBhZGRpbmc6IDIuNzVyZW0sXG5cbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLWJvcmRlci1jb2xvcjogYm9yZGVyLXByaW1hcnktY29sb3ItMixcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG5cbiAgc2VsZWN0LWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci13aWR0aDogMXB4LFxuICBzZWxlY3QtZmlsbGVkLWljb24tY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxLjEyNXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxLjEyNXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMTI1cmVtLFxuXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kYW5nZXItZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vcHRpb24tZmlsbGVkLXRpbnktcGFkZGluZzogc2VsZWN0LWZpbGxlZC10aW55LXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24tZmlsbGVkLXRpbnktcGFkZGluZy1zdGFydDogMS4xMjVyZW0sXG4gIHNlbGVjdC1vcHRpb24tZmlsbGVkLXNtYWxsLXBhZGRpbmc6IHNlbGVjdC1maWxsZWQtc21hbGwtcGFkZGluZyxcbiAgc2VsZWN0LWdyb3VwLW9wdGlvbi1maWxsZWQtc21hbGwtcGFkZGluZy1zdGFydDogMS43NXJlbSxcbiAgc2VsZWN0LW9wdGlvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IHNlbGVjdC1maWxsZWQtbWVkaXVtLXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nLXN0YXJ0OiAyLjI1cmVtLFxuICBzZWxlY3Qtb3B0aW9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiBzZWxlY3QtZmlsbGVkLWxhcmdlLXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24tZmlsbGVkLWxhcmdlLXBhZGRpbmctc3RhcnQ6IDIuMjVyZW0sXG4gIHNlbGVjdC1vcHRpb24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZyxcbiAgc2VsZWN0LWdyb3VwLW9wdGlvbi1maWxsZWQtZ2lhbnQtcGFkZGluZy1zdGFydDogMi43NXJlbSxcblxuICBzZWxlY3Qtb3B0aW9ucy1saXN0LWZpbGxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1wcmltYXJ5LWNvbG9yLTIsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1maWxsZWQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBzZWxlY3Qtb3B0aW9ucy1saXN0LWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcblxuICBzZWxlY3QtaGVyby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1oZXJvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1oZXJvLWJvcmRlci13aWR0aDogMCxcbiAgc2VsZWN0LWhlcm8taWNvbi1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LWhlcm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcblxuICBzZWxlY3QtaGVyby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXRpbnktcGFkZGluZzogMC4xODc1cmVtIDEuMTI1cmVtLFxuICBzZWxlY3QtaGVyby1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgc2VsZWN0LWhlcm8tZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMTI1cmVtLFxuXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktODAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtcHJpbWFyeS1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy04MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTMwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1zdWNjZXNzLWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIHNlbGVjdC1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTgwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWluZm8tZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctODAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtd2FybmluZy1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItODAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItMzAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW9wdGlvbi1oZXJvLXRpbnktcGFkZGluZzogc2VsZWN0LWhlcm8tdGlueS1wYWRkaW5nLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLWhlcm8tdGlueS1wYWRkaW5nLXN0YXJ0OiAxLjEyNXJlbSxcbiAgc2VsZWN0LW9wdGlvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IHNlbGVjdC1oZXJvLXNtYWxsLXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24taGVyby1zbWFsbC1wYWRkaW5nLXN0YXJ0OiAxLjc1cmVtLFxuICBzZWxlY3Qtb3B0aW9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IHNlbGVjdC1oZXJvLW1lZGl1bS1wYWRkaW5nLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLWhlcm8tbWVkaXVtLXBhZGRpbmctc3RhcnQ6IDIuMjVyZW0sXG4gIHNlbGVjdC1vcHRpb24taGVyby1sYXJnZS1wYWRkaW5nOiBzZWxlY3QtaGVyby1sYXJnZS1wYWRkaW5nLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLWhlcm8tbGFyZ2UtcGFkZGluZy1zdGFydDogMi4yNXJlbSxcbiAgc2VsZWN0LW9wdGlvbi1oZXJvLWdpYW50LXBhZGRpbmc6IHNlbGVjdC1oZXJvLWdpYW50LXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24taGVyby1naWFudC1wYWRkaW5nLXN0YXJ0OiAyLjc1cmVtLFxuXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1ib3JkZXItY29sb3I6IGJvcmRlci1wcmltYXJ5LWNvbG9yLTIsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuXG4gIGRhdGVwaWNrZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgZGF0ZXBpY2tlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6IDAsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IHNoYWRvdyxcbiAgZGF0ZXBpY2tlci1hcnJvdy1zaXplOiAwLjY4NzVyZW0sXG5cbiAgcmFkaW8td2lkdGg6IDEuMTI1cmVtLFxuICByYWRpby1oZWlnaHQ6IDEuMTI1cmVtLFxuICByYWRpby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHJhZGlvLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtNTAwLFxuICByYWRpby1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICByYWRpby1ib3JkZXItd2lkdGg6IDFweCxcbiAgcmFkaW8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICByYWRpby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcmFkaW8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICByYWRpby10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHJhZGlvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHJhZGlvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgcmFkaW8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICByYWRpby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgcmFkaW8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG5cbiAgcmFkaW8tc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuXG4gIHJhZGlvLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHJhZGlvLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIHJhZGlvLXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICByYWRpby13YXJuaW5nLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcblxuICByYWRpby1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcmFkaW8tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIHJhZGlvLWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwLFxuICByYWRpby1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcblxuICByYWRpby1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICByYWRpby1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICByYWRpby1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8taW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgcmFkaW8taW5mby1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgcmFkaW8taW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcbiAgcmFkaW8taW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHJhZGlvLWluZm8taG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG5cbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHRyZWUtZ3JpZC1yb3ctbWluLWhlaWdodDogMnJlbSxcbiAgdHJlZS1ncmlkLWNlbGwtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcblxuICB0cmVlLWdyaWQtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1saW5lLWhlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1yb3ctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCxcblxuICBpY29uLWZvbnQtc2l6ZTogMS4yNXJlbSxcbiAgaWNvbi1saW5lLWhlaWdodDogMSxcbiAgaWNvbi13aWR0aDogMWVtLFxuICBpY29uLWhlaWdodDogMWVtLFxuICBpY29uLXN2Zy12ZXJ0aWNhbC1hbGlnbjogdG9wLFxuICBpY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaWNvbi1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBpY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaWNvbi1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuXG4gIHRvZ2dsZS1oZWlnaHQ6IDEuODc1cmVtLFxuICB0b2dnbGUtd2lkdGg6IDMuMTI1cmVtLFxuICB0b2dnbGUtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRvZ2dsZS1ib3JkZXItcmFkaXVzOiAxMDBweCxcbiAgdG9nZ2xlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtNTAwLFxuICB0b2dnbGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICB0b2dnbGUtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgdG9nZ2xlLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHRvZ2dsZS1zd2l0Y2hlci1zaXplOiAxLjc1cmVtLFxuICB0b2dnbGUtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICB0b2dnbGUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHRvZ2dsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHRvZ2dsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHRvZ2dsZS1jdXJzb3I6IHBvaW50ZXIsXG5cbiAgdG9nZ2xlLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIHRvZ2dsZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICB0b2dnbGUtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICB0b2dnbGUtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDAsXG4gIHRvZ2dsZS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRvZ2dsZS1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0b2dnbGUtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgdG9nZ2xlLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICB0b2dnbGUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuXG4gIHRvZ2dsZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxuICB0b2dnbGUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNDAwLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDAsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG5cbiAgdG9nZ2xlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDAsXG4gIHRvZ2dsZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC00MDAsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby03MDAsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICB0b2dnbGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcblxuICB0b2dnbGUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNDAwLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuXG4gIHRvZ2dsZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItNzAwLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcblxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lcy9tYXBwaW5nJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPT0gMCkge1xuICAgIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJG5iLXRoZW1lcyB7XG4gICAgICAkbmItZW5hYmxlZC10aGVtZXM6IGFwcGVuZCgkbmItZW5hYmxlZC10aGVtZXMsICR0aGVtZS1uYW1lKSAhZ2xvYmFsO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRuYi1lbmFibGVkLXRoZW1lcztcbn1cblxuQGZ1bmN0aW9uIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKSB7XG4gICR0aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuICBAcmV0dXJuIG50aCgkdGhlbWVzLCBsZW5ndGgoJHRoZW1lcykpO1xufVxuXG5AZnVuY3Rpb24gbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLWV4cG9ydCwgJHBhcmVudC1uYW1lKTtcbiAgQGlmICgkcGFyZW50LXRoZW1lICE9IG51bGwpIHtcbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRwYXJlbnQtdGhlbWUsIGRhdGEpLCAkdGhlbWUpO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6IChcbiAgICBkYXRhOiAkdGhlbWUsXG4gICAgcGFyZW50OiAkcGFyZW50LW5hbWUsXG4gICk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsICR0aGVtZS1kYXRhKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYW1lKSB7XG4gICR0aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkbmFtZSk7XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgb3B0aW1hbCBwbGFjZVxuICBAaWYgKCR0aGVtZSA9PSBudWxsKSB7XG4gICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiB0aGVtZSBgJyArICRuYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgbmItcmVnaXN0ZXItdGhlbWVgIGZ1bmN0aW9uLic7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIFJlZ2lzdGVycyBhIG5ldyB0aGVtZVxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gIEBpZiAoJG5iLXRoZW1lLWV4cG9ydC1tb2RlID09IHRydWUpIHtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG4gIEBpZiAoJHBhcmVudC1uYW1lICE9IG51bGwpIHtcbiAgICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRwYXJlbnQtbmFtZSk7XG4gICAgQGlmICgkcGFyZW50LXRoZW1lID09IG51bGwpIHtcbiAgICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogcGFyZW50IHRoZW1lIGAnICsgJHBhcmVudC1uYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgb3IgaW1wb3J0ZWQuJztcbiAgICB9XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UoJHBhcmVudC10aGVtZSwgJHRoZW1lKTtcbiAgfVxuICAkdGhlbWU6IG1hcC1tZXJnZSgkZXZhLW1hcHBpbmcsICR0aGVtZSk7XG4gICRuYi10aGVtZXM6IG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICBAcmV0dXJuICRuYi10aGVtZXM7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgJHRoZW1lKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG5cbiAgICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAgIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnIGFuZCBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKSkge1xuICAgICAgICAtLSN7JHZhcn06IHZhcigtLSN7JHZhbHVlfSk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLS0jeyR2YXJ9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdwcmUtcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogbmItcHJvY2Vzcy10aGVtZShuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIC8vIEBicmVha2luZy1jaGFuZ2UgNS4wLjBcbiAgOmhvc3Qge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgJGVuYWJsZWQtdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkZW5hYmxlZC10aGVtZXMge1xuXG4gICAgQGluY2x1ZGUgbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGNvbXBvbmVudCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgfSBAZWxzZSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIEBjb250ZW50O1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpO1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBnbG9iYWwgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG5AbWl4aW4gbmItaW5zdGFsbCgpIHtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gICRwYXJlbnQtdmFsdWU6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gIEBpZiAoJHBhcmVudC12YWx1ZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICRwYXJlbnQtdmFsdWUpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cbkBmdW5jdGlvbiBuYi1wcm9jZXNzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJvY2Vzc2VkLXRoZW1lOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHByb2Nlc3NlZC10aGVtZTogbWFwLXNldCgkcHJvY2Vzc2VkLXRoZW1lLCAka2V5LCBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuICBAcmV0dXJuICRwcm9jZXNzZWQtdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9IG51bGwpIHtcbiAgICBAcmV0dXJuICRuYi10aGVtZS1uYW1lO1xuICB9XG5cbiAgQHJldHVybiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCk7XG59XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG5cbiAgJHZhbHVlOiAoKTtcblxuICAvLyBpbiBjYXNlIG9mIGNzcyBjdXN0b20gcHJvcGVydGllcyAtIGp1c3QgcmV0dXJucyB2YXIoLS12YXItbmFtZSkgLSB0aGUgcmVzdCBpcyBhIGJyb3dzZXIgam9iXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMgPT0gdHJ1ZSkge1xuICAgIC8vIHRoZXJlIGlzIG5vIHdheSB0byBjaGVjayBpZiB2YXJpYWJsZSBleGlzdHMgYXMgY3VycmVudCBleGVjdXRpb24gY29udGV4dCBpcyBvdXRzaWRlIG9mIHBhcnRpY3VsYXIgdGhlbWVcbiAgICAvLyBiZWNhdXNlIHdlIHByb2Nlc3MgY3NzIGluIHRoaXMgbW9kZSBvbmx5IG9uY2UhIChhbmQgbm90IGZvciBlYWNoIHRoZW1lKVxuICAgICR2YWx1ZTogdmFyKC0tI3ska2V5fSk7XG4gIH0gQGVsc2Uge1xuICAgIC8vIGluIGEgcHJlcHJvY2VzcyBtb2RlIChuYi1pbnN0YWxsLWdsb2JhbCBjYWxsKSBnZXQgcmVhZHkgdmFsdWUgZnJvbSAkbmItcHJvY2Vzc2VkLXRoZW1lIHZhcmlhYmxlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdwcmUtcHJvY2VzcycpIHtcbiAgICAgICR2YWx1ZTogbWFwLWdldCgkbmItcHJvY2Vzc2VkLXRoZW1lLCAka2V5KTtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UgbGF6aWx5IHNlYXJjaCBmb3IgdmFyaWFibGUgdmFsdWVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ2xhenktcHJvY2VzcycpIHtcblxuICAgICAgJG5iLXRoZW1lLW5hbWU6IGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKTtcblxuICAgICAgJHRoZW1lOiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmItdGhlbWUtbmFtZSk7XG4gICAgICAkdmFsdWU6IG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksIG1hcC1nZXQoJHRoZW1lLCAka2V5KSk7XG4gICAgfVxuICB9XG5cbiAgQGlmICgkdmFsdWUgPT0gbnVsbCkge1xuICAgIEB3YXJuICdOZWJ1bGFyIFRoZW1lOiBgbmItdGhlbWUoKWAgY2Fubm90IGZpbmQgdmFsdWUgZm9yIGtleSBgJyArICRrZXkgKyAnYCBmb3IgdGhlbWUgYCcrICRuYi10aGVtZS1uYW1lICsnYCc7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcblxuICAvKipcbiAgICogU2FzcyBtYXAgY29udGFpbnMgYSBsaXN0IG9mIGFsbCBUaGVtZSB2YXJpYWJsZXMgYW5kIGFsc28gdGhlaXIgbWFwcGluZ3MgaW50byBDb21wb25lbnQgdmFyaWFibGVzXG4gICAqIEEgdGhlbWUgY29uc2lzdHMgb2YgYSBsaXN0IG9mIGNvbG9ycywgYmFja2dyb3VuZHMsIGJvcmRlcnMsIHRleHQgc3R5bGVzIGFuZCBzdXBwb3J0aW5nIHZhcmlhYmxlcy5cbiAgICovXG5cblxuICAvKiBTdGF0dXMgY29sb3JzOiBwcmltYXJ5LCBzdWNjZXNzLCBpbmZvLCB3YXJuaW5nLCBkYW5nZXIgLSBmb3IgY29sb3JlZCBlbGVtZW50cyAoYnV0dG9ucywgZXRjKSAqL1xuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZjJmNmZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2Q5ZTRmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNhNmMxZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjNTk4YmZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogIzMzNjZmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICMyNzRiZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjMWEzNGI4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzEwMjY5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMwOTFjN2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtMTAwOiAjZjBmZmY1LFxuICBjb2xvci1zdWNjZXNzLTIwMDogI2NjZmNlMyxcbiAgY29sb3Itc3VjY2Vzcy0zMDA6ICM4Y2ZhYzcsXG4gIGNvbG9yLXN1Y2Nlc3MtNDAwOiAjMmNlNjliLFxuICBjb2xvci1zdWNjZXNzLTUwMDogIzAwZDY4ZixcbiAgY29sb3Itc3VjY2Vzcy02MDA6ICMwMGI4ODcsXG4gIGNvbG9yLXN1Y2Nlc3MtNzAwOiAjMDA5OTdhLFxuICBjb2xvci1zdWNjZXNzLTgwMDogIzAwN2Q2YyxcbiAgY29sb3Itc3VjY2Vzcy05MDA6ICMwMDRhNDUsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMDgpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4xNiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjI0KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMzIpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuNDgpLFxuXG4gIGNvbG9yLWluZm8tMTAwOiAjZjJmOGZmLFxuICBjb2xvci1pbmZvLTIwMDogI2M3ZTJmZixcbiAgY29sb3ItaW5mby0zMDA6ICM5NGNiZmYsXG4gIGNvbG9yLWluZm8tNDAwOiAjNDJhYWZmLFxuICBjb2xvci1pbmZvLTUwMDogIzAwOTVmZixcbiAgY29sb3ItaW5mby02MDA6ICMwMDZmZDYsXG4gIGNvbG9yLWluZm8tNzAwOiAjMDA1N2MyLFxuICBjb2xvci1pbmZvLTgwMDogIzAwNDFhOCxcbiAgY29sb3ItaW5mby05MDA6ICMwMDI4ODUsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMDgpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4xNiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMzIpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAxNDksIDI1NSwgMC40KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXdhcm5pbmctMTAwOiAjZmZmZGYyLFxuICBjb2xvci13YXJuaW5nLTIwMDogI2ZmZjFjMixcbiAgY29sb3Itd2FybmluZy0zMDA6ICNmZmU1OWUsXG4gIGNvbG9yLXdhcm5pbmctNDAwOiAjZmZjOTRkLFxuICBjb2xvci13YXJuaW5nLTUwMDogI2ZmYWEwMCxcbiAgY29sb3Itd2FybmluZy02MDA6ICNkYjhiMDAsXG4gIGNvbG9yLXdhcm5pbmctNzAwOiAjYjg2ZTAwLFxuICBjb2xvci13YXJuaW5nLTgwMDogIzk0NTQwMCxcbiAgY29sb3Itd2FybmluZy05MDA6ICM3MDNjMDAsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMDgpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4xNiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjI0KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMzIpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNDgpLFxuXG4gIGNvbG9yLWRhbmdlci0xMDA6ICNmZmYyZjIsXG4gIGNvbG9yLWRhbmdlci0yMDA6ICNmZmQ2ZDksXG4gIGNvbG9yLWRhbmdlci0zMDA6ICNmZmE4YjQsXG4gIGNvbG9yLWRhbmdlci00MDA6ICNmZjcwOGQsXG4gIGNvbG9yLWRhbmdlci01MDA6ICNmZjNkNzEsXG4gIGNvbG9yLWRhbmdlci02MDA6ICNkYjJjNjYsXG4gIGNvbG9yLWRhbmdlci03MDA6ICNiODFkNWIsXG4gIGNvbG9yLWRhbmdlci04MDA6ICM5NDEyNGUsXG4gIGNvbG9yLWRhbmdlci05MDA6ICM3MDA5NDAsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMDgpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4xNiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjI0KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMzIpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuNDgpLFxuXG4gIC8qIEJhc2ljIGNvbG9ycyAtIGZvciBiYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyBhbmQgdGV4dHMgKi9cblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjlmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZWRmMWY3LFxuICBjb2xvci1iYXNpYy00MDA6ICNlNGU5ZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2M1Y2VlMCxcbiAgY29sb3ItYmFzaWMtNjAwOiAjOGY5YmIzLFxuICBjb2xvci1iYXNpYy03MDA6ICMyZTNhNTksXG4gIGNvbG9yLWJhc2ljLTgwMDogIzIyMmI0NSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMTkyMDM4LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMTUxYTMwLFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTAxNDI2LFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDAsIDAsIDAuMjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAwLCAwLCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMCwgMCwgMC40KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMCwgMCwgMC40OCksXG5cbiAgLyogU3RhdHVzIGNvbG9ycyBzdGF0ZXMgLSBmb2N1cywgaG92ZXIsIGRlZmF1bHQsIGFjdGl2ZSwgZGlzYWJsZWQgICovXG5cbiAgY29sb3ItcHJpbWFyeS1mb2N1czogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXI6IGNvbG9yLXByaW1hcnktNDAwLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZTogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQ6IGNvbG9yLXByaW1hcnktMzAwLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkOiBjb2xvci1zdWNjZXNzLTIwMCxcblxuICBjb2xvci1pbmZvLWZvY3VzOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1ob3ZlcjogY29sb3ItaW5mby00MDAsXG4gIGNvbG9yLWluZm8tZGVmYXVsdDogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tYWN0aXZlOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1kaXNhYmxlZDogY29sb3ItaW5mby0zMDAsXG5cbiAgY29sb3Itd2FybmluZy1mb2N1czogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXI6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLWFjdGl2ZTogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQ6IGNvbG9yLXdhcm5pbmctMzAwLFxuXG4gIGNvbG9yLWRhbmdlci1mb2N1czogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyOiBjb2xvci1kYW5nZXItNDAwLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdDogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZTogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkOiBjb2xvci1kYW5nZXItMzAwLFxuXG4gIGNvbG9yLWJhc2ljLWZvY3VzOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkOiBjb2xvci1iYXNpYy0zMDAsXG5cbiAgLyogQmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgLSBiYXNpYywgYWx0ZXJuYXRpdmUgYW5kIHByaW1hcnkgICovXG5cbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLXByaW1hcnktNTAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0zOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLXByaW1hcnktODAwLFxuXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLWJhc2ljLTUwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMjogY29sb3ItYmFzaWMtNjAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0zOiBjb2xvci1iYXNpYy03MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNTogY29sb3ItYmFzaWMtOTAwLFxuXG4gIC8qIFRleHQgY29sb3JzIC0gZ2VuZXJhbCBhbmQgc3RhdHVzICovXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtOTAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICB0ZXh0LWhpbnQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcblxuICB0ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0ZXh0LXByaW1hcnktaG92ZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuXG4gIHRleHQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0ZXh0LXN1Y2Nlc3MtZm9jdXMtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG5cbiAgdGV4dC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRleHQtaW5mby1mb2N1cy1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdGV4dC1pbmZvLWhvdmVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcblxuICB0ZXh0LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0ZXh0LXdhcm5pbmctaG92ZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRleHQtd2FybmluZy1hY3RpdmUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuXG4gIHRleHQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGV4dC1kYW5nZXItZm9jdXMtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGV4dC1kYW5nZXItaG92ZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICB0ZXh0LWRhbmdlci1kaXNhYmxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcblxuICAvKiBGb250cyBhbmQgdGV4dCBzdHlsZXMgLSBoZWFkaW5ncywgc3VidGl0bGVzLCBwYXJhZ3JhcGhzLCBjYXB0aW9ucywgYnV0dG9uICovXG5cbiAgZm9udC1mYW1pbHktcHJpbWFyeTogdW5xdW90ZSgnT3BlbiBTYW5zLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtZmFtaWx5LXNlY29uZGFyeTogZm9udC1mYW1pbHktcHJpbWFyeSxcblxuICB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMS1mb250LXNpemU6IDIuMjVyZW0sXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0OiAzcmVtLFxuXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtc2l6ZTogMnJlbSxcbiAgdGV4dC1oZWFkaW5nLTItZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTItbGluZS1oZWlnaHQ6IDIuNXJlbSxcblxuICB0ZXh0LWhlYWRpbmctMy1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXNpemU6IDEuODc1cmVtLFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMy1saW5lLWhlaWdodDogMi41cmVtLFxuXG4gIHRleHQtaGVhZGluZy00LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy00LWZvbnQtc2l6ZTogMS42MjVyZW0sXG4gIHRleHQtaGVhZGluZy00LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy00LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy01LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy01LWZvbnQtc2l6ZTogMS4zNzVyZW0sXG4gIHRleHQtaGVhZGluZy01LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy01LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy02LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZTogMS4xMjVyZW0sXG4gIHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXNpemU6IDAuOTM3NXJlbSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplOiAwLjkzNzVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0OiAxLjI1cmVtLFxuXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodDogMS4xMjVyZW0sXG5cbiAgdGV4dC1sYWJlbC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1sYWJlbC1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtbGFiZWwtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1sYWJlbC1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtY2FwdGlvbi1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1jYXB0aW9uLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1idXR0b24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplOiAwLjYyNXJlbSxcbiAgdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodDogMC43NXJlbSxcbiAgdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplOiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodDogMS4yNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplOiAxLjEyNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICAvKiBTdXBwb3J0aW5nIHZhcmlhYmxlcyAtIGJvcmRlciByYWRpdXMsIG91dGxpbmUsIHNoYWRvdywgZGl2aWRlciAqL1xuXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXG5cbiAgb3V0bGluZS13aWR0aDogMC4zNzVyZW0sXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcblxuICBzY3JvbGxiYXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2Nyb2xsYmFyLXdpZHRoOiAwLjMxMjVyZW0sXG5cbiAgc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSg0NCwgNTEsIDczLCAwLjEpLFxuXG4gIGRpdmlkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBkaXZpZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGl2aWRlci13aWR0aDogMXB4LFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy05MDAsXG4gIHRleHQtY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRleHQtaGludC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuXG4gIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwICMxYTFmMzMsXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLTcwMCxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkYXJrLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGFyayc7XG5cbiR0aGVtZTogKFxuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZmFmN2ZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2VjZTNmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNkNWJmZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjYjE4YWZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogI2ExNmVmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICM3YjUxZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjNWEzN2I4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzNlMjQ5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMyOTE1N2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4wOCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4zMiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjdmN2ZjLFxuICBjb2xvci1iYXNpYy0zMDA6ICNmMGYwZmEsXG4gIGNvbG9yLWJhc2ljLTQwMDogI2UxZTFmMixcbiAgY29sb3ItYmFzaWMtNTAwOiAjY2VjZWViLFxuICBjb2xvci1iYXNpYy02MDA6ICNiNGI0ZGIsXG4gIGNvbG9yLWJhc2ljLTcwMDogIzZhNmE5NCxcbiAgY29sb3ItYmFzaWMtODAwOiAjMzIzMjU5LFxuICBjb2xvci1iYXNpYy05MDA6ICMyNTI1NDcsXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxYjFiMzgsXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxMzEzMmIsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMDgpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMzIpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC40KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNDgpLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRhcmspO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuJHRoZW1lOiAoXG4gIGJvcmRlci1yYWRpdXM6IDAuMTdyZW0sXG4gIHNoYWRvdzogbm9uZSxcblxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG5cbiAgY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDFweCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeS01MDAsXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcblxuICBwb3BvdmVyLWJvcmRlci13aWR0aDogMXB4LFxuICBwb3BvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFic2V0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB1c2VyLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGVja2JveC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBtb2RhbC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhY2NvcmRpb24tc2hhZG93OiBub25lLFxuXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIHNlbGVjdC1vcGVuLW91dGxpbmUtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3B0aW9ucy1saXN0LW91dGxpbmUtYm9yZGVyLWNvbG9yLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vQHRoZW1lL3N0eWxlcy90aGVtZXMnO1xuXG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcblxuICBuYi1jYXJkLWJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICB9XG5cbiAgLmVjaGFydHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogbmItdGhlbWUoY2FyZC1oZWlnaHQtbGFyZ2UpO1xuICB9XG59XG4iLCIvLyBAbmVidWxhciB0aGVtaW5nIGZyYW1ld29ya1xuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtaW5nJztcbi8vIEBuZWJ1bGFyIG91dCBvZiB0aGUgYm94IHRoZW1lc1xuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMnO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgoXG4gIGxheW91dC1wYWRkaW5nLXRvcDogMi4yNXJlbSxcblxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sXG5cbiAgc2VsZWN0LW1pbi13aWR0aDogNnJlbSxcblxuICBzbGlkZS1vdXQtYmFja2dyb3VuZDogI2Y3ZjlmYyxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvcjogMCA0cHggMTRweCAwICM4ZjliYjMsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3ItcnRsOiAwIDRweCAxNHB4IDAgIzhmOWJiMyxcbiksIGRlZmF1bHQsIGRlZmF1bHQpO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgoXG4gIGxheW91dC1wYWRkaW5nLXRvcDogMi4yNXJlbSxcblxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sXG5cbiAgc2VsZWN0LW1pbi13aWR0aDogNnJlbSxcblxuICBzbGlkZS1vdXQtYmFja2dyb3VuZDogIzI1MjU0NyxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvcjogMnB4IDAgM3B4ICMyOTE1N2EsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3ItcnRsOiAtMnB4IDAgM3B4ICMyOTE1N2EsXG4pLCBjb3NtaWMsIGNvc21pYyk7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKChcbiAgbGF5b3V0LXBhZGRpbmctdG9wOiAyLjI1cmVtLFxuXG4gIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLFxuXG4gIGNhcmQtaGVpZ2h0LXRpbnk6IDEzLjVyZW0sXG4gIGNhcmQtaGVpZ2h0LXNtYWxsOiAyMS4xODc1cmVtLFxuICBjYXJkLWhlaWdodC1tZWRpdW06IDI4Ljg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbGFyZ2U6IDM2LjU2MjVyZW0sXG4gIGNhcmQtaGVpZ2h0LWdpYW50OiA0NC4yNXJlbSxcbiAgY2FyZC1tYXJnaW4tYm90dG9tOiAxLjg3NXJlbSxcbiAgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy10b3A6IDAuNXJlbSxcbiAgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy1ib3R0b206IDAuNXJlbSxcblxuICBzZWxlY3QtbWluLXdpZHRoOiA2cmVtLFxuXG4gIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZWRmMWY3IDAlLCAjZTRlOWYyIDEwMCUpLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAwIDRweCAxNHB4IDAgIzhmOWJiMyxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IDAgNHB4IDE0cHggMCAjOGY5YmIzLFxuKSwgY29ycG9yYXRlLCBjb3Jwb3JhdGUpO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgoXG4gIGxheW91dC1wYWRkaW5nLXRvcDogMi4yNXJlbSxcblxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sXG4gIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sXG5cbiAgc2VsZWN0LW1pbi13aWR0aDogNnJlbSxcblxuICBzbGlkZS1vdXQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzIyMmI0NSAwJSwgIzE1MWEzMCAxMDAlKSxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvcjogMCA0cHggMTRweCAwICM4ZjliYjMsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3ItcnRsOiAwIDRweCAxNHB4IDAgIzhmOWJiMyxcbiksIGRhcmssIGRhcmspO1xuIl19 */"

/***/ }),

/***/ "./src/app/pages/maps/bubble/bubble-map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/maps/bubble/bubble-map.component.ts ***!
  \***********************************************************/
/*! exports provided: BubbleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleMapComponent", function() { return BubbleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_6__);







var BubbleMapComponent = /** @class */ (function () {
    function BubbleMapComponent(theme, http) {
        var _this = this;
        this.theme = theme;
        this.http = http;
        this.latlong = {};
        this.max = -Infinity;
        this.min = Infinity;
        this.alive = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.http.get('assets/map/world.json'),
            this.theme.getJsTheme(),
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var map = _a[0], config = _a[1];
            Object(echarts__WEBPACK_IMPORTED_MODULE_6__["registerMap"])('world', map);
            var colors = config.variables;
            _this.bubbleTheme = config.variables.bubbleMap;
            _this.geoColors = [colors.primary, colors.info, colors.success, colors.warning, colors.danger];
            _this.latlong = {
                'AD': { 'latitude': 42.5, 'longitude': 1.5 },
                'AE': { 'latitude': 24, 'longitude': 54 },
                'AF': { 'latitude': 33, 'longitude': 65 },
                'AG': { 'latitude': 17.05, 'longitude': -61.8 },
                'AI': { 'latitude': 18.25, 'longitude': -63.1667 },
                'AL': { 'latitude': 41, 'longitude': 20 },
                'AM': { 'latitude': 40, 'longitude': 45 },
                'AN': { 'latitude': 12.25, 'longitude': -68.75 },
                'AO': { 'latitude': -12.5, 'longitude': 18.5 },
                'AP': { 'latitude': 35, 'longitude': 105 },
                'AQ': { 'latitude': -90, 'longitude': 0 },
                'AR': { 'latitude': -34, 'longitude': -64 },
                'AS': { 'latitude': -14.3333, 'longitude': -170 },
                'AT': { 'latitude': 47.3333, 'longitude': 13.3333 },
                'AU': { 'latitude': -27, 'longitude': 133 },
                'AW': { 'latitude': 12.5, 'longitude': -69.9667 },
                'AZ': { 'latitude': 40.5, 'longitude': 47.5 },
                'BA': { 'latitude': 44, 'longitude': 18 },
                'BB': { 'latitude': 13.1667, 'longitude': -59.5333 },
                'BD': { 'latitude': 24, 'longitude': 90 },
                'BE': { 'latitude': 50.8333, 'longitude': 4 },
                'BF': { 'latitude': 13, 'longitude': -2 },
                'BG': { 'latitude': 43, 'longitude': 25 },
                'BH': { 'latitude': 26, 'longitude': 50.55 },
                'BI': { 'latitude': -3.5, 'longitude': 30 },
                'BJ': { 'latitude': 9.5, 'longitude': 2.25 },
                'BM': { 'latitude': 32.3333, 'longitude': -64.75 },
                'BN': { 'latitude': 4.5, 'longitude': 114.6667 },
                'BO': { 'latitude': -17, 'longitude': -65 },
                'BR': { 'latitude': -10, 'longitude': -55 },
                'BS': { 'latitude': 24.25, 'longitude': -76 },
                'BT': { 'latitude': 27.5, 'longitude': 90.5 },
                'BV': { 'latitude': -54.4333, 'longitude': 3.4 },
                'BW': { 'latitude': -22, 'longitude': 24 },
                'BY': { 'latitude': 53, 'longitude': 28 },
                'BZ': { 'latitude': 17.25, 'longitude': -88.75 },
                'CA': { 'latitude': 54, 'longitude': -100 },
                'CC': { 'latitude': -12.5, 'longitude': 96.8333 },
                'CD': { 'latitude': 0, 'longitude': 25 },
                'CF': { 'latitude': 7, 'longitude': 21 },
                'CG': { 'latitude': -1, 'longitude': 15 },
                'CH': { 'latitude': 47, 'longitude': 8 },
                'CI': { 'latitude': 8, 'longitude': -5 },
                'CK': { 'latitude': -21.2333, 'longitude': -159.7667 },
                'CL': { 'latitude': -30, 'longitude': -71 },
                'CM': { 'latitude': 6, 'longitude': 12 },
                'CN': { 'latitude': 35, 'longitude': 105 },
                'CO': { 'latitude': 4, 'longitude': -72 },
                'CR': { 'latitude': 10, 'longitude': -84 },
                'CU': { 'latitude': 21.5, 'longitude': -80 },
                'CV': { 'latitude': 16, 'longitude': -24 },
                'CX': { 'latitude': -10.5, 'longitude': 105.6667 },
                'CY': { 'latitude': 35, 'longitude': 33 },
                'CZ': { 'latitude': 49.75, 'longitude': 15.5 },
                'DE': { 'latitude': 51, 'longitude': 9 },
                'DJ': { 'latitude': 11.5, 'longitude': 43 },
                'DK': { 'latitude': 56, 'longitude': 10 },
                'DM': { 'latitude': 15.4167, 'longitude': -61.3333 },
                'DO': { 'latitude': 19, 'longitude': -70.6667 },
                'DZ': { 'latitude': 28, 'longitude': 3 },
                'EC': { 'latitude': -2, 'longitude': -77.5 },
                'EE': { 'latitude': 59, 'longitude': 26 },
                'EG': { 'latitude': 27, 'longitude': 30 },
                'EH': { 'latitude': 24.5, 'longitude': -13 },
                'ER': { 'latitude': 15, 'longitude': 39 },
                'ES': { 'latitude': 40, 'longitude': -4 },
                'ET': { 'latitude': 8, 'longitude': 38 },
                'EU': { 'latitude': 47, 'longitude': 8 },
                'FI': { 'latitude': 62, 'longitude': 26 },
                'FJ': { 'latitude': -18, 'longitude': 175 },
                'FK': { 'latitude': -51.75, 'longitude': -59 },
                'FM': { 'latitude': 6.9167, 'longitude': 158.25 },
                'FO': { 'latitude': 62, 'longitude': -7 },
                'FR': { 'latitude': 46, 'longitude': 2 },
                'GA': { 'latitude': -1, 'longitude': 11.75 },
                'GB': { 'latitude': 54, 'longitude': -2 },
                'GD': { 'latitude': 12.1167, 'longitude': -61.6667 },
                'GE': { 'latitude': 42, 'longitude': 43.5 },
                'GF': { 'latitude': 4, 'longitude': -53 },
                'GH': { 'latitude': 8, 'longitude': -2 },
                'GI': { 'latitude': 36.1833, 'longitude': -5.3667 },
                'GL': { 'latitude': 72, 'longitude': -40 },
                'GM': { 'latitude': 13.4667, 'longitude': -16.5667 },
                'GN': { 'latitude': 11, 'longitude': -10 },
                'GP': { 'latitude': 16.25, 'longitude': -61.5833 },
                'GQ': { 'latitude': 2, 'longitude': 10 },
                'GR': { 'latitude': 39, 'longitude': 22 },
                'GS': { 'latitude': -54.5, 'longitude': -37 },
                'GT': { 'latitude': 15.5, 'longitude': -90.25 },
                'GU': { 'latitude': 13.4667, 'longitude': 144.7833 },
                'GW': { 'latitude': 12, 'longitude': -15 },
                'GY': { 'latitude': 5, 'longitude': -59 },
                'HK': { 'latitude': 22.25, 'longitude': 114.1667 },
                'HM': { 'latitude': -53.1, 'longitude': 72.5167 },
                'HN': { 'latitude': 15, 'longitude': -86.5 },
                'HR': { 'latitude': 45.1667, 'longitude': 15.5 },
                'HT': { 'latitude': 19, 'longitude': -72.4167 },
                'HU': { 'latitude': 47, 'longitude': 20 },
                'ID': { 'latitude': -5, 'longitude': 120 },
                'IE': { 'latitude': 53, 'longitude': -8 },
                'IL': { 'latitude': 31.5, 'longitude': 34.75 },
                'IN': { 'latitude': 20, 'longitude': 77 },
                'IO': { 'latitude': -6, 'longitude': 71.5 },
                'IQ': { 'latitude': 33, 'longitude': 44 },
                'IR': { 'latitude': 32, 'longitude': 53 },
                'IS': { 'latitude': 65, 'longitude': -18 },
                'IT': { 'latitude': 42.8333, 'longitude': 12.8333 },
                'JM': { 'latitude': 18.25, 'longitude': -77.5 },
                'JO': { 'latitude': 31, 'longitude': 36 },
                'JP': { 'latitude': 36, 'longitude': 138 },
                'KE': { 'latitude': 1, 'longitude': 38 },
                'KG': { 'latitude': 41, 'longitude': 75 },
                'KH': { 'latitude': 13, 'longitude': 105 },
                'KI': { 'latitude': 1.4167, 'longitude': 173 },
                'KM': { 'latitude': -12.1667, 'longitude': 44.25 },
                'KN': { 'latitude': 17.3333, 'longitude': -62.75 },
                'KP': { 'latitude': 40, 'longitude': 127 },
                'KR': { 'latitude': 37, 'longitude': 127.5 },
                'KW': { 'latitude': 29.3375, 'longitude': 47.6581 },
                'KY': { 'latitude': 19.5, 'longitude': -80.5 },
                'KZ': { 'latitude': 48, 'longitude': 68 },
                'LA': { 'latitude': 18, 'longitude': 105 },
                'LB': { 'latitude': 33.8333, 'longitude': 35.8333 },
                'LC': { 'latitude': 13.8833, 'longitude': -61.1333 },
                'LI': { 'latitude': 47.1667, 'longitude': 9.5333 },
                'LK': { 'latitude': 7, 'longitude': 81 },
                'LR': { 'latitude': 6.5, 'longitude': -9.5 },
                'LS': { 'latitude': -29.5, 'longitude': 28.5 },
                'LT': { 'latitude': 55, 'longitude': 24 },
                'LU': { 'latitude': 49.75, 'longitude': 6 },
                'LV': { 'latitude': 57, 'longitude': 25 },
                'LY': { 'latitude': 25, 'longitude': 17 },
                'MA': { 'latitude': 32, 'longitude': -5 },
                'MC': { 'latitude': 43.7333, 'longitude': 7.4 },
                'MD': { 'latitude': 47, 'longitude': 29 },
                'ME': { 'latitude': 42.5, 'longitude': 19.4 },
                'MG': { 'latitude': -20, 'longitude': 47 },
                'MH': { 'latitude': 9, 'longitude': 168 },
                'MK': { 'latitude': 41.8333, 'longitude': 22 },
                'ML': { 'latitude': 17, 'longitude': -4 },
                'MM': { 'latitude': 22, 'longitude': 98 },
                'MN': { 'latitude': 46, 'longitude': 105 },
                'MO': { 'latitude': 22.1667, 'longitude': 113.55 },
                'MP': { 'latitude': 15.2, 'longitude': 145.75 },
                'MQ': { 'latitude': 14.6667, 'longitude': -61 },
                'MR': { 'latitude': 20, 'longitude': -12 },
                'MS': { 'latitude': 16.75, 'longitude': -62.2 },
                'MT': { 'latitude': 35.8333, 'longitude': 14.5833 },
                'MU': { 'latitude': -20.2833, 'longitude': 57.55 },
                'MV': { 'latitude': 3.25, 'longitude': 73 },
                'MW': { 'latitude': -13.5, 'longitude': 34 },
                'MX': { 'latitude': 23, 'longitude': -102 },
                'MY': { 'latitude': 2.5, 'longitude': 112.5 },
                'MZ': { 'latitude': -18.25, 'longitude': 35 },
                'NA': { 'latitude': -22, 'longitude': 17 },
                'NC': { 'latitude': -21.5, 'longitude': 165.5 },
                'NE': { 'latitude': 16, 'longitude': 8 },
                'NF': { 'latitude': -29.0333, 'longitude': 167.95 },
                'NG': { 'latitude': 10, 'longitude': 8 },
                'NI': { 'latitude': 13, 'longitude': -85 },
                'NL': { 'latitude': 52.5, 'longitude': 5.75 },
                'NO': { 'latitude': 62, 'longitude': 10 },
                'NP': { 'latitude': 28, 'longitude': 84 },
                'NR': { 'latitude': -0.5333, 'longitude': 166.9167 },
                'NU': { 'latitude': -19.0333, 'longitude': -169.8667 },
                'NZ': { 'latitude': -41, 'longitude': 174 },
                'OM': { 'latitude': 21, 'longitude': 57 },
                'PA': { 'latitude': 9, 'longitude': -80 },
                'PE': { 'latitude': -10, 'longitude': -76 },
                'PF': { 'latitude': -15, 'longitude': -140 },
                'PG': { 'latitude': -6, 'longitude': 147 },
                'PH': { 'latitude': 13, 'longitude': 122 },
                'PK': { 'latitude': 30, 'longitude': 70 },
                'PL': { 'latitude': 52, 'longitude': 20 },
                'PM': { 'latitude': 46.8333, 'longitude': -56.3333 },
                'PR': { 'latitude': 18.25, 'longitude': -66.5 },
                'PS': { 'latitude': 32, 'longitude': 35.25 },
                'PT': { 'latitude': 39.5, 'longitude': -8 },
                'PW': { 'latitude': 7.5, 'longitude': 134.5 },
                'PY': { 'latitude': -23, 'longitude': -58 },
                'QA': { 'latitude': 25.5, 'longitude': 51.25 },
                'RE': { 'latitude': -21.1, 'longitude': 55.6 },
                'RO': { 'latitude': 46, 'longitude': 25 },
                'RS': { 'latitude': 44, 'longitude': 21 },
                'RU': { 'latitude': 60, 'longitude': 100 },
                'RW': { 'latitude': -2, 'longitude': 30 },
                'SA': { 'latitude': 25, 'longitude': 45 },
                'SB': { 'latitude': -8, 'longitude': 159 },
                'SC': { 'latitude': -4.5833, 'longitude': 55.6667 },
                'SD': { 'latitude': 15, 'longitude': 30 },
                'SE': { 'latitude': 62, 'longitude': 15 },
                'SG': { 'latitude': 1.3667, 'longitude': 103.8 },
                'SH': { 'latitude': -15.9333, 'longitude': -5.7 },
                'SI': { 'latitude': 46, 'longitude': 15 },
                'SJ': { 'latitude': 78, 'longitude': 20 },
                'SK': { 'latitude': 48.6667, 'longitude': 19.5 },
                'SL': { 'latitude': 8.5, 'longitude': -11.5 },
                'SM': { 'latitude': 43.7667, 'longitude': 12.4167 },
                'SN': { 'latitude': 14, 'longitude': -14 },
                'SO': { 'latitude': 10, 'longitude': 49 },
                'SR': { 'latitude': 4, 'longitude': -56 },
                'ST': { 'latitude': 1, 'longitude': 7 },
                'SV': { 'latitude': 13.8333, 'longitude': -88.9167 },
                'SY': { 'latitude': 35, 'longitude': 38 },
                'SZ': { 'latitude': -26.5, 'longitude': 31.5 },
                'TC': { 'latitude': 21.75, 'longitude': -71.5833 },
                'TD': { 'latitude': 15, 'longitude': 19 },
                'TF': { 'latitude': -43, 'longitude': 67 },
                'TG': { 'latitude': 8, 'longitude': 1.1667 },
                'TH': { 'latitude': 15, 'longitude': 100 },
                'TJ': { 'latitude': 39, 'longitude': 71 },
                'TK': { 'latitude': -9, 'longitude': -172 },
                'TM': { 'latitude': 40, 'longitude': 60 },
                'TN': { 'latitude': 34, 'longitude': 9 },
                'TO': { 'latitude': -20, 'longitude': -175 },
                'TR': { 'latitude': 39, 'longitude': 35 },
                'TT': { 'latitude': 11, 'longitude': -61 },
                'TV': { 'latitude': -8, 'longitude': 178 },
                'TW': { 'latitude': 23.5, 'longitude': 121 },
                'TZ': { 'latitude': -6, 'longitude': 35 },
                'UA': { 'latitude': 49, 'longitude': 32 },
                'UG': { 'latitude': 1, 'longitude': 32 },
                'UM': { 'latitude': 19.2833, 'longitude': 166.6 },
                'US': { 'latitude': 38, 'longitude': -97 },
                'UY': { 'latitude': -33, 'longitude': -56 },
                'UZ': { 'latitude': 41, 'longitude': 64 },
                'VA': { 'latitude': 41.9, 'longitude': 12.45 },
                'VC': { 'latitude': 13.25, 'longitude': -61.2 },
                'VE': { 'latitude': 8, 'longitude': -66 },
                'VG': { 'latitude': 18.5, 'longitude': -64.5 },
                'VI': { 'latitude': 18.3333, 'longitude': -64.8333 },
                'VN': { 'latitude': 16, 'longitude': 106 },
                'VU': { 'latitude': -16, 'longitude': 167 },
                'WF': { 'latitude': -13.3, 'longitude': -176.2 },
                'WS': { 'latitude': -13.5833, 'longitude': -172.3333 },
                'YE': { 'latitude': 15, 'longitude': 48 },
                'YT': { 'latitude': -12.8333, 'longitude': 45.1667 },
                'ZA': { 'latitude': -29, 'longitude': 24 },
                'ZM': { 'latitude': -15, 'longitude': 30 },
                'ZW': { 'latitude': -20, 'longitude': 30 },
            };
            _this.mapData = [
                { 'code': 'AF', 'name': 'Afghanistan', 'value': 32358260, 'color': _this.getRandomGeoColor() },
                { 'code': 'AL', 'name': 'Albania', 'value': 3215988, 'color': _this.getRandomGeoColor() },
                { 'code': 'DZ', 'name': 'Algeria', 'value': 35980193, 'color': _this.getRandomGeoColor() },
                { 'code': 'AO', 'name': 'Angola', 'value': 19618432, 'color': _this.getRandomGeoColor() },
                { 'code': 'AR', 'name': 'Argentina', 'value': 40764561, 'color': _this.getRandomGeoColor() },
                { 'code': 'AM', 'name': 'Armenia', 'value': 3100236, 'color': _this.getRandomGeoColor() },
                { 'code': 'AU', 'name': 'Australia', 'value': 22605732, 'color': _this.getRandomGeoColor() },
                { 'code': 'AT', 'name': 'Austria', 'value': 8413429, 'color': _this.getRandomGeoColor() },
                { 'code': 'AZ', 'name': 'Azerbaijan', 'value': 9306023, 'color': _this.getRandomGeoColor() },
                { 'code': 'BH', 'name': 'Bahrain', 'value': 1323535, 'color': _this.getRandomGeoColor() },
                { 'code': 'BD', 'name': 'Bangladesh', 'value': 150493658, 'color': _this.getRandomGeoColor() },
                { 'code': 'BY', 'name': 'Belarus', 'value': 9559441, 'color': _this.getRandomGeoColor() },
                { 'code': 'BE', 'name': 'Belgium', 'value': 10754056, 'color': _this.getRandomGeoColor() },
                { 'code': 'BJ', 'name': 'Benin', 'value': 9099922, 'color': _this.getRandomGeoColor() },
                { 'code': 'BT', 'name': 'Bhutan', 'value': 738267, 'color': _this.getRandomGeoColor() },
                { 'code': 'BO', 'name': 'Bolivia', 'value': 10088108, 'color': _this.getRandomGeoColor() },
                { 'code': 'BA', 'name': 'Bosnia and Herzegovina', 'value': 3752228, 'color': _this.getRandomGeoColor() },
                { 'code': 'BW', 'name': 'Botswana', 'value': 2030738, 'color': _this.getRandomGeoColor() },
                { 'code': 'BR', 'name': 'Brazil', 'value': 196655014, 'color': _this.getRandomGeoColor() },
                { 'code': 'BN', 'name': 'Brunei', 'value': 405938, 'color': _this.getRandomGeoColor() },
                { 'code': 'BG', 'name': 'Bulgaria', 'value': 7446135, 'color': _this.getRandomGeoColor() },
                { 'code': 'BF', 'name': 'Burkina Faso', 'value': 16967845, 'color': _this.getRandomGeoColor() },
                { 'code': 'BI', 'name': 'Burundi', 'value': 8575172, 'color': _this.getRandomGeoColor() },
                { 'code': 'KH', 'name': 'Cambodia', 'value': 14305183, 'color': _this.getRandomGeoColor() },
                { 'code': 'CM', 'name': 'Cameroon', 'value': 20030362, 'color': _this.getRandomGeoColor() },
                { 'code': 'CA', 'name': 'Canada', 'value': 34349561, 'color': _this.getRandomGeoColor() },
                { 'code': 'CV', 'name': 'Cape Verde', 'value': 500585, 'color': _this.getRandomGeoColor() },
                { 'code': 'CF', 'name': 'Central African Rep.', 'value': 4486837, 'color': _this.getRandomGeoColor() },
                { 'code': 'TD', 'name': 'Chad', 'value': 11525496, 'color': _this.getRandomGeoColor() },
                { 'code': 'CL', 'name': 'Chile', 'value': 17269525, 'color': _this.getRandomGeoColor() },
                { 'code': 'CN', 'name': 'China', 'value': 1347565324, 'color': _this.getRandomGeoColor() },
                { 'code': 'CO', 'name': 'Colombia', 'value': 46927125, 'color': _this.getRandomGeoColor() },
                { 'code': 'KM', 'name': 'Comoros', 'value': 753943, 'color': _this.getRandomGeoColor() },
                { 'code': 'CD', 'name': 'Congo, Dem. Rep.', 'value': 67757577, 'color': _this.getRandomGeoColor() },
                { 'code': 'CG', 'name': 'Congo, Rep.', 'value': 4139748, 'color': _this.getRandomGeoColor() },
                { 'code': 'CR', 'name': 'Costa Rica', 'value': 4726575, 'color': _this.getRandomGeoColor() },
                { 'code': 'CI', 'name': 'Cote d\'Ivoire', 'value': 20152894, 'color': _this.getRandomGeoColor() },
                { 'code': 'HR', 'name': 'Croatia', 'value': 4395560, 'color': _this.getRandomGeoColor() },
                { 'code': 'CU', 'name': 'Cuba', 'value': 11253665, 'color': _this.getRandomGeoColor() },
                { 'code': 'CY', 'name': 'Cyprus', 'value': 1116564, 'color': _this.getRandomGeoColor() },
                { 'code': 'CZ', 'name': 'Czech Rep.', 'value': 10534293, 'color': _this.getRandomGeoColor() },
                { 'code': 'DK', 'name': 'Denmark', 'value': 5572594, 'color': _this.getRandomGeoColor() },
                { 'code': 'DJ', 'name': 'Djibouti', 'value': 905564, 'color': _this.getRandomGeoColor() },
                { 'code': 'DO', 'name': 'Dominican Rep.', 'value': 10056181, 'color': _this.getRandomGeoColor() },
                { 'code': 'EC', 'name': 'Ecuador', 'value': 14666055, 'color': _this.getRandomGeoColor() },
                { 'code': 'EG', 'name': 'Egypt', 'value': 82536770, 'color': _this.getRandomGeoColor() },
                { 'code': 'SV', 'name': 'El Salvador', 'value': 6227491, 'color': _this.getRandomGeoColor() },
                { 'code': 'GQ', 'name': 'Equatorial Guinea', 'value': 720213, 'color': _this.getRandomGeoColor() },
                { 'code': 'ER', 'name': 'Eritrea', 'value': 5415280, 'color': _this.getRandomGeoColor() },
                { 'code': 'EE', 'name': 'Estonia', 'value': 1340537, 'color': _this.getRandomGeoColor() },
                { 'code': 'ET', 'name': 'Ethiopia', 'value': 84734262, 'color': _this.getRandomGeoColor() },
                { 'code': 'FJ', 'name': 'Fiji', 'value': 868406, 'color': _this.getRandomGeoColor() },
                { 'code': 'FI', 'name': 'Finland', 'value': 5384770, 'color': _this.getRandomGeoColor() },
                { 'code': 'FR', 'name': 'France', 'value': 63125894, 'color': _this.getRandomGeoColor() },
                { 'code': 'GA', 'name': 'Gabon', 'value': 1534262, 'color': _this.getRandomGeoColor() },
                { 'code': 'GM', 'name': 'Gambia', 'value': 1776103, 'color': _this.getRandomGeoColor() },
                { 'code': 'GE', 'name': 'Georgia', 'value': 4329026, 'color': _this.getRandomGeoColor() },
                { 'code': 'DE', 'name': 'Germany', 'value': 82162512, 'color': _this.getRandomGeoColor() },
                { 'code': 'GH', 'name': 'Ghana', 'value': 24965816, 'color': _this.getRandomGeoColor() },
                { 'code': 'GR', 'name': 'Greece', 'value': 11390031, 'color': _this.getRandomGeoColor() },
                { 'code': 'GT', 'name': 'Guatemala', 'value': 14757316, 'color': _this.getRandomGeoColor() },
                { 'code': 'GN', 'name': 'Guinea', 'value': 10221808, 'color': _this.getRandomGeoColor() },
                { 'code': 'GW', 'name': 'Guinea-Bissau', 'value': 1547061, 'color': _this.getRandomGeoColor() },
                { 'code': 'GY', 'name': 'Guyana', 'value': 756040, 'color': _this.getRandomGeoColor() },
                { 'code': 'HT', 'name': 'Haiti', 'value': 10123787, 'color': _this.getRandomGeoColor() },
                { 'code': 'HN', 'name': 'Honduras', 'value': 7754687, 'color': _this.getRandomGeoColor() },
                { 'code': 'HK', 'name': 'Hong Kong, China', 'value': 7122187, 'color': _this.getRandomGeoColor() },
                { 'code': 'HU', 'name': 'Hungary', 'value': 9966116, 'color': _this.getRandomGeoColor() },
                { 'code': 'IS', 'name': 'Iceland', 'value': 324366, 'color': _this.getRandomGeoColor() },
                { 'code': 'IN', 'name': 'India', 'value': 1241491960, 'color': _this.getRandomGeoColor() },
                { 'code': 'ID', 'name': 'Indonesia', 'value': 242325638, 'color': _this.getRandomGeoColor() },
                { 'code': 'IR', 'name': 'Iran', 'value': 74798599, 'color': _this.getRandomGeoColor() },
                { 'code': 'IQ', 'name': 'Iraq', 'value': 32664942, 'color': _this.getRandomGeoColor() },
                { 'code': 'IE', 'name': 'Ireland', 'value': 4525802, 'color': _this.getRandomGeoColor() },
                { 'code': 'IL', 'name': 'Israel', 'value': 7562194, 'color': _this.getRandomGeoColor() },
                { 'code': 'IT', 'name': 'Italy', 'value': 60788694, 'color': _this.getRandomGeoColor() },
                { 'code': 'JM', 'name': 'Jamaica', 'value': 2751273, 'color': _this.getRandomGeoColor() },
                { 'code': 'JP', 'name': 'Japan', 'value': 126497241, 'color': _this.getRandomGeoColor() },
                { 'code': 'JO', 'name': 'Jordan', 'value': 6330169, 'color': _this.getRandomGeoColor() },
                { 'code': 'KZ', 'name': 'Kazakhstan', 'value': 16206750, 'color': _this.getRandomGeoColor() },
                { 'code': 'KE', 'name': 'Kenya', 'value': 41609728, 'color': _this.getRandomGeoColor() },
                { 'code': 'KP', 'name': 'Korea, Dem. Rep.', 'value': 24451285, 'color': _this.getRandomGeoColor() },
                { 'code': 'KR', 'name': 'Korea, Rep.', 'value': 48391343, 'color': _this.getRandomGeoColor() },
                { 'code': 'KW', 'name': 'Kuwait', 'value': 2818042, 'color': _this.getRandomGeoColor() },
                { 'code': 'KG', 'name': 'Kyrgyzstan', 'value': 5392580, 'color': _this.getRandomGeoColor() },
                { 'code': 'LA', 'name': 'Laos', 'value': 6288037, 'color': _this.getRandomGeoColor() },
                { 'code': 'LV', 'name': 'Latvia', 'value': 2243142, 'color': _this.getRandomGeoColor() },
                { 'code': 'LB', 'name': 'Lebanon', 'value': 4259405, 'color': _this.getRandomGeoColor() },
                { 'code': 'LS', 'name': 'Lesotho', 'value': 2193843, 'color': _this.getRandomGeoColor() },
                { 'code': 'LR', 'name': 'Liberia', 'value': 4128572, 'color': _this.getRandomGeoColor() },
                { 'code': 'LY', 'name': 'Libya', 'value': 6422772, 'color': _this.getRandomGeoColor() },
                { 'code': 'LT', 'name': 'Lithuania', 'value': 3307481, 'color': _this.getRandomGeoColor() },
                { 'code': 'LU', 'name': 'Luxembourg', 'value': 515941, 'color': _this.getRandomGeoColor() },
                { 'code': 'MK', 'name': 'Macedonia, FYR', 'value': 2063893, 'color': _this.getRandomGeoColor() },
                { 'code': 'MG', 'name': 'Madagascar', 'value': 21315135, 'color': _this.getRandomGeoColor() },
                { 'code': 'MW', 'name': 'Malawi', 'value': 15380888, 'color': _this.getRandomGeoColor() },
                { 'code': 'MY', 'name': 'Malaysia', 'value': 28859154, 'color': _this.getRandomGeoColor() },
                { 'code': 'ML', 'name': 'Mali', 'value': 15839538, 'color': _this.getRandomGeoColor() },
                { 'code': 'MR', 'name': 'Mauritania', 'value': 3541540, 'color': _this.getRandomGeoColor() },
                { 'code': 'MU', 'name': 'Mauritius', 'value': 1306593, 'color': _this.getRandomGeoColor() },
                { 'code': 'MX', 'name': 'Mexico', 'value': 114793341, 'color': _this.getRandomGeoColor() },
                { 'code': 'MD', 'name': 'Moldova', 'value': 3544864, 'color': _this.getRandomGeoColor() },
                { 'code': 'MN', 'name': 'Mongolia', 'value': 2800114, 'color': _this.getRandomGeoColor() },
                { 'code': 'ME', 'name': 'Montenegro', 'value': 632261, 'color': _this.getRandomGeoColor() },
                { 'code': 'MA', 'name': 'Morocco', 'value': 32272974, 'color': _this.getRandomGeoColor() },
                { 'code': 'MZ', 'name': 'Mozambique', 'value': 23929708, 'color': _this.getRandomGeoColor() },
                { 'code': 'MM', 'name': 'Myanmar', 'value': 48336763, 'color': _this.getRandomGeoColor() },
                { 'code': 'NA', 'name': 'Namibia', 'value': 2324004, 'color': _this.getRandomGeoColor() },
                { 'code': 'NP', 'name': 'Nepal', 'value': 30485798, 'color': _this.getRandomGeoColor() },
                { 'code': 'NL', 'name': 'Netherlands', 'value': 16664746, 'color': _this.getRandomGeoColor() },
                { 'code': 'NZ', 'name': 'New Zealand', 'value': 4414509, 'color': _this.getRandomGeoColor() },
                { 'code': 'NI', 'name': 'Nicaragua', 'value': 5869859, 'color': _this.getRandomGeoColor() },
                { 'code': 'NE', 'name': 'Niger', 'value': 16068994, 'color': _this.getRandomGeoColor() },
                { 'code': 'NG', 'name': 'Nigeria', 'value': 162470737, 'color': _this.getRandomGeoColor() },
                { 'code': 'NO', 'name': 'Norway', 'value': 4924848, 'color': _this.getRandomGeoColor() },
                { 'code': 'OM', 'name': 'Oman', 'value': 2846145, 'color': _this.getRandomGeoColor() },
                { 'code': 'PK', 'name': 'Pakistan', 'value': 176745364, 'color': _this.getRandomGeoColor() },
                { 'code': 'PA', 'name': 'Panama', 'value': 3571185, 'color': _this.getRandomGeoColor() },
                { 'code': 'PG', 'name': 'Papua New Guinea', 'value': 7013829, 'color': _this.getRandomGeoColor() },
                { 'code': 'PY', 'name': 'Paraguay', 'value': 6568290, 'color': _this.getRandomGeoColor() },
                { 'code': 'PE', 'name': 'Peru', 'value': 29399817, 'color': _this.getRandomGeoColor() },
                { 'code': 'PH', 'name': 'Philippines', 'value': 94852030, 'color': _this.getRandomGeoColor() },
                { 'code': 'PL', 'name': 'Poland', 'value': 38298949, 'color': _this.getRandomGeoColor() },
                { 'code': 'PT', 'name': 'Portugal', 'value': 10689663, 'color': _this.getRandomGeoColor() },
                { 'code': 'PR', 'name': 'Puerto Rico', 'value': 3745526, 'color': _this.getRandomGeoColor() },
                { 'code': 'QA', 'name': 'Qatar', 'value': 1870041, 'color': _this.getRandomGeoColor() },
                { 'code': 'RO', 'name': 'Romania', 'value': 21436495, 'color': _this.getRandomGeoColor() },
                { 'code': 'RU', 'name': 'Russia', 'value': 142835555, 'color': _this.getRandomGeoColor() },
                { 'code': 'RW', 'name': 'Rwanda', 'value': 10942950, 'color': _this.getRandomGeoColor() },
                { 'code': 'SA', 'name': 'Saudi Arabia', 'value': 28082541, 'color': _this.getRandomGeoColor() },
                { 'code': 'SN', 'name': 'Senegal', 'value': 12767556, 'color': _this.getRandomGeoColor() },
                { 'code': 'RS', 'name': 'Serbia', 'value': 9853969, 'color': _this.getRandomGeoColor() },
                { 'code': 'SL', 'name': 'Sierra Leone', 'value': 5997486, 'color': _this.getRandomGeoColor() },
                { 'code': 'SG', 'name': 'Singapore', 'value': 5187933, 'color': _this.getRandomGeoColor() },
                { 'code': 'SK', 'name': 'Slovak Republic', 'value': 5471502, 'color': _this.getRandomGeoColor() },
                { 'code': 'SI', 'name': 'Slovenia', 'value': 2035012, 'color': _this.getRandomGeoColor() },
                { 'code': 'SB', 'name': 'Solomon Islands', 'value': 552267, 'color': _this.getRandomGeoColor() },
                { 'code': 'SO', 'name': 'Somalia', 'value': 9556873, 'color': _this.getRandomGeoColor() },
                { 'code': 'ZA', 'name': 'South Africa', 'value': 50459978, 'color': _this.getRandomGeoColor() },
                { 'code': 'ES', 'name': 'Spain', 'value': 46454895, 'color': _this.getRandomGeoColor() },
                { 'code': 'LK', 'name': 'Sri Lanka', 'value': 21045394, 'color': _this.getRandomGeoColor() },
                { 'code': 'SD', 'name': 'Sudan', 'value': 34735288, 'color': _this.getRandomGeoColor() },
                { 'code': 'SR', 'name': 'Suriname', 'value': 529419, 'color': _this.getRandomGeoColor() },
                { 'code': 'SZ', 'name': 'Swaziland', 'value': 1203330, 'color': _this.getRandomGeoColor() },
                { 'code': 'SE', 'name': 'Sweden', 'value': 9440747, 'color': _this.getRandomGeoColor() },
                { 'code': 'CH', 'name': 'Switzerland', 'value': 7701690, 'color': _this.getRandomGeoColor() },
                { 'code': 'SY', 'name': 'Syria', 'value': 20766037, 'color': _this.getRandomGeoColor() },
                { 'code': 'TW', 'name': 'Taiwan', 'value': 23072000, 'color': _this.getRandomGeoColor() },
                { 'code': 'TJ', 'name': 'Tajikistan', 'value': 6976958, 'color': _this.getRandomGeoColor() },
                { 'code': 'TZ', 'name': 'Tanzania', 'value': 46218486, 'color': _this.getRandomGeoColor() },
                { 'code': 'TH', 'name': 'Thailand', 'value': 69518555, 'color': _this.getRandomGeoColor() },
                { 'code': 'TG', 'name': 'Togo', 'value': 6154813, 'color': _this.getRandomGeoColor() },
                { 'code': 'TT', 'name': 'Trinidad and Tobago', 'value': 1346350, 'color': _this.getRandomGeoColor() },
                { 'code': 'TN', 'name': 'Tunisia', 'value': 10594057, 'color': _this.getRandomGeoColor() },
                { 'code': 'TR', 'name': 'Turkey', 'value': 73639596, 'color': _this.getRandomGeoColor() },
                { 'code': 'TM', 'name': 'Turkmenistan', 'value': 5105301, 'color': _this.getRandomGeoColor() },
                { 'code': 'UG', 'name': 'Uganda', 'value': 34509205, 'color': _this.getRandomGeoColor() },
                { 'code': 'UA', 'name': 'Ukraine', 'value': 45190180, 'color': _this.getRandomGeoColor() },
                { 'code': 'AE', 'name': 'United Arab Emirates', 'value': 7890924, 'color': _this.getRandomGeoColor() },
                { 'code': 'GB', 'name': 'United Kingdom', 'value': 62417431, 'color': _this.getRandomGeoColor() },
                { 'code': 'US', 'name': 'United States', 'value': 313085380, 'color': _this.getRandomGeoColor() },
                { 'code': 'UY', 'name': 'Uruguay', 'value': 3380008, 'color': _this.getRandomGeoColor() },
                { 'code': 'UZ', 'name': 'Uzbekistan', 'value': 27760267, 'color': _this.getRandomGeoColor() },
                { 'code': 'VE', 'name': 'Venezuela', 'value': 29436891, 'color': _this.getRandomGeoColor() },
                { 'code': 'PS', 'name': 'West Bank and Gaza', 'value': 4152369, 'color': _this.getRandomGeoColor() },
                { 'code': 'VN', 'name': 'Vietnam', 'value': 88791996, 'color': _this.getRandomGeoColor() },
                { 'code': 'YE', 'name': 'Yemen, Rep.', 'value': 24799880, 'color': _this.getRandomGeoColor() },
                { 'code': 'ZM', 'name': 'Zambia', 'value': 13474959, 'color': _this.getRandomGeoColor() },
                { 'code': 'ZW', 'name': 'Zimbabwe', 'value': 12754378, 'color': _this.getRandomGeoColor() }
            ];
            _this.mapData.forEach(function (itemOpt) {
                if (itemOpt.value > _this.max) {
                    _this.max = itemOpt.value;
                }
                if (itemOpt.value < _this.min) {
                    _this.min = itemOpt.value;
                }
            });
            _this.options = {
                title: {
                    text: 'World Population (2011)',
                    left: 'center',
                    top: '16px',
                    textStyle: {
                        color: _this.bubbleTheme.titleColor,
                    },
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.name + ": " + params.value[2];
                    },
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: _this.max,
                    inRange: {
                        symbolSize: [6, 60],
                    },
                },
                geo: {
                    name: 'World Population (2010)',
                    type: 'map',
                    map: 'world',
                    roam: true,
                    label: {
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            areaColor: _this.bubbleTheme.areaColor,
                            borderColor: _this.bubbleTheme.areaBorderColor,
                        },
                        emphasis: {
                            areaColor: _this.bubbleTheme.areaHoverColor,
                        },
                    },
                    zoom: 1.1,
                },
                series: [
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: _this.mapData.map(function (itemOpt) {
                            return {
                                name: itemOpt.name,
                                value: [
                                    _this.latlong[itemOpt.code].longitude,
                                    _this.latlong[itemOpt.code].latitude,
                                    itemOpt.value,
                                ],
                                itemStyle: {
                                    normal: {
                                        color: itemOpt.color,
                                    },
                                },
                            };
                        }),
                    },
                ],
            };
        });
    }
    BubbleMapComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    BubbleMapComponent.prototype.getRandomGeoColor = function () {
        var index = Math.round(Math.random() * this.geoColors.length);
        return this.geoColors[index];
    };
    BubbleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-bubble-map',
            template: "\n    <nb-card>\n      <nb-card-header>Bubble Maps</nb-card-header>\n      <div echarts [options]=\"options\" class=\"echarts\"></div>\n    </nb-card>\n  ",
            styles: [__webpack_require__(/*! ./bubble-map.component.scss */ "./src/app/pages/maps/bubble/bubble-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BubbleMapComponent);
    return BubbleMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/gmaps/gmaps.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/maps/gmaps/gmaps.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n  Declare variables before making them global.\n  dart-sass doesn't allow to declare variable with !global.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-card-body {\n  padding: 0; }\n.nb-theme-default :host ::ng-deep agm-map {\n  width: 100%;\n  height: 36.5625rem; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-dark :host nb-card-body {\n  padding: 0; }\n.nb-theme-dark :host ::ng-deep agm-map {\n  width: 100%;\n  height: 36.5625rem; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-card-body {\n  padding: 0; }\n.nb-theme-cosmic :host ::ng-deep agm-map {\n  width: 100%;\n  height: 36.5625rem; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host nb-card-body {\n  padding: 0; }\n.nb-theme-corporate :host ::ng-deep agm-map {\n  width: 100%;\n  height: 36.5625rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwcy9nbWFwcy9DOlxcVXNlcnNcXEZlUmFuXFxTb3VyY2VcXFJlcG9zXFxDU2hhcnBcXFNtYXJ0SG9tZVxcVUkvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9nbWFwcy9nbWFwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9nbWFwcy9DOlxcVXNlcnNcXEZlUmFuXFxTb3VyY2VcXFJlcG9zXFxDU2hhcnBcXFNtYXJ0SG9tZVxcVUkvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcY29yZVxcX21peGlucy5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL2dtYXBzL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvZ21hcHMvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXF92YXJpYW50cy5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL2dtYXBzL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9tYXBwaW5nLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvZ21hcHMvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXHRoZW1pbmdcXF9yZWdpc3Rlci5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL2dtYXBzL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFx0aGVtaW5nXFxfaW5zdGFsbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL2dtYXBzL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFx0aGVtaW5nXFxfZ2V0LXZhbHVlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvZ21hcHMvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9nbWFwcy9DOlxcVXNlcnNcXEZlUmFuXFxTb3VyY2VcXFJlcG9zXFxDU2hhcnBcXFNtYXJ0SG9tZVxcVUkvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfZGFyay5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL2dtYXBzL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9jb3NtaWMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9nbWFwcy9DOlxcVXNlcnNcXEZlUmFuXFxTb3VyY2VcXFJlcG9zXFxDU2hhcnBcXFNtYXJ0SG9tZVxcVUkvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfY29ycG9yYXRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvZ21hcHMvQzpcXFVzZXJzXFxGZVJhblxcU291cmNlXFxSZXBvc1xcQ1NoYXJwXFxTbWFydEhvbWVcXFVJL3NyY1xcYXBwXFxwYWdlc1xcbWFwc1xcZ21hcHNcXGdtYXBzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL2dtYXBzL0M6XFxVc2Vyc1xcRmVSYW5cXFNvdXJjZVxcUmVwb3NcXENTaGFycFxcU21hcnRIb21lXFxVSS9zcmNcXGFwcFxcQHRoZW1lXFxzdHlsZXNcXHRoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VDSUU7QURFRjs7O0VDRUU7QUNSRjs7OztFRGFFO0FDK0lGOzs7O0VEMUlFO0FDb0tGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEaERDO0FFdElEOzs7O0VGMklFO0FHM0lGOzs7O0VIZ0pFO0FJaEpGOzs7O0VKcUpFO0FLbkpGOzs7O0VMd0pFO0FNMUpGOzs7O0VOK0pFO0FPL0pGOzs7O0VQb0tFO0FRcEtGOzs7O0VSeUtFO0FFektGOzs7O0VGOEtFO0FDOUtGOzs7O0VEbUxFO0FDdkJGOzs7O0VENEJFO0FDRkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RzSEM7QVM1U0Q7Ozs7RVRpVEU7QUVqVEY7Ozs7RUZzVEU7QUN0VEY7Ozs7RUQyVEU7QUMvSkY7Ozs7RURvS0U7QUMxSUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0Q4UEM7QVFwYkQ7Ozs7RVJ5YkU7QUV6YkY7Ozs7RUY4YkU7QUM5YkY7Ozs7RURtY0U7QUN2U0Y7Ozs7RUQ0U0U7QUNsUkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RzWUM7QVU1akJEOzs7O0VWaWtCRTtBRWprQkY7Ozs7RUZza0JFO0FDdGtCRjs7OztFRDJrQkU7QUMvYUY7Ozs7RURvYkU7QUMxWkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0Q4Z0JDO0FTcHNCRDs7OztFVHlzQkU7QUV6c0JGOzs7O0VGOHNCRTtBQzlzQkY7Ozs7RURtdEJFO0FDdmpCRjs7OztFRDRqQkU7QUNsaUJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEc3BCQztBUTUwQkQ7Ozs7RVJpMUJFO0FFajFCRjs7OztFRnMxQkU7QUN0MUJGOzs7O0VEMjFCRTtBQy9yQkY7Ozs7RURvc0JFO0FDMXFCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDh4QkM7QVdwOUJEOzs7O0VYeTlCRTtBRXo5QkY7Ozs7RUY4OUJFO0FDOTlCRjs7OztFRG0rQkU7QUN2MEJGOzs7O0VENDBCRTtBQ2x6QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RzNkJDO0FRNWxDRDs7OztFUmltQ0U7QUVqbUNGOzs7O0VGc21DRTtBQ3RtQ0Y7Ozs7RUQybUNFO0FDLzhCRjs7OztFRG85QkU7QUMxN0JGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEOGlDQztBTXpwQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S042cUNDO0FZcHZDSDtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVztFQUNYLGtCQ0cyQixFQUFBO0FQOEQzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLTndzQ0M7QVkvd0NIO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxXQUFXO0VBQ1gsa0JDa0UyQixFQUFBO0FQRDNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tObXVDQztBWTF5Q0g7RUFDRSxVQUFVLEVBQUE7QUFHWjtFQUNFLFdBQVc7RUFDWCxrQkN3QjJCLEVBQUE7QVB5QzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tOOHZDQztBWXIwQ0g7RUFDRSxVQUFVLEVBQUE7QUFHWjtFQUNFLFdBQVc7RUFDWCxrQkM2QzJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXBzL2dtYXBzL2dtYXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKTtcbiRuYi10aGVtZXM6ICgpO1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogbnVsbDtcbiRuYi10aGVtZS1uYW1lOiAnZGVmYXVsdCc7XG4kbmItdGhlbWU6ICgpO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCk7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpO1xuXG4vLyBwdWJsaWMgdmFyaWFibGVzXG4kbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllczogZmFsc2UgIWdsb2JhbCAhZGVmYXVsdDtcbiRuYi1lbmFibGVkLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXM6ICgpICFnbG9iYWw7XG5cbi8vIHByaXZhdGUgdmFyaWFibGVzXG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuJG5iLXRoZW1lLW5hbWU6IG51bGwgIWdsb2JhbDtcbiRuYi10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnY29yZS92YXJpYW50cyc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvcmVnaXN0ZXInO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2luc3RhbGwnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2dldC12YWx1ZSc7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDsgfVxuXG4ubmItdGhlbWUtZGVmYXVsdCA6aG9zdCA6Om5nLWRlZXAgYWdtLW1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2LjU2MjVyZW07IH1cblxuLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWRhcmsgOmhvc3QgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDsgfVxuXG4ubmItdGhlbWUtZGFyayA6aG9zdCA6Om5nLWRlZXAgYWdtLW1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2LjU2MjVyZW07IH1cblxuLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwOyB9XG5cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgOjpuZy1kZWVwIGFnbS1tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNi41NjI1cmVtOyB9XG5cbi8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbi5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDsgfVxuXG4ubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IDo6bmctZGVlcCBhZ20tbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzYuNTYyNXJlbTsgfVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItc2Nyb2xsYmFycygkZmcsICRiZywgJHNpemUsICRib3JkZXItcmFkaXVzOiAkc2l6ZSAvIDIpIHtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICB9XG5cbiAgLy8gVE9ETzogcmVtb3ZlXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZnO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiZztcbn1cblxuQG1peGluIG5iLWhlYWRpbmdzKCRmcm9tOiAxLCAkdG86IDYpIHtcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcbiAgICBoI3skaX0ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LXN0YXR1c2VzKCkge1xuICBAcmV0dXJuICdwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbyc7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtc2l6ZXMoKSB7XG4gIEByZXR1cm4gJ3RpbnknLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2dpYW50Jztcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaGFwZXMoKSB7XG4gIEByZXR1cm4gJ3JlY3RhbmdsZScsICdzZW1pLXJvdW5kJywgJ3JvdW5kJztcbn1cblxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZXZhLW1hcHBpbmc6IChcblxuICAvKiBDb21wb25lbnRzIG1hcHBpbmdzIC0gbWFwcyB0aGVtZSB2YXJpYWJsZXMgb250byBjb21wb25lbnQgdmFyaWFibGVzICovXG5cbiAgbGluay10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGxpbmstdGV4dC1mb2N1cy1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICBsaW5rLXRleHQtaG92ZXItY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICBjYXJkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2FyZC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjYXJkLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNhcmQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNhcmQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLFxuICBjYXJkLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FyZC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjYXJkLXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgY2FyZC1zaGFkb3c6IHNoYWRvdyxcbiAgY2FyZC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjYXJkLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGNhcmQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBjYXJkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhcmQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuXG4gIGNhcmQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBjYXJkLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBoZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBoZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaGVhZGVyLWhlaWdodDogNC43NXJlbSxcbiAgaGVhZGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGhlYWRlci1zaGFkb3c6IHNoYWRvdyxcblxuICBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBmb290ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBmb290ZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgZm9vdGVyLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGZvb3Rlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBmb290ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgbGF5b3V0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxheW91dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgbGF5b3V0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxheW91dC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGF5b3V0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtbWluLWhlaWdodDogMTAwdmgsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiA5MDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1pbi13aWR0aDogMzAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGg6IDE5MjBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcbiAgbGF5b3V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgbGF5b3V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNpZGViYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2lkZWJhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc2lkZWJhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzaWRlYmFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzaWRlYmFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWhlaWdodDogMTAwdmgsXG4gIHNpZGViYXItd2lkdGg6IDE2cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNXJlbSxcbiAgc2lkZWJhci1wYWRkaW5nOiAxLjI1cmVtLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1mb290ZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItc2hhZG93OiBzaGFkb3csXG4gIHNpZGViYXItbWVudS1pdGVtLWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzaWRlYmFyLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBtZW51LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBtZW51LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBtZW51LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgbWVudS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG5cbiAgbWVudS1ncm91cC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1pdGVtLWhvdmVyLWN1cnNvcjogcG9pbnRlcixcbiAgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuXG4gIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG4gIG1lbnUtaXRlbS1pY29uLXdpZHRoOiAxLjVyZW0sXG5cbiAgbWVudS1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIG1lbnUtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBtZW51LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS1zdWJtZW51LW1hcmdpbjogMCxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAgMS4yNXJlbSxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IG1lbnUtaXRlbS1wYWRkaW5nLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICB0YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFic2V0LXRhYi1hY3RpdmUtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICB0YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgdGFic2V0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHRhYnNldC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICB0YWJzZXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICB0YWJzZXQtY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LWNvbnRlbnQtcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRhYnNldC1jb250ZW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICB0YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICByb3V0ZS10YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHJvdXRlLXRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICB1c2VyLXBpY3R1cmUtYm94LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB1c2VyLXBpY3R1cmUtYm94LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHVzZXItaW5pdGlhbHMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdXNlci1uYW1lLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItbmFtZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1uYW1lLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLXRpdGxlLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuNXJlbSxcbiAgdXNlci1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHVzZXItcm91bmQtYm9yZGVyLXJhZGl1czogNTAlLFxuXG4gIHVzZXItdGlueS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHVzZXItdGlueS13aWR0aDogMS4yNXJlbSxcbiAgdXNlci10aW55LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG5cbiAgdXNlci1zbWFsbC1oZWlnaHQ6IDEuNXJlbSxcbiAgdXNlci1zbWFsbC13aWR0aDogMS41cmVtLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci1zbWFsbC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0td2lkdGg6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLWxhcmdlLWhlaWdodDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS13aWR0aDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItZ2lhbnQtaGVpZ2h0OiA0cmVtLFxuICB1c2VyLWdpYW50LXdpZHRoOiA0cmVtLFxuICB1c2VyLWdpYW50LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBwb3BvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHBvcG92ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHBvcG92ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgcG9wb3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgcG9wb3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuICBwb3BvdmVyLWFycm93LXNpemU6IDAuNjg3NXJlbSxcbiAgcG9wb3Zlci1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgY29udGV4dC1tZW51LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAwLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY29udGV4dC1tZW51LW1pbi13aWR0aDogMTByZW0sXG4gIGNvbnRleHQtbWVudS1tYXgtd2lkdGg6IDE1cmVtLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBzaGFkb3csXG5cbiAgYWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYWN0aW9ucy1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBhY3Rpb25zLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGFjdGlvbnMtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgYWN0aW9ucy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGFjdGlvbnMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYWN0aW9ucy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYWN0aW9ucy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgYWN0aW9ucy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBhY3Rpb25zLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYWN0aW9ucy10aW55LWhlaWdodDogMXJlbSxcbiAgYWN0aW9ucy10aW55LWljb24taGVpZ2h0OiBhY3Rpb25zLXRpbnktaGVpZ2h0LFxuICBhY3Rpb25zLXRpbnktcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBhY3Rpb25zLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICBhY3Rpb25zLXNtYWxsLWljb24taGVpZ2h0OiBhY3Rpb25zLXNtYWxsLWhlaWdodCxcbiAgYWN0aW9ucy1zbWFsbC1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1tZWRpdW0taGVpZ2h0OiAyLjI1cmVtLFxuICBhY3Rpb25zLW1lZGl1bS1pY29uLWhlaWdodDogYWN0aW9ucy1tZWRpdW0taGVpZ2h0LFxuICBhY3Rpb25zLW1lZGl1bS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBhY3Rpb25zLWxhcmdlLWhlaWdodDogMy41cmVtLFxuICBhY3Rpb25zLWxhcmdlLWljb24taGVpZ2h0OiBhY3Rpb25zLWxhcmdlLWhlaWdodCxcbiAgYWN0aW9ucy1sYXJnZS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIGFjdGlvbnMtZ2lhbnQtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtZ2lhbnQtaGVpZ2h0LFxuICBhY3Rpb25zLWdpYW50LXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuXG4gIHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlYXJjaC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzZWFyY2gtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgc2VhcmNoLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNlYXJjaC1leHRyYS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlYXJjaC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWFyY2gtdGV4dC1mb250LWZhbWlseTogdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHksXG4gIHNlYXJjaC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplLFxuICBzZWFyY2gtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodCxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VhcmNoLWluZm8tdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC1pbmZvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItZmc6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmc6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcblxuICBzbWFydC10YWJsZS1iZy1ldmVuOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNtYXJ0LXRhYmxlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW0sXG4gIHNtYXJ0LXRhYmxlLXNlcGFyYXRvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICBzbWFydC10YWJsZS1hY3Rpb24tYWRkLWVkaXQtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1hY3Rpb24tY2FuY2VsLWRlbGV0ZS1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcblxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3IsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtZmFtaWx5OiBidXR0b24tdGV4dC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtc2l6ZTogYnV0dG9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWxpbmUtaGVpZ2h0OiBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHRyYW5zcGFyZW50LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3IsXG5cbiAgdG9hc3RyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHRvYXN0ci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRvYXN0ci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB0b2FzdHItcGFkZGluZzogMXJlbSxcbiAgdG9hc3RyLXNoYWRvdzogc2hhZG93LFxuXG4gIHRvYXN0ci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2FzdHItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuXG4gIHRvYXN0ci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvYXN0ci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuXG4gIHRvYXN0ci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvYXN0ci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuXG4gIHRvYXN0ci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvYXN0ci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24taW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuXG4gIHRvYXN0ci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvYXN0ci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWhvdmVyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuXG4gIHRvYXN0ci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1ob3Zlci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtaG92ZXItZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuXG4gIGJ1dHRvbi1jdXJzb3I6IHBvaW50ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBidXR0b24tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgYnV0dG9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBidXR0b24tdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJ1dHRvbi1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgYnV0dG9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBidXR0b24tdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYnV0dG9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG4gIGJ1dHRvbi1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodCxcblxuICBidXR0b24tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJ1dHRvbi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGJ1dHRvbi1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZmlsbGVkLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZmlsbGVkLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLW91dGxpbmUtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tb3V0bGluZS10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWhvdmVyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWZvY3VzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8taG92ZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctZm9jdXMtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1ob3Zlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1hY3RpdmUtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWZvY3VzLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWZvY3VzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItaG92ZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1naG9zdC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWdob3N0LXNtYWxsLXBhZGRpbmc6IDAuNDM3NXJlbSAwLjg3NXJlbSxcbiAgYnV0dG9uLWdob3N0LW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMS4zNzVyZW0sXG5cbiAgYnV0dG9uLWdob3N0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1hY3RpdmUtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tZm9jdXMtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8taG92ZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWhvdmVyLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWFjdGl2ZS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1mb2N1cy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWhvdmVyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWhlcm8tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWhlcm8tYm9yZGVyLXdpZHRoOiAwLFxuICBidXR0b24taGVyby10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1oZXJvLXRpbnktcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbSxcbiAgYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIGJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW0sXG4gIGJ1dHRvbi1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIGJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDFyZW0gMS41cmVtLFxuXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby10ZXh0LXNoYWRvdzogc2hhZG93LFxuICBidXR0b24taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYmV2ZWwtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWdsb3ctY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24taGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTMwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1zdWNjZXNzLWJldmVsLWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1nbG93LWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8taW5mby1iZXZlbC1jb2xvcjogY29sb3ItaW5mby02MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZ2xvdy1jb2xvcjogY29sb3ItaW5mby03MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBidXR0b24taGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8taW5mby1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby02MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYmV2ZWwtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWdsb3ctY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24taGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy03MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTMwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1iZXZlbC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWdsb3ctY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCxcbiAgaW5wdXQtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgaW5wdXQtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgaW5wdXQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgaW5wdXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcblxuICBpbnB1dC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGlucHV0LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcblxuICBpbnB1dC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaW5wdXQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuXG4gIGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcblxuICBpbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBpbnB1dC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgaW5wdXQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG5cbiAgaW5wdXQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaW5wdXQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuXG4gIGlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGlucHV0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcblxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBpbnB1dC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBpbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXRpbnktcGFkZGluZzogMC4xODc1cmVtIDEuMTI1cmVtLFxuICBpbnB1dC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxLjEyNXJlbSxcbiAgaW5wdXQtc21hbGwtbWF4LXdpZHRoOiAyMHJlbSxcblxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxLjEyNXJlbSxcbiAgaW5wdXQtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgaW5wdXQtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgaW5wdXQtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMTI1cmVtLFxuICBpbnB1dC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIGNoZWNrYm94LWhlaWdodDogMS4xMjVyZW0sXG4gIGNoZWNrYm94LXdpZHRoOiAxLjEyNXJlbSxcbiAgY2hlY2tib3gtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci01LFxuICBjaGVja2JveC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjaGVja2JveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogM3B4LFxuICBjaGVja2JveC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBjaGVja2JveC1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBjaGVja2JveC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIGNoZWNrYm94LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBjaGVja2JveC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcblxuICBjaGVja2JveC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGNoZWNrYm94LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGNoZWNrYm94LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGVja2JveC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC1wcmltYXJ5LTcwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcblxuICBjaGVja2JveC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC1zdWNjZXNzLTcwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcblxuICBjaGVja2JveC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby03MDAsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC1pbmZvLTcwMCxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcblxuICBjaGVja2JveC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICBjaGVja2JveC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy03MDAsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC13YXJuaW5nLTcwMCxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTcwMCxcblxuICBjaGVja2JveC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTUwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC01MDAsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjaGVja2JveC1kYW5nZXItNzAwLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG5cbiAgYmFkZ2UtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYmFkZ2UtdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGJhZGdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSxcbiAgYmFkZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJhZGdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGJhZGdlLXBhZGRpbmc6IDAuMjVyZW0gMC40cmVtLFxuXG4gIGJhZGdlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBiYWRnZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zLFxuICBwcm9ncmVzcy1iYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgcHJvZ3Jlc3MtYmFyLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1zbWFsbC1oZWlnaHQ6IDEuMjVyZW0sXG4gIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS1oZWlnaHQ6IDEuNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtaGVpZ2h0OiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBwcm9ncmVzcy1iYXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1pbmZvLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgYWxlcnQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBhbGVydC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhbGVydC1ib3R0b20tbWFyZ2luOiAxLjVyZW0sXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGFsZXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFsZXJ0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhbGVydC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFsZXJ0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGFsZXJ0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgYWxlcnQtY2xvc2FibGUtc3RhcnQtcGFkZGluZzogM3JlbSxcblxuICBhbGVydC10aW55LWhlaWdodDogNC41cmVtLFxuICBhbGVydC1zbWFsbC1oZWlnaHQ6IDUuNzVyZW0sXG4gIGFsZXJ0LW1lZGl1bS1oZWlnaHQ6IDdyZW0sXG4gIGFsZXJ0LW1lZGl1bS1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1sYXJnZS1oZWlnaHQ6IDguMjVyZW0sXG4gIGFsZXJ0LWdpYW50LWhlaWdodDogOS41cmVtLFxuXG4gIGFsZXJ0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBhbGVydC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGFsZXJ0LWFjY2VudC1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuXG4gIGFsZXJ0LW91dGxpbmUtd2lkdGg6IDFweCxcbiAgYWxlcnQtb3V0bGluZS1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LW91dGxpbmUtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1vdXRsaW5lLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtb3V0bGluZS13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LW91dGxpbmUtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcblxuICBjaGF0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2hhdC1ib3JkZXI6IG5vbmUsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2hhdC1zaGFkb3c6IHNoYWRvdyxcbiAgY2hhdC1wYWRkaW5nOiAxcmVtIDEuMjVyZW0sXG4gIGNoYXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBjaGFydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNoYXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGNoYXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgY2hhdC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBjaGF0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBjaGF0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIGNoYXQtaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2hhdC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBjaGF0LXRpbnktaGVpZ2h0OiAxMy41cmVtLFxuICBjaGF0LXNtYWxsLWhlaWdodDogMjFyZW0sXG4gIGNoYXQtbWVkaXVtLWhlaWdodDogMjguNXJlbSxcbiAgY2hhdC1sYXJnZS1oZWlnaHQ6IDM2cmVtLFxuICBjaGF0LWdpYW50LWhlaWdodDogNDMuNXJlbSxcblxuICBjaGF0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGF0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGF0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGF0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGF0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hhdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGNoYXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2hhdC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBjaGF0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgY2hhdC1tZXNzYWdlLWJhY2tncm91bmQ6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hhdC1tZXNzYWdlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtNTAwLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWZpbGUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM3LCAyNDAsIDI0NSwgMC41KSwgLy8gY29sb3ItYmFzaWMtMjAwIHdpdGggMC41IG9wYWNpdHlcbiAgc3Bpbm5lci1jaXJjbGUtZmlsbGVkLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNwaW5uZXItY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgc3Bpbm5lci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzcGlubmVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzcGlubmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNwaW5uZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNwaW5uZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHNwaW5uZXItaW5mby1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNwaW5uZXItaW5mby1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHNwaW5uZXItZGFuZ2VyLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItaGVpZ2h0LXRpbnk6IDEuNXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtc21hbGw6IDEuNzVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LW1lZGl1bTogMnJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtbGFyZ2U6IDIuMjVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LWdpYW50OiAyLjVyZW0sXG5cbiAgc3RlcHBlci1zdGVwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHN0ZXBwZXItc3RlcC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgc3RlcHBlci1zdGVwLWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG5cbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItcmFkaXVzOiA1MCUsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aDogMnJlbSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc3RlcHBlci1jb25uZWN0b3ItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzdGVwcGVyLWNvbm5lY3Rvci1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzdGVwcGVyLWhvcml6b250YWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcbiAgc3RlcHBlci12ZXJ0aWNhbC1jb25uZWN0b3ItbWFyZ2luOiAxcmVtLFxuXG4gIHN0ZXBwZXItc3RlcC1jb250ZW50LXBhZGRpbmc6IDEuMjVyZW0sXG5cbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGFjY29yZGlvbi1wYWRkaW5nOiAxLjI1cmVtLFxuICBhY2NvcmRpb24tc2hhZG93OiBzaGFkb3csXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBsaXN0LWl0ZW0tZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgbGlzdC1pdGVtLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcbiAgbGlzdC1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxpc3QtaXRlbS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGxpc3QtaXRlbS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGlzdC1pdGVtLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGlzdC1pdGVtLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci13aWR0aDogMTkuMjVyZW0sXG4gIGNhbGVuZGFyLWJvZHktaGVpZ2h0OiAyNS42MjVyZW0sXG4gIGNhbGVuZGFyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNhbGVuZGFyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWhlYWRpbmctNi1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIGNhbGVuZGFyLWhlYWRlci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWhlYWRlci1zdWItdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLWJ1dHRvbi13aWR0aDogMTByZW0sXG5cbiAgY2FsZW5kYXItY2VsbC1pbmFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWluLXJhbmdlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMjAwLFxuICBjYWxlbmRhci1jZWxsLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgY2FsZW5kYXItY2VsbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2Vla2RheS1iYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS1ob2xpZGF5LXRleHQtY29sb3I6IGNhbGVuZGFyLXdlZWtkYXktdGV4dC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtd2lkdGgsXG5cbiAgY2FsZW5kYXItd2Vla251bWJlci1iYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1oZWlnaHQ6IGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXdpZHRoOiBjYWxlbmRhci13ZWVrZGF5LXdpZHRoLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyMS44NzVyZW0sXG4gIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yODgpLFxuXG4gIHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zLFxuICB0b29sdGlwLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYm9yZGVyLXN0eWxlOiBkYXNoZWQsXG4gIHRvb2x0aXAtYm9yZGVyLXdpZHRoOiAwLFxuICB0b29sdGlwLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvb2x0aXAtcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHRvb2x0aXAtdGV4dC1jb2xvcjogdGV4dC1hbHRlcm5hdGUtY29sb3IsXG4gIHRvb2x0aXAtdGV4dC1mb250LWZhbWlseTogdGV4dC1jYXB0aW9uLTItZm9udC1mYW1pbHksXG4gIHRvb2x0aXAtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgdG9vbHRpcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgdG9vbHRpcC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgdG9vbHRpcC1tYXgtd2lkdGg6IDE2cmVtLFxuXG4gIHRvb2x0aXAtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvb2x0aXAtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvb2x0aXAtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvb2x0aXAtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvb2x0aXAtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b29sdGlwLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG5cbiAgc2VsZWN0LWN1cnNvcjogcG9pbnRlcixcbiAgc2VsZWN0LWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcbiAgc2VsZWN0LW1pbi13aWR0aDogMTNyZW0sXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtbWF4LWhlaWdodDogMjByZW0sXG4gIHNlbGVjdC1vcHRpb25zLWxpc3Qtc2hhZG93OiBzaGFkb3csXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1ib3JkZXItd2lkdGg6IDAsXG4gIHNlbGVjdC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBzZWxlY3Qtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcblxuICBzZWxlY3QtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgc2VsZWN0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcblxuICBzZWxlY3Qtb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW9wdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW9wdGlvbi1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHNlbGVjdC1vcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3B0aW9uLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgc2VsZWN0LW9wdGlvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vcHRpb24taG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tMi1mb250LXNpemUsXG4gIHNlbGVjdC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtdGlueS1tYXgtd2lkdGg6IDIwcmVtLFxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LWxhcmdlLW1heC13aWR0aDogMzByZW0sXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBzZWxlY3QtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIHNlbGVjdC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgc2VsZWN0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgc2VsZWN0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aDogMXB4LFxuICBzZWxlY3Qtb3V0bGluZS1pY29uLWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxLjEyNXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDEuMTI1cmVtLFxuICBzZWxlY3Qtb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDEuMTI1cmVtLFxuICBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjEyNXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG5cbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kaXNhYmxlZCxcblxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLFxuXG4gIHNlbGVjdC1vcHRpb24tb3V0bGluZS10aW55LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXRpbnktcGFkZGluZyxcbiAgc2VsZWN0LW9wdGlvbi1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXNtYWxsLXBhZGRpbmcsXG4gIHNlbGVjdC1vcHRpb24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmcsXG4gIHNlbGVjdC1vcHRpb24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nLFxuICBzZWxlY3Qtb3B0aW9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZyxcblxuICBzZWxlY3Qtb3Blbi1vdXRsaW5lLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vcGVuLW91dGxpbmUtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItc3R5bGU6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZSxcbiAgc2VsZWN0LW91dGxpbmUtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGgsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcblxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLW91dGxpbmUtdGlueS1zdGFydC1wYWRkaW5nOiAxLjI1cmVtLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLW91dGxpbmUtc21hbGwtc3RhcnQtcGFkZGluZzogMS43NXJlbSxcbiAgc2VsZWN0LWdyb3VwLW9wdGlvbi1vdXRsaW5lLW1lZGl1bS1zdGFydC1wYWRkaW5nOiAyLjI1cmVtLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLW91dGxpbmUtbGFyZ2Utc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgc2VsZWN0LWdyb3VwLW9wdGlvbi1vdXRsaW5lLWdpYW50LXN0YXJ0LXBhZGRpbmc6IDIuNzVyZW0sXG5cbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLWJvcmRlci1jb2xvcjogYm9yZGVyLXByaW1hcnktY29sb3ItMixcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG5cbiAgc2VsZWN0LWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci13aWR0aDogMXB4LFxuICBzZWxlY3QtZmlsbGVkLWljb24tY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxLjEyNXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxLjEyNXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMTI1cmVtLFxuXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kYW5nZXItZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vcHRpb24tZmlsbGVkLXRpbnktcGFkZGluZzogc2VsZWN0LWZpbGxlZC10aW55LXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24tZmlsbGVkLXRpbnktcGFkZGluZy1zdGFydDogMS4xMjVyZW0sXG4gIHNlbGVjdC1vcHRpb24tZmlsbGVkLXNtYWxsLXBhZGRpbmc6IHNlbGVjdC1maWxsZWQtc21hbGwtcGFkZGluZyxcbiAgc2VsZWN0LWdyb3VwLW9wdGlvbi1maWxsZWQtc21hbGwtcGFkZGluZy1zdGFydDogMS43NXJlbSxcbiAgc2VsZWN0LW9wdGlvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IHNlbGVjdC1maWxsZWQtbWVkaXVtLXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nLXN0YXJ0OiAyLjI1cmVtLFxuICBzZWxlY3Qtb3B0aW9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiBzZWxlY3QtZmlsbGVkLWxhcmdlLXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24tZmlsbGVkLWxhcmdlLXBhZGRpbmctc3RhcnQ6IDIuMjVyZW0sXG4gIHNlbGVjdC1vcHRpb24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZyxcbiAgc2VsZWN0LWdyb3VwLW9wdGlvbi1maWxsZWQtZ2lhbnQtcGFkZGluZy1zdGFydDogMi43NXJlbSxcblxuICBzZWxlY3Qtb3B0aW9ucy1saXN0LWZpbGxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1wcmltYXJ5LWNvbG9yLTIsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1maWxsZWQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBzZWxlY3Qtb3B0aW9ucy1saXN0LWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgc2VsZWN0LW9wdGlvbnMtbGlzdC1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcblxuICBzZWxlY3QtaGVyby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1oZXJvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1oZXJvLWJvcmRlci13aWR0aDogMCxcbiAgc2VsZWN0LWhlcm8taWNvbi1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LWhlcm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcblxuICBzZWxlY3QtaGVyby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXRpbnktcGFkZGluZzogMC4xODc1cmVtIDEuMTI1cmVtLFxuICBzZWxlY3QtaGVyby1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMS4xMjVyZW0sXG4gIHNlbGVjdC1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgc2VsZWN0LWhlcm8tZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMTI1cmVtLFxuXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktODAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtcHJpbWFyeS1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy04MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTMwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1zdWNjZXNzLWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIHNlbGVjdC1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTgwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWluZm8tZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctODAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtd2FybmluZy1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItODAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItMzAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW9wdGlvbi1oZXJvLXRpbnktcGFkZGluZzogc2VsZWN0LWhlcm8tdGlueS1wYWRkaW5nLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLWhlcm8tdGlueS1wYWRkaW5nLXN0YXJ0OiAxLjEyNXJlbSxcbiAgc2VsZWN0LW9wdGlvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IHNlbGVjdC1oZXJvLXNtYWxsLXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24taGVyby1zbWFsbC1wYWRkaW5nLXN0YXJ0OiAxLjc1cmVtLFxuICBzZWxlY3Qtb3B0aW9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IHNlbGVjdC1oZXJvLW1lZGl1bS1wYWRkaW5nLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLWhlcm8tbWVkaXVtLXBhZGRpbmctc3RhcnQ6IDIuMjVyZW0sXG4gIHNlbGVjdC1vcHRpb24taGVyby1sYXJnZS1wYWRkaW5nOiBzZWxlY3QtaGVyby1sYXJnZS1wYWRkaW5nLFxuICBzZWxlY3QtZ3JvdXAtb3B0aW9uLWhlcm8tbGFyZ2UtcGFkZGluZy1zdGFydDogMi4yNXJlbSxcbiAgc2VsZWN0LW9wdGlvbi1oZXJvLWdpYW50LXBhZGRpbmc6IHNlbGVjdC1oZXJvLWdpYW50LXBhZGRpbmcsXG4gIHNlbGVjdC1ncm91cC1vcHRpb24taGVyby1naWFudC1wYWRkaW5nLXN0YXJ0OiAyLjc1cmVtLFxuXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1ib3JkZXItY29sb3I6IGJvcmRlci1wcmltYXJ5LWNvbG9yLTIsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtaGVyby1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuXG4gIGRhdGVwaWNrZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgZGF0ZXBpY2tlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6IDAsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IHNoYWRvdyxcbiAgZGF0ZXBpY2tlci1hcnJvdy1zaXplOiAwLjY4NzVyZW0sXG5cbiAgcmFkaW8td2lkdGg6IDEuMTI1cmVtLFxuICByYWRpby1oZWlnaHQ6IDEuMTI1cmVtLFxuICByYWRpby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHJhZGlvLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtNTAwLFxuICByYWRpby1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICByYWRpby1ib3JkZXItd2lkdGg6IDFweCxcbiAgcmFkaW8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICByYWRpby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcmFkaW8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICByYWRpby10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHJhZGlvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHJhZGlvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgcmFkaW8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICByYWRpby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgcmFkaW8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG5cbiAgcmFkaW8tc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuXG4gIHJhZGlvLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHJhZGlvLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIHJhZGlvLXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICByYWRpby13YXJuaW5nLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcblxuICByYWRpby1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcmFkaW8tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIHJhZGlvLWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwLFxuICByYWRpby1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcblxuICByYWRpby1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICByYWRpby1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICByYWRpby1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8taW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgcmFkaW8taW5mby1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgcmFkaW8taW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcbiAgcmFkaW8taW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHJhZGlvLWluZm8taG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG5cbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHRyZWUtZ3JpZC1yb3ctbWluLWhlaWdodDogMnJlbSxcbiAgdHJlZS1ncmlkLWNlbGwtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcblxuICB0cmVlLWdyaWQtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1saW5lLWhlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1yb3ctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCxcblxuICBpY29uLWZvbnQtc2l6ZTogMS4yNXJlbSxcbiAgaWNvbi1saW5lLWhlaWdodDogMSxcbiAgaWNvbi13aWR0aDogMWVtLFxuICBpY29uLWhlaWdodDogMWVtLFxuICBpY29uLXN2Zy12ZXJ0aWNhbC1hbGlnbjogdG9wLFxuICBpY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaWNvbi1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBpY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaWNvbi1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuXG4gIHRvZ2dsZS1oZWlnaHQ6IDEuODc1cmVtLFxuICB0b2dnbGUtd2lkdGg6IDMuMTI1cmVtLFxuICB0b2dnbGUtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRvZ2dsZS1ib3JkZXItcmFkaXVzOiAxMDBweCxcbiAgdG9nZ2xlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtNTAwLFxuICB0b2dnbGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICB0b2dnbGUtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgdG9nZ2xlLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHRvZ2dsZS1zd2l0Y2hlci1zaXplOiAxLjc1cmVtLFxuICB0b2dnbGUtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICB0b2dnbGUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHRvZ2dsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHRvZ2dsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHRvZ2dsZS1jdXJzb3I6IHBvaW50ZXIsXG5cbiAgdG9nZ2xlLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIHRvZ2dsZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICB0b2dnbGUtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICB0b2dnbGUtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDAsXG4gIHRvZ2dsZS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRvZ2dsZS1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0b2dnbGUtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgdG9nZ2xlLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICB0b2dnbGUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuXG4gIHRvZ2dsZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxuICB0b2dnbGUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNDAwLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDAsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG5cbiAgdG9nZ2xlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDAsXG4gIHRvZ2dsZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC00MDAsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby03MDAsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICB0b2dnbGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcblxuICB0b2dnbGUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNDAwLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuXG4gIHRvZ2dsZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgdG9nZ2xlLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItNzAwLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMCxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcblxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lcy9tYXBwaW5nJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPT0gMCkge1xuICAgIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJG5iLXRoZW1lcyB7XG4gICAgICAkbmItZW5hYmxlZC10aGVtZXM6IGFwcGVuZCgkbmItZW5hYmxlZC10aGVtZXMsICR0aGVtZS1uYW1lKSAhZ2xvYmFsO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRuYi1lbmFibGVkLXRoZW1lcztcbn1cblxuQGZ1bmN0aW9uIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKSB7XG4gICR0aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuICBAcmV0dXJuIG50aCgkdGhlbWVzLCBsZW5ndGgoJHRoZW1lcykpO1xufVxuXG5AZnVuY3Rpb24gbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLWV4cG9ydCwgJHBhcmVudC1uYW1lKTtcbiAgQGlmICgkcGFyZW50LXRoZW1lICE9IG51bGwpIHtcbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRwYXJlbnQtdGhlbWUsIGRhdGEpLCAkdGhlbWUpO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6IChcbiAgICBkYXRhOiAkdGhlbWUsXG4gICAgcGFyZW50OiAkcGFyZW50LW5hbWUsXG4gICk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsICR0aGVtZS1kYXRhKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYW1lKSB7XG4gICR0aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkbmFtZSk7XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgb3B0aW1hbCBwbGFjZVxuICBAaWYgKCR0aGVtZSA9PSBudWxsKSB7XG4gICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiB0aGVtZSBgJyArICRuYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgbmItcmVnaXN0ZXItdGhlbWVgIGZ1bmN0aW9uLic7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIFJlZ2lzdGVycyBhIG5ldyB0aGVtZVxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gIEBpZiAoJG5iLXRoZW1lLWV4cG9ydC1tb2RlID09IHRydWUpIHtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG4gIEBpZiAoJHBhcmVudC1uYW1lICE9IG51bGwpIHtcbiAgICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRwYXJlbnQtbmFtZSk7XG4gICAgQGlmICgkcGFyZW50LXRoZW1lID09IG51bGwpIHtcbiAgICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogcGFyZW50IHRoZW1lIGAnICsgJHBhcmVudC1uYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgb3IgaW1wb3J0ZWQuJztcbiAgICB9XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UoJHBhcmVudC10aGVtZSwgJHRoZW1lKTtcbiAgfVxuICAkdGhlbWU6IG1hcC1tZXJnZSgkZXZhLW1hcHBpbmcsICR0aGVtZSk7XG4gICRuYi10aGVtZXM6IG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICBAcmV0dXJuICRuYi10aGVtZXM7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgJHRoZW1lKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG5cbiAgICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAgIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnIGFuZCBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKSkge1xuICAgICAgICAtLSN7JHZhcn06IHZhcigtLSN7JHZhbHVlfSk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLS0jeyR2YXJ9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdwcmUtcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogbmItcHJvY2Vzcy10aGVtZShuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIC8vIEBicmVha2luZy1jaGFuZ2UgNS4wLjBcbiAgOmhvc3Qge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgJGVuYWJsZWQtdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkZW5hYmxlZC10aGVtZXMge1xuXG4gICAgQGluY2x1ZGUgbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGNvbXBvbmVudCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgfSBAZWxzZSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIEBjb250ZW50O1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpO1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBnbG9iYWwgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG5AbWl4aW4gbmItaW5zdGFsbCgpIHtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gICRwYXJlbnQtdmFsdWU6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gIEBpZiAoJHBhcmVudC12YWx1ZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICRwYXJlbnQtdmFsdWUpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cbkBmdW5jdGlvbiBuYi1wcm9jZXNzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJvY2Vzc2VkLXRoZW1lOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHByb2Nlc3NlZC10aGVtZTogbWFwLXNldCgkcHJvY2Vzc2VkLXRoZW1lLCAka2V5LCBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuICBAcmV0dXJuICRwcm9jZXNzZWQtdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9IG51bGwpIHtcbiAgICBAcmV0dXJuICRuYi10aGVtZS1uYW1lO1xuICB9XG5cbiAgQHJldHVybiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCk7XG59XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG5cbiAgJHZhbHVlOiAoKTtcblxuICAvLyBpbiBjYXNlIG9mIGNzcyBjdXN0b20gcHJvcGVydGllcyAtIGp1c3QgcmV0dXJucyB2YXIoLS12YXItbmFtZSkgLSB0aGUgcmVzdCBpcyBhIGJyb3dzZXIgam9iXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMgPT0gdHJ1ZSkge1xuICAgIC8vIHRoZXJlIGlzIG5vIHdheSB0byBjaGVjayBpZiB2YXJpYWJsZSBleGlzdHMgYXMgY3VycmVudCBleGVjdXRpb24gY29udGV4dCBpcyBvdXRzaWRlIG9mIHBhcnRpY3VsYXIgdGhlbWVcbiAgICAvLyBiZWNhdXNlIHdlIHByb2Nlc3MgY3NzIGluIHRoaXMgbW9kZSBvbmx5IG9uY2UhIChhbmQgbm90IGZvciBlYWNoIHRoZW1lKVxuICAgICR2YWx1ZTogdmFyKC0tI3ska2V5fSk7XG4gIH0gQGVsc2Uge1xuICAgIC8vIGluIGEgcHJlcHJvY2VzcyBtb2RlIChuYi1pbnN0YWxsLWdsb2JhbCBjYWxsKSBnZXQgcmVhZHkgdmFsdWUgZnJvbSAkbmItcHJvY2Vzc2VkLXRoZW1lIHZhcmlhYmxlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdwcmUtcHJvY2VzcycpIHtcbiAgICAgICR2YWx1ZTogbWFwLWdldCgkbmItcHJvY2Vzc2VkLXRoZW1lLCAka2V5KTtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UgbGF6aWx5IHNlYXJjaCBmb3IgdmFyaWFibGUgdmFsdWVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ2xhenktcHJvY2VzcycpIHtcblxuICAgICAgJG5iLXRoZW1lLW5hbWU6IGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKTtcblxuICAgICAgJHRoZW1lOiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmItdGhlbWUtbmFtZSk7XG4gICAgICAkdmFsdWU6IG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksIG1hcC1nZXQoJHRoZW1lLCAka2V5KSk7XG4gICAgfVxuICB9XG5cbiAgQGlmICgkdmFsdWUgPT0gbnVsbCkge1xuICAgIEB3YXJuICdOZWJ1bGFyIFRoZW1lOiBgbmItdGhlbWUoKWAgY2Fubm90IGZpbmQgdmFsdWUgZm9yIGtleSBgJyArICRrZXkgKyAnYCBmb3IgdGhlbWUgYCcrICRuYi10aGVtZS1uYW1lICsnYCc7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcblxuICAvKipcbiAgICogU2FzcyBtYXAgY29udGFpbnMgYSBsaXN0IG9mIGFsbCBUaGVtZSB2YXJpYWJsZXMgYW5kIGFsc28gdGhlaXIgbWFwcGluZ3MgaW50byBDb21wb25lbnQgdmFyaWFibGVzXG4gICAqIEEgdGhlbWUgY29uc2lzdHMgb2YgYSBsaXN0IG9mIGNvbG9ycywgYmFja2dyb3VuZHMsIGJvcmRlcnMsIHRleHQgc3R5bGVzIGFuZCBzdXBwb3J0aW5nIHZhcmlhYmxlcy5cbiAgICovXG5cblxuICAvKiBTdGF0dXMgY29sb3JzOiBwcmltYXJ5LCBzdWNjZXNzLCBpbmZvLCB3YXJuaW5nLCBkYW5nZXIgLSBmb3IgY29sb3JlZCBlbGVtZW50cyAoYnV0dG9ucywgZXRjKSAqL1xuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZjJmNmZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2Q5ZTRmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNhNmMxZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjNTk4YmZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogIzMzNjZmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICMyNzRiZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjMWEzNGI4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzEwMjY5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMwOTFjN2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtMTAwOiAjZjBmZmY1LFxuICBjb2xvci1zdWNjZXNzLTIwMDogI2NjZmNlMyxcbiAgY29sb3Itc3VjY2Vzcy0zMDA6ICM4Y2ZhYzcsXG4gIGNvbG9yLXN1Y2Nlc3MtNDAwOiAjMmNlNjliLFxuICBjb2xvci1zdWNjZXNzLTUwMDogIzAwZDY4ZixcbiAgY29sb3Itc3VjY2Vzcy02MDA6ICMwMGI4ODcsXG4gIGNvbG9yLXN1Y2Nlc3MtNzAwOiAjMDA5OTdhLFxuICBjb2xvci1zdWNjZXNzLTgwMDogIzAwN2Q2YyxcbiAgY29sb3Itc3VjY2Vzcy05MDA6ICMwMDRhNDUsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMDgpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4xNiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjI0KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMzIpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuNDgpLFxuXG4gIGNvbG9yLWluZm8tMTAwOiAjZjJmOGZmLFxuICBjb2xvci1pbmZvLTIwMDogI2M3ZTJmZixcbiAgY29sb3ItaW5mby0zMDA6ICM5NGNiZmYsXG4gIGNvbG9yLWluZm8tNDAwOiAjNDJhYWZmLFxuICBjb2xvci1pbmZvLTUwMDogIzAwOTVmZixcbiAgY29sb3ItaW5mby02MDA6ICMwMDZmZDYsXG4gIGNvbG9yLWluZm8tNzAwOiAjMDA1N2MyLFxuICBjb2xvci1pbmZvLTgwMDogIzAwNDFhOCxcbiAgY29sb3ItaW5mby05MDA6ICMwMDI4ODUsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMDgpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4xNiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMzIpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAxNDksIDI1NSwgMC40KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXdhcm5pbmctMTAwOiAjZmZmZGYyLFxuICBjb2xvci13YXJuaW5nLTIwMDogI2ZmZjFjMixcbiAgY29sb3Itd2FybmluZy0zMDA6ICNmZmU1OWUsXG4gIGNvbG9yLXdhcm5pbmctNDAwOiAjZmZjOTRkLFxuICBjb2xvci13YXJuaW5nLTUwMDogI2ZmYWEwMCxcbiAgY29sb3Itd2FybmluZy02MDA6ICNkYjhiMDAsXG4gIGNvbG9yLXdhcm5pbmctNzAwOiAjYjg2ZTAwLFxuICBjb2xvci13YXJuaW5nLTgwMDogIzk0NTQwMCxcbiAgY29sb3Itd2FybmluZy05MDA6ICM3MDNjMDAsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMDgpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4xNiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjI0KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMzIpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNDgpLFxuXG4gIGNvbG9yLWRhbmdlci0xMDA6ICNmZmYyZjIsXG4gIGNvbG9yLWRhbmdlci0yMDA6ICNmZmQ2ZDksXG4gIGNvbG9yLWRhbmdlci0zMDA6ICNmZmE4YjQsXG4gIGNvbG9yLWRhbmdlci00MDA6ICNmZjcwOGQsXG4gIGNvbG9yLWRhbmdlci01MDA6ICNmZjNkNzEsXG4gIGNvbG9yLWRhbmdlci02MDA6ICNkYjJjNjYsXG4gIGNvbG9yLWRhbmdlci03MDA6ICNiODFkNWIsXG4gIGNvbG9yLWRhbmdlci04MDA6ICM5NDEyNGUsXG4gIGNvbG9yLWRhbmdlci05MDA6ICM3MDA5NDAsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMDgpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4xNiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjI0KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMzIpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuNDgpLFxuXG4gIC8qIEJhc2ljIGNvbG9ycyAtIGZvciBiYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyBhbmQgdGV4dHMgKi9cblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjlmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZWRmMWY3LFxuICBjb2xvci1iYXNpYy00MDA6ICNlNGU5ZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2M1Y2VlMCxcbiAgY29sb3ItYmFzaWMtNjAwOiAjOGY5YmIzLFxuICBjb2xvci1iYXNpYy03MDA6ICMyZTNhNTksXG4gIGNvbG9yLWJhc2ljLTgwMDogIzIyMmI0NSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMTkyMDM4LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMTUxYTMwLFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTAxNDI2LFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDAsIDAsIDAuMjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAwLCAwLCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMCwgMCwgMC40KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMCwgMCwgMC40OCksXG5cbiAgLyogU3RhdHVzIGNvbG9ycyBzdGF0ZXMgLSBmb2N1cywgaG92ZXIsIGRlZmF1bHQsIGFjdGl2ZSwgZGlzYWJsZWQgICovXG5cbiAgY29sb3ItcHJpbWFyeS1mb2N1czogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXI6IGNvbG9yLXByaW1hcnktNDAwLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZTogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQ6IGNvbG9yLXByaW1hcnktMzAwLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkOiBjb2xvci1zdWNjZXNzLTIwMCxcblxuICBjb2xvci1pbmZvLWZvY3VzOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1ob3ZlcjogY29sb3ItaW5mby00MDAsXG4gIGNvbG9yLWluZm8tZGVmYXVsdDogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tYWN0aXZlOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1kaXNhYmxlZDogY29sb3ItaW5mby0zMDAsXG5cbiAgY29sb3Itd2FybmluZy1mb2N1czogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXI6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLWFjdGl2ZTogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQ6IGNvbG9yLXdhcm5pbmctMzAwLFxuXG4gIGNvbG9yLWRhbmdlci1mb2N1czogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyOiBjb2xvci1kYW5nZXItNDAwLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdDogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZTogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkOiBjb2xvci1kYW5nZXItMzAwLFxuXG4gIGNvbG9yLWJhc2ljLWZvY3VzOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkOiBjb2xvci1iYXNpYy0zMDAsXG5cbiAgLyogQmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgLSBiYXNpYywgYWx0ZXJuYXRpdmUgYW5kIHByaW1hcnkgICovXG5cbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLXByaW1hcnktNTAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0zOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLXByaW1hcnktODAwLFxuXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLWJhc2ljLTUwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMjogY29sb3ItYmFzaWMtNjAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0zOiBjb2xvci1iYXNpYy03MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNTogY29sb3ItYmFzaWMtOTAwLFxuXG4gIC8qIFRleHQgY29sb3JzIC0gZ2VuZXJhbCBhbmQgc3RhdHVzICovXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtOTAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICB0ZXh0LWhpbnQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcblxuICB0ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0ZXh0LXByaW1hcnktaG92ZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuXG4gIHRleHQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0ZXh0LXN1Y2Nlc3MtZm9jdXMtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG5cbiAgdGV4dC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRleHQtaW5mby1mb2N1cy1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdGV4dC1pbmZvLWhvdmVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcblxuICB0ZXh0LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0ZXh0LXdhcm5pbmctaG92ZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRleHQtd2FybmluZy1hY3RpdmUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuXG4gIHRleHQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGV4dC1kYW5nZXItZm9jdXMtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGV4dC1kYW5nZXItaG92ZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICB0ZXh0LWRhbmdlci1kaXNhYmxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcblxuICAvKiBGb250cyBhbmQgdGV4dCBzdHlsZXMgLSBoZWFkaW5ncywgc3VidGl0bGVzLCBwYXJhZ3JhcGhzLCBjYXB0aW9ucywgYnV0dG9uICovXG5cbiAgZm9udC1mYW1pbHktcHJpbWFyeTogdW5xdW90ZSgnT3BlbiBTYW5zLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtZmFtaWx5LXNlY29uZGFyeTogZm9udC1mYW1pbHktcHJpbWFyeSxcblxuICB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMS1mb250LXNpemU6IDIuMjVyZW0sXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0OiAzcmVtLFxuXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtc2l6ZTogMnJlbSxcbiAgdGV4dC1oZWFkaW5nLTItZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTItbGluZS1oZWlnaHQ6IDIuNXJlbSxcblxuICB0ZXh0LWhlYWRpbmctMy1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXNpemU6IDEuODc1cmVtLFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMy1saW5lLWhlaWdodDogMi41cmVtLFxuXG4gIHRleHQtaGVhZGluZy00LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy00LWZvbnQtc2l6ZTogMS42MjVyZW0sXG4gIHRleHQtaGVhZGluZy00LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy00LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy01LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy01LWZvbnQtc2l6ZTogMS4zNzVyZW0sXG4gIHRleHQtaGVhZGluZy01LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy01LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy02LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZTogMS4xMjVyZW0sXG4gIHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXNpemU6IDAuOTM3NXJlbSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplOiAwLjkzNzVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0OiAxLjI1cmVtLFxuXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodDogMS4xMjVyZW0sXG5cbiAgdGV4dC1sYWJlbC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1sYWJlbC1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtbGFiZWwtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1sYWJlbC1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtY2FwdGlvbi1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1jYXB0aW9uLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1idXR0b24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplOiAwLjYyNXJlbSxcbiAgdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodDogMC43NXJlbSxcbiAgdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplOiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodDogMS4yNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplOiAxLjEyNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICAvKiBTdXBwb3J0aW5nIHZhcmlhYmxlcyAtIGJvcmRlciByYWRpdXMsIG91dGxpbmUsIHNoYWRvdywgZGl2aWRlciAqL1xuXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXG5cbiAgb3V0bGluZS13aWR0aDogMC4zNzVyZW0sXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcblxuICBzY3JvbGxiYXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2Nyb2xsYmFyLXdpZHRoOiAwLjMxMjVyZW0sXG5cbiAgc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSg0NCwgNTEsIDczLCAwLjEpLFxuXG4gIGRpdmlkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBkaXZpZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGl2aWRlci13aWR0aDogMXB4LFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy05MDAsXG4gIHRleHQtY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRleHQtaGludC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuXG4gIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwICMxYTFmMzMsXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLTcwMCxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkYXJrLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGFyayc7XG5cbiR0aGVtZTogKFxuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZmFmN2ZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2VjZTNmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNkNWJmZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjYjE4YWZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogI2ExNmVmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICM3YjUxZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjNWEzN2I4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzNlMjQ5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMyOTE1N2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4wOCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4zMiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjdmN2ZjLFxuICBjb2xvci1iYXNpYy0zMDA6ICNmMGYwZmEsXG4gIGNvbG9yLWJhc2ljLTQwMDogI2UxZTFmMixcbiAgY29sb3ItYmFzaWMtNTAwOiAjY2VjZWViLFxuICBjb2xvci1iYXNpYy02MDA6ICNiNGI0ZGIsXG4gIGNvbG9yLWJhc2ljLTcwMDogIzZhNmE5NCxcbiAgY29sb3ItYmFzaWMtODAwOiAjMzIzMjU5LFxuICBjb2xvci1iYXNpYy05MDA6ICMyNTI1NDcsXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxYjFiMzgsXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxMzEzMmIsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMDgpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMzIpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC40KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNDgpLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRhcmspO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuJHRoZW1lOiAoXG4gIGJvcmRlci1yYWRpdXM6IDAuMTdyZW0sXG4gIHNoYWRvdzogbm9uZSxcblxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG5cbiAgY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDFweCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeS01MDAsXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcblxuICBwb3BvdmVyLWJvcmRlci13aWR0aDogMXB4LFxuICBwb3BvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFic2V0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB1c2VyLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGVja2JveC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBtb2RhbC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhY2NvcmRpb24tc2hhZG93OiBub25lLFxuXG4gIHNlbGVjdC1vcHRpb25zLWxpc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIHNlbGVjdC1vcGVuLW91dGxpbmUtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3B0aW9ucy1saXN0LW91dGxpbmUtYm9yZGVyLWNvbG9yLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiQGltcG9ydCAnLi4vLi4vLi4vQHRoZW1lL3N0eWxlcy90aGVtZXMnO1xuXG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcblxuICBuYi1jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICA6Om5nLWRlZXAgYWdtLW1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBuYi10aGVtZShjYXJkLWhlaWdodC1sYXJnZSk7XG4gIH1cbn1cbiIsIi8vIEBuZWJ1bGFyIHRoZW1pbmcgZnJhbWV3b3JrXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1pbmcnO1xuLy8gQG5lYnVsYXIgb3V0IG9mIHRoZSBib3ggdGhlbWVzXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcyc7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKChcbiAgbGF5b3V0LXBhZGRpbmctdG9wOiAyLjI1cmVtLFxuXG4gIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLFxuXG4gIGNhcmQtaGVpZ2h0LXRpbnk6IDEzLjVyZW0sXG4gIGNhcmQtaGVpZ2h0LXNtYWxsOiAyMS4xODc1cmVtLFxuICBjYXJkLWhlaWdodC1tZWRpdW06IDI4Ljg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbGFyZ2U6IDM2LjU2MjVyZW0sXG4gIGNhcmQtaGVpZ2h0LWdpYW50OiA0NC4yNXJlbSxcbiAgY2FyZC1tYXJnaW4tYm90dG9tOiAxLjg3NXJlbSxcbiAgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy10b3A6IDAuNXJlbSxcbiAgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy1ib3R0b206IDAuNXJlbSxcblxuICBzZWxlY3QtbWluLXdpZHRoOiA2cmVtLFxuXG4gIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiAjZjdmOWZjLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAwIDRweCAxNHB4IDAgIzhmOWJiMyxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IDAgNHB4IDE0cHggMCAjOGY5YmIzLFxuKSwgZGVmYXVsdCwgZGVmYXVsdCk7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKChcbiAgbGF5b3V0LXBhZGRpbmctdG9wOiAyLjI1cmVtLFxuXG4gIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLFxuXG4gIGNhcmQtaGVpZ2h0LXRpbnk6IDEzLjVyZW0sXG4gIGNhcmQtaGVpZ2h0LXNtYWxsOiAyMS4xODc1cmVtLFxuICBjYXJkLWhlaWdodC1tZWRpdW06IDI4Ljg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbGFyZ2U6IDM2LjU2MjVyZW0sXG4gIGNhcmQtaGVpZ2h0LWdpYW50OiA0NC4yNXJlbSxcbiAgY2FyZC1tYXJnaW4tYm90dG9tOiAxLjg3NXJlbSxcbiAgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy10b3A6IDAuNXJlbSxcbiAgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy1ib3R0b206IDAuNXJlbSxcblxuICBzZWxlY3QtbWluLXdpZHRoOiA2cmVtLFxuXG4gIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiAjMjUyNTQ3LFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAycHggMCAzcHggIzI5MTU3YSxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IC0ycHggMCAzcHggIzI5MTU3YSxcbiksIGNvc21pYywgY29zbWljKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoKFxuICBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcDogMC41cmVtLFxuICBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLWJvdHRvbTogMC41cmVtLFxuXG4gIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sXG5cbiAgc2xpZGUtb3V0LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNlZGYxZjcgMCUsICNlNGU5ZjIgMTAwJSksXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3I6IDAgNHB4IDE0cHggMCAjOGY5YmIzLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogMCA0cHggMTRweCAwICM4ZjliYjMsXG4pLCBjb3Jwb3JhdGUsIGNvcnBvcmF0ZSk7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKChcbiAgbGF5b3V0LXBhZGRpbmctdG9wOiAyLjI1cmVtLFxuXG4gIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLFxuXG4gIGNhcmQtaGVpZ2h0LXRpbnk6IDEzLjVyZW0sXG4gIGNhcmQtaGVpZ2h0LXNtYWxsOiAyMS4xODc1cmVtLFxuICBjYXJkLWhlaWdodC1tZWRpdW06IDI4Ljg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbGFyZ2U6IDM2LjU2MjVyZW0sXG4gIGNhcmQtaGVpZ2h0LWdpYW50OiA0NC4yNXJlbSxcbiAgY2FyZC1tYXJnaW4tYm90dG9tOiAxLjg3NXJlbSxcbiAgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy10b3A6IDAuNXJlbSxcbiAgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy1ib3R0b206IDAuNXJlbSxcblxuICBzZWxlY3QtbWluLXdpZHRoOiA2cmVtLFxuXG4gIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMjIyYjQ1IDAlLCAjMTUxYTMwIDEwMCUpLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAwIDRweCAxNHB4IDAgIzhmOWJiMyxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IDAgNHB4IDE0cHggMCAjOGY5YmIzLFxuKSwgZGFyaywgZGFyayk7XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/maps/gmaps/gmaps.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/maps/gmaps/gmaps.component.ts ***!
  \*****************************************************/
/*! exports provided: GmapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmapsComponent", function() { return GmapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GmapsComponent = /** @class */ (function () {
    function GmapsComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GmapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-gmaps',
            template: "\n    <nb-card>\n      <nb-card-header>Google Maps</nb-card-header>\n      <nb-card-body>\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </nb-card-body>\n    </nb-card>\n  ",
            styles: [__webpack_require__(/*! ./gmaps.component.scss */ "./src/app/pages/maps/gmaps/gmaps.component.scss")]
        })
    ], GmapsComponent);
    return GmapsComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/leaflet/leaflet.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/maps/leaflet/leaflet.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/maps/leaflet/leaflet.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/maps/leaflet/leaflet.component.ts ***!
  \*********************************************************/
/*! exports provided: LeafletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletComponent", function() { return LeafletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var style_loader_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-loader!leaflet/dist/leaflet.css */ "./node_modules/style-loader/index.js!./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var style_loader_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(style_loader_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);




var LeafletComponent = /** @class */ (function () {
    function LeafletComponent() {
        this.options = {
            layers: [
                leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
            ],
            zoom: 5,
            center: leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]({ lat: 38.991709, lng: -76.886109 }),
        };
    }
    LeafletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-leaflet',
            template: "\n    <nb-card>\n      <nb-card-header>Leaflet Maps</nb-card-header>\n      <nb-card-body>\n        <div leaflet [leafletOptions]=\"options\"></div>\n      </nb-card-body>\n    </nb-card>\n  ",
            styles: [__webpack_require__(/*! ./leaflet.component.scss */ "./src/app/pages/maps/leaflet/leaflet.component.scss")]
        })
    ], LeafletComponent);
    return LeafletComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/maps/maps-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function() { return MapsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps.component */ "./src/app/pages/maps/maps.component.ts");
/* harmony import */ var _gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gmaps/gmaps.component */ "./src/app/pages/maps/gmaps/gmaps.component.ts");
/* harmony import */ var _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leaflet/leaflet.component */ "./src/app/pages/maps/leaflet/leaflet.component.ts");
/* harmony import */ var _bubble_bubble_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bubble/bubble-map.component */ "./src/app/pages/maps/bubble/bubble-map.component.ts");
/* harmony import */ var _search_map_search_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-map/search-map.component */ "./src/app/pages/maps/search-map/search-map.component.ts");
/* harmony import */ var _search_map_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-map/map/map.component */ "./src/app/pages/maps/search-map/map/map.component.ts");
/* harmony import */ var _search_map_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-map/search/search.component */ "./src/app/pages/maps/search-map/search/search.component.ts");










var routes = [{
        path: '',
        component: _maps_component__WEBPACK_IMPORTED_MODULE_3__["MapsComponent"],
        children: [{
                path: 'gmaps',
                component: _gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_4__["GmapsComponent"],
            }, {
                path: 'leaflet',
                component: _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_5__["LeafletComponent"],
            }, {
                path: 'bubble',
                component: _bubble_bubble_map_component__WEBPACK_IMPORTED_MODULE_6__["BubbleMapComponent"],
            }, {
                path: 'searchmap',
                component: _search_map_search_map_component__WEBPACK_IMPORTED_MODULE_7__["SearchMapComponent"],
            }],
    }];
var MapsRoutingModule = /** @class */ (function () {
    function MapsRoutingModule() {
    }
    MapsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MapsRoutingModule);
    return MapsRoutingModule;
}());

var routedComponents = [
    _maps_component__WEBPACK_IMPORTED_MODULE_3__["MapsComponent"],
    _gmaps_gmaps_component__WEBPACK_IMPORTED_MODULE_4__["GmapsComponent"],
    _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_5__["LeafletComponent"],
    _bubble_bubble_map_component__WEBPACK_IMPORTED_MODULE_6__["BubbleMapComponent"],
    _search_map_search_map_component__WEBPACK_IMPORTED_MODULE_7__["SearchMapComponent"],
    _search_map_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
    _search_map_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
];


/***/ }),

/***/ "./src/app/pages/maps/maps.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-maps',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/maps/maps.module.ts ***!
  \*******************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maps-routing.module */ "./src/app/pages/maps/maps-routing.module.ts");








var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
                    libraries: ['places'],
                }),
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__["LeafletModule"].forRoot(),
                _maps_routing_module__WEBPACK_IMPORTED_MODULE_7__["MapsRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            ],
            exports: [],
            declarations: _maps_routing_module__WEBPACK_IMPORTED_MODULE_7__["routedComponents"].slice(),
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/pages/maps/search-map/entity/Location.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/maps/search-map/entity/Location.ts ***!
  \**********************************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var Location = /** @class */ (function () {
    function Location(latitude, longitude) {
        if (latitude === void 0) { latitude = 53.9; }
        if (longitude === void 0) { longitude = 27.5667; }
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/pages/maps/search-map/map/map.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/maps/search-map/map/map.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/maps/search-map/map/map.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/maps/search-map/map/map.component.ts ***!
  \************************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/Location */ "./src/app/pages/maps/search-map/entity/Location.ts");



var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    Object.defineProperty(MapComponent.prototype, "searchedLocation", {
        set: function (searchedLocation) {
            this.latitude = searchedLocation.latitude;
            this.longitude = searchedLocation.longitude;
            this.zoom = 12;
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set up current location
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.searchedLocation = new _entity_Location__WEBPACK_IMPORTED_MODULE_2__["Location"](position.coords.latitude, position.coords.longitude);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entity_Location__WEBPACK_IMPORTED_MODULE_2__["Location"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_entity_Location__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], MapComponent.prototype, "searchedLocation", null);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/maps/search-map/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/pages/maps/search-map/map/map.component.scss")]
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/search-map/search-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/maps/search-map/search-map.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMapComponent", function() { return SearchMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity/Location */ "./src/app/pages/maps/search-map/entity/Location.ts");



var SearchMapComponent = /** @class */ (function () {
    function SearchMapComponent() {
        this.searchedLocation = new _entity_Location__WEBPACK_IMPORTED_MODULE_2__["Location"]();
    }
    SearchMapComponent.prototype.updateLocation = function (event) {
        this.searchedLocation = new _entity_Location__WEBPACK_IMPORTED_MODULE_2__["Location"](event.latitude, event.longitude);
    };
    SearchMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-search-map',
            template: __webpack_require__(/*! raw-loader!./search-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/maps/search-map/search-map.component.html"),
        })
    ], SearchMapComponent);
    return SearchMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/search-map/search/search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/maps/search-map/search/search.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _entity_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/Location */ "./src/app/pages/maps/search-map/entity/Location.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address'],
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.positionChanged.emit(new _entity_Location__WEBPACK_IMPORTED_MODULE_3__["Location"](place.geometry.location.lat(), place.geometry.location.lng()));
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "positionChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchComponent.prototype, "searchElementRef", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/maps/search-map/search/search.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=maps-maps-module-es5.js.map