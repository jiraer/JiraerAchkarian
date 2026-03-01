"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const ApiError_1 = require("../utils/ApiError");
const logger_1 = require("../config/logger");
const errorHandler = (err, _req, res, _next) => {
    let statusCode = 500;
    let message = 'Internal server error';
    let details = undefined;
    if (err instanceof ApiError_1.ApiError) {
        statusCode = err.statusCode;
        message = err.message;
        details = err.details;
    }
    else if (err instanceof zod_1.ZodError) {
        statusCode = 400;
        message = 'Validation failed';
        details = err.flatten();
    }
    logger_1.logger.error({ err, statusCode }, 'Request failed');
    res.status(statusCode).json({
        success: false,
        error: { message, details }
    });
};
exports.errorHandler = errorHandler;
