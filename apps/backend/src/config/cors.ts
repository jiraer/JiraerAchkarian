import { CorsOptions } from 'cors';
  import { env } from './env';
  
  export const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (origin === env.CORS_ORIGIN) return callback(null, true);
      callback(new Error('Not allowed by CORS'));
    },
    credentials: false
  };
  