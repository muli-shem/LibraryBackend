import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import {TIBooks, TSBooks, BooksTable} from "../drizzle/schema";


export const BooksService = async (limit?: number): Promise<TIBooks[] | null> => {
    if(limit){
        return await db.query.BooksTable.findMany({
            limit:limit
        })
    }
    return await db.query.BooksTable.findMany();
}

export const getBookService = async (id: number): Promise<TSBooks | undefined> => {
    return await db.query.BooksTable.findFirst({
        where:eq(BooksTable.id,id)  
    })
}

export const createBookService = async (Books: TIBooks): Promise<TSBooks |any> => {
     await db.insert(BooksTable).values(Books)
     return "Book added successfully"  
    }

    export const updateBookService = async (Books: TIBooks): Promise<TSBooks | any> => {
        if (Books.id === undefined) {
            throw new Error("Book ID is required to update a book");
        }
    
        await db.update(BooksTable)
            .set(Books)
            .where(eq(BooksTable.id, Books.id));
    
        return "Book updated successfully";
    };
export const deleteBookService = async (id: number): Promise<TSBooks |any> => {
    await db.delete(BooksTable).where(eq(BooksTable.id, id))
    return "Book deleted successfully"  
}



