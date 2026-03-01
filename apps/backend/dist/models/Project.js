"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    techStack: [{ type: String, required: true }],
    featured: { type: Boolean, default: false },
    githubUrl: { type: String },
    liveUrl: { type: String },
    sortOrder: { type: Number, default: 0 }
}, { timestamps: true });
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
