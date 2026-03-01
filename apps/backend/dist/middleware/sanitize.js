"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = void 0;
const sanitizeString = (value) => {
    if (typeof value !== 'string')
        return value;
    return value.replace(/<script.*?>.*?<\/script>/gi, '').trim();
};
const deepSanitize = (obj) => {
    if (Array.isArray(obj))
        return obj.map(deepSanitize);
    if (obj && typeof obj === 'object') {
        const out = {};
        Object.keys(obj).forEach((key) => {
            out[key] = deepSanitize(obj[key]);
        });
        return out;
    }
    return sanitizeString(obj);
};
const sanitize = (req, _res, next) => {
    if (req.body)
        req.body = deepSanitize(req.body);
    if (req.query)
        req.query = deepSanitize(req.query);
    next();
};
exports.sanitize = sanitize;
