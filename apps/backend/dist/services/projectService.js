"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjects = void 0;
const Project_1 = require("../models/Project");
const listProjects = async (tech) => {
    const query = {};
    if (tech)
        query.techStack = tech;
    const projects = await Project_1.Project.find(query).sort({ featured: -1, sortOrder: 1 });
    return projects;
};
exports.listProjects = listProjects;
