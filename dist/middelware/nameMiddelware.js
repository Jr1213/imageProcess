"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nameMiddelWare = (req, res, next) => {
    let name = req.query.name;
    if (name != null) {
        next();
    }
    else {
        res.status(404);
        res.send('image not found');
    }
};
exports.default = nameMiddelWare;
