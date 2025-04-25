// src/Controllers/userController.ts
import { Hono } from "hono";


import type { Context } from "hono";
import { getAllUsers, createUser,getUserById, updateUserById, deleteUserById} from "../services/userService.js";
//creating the user 
export const userController = new Hono();
export const createNewUser = async (c: Context) => {
  try {
    const body = await c.req.json(); 
    const insertData = await createUser(body) 
    return c.json(insertData); 
  } catch (err) {
    return c.json({ error: "the email id is already taken" }, 400);
  }
}

//GET ALL USERS :
export const  getAll= async (c: Context) => {
  const users = await getAllUsers(); 
  return c.json(users);
}



//GET  BY ID 
    export const getById = async (c: Context) => {
    const id = Number(c.req.param("id")); // convert string to number
    const user = await getUserById(id);
    if (user.length === 0) {
      return c.json({ error: "User not found" }, 404);
    }
    return c.json(user[0]);
  };
  

// Update user by ID
export const updateById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();
  const updatedUser = await updateUserById(id, body);
  if (updatedUser.length === 0) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(updatedUser[0]);
};

  //Delete by id
 export const deleteById = async (c: Context) => {
    const id = Number(c.req.param("id")); // convert string to number
    const deleted = await deleteUserById(id);
  if (deleted.length === 0) {
    return c.json({error: "User not found" }, 404);
  }
  return c.json({ user: deleted[0] });
};

  