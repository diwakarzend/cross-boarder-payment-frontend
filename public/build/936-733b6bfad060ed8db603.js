"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[936],{

/***/ 7936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"v\": () => (/* binding */ UpiCollectionsStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5458);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar UpiCollectionsStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__/* [\"default\"].div */ .ZP.div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  .wallet-wrapper {\\n    background: #000 url(\\\"/images/dashboard-bg.png\\\") no-repeat right center;\\n    height: 71px;\\n    display: flex;\\n    align-items: center;\\n    padding: 0 23px;\\n    border-radius: 20px;\\n    font-family: \\\"Cabin\\\", Times, serif;\\n    margin-bottom: 20px;\\n    .image {\\n      margin-right: 24px;\\n    }\\n    .label {\\n      color: #8b9ca8;\\n      font-size: 15px;\\n      line-height: 18px;\\n      margin-bottom: 2px;\\n    }\\n    .value {\\n      color: #fff;\\n      font-size: 20px;\\n      line-height: 28px;\\n      margin-bottom: 2px;\\n    }\\n    .list {\\n      align-items: center;\\n      &:first-child {\\n        padding-right: 40px;\\n        margin-right: 40px;\\n        border-right: 1px dashed #dfdfdf;\\n      }\\n      .refresh {\\n        button {\\n          background-color: #ff6600;\\n          width: 30px;\\n          height: 30px;\\n          border-radius: 50%;\\n          display: flex;\\n          align-items: center;\\n          justify-content: center;\\n          border: none;\\n          margin-left: 36px;\\n          i {\\n            color: #fff;\\n          }\\n        }\\n      }\\n    }\\n  }\\n  .filter-table {\\n    gap: 16px;\\n    width: 100%;\\n    .left {\\n      .border-btn {\\n        margin-right: 10px;\\n        &:last-child {\\n          margin-right: 0;\\n        }\\n      }\\n    }\\n    .right {\\n      .form-control {\\n        background: transparent;\\n        border: none;\\n        border-radius: none;\\n        font-size: 15px;\\n        height: 40px;\\n      }\\n      .form-wrapper {\\n        height: 40px;\\n        background-color: #fff;\\n        border: 1px solid rgba(223, 223, 223, 1);\\n        border-radius: 20px;\\n      }\\n      span {\\n        color: rgba(139, 156, 168, 0.5);\\n        font-size: 14px;\\n      }\\n      .csv-link {\\n        width: 31px;\\n        height: 31px;\\n        border: 1px solid rgba(8, 91, 81, 1);\\n        background-color: rgba(12, 136, 121, 1);\\n        margin-right: 5px;\\n        color: #fff;\\n        font-size: 14px;\\n        &:hover {\\n          color: #fff;\\n        }\\n      }\\n    }\\n  }\\n  .card-title {\\n    font-size: 20px;\\n    font-weight: 700;\\n    color: rgba(6, 49, 81, 1);\\n    font-family: \\\"Cabin\\\", sans-serif;\\n  }\\n  .status-wrap {\\n    height: 50px;\\n    align-items: center;\\n  }\\n  .status {\\n    margin-left: 50px;\\n    span {\\n      padding-left: 16px;\\n      font-size: 14px;\\n      font-weight: 500;\\n      color: #000;\\n      font-family: \\\"Cabin\\\", sans-serif;\\n      position: relative;\\n      padding-right: 22px;\\n      margin-right: 22px;\\n      border-right: 1px solid rgba(0, 0, 0, 0.05);\\n      :last-child {\\n        padding-right: 0;\\n        margin-right: 0;\\n        border-right: none;\\n      }\\n      &:before {\\n        content: \\\"\\\";\\n        width: 11px;\\n        height: 11px;\\n        border-radius: 50%;\\n        position: absolute;\\n        top: 50%;\\n        left: 0;\\n        transform: translateY(-50%);\\n      }\\n      &.upi {\\n        &:before {\\n          background-color: rgba(255, 102, 0, 1);\\n        }\\n      }\\n      &.QR {\\n        &:before {\\n          background-color: rgba(12, 136, 121, 1);\\n        }\\n      }\\n      &.NEFT {\\n        &:before {\\n          background-color: #ffba33;\\n        }\\n      }\\n      &.RTGS {\\n        &:before {\\n          background-color: #7832e6;\\n        }\\n      }\\n    }\\n  }\\n  .upi-n-qr-collection {\\n    padding: 20px 24px;\\n    flex-wrap: wrap;\\n\\n    > .flex {\\n      width: 100%;\\n      justify-content: space-between;\\n      padding: 0 10px;\\n      margin-bottom: 20px;\\n      .primary-btn {\\n        margin-right: 40px;\\n      }\\n      .form-control {\\n        height: 40px;\\n        background-color: #fff;\\n        border: 1px solid rgba(223, 223, 223, 1);\\n        border-radius: 20px;\\n        font-size: 14px;\\n        width: 250px;\\n        font-weight: 500;\\n        font-family: \\\"Cabin\\\", sans-serif;\\n      }\\n    }\\n  }\\n  .chart-container {\\n    width: calc(100% - 285px);\\n    img {\\n      width: 100%;\\n    }\\n  }\\n  .right-container {\\n    width: 100%;\\n    max-width: 285px;\\n    .collection-info {\\n      &:nth-child(3),\\n      &:nth-child(4) {\\n        margin-bottom: 0;\\n      }\\n    }\\n  }\\n  .container-pie-chart {\\n    div {\\n      max-width: 100%;\\n      max-height: 290px;\\n    }\\n    img,\\n    svg {\\n      width: 100%;\\n      max-height: 290px;\\n    }\\n  }\\n  .collection-info-wrapper {\\n    display: flex;\\n    justify-content: flex-end;\\n    flex-wrap: wrap;\\n    width: 100%;\\n  }\\n  .collection-info {\\n    padding: 14px 20px;\\n    border-radius: 10px 10px 0 10px;\\n    margin-bottom: 2px;\\n    display: flex;\\n    width: 124px;\\n    max-width: 48%;\\n    height: 140px;\\n    background: rgba(250, 250, 250, 1);\\n    border: 1px solid rgba(223, 223, 223, 1);\\n    margin-bottom: 10px;\\n    margin-left: 10px;\\n    font-size: \\\"Cabin\\\", sans-serif;\\n    &:hover,\\n    &.active {\\n      background: transparent\\n        linear-gradient(\\n          219deg,\\n          rgba(12, 136, 121, 1) 0%,\\n          rgba(105, 44, 255, 1) 100%\\n        )\\n        0% 0% no-repeat padding-box;\\n      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.17);\\n      color: #fff;\\n      .info-left {\\n        strong {\\n          color: #fff;\\n        }\\n      }\\n    }\\n    &.info {\\n      width: 24%;\\n      height: 70px;\\n      margin-bottom: 40px;\\n    }\\n    .info-left {\\n      flex: 1;\\n      align-items: flex-start;\\n      flex-direction: column;\\n      justify-content: center;\\n      .image {\\n        height: 38px;\\n        margin-bottom: 20px;\\n      }\\n      strong {\\n        font-size: 14px;\\n        font-weight: 500;\\n        color: #063151;\\n      }\\n      .text {\\n        display: flex;\\n        align-items: center;\\n        font-size: 15px;\\n        line-height: 18px;\\n        margin-bottom: 6px;\\n      }\\n    }\\n  }\\n  .container-pie-chart {\\n    margin: 0 auto;\\n    max-width: 100%;\\n    canvas {\\n      max-height: 260px;\\n      max-width: 400px;\\n    }\\n    .pie-direct {\\n      width: 100%;\\n      max-width: 180px;\\n      .total {\\n        background-color: #fafafa;\\n        border-radius: 5px;\\n        margin-bottom: 3px;\\n        padding: 10px 12px;\\n        color: #000;\\n        span {\\n          width: 12px;\\n          height: 12px;\\n          border-radius: 50%;\\n          margin-right: 8px;\\n        }\\n        &.tranction {\\n          span {\\n            background-color: #692cff;\\n          }\\n        }\\n        &.amount {\\n          span {\\n            background-color: #2a9cdb;\\n          }\\n        }\\n        &.synced {\\n          span {\\n            background-color: #f7b84b;\\n          }\\n        }\\n        &.credited {\\n          span {\\n            background-color: #d92650;\\n          }\\n        }\\n      }\\n    }\\n  }\\n  .csv-link {\\n    width: 39px;\\n    height: 39px;\\n    border-radius: 50%;\\n    background-color: #eaeef2;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    color: #aaa;\\n    font-size: 20px;\\n    transition: all 500ms ease-in-out;\\n    &:hover {\\n      background-color: rgb(41, 156, 219, 0.4);\\n      color: rgb(41, 156, 219, 0.8);\\n    }\\n  }\\n\"])));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzkzNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ08sSUFBTUMsbUJBQW1CLEdBQUdELDJFQUFILHlqT0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ib2lsZXItcGxhdGUvLi9zcmMvQ29tcG9uZW50cy9EYXNoYm9hcmQvUHRtVmVuZG9yL3N0eWxlLmpzP2RiNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmV4cG9ydCBjb25zdCBVcGlDb2xsZWN0aW9uc1N0eWxlID0gc3R5bGVkLmRpdmBcbiAgLndhbGxldC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwIHVybChcIi9pbWFnZXMvZGFzaGJvYXJkLWJnLnBuZ1wiKSBuby1yZXBlYXQgcmlnaHQgY2VudGVyO1xuICAgIGhlaWdodDogNzFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAyM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2FiaW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLmltYWdlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG4gICAgLmxhYmVsIHtcbiAgICAgIGNvbG9yOiAjOGI5Y2E4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgfVxuICAgIC52YWx1ZSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cbiAgICAubGlzdCB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICNkZmRmZGY7XG4gICAgICB9XG4gICAgICAucmVmcmVzaCB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYwMDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZpbHRlci10YWJsZSB7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5sZWZ0IHtcbiAgICAgIC5ib3JkZXItYnRuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQge1xuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjMsIDIyMywgMjIzLCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmdiYSgxMzksIDE1NiwgMTY4LCAwLjUpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAuY3N2LWxpbmsge1xuICAgICAgICB3aWR0aDogMzFweDtcbiAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgsIDkxLCA4MSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEzNiwgMTIxLCAxKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogcmdiYSg2LCA0OSwgODEsIDEpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLnN0YXR1cy13cmFwIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc3RhdHVzIHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBzcGFuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluXCIsIHNhbnMtc2VyaWY7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxMXB4O1xuICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuICAgICAgJi51cGkge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwMiwgMCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuUVIge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTM2LCAxMjEsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLk5FRlQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmEzMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5SVEdTIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODMyZTY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnVwaS1uLXFyLWNvbGxlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICA+IC5mbGV4IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIC5wcmltYXJ5LWJ0biB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgIH1cbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIzLCAyMjMsIDIyMywgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LWZhbWlseTogXCJDYWJpblwiLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjg1cHgpO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAyODVweDtcbiAgICAuY29sbGVjdGlvbi1pbmZvIHtcbiAgICAgICY6bnRoLWNoaWxkKDMpLFxuICAgICAgJjpudGgtY2hpbGQoNCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29udGFpbmVyLXBpZS1jaGFydCB7XG4gICAgZGl2IHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDI5MHB4O1xuICAgIH1cbiAgICBpbWcsXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMjkwcHg7XG4gICAgfVxuICB9XG4gIC5jb2xsZWN0aW9uLWluZm8td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29sbGVjdGlvbi1pbmZvIHtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTI0cHg7XG4gICAgbWF4LXdpZHRoOiA0OCU7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIzLCAyMjMsIDIyMywgMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IFwiQ2FiaW5cIiwgc2Fucy1zZXJpZjtcbiAgICAmOmhvdmVyLFxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG4gICAgICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAyMTlkZWcsXG4gICAgICAgICAgcmdiYSgxMiwgMTM2LCAxMjEsIDEpIDAlLFxuICAgICAgICAgIHJnYmEoMTA1LCA0NCwgMjU1LCAxKSAxMDAlXG4gICAgICAgIClcbiAgICAgICAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgLmluZm8tbGVmdCB7XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5pbmZvIHtcbiAgICAgIHdpZHRoOiAyNCU7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbiAgICAuaW5mby1sZWZ0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIC5pbWFnZSB7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICMwNjMxNTE7XG4gICAgICB9XG4gICAgICAudGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRhaW5lci1waWUtY2hhcnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBjYW52YXMge1xuICAgICAgbWF4LWhlaWdodDogMjYwcHg7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgICAucGllLWRpcmVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgICAudG90YWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAmLnRyYW5jdGlvbiB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjkyY2ZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFtb3VudCB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5Y2RiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnN5bmNlZCB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdiODRiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmNyZWRpdGVkIHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTI2NTA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jc3YtbGluayB7XG4gICAgd2lkdGg6IDM5cHg7XG4gICAgaGVpZ2h0OiAzOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlZWYyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAxNTYsIDIxOSwgMC40KTtcbiAgICAgIGNvbG9yOiByZ2IoNDEsIDE1NiwgMjE5LCAwLjgpO1xuICAgIH1cbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJVcGlDb2xsZWN0aW9uc1N0eWxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7936\n");

/***/ })

}]);