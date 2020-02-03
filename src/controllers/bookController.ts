import { Request, Response } from 'express';
import Book from '../books';


// - GET - /books # returns allbooks
export let allBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        if(err){
            res.send(err)
        } else {
            res.json({books})
        }
    })
}

// - GET - /book/{1} # returns a book with id of 1
// - POST - /book # inserts a new book into the DB
// - DELETE - /book/{1} # deletes a book with id of 1
// - PUT - /book/{1} # updates a book with id of 1
