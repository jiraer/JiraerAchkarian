"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactRoutes_1 = __importDefault(require("./contactRoutes"));
const projectRoutes_1 = __importDefault(require("./projectRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const githubRoutes_1 = __importDefault(require("./githubRoutes"));
const router = (0, express_1.Router)();
router.use('/contact', contactRoutes_1.default);
router.use('/projects', projectRoutes_1.default);
router.use('/auth', authRoutes_1.default);
router.use('/integrations/github', githubRoutes_1.default);
exports.default = router;
