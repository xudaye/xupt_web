webpackHotUpdate(0,{

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(181)();
	// imports


	// module
	exports.push([module.id, "\n* {\n    margin: 0px !important;\n    padding: 0px !important;\n}\n\nbody {\n    /*background: #b1b1b1;*/\n    margin: 0px !important;\n    padding: 0px !important;\n    font-size: 14px !important;\n    color: #000 !important;\n}\n/**/\n.logo{\n    transform: scale(1,-1) !important;\n    transform:rotateY(180deg) !important;\n}\n\n.menuHolder {\n    width: 100px !important;\n    height: 100px !important;\n    position: relative !important;\n    float: right !important;\n    z-index: 100 !important;\n    transform: scale(-1,1) !important;\n}\n\n.menuHolder ul {\n    padding: 0 !important;\n    margin: 0 !important;\n    list-style: none !important;\n    position: absolute !important;\n    /* left: 0;\n     top: 0;\n     width: 0;\n     height: 0;*/\n}\n\n.menuHolder ul li {\n    border-radius: 0 0 300px 0;\n    width: 0;\n    height: 0;\n}\n\n.menuHolder ul li a {\n    color: #000;\n    text-decoration: none;\n    font: bold 13px/30px arial, sans-serif;\n    text-align: center;\n    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.4);\n    -webkit-transform-origin: 0 0;\n    -moz-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    -o-transform-origin: 0 0;\n    transform-origin: 0 0;\n}\n\n.menuHolder ul.p1 li {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.menuHolder ul.p2 {\n    z-index: -1;\n}\n\n.menuHolder ul.p3 {\n    z-index: -1;\n}\n\n.menuHolder li.s1 > a {\n    position: absolute;\n    display: block;\n    width: 100px;\n    height: 100px;\n    background: #c8c8c8;\n    border-radius: 0 0 100px 0;\n}\n\n.menuHolder li.s2 > a {\n    position: absolute;\n    display: block;\n    width: 100px;\n    padding-left: 100px;\n    height: 200px;\n    background: #ddd;\n    border-radius: 0 0 200px 0;\n}\n\n.menuHolder ul.p3 li a {\n    position: absolute;\n    display: block;\n    width: 100px;\n    padding-left: 200px;\n    height: 300px;\n    background: #999;\n    border-radius: 0 0 300px 0;\n}\n\n.menuHolder ul ul {\n    -webkit-transform-origin: 0 0;\n    -moz-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    -o-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotateZ(90deg);\n    -ms-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-transition: 1s;\n    -moz-transition: 1s;\n    -ms-transition: 1s;\n    -o-transition: 1s;\n    transition: 1s;\n}\n\n.menuHolder li.s2:nth-of-type(6) > a {\n    background: #888;\n    -webkit-transform: rotate(75deg);\n    -moz-transform: rotateZ(75deg);\n    -ms-transform: rotate(75deg);\n    -o-transform: rotate(75deg);\n    transform: rotate(75deg);\n}\n\n.menuHolder li.s2:nth-of-type(5) > a {\n    background: #999;\n    -webkit-transform: rotate(60deg);\n    -moz-transform: rotateZ(60deg);\n    -ms-transform: rotate(60deg);\n    -o-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n\n.menuHolder li.s2:nth-of-type(4) > a {\n    background: #aaa;\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotateZ(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n.menuHolder li.s2:nth-of-type(3) > a {\n    background: #bbb;\n    -webkit-transform: rotate(30deg);\n    -moz-transform: rotateZ(30deg);\n    -ms-transform: rotate(30deg);\n    -o-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n\n.menuHolder li.s2:nth-of-type(2) > a {\n    background: #ccc;\n    -webkit-transform: rotate(15deg);\n    -moz-transform: rotateZ(15deg);\n    -ms-transform: rotate(15deg);\n    -o-transform: rotate(15deg);\n    transform: rotate(15deg);\n}\n\n.menuHolder .a6 li:nth-of-type(6) > a {\n    background: #444;\n    -webkit-transform: rotate(75deg);\n    -moz-transform: rotateZ(75deg);\n    -ms-transform: rotate(75deg);\n    -o-transform: rotate(75deg);\n    transform: rotate(75deg);\n}\n\n.menuHolder .a6 li:nth-of-type(5) > a {\n    background: #555;\n    -webkit-transform: rotate(60deg);\n    -moz-transform: rotateZ(60deg);\n    -ms-transform: rotate(60deg);\n    -o-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n\n.menuHolder .a6 li:nth-of-type(4) > a {\n    background: #666;\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotateZ(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n.menuHolder .a6 li:nth-of-type(3) > a {\n    background: #777;\n    -webkit-transform: rotate(30deg);\n    -moz-transform: rotateZ(30deg);\n    -ms-transform: rotate(30deg);\n    -o-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n\n.menuHolder .a6 li:nth-of-type(2) > a {\n    background: #888;\n    -webkit-transform: rotate(15deg);\n    -moz-transform: rotateZ(15deg);\n    -ms-transform: rotate(15deg);\n    -o-transform: rotate(15deg);\n    transform: rotate(15deg);\n}\n\n.menuHolder .a5 li:nth-of-type(5) > a {\n    background: #555;\n    -webkit-transform: rotate(72deg);\n    -moz-transform: rotateZ(72deg);\n    -ms-transform: rotate(72deg);\n    -o-transform: rotate(72deg);\n    transform: rotate(72deg);\n}\n\n.menuHolder .a5 li:nth-of-type(4) > a {\n    background: #666;\n    -webkit-transform: rotate(54deg);\n    -moz-transform: rotateZ(54deg);\n    -ms-transform: rotate(54deg);\n    -o-transform: rotate(54deg);\n    transform: rotate(54deg);\n}\n\n.menuHolder .a5 li:nth-of-type(3) > a {\n    background: #777;\n    -webkit-transform: rotate(36deg);\n    -moz-transform: rotateZ(36deg);\n    -ms-transform: rotate(36deg);\n    -o-transform: rotate(36deg);\n    transform: rotate(36deg);\n}\n\n.menuHolder .a5 li:nth-of-type(2) > a {\n    background: #888;\n    -webkit-transform: rotate(18deg);\n    -moz-transform: rotateZ(18deg);\n    -ms-transform: rotate(18deg);\n    -o-transform: rotate(18deg);\n    transform: rotate(18deg);\n}\n\n.menuHolder .a3 li:nth-of-type(3) > a {\n    background: #777;\n    -webkit-transform: rotate(60deg);\n    -moz-transform: rotateZ(60deg);\n    -ms-transform: rotate(60deg);\n    -o-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n\n.menuHolder .a3 li:nth-of-type(2) > a {\n    background: #888;\n    -webkit-transform: rotate(30deg);\n    -moz-transform: rotateZ(30deg);\n    -ms-transform: rotate(30deg);\n    -o-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n\n.menuHolder li.s1:hover ul.p2 {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotateZ(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n\n.menuHolder li.s2:hover ul.p3 {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotateZ(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n\n.menuHolder ul li:hover > a {\n    background: #f00;\n    color: #fff;\n}\n\n.menuHolder li.s2:hover > a {\n    background: #d00;\n    color: #fff;\n}\n\n.menuHolder .a6 li:hover > a {\n    background: #b00;\n    color: #fff;\n}\n\n.menuHolder .a5 li:hover > a {\n    background: #b00;\n    color: #fff;\n}\n\n.menuHolder .a3 li:hover > a {\n    background: #b00;\n    color: #fff;\n}\n\n.menuWindow {\n    width: 110px;\n    height: 110px;\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 100;\n    -webkit-transition: 0s 1s;\n    -moz-transition: 0s 1s;\n    -ms-transition: 0s 1s;\n    -o-transition: 0s 1s;\n    transition: 0s 1s;\n}\n\n.menuHolder:hover .menuWindow {\n    width: 310px;\n    height: 310px;\n    -webkit-transition: 0s 0s;\n    -moz-transition: 0s 0s;\n    -ms-transition: 0s 0s;\n    -o-transition: 0s 0s;\n    transition: 0s 0s;\n}\n\n.menuHolder span {\n    display: block;\n    -webkit-transform: rotate(5deg);\n    -moz-transform: rotateZ(5deg);\n    -ms-transform: rotate(5deg);\n    -o-transform: rotate(5deg);\n    transform: rotate(5deg);\n}\n\n.menuHolder ~ img.close {\n    width: 0;\n    height: 0;\n    position: fixed;\n    z-index: -1;\n    left: 0;\n    top: 0;\n}\n\n.menuHolder:hover ~ img.close {\n    width: 100%;\n    height: 100%;\n}\n\n/*轮播结束*/\n#top{\n    height: 100px;\n    width: 100%;\n    /*background-color: #5AABEC;*/\n    border: 1px solid #000;\n}\n#left1{\n    height: 100px;\n    width: 800px;\n    /*border: 1px solid #000;*/\n    float: left;\n}\n#left1 img{\n    width: 100%;\n    height: 100%;\n    margin:-0.5% 0;\n}\n\n\n\n", ""]);

	// exports


/***/ }

})
//# sourceMappingURL=0.6ed8e5dfd50ba2d7aadb.hot-update.js.map