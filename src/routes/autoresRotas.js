import express from "express";
import autoresControllers from "../controllers/autoresController.js"

const rotasAutor = express.Router();

rotasAutor.get("/autores", autoresControllers.autoresAll);
rotasAutor.get("/autores/:id", autoresControllers.buscaAutor);
rotasAutor.post("/autores", autoresControllers.postAutores);
rotasAutor.put("/autores/:id", autoresControllers.updateAutores);
rotasAutor.delete("/autores/:id", autoresControllers.deleteAutor);

export default rotasAutor;
