import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema.js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';  // Import fs to read the certificate
dotenv.config(); // Loads the environment variables
const pool = new Pool({

      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT!),
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
      ssl: {   // SSL stands for Secure Sockets Layer.
        rejectUnauthorized: true, 
        ca: fs.readFileSync("./ca.pem").toString(),
      },
});
export const db = drizzle(pool, { schema });
