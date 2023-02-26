"use strict";
(self["webpackChunkplay_polychrom_dev"] = self["webpackChunkplay_polychrom_dev"] || []).push([["main"],{

/***/ 1491:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ApiService {
    constructor(http, _document) {
        this.http = http;
        this._document = _document;
        this.endpointUrl = '';
        this.serverHost = 'https://play.polychrom.dev';
        this.localHost = 'http://localhost:4200';
        this.endpoint = '/assets/json/showcase.json';
        this.$data = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
        if (this._document.location.hostname.indexOf('localhost') > -1) {
            this.endpointUrl = this.localHost += this.endpoint;
        }
        else {
            this.endpointUrl = this.serverHost += this.endpoint;
        }
        this.getData();
    }
    getData() {
        this.http.get(this.endpointUrl).subscribe((res) => {
            this.$data.next(res);
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery/gallery.component */ 325);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _portfolio_detail_page_portfolio_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio-detail-page/portfolio-detail-page.component */ 6560);
/* harmony import */ var _stack_stack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stack/stack.component */ 56);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    { path: 'header-component', component: _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent },
    { path: '', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent },
    { path: 'stack', component: _stack_stack_component__WEBPACK_IMPORTED_MODULE_4__.StackComponent },
    { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__.PageNotFoundComponent },
    { path: ':id', component: _portfolio_detail_page_portfolio_detail_page_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioDetailPageComponent },
    /* 404 wildcard, last entry */
    {
        path: '**',
        redirectTo: '404',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            initialNavigation: 'enabledBlocking',
        }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.service */ 2433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 970);








function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Visual logbook and digital playground, showing latest explorations in 3D. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.scrollToTop()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, helperService, activatedRoute, viewportScroller) {
        this.router = router;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.viewportScroller = viewportScroller;
        this.title = 'play.polychrom.dev';
        this.scrollPosition = 0;
        this.isScrollTopActive = false;
        this.elements = 3;
        this.routeChanged = false;
        this.is404 = false;
        this.lastPoppedUrl = '';
        this.yScrollStack = [];
        if (this.helperService.isBrowser()) {
            const scrollPosition$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(window, 'scroll');
            scrollPosition$.subscribe(() => {
                if (window.scrollY > window.innerHeight / 2) {
                    this.isScrollTopActive = true;
                }
                else {
                    this.isScrollTopActive = false;
                }
            });
            // const resize$ = fromEvent(window, 'resize');
            // resize$.subscribe((val) => console.log(window.innerWidth));
            this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                }
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                    const currentUrl = this.router.routerState.snapshot.url;
                    if (currentUrl.indexOf('404') > -1) {
                        this.is404 = true;
                    }
                    else {
                        this.is404 = false;
                    }
                }
            });
        }
    }
    ngOnInit() {
        if (this.helperService.isBrowser()) {
            this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart) {
                    if (event.url !== this.lastPoppedUrl) {
                        console.log('Y', Math.floor(window.scrollY));
                        this.yScrollStack.push(Math.floor(window.scrollY));
                    }
                }
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(window, 'popstate').subscribe((event) => {
                if (event.target.location.search) {
                    this.lastPoppedUrl = '/' + event.target.location.search;
                }
                else {
                    this.lastPoppedUrl = event.target.location.pathname;
                }
                console.log('POP', this.lastPoppedUrl);
                this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((event) => {
                    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart) {
                        console.log('NAV', event.url);
                        if (event.url === this.lastPoppedUrl &&
                            this.yScrollStack.length > 0) {
                            console.log('restore from pop', this.yScrollStack);
                            let y = this.yScrollStack.pop();
                            console.log('scrollto y', y);
                            this.viewportScroller.scrollToPosition([0, y || 0]);
                            //window.scrollTo(0, this.yScrollStack.pop() || 0);
                        }
                    }
                });
            });
        }
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    onActivate(e) {
        console.log('router-outlet comps', e.constructor);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_helper_service__WEBPACK_IMPORTED_MODULE_0__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.ViewportScroller)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [["class", "grid-12", 4, "ngIf"], [3, "activate"], ["class", "scrolltop", 3, "click", 4, "ngIf"], [1, "grid-12"], ["id", "intro"], [1, "scrolltop", 3, "click"], ["src", "assets/icons/up-long-solid.svg", "height", "20"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_2_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.is404);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isScrollTopActive);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["#intro[_ngcontent-%COMP%] {\n  height: 50vh;\n  font-size: 50px;\n  text-indent: 15vw;\n  padding: 10px;\n  margin: 0;\n  padding-top: 200px;\n  grid-column: 1/13;\n}\n\n.grid-12[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\n.scrolltop[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW50cm8ge1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgdGV4dC1pbmRlbnQ6IDE1dnc7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMTM7XHJcbn1cclxuXHJcbi5ncmlkLTEyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG59XHJcblxyXG4uc2Nyb2xsdG9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _portfolio_detail_page_portfolio_detail_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio-detail-page/portfolio-detail-page.component */ 6560);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ 325);
/* harmony import */ var _stack_stack_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stack/stack.component */ 56);
/* harmony import */ var _picture_element_picture_element_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picture-element/picture-element.component */ 7336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent,
        _portfolio_detail_page_portfolio_detail_page_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioDetailPageComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent,
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__.GalleryComponent,
        _stack_stack_component__WEBPACK_IMPORTED_MODULE_7__.StackComponent,
        _picture_element_picture_element_component__WEBPACK_IMPORTED_MODULE_8__.PictureElementComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 8167:
/*!*************************!*\
  !*** ./src/app/enum.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
var View;
(function (View) {
    View["Index"] = "index";
    View["Default"] = "default";
    View["Grid"] = "grid";
})(View || (View = {}));


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "bottom"], ["src", "assets/icons/heart-solid.svg", "alt", "icon heart", "width", "18"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "built with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 20px;\n  font-size: 14px;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n}\n\n.bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b20gaW1nIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 325:
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum */ 8167);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ 1491);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ 7482);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper.service */ 2433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _picture_element_picture_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../picture-element/picture-element.component */ 7336);










const _c0 = function (a0, a1) { return { "left": a0, "top": a1 }; };
function GalleryComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, ctx_r0.posX, ctx_r0.posY));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r0.textOverlay), "\n");
} }
function GalleryComponent_ng_container_1_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 13);
} }
function GalleryComponent_ng_container_1_div_1_ng_container_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 15);
} }
function GalleryComponent_ng_container_1_div_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GalleryComponent_ng_container_1_div_1_ng_container_12_span_1_Template, 1, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const see_r9 = ctx.$implicit;
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", see_r9 === project_r5.title);
} }
const _c1 = function (a0) { return { "grid-column": a0 }; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function (a0) { return { "background-color": a0 }; };
function GalleryComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 7)(7, "a", 8)(8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, GalleryComponent_ng_container_1_div_1_span_11_Template, 1, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, GalleryComponent_ng_container_1_div_1_ng_container_12_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r5.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, ctx_r4.getSpan(project_r5.width)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, project_r5.project_dir));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", project_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "assets/projects/" + project_r5.project_dir + "/" + project_r5.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", project_r5.project_dir);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c3, project_r5.background ? project_r5.background : "#ff0000"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", project_r5.video);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.seen);
} }
function GalleryComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GalleryComponent_ng_container_1_div_1_Template, 13, 16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.projects);
} }
function GalleryComponent_ng_container_2_div_1_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function GalleryComponent_ng_container_2_div_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GalleryComponent_ng_container_2_div_1_ng_container_13_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const see_r16 = ctx.$implicit;
    const project_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", see_r16 === project_r13.title);
} }
const _c4 = function (a0) { return { "outline": a0 }; };
const _c5 = function (a0) { return { "active_project": a0 }; };
function GalleryComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseover", function GalleryComponent_ng_container_2_div_1_Template_div_mouseover_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const project_r13 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.setAppBackground(project_r13.background)); })("mouseout", function GalleryComponent_ng_container_2_div_1_Template_div_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.setAppBackground(ctx_r21.defaultBackgroundColor)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, GalleryComponent_ng_container_2_div_1_ng_container_13_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, project_r13.project_dir))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c4, ctx_r12.activeProject === i_r14 ? "3px solid #ff0000" : "none"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c5, ctx_r12.activeProject === i_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r14 + 1 < 10 ? "0" + (i_r14 + 1) : i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, project_r13.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "assets/projects/" + project_r13.project_dir + "/" + project_r13.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", project_r13.project_dir);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 12, project_r13.video ? "video" : "image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", project_r13.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.seen);
} }
function GalleryComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GalleryComponent_ng_container_2_div_1_Template, 14, 20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.projects);
} }
function GalleryComponent_ng_container_3_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 13);
} }
function GalleryComponent_ng_container_3_div_2_ng_container_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 15);
} }
function GalleryComponent_ng_container_3_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GalleryComponent_ng_container_3_div_2_ng_container_5_span_1_Template, 1, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const see_r27 = ctx.$implicit;
    const project_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", see_r27 === project_r23.title);
} }
function GalleryComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-picture-element", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, GalleryComponent_ng_container_3_div_2_span_4_Template, 1, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, GalleryComponent_ng_container_3_div_2_ng_container_5_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, project_r23.project_dir));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("imagePath", "assets/projects/" + project_r23.project_dir + "/")("imageSet", project_r23.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c3, project_r23.background ? project_r23.background : "#ff0000"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", project_r23.video);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r22.seen);
} }
function GalleryComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, GalleryComponent_ng_container_3_div_2_Template, 6, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.projects);
} }
class GalleryComponent {
    constructor(apiService, sharedService, activatedRoute, _helperService, _router, cdr, elementRef, viewportScroller) {
        this.apiService = apiService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this._helperService = _helperService;
        this._router = _router;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.viewportScroller = viewportScroller;
        this.View = _enum__WEBPACK_IMPORTED_MODULE_0__.View;
        this.textOverlay = '';
        this.viewed = [];
        this._routeMatch = false;
        this.defaultBackgroundColor = '#FFFFFF';
        this.activeProject = -1;
        this.key = {
            up: 38,
            down: 40,
        };
        this.column = {
            start: '3',
            width: '8',
        };
        this.$items = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(['test']);
        // restore gallery view when reloading app
        const viewModeFromQuery = this.activatedRoute.snapshot.queryParams['view'];
        if (viewModeFromQuery) {
            this.sharedService.$galleryMode.next(viewModeFromQuery);
        }
    }
    ngOnInit() {
        /*
        
        
    
          // 38 scroll up
          if (event.keyCode == this.key.up) {
            console.log('key up');
            //this.scrollByRow(this.scrollState, event);
    
            this.activeProject -= 1;
    
            event.preventDefault();
          }
        });*/
        // reset background to default when leaving route
        this._router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationStart) {
                this.setAppBackground(this.defaultBackgroundColor);
            }
        });
        this.apiService.$data.subscribe((res) => {
            this.projects = res.project;
        });
        this.sharedService.$galleryMode.subscribe((currentMode) => {
            this.galleryMode = currentMode;
        });
        if (this._helperService.isBrowser()) {
            if (localStorage.getItem('viewed')) {
                this.seen = JSON.parse(localStorage.getItem('viewed') || 'nix');
            }
            this._router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
                    let currentProject = this._router.routerState.snapshot.url;
                    currentProject = currentProject.replace('/', '');
                    // check if route is candidate for project match
                    this._routeMatch = false;
                    this.projects.forEach((project) => {
                        if (currentProject.indexOf(project.title) > -1) {
                            this._routeMatch = true;
                        }
                    });
                    // check if storage exists and project is already stored
                    if (this._routeMatch) {
                        if (localStorage.getItem('viewed')) {
                            this.viewedFromStorage = JSON.parse(localStorage.getItem('viewed') || '');
                        }
                        // push item when storage does not exist or item not already saved
                        if (!this.viewedFromStorage ||
                            (this.viewedFromStorage &&
                                !this.isInStorage(this.viewedFromStorage, currentProject))) {
                            this.viewed.push(currentProject);
                            localStorage.setItem('viewed', JSON.stringify(this.viewed));
                        }
                    }
                }
            });
        }
        if (this._helperService.isBrowser()) {
            const mouseMove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window, 'mousemove');
            mouseMove$.subscribe((e) => {
                const offset = 30;
                this.posX = e.pageX + offset + 'px';
                this.posY = e.pageY + offset + 'px';
            });
            const click$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window, 'mouseover');
            click$.subscribe((event) => {
                const _activeId = event.target.id;
                if (this.projects && _activeId) {
                    this.projects.filter((project) => {
                        if (project.title === _activeId) {
                            this._lastId = _activeId;
                            this.textOverlay = project.title;
                        }
                        // stop overlay when leaving image
                        if (this._lastId !== _activeId) {
                            this.textOverlay = '';
                        }
                    });
                }
            });
        }
    }
    isInStorage(viewed, current) {
        let _found = false;
        viewed.forEach((element) => {
            if (element === current) {
                _found = true;
            }
        });
        return _found;
    }
    getSpan(width) {
        const spanDefault = this.column.start + '/ span ' + this.column.width;
        if (width) {
            return this.column.start + '/ span ' + width;
        }
        return spanDefault;
    }
    setAppBackground(hex) {
        // prevent undefined
        hex = hex && hex.length === 7 ? hex : this.defaultBackgroundColor;
        hex = hex.replace('#', '');
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        let color = r + ',' + g + ',' + b;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = `rgba(${color},1)`;
        color;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.ViewportScroller)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 4, vars: 4, consts: [["class", "project_text_overlay", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [1, "project_text_overlay", 3, "ngStyle"], [4, "ngFor", "ngForOf"], ["id", "view_linear"], [1, "item_title"], [1, "item_text"], [1, "item_image", 3, "ngStyle"], [3, "routerLink"], [1, "container"], [1, "image", 3, "id", "src", "alt"], [1, "overlay", 3, "ngStyle"], ["class", "project_format icon icon_video", 4, "ngIf"], [1, "project_format", "icon", "icon_video"], ["class", "project_format icon icon_eye", 4, "ngIf"], [1, "project_format", "icon", "icon_eye"], ["class", " view_index", 3, "routerLink", "ngStyle", "ngClass", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], [1, "view_index", 3, "routerLink", "ngStyle", "ngClass", "mouseover", "mouseout"], [1, "view_index_number"], [1, "view_index_title"], [1, "view_index_image"], [1, "view_index_image_circle", 3, "src", "alt"], [1, "view_index_format"], [1, "view_index_year"], ["class", "view_index_seen", 4, "ngIf"], [1, "view_index_seen"], [1, "icon_eye_index"], [1, "view_grid"], ["class", "view_grid_item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "view_grid_item", 3, "routerLink"], [3, "imagePath", "imageSet"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, GalleryComponent_span_0_Template, 3, 7, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GalleryComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, GalleryComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, GalleryComponent_ng_container_3_Template, 3, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.textOverlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.galleryMode === ctx.View.Default && ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.galleryMode === ctx.View.Index && ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.galleryMode === ctx.View.Grid && ctx.projects);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _picture_element_picture_element_component__WEBPACK_IMPORTED_MODULE_4__.PictureElementComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe], styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 0;\n  transition: 0.3s ease;\n}\n\n.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.project_format[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #ffffff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 50%;\n}\n\n.icon_video[_ngcontent-%COMP%] {\n  background-image: url('video-solid.svg');\n}\n\n.icon_eye[_ngcontent-%COMP%] {\n  background-image: url('eye-solid.svg');\n}\n\n.project_text_overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #fff;\n  border-radius: 40px;\n  padding: 10px 20px;\n  z-index: 9999;\n  font-size: 30px;\n  pointer-events: none;\n}\n\n.view_grid_title[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.view_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\n.view_grid_item[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  padding: 20px;\n  grid-column: span 3;\n  cursor: pointer;\n}\n\n.view_index[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  border-bottom: 1px solid #000000;\n  padding: 10px 0;\n  cursor: pointer;\n  font-size: 30px;\n}\n\n.view_index[_ngcontent-%COMP%]:hover {\n  background-color: #000000;\n  background-color: #fff;\n}\n\n.view_index_number[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n}\n\n.view_index_title[_ngcontent-%COMP%] {\n  grid-column: 3/5;\n}\n\n.view_index_image[_ngcontent-%COMP%] {\n  grid-column: 5/6;\n}\n\n.view_index_image_circle[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n}\n\n.view_index_format[_ngcontent-%COMP%] {\n  grid-column: 6/7;\n}\n\n.view_index_year[_ngcontent-%COMP%] {\n  grid-column: 9/10;\n}\n\n.view_index_seen[_ngcontent-%COMP%] {\n  grid-column: 11/12;\n}\n\n.icon_eye_index[_ngcontent-%COMP%] {\n  display: block;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  background-color: #ffffff;\n  background-image: url('eye-solid.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 70%;\n}\n\n#view_linear[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\n.item_title[_ngcontent-%COMP%] {\n  grid-column: 3/5;\n  margin: 100px 0 40px 0;\n  text-transform: capitalize;\n}\n\n.item_text[_ngcontent-%COMP%] {\n  grid-column: 6/10;\n  margin: 100px 0 40px 0;\n  line-height: 120%;\n}\n\n.active_project[_ngcontent-%COMP%] {\n  outline: 1px solid #ff0000;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSx3Q0FBQTtBQUZGOztBQUtBO0VBQ0Usc0NBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsMEJBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBSkYiLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzbWFsbDogNjAwcHg7XHJcbiRtZWRpdW06IDkwMHB4O1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0X2Zvcm1hdCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbn1cclxuXHJcbi5pY29uX3ZpZGVvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3ZpZGVvLXNvbGlkLnN2Zyk7XHJcbn1cclxuXHJcbi5pY29uX2V5ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9leWUtc29saWQuc3ZnKTtcclxufVxyXG5cclxuLnByb2plY3RfdGV4dF9vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnZpZXdfZ3JpZF90aXRsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpZXdfZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcclxufVxyXG5cclxuLnZpZXdfZ3JpZF9pdGVtIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52aWV3X2luZGV4IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4udmlld19pbmRleDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAvL2NvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udmlld19pbmRleF9udW1iZXIge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcclxufVxyXG5cclxuLnZpZXdfaW5kZXhfdGl0bGUge1xyXG4gIGdyaWQtY29sdW1uOiAzIC8gNTtcclxufVxyXG5cclxuLnZpZXdfaW5kZXhfaW1hZ2Uge1xyXG4gIGdyaWQtY29sdW1uOiA1IC8gNjtcclxufVxyXG5cclxuLnZpZXdfaW5kZXhfaW1hZ2VfY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnZpZXdfaW5kZXhfZm9ybWF0IHtcclxuICBncmlkLWNvbHVtbjogNiAvIDc7XHJcbn1cclxuXHJcbi52aWV3X2luZGV4X3llYXIge1xyXG4gIGdyaWQtY29sdW1uOiA5IC8gMTA7XHJcbn1cclxuXHJcbi52aWV3X2luZGV4X3NlZW4ge1xyXG4gIGdyaWQtY29sdW1uOiAxMSAvIDEyO1xyXG59XHJcblxyXG4uaWNvbl9leWVfaW5kZXgge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9leWUtc29saWQuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcclxufVxyXG5cclxuI3ZpZXdfbGluZWFyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG59XHJcblxyXG4uaXRlbV90aXRsZSB7XHJcbiAgZ3JpZC1jb2x1bW46IDMgLyA1O1xyXG4gIG1hcmdpbjogMTAwcHggMCA0MHB4IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5pdGVtX3RleHQge1xyXG4gIGdyaWQtY29sdW1uOiA2IC8gMTA7XHJcbiAgbWFyZ2luOiAxMDBweCAwIDQwcHggMDtcclxuICBsaW5lLWhlaWdodDogMTIwJTtcclxufVxyXG5cclxuLmFjdGl2ZV9wcm9qZWN0IHtcclxuICBvdXRsaW5lOiAxcHggc29saWQgI2ZmMDAwMDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum */ 8167);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ 1491);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ 7482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper.service */ 2433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);








function HeaderComponent_ng_container_14_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", project_r3.project_dir);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, project_r3.title), "");
} }
function HeaderComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_ng_container_14_a_1_Template, 3, 4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
} }
const _c0 = function (a0, a1) { return { "left": a0, "top": a1 }; };
function HeaderComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 17);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](1, _c0, ctx_r1.posX, ctx_r1.posY));
} }
const _c1 = function () { return [""]; };
const _c2 = function (a0) { return { view: a0 }; };
class HeaderComponent {
    constructor(apiService, sharedService, router, helperService) {
        this.apiService = apiService;
        this.sharedService = sharedService;
        this.router = router;
        this.helperService = helperService;
        this.View = _enum__WEBPACK_IMPORTED_MODULE_0__.View;
        this.modalState = false;
        this.offset = 30;
        this.active = false;
    }
    ngOnInit() {
        this.apiService.$data.subscribe((res) => {
            this.projects = res.project;
        });
        if (this.helperService.isBrowser()) {
            const mouseMove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'mousemove');
            this._subscriptionMouseMove = mouseMove$.subscribe((event) => {
                this.posX = event.pageX - this.offset + 'px';
                this.posY = event.pageY - this.offset + 'px';
                if (event.target.role === 'hoverState') {
                    this.active = true;
                }
                else {
                    this.active = false;
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.helperService.isBrowser()) {
            this._subscriptionMouseMove.unsubscribe();
        }
    }
    navigate(view) {
        this.router.navigate(['']);
        this.sharedService.$galleryMode.next(view);
    }
    viewMode(view) {
        this.sharedService.$galleryMode.next(view);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 18, consts: [[1, "header"], [1, "header_item_logo"], ["role", "hoverState", 3, "click"], [1, "header_item_teaser"], [1, "header_item_info"], [1, "header_item_view"], [1, "navigation"], ["role", "hoverState", 1, "dropdown"], [1, "nav_item"], [1, "dropdown-content"], [4, "ngIf"], ["role", "hoverState", 1, "nav_item", 3, "routerLink", "queryParams", "click"], ["href", "https://github.com/polychrom/play.polychrom.dev", "target", "_blank", 1, "icon_github"], ["role", "hoverState", "alt", "github icon", "src", "../../assets/icons/github.svg", "height", "20"], ["class", "circle", 3, "ngStyle", 4, "ngIf"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "circle", 3, "ngStyle"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.navigate(ctx.View.Default); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Selected Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Design & Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "span", 6)(10, "div", 7)(11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u2193");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, HeaderComponent_ng_container_14_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.viewMode(ctx.View.Index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.viewMode(ctx.View.Grid); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, HeaderComponent_span_23_Template, 1, 4, "span", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c2, ctx.View.Index));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 8, ctx.View.Index));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c2, ctx.View.Grid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 10, ctx.View.Grid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.active);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe], styles: [".circle[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 60px;\n  height: 60px;\n  background-color: #ffffff;\n  position: absolute;\n  z-index: 5555;\n  border-radius: 30px;\n  mix-blend-mode: difference;\n  pointer-events: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding-bottom: 20px;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  display: none;\n  position: absolute;\n  left: -10px;\n  top: 30px;\n  background-color: #fff;\n  min-width: 160px;\n  z-index: 1;\n  height: 400px;\n  overflow-y: scroll;\n  scrollbar-width: thin;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 6px 2px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 9px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(155, 155, 155, 0.5);\n  border-radius: 20px;\n  border: transparent;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  z-index: 999;\n  width: 100vw;\n  color: #000;\n}\n\n.header_item_logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-left: 20px;\n  position: fixed;\n  grid-column: 1/2;\n}\n\n.header_item_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #000000;\n}\n\n.header_item_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px transparent;\n}\n\n.header_item_view[_ngcontent-%COMP%] {\n  right: 20px;\n  position: fixed;\n  grid-column: 11/13;\n  z-index: 555;\n}\n\n.header_item_view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.nav_item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #000000;\n  cursor: pointer;\n}\n\n.nav_item[_ngcontent-%COMP%]:nth-child(-n+2) {\n  margin-right: 20px;\n}\n\n.nav_item[_ngcontent-%COMP%]:hover {\n  border: none;\n}\n\n.header_item_teaser[_ngcontent-%COMP%] {\n  position: relative;\n  grid-column: 3/5;\n}\n\n.header_item_info[_ngcontent-%COMP%] {\n  grid-column: 6/10;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  height: 70px;\n  display: block;\n}\n\n.icon_github[_ngcontent-%COMP%] {\n  right: 0px;\n  position: absolute;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBQ0UsVUFBQTtBQUZGOztBQUlBO0VBQ0UsdUJBQUE7QUFERjs7QUFHQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUU7RUFDRSxnQ0FBQTtBQUFKOztBQUVFO0VBQ0UsOEJBQUE7QUFBSjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0U7RUFDRSxrQkFBQTtBQURKOztBQUtBO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQUlFO0VBQ0UsWUFBQTtBQUZKOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUhGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogNTU1NTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLy9ib3JkZXI6ICNmZjAwMDAgMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHRvcDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuXHJcbiAgJiBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4IDJweDtcclxuICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA5cHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uaGVhZGVyX2l0ZW1fbG9nbyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMjtcclxuXHJcbiAgJiBhIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIH1cclxuICAmIGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlcl9pdGVtX3ZpZXcge1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBncmlkLWNvbHVtbjogMTEgLyAxMztcclxuICB6LWluZGV4OiA1NTU7XHJcblxyXG4gICYgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2X2l0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpudGgtY2hpbGQoLW4gKyAyKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlcl9pdGVtX3RlYXNlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGdyaWQtY29sdW1uOiAzIC8gNTtcclxufVxyXG5cclxuLmhlYWRlcl9pdGVtX2luZm8ge1xyXG4gIGdyaWQtY29sdW1uOiA2IC8gMTA7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGhlaWdodDogNzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmljb25fZ2l0aHViIHtcclxuICByaWdodDogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2433:
/*!***********************************!*\
  !*** ./src/app/helper.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class HelperService {
    constructor(platformId, router) {
        this.router = router;
        this.platformId = platformId;
    }
    getWindowSize() {
        return 'hello from getWindowSize';
    }
    navigateByRoute(url) {
        this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate([url]));
    }
    isBrowser() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId);
    }
    isServer() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)(this.platformId);
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 1491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a0) { return { "background-color": a0 }; };
function PageNotFoundComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/" + project_r1.project_dir);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, project_r1.background));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r2 < 10 ? "0" + i_r2 : i_r2, " ");
} }
class PageNotFoundComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        this.apiService.$data.subscribe((res) => {
            this.projects = res.project;
        });
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 3, vars: 1, consts: [[1, "notfound"], ["class", "project_item", 4, "ngFor", "ngForOf"], [1, "project_item"], [3, "routerLink"], [1, "project_number", 3, "ngStyle"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "hey it looks like the requested page is not available, how about this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PageNotFoundComponent_span_2_Template, 5, 6, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".notfound[_ngcontent-%COMP%] {\n  font-size: 68px;\n  text-indent: 16vw;\n  margin: 40px 0;\n}\n\n.project_item[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 30px;\n  margin: 10px;\n  display: inline-block;\n  border: 1px solid #666;\n}\n\n.project_number[_ngcontent-%COMP%] {\n  background-color: #000;\n  position: absolute;\n  margin-top: -20px;\n  font-size: 16px;\n  padding: 5px;\n  border-radius: 50%;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rmb3VuZCB7XHJcbiAgZm9udC1zaXplOiA2OHB4O1xyXG4gIHRleHQtaW5kZW50OiAxNnZ3O1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG59XHJcblxyXG4ucHJvamVjdF9pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG59XHJcblxyXG4ucHJvamVjdF9udW1iZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7336:
/*!**************************************************************!*\
  !*** ./src/app/picture-element/picture-element.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictureElementComponent": () => (/* binding */ PictureElementComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.service */ 2433);



const _c0 = ["imagecontrol"];
class PictureElementComponent {
    constructor($helperService) {
        this.$helperService = $helperService;
        this.imagePath = '';
        this.imageSize = '';
        this.image = '';
    }
    ngOnInit() {
        this.imageSize = this.imageSet[0];
        this.image = this.imagePath + this.imageSize;
        if (this.$helperService.isBrowser()) {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'resize').subscribe((event) => {
                console.log('xwidth', window.innerWidth);
                if (window.innerWidth < 800) {
                    console.log('xwidth breakpoint'
                    // this.imagecontrol?.nativeElement.getAttribute('src')
                    );
                    this.image = '/assets/projects/camera/camera_ph.gif';
                }
            });
        }
    }
    ngAfterViewInit() { }
    ngOnDestroy() { }
    imageLoaded(event) {
        const image = event.path[0];
        console.log(event.path[0].naturalWidth + ' x ' + event.path[0].naturalHeight, event.path[0].width + ' x ' + event.path[0].height);
        if (this.imageSet.length > 1 &&
            this.imageSet[0].indexOf('_ph') > -1 &&
            image.width < 640) {
            this.imageSize = this.imageSet[2];
            console.log('kleinere bild da', this.imageSet, this.imageSize);
        }
    }
}
PictureElementComponent.instanceCounter = 0;
PictureElementComponent.ɵfac = function PictureElementComponent_Factory(t) { return new (t || PictureElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_helper_service__WEBPACK_IMPORTED_MODULE_0__.HelperService)); };
PictureElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PictureElementComponent, selectors: [["app-picture-element"]], viewQuery: function PictureElementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imagecontrol = _t.first);
    } }, inputs: { imagePath: "imagePath", imageSet: "imageSet" }, decls: 3, vars: 1, consts: [[1, "image_wrapper"], [1, "image", 3, "src", "load"], ["imagecontrol", ""]], template: function PictureElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "img", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function PictureElementComponent_Template_img_load_1_listener($event) { return ctx.imageLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, styles: [".image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.image_wrapper[_ngcontent-%COMP%] {\n  background-color: aqua;\n  z-index: 9999;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY3R1cmUtZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InBpY3R1cmUtZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2Vfd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6560:
/*!**************************************************************************!*\
  !*** ./src/app/portfolio-detail-page/portfolio-detail-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioDetailPageComponent": () => (/* binding */ PortfolioDetailPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 1491);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.service */ 2433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function PortfolioDetailPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, ctx_r0.project.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.project.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.project.text);
} }
function PortfolioDetailPageComponent_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PortfolioDetailPageComponent_ng_container_2_div_1_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.navigateProjects(ctx_r9.prevProject)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PortfolioDetailPageComponent_ng_container_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PortfolioDetailPageComponent_ng_container_2_div_1_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.navigateProjects(ctx_r11.nextProject)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PortfolioDetailPageComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PortfolioDetailPageComponent_ng_container_2_div_1_div_3_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PortfolioDetailPageComponent_ng_container_2_div_1_div_4_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/projects/" + ctx_r4.project.project_dir + "/" + ctx_r4.project.images[i_r6], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.prevProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.nextProject);
} }
function PortfolioDetailPageComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PortfolioDetailPageComponent_ng_container_2_div_1_Template, 5, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.project.images);
} }
const _c0 = function (a0, a1) { return { "left": a0, "top": a1 }; };
function PortfolioDetailPageComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r2.posX, ctx_r2.posY));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r2.prevProject), " ");
} }
function PortfolioDetailPageComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r3.posX, ctx_r3.posY));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r3.nextProject), " ");
} }
class PortfolioDetailPageComponent {
    constructor(activatedRoute, apiService, router, helperService) {
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.router = router;
        this.helperService = helperService;
        this._match = false;
        this._id = '';
        this.prev = false;
        this.next = false;
        this.projectsSum = 0;
        this.currentProjectNumber = 0;
        this.offsetX = 0;
        this.nextProject = undefined;
        this.prevProject = undefined;
        this.nextProjectNumber = 0;
        this.prevProjectNumber = 0;
    }
    ngOnInit() {
        this._subscriptionRoute = this.activatedRoute.params.subscribe(() => {
            this._subscriptionData = this.apiService.$data.subscribe((res) => {
                this.projects = res.project;
                this.projectsSum = this.projects.length;
                this._match = false;
                for (let i = 0; i < this.projects.length; i++) {
                    this._id = this.activatedRoute.snapshot.params['id'];
                    if (this.projects[i].project_dir === this._id) {
                        this.project = this.projects[i];
                        /* prev project */
                        if (i === 0) {
                            this.prevProject = this.projects[this.projects.length - 1].title;
                        }
                        if (i > 0) {
                            this.prevProject = this.projects[i - 1].title;
                        }
                        /* next project */
                        if (i === this.projects.length - 1) {
                            this.nextProject = this.projects[0].title;
                        }
                        if (i < this.projects.length - 1) {
                            this.nextProject = this.projects[i + 1].title;
                        }
                        this._match = true;
                    }
                }
                if (!this._match && this._id.indexOf('404') === -1) {
                    this.router.navigate(['404']);
                }
            });
        });
        if (this.helperService.isBrowser()) {
            const mouseMove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'mousemove');
            this._subscriptionMouseMove = mouseMove$.subscribe((event) => {
                const offsetY = 30;
                this.posX = event.pageX + this.offsetX + 'px';
                this.posY = event.pageY + offsetY + 'px';
                if (event.target.role === 'prev_project') {
                    this.prev = true;
                    this.offsetX = 30;
                }
                else {
                    this.prev = false;
                }
                if (event.target.role === 'next_project') {
                    this.next = true;
                    this.offsetX = -180;
                }
                else {
                    this.next = false;
                }
            });
        }
    }
    ngOnDestroy() {
        this._subscriptionRoute.unsubscribe();
        this._subscriptionData.unsubscribe();
        if (this.helperService.isBrowser()) {
            this._subscriptionMouseMove.unsubscribe();
        }
        //console.log('unsub from route', this._subscriptionRoute.closed);
        //console.log('unsub from data', this._subscriptionData.closed);
        //console.log('unsub from mouse', this._subscriptionMouseMove.closed);
    }
    navigateProjects(route) {
        this.router.navigate([route]);
    }
}
PortfolioDetailPageComponent.ɵfac = function PortfolioDetailPageComponent_Factory(t) { return new (t || PortfolioDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_helper_service__WEBPACK_IMPORTED_MODULE_1__.HelperService)); };
PortfolioDetailPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PortfolioDetailPageComponent, selectors: [["app-portfolio-detail-page"]], decls: 5, vars: 4, consts: [["class", "intro", 4, "ngIf"], [4, "ngIf"], ["class", "prev_project_overlay", 3, "ngStyle", 4, "ngIf"], ["class", "next_project_overlay", 3, "ngStyle", 4, "ngIf"], [1, "intro"], [1, "title"], [1, "year"], [1, "text"], [4, "ngFor", "ngForOf"], [1, "image_wrapper"], ["width", "100%", 1, "image", 3, "src"], ["role", "prev_project", "class", "zone zone_prev", 3, "click", 4, "ngIf"], ["role", "next_project", "class", "zone zone_next", 3, "click", 4, "ngIf"], ["role", "prev_project", 1, "zone", "zone_prev", 3, "click"], ["role", "next_project", 1, "zone", "zone_next", 3, "click"], [1, "prev_project_overlay", 3, "ngStyle"], [1, "arrow", "arrow_left"], [1, "next_project_overlay", 3, "ngStyle"], [1, "arrow", "arrow_right"]], template: function PortfolioDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PortfolioDetailPageComponent_div_1_Template, 8, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PortfolioDetailPageComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PortfolioDetailPageComponent_span_3_Template, 4, 7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PortfolioDetailPageComponent_span_4_Template, 4, 7, "span", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.prev && ctx.prevProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.next && ctx.nextProject);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe], styles: [".intro[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.title[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  grid-column: 1/2;\n}\n\n.year[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  padding: 0 14px;\n}\n\n.text[_ngcontent-%COMP%] {\n  grid-column: 3/6;\n  padding: 0 14px;\n}\n\n.image_wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 40px 0;\n}\n\n.zone[_ngcontent-%COMP%] {\n  width: 25vw;\n  z-index: 999;\n  cursor: pointer;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n}\n\n.zone_prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.zone_next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.prev_project_overlay[_ngcontent-%COMP%], .next_project_overlay[_ngcontent-%COMP%] {\n  z-index: 9999;\n  position: absolute;\n  background-color: #fff;\n  border-radius: 40px;\n  padding: 10px;\n  z-index: 9999;\n  font-size: 20px;\n  pointer-events: none;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  background-image: url('arrow_right.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 24px;\n  width: 24px;\n  display: inline-block;\n}\n\n.arrow_right[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  margin-left: 6px;\n}\n\n.arrow_left[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJwb3J0Zm9saW8tZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG59XHJcblxyXG4ueWVhciB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGdyaWQtY29sdW1uOiAzIC8gNjtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5pbWFnZV93cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbi56b25lIHtcclxuICB3aWR0aDogMjV2dztcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uem9uZV9wcmV2IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uem9uZV9uZXh0IHtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnByZXZfcHJvamVjdF9vdmVybGF5LFxyXG4ubmV4dF9wcm9qZWN0X292ZXJsYXkge1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvYXJyb3dfcmlnaHQuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYXJyb3dfcmlnaHQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5hcnJvd19sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7482:
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ 8167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class SharedService {
    constructor() {
        this.$galleryMode = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_enum__WEBPACK_IMPORTED_MODULE_0__.View.Default);
        // this.$galleryMode.subscribe((v) => console.log('MODE', v));
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 56:
/*!******************************************!*\
  !*** ./src/app/stack/stack.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackComponent": () => (/* binding */ StackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StackComponent {
    constructor() { }
    ngOnInit() {
    }
}
StackComponent.ɵfac = function StackComponent_Factory(t) { return new (t || StackComponent)(); };
StackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StackComponent, selectors: [["app-stack"]], decls: 2, vars: 0, consts: [["id", "stack"]], template: function StackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stack works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#stack[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic3RhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3RhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map