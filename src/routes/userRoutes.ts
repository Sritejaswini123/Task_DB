import { Hono } from "hono";
import { createNewUser, deleteById, getAll, getById  , updateById, } from "../Controllers/userController.js"

const userRoutes = new Hono();
userRoutes.post("/", createNewUser);
userRoutes.get("/users", getAll);
userRoutes.get("/users/:id", getById);
userRoutes.put("/users/:id", updateById);
userRoutes.delete("/users/:id", deleteById);

export default userRoutes;
