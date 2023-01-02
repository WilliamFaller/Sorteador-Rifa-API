import express from 'express';
import UsuarioController from '../controllers/usuarioControllers.js'

const router = express.Router();

router
    .post("/usuario", UsuarioController.cadastrarUsuario)

export default router;