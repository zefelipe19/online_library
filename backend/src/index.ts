import express from "express";
import { Request, Response } from "express";
import { booksController } from "./controllers/books";

const app = express();

app.get("/", (req: Request, res: Response) => {
  const data: Array<Object> = booksController.getBooks();
  res.send(data);
});

app.listen(3000, () => {
  console.log(
    "Servidor rodando na porta 3000, \n para acessar use http:localhost:3000"
  );
});
