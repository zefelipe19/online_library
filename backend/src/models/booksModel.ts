const books = [
  {
    id: 1,
    title: "Olá from Express/Typescript",
    author: "Zefelipe19",
  },
];

export type Book = {
  id: number;
  title: string;
  author: string;
};

const getAllBooks = async () => {
  return books;
};

const createBook = async (book: Book) => {
  books.push(book);
  return book;
};

export const booksModel = {
  getAllBooks,
  createBook,
};
