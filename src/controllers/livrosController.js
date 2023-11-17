import livro from "../models/Livro.js";
import { autores } from "../models/Autor.js";

class LivrosControllers {
    static async livrosAll(req,res){
        const todosOsLivros = await livro.find({})
        res.status(200).json(todosOsLivros);
    }

    static async buscaLivro(req,res){
        const livroBuscado = req.params.id
        const livroAchado = await livro.findById(livroBuscado);
        res.status(200).json({message: "Livro achado", target:livroAchado});
    }

    static async postLivros(req, res){
        const novoLivro = req.body
        try{
            const autorEncontrado = await autores.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor:{...autorEncontrado._doc}};
            const criarLivro = await livro.create(livroCompleto);
            res.status(201).json({message:"Livro adicionado com sucesso!", livro: criarLivro});
        }catch(erro){
            res.status(500).json(`${erro.message} - falha para adicionar o livro!`);
        }
    }

    static async updateLivros(req,res){
        const livroBuscado = req.params.id
        await livro.findByIdAndUpdate(livroBuscado, req.body);
        res.status(200).json({message:"Livro atualizado"});
    }

    static async deleteLivro(req,res){
        const id = req.params.id;
        await livro.findByIdAndDelete(id);
        res.status(200).json({message: "Livro deletetado com sucesso!"});
    }

    static async pesquisa(req,res){
        const pesquisa = req.query.editora
        try{
            const editora = await livro.find({editora:pesquisa});
            res.status(200).json(editora);
        }catch(erro){

        }
    }

}


export default LivrosControllers;
