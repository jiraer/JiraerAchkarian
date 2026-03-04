"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const env_1 = require("./env");
exports.corsOptions = {
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true);
        if (origin === env_1.env.CORS_ORIGIN)
            return callback(null, true);
        callback(new Error('Not allowed by CORS'));
    },
    credentials: false
};
