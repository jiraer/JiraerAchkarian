"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.ensureAdminSeeded = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const env_1 = require("../config/env");
const ensureAdminSeeded = async () => {
    const existing = await User_1.User.findOne({ email: env_1.env.ADMIN_EMAIL });
    if (existing)
        return;
    const passwordHash = await bcryptjs_1.default.hash(env_1.env.ADMIN_PASSWORD, 12);
    await User_1.User.create({
        email: env_1.env.ADMIN_EMAIL,
        passwordHash,
        role: 'admin'
    });
};
exports.ensureAdminSeeded = ensureAdminSeeded;
const login = async (email, password) => {
    const user = await User_1.User.findOne({ email });
    if (!user)
        return null;
    const match = await bcryptjs_1.default.compare(password, user.passwordHash);
    if (!match)
        return null;
    const token = jsonwebtoken_1.default.sign({ sub: user.id, role: user.role }, env_1.env.JWT_SECRET, {
        expiresIn: env_1.env.JWT_EXPIRES_IN
    });
    return { token };
};
exports.login = login;
