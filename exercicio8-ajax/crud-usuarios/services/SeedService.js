import BD from "../models/BD.model.js"

const usuarios = [
    {
		email: "email@email.com",
		first_name: "jao",
		last_name: "silva",
		avatar: "avatar1"
	},
    {
		email: "ramimundo@email.com",
		first_name: "raimundo",
		last_name: "joao",
		avatar: "avatar2"
	},
    {
		email: "andre@email.com",
		first_name: "andre",
		last_name: "silvestre",
		avatar: "avatar3"
	},
    {
		email: "francisco@email.com",
		first_name: "francisco",
		last_name: "aragão",
		avatar: "avata5"
	},
    {
		email: "judite@email.com",
		first_name: "judite",
		last_name: "loiola",
		avatar: "avatar5"
	},
]

export default class SeedService {
    static async preencher(){
        usuarios.forEach(async (usuario) => {
            await BD.adicionaUsuario(usuario);
        });
    }
}