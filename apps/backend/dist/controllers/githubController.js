"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeaturedGithub = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const githubService_1 = require("../services/githubService");
exports.getFeaturedGithub = (0, asyncHandler_1.asyncHandler)(async (_req, res) => {
    const data = await (0, githubService_1.getFeaturedGithubProject)();
    res.success(data);
});
