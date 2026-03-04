"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = void 0;
const zod_1 = require("zod");
exports.projectSchema = zod_1.z.object({
    title: zod_1.z.string().min(3).max(120),
    slug: zod_1.z.string().min(3).max(120),
    description: zod_1.z.string().min(10).max(4000),
    techStack: zod_1.z.array(zod_1.z.string().min(1)).min(1),
    featured: zod_1.z.boolean().default(false),
    githubUrl: zod_1.z.string().url().optional(),
    liveUrl: zod_1.z.string().url().optional(),
    sortOrder: zod_1.z.number().int().min(0).default(0)
});
