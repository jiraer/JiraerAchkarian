"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLogin = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const authValidation_1 = require("../validation/authValidation");
const authService_1 = require("../services/authService");
const ApiError_1 = require("../utils/ApiError");
exports.adminLogin = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const parsed = authValidation_1.authSchema.parse(req.body);
    const result = await (0, authService_1.login)(parsed.email, parsed.password);
    if (!result) {
        throw new ApiError_1.ApiError(401, 'Invalid credentials');
    }
    res.success(result);
});
