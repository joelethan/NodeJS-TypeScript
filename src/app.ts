import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

const app: Application  = express();
const port: any = process.env.PORT || 5000;

console.log(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    console.log(port);
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
