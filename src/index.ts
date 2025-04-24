// index.ts
import 'dotenv/config';
import { serve } from "@hono/node-server";
import { Hono } from 'hono';
import { userController } from './Controllers/userController.js';

const app = new Hono();
app.route("/", userController); // Use /users route

const PORT = 3000;
console.log(` Server is running at http://localhost:${PORT}`);
serve({
  fetch: app.fetch,
  port: PORT,
});
