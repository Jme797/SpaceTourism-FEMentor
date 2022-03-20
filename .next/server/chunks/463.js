"use strict";
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 2665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useSwipeable = (element, onSwipeLeft, onSwipeRight, leftPosition = "0px")=>{
    let touchstartX = 0;
    let touchendX = 0;
    function handleGesture() {
        if (touchendX < touchstartX) {
            onSwipeLeft();
        }
        if (touchendX > touchstartX) {
            onSwipeRight();
        }
    }
    function touchMove(e) {
        const mousePosition = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
        };
        element.style.left = mousePosition.x + "px";
    }
    function touchStart(e) {
        element.addEventListener('touchend', touchEnd);
        document.addEventListener('touchmove', touchMove);
        touchstartX = e.changedTouches[0].clientX;
        element.style.transform = "translateX(-50%)";
        element.style.transition = "0s";
        element.style.left = e.changedTouches[0].clientX + "px";
    }
    function touchEnd(e) {
        touchendX = e.changedTouches[0].clientX;
        element.style.transition = "0.3s";
        element.style.left = leftPosition;
        element.style.transform = "";
        document.removeEventListener('touchmove', touchMove);
        handleGesture();
    }
    element.addEventListener('touchstart', touchStart);
    return ()=>{
        element.removeEventListener('touchstart', touchStart);
        element.removeEventListener('touchend', touchEnd);
        document.removeEventListener('touchmove', touchMove);
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSwipeable);


/***/ }),

/***/ 8200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;