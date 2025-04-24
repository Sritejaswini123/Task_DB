import { Hono } from "hono";
import { createUser, deleteUserById, getAllUsers, getUserById  , updateUserById, } from "../Controllers/userController.js"

const userRoutes = new Hono();
userRoutes.post("/", createUser);
userRoutes.get("/users", getAllUsers);
userRoutes.get("/users/:id", getUserById);
userRoutes.put("/users/:id", updateUserById);
userRoutes.delete("/users/:id", deleteUserById);

export default userRoutes;
