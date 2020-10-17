(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\FoxMind\html1\angular\first-app\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 0, consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["src", "../../../assets/img/logo.png", "width", "40", "height", "30", "alt", "", 1, "d-inline-block", "align-top"], [1, "row"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Best Bike Shop \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6Xnp":
/*!****************************!*\
  !*** ./src/assets/data.ts ***!
  \****************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [
    {
        id: 1,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/10/Krypton_A18_2016_red_ultegra_16_1.jpg",
        price: 28000,
        discount: 71,
        main: true,
        shop: "Canada Bike",
        name: "Argon 18",
        description: "Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana",
        shipping: "Free shipping",
        discountUntil: "2021-06-02T10:00:00",
        new: true,
        color: ['Blue', 'Grey', 'Orange', 'Black'],
        size: ['S', 'L', 'XL', 'XXL'],
        review: [
            {
                author: "Michel Delap",
                text: "Good one, but I have some problem with wheels",
                rating: 4
            }
        ]
    },
    {
        id: 2,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/03/etap.shadowpsd_2048x.png",
        price: 7900,
        discount: 41,
        main: false,
        shop: "Amazon",
        name: "Aquila Cycles",
        description: "Aquila is the in house brand of Oakville and Toronto based bike shop Racer Sportif. The company offers carbon road, triathlon and track bikes that have been ridden by Canadian development squad Team RaceClean as well as by Canadian track athletes on the international circuit",
        shipping: null,
        discountUntil: "2021-05-15T16:44:00",
        new: true,
        color: ['Blue', 'Grey', 'Orange'],
        size: ['S', 'L', 'XL'],
        review: [
            {
                author: "Michel Topale",
                text: "Good one, but I have some problem with wheels",
                rating: 3
            }
        ]
    },
    {
        id: 3,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/03/Legend-2017-blue-angle-complete-1-of-1.jpg",
        price: 1030,
        discount: 55,
        main: false,
        shop: "Alibaba",
        name: "Banshee",
        description: "Banshee Bikes is a B.C.-based brand specializing in enduro, DH and trail bikes. With a long history on Vancouver’s North Shore, Banshees are designed tough to take the abuse of everyday riding, from enduro races to laps of the Whistler Bike Park",
        shipping: "Free shipping",
        discountUntil: "2021-06-02T10:00:00",
        new: false,
        color: ['Blue', 'Grey'],
        size: ['S', 'XL'],
        review: [
            {
                author: "Michel Topale",
                text: "I have some problem with logistic",
                rating: 2
            },
            {
                author: "Michel Topale",
                text: "Good one, but I have some problem with wheels",
                rating: 3
            }
        ]
    },
    {
        id: 4,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/03/romax_v2.png",
        price: 930,
        discount: 20,
        main: false,
        shop: "Amazon",
        name: "Brodie Bicycles",
        description: "Founded by Paul Brodie in 1986, Brodie Bicycles began manufacturing custom steel hardtail mountain bikes in Vancouver. They expanded into making complete bikes and working with aluminum to expand their offerings. Brodie now has a catalogue of dozens of models from trail to commuter through to road and cyclocross",
        shipping: "Free shipping",
        discountUntil: "2023-06-02T10:00:00",
        new: false,
        color: ['Blue', 'Orange'],
        size: ['L', 'XL'],
        review: []
    },
    {
        id: 5,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/10/s1600_photo_192309.jpg",
        price: 800,
        discount: 5,
        main: false,
        shop: "Amazon",
        name: "Devinci",
        description: "Devinci was established in Chicoutimi, Que in 1987 by two engineering students and have expanded to headquarters in Saguenay under new ownership. The company makes road and mountain bikes. Steve Smith was one of the company’s sponsored athletes at the time of his passing. The company also sponsors Unior Devinci Factory Team which competes in Enduro events. Devinci also make Montreal’s Bixi bikes and the ones for Toronto Bike Share",
        shipping: null,
        discountUntil: "2021-06-02T10:00:00",
        new: false,
        color: ['Blue', 'Green', 'Orange'],
        size: ['XS', 'S', 'L', 'XL'],
        review: [
            {
                author: "Michel O'Connel",
                text: "Awesome bike!!!",
                rating: 5
            },
        ]
    },
    {
        id: 6,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/03/cycle30000.jpg",
        price: 1200,
        discount: 7,
        main: false,
        shop: "Amazon",
        name: "KindHuman",
        description: "KindHuman is a made to order bike company based in Toronto that offers complete bikes. Kindhuman offers stock sized frames and gives customers the controls on choosing the groupset and components the bike is built with. Kindhuman have road, gravel and cyclocross models to choose from with the frames painted in Canada",
        shipping: null,
        discountUntil: "2021-06-02T10:00:00",
        new: true,
        color: ['Blue', 'Grey', 'Orange'],
        size: ['S', 'L', 'XL'],
        review: [
            {
                author: "Michel Corvin Junior",
                text: "Awesome bike!!!",
                rating: 5
            },
            {
                author: "Emma Caraputa",
                text: "Cool bike. My favorite model",
                rating: 5
            },
            {
                author: "Michel Denver",
                text: "Good one, but I have some problem with wheels",
                rating: 3
            }
        ]
    },
    {
        id: 7,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/03/cycle30000.jpg",
        price: 3200,
        discount: 13,
        main: false,
        shop: "Amazon",
        name: "KindHuman Pro",
        description: "KindHuman Pro is a made to order bike company based in Toronto that offers complete bikes. Kindhuman offers stock sized frames and gives customers the controls on choosing the groupset and components the bike is built with. Kindhuman have road, gravel and cyclocross models to choose from with the frames painted in Canada",
        shipping: null,
        discountUntil: "2021-06-02T10:00:00",
        new: true,
        color: ['Blue', 'Grey', 'Orange'],
        size: ['S', 'XL', 'XXL'],
        review: [
            {
                author: "Michel Corvin",
                text: "Awesome bike!!!",
                rating: 5
            },
            {
                author: "Michel Dela",
                text: "Good one, but I have some problem with wheels",
                rating: 3
            }
        ]
    },
    {
        id: 8,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/03/romax_v2.png",
        price: 1930,
        discount: 19,
        main: false,
        shop: "Amazon",
        name: "Brodie Bicycles Pro",
        description: "Founded by Paul Brodie in 1986, Brodie Bicycles began manufacturing custom steel hardtail mountain bikes in Vancouver. They expanded into making complete bikes and working with aluminum to expand their offerings. Brodie now has a catalogue of dozens of models from trail to commuter through to road and cyclocross",
        shipping: "Free shipping",
        discountUntil: "2023-06-02T10:00:00",
        new: false,
        color: ['Blue', 'Orange'],
        size: ['L', 'XL'],
        review: [
            {
                author: "Michel Delapea",
                text: "Good one, but I have some problem with wheels",
                rating: 3
            }
        ]
    },
    {
        id: 9,
        imgUrl: "https://cyclingmagazine.ca/wp-content/uploads/2018/03/Legend-2017-blue-angle-complete-1-of-1.jpg",
        price: 1230,
        discount: 59,
        main: false,
        shop: "Alibaba",
        name: "Banshee",
        description: "Banshee Bikes is a B.C.-based brand specializing in enduro, DH and trail bikes. With a long history on Vancouver’s North Shore, Banshees are designed tough to take the abuse of everyday riding, from enduro races to laps of the Whistler Bike Park",
        shipping: "Free shipping",
        discountUntil: "2021-06-02T10:00:00",
        new: false,
        color: ['Blue', 'Grey'],
        size: ['S', 'XL'],
        review: [
            {
                author: "Michel Tople Junior",
                text: "I have some problem with logistic",
                rating: 2
            },
            {
                author: "Michel O'Topale",
                text: "Good one, but I have some problem with wheels",
                rating: 3
            }
        ]
    }
];


/***/ }),

/***/ "AytR":
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
const environment = {
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


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data */ "6Xnp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class DataService {
    constructor() {
        this.dataObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_assets_data__WEBPACK_IMPORTED_MODULE_1__["data"]);
        this.dataObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(val => val.main == true)).subscribe(val => this.titleCartData = val);
        this.dataObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(val => val.main == false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])((acc, v) => acc.concat(v), [])).subscribe(val => this.arrCards = val);
    }
    getData() {
        return _assets_data__WEBPACK_IMPORTED_MODULE_1__["data"];
    }
    getTitleItem() {
        return this.titleCartData;
    }
    getCards() {
        return this.arrCards;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "pxUr");



class ContactComponent {
    constructor() {
        this.latitude = 50.387970;
        this.longitude = 30.489794;
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 34, vars: 5, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-1"], [1, "col-xl-10", "col-lg-12"], [1, "margin"], [1, "my-container", "margin"], ["href", "mailto:stanislav055@gmail.com"], ["href", "index.html"], [3, "latitude", "longitude", "mapTypeId"], [3, "latitude", "longitude"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Written by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Stanislav Litvinyk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Visit us at: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "index.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Geroev Oborony 7, Kiev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Ukraine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "agm-map", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "agm-marker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "agm-info-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Marker First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude)("mapTypeId", "hybrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude);
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmInfoWindow"]], styles: ["address[_ngcontent-%COMP%] { \r\n    display: block;\r\n    font-weight: 100;\r\n    font-size: medium;\r\n    font-style: italic;\r\n    padding: 0.5em;\r\n} \r\n\r\n.my-container[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n  } \r\n\r\nagm-map[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7O0FBRUY7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5hZGRyZXNzIHsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG59IFxyXG5cclxuLm15LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIH1cclxuXHJcbmFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "page-footer", "font-small", "blue"], [1, "footer-copyright", "text-center", "py-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Stan Smith All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PRTh":
/*!***********************************************************!*\
  !*** ./src/app/components/homecard/homecard.component.ts ***!
  \***********************************************************/
/*! exports provided: HomecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecardComponent", function() { return HomecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_myslice_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/myslice.pipe */ "Te9P");
/* harmony import */ var _pipes_euro_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/euro.pipe */ "iNnR");






const _c0 = function (a0) { return { "outline-color": a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
const _c2 = function (a0) { return { "color": a0 }; };
class HomecardComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.discount = 0;
        this.discountColor = 'orange';
    }
    ngOnInit() {
        this.discountColor = this.discount > 69 ? '	crimson' : this.discount < 51 ? 'orange' : 'lightsalmon';
    }
}
HomecardComponent.ɵfac = function HomecardComponent_Factory(t) { return new (t || HomecardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
HomecardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomecardComponent, selectors: [["app-homecard"]], inputs: { itemData: "itemData", discount: "discount" }, decls: 26, vars: 20, consts: [[1, "card", 3, "ngStyle"], ["href", "#"], [1, "circle", 3, "ngStyle"], [1, "content"], [1, "text-image", "top-padd", "horizon-padd"], [1, "text"], [1, "title"], [1, "img", "center-img"], [3, "src"], [1, "top-padd", "horizon-padd"], [1, "price", 3, "ngStyle"], [1, "strikethrough"], [1, "amazon"], [1, "horizon-padd"], [1, "dotted-line"], [1, "bottom-padd"], [1, "center"]], template: function HomecardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "myslice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "euro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "$69.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.discountColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.discountColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.discount, "% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 9, ctx.itemData.description, 36), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.itemData.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, ctx.discountColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 12, ctx.itemData.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemData.shop);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_pipes_myslice_pipe__WEBPACK_IMPORTED_MODULE_3__["MySlicePipe"], _pipes_euro_pipe__WEBPACK_IMPORTED_MODULE_4__["EuroPipe"]], styles: [".horizon-padd[_ngcontent-%COMP%]{\r\n    padding-left: .3rem;\r\n    padding-right: .3rem;\r\n}\r\n\r\n.top-padd[_ngcontent-%COMP%]{\r\n    padding-top: .3rem;\r\n}\r\n\r\n.bottom-padd[_ngcontent-%COMP%]{\r\n    padding-bottom: .3rem;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: gray;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    margin: 1rem 0;\r\n    height: auto;\r\n    outline: 1px solid orange;\r\n    line-height: 1rem;\r\n    font-size: smaller;\r\n    font-weight: 300;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    outline: 3px solid orange;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    min-height: 180px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 30px 8px 20px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.text-image[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.text-image[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    align-self: end;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.text-image[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 170px;\r\n    height: 110px;\r\n\r\n}\r\n\r\n.center-img[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.display-img[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.circle[_ngcontent-%COMP%] {\r\n    margin: .3rem;\r\n    height: 3.5rem;\r\n    width: 3.5rem;\r\n    border-radius: 100%;\r\n    display: block;\r\n    position: absolute;\r\n    color: white;\r\n    padding: 0.6rem;\r\n    text-align: center;\r\n    font-size: 1pc;\r\n    font-weight: 400;\r\n    line-height: 1.2rem;\r\n}\r\n\r\n.coral[_ngcontent-%COMP%] {\r\n    background-color: coral;\r\n}\r\n\r\n.orange[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%] {\r\n    background-color: gold;\r\n}\r\n\r\n.price[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    color: orange;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover   .price[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n}\r\n\r\n.amazon[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding-top: .4rem;\r\n}\r\n\r\n.strikethrough[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    margin-left: 8px;\r\n    width: 51px;\r\n    color: gray;\r\n    position: relative;\r\n  }\r\n\r\n.strikethrough[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    left: 0;\r\n    top: 40%;\r\n    right: 0;\r\n    border-top: 2px solid;\r\n    border-color: inherit;\r\n    transform:rotate(12deg);\r\n  }\r\n\r\n.dotted-line[_ngcontent-%COMP%] {\r\n    border-top: none;\r\n    border-bottom: 2px dotted;\r\n    color: rgb(214, 214, 214);\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%] {  \r\n    display: grid;\r\n    grid-template-columns: 33% 33% 33%;\r\n    justify-content: center;\r\n}\r\n\r\n.bottom50[_ngcontent-%COMP%] {  \r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    justify-content: center;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {  \r\n    display: grid;\r\n    justify-content: center; \r\n}\r\n\r\n.vert-line[_ngcontent-%COMP%] { \r\n    border-right: 2px solid rgb(233, 233, 233);\r\n}\r\n\r\n@media only screen and (max-width: 950px) {\r\n    .text-image[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lY2FyZC9ob21lY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQU1yQix1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lY2FyZC9ob21lY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b24tcGFkZHtcclxuICAgIHBhZGRpbmctbGVmdDogLjNyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuM3JlbTtcclxufVxyXG5cclxuLnRvcC1wYWRke1xyXG4gICAgcGFkZGluZy10b3A6IC4zcmVtO1xyXG59XHJcblxyXG4uYm90dG9tLXBhZGR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgb3V0bGluZTogM3B4IHNvbGlkIG9yYW5nZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMzBweCA4cHggMjBweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4udGV4dC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcblxyXG4udGV4dC1pbWFnZSAudGV4dCB7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4udGV4dC1pbWFnZSAuaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG5cclxufVxyXG5cclxuLmNlbnRlci1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZGlzcGxheS1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gICAgbWFyZ2luOiAuM3JlbTtcclxuICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuNnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXBjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbn1cclxuXHJcbi5jb3JhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxufVxyXG5cclxuLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5nb2xkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuYTpob3ZlciAucHJpY2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuYTpob3ZlciAudGl0bGUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5hbWF6b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IC40cmVtO1xyXG59XHJcblxyXG4uc3RyaWtldGhyb3VnaCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB3aWR0aDogNTFweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuc3RyaWtldGhyb3VnaDpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEyZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxMmRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnJvdGF0ZSgxMmRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06cm90YXRlKDEyZGVnKTtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMTJkZWcpO1xyXG4gIH1cclxuXHJcbi5kb3R0ZWQtbGluZSB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZDtcclxuICAgIGNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbn1cclxuXHJcbi5ib3R0b20geyAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tNTAgeyAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXIgeyAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG59XHJcblxyXG4udmVydC1saW5lIHsgXHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIC50ZXh0LWltYWdlIC5pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomecardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homecard',
                templateUrl: './homecard.component.html',
                styleUrls: ['./homecard.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { itemData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], discount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor() {
        this.title = 'first-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Te9P":
/*!***************************************!*\
  !*** ./src/app/pipes/myslice.pipe.ts ***!
  \***************************************/
/*! exports provided: MySlicePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySlicePipe", function() { return MySlicePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MySlicePipe {
    transform(str, limit = 1) {
        return str.slice(0, limit);
    }
}
MySlicePipe.ɵfac = function MySlicePipe_Factory(t) { return new (t || MySlicePipe)(); };
MySlicePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "myslice", type: MySlicePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MySlicePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'myslice',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/showcase/showcase.component */ "xnHr");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/title-card/title-card.component */ "x7lx");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _components_homecard_homecard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/homecard/homecard.component */ "PRTh");
/* harmony import */ var _pipes_euro_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/euro.pipe */ "iNnR");
/* harmony import */ var _pipes_myslice_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/myslice.pipe */ "Te9P");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBnEwzHk0tZNUck5FPZeqTTFGx2HD33qlU'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_7__["ShowcaseComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
        _components_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__["TitleCardComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _components_homecard_homecard_component__WEBPACK_IMPORTED_MODULE_15__["HomecardComponent"],
        _pipes_euro_pipe__WEBPACK_IMPORTED_MODULE_16__["EuroPipe"],
        _pipes_myslice_pipe__WEBPACK_IMPORTED_MODULE_17__["MySlicePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_7__["ShowcaseComponent"],
                    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
                    _components_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__["TitleCardComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _components_homecard_homecard_component__WEBPACK_IMPORTED_MODULE_15__["HomecardComponent"],
                    _pipes_euro_pipe__WEBPACK_IMPORTED_MODULE_16__["EuroPipe"],
                    _pipes_myslice_pipe__WEBPACK_IMPORTED_MODULE_17__["MySlicePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyBnEwzHk0tZNUck5FPZeqTTFGx2HD33qlU'
                    })
                ],
                providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iNnR":
/*!************************************!*\
  !*** ./src/app/pipes/euro.pipe.ts ***!
  \************************************/
/*! exports provided: EuroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EuroPipe", function() { return EuroPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EuroPipe {
    transform(v, currency = 0.85323) {
        return '€' + (v * currency).toFixed(2);
    }
}
EuroPipe.ɵfac = function EuroPipe_Factory(t) { return new (t || EuroPipe)(); };
EuroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "euro", type: EuroPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EuroPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'euro',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




function CarouselComponent_ngb_carousel_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_0_ng_template_1_Template, 3, 1, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ngb_carousel_0_ng_template_2_Template, 3, 1, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ngb_carousel_0_ng_template_3_Template, 2, 1, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CarouselComponent {
    constructor() {
        this.images = [1, 2, 3].map((n) => `../../../assets/img/top_bike${n}.jpg`);
    }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_0_Template, 4, 0, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: ["img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 1rem 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/showcase/showcase.component */ "xnHr");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");






const routes = [
    { path: '', component: _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_2__["ShowcaseComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x7lx":
/*!***************************************************************!*\
  !*** ./src/app/components/title-card/title-card.component.ts ***!
  \***************************************************************/
/*! exports provided: TitleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCardComponent", function() { return TitleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_euro_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/euro.pipe */ "iNnR");





const _c0 = function (a0) { return { "outline-color": a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
const _c2 = function (a0) { return { "color": a0 }; };
class TitleCardComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.discountColor = 'orange';
        this.discount = 0;
    }
    ngOnInit() {
        this.itemData = this.dataService.getTitleItem();
        this.discountColor = this.discount > 69 ? 'red' : this.discount < 51 ? 'orange' : 'pink';
    }
}
TitleCardComponent.ɵfac = function TitleCardComponent_Factory(t) { return new (t || TitleCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
TitleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleCardComponent, selectors: [["app-title-card"]], inputs: { discount: "discount" }, decls: 30, vars: 17, consts: [[1, "card", "top", 3, "ngStyle"], ["href", "#"], [1, "circle", 3, "ngStyle"], [1, "top-content"], [1, "center-img"], [1, "display-img", 3, "src"], [1, "horizon-padd"], [1, "price", 3, "ngStyle"], [1, "strikethrough"], [1, "amazon"], [1, "dotted-line"], [1, "text", "horizon-padd"], [1, "title"], [1, "bottom", "horizon-padd", "bottom-padd"], [1, "vert-line", "center"], [1, "center"]], template: function TitleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "euro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "$69.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Free Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "00:02:29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.discountColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.discountColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.discount, "% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.itemData.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx.discountColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx.itemData.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemData.shop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.itemData.description, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_pipes_euro_pipe__WEBPACK_IMPORTED_MODULE_3__["EuroPipe"]], styles: [".horizon-padd[_ngcontent-%COMP%]{\r\n    padding-left: .3rem;\r\n    padding-right: .3rem;\r\n}\r\n\r\n.top-padd[_ngcontent-%COMP%]{\r\n    padding-top: .3rem;\r\n}\r\n\r\n.bottom-padd[_ngcontent-%COMP%]{\r\n    padding-bottom: .3rem;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: gray;\r\n}\r\n\r\n.top-content[_ngcontent-%COMP%] {\r\n    width: 100%; \r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 3fr 0.2fr -webkit-min-content -webkit-min-content -webkit-min-content -webkit-min-content;\r\n    grid-template-rows: 3fr 0.2fr min-content min-content min-content min-content\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    margin: 1rem 0;\r\n    outline: 1px solid orange;\r\n    line-height: 1rem;\r\n    display: block;\r\n    height: calc(100% - 2rem);\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    margin-top: .5rem;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    outline: 3px solid orange;\r\n}\r\n\r\n\r\n\r\n.text-image[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n}\r\n\r\n.text-image[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    align-self: end;\r\n}\r\n\r\n.text-image[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    align-self: center;\r\n}\r\n\r\n.center-img[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.display-img[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.circle[_ngcontent-%COMP%] {\r\n    margin: .3rem;\r\n    height: 3.5rem;\r\n    width: 3.5rem;\r\n    border-radius: 100%;\r\n    display: block;\r\n    position: absolute;\r\n    color: white;\r\n    padding: 0.6rem;\r\n    text-align: center;\r\n    font-size: 1pc;\r\n    font-weight: 400;\r\n    line-height: 1.2rem;\r\n}\r\n\r\n.coral[_ngcontent-%COMP%] {\r\n    background-color: coral;\r\n}\r\n\r\n.orange[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%] {\r\n    background-color: gold;\r\n}\r\n\r\n.price[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    color: orange;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover   .price[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n}\r\n\r\n.amazon[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding-top: .6rem;\r\n}\r\n\r\n.strikethrough[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    margin-left: 8px;\r\n    width: 51px;\r\n    color: gray;\r\n    position: relative;\r\n  }\r\n\r\n.strikethrough[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    left: 0;\r\n    top: 40%;\r\n    right: 0;\r\n    border-top: 2px solid;\r\n    border-color: inherit;\r\n    transform:rotate(12deg);\r\n  }\r\n\r\n.dotted-line[_ngcontent-%COMP%] {\r\n    border-top: none;\r\n    border-bottom: 2px dotted;\r\n    color: rgb(214, 214, 214);\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%] {  \r\n    display: grid;\r\n    grid-template-columns: 33% 33% 33%;\r\n    justify-content: center;\r\n}\r\n\r\n.bottom50[_ngcontent-%COMP%] {  \r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    justify-content: center;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {  \r\n    display: grid;\r\n    justify-content: center; \r\n}\r\n\r\n.vert-line[_ngcontent-%COMP%] { \r\n    border-right: 2px solid rgb(233, 233, 233);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXRsZS1jYXJkL3RpdGxlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkdBQTRFO0lBQTVFO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0dBR0c7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQU1yQix1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aXRsZS1jYXJkL3RpdGxlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9uLXBhZGR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC4zcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjNyZW07XHJcbn1cclxuXHJcbi50b3AtcGFkZHtcclxuICAgIHBhZGRpbmctdG9wOiAuM3JlbTtcclxufVxyXG5cclxuLmJvdHRvbS1wYWRke1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4zcmVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4udG9wLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuMmZyIG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiAzcHggc29saWQgb3JhbmdlO1xyXG59XHJcblxyXG4vKiAudG9wIHtcclxuICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICBncmlkLWNvbHVtbjogMy8zO1xyXG59ICovXHJcblxyXG4udGV4dC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG59XHJcblxyXG4udGV4dC1pbWFnZSAudGV4dCB7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbn1cclxuXHJcbi50ZXh0LWltYWdlIC5pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyLWltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICBtYXJnaW46IC4zcmVtO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC42cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcGM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmNvcmFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG59XHJcblxyXG4ub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmdvbGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG5hOmhvdmVyIC5wcmljZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5hOmhvdmVyIC50aXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmFtYXpvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogLjZyZW07XHJcbn1cclxuXHJcbi5zdHJpa2V0aHJvdWdoIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5zdHJpa2V0aHJvdWdoOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTJkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06cm90YXRlKDEyZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06cm90YXRlKDEyZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTpyb3RhdGUoMTJkZWcpO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgxMmRlZyk7XHJcbiAgfVxyXG5cclxuLmRvdHRlZC1saW5lIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkO1xyXG4gICAgY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcclxufVxyXG5cclxuLmJvdHRvbSB7ICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b201MCB7ICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlciB7ICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbn1cclxuXHJcbi52ZXJ0LWxpbmUgeyBcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-card',
                templateUrl: './title-card.component.html',
                styleUrls: ['./title-card.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { discount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "xnHr":
/*!***********************************************************!*\
  !*** ./src/app/components/showcase/showcase.component.ts ***!
  \***********************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title-card/title-card.component */ "x7lx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _homecard_homecard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../homecard/homecard.component */ "PRTh");







function ShowcaseComponent_app_homecard_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homecard", 3);
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemData", card_r2)("discount", 60);
} }
function ShowcaseComponent_app_homecard_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homecard", 3);
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemData", card_r3)("discount", 50);
} }
class ShowcaseComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.cardsFirstLine = [];
        this.cardsOther = [];
    }
    ngOnInit() {
        this.cardsFirstLine = this.dataService.getCards().slice(0, 3);
        this.cardsOther = this.dataService.getCards().slice(3);
    }
}
ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) { return new (t || ShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowcaseComponent, selectors: [["app-showcase"]], decls: 6, vars: 3, consts: [[1, "row"], [3, "discount"], [3, "itemData", "discount", 4, "ngFor", "ngForOf"], [3, "itemData", "discount"]], template: function ShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-title-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowcaseComponent_app_homecard_4_Template, 1, 2, "app-homecard", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowcaseComponent_app_homecard_5_Template, 1, 2, "app-homecard", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discount", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardsFirstLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardsOther);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_3__["TitleCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _homecard_homecard_component__WEBPACK_IMPORTED_MODULE_5__["HomecardComponent"]], styles: ["main[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 2%;\r\n    display: grid;\r\n    grid-template-columns: 430px 430px 430px;\r\n    grid-template-rows: 252px;\r\n    grid-gap: 2.5rem;\r\n    grid-row-gap: 0;\r\n}\r\n\r\napp-carousel[_ngcontent-%COMP%] {\r\n    grid-row: 1/3;\r\n    grid-column: 1/3;\r\n}\r\n\r\napp-title-card[_ngcontent-%COMP%]  {\r\n    grid-row: 1/3;\r\n    grid-column: 3/3;\r\n}\r\n\r\n@media (min-width: 950px) and (max-width: 1420px){\r\n\r\n    main[_ngcontent-%COMP%] {\r\n        grid-template-columns: 430px 430px;\r\n    }\r\n\r\n    app-title-card[_ngcontent-%COMP%]  {\r\n        grid-row: 3/5;\r\n        grid-column: 1/1;\r\n    }\r\n}\r\n\r\n@media (max-width: 950px) {\r\n\r\n    main[_ngcontent-%COMP%], app-title-card[_ngcontent-%COMP%], app-carousel[_ngcontent-%COMP%], app-homecard[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n\r\n    main[_ngcontent-%COMP%] {\r\n        margin: 0 5%;\r\n    }\r\n    \r\n    app-homecard[_ngcontent-%COMP%] {\r\n        padding: 10px 5%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93Y2FzZS9zaG93Y2FzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJO1FBQ0ksa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBOztJQUVJOzs7O1FBSUksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbm1haW4ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDIlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDMwcHggNDMwcHggNDMwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1MnB4O1xyXG4gICAgZ3JpZC1nYXA6IDIuNXJlbTtcclxuICAgIGdyaWQtcm93LWdhcDogMDtcclxufVxyXG5cclxuYXBwLWNhcm91c2VsIHtcclxuICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICBncmlkLWNvbHVtbjogMS8zO1xyXG59XHJcblxyXG5hcHAtdGl0bGUtY2FyZCAge1xyXG4gICAgZ3JpZC1yb3c6IDEvMztcclxuICAgIGdyaWQtY29sdW1uOiAzLzM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5NTBweCkgYW5kIChtYXgtd2lkdGg6IDE0MjBweCl7XHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MzBweCA0MzBweDtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtdGl0bGUtY2FyZCAge1xyXG4gICAgICAgIGdyaWQtcm93OiAzLzU7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcblxyXG4gICAgbWFpbixcclxuICAgIGFwcC10aXRsZS1jYXJkLFxyXG4gICAgYXBwLWNhcm91c2VsLFxyXG4gICAgYXBwLWhvbWVjYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBtYWluIHtcclxuICAgICAgICBtYXJnaW46IDAgNSU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFwcC1ob21lY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA1JTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase',
                templateUrl: './showcase.component.html',
                styleUrls: ['./showcase.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map