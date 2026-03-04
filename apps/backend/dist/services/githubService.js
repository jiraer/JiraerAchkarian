"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeaturedGithubProject = void 0;
const axios_1 = __importDefault(require("axios"));
const node_cache_1 = __importDefault(require("node-cache"));
const env_1 = require("../config/env");
const cache = new node_cache_1.default({ stdTTL: env_1.env.GITHUB_CACHE_TTL_SECONDS });
const getFeaturedGithubProject = async () => {
    const cacheKey = 'github:featured';
    const cached = cache.get(cacheKey);
    if (cached)
        return cached;
    const headers = {
        'User-Agent': 'portfolio-backend'
    };
    if (env_1.env.GITHUB_TOKEN)
        headers.Authorization = `Bearer ${env_1.env.GITHUB_TOKEN}`;
    const repoUrl = `https://api.github.com/repos/${env_1.env.GITHUB_USERNAME}/${env_1.env.GITHUB_REPO}`;
    const readmeUrl = `${repoUrl}/readme`;
    const [repoRes, readmeRes] = await Promise.all([
        axios_1.default.get(repoUrl, { headers }),
        axios_1.default.get(readmeUrl, { headers })
    ]);
    const readmeContent = Buffer.from(readmeRes.data.content, readmeRes.data.encoding).toString('utf8');
    const firstSection = readmeContent.split(/^##\s+/m)[0].trim();
    const payload = {
        name: repoRes.data.name,
        description: repoRes.data.description,
        stars: repoRes.data.stargazers_count,
        lastUpdated: repoRes.data.updated_at,
        htmlUrl: repoRes.data.html_url,
        readmePreview: firstSection
    };
    cache.set(cacheKey, payload);
    return payload;
};
exports.getFeaturedGithubProject = getFeaturedGithubProject;
