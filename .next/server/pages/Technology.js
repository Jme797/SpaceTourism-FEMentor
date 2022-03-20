(() => {
var exports = {};
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 862:
/***/ ((module) => {

// Exports
module.exports = {
	"Dot": "SlideNumberedControls_Dot__6MAfe",
	"Active": "SlideNumberedControls_Active__hgzCz",
	"container": "SlideNumberedControls_container__mqxCL"
};


/***/ }),

/***/ 8901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Technology),
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
// EXTERNAL MODULE: ./Layout/PageContainer/PageContainer.tsx
var PageContainer = __webpack_require__(3098);
// EXTERNAL MODULE: ./Layout/TwoColumn/TwoColumn.tsx
var TwoColumn = __webpack_require__(1444);
// EXTERNAL MODULE: ./components/SlideNumberedControls/SlideNumberedControls.module.scss
var SlideNumberedControls_module = __webpack_require__(862);
var SlideNumberedControls_module_default = /*#__PURE__*/__webpack_require__.n(SlideNumberedControls_module);
;// CONCATENATED MODULE: ./components/SlideNumberedControls/SlideNumberedControls.tsx



const SlideNumberedControls = ({ slideCount , setSlideNumber , slideNumber  })=>{
    function createDots() {
        const dots = [];
        for(let i = 0; i < slideCount; i++){
            dots.push(/*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>setSlideNumber(i)
                ,
                className: "reset",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(SlideNumberedControls_module_default()).Dot} ${slideNumber == i ? (SlideNumberedControls_module_default()).Active : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-sm",
                        children: i + 1
                    })
                })
            }, i));
        }
        return dots;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (SlideNumberedControls_module_default()).container,
        children: createDots()
    }));
};
/* harmony default export */ const SlideNumberedControls_SlideNumberedControls = (SlideNumberedControls);

// EXTERNAL MODULE: ./Hooks/useBreakpoint.tsx + 1 modules
var useBreakpoint = __webpack_require__(4095);
// EXTERNAL MODULE: ./components/PageHeader/PageHeader.tsx
var PageHeader = __webpack_require__(8200);
// EXTERNAL MODULE: ./Hooks/useSwipeable.tsx
var useSwipeable = __webpack_require__(2665);
;// CONCATENATED MODULE: ./pages/Technology.tsx










const Technology = ({ technologies  })=>{
    const { 0: activeSlide , 1: setActiveSlide  } = (0,external_react_.useState)(0);
    const PageTitle = "03 Technology";
    const activeTech = technologies[activeSlide];
    const swipeableComponent = (0,external_react_.useRef)(null);
    const isDesktop = (0,useBreakpoint/* default */.Z)(Config/* breakpoints.lg */.A.lg);
    function handleLeftSwipe() {
        setActiveSlide((curr)=>{
            if (curr < technologies.length - 1) {
                return curr + 1;
            }
            return technologies.length - 1;
        });
    }
    function handleRightSwipe() {
        setActiveSlide((curr)=>{
            if (curr > 0) {
                return curr - 1;
            }
            return 0;
        });
    }
    (0,external_react_.useEffect)(()=>{
        if (swipeableComponent.current) {
            const unmount = (0,useSwipeable/* default */.Z)(swipeableComponent.current, handleLeftSwipe, handleRightSwipe);
            return unmount;
        }
    }, [
        isDesktop
    ]);
    function crewC() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TwoColumn/* default */.Z, {
            reverse: !isDesktop,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        isDesktop && /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                            preText: "03",
                            title: "Space launch 101"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TwoColumn/* default */.Z, {
                            leftColumns: 1,
                            rightColumns: 5,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(SlideNumberedControls_SlideNumberedControls, {
                                        slideCount: technologies.length,
                                        slideNumber: activeSlide,
                                        setSlideNumber: setActiveSlide
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "st-Technology-body",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "font-base text-light-blue",
                                                children: "The Terminology..."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "text-white font-base",
                                                children: activeTech.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-light-blue font-base",
                                                children: activeTech.description
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        textAlign: "right"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "st-Technology-Image",
                        src: isDesktop ? activeTech.images.portrait : activeTech.images.landscape,
                        width: 500,
                        height: 500
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "st-Technology",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHead/* default */.Z, {
                    title: PageTitle
                }),
                isDesktop && /*#__PURE__*/ jsx_runtime_.jsx(PageContainer/* default */.Z, {
                    right: true,
                    children: crewC()
                }),
                !isDesktop && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        position: "fixed",
                        width: "100vw"
                    },
                    children: [
                        !isDesktop && /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                            preText: "03",
                            title: "Space launch 101"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            ref: swipeableComponent,
                            style: {
                                position: "absolute",
                                width: "100vw"
                            },
                            children: crewC()
                        })
                    ]
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
    const technologies = data.technology;
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            technologies
        }
    };
}
/* harmony default export */ const pages_Technology = (Technology);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,922,463], () => (__webpack_exec__(8901)));
module.exports = __webpack_exports__;

})();