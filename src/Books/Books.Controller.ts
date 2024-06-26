import { Context } from "hono";
import { BooksService, getBookService, createBookService,  updateBookService , deleteBookService } from "./Books.Service";

export const listBooks = async (c:Context) =>{
    try{

        const limit = Number(c.req.query('limit'))
        const data = await BooksService (limit);
        if (data === null || data.length==0){
            return c.text("User not found");

        }
        return c.json(data, 200);

    }catch(error:any){
        return c.json({error: error?.message}, 400);
    }
}

export const getBooks = async (c:Context) =>{
    try {
        const Books = await c.req.json();
        const createdBook = await createBookService(Books);


        if (!createdBook) return c.text("Book not created", 404);
        return c.json({ msg: createdBook }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
export const updateBooks = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const Books = await c.req.json();
    try {
        // search for the user
        const searchedBooks = await getBookService(id);
        if (searchedBooks == undefined) return c.text("User not found", 404);
        // get the data and update it
        const res = await updateBookService(Books);
        // return a success message
        if (!res) return c.text("User not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
export const getBook = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const Books = await getBookService(id);
    if (Books == undefined) {
        return c.text("User not found", 404);
    }
    return c.json(Books, 200);
}
export const createBooks = async (c: Context) => {
    try {
        const Books = await c.req.json();
        const createdBook = await createBookService(Books);


        if (!createdBook) return c.text("User not created", 404);
        return c.json({ msg: createdBook }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
export const deleteBooks = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the user
        const Books = await getBookService(id);
        if (Books == undefined) return c.text("User not found", 404);
        //deleting the user
        const res = await deleteBookService(id);
        if (!res) return c.text("User not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}