import express from "express";
import rotas from "./livrosRotas.js";
import rotasAutor from "./autoresRotas.js";

const readRoutes = (app) => {
  app.get("/", (req,res) => res.status(200).send("Curso de node.js!"));

  app.use(express.json(), rotas, rotasAutor);
}

export default readRoutes;
