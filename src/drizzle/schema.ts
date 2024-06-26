
import { primaryKey, serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { setUncaughtExceptionCaptureCallback } from "process";

export const BooksTable = pgTable('Books',{
    id: serial("id").primaryKey(),
    Title: varchar("Title", {length:400}).notNull(),
    Author: varchar("Author", {length:400}).notNull(),
    Year: varchar("Year", {length:400}).notNull(),  
})





export type TIBooks = typeof BooksTable.$inferInsert;
export type TSBooks = typeof BooksTable.$inferSelect;