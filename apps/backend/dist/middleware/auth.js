"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const ApiError_1 = require("../utils/ApiError");
const requireAuth = (req, _res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
        throw new ApiError_1.ApiError(401, 'Missing or invalid authorization header');
    }
    const token = header.split(' ')[1];
    try {
        const payload = jsonwebtoken_1.default.verify(token, env_1.env.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch {
        throw new ApiError_1.ApiError(401, 'Invalid or expired token');
    }
};
exports.requireAuth = requireAuth;
const requireAdmin = (req, _res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        throw new ApiError_1.ApiError(403, 'Admin access required');
    }
    next();
};
exports.requireAdmin = requireAdmin;
