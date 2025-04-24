// src/Controllers/userController.ts
import { Hono } from "hono";
import * as userService from "../services/userService.js";
import type { Context } from "hono";
//creating the user 
export const userController = new Hono();
export const createUser = async (c: Context) => {
  try {
    const body = await c.req.json(); 
    const insertData = await userService.createUser(body) 
    return c.json(insertData); 
  } catch (err) {
    return c.json({ error: "the email id is already taken" }, 400);
  }
}

//GET ALL USERS :
export const  getAllUsers = async (c: Context) => {
  const users = await userService.getAllUsers(); 
  return c.json(users);
}
//GET  BY ID 
    export const getUserById = async (c: Context) => {
    const id = Number(c.req.param("id")); // convert string to number
    const user = await userService.getUserById(id);
    if (user.length === 0) {
      return c.json({ error: "User not found" }, 404);
    }
    return c.json(user[0]);
  };
  

// Update user by ID
export const updateUserById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();
  const updatedUser = await userService.updateUserById(id, body);
  if (updatedUser.length === 0) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(updatedUser[0]);
};

  //Delete by id
 export const deleteUserById = async (c: Context) => {
    const id = Number(c.req.param("id")); // convert string to number
    const deleted = await userService.deleteUserById(id);
  if (deleted.length === 0) {
    return c.json({error: "User not found" }, 404);
  }
  return c.json({ user: deleted[0] });
};

  