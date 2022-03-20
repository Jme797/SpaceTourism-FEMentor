(() => {
var exports = {};
exports.id = 654;
exports.ids = [654];
exports.modules = {

/***/ 9018:
/***/ ((module) => {

// Exports
module.exports = {
	"FixedBottom": "Fixed_FixedBottom__nHuBp",
	"FixedRight": "Fixed_FixedRight__H9VUs"
};


/***/ }),

/***/ 122:
/***/ ((module) => {

// Exports
module.exports = {
	"Dot": "SlideDotControls_Dot__8PJf4",
	"Active": "SlideDotControls_Active__TJT9I"
};


/***/ }),

/***/ 2181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ FixedBottom)
/* harmony export */ });
/* unused harmony export FixedRight */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Fixed_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9018);
/* harmony import */ var _Fixed_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Fixed_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const FixedBottom = ({ children , offset =0 , elRef  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        ref: elRef,
        className: (_Fixed_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FixedBottom),
        style: {
            bottom: `${offset}px`
        },
        children: children
    }));
};
const FixedRight = ({ children  })=>{
    return(/*#__PURE__*/ _jsx("section", {
        className: Styles.FixedRight,
        children: children
    }));
};



/***/ }),

/***/ 3332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Crew),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/PageHead/PageHead.tsx + 1 modules
var PageHead = __webpack_require__(4728);
// EXTERNAL MODULE: ./Config/index.js
var Config = __webpack_require__(3030);
// EXTERNAL MODULE: ./Layout/TwoColumn/TwoColumn.tsx
var TwoColumn = __webpack_require__(1444);
// EXTERNAL MODULE: ./components/SlideDotControls/SlideDotControls.module.scss
var SlideDotControls_module = __webpack_require__(122);
var SlideDotControls_module_default = /*#__PURE__*/__webpack_require__.n(SlideDotControls_module);
;// CONCATENATED MODULE: ./components/SlideDotControls/SlideDotControls.tsx



const SlideDotControls = ({ slideCount , setSlideNumber , slideNumber  })=>{
    function handleClick(e, i) {
        e.stopPropagation();
        setSlideNumber(i);
    }
    function createDots() {
        const dots = [];
        for(let i = 0; i < slideCount; i++){
            dots.push(/*#__PURE__*/ jsx_runtime_.jsx("button", {
                style: {
                    pointerEvents: "all"
                },
                onMouseDown: (e)=>handleClick(e, i)
                ,
                className: "reset",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(SlideDotControls_module_default()).Dot} ${slideNumber == i ? (SlideDotControls_module_default()).Active : ""}`
                })
            }, i));
        }
        return dots;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            pointerEvents: "none"
        },
        children: createDots()
    }));
};
/* harmony default export */ const SlideDotControls_SlideDotControls = (SlideDotControls);

// EXTERNAL MODULE: ./Layout/Fixed/Fixed.tsx
var Fixed = __webpack_require__(2181);
// EXTERNAL MODULE: ./Layout/PageContainer/PageContainer.tsx
var PageContainer = __webpack_require__(3098);
// EXTERNAL MODULE: ./Hooks/useSwipeable.tsx
var useSwipeable = __webpack_require__(2665);
// EXTERNAL MODULE: ./components/PageHeader/PageHeader.tsx
var PageHeader = __webpack_require__(8200);
;// CONCATENATED MODULE: ./pages/Crew.tsx










const Crew = ({ crew  })=>{
    const { 0: activeSlide , 1: setActiveSlide  } = (0,external_react_.useState)(0);
    const PageTitle = "02 Crew";
    const currCrew = crew[activeSlide];
    const crewComponent = (0,external_react_.useRef)(null);
    function swipeLeft() {
        setActiveSlide((curr)=>{
            if (curr < crew.length - 1) {
                return curr + 1;
            }
            return crew.length - 1;
        });
    }
    function swipeRight() {
        setActiveSlide((curr)=>{
            if (curr > 0) {
                return curr - 1;
            }
            return 0;
        });
    }
    (0,external_react_.useEffect)(()=>{
        if (crewComponent.current != null) {
            const unmount = (0,useSwipeable/* default */.Z)(crewComponent.current, swipeLeft, swipeRight, "50%");
            return unmount;
        }
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "st-Crew",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHead/* default */.Z, {
                    title: PageTitle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(PageContainer/* default */.Z, {
                    centered: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Fixed/* FixedBottom */.v, {
                        elRef: crewComponent,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TwoColumn/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                                            preText: "02",
                                            title: "Meet Your Crew"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "font-sm text-dark-grey",
                                            children: currCrew.role
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "font-base text-white",
                                            children: currCrew.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "font-base text-light-blue",
                                            children: currCrew.bio
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "st-Crew-slideControls",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SlideDotControls_SlideDotControls, {
                                                slideCount: crew.length,
                                                setSlideNumber: setActiveSlide,
                                                slideNumber: activeSlide
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "st-Crew-Image",
                                        src: currCrew.images.png,
                                        height: 700
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
};
async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${Config/* Server */.x}data.json`);
    const data = await res.json();
    const crew = data.crew;
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            crew
        }
    };
}
/* harmony default export */ const pages_Crew = (Crew);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,922,463], () => (__webpack_exec__(3332)));
module.exports = __webpack_exports__;

})();