import { createServer } from 'http';
import app from './app';
import { connectDb } from './config/database';
import { env } from './config/env';
import { logger } from './config/logger';
// import { ensureAdminSeeded } from './services/authService'; // remove this

const server = createServer(app);

const start = async () => {
  try {
    await connectDb();
    // await ensureAdminSeeded(); // remove this
    server.listen(env.PORT, () => {
      logger.info(`Backend listening on port ${env.PORT}`);
    });
  } catch (err) {
    logger.error({ err }, 'Failed to start server');
    process.exit(1);
  }
};

start();