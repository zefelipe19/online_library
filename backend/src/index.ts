import express, { json } from "express";
import { Request, Response } from "express";
import { booksController } from "./controllers/booksController";

const app = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const data: Array<Object> = await booksController.getAllBooks();
  res.send(data);
});

app.post("/", async (req: Request, res: Response) => {
  const bookObj = req.body;
  const bookData = await booksController.createBook(bookObj);
  res.status(201).send(JSON.stringify(bookData));
});

app.listen(3000, () => {
  console.log(
    "Servidor rodando na porta 3000, \n para acessar use http:localhost:3000"
  );
});
