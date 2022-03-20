(() => {
var exports = {};
exports.id = 629;
exports.ids = [629];
exports.modules = {

/***/ 1525:
/***/ ((module) => {

// Exports
module.exports = {
	"Centered": "Centered_Centered__6R2nM",
	"Vertical": "Centered_Vertical___t4LJ",
	"Horizontal": "Centered_Horizontal__equ3p"
};


/***/ }),

/***/ 7878:
/***/ ((module) => {

// Exports
module.exports = {
	"Planet": "Planet_Planet__G0wBq"
};


/***/ }),

/***/ 9042:
/***/ ((module) => {

// Exports
module.exports = {
	"Tabs": "Tabs_Tabs__vSedd",
	"active": "Tabs_active__fDJcH"
};


/***/ }),

/***/ 8200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PageHeader = ({ preText , title  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
        className: "font-base text-white",
        style: {
            margin: "4rem 0"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-dark-grey",
                children: preText
            }),
            " ",
            title
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);


/***/ }),

/***/ 9569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Destination),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/PageHead/PageHead.tsx + 1 modules
var PageHead = __webpack_require__(4728);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Layout/Centered/Centered.module.scss
var Centered_module = __webpack_require__(1525);
var Centered_module_default = /*#__PURE__*/__webpack_require__.n(Centered_module);
;// CONCATENATED MODULE: ./Layout/Centered/Centered.tsx



const Centered = ({ children , vertical =false , horizontal =false  })=>{
    let styles = (Centered_module_default()).Centered;
    if (vertical) styles = (Centered_module_default()).Vertical;
    if (horizontal) styles = (Centered_module_default()).Horizontal;
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: styles,
        children: children
    }));
};
/* harmony default export */ const Centered_Centered = (Centered);

// EXTERNAL MODULE: ./Layout/TwoColumn/TwoColumn.tsx
var TwoColumn = __webpack_require__(1444);
// EXTERNAL MODULE: ./components/Tabs/Tabs.module.scss
var Tabs_module = __webpack_require__(9042);
var Tabs_module_default = /*#__PURE__*/__webpack_require__.n(Tabs_module);
;// CONCATENATED MODULE: ./components/Tabs/Tabs.tsx



const Tabs = ({ tabs , activeTab , setActiveTab  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (Tabs_module_default()).Tabs,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "reset",
            children: tabs.map((tab, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `reset ${activeTab === tab ? (Tabs_module_default()).active : ""}`,
                        onClick: ()=>setActiveTab(tab)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: `font-sm ${activeTab === tab ? "text-white" : "text-light-blue"}`,
                            children: tab
                        })
                    })
                }, i)
            )
        })
    }));
};
/* harmony default export */ const Tabs_Tabs = (Tabs);

// EXTERNAL MODULE: ./components/Planet/Planet.module.scss
var Planet_module = __webpack_require__(7878);
var Planet_module_default = /*#__PURE__*/__webpack_require__.n(Planet_module);
;// CONCATENATED MODULE: ./components/Planet/Planet.tsx





const Planet = ({ data  })=>{
    const tabs = data.map((planet)=>planet.name
    );
    const { 0: activeTab , 1: setActiveTab  } = (0,external_react_.useState)(data[0].name);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.map((planet, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Planet_module_default()).Planet,
                children: activeTab == planet.name && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TwoColumn/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: planet.images.png
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Tabs_Tabs, {
                                        tabs: tabs,
                                        setActiveTab: setActiveTab,
                                        activeTab: activeTab
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "font-l text-white",
                                                children: planet.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-base text-light-blue",
                                                children: planet.description
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TwoColumn/* default */.Z, {
                                                collapse: false,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "text-light-blue font-sm",
                                                                children: "Avg. Distance"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                className: "font-sm",
                                                                children: planet.distance
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "text-light-blue font-sm",
                                                                children: "Est. Travel Time"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                className: "font-sm",
                                                                children: planet.travel
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }, i)
        )
    }));
};
/* harmony default export */ const Planet_Planet = (Planet);

// EXTERNAL MODULE: ./Config/index.js
var Config = __webpack_require__(3030);
// EXTERNAL MODULE: ./Layout/PageContainer/PageContainer.tsx
var PageContainer = __webpack_require__(3098);
// EXTERNAL MODULE: ./components/PageHeader/PageHeader.tsx
var PageHeader = __webpack_require__(8200);
;// CONCATENATED MODULE: ./pages/Destination.tsx







const Destination = ({ destinations  })=>{
    const PageTitle = "01 Destination";
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "st-Destination",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PageHead/* default */.Z, {
                    title: PageTitle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(PageContainer/* default */.Z, {
                    centered: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Centered_Centered, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                                preText: "01",
                                title: "Pick your Destination"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Planet_Planet, {
                                data: destinations
                            })
                        ]
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
    const destinations = data.destinations;
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            destinations
        }
    };
}
/* harmony default export */ const pages_Destination = (Destination);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,922], () => (__webpack_exec__(9569)));
module.exports = __webpack_exports__;

})();