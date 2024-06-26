
import { Hono } from "hono";
import {listBooks, getBooks, createBooks,updateBooks, deleteBooks} from "./Books.Controller"

export const booksRouter = new Hono();

booksRouter.get("/Books",listBooks );

booksRouter.get("/Books/:id", getBooks);

booksRouter.post("/Books", createBooks);

booksRouter.put("/Books/:id", updateBooks);

booksRouter.delete("/Books/:id", deleteBooks);
