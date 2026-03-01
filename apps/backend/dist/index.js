"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const env_1 = require("./config/env");
const logger_1 = require("./config/logger");
// import { ensureAdminSeeded } from './services/authService'; // remove this
const server = (0, http_1.createServer)(app_1.default);
const start = async () => {
    try {
        await (0, database_1.connectDb)();
        // await ensureAdminSeeded(); // remove this
        server.listen(env_1.env.PORT, () => {
            logger_1.logger.info(`Backend listening on port ${env_1.env.PORT}`);
        });
    }
    catch (err) {
        logger_1.logger.error({ err }, 'Failed to start server');
        process.exit(1);
    }
};
start();
