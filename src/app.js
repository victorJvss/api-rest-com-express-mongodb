import express from "express";
import conexaoDataBase from "./config/db.mongo.js";
import readRoutes from "./routes/index.js";

const bancoDeDados = await conexaoDataBase();

bancoDeDados.on("Error", (erro) => {
    console.error("Falha na conexão!", erro);
});

bancoDeDados.once("open", () => {
    console.log("Conexão estabelecida com sucesso!");
});

const app = express()
readRoutes(app);


app.delete("/livros/:id", (req,res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index,1);
    res.status(200).send("Livro excluido com sucesso!");
})


export default app