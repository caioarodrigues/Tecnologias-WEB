import Usuario from "../models/Usuario.model.js";

export default class UsuarioController {
    static async listaUsuarios(req, res){
        const usuarios = await Usuario.lista();

        return res.json(usuarios);
    }
    static async adicionaUsuario(req, res){
        const { usuario } = req.body;

        await Usuario.cria(usuario);
        return res.sendStatus(201);
    }
    static async editaUsuario(req, res){
        const { usuario } = req.body;

        await Usuario.edita(usuario);
        return res.sendStatus(200);
    }
    static async removeUsuario(req, res){
        const { id } = req.body;

        await Usuario.remove(id);
        return res.sendStatus(204);
    }
}