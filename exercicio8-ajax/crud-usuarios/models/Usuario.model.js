import BD from "./BD.model.js"

export default class Usuario {
    static async cria(usuario = {}){
        await BD.adicionaUsuario(usuario);
    }
    static async lista(){
        const usuarios = await BD.listaUsuarios();

        return usuarios;
    }
    static async edita(usuario = {}){
        await BD.atualizaUsuario(usuario);
    }
    static async remove(id){
        await BD.removeUsuario({ id });
    }
}
