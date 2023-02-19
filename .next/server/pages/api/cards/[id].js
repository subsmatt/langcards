"use strict";
(() => {
var exports = {};
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


const { promisify  } = __webpack_require__(837);
const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));
const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));
const delay = (ms)=>new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
async function handler(req, res) {
    const method = req?.method;
    const id = parseInt(req?.query.id);
    const recordFromBody = req?.body;
    switch(method){
        case "POST":
            await postMethod();
            break;
        case "PUT":
            await putMethod();
            break;
        case "DELETE":
            deleteMethod();
            break;
        default:
            res.status(501).send(`Method ${method} not implemented`);
            console.log(`Method ${method} not implemented`);
    }
    //const jsonFile = path.resolve("./", "db.json");
    async function putMethod() {
        try {
            const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const sampleData = JSON.parse(readFileData).cards;
            if (sampleData) {
                const newCardsArray = sampleData.map(function(rec) {
                    return rec.id == id ? recordFromBody : rec;
                });
                writeFile(jsonFile, JSON.stringify({
                    cards: newCardsArray
                }, null, 2));
                res.setHeader("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                console.log(`PUT /api/cards/${id} status: 200`);
            }
        } catch (err) {
            res.status(500).send(`PUT /api/cards/${id} Status: 500`);
            console.log(`PUT /api/cards/${id} Error: `, err);
        }
    }
    async function deleteMethod() {
        try {
            const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const sampleData = JSON.parse(readFileData).cards;
            if (sampleData) {
                const newCardsArray = sampleData.filter(function(rec) {
                    return rec.id != id;
                });
                writeFile(jsonFile, JSON.stringify({
                    cards: newCardsArray
                }, null, 2));
                res.setHeader("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(sampleData.find((rec)=>rec.id == id), null, 2));
                console.log(`DELETE /api/cards/${id} status: 200`);
            }
        } catch (err) {
            res.status(500).send(`DELETE /api/cards/${id} Status: 500`);
            console.log(`DELETE /api/cards/${id} Error: `, err);
        }
    }
    async function postMethod() {
        try {
            const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const sampleData = JSON.parse(readFileData).cards;
            if (sampleData) {
                const idNew = sampleData.reduce((accumulator, currentValue)=>{
                    const idCurrent = parseInt(currentValue.id);
                    return idCurrent > accumulator ? idCurrent : accumulator;
                }, 0) + 1;
                const newCardRec = {
                    ...recordFromBody,
                    id: idNew.toString()
                };
                const newCardsArray = [
                    newCardRec,
                    ...sampleData
                ];
                writeFile(jsonFile, JSON.stringify({
                    cards: newCardsArray
                }, null, 2));
                res.setHeader("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(newCardRec, null, 2));
                console.log(`POST /api/cards/${idNew} status: 200`);
            }
        } catch (err) {
            res.status(500).send(`POST /api/cards/${id} Status: 500`);
            console.log(`POST /api/cards/${id} Error: `, err);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(727));
module.exports = __webpack_exports__;

})();