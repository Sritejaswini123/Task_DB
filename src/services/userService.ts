import { db } from "../db/db.js";
import { usersData } from "../db/schema.js";
import { eq } from "drizzle-orm";

//For creating the user
export const createUser = async(userData: any) => { 
    return await db.insert(usersData).values(userData).returning();
}

//For getting all user
export const getAllUsers = async() => {
    return await db.select().from(usersData);
}
//For getting user by id
export const getUserById = async(id: number) => {
 return await db.select().from(usersData).where(eq(usersData.id, id));
}

//For updating user by id
export const updateUserById = async(id: number, userData: any) => {
    return await db.update(usersData).set(userData).where(eq(usersData.id, id)).returning();

}
//For deleting user by id
export const deleteUserById = async(id: number) => {
    return await db.delete(usersData).where(eq(usersData.id, id)).returning();
}