import express from "express";
import LivrosControllers from "../controllers/livrosController.js";

const rotas = express.Router();

rotas.get("/livros", LivrosControllers.livrosAll);
rotas.get("/livros/buscar", LivrosControllers.pesquisa);
rotas.get("/livros/:id", LivrosControllers.buscaLivro);
rotas.post("/livros", LivrosControllers.postLivros);
rotas.put("/livros/:id", LivrosControllers.updateLivros);
rotas.delete("/livros/:id", LivrosControllers.deleteLivro);

export default rotas;
