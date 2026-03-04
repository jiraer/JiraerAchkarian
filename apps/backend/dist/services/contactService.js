"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactMessage = void 0;
const crypto_1 = __importDefault(require("crypto"));
const ContactMessage_1 = require("../models/ContactMessage");
const createContactMessage = async (data) => {
    const ipHash = data.ip
        ? crypto_1.default.createHash('sha256').update(data.ip).digest('hex')
        : undefined;
    const doc = await ContactMessage_1.ContactMessage.create({
        name: data.name,
        email: data.email,
        message: data.message,
        company: data.company,
        budgetRange: data.budgetRange,
        source: data.source,
        honeypot: data.honeypot,
        userAgent: data.userAgent,
        ipHash
    });
    return { id: doc.id, createdAt: doc.createdAt };
};
exports.createContactMessage = createContactMessage;
