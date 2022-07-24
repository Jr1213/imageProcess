"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const process = (data, res) => {
    const imageName = `${data.query.name}`;
    const height = parseInt(data.query.h);
    const width = parseInt(data.query.w);
    const outDir = path_1.default.resolve(`thumbnul/${imageName}-small.jpg`);
    try {
        (0, sharp_1.default)(path_1.default.resolve(`full/${imageName}.jpg`))
            .resize({ height: height, width: width })
            .toFile(outDir)
            .then(() => {
            res.sendFile(outDir);
        });
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
exports.default = process;
