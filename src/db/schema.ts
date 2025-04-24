import { integer, pgTable, varchar , serial} from "drizzle-orm/pg-core";

export const usersData= pgTable("users", { 
  id: serial("id").primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
