import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

const app: Application  = express();
const port: any = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
