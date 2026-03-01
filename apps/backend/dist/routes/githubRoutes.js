"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const githubController_1 = require("../controllers/githubController");
const router = (0, express_1.Router)();
// Public, read-only
router.get('/featured', githubController_1.getFeaturedGithub);
exports.default = router;
