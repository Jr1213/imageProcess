"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nameMiddelware_1 = __importDefault(require("./middelware/nameMiddelware"));
const imageProcess_1 = __importDefault(require("./utility/imageProcess"));
const existedImageMiddelware_1 = __importDefault(require("./middelware/existedImageMiddelware"));
const app = (0, express_1.default)();
const port = 3001;
app.use([nameMiddelware_1.default, existedImageMiddelware_1.default]);
app.get('/api', (req, res) => {
    const name = req.query.name;
    const height = parseInt(req.query.h);
    const width = parseInt(req.query.w);
    const response = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, imageProcess_1.default)(name, height, width);
        if (data[0]) {
            res.sendFile(data[1]);
        }
        else {
            res.end(data[1]);
        }
    });
    response();
});
app.listen(port, () => {
    console.log(`server is runing on http://127.0.0.1:${port}`);
});
exports.default = app;
