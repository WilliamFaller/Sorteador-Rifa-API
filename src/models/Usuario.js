import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {id:{type: String},
    nome:{type: String},
    email:{type: String},
    numsRifa:{type: Array},
    }
)

const usuario = mongoose.model('cadastro', usuarioSchema);

export default usuario;