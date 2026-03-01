"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchema = void 0;
const zod_1 = require("zod");
exports.contactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(80),
    email: zod_1.z.string().email(),
    message: zod_1.z.string().min(20).max(2000),
    company: zod_1.z.string().max(120).optional(),
    budgetRange: zod_1.z.string().max(60).optional(),
    source: zod_1.z.string().max(80).optional(),
    honeypot: zod_1.z.string().optional()
});
