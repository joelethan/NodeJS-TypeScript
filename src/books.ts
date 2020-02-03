import mongoose from 'mongoose';

const uri: string = 'mongodb://localhost:27017/mydb';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err: any) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully Connected to DB');
    }
})

export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
