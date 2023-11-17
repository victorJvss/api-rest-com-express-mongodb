import {autores} from "../models/Autor.js";

class autoresControllers {
    static async autoresAll(req,res){
        const todosOsautores = await autores.find({})
        res.status(200).json(todosOsautores);
    }

    static async buscaAutor(req,res){
        const autorBuscado = req.params.id
        const autorAchado = await autores.findById(autorBuscado);
        res.status(200).json({message: "autor achado", target:autorAchado});
    }

    static async postAutores(req, res){
        try{
            const adiconaLivors = autores.create(req.body);
            res.status(201).json({message:"autor adicionado com sucesso!", autor: adiconaLivors});
        }catch(erro){
            res.status(500).json(`${erro.message} - falha para adicionar o autor!`);
        }
    }

    static async updateAutores(req,res){
        const autorBuscado = req.params.id
        await autores.findByIdAndUpdate(autorBuscado, req.body);
        res.status(200).json({message:"autor atualizado"});
    }

    static async deleteAutor(req,res){
        const id = req.params.id;
        await autores.findByIdAndDelete(id);
        res.status(200).json({message: "autor deletetado com sucesso!"});
    }

}


export default autoresControllers;
