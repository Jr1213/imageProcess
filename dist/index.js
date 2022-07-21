"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const nameMiddelware_1 = __importDefault(require("./middelware/nameMiddelware"));
const app = (0, express_1.default)();
const port = 3001;
app.get('/api', nameMiddelware_1.default, (req, res) => {
    let name = req.query.name;
    let image = path_1.default.resolve(`full/${name}`);
    let outDir = path_1.default.resolve(`thumbnul/${name}`);
    let options = {};
    req.query.h != null
        ? (options.hight = parseInt(req.query.h))
        : '';
    req.query.w != null
        ? (options.width = parseInt(req.query.w))
        : '';
    (0, sharp_1.default)(image)
        .resize(options)
        .toFile(outDir)
        .then(() => {
        res.status(200);
        res.sendFile(path_1.default.resolve(`thumbnul/${req.query.name}`));
    })
        .catch((e) => {
        console.log(e);
    });
});
app.listen(port, () => {
    console.log(`server is runing on 127.0.0.1:${port}`);
});
exports.default = app;
