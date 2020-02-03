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
            res.send(error)
        } else {
            res.send(book)
        }
    })
}

// - POST - /book # inserts a new book into the DB
export let addBook = (req: Request, res: Response) => {
    let book = new Book(req.body);

    book.save((error: any) => {
        if(error){
            res.send(error)
        } else {
            res.send(book)
        }
    })
}


// - DELETE - /book/{1} # deletes a book with id of 1
export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Successfully deleted the book")
        }
    })
}

// - PUT - /book/{1} # updates a book with id of 1
export let updateBook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err: any, book: any) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                book,
                message: 'Successfully updated book'
            })
        }
    })
}
