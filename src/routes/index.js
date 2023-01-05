import express from "express";
import usuario from "./usuario.js";
import rifa from "./rifa.js";

const routes = (app) => {

        //Rota Padrão
        app.route('/').get((req,res) => {
            res.status(200).send({status: "🟢 - API Funcionando!"})
        })

        //Usar outras rotas
        app.use(
            express.json(),
            usuario,
            rifa,
        //colocar aqui o q for importado dos outros arquivos de rota
        )
    }

export default routes;