// src/Controllers/userController.ts
import { Hono } from "hono";
import { db } from "../db/db.js";
import { usersTable } from "../db/schema.js";
import { eq } from "drizzle-orm";  // eq stands for equal to — just like SQL's WHERE id = 1



//creating the user 
export const userController = new Hono();
userController.post("/", async (c) => {
  try {
    const body = await c.req.json(); //This line reads the incoming HTTP request body and  converts that JSON into a JavaScript object. Give me the request body as a JavaScript object.
    const insertData = await db.insert(usersTable).values(body).returning(); // insert the user and return the inserted user
    return c.json(insertData); // return the inserted user //Sends a JSON response to the clientt (Postman)
  } catch (err) {
    return c.json({ error: "the email id is already taken" }, 400);
  }
});





//GET  BY ID :
userController.get("/:id", async (c) => {
    const id = Number(c.req.param("id")); // ✅ convert string to number
    const user = await db.select().from(usersTable).where(eq(usersTable.id, id));
    if (user.length === 0) {
      return c.json({ error: "User not found" }, 404);
    }
    return c.json(user[0]);
  });
  

  //Delete
  userController.delete("/:id", async (c) => { 
    const id = Number(c.req.param("id")); // ✅ convert string to number
    const deleted = await db.delete(usersTable).where(eq(usersTable.id, id)).returning(); // ✅ returns the deleted rows
  if (deleted.length === 0) {
    return c.json({error: "User not found" }, 404);
  }
  return c.json({ user: deleted[0] });
});

  