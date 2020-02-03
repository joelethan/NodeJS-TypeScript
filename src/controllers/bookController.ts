import { Request, Response } from 'express';
import Book from '../books';


// - GET - /books # returns allbooks
export let allBooks = (req: Request, res: Response) => {
    Book.find((err: any, books: any) => {
        if(err){
            res.send(err)
        } else {
            res.json({books})
        }
    })
}

// - GET - /book/{1} # returns a book with id of 1
export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (error: any, book: any) => {
        if (error) {
            res.json({error})
        } else {
            res.json({book})
        }
    })
}

// - POST - /book # inserts a new book into the DB
// - DELETE - /book/{1} # deletes a book with id of 1
// - PUT - /book/{1} # updates a book with id of 1
