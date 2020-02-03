import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import * as bookController from './controllers/bookController';

const app: Application  = express();
const port: any = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', bookController.allBooks)
app.get('/book/:id', bookController.getBook)
app.post('/book', bookController.addBook)
app.delete('/book/:id', bookController.deleteBook)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
