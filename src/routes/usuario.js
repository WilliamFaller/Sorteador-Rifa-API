import express from 'express';
import UsuarioController from '../controllers/usuarioControllers.js'

const router = express.Router();

router
    .get("/usuario", UsuarioController.buscarUsuarios)
    .get("/usuario/:id", UsuarioController.buscarUsuarioPorId)
    .post("/usuario", UsuarioController.cadastrarUsuario)   

export default router;