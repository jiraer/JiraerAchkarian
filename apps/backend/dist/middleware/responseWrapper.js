"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseWrapper = void 0;
const responseWrapper = (_req, res, next) => {
    res.success = (data, meta) => {
        res.json({ success: true, data, meta: meta || null });
    };
    res.fail = (statusCode, message, details) => {
        res.status(statusCode).json({ success: false, error: { message, details } });
    };
    next();
};
exports.responseWrapper = responseWrapper;
