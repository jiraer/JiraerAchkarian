"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = require("../controllers/projectController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', projectController_1.getProjects);
router.post('/', auth_1.requireAuth, auth_1.requireAdmin, projectController_1.createProject);
exports.default = router;
