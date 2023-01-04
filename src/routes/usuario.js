import express from 'express';
import UsuarioController from '../controllers/usuarioControllers.js'

const router = express.Router();

router
    .get("/usuario", UsuarioController.buscarUsuarios)
    .get("/usuario/:id", UsuarioController.buscarUsuarioPorId)
    .post("/usuario", UsuarioController.cadastrarUsuario)
    .put("/usuario/:id", UsuarioController.adicionarNumsRifas)
    .put("/usuario/reset/:id", UsuarioController.resetNumsRifa)
    

export default router;