"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getProjects = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const projectValidation_1 = require("../validation/projectValidation");
const Project_1 = require("../models/Project");
const projectService_1 = require("../services/projectService");
const ApiError_1 = require("../utils/ApiError");
exports.getProjects = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const tech = typeof req.query.tech === 'string' ? req.query.tech : undefined;
    const projects = await (0, projectService_1.listProjects)(tech);
    res.success(projects);
});
exports.createProject = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const parsed = projectValidation_1.projectSchema.parse(req.body);
    const existing = await Project_1.Project.findOne({ slug: parsed.slug });
    if (existing) {
        throw new ApiError_1.ApiError(400, 'Project with this slug already exists');
    }
    const project = await Project_1.Project.create(parsed);
    res.success(project);
});
