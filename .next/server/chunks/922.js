exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 144:
/***/ ((module) => {

// Exports
module.exports = {
	"PageContainer": "PageContainer_PageContainer__9sImc",
	"Left": "PageContainer_Left__sbpNj",
	"Right": "PageContainer_Right__SbYuj",
	"Centered": "PageContainer_Centered__UCjxL"
};


/***/ }),

/***/ 7589:
/***/ ((module) => {

// Exports
module.exports = {
	"TwoColumn": "TwoColumn_TwoColumn__RXzG7",
	"verticallyCentered": "TwoColumn_verticallyCentered__DvhOg"
};


/***/ }),

/***/ 1339:
/***/ ((module) => {

// Exports
module.exports = {
	"Navbar": "Navbar_Navbar__ROmqf",
	"background": "Navbar_background__EkLyB",
	"MobileNav": "Navbar_MobileNav__f91d5",
	"slideInRight": "Navbar_slideInRight__iOQl7",
	"CloseButton": "Navbar_CloseButton__P9x_n",
	"hamburger": "Navbar_hamburger__wyk9r"
};


/***/ }),

/***/ 3030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Server),
/* harmony export */   "A": () => (/* binding */ breakpoints)
/* harmony export */ });
const isDev = "production" !== 'production';
const Server = isDev ? "http://localhost:3000/" : "http://spacetourism.jordanme.co.uk/";
const breakpoints = {
    sm: 368,
    md: 768,
    lg: 1024,
    xl: 1268
};


/***/ }),

/***/ 4095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hooks_useBreakpoint)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./Hooks/useWindowSize.tsx

const useWindowSize = ()=>{
    const { 0: windowWidth , 1: setWindowWidth  } = (0,external_react_.useState)(0);
    const { 0: windowHeight , 1: setWindowHeight  } = (0,external_react_.useState)(0);
    const handleResize = ()=>{
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };
    (0,external_react_.useEffect)(()=>{
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return {
        windowWidth,
        windowHeight
    };
};
/* harmony default export */ const Hooks_useWindowSize = (useWindowSize);

;// CONCATENATED MODULE: ./Hooks/useBreakpoint.tsx

const useBreakpoint = (size)=>{
    const { windowWidth  } = Hooks_useWindowSize();
    return !!(windowWidth > size);
};
/* harmony default export */ const Hooks_useBreakpoint = (useBreakpoint);


/***/ }),

/***/ 3098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const PageContainer = ({ children , left , right , centered  })=>{
    let classes = " ";
    if (left) classes += (_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Left);
    if (right) classes += (_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Right);
    if (centered) classes += (_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Centered);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().PageContainer)} ${classes}`,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContainer);


/***/ }),

/***/ 1444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3030);
/* harmony import */ var _Hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4095);
/* harmony import */ var _TwoColumn_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7589);
/* harmony import */ var _TwoColumn_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TwoColumn_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const TwoColumn = ({ children , verticallyCentered , leftColumns =1 , rightColumns =1 , collapse =true , reverse =false  })=>{
    // Calculate Column sizes.
    let columns = "1fr";
    if ((0,_Hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_Config__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .A.lg) || !collapse) columns = `${leftColumns}fr ${rightColumns}fr`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_TwoColumn_module_scss__WEBPACK_IMPORTED_MODULE_4___default().TwoColumn),
        style: {
            gridTemplateColumns: columns
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: verticallyCentered ? (_TwoColumn_module_scss__WEBPACK_IMPORTED_MODULE_4___default().verticallyCentered) : "",
                children: children[reverse ? 1 : 0]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: verticallyCentered ? (_TwoColumn_module_scss__WEBPACK_IMPORTED_MODULE_4___default().verticallyCentered) : "",
                children: children[reverse ? 0 : 1]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TwoColumn);


/***/ }),

/***/ 4728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PageHead_PageHead)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./Config/index.js
var Config = __webpack_require__(3030);
// EXTERNAL MODULE: ./Hooks/useBreakpoint.tsx + 1 modules
var useBreakpoint = __webpack_require__(4095);
// EXTERNAL MODULE: ./components/Navbar/Navbar.module.scss
var Navbar_module = __webpack_require__(1339);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx






const links = [
    {
        name: 'Home',
        step: "00",
        url: "/"
    },
    {
        name: 'Destination',
        step: "01",
        url: "/Destination"
    },
    {
        name: 'Crew',
        step: "02",
        url: "/Crew"
    },
    {
        name: 'Technology',
        step: "03",
        url: "/Technology"
    }
];
const Navbar = ({})=>{
    const isDesktop = (0,useBreakpoint/* default */.Z)(Config/* breakpoints.lg */.A.lg);
    const { 0: navActive , 1: setNavActive  } = (0,external_react_.useState)(false);
    if ((0,useBreakpoint/* default */.Z)(Config/* breakpoints.md */.A.md)) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (Navbar_module_default()).Navbar,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Navbar_module_default()).background
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: links.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: link.url,
                                children: `${isDesktop ? link.step : ""} ${link.name}`
                            })
                        }, i)
                    )
                })
            ]
        }));
    }
    if (navActive) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (Navbar_module_default()).MobileNav,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Navbar_module_default()).CloseButton,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setNavActive(false)
                        ,
                        className: `reset`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/shared/icon-close.svg"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "reset",
                    children: links.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: link.url,
                                children: `${link.step} ${link.name}`
                            })
                        }, i)
                    )
                })
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (Navbar_module_default()).hamburger,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>setNavActive(true)
                ,
                className: `reset`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/assets/shared/icon-hamburger.svg"
                })
            })
        })
    }));
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/PageHead/PageHead.tsx




const PageHead = ({ children , title  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            title,
                            " | Space Tourism"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, maximum-scale=1"
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    position: "fixed",
                    zIndex: 1,
                    top: 0,
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        style: {
                            position: "fixed",
                            left: 0,
                            top: 0,
                            zIndex: 20,
                            padding: "30px"
                        },
                        src: "/assets/shared/logo.svg",
                        width: 40,
                        height: 40
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {})
                ]
            })
        ]
    })
;
/* harmony default export */ const PageHead_PageHead = (PageHead);


/***/ })

};
;