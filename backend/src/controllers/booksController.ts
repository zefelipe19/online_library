import { Book, booksModel } from "../models/booksModel";

const getAllBooks = async () => {
  return await booksModel.getAllBooks();
};

const createBook = async (book: Book) => {
  return await booksModel.createBook(book);
};

export const booksController = {
  getAllBooks,
  createBook,
};
