import express from 'express';
import RifaController from '../controllers/rifaController.js'

const router = express.Router();

router
    .get("/rifa", RifaController.consultarRifas)
    .get("/rifa/:nome", RifaController.consultarRifa)
    .post("/rifa", RifaController.cadastrarRifa)   
    .put("/rifa/:id", RifaController.adicionarNumsRifas)   
    .put("/rifa/reset/:id", RifaController.resetNumsRifa)   

export default router;
