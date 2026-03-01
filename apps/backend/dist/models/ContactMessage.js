"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactMessage = void 0;
const mongoose_1 = require("mongoose");
const contactMessageSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    budgetRange: { type: String, trim: true },
    source: { type: String, trim: true },
    honeypot: { type: String },
    userAgent: { type: String },
    ipHash: { type: String }
}, { timestamps: true });
exports.ContactMessage = (0, mongoose_1.model)('ContactMessage', contactMessageSchema);
