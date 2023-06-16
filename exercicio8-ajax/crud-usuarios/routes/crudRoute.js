import { Router } from "express";
import UsuarioController from "../controllers/Usuario.controller.js";

const crudRouter = Router();

crudRouter.get('/', UsuarioController.listaUsuarios);
crudRouter.post('/', UsuarioController.adicionaUsuario);
crudRouter.put('/', UsuarioController.editaUsuario);
crudRouter.delete('/', UsuarioController.removeUsuario);

export default crudRouter;