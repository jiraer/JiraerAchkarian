"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const contactValidation_1 = require("../validation/contactValidation");
const contactService_1 = require("../services/contactService");
const ApiError_1 = require("../utils/ApiError");
exports.createContact = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const parsed = contactValidation_1.contactSchema.parse(req.body);
    if (parsed.honeypot && parsed.honeypot.trim().length > 0) {
        throw new ApiError_1.ApiError(400, 'Spam detected');
    }
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
        req.ip ||
        undefined;
    const meta = {
        userAgent: req.headers['user-agent'],
        ip
    };
    const result = await (0, contactService_1.createContactMessage)({
        ...parsed,
        userAgent: meta.userAgent,
        ip: meta.ip
    });
    res.success({ id: result.id, createdAt: result.createdAt });
});
