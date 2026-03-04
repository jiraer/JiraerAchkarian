"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'production', 'test']).default('development'),
    PORT: zod_1.z.coerce.number().default(4000),
    MONGODB_URI: zod_1.z.string().url(),
    JWT_SECRET: zod_1.z.string().min(16),
    JWT_EXPIRES_IN: zod_1.z.string().default('1d'),
    ADMIN_EMAIL: zod_1.z.string().email(),
    ADMIN_PASSWORD: zod_1.z.string().min(8),
    CORS_ORIGIN: zod_1.z.string(),
    GITHUB_USERNAME: zod_1.z.string(),
    GITHUB_REPO: zod_1.z.string().default('JiraerAchkarian'),
    GITHUB_TOKEN: zod_1.z.string().optional(),
    GITHUB_CACHE_TTL_SECONDS: zod_1.z.coerce.number().default(900),
    RATE_LIMIT_WINDOW_MS: zod_1.z.coerce.number().default(60000),
    RATE_LIMIT_MAX: zod_1.z.coerce.number().default(60),
    CONTACT_RATE_LIMIT_MAX: zod_1.z.coerce.number().default(10)
});
exports.env = envSchema.parse(process.env);
