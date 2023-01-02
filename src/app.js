import db from './config/dbconnect.js'
import express from 'express';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão!'));
db.once("open", () => {
    console.log('🟢 Conexão com o Banco feita com Sucesso!');
})

const app = express();

app.use(express.json())

routes(app);

export default app;