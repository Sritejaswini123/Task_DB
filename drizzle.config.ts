import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import * as fs from 'fs';  // Import fs to read the certificate
export default defineConfig({
  out: './drizzle', //migrations output folder
  schema: './src/db/schema.ts', //path for the multiple schema files
  dialect: 'postgresql',  //Database dialect, one of postgresql
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync("./ca.pem").toString(),
    },
  },
});
